# Ticket Documentation: VAP-2.1

## Summary

- Rebuilt the host-shell landing and overview around the Volkswagen Aftersales platform story.
- Added a primary Aftersales entry point, runtime ownership framing, scenario cards, and a secondary flight-booking reference entry.
- Shifted the default shell context to the Aftersales service flow while preserving the broader integration demo surfaces.

## Files Changed

- `repos/one_frontend/app.js`

## Verification

- `npm test`
- `BASE_URL=http://127.0.0.1:4175/one_frontend/ npm run test:e2e`

## Notes

- The host shell now treats React as the canonical continuity layer for Aftersales instead of positioning flight booking as the default story.
- Existing linked, embedded, integrated, pattern, and debug surfaces remain reachable through the shared navigation contract.

## Follow-Ups

- `VAP-2.2` extended the shell with technical stakeholder views based on the new information architecture.
