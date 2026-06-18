# One Frontend Demonstrator

Lokaler Prototyp fuer den Vergleich mehrerer Integrationsbilder in einer Demo-Anwendung.

## Lokal starten

```bash
npm start
```

Danach im Browser oeffnen:

```text
http://localhost:4173
```

## Sichtbare Zielbilder

- Linked Launchpad
- Embedded Workspace
- Integrated Experience

## Sichtbare Integrationsmuster

- New Tab / New Window
- Modal / Dialog
- Navigation
- Prozessschritt-Integration
- Dashboard-Kachel / App-Launcher

## Kontextmodell

Der Demonstrator nutzt ein gemeinsames Context Model mit:

- `caseId`
- `vehicleId`
- `customerId`
- `market`
- `language`
- `userRole`
- `sourceApp`
- `sourceStep`
- `integrationMode`

## Runtime-Proofs (New Tab Targets)

| Target | Technologie | Datei |
|--------|-------------|-------|
| React | React UMD | `target-react.html` |
| Angular | Angular UMD | `linked-target.html` |
| Calendar | Angular + GroupUI DatePicker | `calendar-target.html` |
| Svelte | Static Demo | `target-svelte.html` |
| Stencil | Static Demo | `target-stencil.html` |

Alle Targets nutzen BroadcastChannel + postMessage-Fallback fuer Rückmeldungen an den Host.

## E2E-Automatisierung

```bash
node tests/e2e.cjs
```

Verifiziert: Host öffnet Target in neuem Tab, Target sendet Follow-up-Note, Host empfängt die Note.

## GroupUI-Hinweis

Die Demo nutzt lokal installierte GroupUI-Pakete:

- `@group-ui/group-ui` fuer Web Components
- `@group-ui/group-ui-css-framework` fuer das CSS Framework
- `@group-ui/design-tokens-json` fuer JSON Design Tokens

Die Web Components werden in [app.js](app.js) ueber `defineCustomElements()` aus `@group-ui/group-ui/dist/loader/index.es2017.js` registriert. Styles und Tokens werden lokal aus `node_modules` geladen, nicht mehr ueber das externe CSS-CDN.
