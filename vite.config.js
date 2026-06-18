import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/one_frontend/',
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        calendarTarget: resolve(import.meta.dirname, 'calendar-target.html'),
        linkedHost: resolve(import.meta.dirname, 'linked-host.html'),
        linkedTarget: resolve(import.meta.dirname, 'linked-target.html'),
        reactTarget: resolve(import.meta.dirname, 'target-react.html'),
        svelteTarget: resolve(import.meta.dirname, 'target-svelte.html'),
        webComponentsTarget: resolve(import.meta.dirname, 'target-stencil.html')
      }
    }
  }
})
