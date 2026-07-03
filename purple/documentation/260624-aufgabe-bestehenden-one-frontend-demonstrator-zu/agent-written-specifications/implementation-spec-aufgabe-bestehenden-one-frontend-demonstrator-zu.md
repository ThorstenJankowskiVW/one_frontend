# Implementation Specification: Volkswagen Aftersales Platform Demonstrator

## Document Status

- Feature slug: `aufgabe-bestehenden-one-frontend-demonstrator-zu`
- Date: 2026-06-24
- Ticket prefix: `VAP`
- Source product spec: `agent-written-product-spec-aufgabe-bestehenden-one-frontend-demonstrator-zu.md`
- Source technical spec: `user-provided-technical-spec-aufgabe-bestehenden-one-frontend-demonstrator-zu.md`
- Repo target: `/Users/dv60tja/.purple-code/worktrees/one-frontend-wt-mqs5aeegw3rrbf48/repos/one_frontend`

## Engineering Intent

The implementation must reposition the existing One Frontend demonstrator into a Volkswagen Aftersales platform without rewriting its architecture. The host shell remains the journey owner and continuity layer. Angular, Svelte, Web Components, and the existing React/vanilla follow-up surfaces remain real runtime participants. Shared contracts continue to live under `packages/`, and all new context handover stays explicit and serializable.

The plan follows the documented standards:

- keep host state, contracts, and integration helpers explicit and centralized
- evolve the Vite multi-page setup rather than replacing it
- keep GroupUI as the mandatory design language
- preserve bilingual user-facing content where new text is introduced
- treat integration, responsive behavior, and handover channels as QA-critical

## Delivery Strategy

The work is split into four phases:

1. Shared contracts and data foundation
2. Host shell information architecture and Aftersales storytelling
3. Runtime-target Aftersales journey integration
4. Flight-booking refinement and verification hardening

Parallelism is allowed where file ownership does not overlap. The host shell (`app.js`, `styles.css`, `index.html`) should be treated as the highest-conflict area, so host-heavy tickets are serialized unless they touch clearly separate slices. Shared packages and remote target implementations can run in parallel once the contract foundation is complete.

## Ticket Plan

### Phase 1: Shared Contracts And Demo Data

#### Ticket 1

**Ticket ID:** `VAP-1.1`

**Title:** Extend shared Aftersales context and curated demo data

**Goal**

Create the canonical Aftersales data model and seed data that the host shell and all runtime targets can consume without inventing local ad hoc structures.

**Scope**

- extend `packages/context-model/src/context.js` with serializable Aftersales-oriented fields
- expand `packages/demo-data/src/cases.js` with:
  - primary Aftersales journey seed data
  - workshop appointments / capacity
  - service package recommendations
  - optional extras / mobility data
  - secondary scenario card content
  - refined labels or metadata for the existing flight-booking reference flow
- keep contracts browser-safe and URL-serializable
- preserve current consumers by providing sensible defaults and fallback behavior

**Files To Modify**

- `packages/context-model/src/context.js`
- `packages/demo-data/src/cases.js`

**Acceptance Criteria**

- Shared context contains the required Aftersales fields from the technical spec, with defaults that do not break existing flows.
- Demo data covers one full Aftersales service-appointment path and four secondary scenario cards.
- Existing host and target entry points can continue reading context without runtime errors when only legacy fields are present.
- New data naming uses business-flow language rather than framework-specific naming.

**Dependencies**

- None

**Verification**

- `npm test`
- targeted manual review that serialized context still round-trips through URL encoding/decoding

**Documentation Output**

- `completed-tickets-documentation/phase-1-1-aufgabe-bestehenden-one-frontend-demonstrator-zu-documentation.md`

#### Ticket 2

**Ticket ID:** `VAP-1.2`

**Title:** Update navigation contracts and integration metadata for the new platform IA

**Goal**

Align shared navigation contracts and integration descriptors with the Aftersales-first information architecture before host-shell implementation begins.

**Scope**

- update `packages/ui-contracts/src/navigation.js` to reflect the new stable view model:
  - overview
  - aftersales journey
  - flight booking
  - technology overview
  - implementation
  - comparison
  - linked launchpad
  - embedded workspace
  - integrated experience
  - patterns
  - debug
