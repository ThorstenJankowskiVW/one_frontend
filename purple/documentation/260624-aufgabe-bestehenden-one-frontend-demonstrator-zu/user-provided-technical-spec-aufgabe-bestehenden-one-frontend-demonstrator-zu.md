# Technical Spec: Volkswagen Aftersales Platform Demonstrator

## Purpose

This technical spec translates the product direction into an implementation-ready structure without changing the existing architectural principles of the One Frontend demonstrator.

The demonstrator should remain a Vite-based multi-runtime frontend integration project with a host shell, multiple isolated targets, shared packages, and browser-native communication patterns.

## Existing Architecture To Preserve

### Current Proven Building Blocks

- Vite host shell entry via `index.html` and `app.js`
- React, Angular, Svelte, and Web Components as visible runtime participants
- shared context model in `packages/context-model/src/context.js`
- shared integration helpers in `packages/integration-layer/src/integration.js`
- shared navigation contract in `packages/ui-contracts/src/navigation.js`
- preserved isolated targets for linked, embedded, modal, and new-tab scenarios

## Architectural Constraints

- do not redesign the demo as a single-framework monolith
- do not hide integration logic inside framework-specific shortcuts
- keep the host shell as journey owner, summary owner, and navigation owner
- keep targets technology-authentic and independently explainable
- keep the Vite base path `/one_frontend/`

## Recommended View Model

### Top-Level Views

The current view structure should be evolved rather than replaced.

Recommended top-level views:

- `overview`
- `aftersales-journey`
- `flight-booking`
- `technology-overview`
- `implementation`
- `comparison`
- `linked-launchpad`
- `embedded-workspace`
- `integrated-experience`
- `patterns`
- `debug`

The exact labels can be simplified for end users, but the underlying content separation should remain.

## Subapplication Responsibility Map

### React Host Shell

Recommended responsibilities:

- platform overview and storytelling
- cross-flow navigation
- shared context ownership
- shell-side summary cards and order preview
- technology overview page
- implementation/how-it-works page
- flight-booking orchestration and final summary
- persistent status, progress, and return-message presentation

### Angular Target

Recommended Aftersales responsibilities:

- workshop capacity and appointment slot selection
- optionally campaign-check or workshop-order detail views

Why Angular fits:

- good example of a more structured enterprise-style application slice
- already proven in the repo through calendar and linked target behavior

### Svelte Target

Recommended Aftersales responsibilities:

- service-package recommendation
- alternatives or upsell choices
- lightweight, reactive decision screens

Why Svelte fits:

- compact reactive UI for quick option comparison
- good contrast to Angular without breaking the shared UX

### Web Components Target

Recommended Aftersales responsibilities:

- parts, mobility, or action add-ons
- framework-neutral reusable module
- one explicit proof of technology-independent integration

Why Web Components fit:

- demonstrates the most framework-agnostic integration contract
- aligns directly with the demonstrator’s educational value

### React Target / Existing Follow-Up Target

Recommended Aftersales responsibilities:

- customer follow-up
- satisfaction capture
- service-order confirmation detail

Why keep it:

- already proves return-channel behavior well
- can be re-themed to Aftersales without changing its platform role

## Flight Booking Mapping

The existing flight flow should remain structurally similar:

- React shell owns stepper, context, summary
- Angular owns date selection
- Svelte owns option selection
- Web Components own extras
- React target or shell owns confirmation/follow-up

The implementation should visually and semantically clarify this structure rather than replacing it.

## Context Model Extensions

### Current Base Context

The current base context already includes:

- `caseId`
- `vehicleId`
- `customerId`
- `market`
- `language`
- `userRole`
- `sourceApp`
- `sourceStep`
- `integrationMode`

### Recommended New Context Fields

The shared context model should be extended for Aftersales usage with fields like:

- `vin`
- `vehicleModel`
- `vehiclePowertrain`
- `mileageKm`
- `serviceConcern`
- `serviceCategory`
- `appointmentDate`
- `appointmentSlotId`
- `workshopLocation`
- `servicePackageId`
- `servicePackageLabel`
- `estimatedDurationMinutes`
- `estimatedPrice`
- `partsStatus`
- `campaignStatus`
- `mobilityNeed`
- `followUpRequired`

These fields should remain serializable and browser-safe.

## Context Ownership Rules

- The host shell owns canonical journey state.
- Targets may enrich or propose updates.
- Return payloads from targets should be merged by explicit shell logic, not by hidden shared mutable state.

