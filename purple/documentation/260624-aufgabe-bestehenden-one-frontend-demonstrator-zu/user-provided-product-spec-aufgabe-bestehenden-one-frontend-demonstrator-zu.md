# Volkswagen Aftersales Platform Demonstrator

## Overview

This feature evolves the existing One Frontend demonstrator into a Volkswagen Aftersales Platform demo. The current flight-booking journey remains part of the application, but it is repositioned as an existing cross-technology proof that is visually improved and easier to understand. The Aftersales story becomes the primary narrative.

The demonstrator must make one thing obvious to non-technical and technical stakeholders alike: multiple subapplications built with different frontend technologies can feel like one coherent platform when they share context, design language, navigation, and feedback mechanisms.

## Problem Statement

The current demonstrator already proves runtime integration across React, Angular, Svelte, and Web Components, but the business story is still too generic and the integration value is not yet self-explanatory enough for Aftersales stakeholders.

The next version must solve three problems at the same time:

1. Make the platform understandable within a few minutes for non-technical viewers.
2. Make the integration “aha effect” visible without turning the UI into a technical debug screen.
3. Tie the experience to a believable Volkswagen Aftersales narrative while preserving the existing flight-booking journey as a reusable proof.

## Working Assumptions

### Assumption: Primary Showcase Flow

The default first implementation should use `Service-Termin mit Werkstattkapazität` as the main end-to-end Aftersales flow because it is the clearest stakeholder story and maps well to the existing booking and date-selection capabilities.

### Assumption: Scope Shape

The preferred scope is:

- one fully worked primary Aftersales flow
- four additional Aftersales scenarios as lighter showcase entries
- one preserved and improved flight-booking flow

This keeps the demo understandable while still demonstrating platform breadth.

### Assumption: Demo Data Strategy

The preferred data strategy is locally curated demo data stored in the repository. External data sources such as Kaggle may be used as inspiration or source material, but the demonstrator should not depend on network access at runtime.

## Goals

### Business Goals

- Present a Volkswagen Aftersales platform story that feels credible and easy to explain.
- Demonstrate that different frontend technologies can participate in one shared UX.
- Give architects and developers a dedicated “how it works” briefing page.
- Preserve the existing flight-booking story as a familiar reference for integration and responsive UX.

### User Experience Goals

- Clear entry points from the shell home page.
- Simple navigation with obvious next steps.
- Seamless-looking flow transitions even when the underlying subapps differ.
- GroupUI-first look and feel with Lavender-inspired layout and content patterns.
- Strong desktop-first presentation with fully usable narrow-screen behavior.

## Non-Goals

- No full backend or live enterprise-system integration.
- No complete rewrite of the existing demonstrator architecture.
- No removal of the flight-booking journey.
- No attempt to turn every Aftersales example into a fully equal deep workflow.
- No technology page that reads like an internal framework inventory without business relevance.

## Target Audiences

### Primary Audience

- non-technical business stakeholders
- Aftersales product owners
- managers who need to understand the platform value quickly

### Secondary Audience

- frontend architects
- developers evaluating microfrontend integration patterns
- UX and platform teams validating GroupUI consistency

## Experience Principles

### Principle 1: Platform First, Technology Second

The user should first understand the business flow. The fact that multiple subapplications are involved should become visible as a positive reveal, not as friction.

### Principle 2: One Shell, Many Capabilities

The React host shell remains the stable frame for navigation, summary, storytelling, and state continuity. Targets may differ in implementation technology, but not in perceived UX quality.

### Principle 3: Explain Integration Without Breaking Immersion

The application should offer an explicit way to understand context handover, return channels, and target ownership, but this explanation should be layered. The default view stays business-friendly; technical detail appears when the user chooses to inspect it.

### Principle 4: Reuse Existing Strengths

The current date selection, multi-step booking logic, target isolation, and cross-runtime return channels should be reused and reframed instead of replaced.

## Proposed Product Structure

### Primary Navigation

The application should keep the host-shell structure but evolve the content into a clearer platform information architecture:

- Overview / Platform entry
- Aftersales journey
- Flight booking
- Technology overview
- Implementation / How it works
- Integration patterns / debug views

The exact route labels may differ, but the content model should remain stable.

### Page Responsibilities

### Overview / Platform Entry

- Introduce the Volkswagen Aftersales platform story.
- Highlight one primary Aftersales entry point.
- Offer secondary scenario cards for other Aftersales examples.
- Explain in one short section that the platform combines multiple subapplications.

