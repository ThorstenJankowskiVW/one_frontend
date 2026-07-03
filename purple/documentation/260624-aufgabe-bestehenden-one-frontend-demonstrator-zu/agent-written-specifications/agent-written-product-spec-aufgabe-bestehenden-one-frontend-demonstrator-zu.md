# Product Specification: Volkswagen Aftersales Platform Demonstrator

## Document Status

- Feature slug: `aufgabe-bestehenden-one-frontend-demonstrator-zu`
- Date: 2026-06-24
- Source inputs:
  - `user-provided-product-spec-aufgabe-bestehenden-one-frontend-demonstrator-zu.md`
  - `user-provided-technical-spec-aufgabe-bestehenden-one-frontend-demonstrator-zu.md`
- Decision status: ready for engineering implementation planning

## Product Intent

The existing One Frontend demonstrator will be repositioned into a Volkswagen Aftersales platform demo that explains platform value to business and technical stakeholders within a few minutes. The Aftersales journey becomes the primary story. The existing flight-booking journey remains intact as a secondary, improved reference flow that continues to prove cross-runtime orchestration.

The core message of the demonstrator is:

Separate frontend applications built with different technologies can behave like one coherent platform when the host shell owns continuity, context, navigation, shared design language, and user feedback.

## Problem To Solve

The current demonstrator already proves runtime integration across React, Angular, Svelte, and Web Components, but it does not yet communicate the business value clearly enough for Aftersales stakeholders. The next version must make the platform story legible to non-technical viewers, keep the technical integration visible for architects and developers, and tie the whole experience to a believable Volkswagen Aftersales narrative.

## Target Audiences

### Primary audience

- business stakeholders
- Aftersales product owners
- managers who need a fast explanation of platform value

### Secondary audience

- frontend architects
- developers evaluating microfrontend integration patterns
- UX and platform teams validating GroupUI consistency

## Product Decisions

The following decisions are fixed for the first implementation and should not remain open in engineering planning:

- The primary showcase flow is `Service-Termin mit Werkstattkapazität`.
- The landing view foregrounds Aftersales as the primary call to action.
- Flight booking remains present but secondary in navigation hierarchy and landing emphasis.
- The four additional Aftersales scenarios are lightweight scenario cards with focused detail views, not equally deep end-to-end flows.
- Demo data is local and curated in the repository; external sources may inspire the shape of the data, but runtime behavior must not depend on network access.
- Dataset provenance, if needed, is documented in implementation-facing content and technical documentation rather than requiring a dedicated end-user page.

## Experience Principles

### Platform first, technology second

Users should first understand the business flow. Technology boundaries become visible as a deliberate reveal, not as friction.

### One shell, many capabilities

The React host shell is the stable platform frame for navigation, storytelling, context continuity, summaries, and user feedback. Target applications may differ in implementation technology, but should not feel like separate products.

### Explain integration without breaking immersion

The default experience stays stakeholder-friendly. Technical detail is layered into dedicated views such as technology overview, implementation, patterns, and debug.

### Reuse existing strengths

Existing context handover, step-based flow logic, isolated target variants, and cross-runtime return channels should be reframed and improved rather than replaced.

## Scope

### In scope

- Volkswagen Aftersales positioning from landing page onward
- one complete Aftersales journey centered on service appointment planning
- four additional Aftersales scenario cards with lighter interactions
- improved flight-booking journey as a preserved reference flow
- technology overview page
- implementation / how-it-works page
- continued support for linked, embedded, modal, integrated, and new-tab patterns
- GroupUI-consistent visual refresh
- desktop-first layouts with usable narrow-screen behavior
- bilingual support for newly added or expanded user-facing content

### Out of scope

- live backend integration
- production-grade enterprise connectivity
- authentication or real user management
- replacing the current architecture with a single-framework rebuild
- removing the flight-booking flow
- turning all Aftersales scenarios into fully equal deep workflows

## Information Architecture

The product should evolve the current shell into the following stable content model:

- Overview
- Aftersales journey
- Flight booking
- Technology overview
- Implementation
- Comparison
- Linked launchpad
- Embedded workspace
- Integrated experience
- Patterns
- Debug

Labels may be refined for presentation, but the underlying responsibilities should remain stable.

## Primary User Journey

### Journey: Service appointment with workshop capacity

This is the primary Aftersales flow and the main path showcased on the overview page.

#### Step 1: identify vehicle and service need

The shell gathers or preloads:

- demo customer
- demo vehicle
- VIN / vehicle identifier
- mileage
- service concern
- service category

The shell establishes shared context and visibly opens the Aftersales journey.

#### Step 2: select workshop capacity

An Angular-powered target presents available workshop appointments and capacity options. The user selects a date and time combination.

#### Step 3: choose service package

A Svelte-powered target recommends service packages or add-ons based on vehicle, mileage, and service concern. The user selects the preferred package.

#### Step 4: choose optional extras

A Web Components-driven target offers modular follow-up options such as parts, mobility replacement, or service extras. This step must remain visually consistent with the shell while still being explainable as a separate runtime participant.

#### Step 5: review and confirm

The React shell summarizes:

- customer and vehicle context
- selected appointment
- chosen service package
- selected extras
- estimated price
- estimated duration

The shell then presents a service order preview.

### Required reveal

At least one point in the journey must make the integration story explicit by showing that Angular, Svelte, and Web Components each contributed a step while the shell maintained continuity. This reveal must feel intentional and educational, not like a technical leak or debug accident.

## Secondary Aftersales Scenarios

The overview page must include four additional Aftersales scenario cards:

- Recall / Service campaign check
- Parts availability and workshop order
- Customer follow-up
- Mobility replacement

