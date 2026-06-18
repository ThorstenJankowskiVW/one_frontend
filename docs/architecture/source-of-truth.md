# Source of Truth

## Dokumentierte Fakten

- Linked Launchpad = geringe Integrationstiefe.
- Fuer Linked Launchpad sollen Workflow-Sprungpunkte identifiziert werden.
- Fuer Linked Launchpad sollen relevante Kontextinformationen fuer den Sprung identifiziert werden.
- Embedded Workspace = eine Shell mit persistenter Navigation.
- Integrated Experience = eine nahtlose API-getriebene End-to-End Experience.
- Integration via Web Components ist fuer fremde Frontends framework-unabhaengig geeignet.
- GroupUI ist eine Toolchain fuer modulare User Interfaces und ein Development Framework.
- GroupUI soll zu einer konsistenten Design-Sprache ueber Anwendungen hinweg beitragen.
- Global top navigation kann mit anderen Navigationstypen kombiniert werden.
- Event Handling unterscheidet Native Events und Custom Events.
- In Micro-Frontend-Kontexten kann es bei Custom Elements zu Versions-/Registrierungskollisionen kommen.
- Versioned components koennen relevant sein, wenn verschiedene Major-Versionen parallel gebraucht werden.

## Verifizierte lokale GroupUI-Evidence

- CSS Framework kann per Stylesheet eingebunden werden: `https://groupui-css.vwapps.run/latest/groupui.css`.
- Plain Web Components sind laut lokaler Dokumentation als HTML-Komponenten nutzbar.
- Plain-HTML-Integration kann ueber `defineCustomElements()` aus `@group-ui/group-ui/dist/loader/index.es2017.js` oder, seit GroupUI 9, aus `@group-ui/group-ui/dist/components/index.js` erfolgen.
- Nachgewiesene sichtbare Komponenten/Tags in der lokalen Doku: `groupui-button`, `groupui-card`, `groupui-modal`, `groupui-headline`, `groupui-text`, `groupui-grid`, `groupui-grid-row`, `groupui-grid-col`, `groupui-divider`, `groupui-tag`.
- Nachgewiesene Navigationstags: `groupui-global-top-navigation`, `groupui-brand-logo`, `groupui-global-top-navigation-items`, `groupui-global-top-navigation-item`, `groupui-global-top-navigation-utility-items`, `groupui-global-top-navigation-utility-item`, `groupui-local-top-navigation`, `groupui-local-top-navigation-item`.
- Global top navigation ist fuer Top-Level-Seiten gedacht und kann mit lokaler Navigation kombiniert werden.
- Cards sind Container fuer zusammengehoerige Daten; Basic Cards haben laut Doku keine Elevation, Interactive Cards nutzen Elevation im Hover-State.
- Micro-Frontend-Support: Custom Elements koennen im Browser nur einmal unter einem Tag-Namen registriert werden. Versioned components nutzen das Muster `groupui-[major version]-[component name]`, z. B. `groupui-11-button`.

## Architekturentscheidungen / Empfehlungen

- Monorepo-artige Struktur mit Host, Remotes und Shared Packages.
- Host/Shell wird als lokale statische Demo vorbereitet; React ist als Zielarchitektur dokumentiert, wird im ersten lokalen Scaffolding aber nicht als Build-Abhaengigkeit erzwungen.
- Remotes werden als Angular-Zielmodul, Web-Components-Modul und Vanilla-Modul getrennt angelegt.
- Context Passing, Event Bridge, Navigation Trigger und Modal Trigger werden als allgemeine Frontend-Mechanismen modelliert, nicht als GroupUI-spezifische APIs.

## Offene Punkte

- GroupUI Web Components sind lokal installiert und werden ueber `defineCustomElements()` registriert.
- Das CSS Framework wird lokal aus `@group-ui/group-ui-css-framework/dist/groupui.css` geladen.
- Theme Tokens werden lokal aus `@group-ui/group-ui/dist/group-ui/assets/themes/tokens.css` geladen.

## Runtime-Proofs (New Tab Targets)

Die folgenden Targets sind implementiert und verifizieren echte Runtime-Integration:

| Target | Technologie | Datei | Besonderheiten |
|--------|-------------|-------|----------------|
| React Target | React UMD | `target-react.html` | Context via URL, Follow-up via BroadcastChannel/postMessage |
| Angular Target | Angular UMD | `linked-target.html` | FormGroup, Follow-up-Note-Formular |
| Angular Calendar | Angular UMD + GroupUI DatePicker | `calendar-target.html` | `groupui-date-picker` mit `date-format="d.m.Y"` |
| Svelte Target | Static Demo | `target-svelte.html` | BroadcastChannel für Follow-up |
| Stencil Target | Static Demo | `target-stencil.html` | BroadcastChannel für Follow-up |

## E2E-Automatisierung

`tests/e2e.cjs` verwendet Puppeteer, um folgende Abläufe zu testen:

1. Host-Seite öffnen
2. Zur Patterns-View navigieren
3. React Target in neuem Tab öffnen
4. Follow-up-Note im Target senden
5. Host erhält die Note via BroadcastChannel/postMessage

Der Test bestätigt, dass der Roundtrip zwischen Host und Target funktioniert.
