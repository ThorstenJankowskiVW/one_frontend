import { defineCustomElements } from '@group-ui/group-ui/dist/loader/index.es2017.js';
import { mount } from 'svelte';
import SvelteFlightOptions from './apps/remote-svelte-options/src/SvelteFlightOptions.svelte';

defineCustomElements().catch((error) => {
  console.error('GroupUI custom elements failed to load', error);
});

mount(SvelteFlightOptions, {
  target: document.querySelector('#svelte-root')
});
