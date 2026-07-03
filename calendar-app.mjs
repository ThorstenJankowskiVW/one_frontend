import 'reflect-metadata';
import 'zone.js';
import { defineCustomElements } from '@group-ui/group-ui/dist/loader/index.es2017.js';
import './calendar-app.css?v=calendar-crud-1';
import '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, VERSION } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  appointmentStatuses,
  createAppointment,
  deleteAppointment,
  listAppointments,
  onChange,
  resetToSeed,
  syncFromServer,
  updateAppointment
} from './packages/appointment-store/src/appointment-store.js';

defineCustomElements().catch((error) => {
  console.error('GroupUI custom elements failed to load', error);
});

const WEEKDAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
const MONTHS = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
];

function pad(value) {
  return String(value).padStart(2, '0');
}

function toIso(year, monthIndex, day) {
  return `${year}-${pad(monthIndex + 1)}-${pad(day)}`;
}

function todayIso() {
  const now = new Date();
  return toIso(now.getFullYear(), now.getMonth(), now.getDate());
}

function emptyForm(dateIso = '') {
  return {
    id: '',
    date: dateIso,
    timeLabel: '',
    title: '',
    location: 'Berlin Alexanderplatz',
    capacity: 2,
    bookedCount: 0,
    status: 'available',
    durationMinutes: 60,
    notes: ''
  };
}

class CalendarAppComponent {
  angularVersion = VERSION.full;
  statuses = appointmentStatuses;
  weekdays = WEEKDAYS;

  today = todayIso();
  viewYear = new Date().getFullYear();
  viewMonth = new Date().getMonth();

  appointments = [];
  weeks = [];

  form = emptyForm();
  isEditing = false;
  isFormOpen = false;
  message = '';
  formError = '';

  unsubscribe = null;
  angularZone = null;

  constructor() {
    // Wenn das Seed-Datum in der Zukunft liegt, direkt auf den Seed-Monat springen,
    // damit die Demo-Termine sofort sichtbar sind.
    const all = listAppointments();
    if (all.length) {
      const [year, month] = all[0].date.split('-').map(Number);
      if (Number.isFinite(year) && Number.isFinite(month)) {
        this.viewYear = year;
        this.viewMonth = month - 1;
      }
    }
    this.reload();
  }

  ngOnInit() {
    this.angularZone = typeof Zone !== 'undefined' ? Zone.current : null;

    // Sofortiger synchroner Refresh – stellt sicher dass appointments nach dem
    // Angular-Bootstrap aktuell sind (ngOnInit läuft nach dem Konstruktor).
    this.reload();

    this.unsubscribe = onChange(() => {
      if (this.angularZone) {
        this.angularZone.run(() => this.reload());
      } else {
        this.reload();
      }
    });

    // Async: dauerhaft gespeicherte Termine vom Server holen, dann nochmal rendern.
    syncFromServer().then(() => {
      if (this.angularZone) {
        this.angularZone.run(() => this.reload());
      } else {
        this.reload();
      }
    });
  }

  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  reload() {
    this.appointments = listAppointments();
    this.weeks = this.buildMonthGrid();
  }

  get monthLabel() {
    return `${MONTHS[this.viewMonth]} ${this.viewYear}`;
  }

  get totalCount() {
    return this.appointments.length;
  }

  buildMonthGrid() {
    const firstOfMonth = new Date(this.viewYear, this.viewMonth, 1);
    // getDay(): 0=So..6=Sa -> auf Montag-Start umrechnen (Mo=0..So=6)
    const startOffset = (firstOfMonth.getDay() + 6) % 7;
    const gridStart = new Date(this.viewYear, this.viewMonth, 1 - startOffset);

    const byDate = new Map();
    this.appointments.forEach((entry) => {
      if (!byDate.has(entry.date)) {
        byDate.set(entry.date, []);
      }
      byDate.get(entry.date).push(entry);
    });

    const weeks = [];
    for (let week = 0; week < 6; week += 1) {
      const days = [];
      for (let day = 0; day < 7; day += 1) {
        const current = new Date(gridStart);
        current.setDate(gridStart.getDate() + week * 7 + day);
        const iso = toIso(current.getFullYear(), current.getMonth(), current.getDate());
        days.push({
          iso,
          dayNumber: current.getDate(),
          inMonth: current.getMonth() === this.viewMonth,
          isToday: iso === this.today,
          appointments: byDate.get(iso) || []
        });
      }
      weeks.push(days);
    }
    return weeks;
  }