### Aftersales Journey

- Present the primary end-to-end service process.
- Show clear step progression and status.
- Keep the shell summary visible while subapps contribute specialized steps.

### Flight Booking

- Keep the existing flow fully accessible.
- Improve clarity, responsiveness, and step comprehension.
- Reframe it as a legacy or reference demo journey that still proves cross-runtime orchestration.

### Technology Overview

- Explain which subapplication uses which technology.
- For each technology, describe its role and benefit in the demo context.
- Include at least React, Angular, Svelte, Web Components, GroupUI, Vite, and the integration layer.

### Implementation / How It Works

- Explain the shell/host role.
- Explain how subapplications are attached.
- Explain the shared context model.
- Explain URL handover, `BroadcastChannel`, and `postMessage`.
- Explain how GroupUI creates a shared design system.
- Explain build, deployment, and quality assurance.

### Integration Patterns / Debug

- Preserve the current educational value of linked, embedded, integrated, modal, and new-tab patterns.
- Keep it secondary to the business narrative.

## Primary User Flow

### Flow: Service Appointment With Workshop Capacity

### Entry

The user starts on the platform overview and selects a service-related action such as “Plan service appointment”.

### Step 1: Identify Vehicle And Need

The shell collects or preloads:

- vehicle or demo vehicle
- VIN/FIN or vehicle identifier
- mileage
- customer
- service concern or service reason

The shell establishes shared context and opens the journey.

### Step 2: Workshop Capacity Selection

An Angular subapplication shows available workshop slots and capacity-based options. The user chooses a date/time combination.

### Step 3: Service Package Recommendation

A Svelte subapplication suggests suitable service packages or add-ons based on vehicle context, mileage, and problem statement.

### Step 4: Optional Parts Or Mobility Add-On

A Web Components subapplication or another isolated target shows related parts, replacement mobility, or service extras in a visibly modular but UX-consistent way.

### Step 5: Summary And Confirmation

The React shell summarizes:

- vehicle and customer context
- chosen appointment
- selected package or extras
- estimated price and duration

The shell then presents the generated service order preview.

### Aha Moment

At least one point in the journey should explicitly reveal that:

- one step came from Angular
- one step came from Svelte
- one step came from Web Components
- the shell kept the journey coherent

This reveal must feel intentional and understandable, not like a debug leak.

## Secondary Showcase Flows

The following additional examples should appear as scenario cards or lightweight flows. They do not all need the same depth as the primary flow in the first iteration.

### Recall / Service Campaign Check

- VIN-based eligibility or campaign check
- display of required work and affected parts
- optional handoff into service-order creation

### Parts Availability And Workshop Order

- repair-case selection
- parts availability and alternatives
- workshop feasibility check
- handoff into order setup

### Customer Follow-Up

- post-service feedback or open question capture
- optional scheduling of a follow-up appointment
- visible return-channel from remote app to shell

### Mobility Replacement

- replacement vehicle, shuttle, or transit option
- cost implication or package selection
- linkage into service order summary

## Existing Flow To Preserve And Improve

### Flight Booking

The current flight-booking journey remains available and functional.

### Required Improvements

- clearer step hierarchy and labels
- stronger responsive behavior for the full booking flow
- improved visual distinction between current step, completed steps, and next steps
- better summary logic in the shell
- clearer explanation of which subapplication owns which step

### Product Role

The flight-booking flow should be positioned as:

- an existing demonstrator capability
- a comparison flow for integration patterns
- a familiar reference for audiences who understand travel booking faster than workshop operations

It must not overshadow the Aftersales story in the main landing and navigation hierarchy.

## User Stories

### Stakeholder Understanding

As a business stakeholder, I want to understand within a few minutes what the platform does, so that I can explain its value without needing architectural context first.

### Platform Continuity

As a demo viewer, I want the experience to feel like one application, so that multiple subapps do not feel fragmented.

### Technology Transparency

As an architect or developer, I want to see which technology powers which capability, so that I can discuss tradeoffs with real examples.

### Integration Explainability

As a technical stakeholder, I want a dedicated implementation page, so that I can understand context passing, communication mechanisms, and deployment without reverse-engineering the code.

### Flight Flow Preservation

As an existing demo owner, I want the flight-booking flow to remain intact and improved, so that prior demos and integration proofs are not lost.

## Acceptance Criteria

### Overall Product Acceptance

