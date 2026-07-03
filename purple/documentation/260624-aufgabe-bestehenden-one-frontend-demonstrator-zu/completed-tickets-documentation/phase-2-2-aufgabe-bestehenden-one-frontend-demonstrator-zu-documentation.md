# Ticket Documentation: VAP-2.2

## Summary

- Added dedicated technology-overview and implementation briefing views to the host shell.
- Mapped the runtime roles of React, Angular, Svelte, Web Components, GroupUI, and shared packages into presentation-ready cards.
- Surfaced integration-mode ownership hints directly from the shared integration metadata instead of duplicating them ad hoc in the UI.

## Files Changed

- `repos/one_frontend/app.js`

## Verification

- `npm test`
- `BASE_URL=http://127.0.0.1:4175/one_frontend/ npm run test:e2e`

## Notes

- The technical pages remain secondary views in navigation rather than replacing the Aftersales-first landing experience.
- Shared integration metadata from `packages/integration-layer` is now visibly consumed by the host shell.

## Follow-Ups

- `VAP-3.1` and `VAP-3.2` used the new shell framing to anchor target-level Aftersales handovers.
