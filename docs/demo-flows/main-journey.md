# Main Journey

Dieselbe Business-Story wird in allen Zielbildern wiederverwendet.

1. Dashboard oeffnen.
2. Case auswaehlen.
3. Details ansehen.
4. Aktion starten.
5. Folgeschritt bearbeiten.
6. Ergebnis ansehen.

## Pflichtszenarien

- Dashboard-Kachel oeffnet Ziel-App mit Kontext.
- Prozessschritt-Button oeffnet Ziel-Funktion im Modal.
- Persistente Shell mit Navigation wechselt zwischen eingebetteten Modulen.
- Inline-Prozessschritt-Integration ohne sichtbaren App-Sprung.
- Dieselbe Journey wird in Linked Launchpad, Embedded Workspace und Integrated Experience vergleichbar gezeigt.

## Integrationsmuster (New Tab)

Die Patterns-View bietet fünf Target-Buttons:

| Button | Target-Datei | Technologie |
|--------|--------------|-------------|
| Open New Tab: React Target | `target-react.html` | React UMD |
| Open New Tab: Angular Target | `linked-target.html` | Angular UMD |
| Open New Tab: Angular Calendar | `calendar-target.html` | Angular + GroupUI DatePicker |
| Open New Tab: Svelte Target | `target-svelte.html` | Static Demo |
| Open New Tab: Stencil Target | `target-stencil.html` | Static Demo |

Jedes Target empfängt serialisierten Kontext via URL-Parameter und kann Follow-up-Notes via BroadcastChannel oder `window.opener.postMessage` zurückschicken.
