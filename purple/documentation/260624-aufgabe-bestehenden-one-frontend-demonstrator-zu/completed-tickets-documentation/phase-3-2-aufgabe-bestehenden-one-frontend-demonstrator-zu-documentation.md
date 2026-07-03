# Ticket Documentation: VAP-3.2

## Summary

- Converted the Svelte target into an Aftersales service-package recommendation step while keeping flight-option behavior available for the reference flow.
- Converted the Web Components target into an Aftersales extras, parts, and mobility step with structured return payloads.
- Updated the React shell to merge Angular, Svelte, and Web Components payloads into a coherent service-order preview.

## Files Changed

- `repos/one_frontend/app.js`
- `repos/one_frontend/apps/remote-svelte-options/src/SvelteFlightOptions.svelte`
- `repos/one_frontend/apps/remote-webcomponents-action/src/action-card.js`
- `repos/one_frontend/target-stencil.html`

## Verification

- `npm test`
- `BASE_URL=http://127.0.0.1:4175/one_frontend/ npm run test:e2e`

## Notes

- The host shell remains the canonical owner of merged journey state; targets only contribute explicit payloads.
- The final service-order preview makes the runtime contributions visible without collapsing into a raw debug screen.

## Follow-Ups

- `VAP-4.1` refined the preserved flight-booking experience after the Aftersales journey was complete.