- adjust any integration metadata or helper labels in `packages/integration-layer/src/integration.js` if the new IA or event logging needs clearer business-facing labels
- keep integration modes intact while improving presentation-level labels and ownership hints

**Files To Modify**

- `packages/ui-contracts/src/navigation.js`
- `packages/integration-layer/src/integration.js`

**Acceptance Criteria**

- Primary navigation contract exposes the Aftersales-first IA without removing the existing educational integration views.
- Navigation labels support the product hierarchy described in the product spec.
- Shared integration helpers remain the canonical place for reusable handover/logging behavior rather than duplicating this logic in host entry points.

**Dependencies**

- `VAP-1.1`

**Verification**

- `npm test`
- quick browser check that invalid or legacy `view` parameters still fall back safely

**Documentation Output**

- `completed-tickets-documentation/phase-1-2-aufgabe-bestehenden-one-frontend-demonstrator-zu-documentation.md`

### Phase 2: Host Shell Information Architecture

#### Ticket 3

**Ticket ID:** `VAP-2.1`

**Title:** Rebuild the host shell overview and platform storytelling around Aftersales

**Goal**

Turn the shell into a clear Volkswagen Aftersales platform entry point while preserving the single-platform narrative and the secondary flight-booking reference entry.

**Scope**

- refactor `app.js` overview rendering and shell state to:
  - foreground the service-appointment journey
  - expose four secondary Aftersales scenario cards
  - provide concise platform messaging for business stakeholders
  - preserve a secondary entry into flight booking
- update host-shell labels and user-facing copy for German and English where new or expanded text is introduced
- ensure shell-level summary structures and call-to-action flow support the new product story
- update `styles.css` to deliver GroupUI-consistent, desktop-first presentation with mobile-safe breakdowns

**Files To Modify**

- `app.js`
- `styles.css`
- `index.html` if shell scaffolding or metadata must change

**Acceptance Criteria**

- Landing and overview experience clearly prioritizes Volkswagen Aftersales.
- The primary call to action enters the service-appointment journey.
- Four secondary Aftersales scenarios are visible as lightweight showcase cards.
- The flight-booking flow remains visible but clearly secondary.
- The shell remains the continuity layer for navigation, summary, and user guidance.
- Updated content is coherent in German and English for changed user-facing strings.
- Layout remains usable on narrow screens without breaking primary actions or summaries.

**Dependencies**

- `VAP-1.1`
- `VAP-1.2`

**Verification**

- `npm test`
- manual desktop and mobile-width check of overview and navigation
- accessibility spot check for headings, focus states, and CTA reachability

**Documentation Output**

- `completed-tickets-documentation/phase-2-1-aufgabe-bestehenden-one-frontend-demonstrator-zu-documentation.md`

#### Ticket 4

**Ticket ID:** `VAP-2.2`

**Title:** Add technology overview and implementation briefing pages

**Goal**

Deliver the layered explainability views that let technical stakeholders understand ownership, integration, and build/test mechanics without breaking the business-first default experience.

**Scope**

- extend `app.js` to render:
  - a technology overview page covering React, Angular, Svelte, Web Components, GroupUI, Vite, and the integration layer
  - an implementation page covering shell ownership, target attachment, context model, URL handover, `BroadcastChannel`, `postMessage`, GroupUI alignment, build/deploy, and QA
- reuse current runtime and integration data where possible instead of hardcoding disconnected documentation fragments
- extend `styles.css` for readable card, table/list, and briefing layouts
- keep comparison/pattern/debug views available and coherent with the new IA

**Files To Modify**

- `app.js`
- `styles.css`

**Acceptance Criteria**

- Technology overview clearly maps each technology to its role and benefit in the demo.
- Implementation page reads like a concise developer/architect briefing and covers the required integration mechanisms.
- These technical pages remain secondary in navigation emphasis, not the default landing experience.
- Added layouts stay visually consistent with GroupUI patterns and presentation-ready on desktop and mobile widths.

**Dependencies**

- `VAP-1.1`
- `VAP-1.2`
- `VAP-2.1`