## Communication Contracts

### URL Context Handover

Use URL-based serialized context for:

- launching isolated targets
- opening new tabs
- deep-linking demo states where useful

This is already aligned with the current architecture and should remain the most visible handover method.

### BroadcastChannel

Use `BroadcastChannel` for:

- lightweight shell-target roundtrips
- status updates from isolated targets
- user-completed decisions flowing back to the shell

### postMessage

Use `postMessage` for:

- popup/new-tab fallback communication
- explicit parent-child communication scenarios
- demonstrating a second browser-native return-channel pattern

### Custom Events / DOM Events

Use DOM or custom events inside integrated shell-hosted flows where browser-native event boundaries make the ownership clear.

## Demo Data Strategy

### Recommended Source Strategy

- keep final demo data local in the repository
- prefer curated JSON or JS objects in shared demo-data packages
- optionally derive structure or example values from external sources such as Kaggle
- document source provenance in a short dataset note if external material influenced the final data

### Required Demo Data Domains

Recommended data groups:

- demo customers
- demo vehicles
- workshop locations
- appointment slots / capacity
- service packages
- parts / availability
- campaigns / recalls
- mobility options
- preserved flight-booking demo data

## UX Implementation Guidelines

### GroupUI And Lavender

- GroupUI components, tokens, and layout patterns are mandatory
- Lavender examples should guide rhythm, content grouping, and page composition
- avoid introducing a second visual language per target

### Recommended Component Families

- global or local navigation for shell structure
- cards for entry points, technology explainers, and summaries
- stepper for the primary journey and flight booking
- forms for vehicle, issue, and follow-up inputs
- table or structured list for capacities, parts, and technology overviews
- status indicators for appointment, campaign, and parts states
- modal patterns only where they support the integration narrative without harming responsiveness

## Layered Explainability Pattern

The UI should provide two parallel explanation layers:

### Business Layer

- user-friendly flow labels
- minimal technical terminology
- summary-first storytelling

### Technical Layer

- per-step technology labels
- optional integration notes
- implementation page with architecture explanation
- debug/pattern views for deeper inspection

## Technology Overview Page Contract

Each technology card or section should include:

- technology name
- where it appears in the demo
- why it is a good fit for that capability
- what the user gains from that choice in the platform context

Minimum required entries:

- React
- Angular
- Svelte
- Web Components
- GroupUI
- Vite
- integration layer

## Implementation Page Contract

The implementation page should explain, in a concise and structured manner:

1. shell/host setup
2. subapplication attachment
3. context model definition
4. communication through URL, `BroadcastChannel`, and `postMessage`
5. shared design system with GroupUI
6. build and deployment through Vite and GitHub Pages
7. tests and quality assurance

This page should read like a developer and architect briefing, not like generated API documentation.

## Flight Booking Upgrade Requirements

- keep existing target entry points functional
- improve shell-side step clarity
- strengthen responsive layout for all booking steps
- clarify which technology owns each step
- preserve current cross-runtime orchestration contracts

## Accessibility And Internationalization

- new or expanded user-facing content should support German and English
- focus handling must remain stable across modal, embedded, and new-tab interactions
- keyboard access must remain viable in host and targets
- narrow-screen layouts must be tested for the primary Aftersales and flight-booking flows

## Delivery Risks

### Product Risks

- too many equal-priority scenarios can dilute the main story
- overemphasizing technical boundaries can confuse non-technical viewers

### Technical Risks

- context model growth may become inconsistent if fields are added ad hoc per target
- isolated targets may diverge visually if GroupUI usage is not enforced consistently
- multiple return paths can create conflicting shell updates if payload ownership is unclear

### Mitigations

- choose one primary Aftersales flow
- document canonical context fields centrally
- keep shell merge logic explicit
- keep integration-pattern views available for validation

## Verification Expectations For The Build Phase

When implementation begins, the resulting work should be verifiable against the existing project standards:

- `npm test` remains green
- E2E coverage is checked when integration, navigation, or targets change
- responsive behavior is validated for the primary Aftersales journey and the flight-booking journey
- manual checks cover language consistency and basic accessibility

## Open Technical Decisions

- confirm which existing target maps to which Aftersales capability in the first release
- confirm whether scenario cards should reuse existing views or introduce new dedicated view ids
- confirm whether dataset provenance needs its own visible page section or only technical documentation