For the first release, these are lighter showcase entries. They may reuse existing interaction patterns, route targets, and supporting views, but each card must clearly communicate:

- the business scenario
- the platform capability it demonstrates
- the next step or example action available in the demo

## Flight Booking Reference Flow

The flight-booking flow remains available from primary navigation but is positioned as a secondary proof flow.

### Required product treatment

- It remains fully reachable and functional.
- It is described as a reference or legacy demonstrator journey.
- It continues to demonstrate cross-runtime orchestration across the shell and multiple targets.
- Its UX becomes easier to understand, especially around step labels, ownership, summary, and responsive behavior.
- It must not overshadow the Aftersales journey on the landing page or in messaging.

## Page Requirements

### Overview

The overview page must:

- introduce the Volkswagen Aftersales platform story
- clearly prioritize the primary service-appointment journey
- present the four secondary Aftersales scenario cards
- explain in one concise section that the platform combines multiple frontend applications into one coherent experience
- still provide a secondary entry to the flight-booking reference flow

### Aftersales journey

The journey page must:

- show clear step progression
- maintain visible continuity from shell to target-driven steps
- keep summary and progress understandable across the whole flow
- support an end-to-end completion path

### Flight booking

The flight-booking area must:

- preserve the existing flow contract
- improve step comprehension and shell-side summary clarity
- better explain which technology owns which step
- remain usable on narrow screens

### Technology overview

This page must include entries for:

- React
- Angular
- Svelte
- Web Components
- GroupUI
- Vite
- integration layer

Each entry must explain:

- where the technology appears
- what capability it powers
- why it is a good fit for that role
- what the platform gains from that choice

### Implementation

This page must explain:

- the shell role
- how targets are attached
- the shared context model
- communication via URL, `BroadcastChannel`, and `postMessage`
- GroupUI as the shared design language
- build and deployment via Vite and GitHub Pages
- the testing and quality-assurance approach

This page should read like a concise briefing for architects and developers, not low-level generated documentation.

### Comparison, patterns, linked, embedded, integrated, debug

These views remain available to preserve the demonstrator’s educational value. They are secondary to the business narrative, but they must continue to make integration choices inspectable and explainable.

## Content And UX Requirements

### Design system

- GroupUI is mandatory for the visible UI language.
- Lavender references guide layout rhythm and presentation quality.
- The visual system must remain coherent across host and target experiences.

### Language

- New or expanded user-facing content must support German and English.
- Terminology must stay consistent across shell and targets.

### Responsiveness

- Desktop is the primary presentation mode.
- The primary Aftersales flow and the flight-booking flow must remain usable on narrow screens.
- Summary panels, steppers, tables, cards, and modal content must remain readable and operable.

### Accessibility

- Keyboard access must remain viable in host and target views.
- Focus handling must survive modal, embedded, and new-tab interactions.
- Labels, structure, and status messages must remain understandable without relying only on color.

## Demo Data Requirements

The demo must use local repository-based data for:

- customers
- vehicles
- workshop locations
- appointment slots
- service packages
- parts and availability
- campaigns or recalls
- mobility options
- flight-booking reference data

The data should feel believable in an Aftersales context and be understandable during a live demo. Runtime behavior must not depend on live external services.

## Edge Cases To Cover

The product and engineering implementation must visibly handle or safely fall back for:

- missing or malformed context payloads
- target launch without shell context
- partial customer or vehicle data
- stale return messages
- unknown VIN or unsupported demo vehicle
- no workshop capacity for the selected date
- no recommendation available
- unavailable parts or alternatives required
- language change during a flow
- returning to a partially completed journey
- the same target opened multiple times
- delayed target return after shell state has moved on
- narrow-screen overflow in stepper, summary, table, or modal content
- focus loss when entering or leaving target-driven steps

## Success Criteria

The product is successful when:

- a business stakeholder can explain the platform story after one guided pass
- the primary Aftersales journey feels coherent even though multiple runtimes participate
- the technology overview and implementation pages provide enough detail for technical discussion
- the flight-booking flow still works as a clear reference proof
- the demo communicates “separate apps, one platform” without requiring spoken architectural explanation

## Acceptance Criteria

### Overall

- The landing and navigation hierarchy clearly position Volkswagen Aftersales as the main story.
- The flight-booking flow remains accessible and operational as an improved secondary flow.
- The host shell remains the continuity owner for navigation, context, summaries, and user feedback.
- Multiple frontend technologies are present and explainable inside one coherent UX.

### Aftersales journey

- A complete end-to-end Aftersales journey is available.
- The journey spans multiple runtime participants.
- Shared context includes at least vehicle, customer, and current journey information.
- The shell can summarize results contributed by multiple steps.
- At least one visible target-to-shell return interaction is part of the journey.

### Overview and secondary scenarios

- The overview page presents one dominant primary Aftersales entry point.
- Four additional Aftersales scenario cards are visible and understandable.
- Each scenario card communicates the business scenario and platform capability it demonstrates.

### Technology and implementation content

- The technology overview includes all required technologies and their demo roles.
- The implementation page explains host role, target attachment, context model, browser-native communication, GroupUI alignment, build/deployment, and quality assurance.

### Flight booking

- The flight-booking journey remains reachable from primary navigation.
- Cross-runtime orchestration remains intact.
- Step ownership and summary behavior are clearer than before.
- Narrow-screen behavior is improved for the key booking path.

### Content, UX, and data

- Newly added or expanded user-facing content is bilingual.
- GroupUI is used consistently across layouts, cards, forms, navigation, steppers, tables, and status-related UI.
- Demo data is understandable, internally consistent, and locally available in the repository.