**Verification**

- `npm test`
- manual review of content completeness against product and technical specs
- responsive spot check for multi-card and briefing layouts

**Documentation Output**

- `completed-tickets-documentation/phase-2-2-aufgabe-bestehenden-one-frontend-demonstrator-zu-documentation.md`

### Phase 3: Runtime Target Aftersales Journey

#### Ticket 5

**Ticket ID:** `VAP-3.1`

**Title:** Re-theme the Angular target for workshop capacity selection and shell handover

**Goal**

Transform the current Angular calendar target from generic date selection into the Aftersales workshop-capacity step while preserving explicit browser-native return channels.

**Scope**

- adapt `calendar-target.mjs` and supporting styles/markup to present Aftersales-specific appointment language, capacity choices, and transfer copy
- ensure the returned payload includes the Aftersales appointment fields expected by the host shell
- keep `BroadcastChannel` and `postMessage` return behavior explicit and testable
- adjust any shared copy or helper usage needed for shell integration

**Files To Modify**

- `calendar-target.mjs`
- `calendar-target.css`
- optionally `linked-context.js` if context parsing needs safe extensions

**Acceptance Criteria**

- Angular target clearly behaves as the workshop-capacity step in the Aftersales journey.
- Target can consume shell-provided vehicle/service context and return appointment choices without hidden mutable state.
- Return payloads remain serializable and compatible with isolated, modal, embedded, and new-tab execution modes where relevant.
- Existing flight-booking date-selection behavior is preserved or intentionally shared through configuration rather than duplicated logic.

**Dependencies**

- `VAP-1.1`
- `VAP-2.1`

**Verification**

- `npm test`
- `npm run test:e2e` if target-host handover behavior changes
- manual verification of at least one isolated and one host-driven Angular target path

**Documentation Output**

- `completed-tickets-documentation/phase-3-1-aufgabe-bestehenden-one-frontend-demonstrator-zu-documentation.md`

#### Ticket 6

**Ticket ID:** `VAP-3.2`

**Title:** Implement Svelte recommendations, Web Components extras, and shell-side Aftersales summary flow

**Goal**

Complete the Aftersales journey across the remaining runtime participants and let the shell merge their outputs into one coherent service-order preview.

**Scope**

- adapt the Svelte remote under `apps/remote-svelte-options` and `target-svelte.js` to present Aftersales service-package recommendations
- evolve the Web Components action remote under `apps/remote-webcomponents-action` into optional extras / mobility / parts selection with meaningful context display
- update the host shell in `app.js` to:
  - launch and receive these steps
  - merge target payloads explicitly
  - render the final Aftersales summary and service-order preview
  - surface the intended integration reveal showing which runtime owns which step
- update `styles.css` for the summary, step indicators, and target-contributed states as needed

**Files To Modify**

- `apps/remote-svelte-options/src/SvelteFlightOptions.svelte`
- `target-svelte.js`
- `apps/remote-webcomponents-action/src/action-card.js`
- `app.js`
- `styles.css`

**Acceptance Criteria**

- The primary Aftersales journey spans Angular, Svelte, Web Components, and the shell end to end.
- The shell remains the canonical owner of merged journey state and final confirmation output.
- At least one user-visible moment explains that multiple technologies contributed to the completed journey without turning the UI into a raw debug screen.
- Optional extras and package choices are expressed in Aftersales business terms rather than flight-booking language.
- New or changed user-facing content remains aligned across German and English where applicable.

**Dependencies**

- `VAP-1.1`
- `VAP-2.1`
- `VAP-3.1`

**Verification**

- `npm test`
- `npm run test:e2e`
- manual end-to-end Aftersales journey check in desktop and narrow-screen widths
- accessibility spot check for step progression, labels, and focus continuity after target handover

**Documentation Output**

- `completed-tickets-documentation/phase-3-2-aufgabe-bestehenden-one-frontend-demonstrator-zu-documentation.md`

### Phase 4: Reference Flow Refinement And QA Hardening

#### Ticket 7

**Ticket ID:** `VAP-4.1`

**Title:** Refine the flight-booking reference flow and step ownership clarity

