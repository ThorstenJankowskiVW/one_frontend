# Ticket Documentation: VAP-1.1

## Summary

- Preserved the existing uncommitted Aftersales context expansion in `packages/context-model/src/context.js`.
- Recreated `packages/demo-data/src/cases.js` with backward-compatible exports used by the current host shell.
- Added repo-local Aftersales seed data for workshop appointments, service packages, optional extras, secondary scenario cards, and a preserved flight-booking reference description.

## Files Changed

- `repos/one_frontend/packages/context-model/src/context.js`
- `repos/one_frontend/packages/demo-data/src/cases.js`

## Verification

- `npm install`
- `npm test`

## Notes

- `npm test` passed after installing local dependencies because `vite` was not initially available in the workspace environment.
- The new `cases.js` keeps the existing `demoCase`, `journeySteps`, `targetPictures`, and `initialContexts` exports intact so downstream host imports remain stable.

## Follow-Ups

- `VAP-1.2` is unblocked and can now update navigation and integration metadata against the new Aftersales-first data model.