  previousMonth() {
    if (this.viewMonth === 0) {
      this.viewMonth = 11;
      this.viewYear -= 1;
    } else {
      this.viewMonth -= 1;
    }
    this.reload();
  }

  nextMonth() {
    if (this.viewMonth === 11) {
      this.viewMonth = 0;
      this.viewYear += 1;
    } else {
      this.viewMonth += 1;
    }
    this.reload();
  }

  goToToday() {
    const now = new Date();
    this.viewYear = now.getFullYear();
    this.viewMonth = now.getMonth();
    this.reload();
  }

  openCreate(dateIso) {
    this.form = emptyForm(dateIso);
    this.isEditing = false;
    this.isFormOpen = true;
    this.formError = '';
    this.message = '';
  }

  openEdit(appointment, event) {
    if (event) {
      event.stopPropagation();
    }
    this.form = { ...appointment };
    this.isEditing = true;
    this.isFormOpen = true;
    this.formError = '';
    this.message = '';
  }

  onField(field, event) {
    const target = event?.target || {};
    const value = target.value !== undefined ? target.value : event?.detail;
    this.form = { ...this.form, [field]: value };
  }

  save() {
    if (!this.form.date) {
      this.formError = 'Bitte ein Datum angeben.';
      return;
    }
    if (!this.form.title || !String(this.form.title).trim()) {
      this.formError = 'Bitte einen Titel angeben.';
      return;
    }

    if (this.isEditing && this.form.id) {
      updateAppointment(this.form.id, this.form);
      this.message = 'Termin aktualisiert.';
    } else {
      createAppointment(this.form);
      this.message = 'Termin angelegt.';
    }

    this.isFormOpen = false;
    this.isEditing = false;
    this.formError = '';
  }

  remove() {
    if (this.isEditing && this.form.id) {
      deleteAppointment(this.form.id);
      this.message = 'Termin gelöscht.';
    }
    this.isFormOpen = false;
    this.isEditing = false;
  }

  cancel() {
    this.isFormOpen = false;
    this.isEditing = false;
    this.formError = '';
  }

  resetDemoData() {
    resetToSeed();
    this.message = 'Demo-Daten zurückgesetzt.';
  }

  statusLabel(value) {
    return this.statuses.find((status) => status.value === value)?.label || value;
  }
}

