# Implementation Log

## 2026-06-11

- Phase A abgeschlossen: Scope und dokumentierte Fakten validiert.
- Phase B begonnen und umgesetzt: empfohlene Host-/Remote-/Package-/Docs-Struktur angelegt.
- GroupUI-Evidence lokal geprueft: CSS-Einbindung, Web-Components-Grundlage und mehrere sichtbare Komponenten nachgewiesen.
- Entscheidung dokumentiert: erste Demo wird leichtgewichtig lokal startbar, Zielstruktur bleibt monorepo-artig vorbereitet.

## Naechster Schritt

- Foundation konfigurieren.
- Gemeinsames Context Model und Integrationslayer anlegen.
- Statische Shell-Demo mit Zielbildern und Integrationsmustern verbinden.

## Umsetzungsschritt abgeschlossen

- Foundation umgesetzt: `package.json` enthaelt `npm start` und `npm test`.
- Context Model, Demo-Daten, UI-Kontrakte und Integrationslayer angelegt.
- Statische Host-Shell mit Overview, Zielbildvergleich, Linked Launchpad, Embedded Workspace, Integrated Experience, Extra-Mustern und Debug View gebaut.
- Remote-Stubs angelegt: Angular-Zielstruktur, Web-Component-Custom-Element und Vanilla-Renderer.
- Syntax verifiziert: `npm test` erfolgreich.
- Lokale Startbarkeit verifiziert: `http://localhost:4173` liefert die Demo-Seite aus.

## GroupUI-Doku nachgezogen

- Lokale Doku aus `Groupui_Markdown_RAG` zusaetzlich ausgewertet: `Plain HTML`, `Navigation - global top`, `Micro Frontend Support`, `Cards`, `Component Overview`.
- Shell auf belegte Navigationstags umgestellt: `groupui-global-top-navigation` fuer Branding/Utilities und `groupui-local-top-navigation` fuer die Demo-Views.
- Card-Fallback-Styling angepasst: keine Standard-Elevation, passend zur Card-Doku.
- Offene Evidence-Luecke reduziert: Navigation-Markup ist lokal belegt; Web-Component-Hydration via `@group-ui/group-ui` bleibt als naechster Integrationsschritt offen.

## 2026-06-12

- New Tab / Window Integration implementiert:
  - `target-react.html`: React-UMD-App mit Follow-up-Formular
  - `target-svelte.html`: statischer Svelte-Proof mit BroadcastChannel
  - `target-stencil.html`: statischer Stencil-Proof mit BroadcastChannel
  - `linked-target.html/.mjs`: Angular-UMD-App fuer Linked Launchpad
- E2E-Automatisierung mit Puppeteer:
  - `tests/e2e.cjs` verifiziert Roundtrip (Target → Host via BroadcastChannel/postMessage)
  - Test erfolgreich: Host empfängt Follow-up-Note vom React Target

## 2026-06-15

- Angular Calendar App erstellt:
  - `calendar-target.html/.mjs/.css` mit GroupUI DatePicker
  - DatePicker Property: `date-format="d.m.Y"`, `locale="de"`
  - Termin-Anzeige basierend auf ausgewähltem Datum
- Host-Integration:
  - Button `Open New Tab: Angular Calendar` in Patterns-View
  - Action `new-tab-calendar` öffnet `calendar-target.html`
- Alle Syntax-Checks grün: `node --check app.js`, `node --check calendar-target.mjs`

## Echte GroupUI-Installation

- `@group-ui/group-ui` ueber `https://groupui.vwapps.run/latest/packages/group-ui.tgz` installiert.
- `@group-ui/group-ui-css-framework` ueber `https://groupui-css.vwapps.run/latest/groupui-css.tgz` installiert.
- `app.js` registriert die GroupUI Web Components ueber `defineCustomElements()` aus dem installierten Loader.
- `index.html` laedt Tokens und CSS Framework lokal aus `node_modules`.
- Runtime-Nachweis ergaenzt: Die Demo zeigt registrierte GroupUI Custom Elements und HTTP-Status der lokal geladenen GroupUI-Assets direkt in der Oberflaeche.
