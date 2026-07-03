import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'node:path'
import fs from 'node:fs'

/**
 * Dev-/Preview-Endpoint, der Termine dauerhaft in eine JSON-Datei auf der Platte
 * schreibt (appointments-data.json). Damit überleben selbst angelegte Termine
 * Cache-Reset, Browserwechsel und Server-Neustarts.
 *
 * Bewusste Grenze: Dies ist eine reine Entwicklungs-Convenience. Auf statischem
 * Hosting (GitHub Pages) existiert dieser Endpoint nicht – der Store fällt dort
 * automatisch auf localStorage zurück.
 */
function appointmentsApiPlugin() {
  const dataFile = resolve(import.meta.dirname, 'packages/appointment-store/src/appointments-data.json')
  const seedFile = resolve(import.meta.dirname, 'packages/appointment-store/src/appointments-seed.json')

  function readData() {
    try {
      if (fs.existsSync(dataFile)) {
        return fs.readFileSync(dataFile, 'utf-8')
      }
    } catch {
      // Datei nicht lesbar -> auf Seed zurückfallen
    }
    try {
      const seed = JSON.parse(fs.readFileSync(seedFile, 'utf-8'))
      const arr = Array.isArray(seed.appointments) ? seed.appointments : []
      fs.writeFileSync(dataFile, JSON.stringify(arr, null, 2))
      return JSON.stringify(arr)
    } catch {
      return '[]'
    }
  }

  const handler = (req, res, next) => {
    const url = (req.url || '').split('?')[0];
    // Handle /api/appointments oder /one_frontend/api/appointments
    const isAppointmentsApi = url.endsWith('/api/appointments');
    if (!isAppointmentsApi) {
      return next();
    }

    // CORS für iframes
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

    if (req.method === 'OPTIONS') {
      res.statusCode = 204;
      res.end();
      return;
    }

    if (req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-store');
      res.end(readData());
      return;
    }

    if (req.method === 'POST' || req.method === 'PUT') {
      const chunks = [];
      req.on('data', (chunk) => {
        chunks.push(chunk);
        const total = chunks.reduce((s, c) => s + c.length, 0);
        if (total > 1_000_000) {
          req.destroy();
        }
      });
      req.on('end', () => {
        try {
          const body = Buffer.concat(chunks).toString('utf-8');
          const parsed = JSON.parse(body);
          const arr = Array.isArray(parsed)
            ? parsed
            : (Array.isArray(parsed.appointments) ? parsed.appointments : null);
          if (!arr) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: false, error: 'Erwarte ein Array von Terminen.' }));
            return;
          }
          fs.writeFileSync(dataFile, JSON.stringify(arr, null, 2));
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, count: arr.length }));
        } catch (error) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: false, error: String(error) }));
        }
      });
      req.on('error', () => {
        res.statusCode = 500;
        res.end(JSON.stringify({ ok: false, error: 'Request error' }));
      });
      return;
    }

    next();
  };

  return {
    name: 'appointments-api',
    configureServer(server) {
      server.middlewares.use(handler)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler)
    }
  }
}

export default defineConfig({
  base: '/one_frontend/',
  plugins: [svelte(), appointmentsApiPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        calendarTarget: resolve(import.meta.dirname, 'calendar-target.html'),
        calendarApp: resolve(import.meta.dirname, 'calendar-app.html'),
        linkedHost: resolve(import.meta.dirname, 'linked-host.html'),
        linkedTarget: resolve(import.meta.dirname, 'linked-target.html'),
        reactTarget: resolve(import.meta.dirname, 'target-react.html'),
        svelteTarget: resolve(import.meta.dirname, 'target-svelte.html'),
        webComponentsTarget: resolve(import.meta.dirname, 'target-stencil.html')
      }
    }
  }
})