Component({
  selector: 'calendar-app-root',
  standalone: false,
  template: `
    <main class="calendar-page">
      <section class="calendar-app-shell">
        <groupui-card padding="24px" class="calendar-hero">
          <div class="calendar-toolbar">
            <div>
              <groupui-tag>Angular {{ angularVersion }} · Werkstatt-Kalender</groupui-tag>
              <groupui-headline heading="h1">Termine verwalten</groupui-headline>
              <groupui-text>{{ totalCount }} Termine gespeichert · lokale JSON-Persistenz</groupui-text>
            </div>
            <div class="calendar-month-nav">
              <groupui-button variant="secondary" type="button" (click)="previousMonth()" aria-label="Vorheriger Monat">‹</groupui-button>
              <groupui-headline heading="h3" class="calendar-month-label">{{ monthLabel }}</groupui-headline>
              <groupui-button variant="secondary" type="button" (click)="nextMonth()" aria-label="Nächster Monat">›</groupui-button>
              <groupui-button variant="secondary" type="button" (click)="goToToday()">Heute</groupui-button>
              <groupui-button type="button" (click)="openCreate(today)">Neuer Termin</groupui-button>
            </div>
          </div>
        </groupui-card>

        <groupui-card padding="24px" class="calendar-board">
          <div class="calendar-grid" role="grid" aria-label="Monatskalender">
            <div class="calendar-weekday" *ngFor="let weekday of weekdays">{{ weekday }}</div>
          </div>
          <div class="calendar-grid" *ngFor="let week of weeks">
            <div
              class="calendar-cell"
              *ngFor="let day of week"
              [class.is-outside]="!day.inMonth"
              [class.is-today]="day.isToday"
              (click)="openCreate(day.iso)"
            >
              <span class="calendar-cell-daynum">{{ day.dayNumber }}</span>
              <span class="calendar-cell-add" aria-hidden="true">+</span>
              <button
                type="button"
                class="calendar-appointment status-{{ appointment.status }}"
                *ngFor="let appointment of day.appointments"
                [attr.data-appointment-id]="appointment.id"
                (click)="openEdit(appointment, $event)"
              >
                <span class="apt-time">{{ appointment.timeLabel }}</span> {{ appointment.title }}
              </button>
            </div>
          </div>

          <div class="calendar-legend">
            <span class="calendar-legend-item"><span class="calendar-legend-swatch" style="background:#dcfce7"></span> Empfohlen</span>
            <span class="calendar-legend-item"><span class="calendar-legend-swatch" style="background:#e0f2fe"></span> Verfügbar</span>
            <span class="calendar-legend-item"><span class="calendar-legend-swatch" style="background:#fef3c7"></span> Begrenzt</span>
            <span class="calendar-legend-item"><span class="calendar-legend-swatch" style="background:#fee2e2"></span> Ausgebucht</span>
          </div>

          <groupui-text *ngIf="message" class="calendar-message">{{ message }}</groupui-text>
        </groupui-card>

        <groupui-card padding="24px" *ngIf="isFormOpen" class="calendar-form-card">
          <groupui-tag>{{ isEditing ? 'Termin bearbeiten' : 'Neuer Termin' }}</groupui-tag>
          <groupui-headline heading="h3">{{ isEditing ? form.title : 'Termin anlegen' }}</groupui-headline>

          <div class="calendar-form-grid">
            <groupui-input class="full-width" [value]="form.title" (input)="onField('title', $event)" (groupuiChange)="onField('title', $event)">
              <span slot="label">Titel</span>
            </groupui-input>
            <groupui-input type="date" [value]="form.date" (input)="onField('date', $event)" (groupuiChange)="onField('date', $event)">
              <span slot="label">Datum</span>
            </groupui-input>
            <groupui-input type="time" [value]="form.timeLabel" (input)="onField('timeLabel', $event)" (groupuiChange)="onField('timeLabel', $event)">
              <span slot="label">Uhrzeit</span>
            </groupui-input>
            <groupui-input [value]="form.location" (input)="onField('location', $event)" (groupuiChange)="onField('location', $event)">
              <span slot="label">Werkstatt / Ort</span>
            </groupui-input>
            <groupui-select [value]="form.status" (groupuiChange)="onField('status', $event)" (change)="onField('status', $event)">
              <span slot="label">Status</span>
              <groupui-select-option *ngFor="let status of statuses" [value]="status.value">{{ status.label }}</groupui-select-option>
            </groupui-select>
            <groupui-input type="number" [value]="form.capacity" (input)="onField('capacity', $event)" (groupuiChange)="onField('capacity', $event)">
              <span slot="label">Kapazität (Plätze)</span>
            </groupui-input>
            <groupui-input type="number" [value]="form.bookedCount" (input)="onField('bookedCount', $event)" (groupuiChange)="onField('bookedCount', $event)">
              <span slot="label">Belegt</span>
            </groupui-input>
            <groupui-input type="number" [value]="form.durationMinutes" (input)="onField('durationMinutes', $event)" (groupuiChange)="onField('durationMinutes', $event)">
              <span slot="label">Dauer (Minuten)</span>
            </groupui-input>
            <groupui-input class="full-width" [value]="form.notes" (input)="onField('notes', $event)" (groupuiChange)="onField('notes', $event)">
              <span slot="label">Notiz</span>
            </groupui-input>
          </div>

          <groupui-text *ngIf="formError" class="transfer-error">{{ formError }}</groupui-text>

          <div class="calendar-form-actions">
            <groupui-button type="button" (click)="save()">{{ isEditing ? 'Änderungen speichern' : 'Termin anlegen' }}</groupui-button>
            <groupui-button variant="secondary" type="button" (click)="cancel()">Abbrechen</groupui-button>
            <span class="spacer"></span>
            <groupui-button *ngIf="isEditing" variant="secondary" type="button" (click)="remove()">Löschen</groupui-button>
          </div>
        </groupui-card>

        <groupui-card padding="24px" class="calendar-admin">
          <groupui-text>Alle Änderungen werden lokal im Browser gespeichert und mit dem Datepicker der Shell geteilt.</groupui-text>
          <div class="calendar-form-actions">
            <groupui-button variant="secondary" type="button" (click)="resetDemoData()">Demo-Daten zurücksetzen</groupui-button>
          </div>
        </groupui-card>
      </section>
    </main>
  `
})(CalendarAppComponent);

class AppModule {}

NgModule({
  declarations: [CalendarAppComponent],
  imports: [BrowserModule],
  bootstrap: [CalendarAppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})(AppModule);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((error) => console.error(error));
