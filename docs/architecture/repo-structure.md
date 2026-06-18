# Repo-Struktur

Diese Struktur ist eine Architekturentscheidung / Empfehlung fuer den Demonstrator.

```text
one_frontend/
  apps/
    host-shell/
    remote-angular-case/
    remote-webcomponents-action/
    remote-vanilla-result/
  packages/
    context-model/
    integration-layer/
    demo-data/
    ui-contracts/
  docs/
    architecture/
    demo-flows/
    decisions/
    progress/
  tests/
    e2e.cjs
  calendar-target.html
  calendar-target.mjs
  calendar-target.css
  target-react.html
  target-svelte.html
  target-stencil.html
  linked-target.html
  linked-target.mjs
  linked-context.js
  linked-styles.css
  index.html
  styles.css
  package.json
```

## Hauptordner

- `apps/host-shell`: Shell, Navigation, Overview, Zielbildvergleich, Integrationsmodi und Debug-Sicht.
- `apps/remote-angular-case`: Zielstruktur fuer eine Angular-Remote-App fuer Case-/Detailkontext.
- `apps/remote-webcomponents-action`: Zielstruktur fuer eine framework-unabhaengige Web-Components-Remote-App.
- `apps/remote-vanilla-result`: Zielstruktur fuer eine einfache Vanilla-/Legacy-nahe Remote-App.
- `packages/context-model`: Gemeinsames Context Model fuer alle Integrationsarten.
- `packages/integration-layer`: Event Bridge, Context Passing, Navigation Trigger, Modal Trigger.
- `packages/demo-data`: Gemeinsame Demo-Daten fuer die wiederverwendete Journey.
- `packages/ui-contracts`: Navigation, Zielbilder, Modi und Journey-Kontrakte.
- `docs`: Dokumentierte Fakten, Entscheidungen, Demo-Flows und Fortschritt.

## Runtime-Proofs (New Tab Targets)

- `calendar-target.html/.mjs/.css`: Angular-App mit GroupUI DatePicker
- `target-react.html`: gebündelte React-App mit Follow-up-Formular
- `target-svelte.html` + `target-svelte.js`: Einstieg für die echte Svelte-Remote
- `apps/remote-svelte-options/src/SvelteFlightOptions.svelte`: Svelte-Komponente für Flugoptionen
- `target-stencil.html`: natives Custom Element als Stencil-artiger Web-Component-Proof
- `linked-target.html/.mjs`: gebündelte Angular-App für Linked Launchpad

## Test-Automatisierung

- `tests/e2e.cjs`: Puppeteer-Test verifiziert Roundtrip (Target → Host via BroadcastChannel/postMessage)

## Begruendung

Die Struktur macht Systemgrenzen sichtbar und verhindert, dass der Demonstrator zu mehreren losen Demos zerfaellt. Host, Remotes, Context, Integration und Dokumentation sind getrennt, bleiben aber in einer gemeinsamen lokalen Demo zusammenfuehrbar.
