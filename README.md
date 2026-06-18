# One Frontend Demonstrator

Multi-Frontend-Demonstrator mit gemeinsamer UX, Context Passing und mehreren Integrationsformen.

## Entwicklung

```bash
npm install
npm run dev
```

Vite stellt die Anwendung unter folgender Base-URL bereit:

```text
http://localhost:5173/one_frontend/
```

Falls der Port belegt ist, zeigt Vite den tatsächlich verwendeten Port im Terminal an.

## Produktions-Build

```bash
npm run build
npm run preview
```

`npm run build` erzeugt in `dist/` alle Einstiegspunkte:

- React Host Shell (`index.html`)
- Angular Calendar (`calendar-target.html`)
- React Linked Host (`linked-host.html`)
- Angular Linked Target (`linked-target.html`)
- React Target (`target-react.html`)
- Svelte Target (`target-svelte.html`)
- natives Web-Component-Target (`target-stencil.html`, historischer Dateiname)

Alle npm-Abhängigkeiten werden von Vite gebündelt. Das veröffentlichte `dist/` benötigt kein
`node_modules` zur Laufzeit.

## Technologie-Proofs

| Target | Umsetzung |
| --- | --- |
| Host Shell | Vite-Modul mit GroupUI Web Components |
| Linked Host | React 18 |
| Calendar Target | Angular 20 + GroupUI DatePicker |
| Linked Target | Angular 20 + Forms |
| Flight Options | echte Svelte-5-Komponente |
| Flight Extras | natives Custom Element, Stencil-artige Integrationsgrenze |
| React Target | React 18 |

Die Anwendungen übertragen Kontext per URL und senden Ergebnisse über `BroadcastChannel` sowie
`postMessage` zurück.

## Qualitätssicherung

```bash
npm test
```

Prüft Syntax und vollständigen Produktions-Build.

Für den Browsertest zuerst den Preview-Server starten:

```bash
npm run preview -- --host 127.0.0.1 --port 4173
BASE_URL=http://127.0.0.1:4173/one_frontend/ npm run test:e2e
```

Der E2E-Test öffnet alle Produktions-Targets, testet Angular- und Svelte-Interaktionen und
verifiziert den Rückkanal vom React Target zur Host Shell.

## Deployment

Die Vite-Base ist `/one_frontend/`. Für GitHub Pages kann der Inhalt von `dist/` unter dem
Repository-Pfad `one_frontend` veröffentlicht werden.

Kein `npm audit fix --force` verwenden: Major-Upgrades müssen bewusst und gemeinsam für den
Angular-Abhängigkeitsbaum durchgeführt werden.
