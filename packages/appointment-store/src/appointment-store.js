import seed from './appointments-seed.json';

/**
 * Persistente Termin-Ablage für den Angular-Kalender und den
 * Datepicker-Microservice.
 *
 * Zwei-Ebenen-Persistenz:
 *  1. Im Dev-/Preview-Modus schreibt der Vite-Endpoint (POST /api/appointments)
 *     die Termine dauerhaft in appointments-data.json auf der Platte. Damit
 *     überleben selbst angelegte Termine Cache-Reset, Browserwechsel und
 *     Server-Neustarts.
 *  2. Zusätzlich (und als Fallback auf statischem Hosting wie GitHub Pages, wo
 *     der Endpoint fehlt) werden die Daten in localStorage gehalten. Beim ersten
 *     Start wird aus appointments-seed.json (JSON) initialisiert.
 */

export const STORAGE_KEY = 'onefe-appointments-v1';
const CHANNEL_NAME = 'onefe-appointments';

/**
 * Berechnet die API-URL für Server-Persistenz. Versucht verschiedene Möglichkeiten:
 * 1. Mit BASE_URL von Vite (z.B. /one_frontend/)
 * 2. Fallback auf /api/appointments
 * Die URL wird in vite.config.js von der appointmentsApiPlugin() Middleware gehandelt.
 */
const API_URL = (() => {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) {
      const base = import.meta.env.BASE_URL;
      const path = `${base}api/appointments`.replace(/\/{2,}/g, '/');
      return path;
    }
  } catch {}
  return '/api/appointments';
})();

export const appointmentStatuses = [
  { value: 'recommended', label: 'Empfohlen' },
  { value: 'available', label: 'Verfügbar' },
  { value: 'limited', label: 'Begrenzt' },
  { value: 'booked', label: 'Ausgebucht' }
];

const listeners = new Set();
let memoryFallback = null;
let channel = null;
let serverAvailable = true;

function getStorage() {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage;
    }
  } catch {
    // localStorage kann in restriktiven Kontexten werfen.
  }
  return null;
}

function getChannel() {
  if (channel) return channel;
  try {
    if (typeof BroadcastChannel !== 'undefined') {
      channel = new BroadcastChannel(CHANNEL_NAME);
      channel.onmessage = (event) => {
        if (event?.data?.type === 'appointments-changed') {
          notify(false);
        }
      };
    }
  } catch {
    channel = null;
  }
  return channel;
}

function seedAppointments() {
  return (seed.appointments || []).map((entry) => ({ ...entry }));
}

function readRaw() {
  const storage = getStorage();
  if (!storage) {
    if (!memoryFallback || memoryFallback.length === 0) {
      memoryFallback = seedAppointments();
    }
    return memoryFallback;
  }

  const stored = storage.getItem(STORAGE_KEY);
  if (!stored) {
    const seeded = seedAppointments();
    storage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }

  try {
    const parsed = JSON.parse(stored);
    // Leeres Array = möglicher Korruptionszustand (z.B. durch vorherigen Bug);
    // in diesem Fall Seed-Daten zurückgeben aber localStorage NICHT überschreiben
    // (damit explizit gelöschte Daten durch Neustart des Servers wiederhergestellt werden).
    if (!Array.isArray(parsed)) {
      return seedAppointments();
    }
    return parsed;
  } catch {
    return seedAppointments();
  }
}

function writeRaw(list, broadcast = true) {
  const storage = getStorage();
  if (storage) {
    storage.setItem(STORAGE_KEY, JSON.stringify(list));
  } else {
    memoryFallback = list;
  }
  pushToServer(list);
  notify(broadcast);
}

/**
 * Schreibt die aktuelle Terminliste in die JSON-Datei (Dev-/Preview-Endpoint).
 * Fehler werden geschluckt: auf statischem Hosting existiert der Endpoint nicht,
 * dort bleibt localStorage die einzige Persistenz.
 */
function pushToServer(list) {
  if (typeof fetch === 'undefined' || !serverAvailable) {
    return;
  }
  try {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(list)
    }).then((res) => {
      if (!res.ok) {
        serverAvailable = false;
      }
    }).catch(() => {
      serverAvailable = false;
    });
  } catch {
    serverAvailable = false;
  }
}

/**
 * Lädt die dauerhaft gespeicherten Termine aus der JSON-Datei und aktualisiert
 * den lokalen Cache. Wird beim Start aufgerufen, damit auch nach Cache-Reset,
 * Browserwechsel oder Server-Neustart die echten Termine erscheinen.
 * Bei Fehler gibt false zurück, aber die Seed-Daten bleiben verfügbar.
 */
export function syncFromServer() {
  if (typeof fetch === 'undefined') {
    return Promise.resolve(false);
  }
  return fetch(API_URL, { headers: { Accept: 'application/json' }, cache: 'no-store' })
    .then((response) => {
      if (!response.ok) {
        serverAvailable = false;
        return null;
      }
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data)) {
        serverAvailable = false;
        return false;
      }
      // Leeres Array vom Server = Endpoint vorhanden aber keine Daten; bleibt verfügbar
      if (data.length === 0) {
        return false;
      }
      const storage = getStorage();
      if (storage) {
        storage.setItem(STORAGE_KEY, JSON.stringify(data));
      } else {
        memoryFallback = data;
      }
      // Listener informieren (broadcast=true damit andere Frames/Tabs es sehen)
      notify(true);
      return true;
    })
    .catch(() => {
      serverAvailable = false;
      return false;
    });
}

