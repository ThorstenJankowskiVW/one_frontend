# Ticket Documentation: VAP-3.1

## Summary

- Rethemed the Angular target from a generic date selector into an Aftersales workshop-capacity and appointment-slot step.
- Kept the browser-native return channels explicit and used them to return structured appointment data to the shell.
- Preserved flight-booking date selection through the same Angular target by branching on the shared journey context.

## Files Changed

- `repos/one_frontend/calendar-target.mjs`

## Verification

- `npm test`
- `BASE_URL=http://127.0.0.1:4175/one_frontend/ npm run test:e2e`

## Notes

- The Angular target now consumes shared workshop appointment demo data from `packages/demo-data`.
- The same target continues to support the flight reference flow without introducing a second, duplicated calendar implementation.

## Follow-Ups

- `VAP-3.2` consumed the returned Angular appointment payload to unlock package and extras handling in later runtime participants.
