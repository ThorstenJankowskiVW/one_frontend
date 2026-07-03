# Incremental Changes

## 2026-06-24

### Request

Simplify the Aftersales workflow so the shell always shows a slim summary of the current state and only exposes one next-step call to action at a time. Each step should open a dialog, confirm the selection, return data to the shell, and then reveal the next step.

### Changes Made

- Reworked the Aftersales journey in `repos/one_frontend/app.js` into a focused shell-driven workflow with:
  - one primary focus card per workflow state
  - a compact sticky shell summary
  - explicit next-step teaser sections
  - dialog-based progression for Angular, Svelte, and Web Components
- Removed the always-visible embedded Web Components extras step from the main Aftersales page and aligned it with the same dialog pattern as the earlier steps.
- Added supporting workflow layout and summary styling in `repos/one_frontend/styles.css` with a calmer Lavender-inspired composition.
- Updated `repos/one_frontend/tests/e2e.cjs` so QA follows the new modal-based extras step.

### Verification

- `npm test`
- `BASE_URL=http://127.0.0.1:4175/one_frontend/ npm run test:e2e`

## 2026-06-25

### Request

Rework the first step of the Aftersales journey to match the provided reference more closely: a cleaner shell-owned review step, GroupUI-compliant form controls, and a full-width collapsed payload accordion instead of the always-open technical payload card.

### Changes Made

- Reworked Aftersales step 1 in `repos/one_frontend/app.js` into a two-column review layout with:
  - customer and order summary cards on the left
  - a focused `Service-Kontext prüfen` card on the right
  - the next-step CTA `Werkstattslot auswählen` remaining in the shell
- Replaced native step-1 inputs with GroupUI form components:
  - `groupui-input` for service concern, mileage, and workshop location
  - `groupui-select` for language selection
- Added GroupUI-aware field change handling so shell state updates continue to work with custom-element events.
- Replaced the open payload card with a full-width `groupui-accordion`, collapsed by default, to keep the workflow surface visually calmer while retaining the serialized context for demo/debug purposes.
- Added first-step-specific layout and accordion styling in `repos/one_frontend/styles.css` so the screen aligns more closely with the provided reference and stays responsive.
- Refined the top process strip so the runtime tags align centrally under their corresponding step positions instead of flowing independently.
- Tightened the `Service-Kontext prüfen` card so it behaves like a shell-owned review state instead of a nested teaser card: explicit shell intro, form-first review area, and a calmer next-step transition block.
- Reworked the Angular workshop-capacity target into a `groupui-grid`-based 2x2 card layout:
  - removed the hero card
  - kept `Datum und Slot auswählen` and `Auswahl an die Shell zurückgeben` side by side
  - moved `Aftersales context` and `Angular 20 in production build` into the second row with matching widths
- Centered the workshop-capacity modal both horizontally and vertically in the host shell.
- Adjusted the Aftersales stepper behavior so after returning the selected workshop slot, step 2 stays active and step 1 is no longer marked as completed/active.
- Updated `repos/one_frontend/tests/e2e.cjs` to match the new Angular target structure and use more robust DOM-triggered interactions inside remote frames.

### Verification

- `npm test`
- `npm run preview -- --host 127.0.0.1 --port 4173` -> served on `http://127.0.0.1:4175/one_frontend/`
- `BASE_URL=http://127.0.0.1:4175/one_frontend/ npm run test:e2e`