**Goal**

Keep the existing flight-booking journey fully functional while making it easier to understand, more responsive, and more clearly mapped to the runtime participants.

**Scope**

- update host-shell flight-booking stepper, labels, summary behavior, and ownership hints in `app.js`
- adjust supporting styles in `styles.css`
- preserve current target entry points and orchestration contracts
- improve language and visual hierarchy so the flow reads as a secondary reference demonstrator rather than the main platform story

**Files To Modify**

- `app.js`
- `styles.css`

**Acceptance Criteria**

- Flight booking remains reachable from primary navigation.
- Step labels, current/completed state, and summary are clearer than before.
- The relationship between shell, Angular, Svelte, Web Components, and follow-up targets is easier to understand.
- Narrow-screen behavior improves for the full booking flow without regressing the Aftersales-first shell experience.

**Dependencies**

- `VAP-2.1`
- `VAP-3.2`

**Verification**

- `npm test`
- `npm run test:e2e`
- manual responsive check for the booking path

**Documentation Output**

- `completed-tickets-documentation/phase-4-1-aufgabe-bestehenden-one-frontend-demonstrator-zu-documentation.md`

#### Ticket 8

**Ticket ID:** `VAP-4.2`

**Title:** Update automated verification and production-build smoke coverage for the new platform story

**Goal**

Align automated verification with the changed information architecture, Aftersales flow, and preserved reference journey so the production-like build remains trustworthy.

**Scope**

- update `tests/e2e.cjs` to cover:
  - Aftersales-first landing expectations
  - at least one host-to-target-to-host Aftersales handover
  - preserved flight-booking behavior
  - continued new-tab or linked roundtrip coverage where still relevant
- adjust any helper selectors or deterministic demo data assumptions needed for stable smoke coverage
- keep verification pointed at the production build output and `/one_frontend/` base path assumptions

**Files To Modify**

- `tests/e2e.cjs`
- any small supporting selectors or data hooks in `app.js`, target files, or markup as required

**Acceptance Criteria**

- `npm test` stays green.
- `npm run test:e2e` validates the updated Aftersales story and the preserved flight-booking reference flow.
- Test assertions target visible user flows and handover behavior, not fragile incidental markup.

**Dependencies**

- `VAP-3.1`
- `VAP-3.2`
- `VAP-4.1`

**Verification**

- `npm test`
- `npm run test:e2e`

**Documentation Output**

- `completed-tickets-documentation/phase-4-2-aufgabe-bestehenden-one-frontend-demonstrator-zu-documentation.md`

## QA Expectations

After all implementation tickets complete, QA must run against the built application and follow the project testing standards:

- run `npm test`
- run `npm run test:e2e` because navigation, handover logic, targets, and cross-runtime journey behavior are changing
- verify the host shell and multi-target integration through the production build, not only a dev server
- perform a responsive check for:
  - Aftersales overview
  - primary Aftersales journey
  - flight-booking reference flow
  - any modal/new-tab/embedded path materially affected
- perform a short accessibility and language consistency pass on changed screens

At least one QA report file must be written under `qa-results/`.

## Parallel Execution Notes

- `VAP-1.1` must complete before the rest because it establishes the data contract.
- `VAP-1.2` can start as soon as `VAP-1.1` lands.
- `VAP-2.1` and `VAP-2.2` both touch `app.js` and `styles.css`, so they should be sequenced or carefully handed off rather than executed concurrently.
- `VAP-3.1` can proceed after `VAP-2.1` once Aftersales shell expectations are clear.
- `VAP-3.2` depends on the Angular contract and also writes `app.js`, so it follows `VAP-3.1`.
- `VAP-4.1` follows the Aftersales journey completion because it refines the remaining shared host experience.
- `VAP-4.2` should be the final implementation ticket before the QA sentinel.

## Required Implementation Outputs

Implementation is not complete until all of the following exist:

- completed ticket documentation files for each implemented ticket in `completed-tickets-documentation/`
- at least one QA result file in `qa-results/`
- code changes in `/Users/dv60tja/.purple-code/worktrees/one-frontend-wt-mqs5aeegw3rrbf48/repos/one_frontend`
