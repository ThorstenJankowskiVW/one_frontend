# Ticket Documentation: VAP-4.2

## Summary

- Rewrote the production-build E2E smoke test around the Aftersales-first landing, target-host-target handovers, and the preserved flight reference flow.
- Added automated coverage for a full Aftersales host-to-target-to-host path through Angular, Svelte, and Web Components.
- Kept new-tab follow-up roundtrip verification for the linked/react-target path.

## Files Changed

- `repos/one_frontend/tests/e2e.cjs`

## Verification

- `npm test`
- `BASE_URL=http://127.0.0.1:4175/one_frontend/ npm run test:e2e`

## Notes

- The preview server used for QA in this environment was available on `http://127.0.0.1:4175/one_frontend/` because `4173` and `4174` were already occupied.
- The E2E assertions now explicitly target visible user flows rather than brittle incidental markup.