function notify(broadcast = true) {
  if (broadcast) {
    const bus = getChannel();
    try {
      bus?.postMessage({ type: 'appointments-changed' });
    } catch {
      // ignore broadcast errors
    }
  }
  listeners.forEach((listener) => {
    try {
      listener();
    } catch {
      // ignore listener errors
    }
  });
}

function sortAppointments(list) {
  return [...list].sort((a, b) => {
    if (a.date === b.date) {
      return (a.timeLabel || '').localeCompare(b.timeLabel || '');
    }
    return (a.date || '').localeCompare(b.date || '');
  });
}

/**
 * Registriert einen Callback, der bei jeder Änderung (auch aus anderen Tabs
 * oder Frames) aufgerufen wird. Gibt eine Unsubscribe-Funktion zurück.
 */
export function onChange(listener) {
  listeners.add(listener);
  getChannel();

  const storageListener = (event) => {
    if (event.key === STORAGE_KEY) {
      notify(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', storageListener);
  }

  return () => {
    listeners.delete(listener);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', storageListener);
    }
  };
}

export function listAppointments() {
  return sortAppointments(readRaw());
}

export function getAppointment(id) {
  return readRaw().find((entry) => entry.id === id) || null;
}

export function listAppointmentsForDate(dateIso) {
  return sortAppointments(readRaw().filter((entry) => entry.date === dateIso));
}

export function isSlotFree(appointment) {
  if (!appointment) return false;
  if (appointment.status === 'booked') return false;
  const capacity = Number(appointment.capacity ?? 0);
  const booked = Number(appointment.bookedCount ?? 0);
  return capacity <= 0 ? true : booked < capacity;
}

/**
 * Freie (buchbare) Slots für ein Datum – Datenquelle für den Datepicker.
 */
export function getFreeSlotsForDate(dateIso) {
  return listAppointmentsForDate(dateIso).filter(isSlotFree);
}

export function getDatesWithAppointments() {
  return new Set(readRaw().map((entry) => entry.date));
}

function generateId(appointment) {
  const datePart = (appointment.date || 'na').replace(/-/g, '');
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `APT-${datePart}-${random}`;
}

export function createAppointment(data) {
  const list = readRaw();
  const appointment = {
    id: data.id || generateId(data),
    date: data.date || '',
    timeLabel: data.timeLabel || '',
    title: data.title || 'Neuer Termin',
    location: data.location || '',
    capacity: Number(data.capacity ?? 1),
    bookedCount: Number(data.bookedCount ?? 0),
    status: data.status || 'available',
    durationMinutes: Number(data.durationMinutes ?? 60),
    notes: data.notes || ''
  };
  writeRaw([...list, appointment]);
  return appointment;
}

export function updateAppointment(id, patch) {
  const list = readRaw();
  let updated = null;
  const next = list.map((entry) => {
    if (entry.id !== id) return entry;
    updated = {
      ...entry,
      ...patch,
      capacity: patch.capacity !== undefined ? Number(patch.capacity) : entry.capacity,
      bookedCount: patch.bookedCount !== undefined ? Number(patch.bookedCount) : entry.bookedCount,
      durationMinutes:
        patch.durationMinutes !== undefined ? Number(patch.durationMinutes) : entry.durationMinutes
    };
    return updated;
  });
  writeRaw(next);
  return updated;
}

export function deleteAppointment(id) {
  const list = readRaw();
  writeRaw(list.filter((entry) => entry.id !== id));
}

export function resetToSeed() {
  writeRaw(seedAppointments());
}

/**
 * Einmalige Migration: Alte Daten im localStorage-Format (vor appointment-store
 * Refactoring) erkennen und löschen. Das alte Format hatte ein `capacityLabel`-Feld
 * (String) statt `capacity` + `bookedCount` (Zahlen). Wenn veraltete Daten gefunden
 * werden, wird localStorage geleert – syncFromServer() lädt dann sofort die
 * aktuellen Daten aus der JSON-Datei.
 */
(function migrateStaleStorage() {
  try {
    const storage = typeof window !== 'undefined' && window.localStorage;
    if (!storage) return;
    const stored = storage.getItem(STORAGE_KEY);
    if (!stored) return;
    const data = JSON.parse(stored);
    if (!Array.isArray(data) || data.length === 0) return;
    // Altes Format erkennen: hat capacityLabel (String) aber kein capacity (Zahl)
    const isStale = data.some(
      (e) => typeof e.capacityLabel === 'string' && e.capacity === undefined
    );
    if (isStale) {
      storage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Fehler ignorieren – localStorage-Zugriff kann in restriktiven Kontexten scheitern
  }
})();

// Beim Import einmalig aus der dauerhaften JSON-Datei hydratisieren (Dev/Preview).
// Auf statischem Hosting ohne Endpoint bleibt es beim localStorage-Fallback.
if (typeof window !== 'undefined') {
  syncFromServer();
}
