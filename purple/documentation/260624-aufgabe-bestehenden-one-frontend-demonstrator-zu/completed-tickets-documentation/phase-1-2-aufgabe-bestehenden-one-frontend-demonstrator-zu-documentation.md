# Ticket Documentation: VAP-1.2

## Summary

- Expanded the shared navigation contract to the full Aftersales-first information architecture.
- Kept the existing integration-pattern surfaces intact while adding the missing top-level views needed by the product spec.
- Added presentation metadata helpers in the integration layer so later host-shell tickets can render business-facing labels and ownership hints without duplicating mode-specific copy.

## Files Changed

- `repos/one_frontend/packages/ui-contracts/src/navigation.js`
- `repos/one_frontend/packages/integration-layer/src/integration.js`

## Verification

- `npm test`

## Notes

- The new navigation entries are additive and do not remove current linked, embedded, integrated, pattern, or debug views.
- Existing integration mode identifiers remain unchanged; only presentation metadata was added.

## Follow-Ups

- `VAP-2.1` can now rebuild the host shell against the new top-level IA contract.
