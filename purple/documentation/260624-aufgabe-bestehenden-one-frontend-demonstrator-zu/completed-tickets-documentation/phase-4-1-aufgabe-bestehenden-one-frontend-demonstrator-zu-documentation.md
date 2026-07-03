# Ticket Documentation: VAP-4.1

## Summary

- Repositioned the flight-booking flow as a secondary reference journey instead of the primary story.
- Preserved the existing multi-runtime booking path while clarifying runtime ownership and shell-vs-target responsibilities.
- Kept the booking path responsive and visible in navigation for comparison and regression coverage.

## Files Changed

- `repos/one_frontend/app.js`

## Verification

- `npm test`
- `BASE_URL=http://127.0.0.1:4175/one_frontend/ npm run test:e2e`

## Notes

- The flight flow still exercises Angular, Svelte, Web Components, and the React shell, but it no longer competes with the Aftersales journey for landing-page emphasis.

## Follow-Ups

- `VAP-4.2` refreshed automated verification so both the Aftersales-first shell and the flight reference path remain covered.
