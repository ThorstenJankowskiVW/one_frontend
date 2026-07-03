# Codebase Analysis

## Repo Footprint
- Workspace contains a single repo at `repos/one_frontend`.
- Existing standards footprint contains only `global/how-agents-document.md`.
- Repo is a Vite-based multi-frontend demonstrator with a host shell, isolated runtime targets, shared packages, and documentation.

## Architecture Findings
- The repo is intentionally split into `apps/`, `packages/`, `docs/`, and `tests/`.
- The host shell runs from repo-root entrypoints today, while `apps/host-shell/` is reserved for a later dedicated shell app.
- Shared browser concerns live in packages: context model, integration layer, demo data, and UI contracts.
- Integration patterns rely on URL-serialized context, `BroadcastChannel`, `postMessage`, and browser-native events.

## Frontend Findings
- The host direction is React, but the running demo deliberately supports multiple runtimes: React, Angular, Svelte, native Custom Elements, and vanilla JS.
- GroupUI is the design system and runtime component layer.
- `Groupui_Markdown_RAG/` contains the local Markdown source material for GroupUI design-system, component, token, navigation, and micro-frontend guidance.
- `Groupui_Markdown_RAG/Accessibility - GroupUI - Volkswagen Group - Digital Design.md` provides a local baseline for contrast, focus, keyboard usage, form accessibility, and responsive accessibility.
- `/Users/dv60tja/projekte/one_frontend/Lavender_Examples` contains local PNG-based UI examples that can be used as visual orientation, but not as technical source material.
- Styling uses GroupUI tokens plus local CSS; the repo is not using utility CSS or CSS-in-JS.
- Source modules use plain ESM JavaScript and keep objects serializable across app boundaries.
- Current repo text and `lang` usage are mixed across German and English, so language and locale handling must be standardized explicitly.

## Testing Findings
- `npm test` covers syntax checks and a full production build.
- `npm run test:e2e` uses Puppeteer against the built preview output.
- The critical behaviors are cross-page and cross-runtime, so standards should prioritize integration and browser tests over isolated unit-only confidence.

## Business / Product Findings
- The product is a demonstrator for comparing integration patterns, not a production customer application.
- The core journey is reused across linked, embedded, and integrated experiences.
- The project emphasizes explicit system boundaries, context passing, and a shared UX language across different frontend technologies.
- The multi-technology character is mandatory: React, Angular, Svelte, and Web Components all need to participate in a seamless integrated experience.
- The business framing should cover a workshop/service process, with travel booking available as an additional plakative demo journey.

## Standards Implications
- Standards should prefer browser-native integration contracts over framework-specific coupling.
- Standards should treat shared packages as the source of truth for context shape and navigation contracts.
- Backend, database, payments, and authentication standards need to describe the current boundary clearly: these concerns are out of scope for this repo and must not be invented inside the frontend demo.
- Repo structure suggests one additional useful standard area: when to update `docs/architecture`, `docs/decisions`, `docs/demo-flows`, and `docs/progress` as implementation changes land.
- The repo's core differentiator justifies a dedicated standard for integration patterns, context handover, and target-to-host return channels.
- UX and content rules need to be explicit: bilingual DE/EN, responsive with working mobile behavior, and desktop-first layout decisions.
- Accessibility and internationalization deserve dedicated standards because they cut across host, targets, navigation, forms, and content in every integration pattern.
- The standards set now supports a repo-specific "Definition of Done" so future work can be checked consistently instead of relying on interpretation per change.
