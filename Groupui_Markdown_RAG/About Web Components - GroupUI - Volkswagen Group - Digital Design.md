---
title: About Web Components
source: GroupUI
category: guideline
type: documentation
topics:
  - accessibility
  - angular
  - react
  - web-component
last_modified: Thu, 07. May 2026 11:58
---

# About Web Components

---

## Introduction
Based on the current Volkswagen AG corporate brand design, we are using Stenciljs Web Components to help developers easily integrate components in their applications. Stenciljs components are basically Web Components, so they work in any major framework or with no framework at all.
You can find more information about the dependencies under the following links:
* [Stenciljs](https://stenciljs.com/)
* [Web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

---

## Resources
The GroupUI web components can be used directly as HTML components or as wrapped angular/react components. All variants are shipped via NPM packages. The plain web components are also available as Javascript files for direct integration into plain Javascript/HTML.
Detailed documentation for the integration and usage can be found at the links below:
* [Plain HTML](https://digitaldesign.volkswagen-group.com/r/BugmJhs1R2-MOTz6NXc1PUWQPpktt7M_ooiidb_iBq4)
* [Angular](https://digitaldesign.volkswagen-group.com/r/2C2uOBEOOVErCelS0ibGD1v0G_4KXJjtZ5HuXd1zf-k)
* [React](https://digitaldesign.volkswagen-group.com/r/0D0gcSssatKYG-1yQkIVYWlNHByiohkbVZpXAfE2-hs)

---

## Example Repositories
For a better understanding on how to use the web components, there are basic code examples based on the forms templates provided in the templates section.
These example implementations also feature tests to cover different test situations as well.
The examples are implemented in pure html, html webpack, angular, react and svelte:
You can download them from here:
* <https://groupui.vwapps.run/examples/html-pure.tgz>
* <https://groupui.vwapps.run/examples/html-webpack.tgz>
* <https://groupui.vwapps.run/examples/angular.tgz>
* <https://groupui.vwapps.run/examples/react.tgz>
* <https://groupui.vwapps.run/examples/svelte.tgz>

---

### Browser
We are supporting the following browsers:
**Full native support:**
* Chrome 60+ (because we use some css pseudo classes we recommend to use version 105+ for the best experience)
* Safari 10.1+ (because we use some css pseudo classes we recommend to use version 15.4+ for the best experience)
* Firefox 121+
* Edge 79+ (because we use some css pseudo classes we recommend to use version 105+ for the best experience)

---

### Frameworks
* Using the Angular Wrapper in an Angular version not older than 18 months
* Using the React Wrapper in a React version not older than 18 months

---

### Not supported
* Versions of GroupUI older than 4 minor releases
* Using our Web Components in non-Webkit browsers
* Server-Side Rendering (SSR)
* Using our Framework in non-browser context
* Troubleshooting when using yarn as package manager
* Combining GroupUI web components with other component frameworks