- The demo has a clear Volkswagen Aftersales positioning from the landing view onward.
- The application keeps the flight-booking flow accessible and operational as a secondary but improved journey.
- The host shell remains the primary navigation and continuity layer.
- Multiple frontend technologies are visibly present and explainable inside one coherent UX.
- GroupUI is used consistently across layouts, cards, forms, navigation, steppers, tables, and status components.
- The content follows the repo standard of bilingual extension for newly added user-facing text and journeys.

### Aftersales Journey Acceptance

- A primary Aftersales flow is available end to end.
- The flow spans multiple subapplications or isolated runtime targets.
- Shared context carries at least vehicle, customer, and journey-step information across the flow.
- The shell can summarize the combined result from multiple steps.
- At least one return-channel interaction from a target back to the shell is visible in the user journey.

### Technology Overview Acceptance

- The page includes React, Angular, Svelte, Web Components, GroupUI, Vite, and the integration layer.
- Each technology entry explains its benefit in the demo, not only its name.
- The page makes clear which capability or subapplication each technology powers.

### Implementation Page Acceptance

- The page explains the host-shell role.
- The page explains subapplication attachment and ownership.
- The page explains the context model.
- The page explains communication via URL, `BroadcastChannel`, and `postMessage`.
- The page explains GroupUI design-system alignment.
- The page explains build and deployment via Vite and GitHub Pages.
- The page explains testing and quality assurance at a high level.

### Flight Booking Acceptance

- The flight-booking journey remains reachable from primary navigation.
- The flow still demonstrates cross-runtime orchestration.
- The UX is clearer than in the current version, especially on narrow screens.
- The summary and stepper behavior are easier to understand than before.

### Content And Data Acceptance

- Demo data is understandable, consistent, and believable in the Aftersales context.
- If external datasets are used as input material, their origin and local integration are documented.
- The runtime demo does not require live external data fetching.

## Scope

### In Scope

- Volkswagen Aftersales repositioning of the demo
- one primary Aftersales journey
- four additional scenario entry points or lighter flows
- improved flight-booking UX
- technology overview page
- implementation/how-it-works page
- visible cross-runtime integration narrative
- GroupUI/Lavender-aligned UI improvements
- responsive refinement for key journeys
- documentation of demo-data strategy

### Out Of Scope

- production backend integration
- authentication or real user management
- real workshop or ERP connectivity
- fully dynamic external dataset ingestion at runtime
- replacement of all existing integration patterns with a new architecture
- removing old targets purely because they do not fit the new story immediately

## Edge Cases And Error States

### Context And Handover

- missing or malformed URL context
- target launched without shell context
- partial context where vehicle exists but customer or mileage does not
- stale return message from a previously opened target

### Aftersales Data

- unknown VIN or unsupported demo vehicle
- no workshop capacity for selected date
- no service package recommendation available
- parts unavailable or alternative required
- campaign check returns no active campaign

### UX And Navigation

- user changes language mid-flow
- user navigates away and returns to a partially completed flow
- user opens the same target twice in different tabs
- target returns a result after the shell state has advanced

### Responsive And Accessibility

- stepper or summary becomes unreadable on narrow screens
- tables or status components overflow on mobile widths
- modal content becomes unusable on smaller viewports
- keyboard focus is lost when entering or leaving a target-driven step

## Content Guidelines

### Tone

- simple, stakeholder-friendly, low jargon by default
- technical explanation only where invited by the page purpose

### Language

- new or expanded UI content should support German and English
- terminology must stay consistent across host and targets

### Visual Direction

- GroupUI is the mandatory design system
- Lavender examples are visual orientation, not a second design system
- layouts should be calm, structured, and presentation-ready
- technology boundaries may be explained, but should not visually fragment the user experience

## Open Decisions For Review

- Confirm whether `Service-Termin mit Werkstattkapazität` should be the primary journey.
- Confirm whether the secondary four Aftersales examples should be lightweight scenario cards or deeper flows.
- Confirm whether any external Kaggle-derived source should be referenced in the final demo-data documentation.
- Confirm whether the first landing view should foreground Aftersales only or show Aftersales plus Flight Booking side by side.

## Success Indicators

- a stakeholder can explain the platform story after one guided pass through the overview and main flow
- a developer can point to the technology overview and implementation page to explain architecture decisions
- the flight-booking flow still works as an integration proof and no longer feels like a detached side demo
- the application communicates “separate apps, one platform” without relying on spoken explanation alone
