---
title: Navigation - global top
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
  - web-component
last_modified: Wed, 20. May 2026 12:01
---

# Navigation - global top

---

## Usage
Global top navigation represents the top-level pages of a site's structure - the pages just below the home page. These controls appear in an unchanged, consistent position on all pages of a site.
Global top navigation includes branding, top level navigation items and utility links for global functions (eg. log-in/log-out, language selection, settings).
**Use global top navigation when:**
* site has only 2-5 main navigation items
* number of main navigation items will not increase in the future
* it is important to maximize the content area
[Navigation overview](https://digitaldesign.volkswagen-group.com/r/Yi-5jIRZ3yV8eOnDl-By1ZLYZml6ZTfUpTQM7HNBGFg)

---

### Anatomy
The global top navigation spans the full width of the viewport and is the topmost element in the browser window. The global navigation is persistent throughout the product experience.
Branding
Top level global items
Utility links for global functions
Gap as protected space between branding and items
Sub-menu to display more items
Divider

---

### Branding
To ensure consistent and clear communication across all applications, it is crucial that the corporate logo is uniformly presented in both public and internal applications and websites.
There are four different possibilities to customize the branding of the global top navigation, depending on the website or application. For the correct use of logos inside the global top navigation, please find more guidelines about brand architecture in Logos.
[Logos](https://digitaldesign.volkswagen-group.com/r/glWRMpz1kJzSsiav85Gj4vziFWrFGKglvG5HRxpXOBk)
Brand architecture
```
```html
<div id="brand-logo-demo">
<div class="brand-logo-demo-case">
<groupui-brand-logo breakpoint="s" type="entity"></groupui-brand-logo>
</div>
<div class="brand-logo-demo-case">
<groupui-brand-logo breakpoint="s" type="entity">Entity</groupui-brand-logo>
</div>
<div class="brand-logo-demo-case">
<groupui-brand-logo breakpoint="s" type="division">Division</groupui-brand-logo>
</div>
<div class="brand-logo-demo-case">
<groupui-brand-logo breakpoint="s" type="application">Application name</groupui-brand-logo>
</div>
</div>
```
```

---

### Responsive behavior
The global top navigation supports all breakpoints. Depending on the amount of global items, global utilities or lengths of application name, the content collapses into a hamburger menu.
There is a [template](https://digitaldesign.volkswagen-group.com/r/n_E79O9SHIG3ktWcZkiuf58b_rhH_c7bIwsgLOZLco0) which also handles the active state of all items (mobile and desktop).
Responsive behavior for top navigation
On smaller breakpoints, where the global top navigation transforms into a mobile navigation, the hamburger icon triggers the global side menu component.
Mobile navigation - hamburger icon triggers global side menu
```
```html
<div id="groupui-global-top-navigation-demo">
<groupui-global-top-navigation>
<groupui-brand-logo type="application">Application name</groupui-brand-logo>
<groupui-global-top-navigation-mobile-utility-items>
<groupui-burger-menu>
<groupui-burger-menu-items>
<groupui-burger-menu-item>
<div slot="label">Global Item</div>
</groupui-burger-menu-item>
<groupui-burger-menu-item>
<div slot="label">Global Item</div>
</groupui-burger-menu-item>
<groupui-burger-menu-item>
<div slot="label">Global Item</div>
</groupui-burger-menu-item>
<groupui-burger-menu-item>
<div slot="label">Global Item</div>
</groupui-burger-menu-item>
</groupui-burger-menu-items>
<groupui-burger-menu-utility-items>
<groupui-burger-menu-utility-item icon="settings-24">
<div slot="label">Global Utility</div>
</groupui-burger-menu-utility-item>
<groupui-burger-menu-utility-item icon="settings-24">
<div slot="label">Global Utility</div>
</groupui-burger-menu-utility-item>
<groupui-burger-menu-utility-item icon="settings-24">
<div slot="label">Global Utility</div>
</groupui-burger-menu-utility-item>
</groupui-burger-menu-utility-items>
</groupui-burger-menu>
</groupui-global-top-navigation-mobile-utility-items>
</groupui-global-top-navigation>
<div id="content">
```
This empty page is a placeholder to show you an example of the hamburger menu
```html
</div>
</div>
```
```

---

### Combination with local navigation
Global top navigation can be combined with other navigation components. Which component to use depends on the available screen space, amount of local navigation categories, or whether you want to lock out the content area or not.
**For combination examples, see:**
* [Local side navigation](https://digitaldesign.volkswagen-group.com/r/tDm2kQD3FStkmTLQO99yoaE_kjsXghjknuhUjB5-0JQ)
* [Local top navigation](https://digitaldesign.volkswagen-group.com/r/YTjIW-46RNE2gqpOxPsmq_y0avmewEnJ3XflfK4sHJU)
Global top with local side navigation
```
```html
<div id="test">
<groupui-global-top-navigation breakpoint="s">
<groupui-brand-logo type="application">Application name</groupui-brand-logo>
<groupui-global-top-navigation-items>
<groupui-global-top-navigation-item>Global Item</groupui-global-top-navigation-item>
<groupui-global-top-navigation-item>Global Item</groupui-global-top-navigation-item>
<groupui-global-top-navigation-item>Global Item</groupui-global-top-navigation-item>
</groupui-global-top-navigation-items>
<groupui-global-top-navigation-utility-items>
<groupui-global-top-navigation-utility-item icon="settings-24" popover-placement="bottom-start">
<groupui-text slot="popover">Utility Item</groupui-text>
</groupui-global-top-navigation-utility-item>
<groupui-global-top-navigation-utility-item icon="notification-24" popover-placement="bottom-start">
<groupui-text slot="popover">Utility Item</groupui-text>
</groupui-global-top-navigation-utility-item>
<groupui-global-top-navigation-utility-item icon="user-24" popover-placement="bottom-start">
<groupui-text slot="popover">Utility Item</groupui-text>
</groupui-global-top-navigation-utility-item>
</groupui-global-top-navigation-utility-items>
</groupui-global-top-navigation>
<groupui-local-side-navigation>
<groupui-local-side-navigation-items>
<groupui-local-side-navigation-item>
<div slot="label">Local item</div>
</groupui-local-side-navigation-item>
<groupui-local-side-navigation-item>
<div slot="label">Local item</div>
</groupui-local-side-navigation-item>
<groupui-local-side-navigation-item>
<div slot="label">Local item</div>
</groupui-local-side-navigation-item>
<groupui-local-side-navigation-item>
<div slot="label">Local item</div>
</groupui-local-side-navigation-item>
<groupui-local-side-navigation-item>
<div slot="label">Local item</div>
</groupui-local-side-navigation-item>
<groupui-local-side-navigation-item>
<div slot="label">Local item</div>
</groupui-local-side-navigation-item>
</groupui-local-side-navigation-items>
</groupui-local-side-navigation>
</div>
```
```
Global top with local top navigation
```
```html
<groupui-global-top-navigation breakpoint="s">
<groupui-brand-logo type="application">Application name</groupui-brand-logo>
<groupui-global-top-navigation-items>
<groupui-global-top-navigation-item>Global Item</groupui-global-top-navigation-item>
<groupui-global-top-navigation-item>Global Item</groupui-global-top-navigation-item>
<groupui-global-top-navigation-item>Global Item</groupui-global-top-navigation-item>
</groupui-global-top-navigation-items>
<groupui-global-top-navigation-utility-items>
<groupui-global-top-navigation-utility-item icon="settings-24" popover-placement="bottom-start">
<groupui-text slot="popover">Utility Item</groupui-text>
</groupui-global-top-navigation-utility-item>
<groupui-global-top-navigation-utility-item icon="notification-24" popover-placement="bottom-start">
<groupui-text slot="popover">Utility Item</groupui-text>
</groupui-global-top-navigation-utility-item>
<groupui-global-top-navigation-utility-item icon="user-24" popover-placement="bottom-start">
<groupui-text slot="popover">Utility Item</groupui-text>
</groupui-global-top-navigation-utility-item>
</groupui-global-top-navigation-utility-items>
</groupui-global-top-navigation>
<groupui-local-top-navigation>
<groupui-local-top-navigation-item>Local Item</groupui-local-top-navigation-item>
<groupui-local-top-navigation-item>Local Item</groupui-local-top-navigation-item>
<groupui-local-top-navigation-item>Local Item</groupui-local-top-navigation-item>
<groupui-local-top-navigation-item>Local Item</groupui-local-top-navigation-item>
</groupui-local-top-navigation>
```
```

---

## Variants
Depending on the product and context of use, the global top navigation can be integrated into the respective product in different ways. The complexity of the global top navigation depends on the navigation hierarchy of the product and combinations with local navigation components.

---

### Global top navigation - standalone
The standalone variant contains at least the Branding and is always left aligned.
Global top navigation - standalone
```
```html
<div class="global-top-demo">
<groupui-global-top-navigation>
<groupui-brand-logo type="application"><span>Application Name</span></groupui-brand-logo>
</groupui-global-top-navigation>
<div id="content">
</div>
</div>
```
```

---

### Global top navigation - utilities
Global top navigation can contain utilities for universal, system-level functions such as profile, notifications, and similar functions. If space is limited use an overflow menu to show other actions.
Global top navigation - utilities
```
```html
<div class="global-top-demo">
<groupui-global-top-navigation breakpoint="s">
<groupui-brand-logo type="application"><span>Application Name</span></groupui-brand-logo>
<groupui-global-top-navigation-utility-items>
<groupui-global-top-navigation-utility-item icon="settings-24" popover-placement="bottom-start">
<div slot="popover">
<groupui-text>Global Item</groupui-text>
<groupui-text>Global Item</groupui-text>
<groupui-text>Global Item</groupui-text>
</div>
</groupui-global-top-navigation-utility-item>
<groupui-global-top-navigation-utility-item href="#" icon="notification-24">
</groupui-global-top-navigation-utility-item>
<groupui-global-top-navigation-utility-item>
<groupui-avatar inverted initials="AA"></groupui-avatar>
</groupui-global-top-navigation-utility-item>
</groupui-global-top-navigation-utility-items>
</groupui-global-top-navigation>
<div id="content">
</div>
</div>
```
```

---

### Global top navigation - items
Global top navigation can contain 2-5 global items which represent the sites' main structure. If a few extra items are required use a ‘More’ item with a sub-menu.
Global top navigation - items
```
```html
<div class="global-top-demo">
<groupui-global-top-navigation breakpoint="s">
<groupui-brand-logo type="application"><span>Application Name</span></groupui-brand-logo>
<groupui-global-top-navigation-items>
<groupui-global-top-navigation-item href="#">
```
Global item
```html
</groupui-global-top-navigation-item>
<groupui-global-top-navigation-item href="#">
```
Global item
```html
</groupui-global-top-navigation-item>
<groupui-global-top-navigation-item href="#">
```
Global item
```html
</groupui-global-top-navigation-item>
<groupui-global-top-navigation-item href="#">
```
Global item
```html
</groupui-global-top-navigation-item>
</groupui-global-top-navigation-items>
</groupui-global-top-navigation>
<div id="content">
</div>
</div>
```
```

---

### Global items and global utilities
Global top navigation can contain 2-5 global items and utilities. Depending on the viewport and available screen space, you might need to use sub-menus to show additional items or utilities. If space is limited in a small viewport (eg. mobile) collapse the navigation categories into a hamburger menu in the last utility to the right.
Global top navigation - Global items and global utilities

---

### Global top navigation - sub-menu
Use when top level categories exceed the viewport or when a multi-level menu is required. Include the down-pointing chevron after the link label. Sub-menus open on click and are closed by either selecting an item in the menu, clicking outside the menu area, or clicking on the menu label. When open, the chevron should point up. Sub-menu labels serve only to open the dropdown; they cannot link to another page in the product.
Global items and utilities can trigger menus such as language selection, overflow actions, or product suite switches.
When all utilities cannot fit in a viewport use a menu to show additional options.
Global top navigation - Additional options
If a product is part of a suite of products used together eg. production tools, display under a ‘switcher’ menu button.
Global top navigation - Switcher

---

### Global top navigation - popover
Global utilities can trigger popovers.
Global top navigation - popover

---

### Global top navigation - clusters
If the navigation displays many actions, dividers help separate logical clusters.
Global top navigation - clusters
```
```html
<div class="global-top-demo">
<groupui-global-top-navigation breakpoint="s">
<groupui-brand-logo type="application"><span>Application Name</span></groupui-brand-logo>
<groupui-global-top-navigation-items>
<groupui-global-top-navigation-item href="#">
```
Global item
```html
</groupui-global-top-navigation-item>
<groupui-global-top-navigation-item href="#">
```
Global item
```html
</groupui-global-top-navigation-item>
</groupui-global-top-navigation-items>
<groupui-global-top-navigation-utility-items>
<groupui-global-top-navigation-utility-item icon="global-24">
</groupui-global-top-navigation-utility-item>
<groupui-global-top-navigation-utility-item icon="columns-filled-24">
</groupui-global-top-navigation-utility-item>
<groupui-global-top-navigation-utility-item icon="search-24">
</groupui-global-top-navigation-utility-item>
<groupui-divider inverted vertical style="height: var(--groupui-sys-spacing-800);padding-inline: var(--groupui-sys-spacing-400);align-self: center;"></groupui-divider>
<groupui-global-top-navigation-utility-item icon="settings-24">
</groupui-global-top-navigation-utility-item>
<groupui-global-top-navigation-utility-item href="#" icon="notification-24">
</groupui-global-top-navigation-utility-item>
<groupui-global-top-navigation-utility-item>
<groupui-avatar inverted initials="AA"></groupui-avatar>
</groupui-global-top-navigation-utility-item>
</groupui-global-top-navigation-utility-items>
</groupui-global-top-navigation>
<div id="content">
</div>
</div>
```
```

---

## Do / Don't
* ![](./Navigation - global top - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZEFzVHV5OXVCN1pvV3JTUlhlWmMucG5nIn0_volkswagen_qbFW9FU7vPLdjlwbMpfd1A20oCh054Vz8dUgaQBb9r0)
  Do
  Do use the default navigation colors only.
* ![](./Navigation - global top - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvNWJZVllVc21CbURhOU54Q2tGQTIucG5nIn0_volkswagen_NyvMN6uQVBdQwICle3tKraX_P4h_6LMvZLVLJ7jQqpA)
  Do
  Do maintain the order of global categories and utilities.
* ![](./Navigation - global top - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvMXFKUk1rdVBkS3hDVEFzeXBZNDYucG5nIn0_volkswagen_dTSVU3VdxwQJvGjG72_zmN3GSq1PzNQQ4EX6l3YSNmw)
  Do
  Do use the defined respective branding for communication in the navigation.
* ![](./Navigation - global top - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZXR0anFNalF5VlE1Nzg3WmFCdFoucG5nIn0_volkswagen_1GTUADbj7c8H6c_yEGMEntCOGG7Tg755u_2ztAGlz-M)
  Do
  Do use the global top navigation with a local navigation.
* ![](./Navigation - global top - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvTFhwcFNKNjdZRWpCakJBdlBoZVIucG5nIn0_volkswagen_iPLo8LbuKVVx9WvCSEKTcsr3MF0nQXQaZktjbX3pPuo)
  Don't
  Do not customize the global top navigation color.
* ![](./Navigation - global top - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvRTNIaHpndERxY2dyU0JYZHl1NlgucG5nIn0_volkswagen_MUM9SNNJGBKIxtQFcqgpPODqXqkwKnOpAmXUzcx15rg)
  Don't
  Do not change the order of categories and utilities.
* ![](./Navigation - global top - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwva3k4UTlNRGpjMXZqY21rTFhhdncucG5nIn0_volkswagen_WkKMv-b4ZioSJdzWEUGxwyARmXMtY28HBc6YuATPvUs)
  Don't
  Do not use custom visualizations or logos in the navigation.
* ![](./Navigation - global top - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvUXNzeU5RM0sxOG5FcUhQS1ROZUQucG5nIn0_volkswagen_Xx6xOeQGDdxM4G8PzE_b1bqnkUNQrzDTJnCRDcbNJHs)
  Don't
  Do not use the global top navigation with a global side navigation.

---

## Web Component

---

Global top navigation - Showcase
```
```html
<groupui-showcase components="groupui-global-top-navigation,groupui-global-top-navigation-items,groupui-global-top-navigation-item,groupui-global-top-navigation-utility-items,groupui-global-top-navigation-utility-item" custom-elements-json-path="https://groupui.vwapps.run/next/static/group-ui/custom-elements/custom-elements-vwgroup.json">
<groupui-global-top-navigation>
<groupui-brand-logo breakpoint="s" type="application"><span>Application Name</span></groupui-brand-logo>
<groupui-global-top-navigation-items>
<groupui-global-top-navigation-item href="#">Global Item</groupui-global-top-navigation-item>
<groupui-global-top-navigation-item href="#" >Global Item</groupui-global-top-navigation-item>
<groupui-global-top-navigation-item >Global Item</groupui-global-top-navigation-item>
</groupui-global-top-navigation-items>
<groupui-global-top-navigation-utility-items>
<groupui-global-top-navigation-utility-item icon="settings-24"></groupui-global-top-navigation-utility-item>
<groupui-global-top-navigation-utility-item icon="notification-24"></groupui-global-top-navigation-utility-item>
<groupui-global-top-navigation-utility-item>
<groupui-avatar inverted initials="AA"></groupui-avatar>
<div slot="popover" style="padding: var(--groupui-sys-spacing-200)">
<groupui-text>Profile</groupui-text>
<groupui-text>Logout</gropui-text>
</div>
</groupui-global-top-navigation-utility-item>
</groupui-global-top-navigation-utility-items>
</groupui-global-top-navigation>
</groupui-showcase>
```
```

---

## Deprecation Info
Deprecated Component:
The component below is deprecated and part of our legacy navigation system. It will be replaced by a new, modular navigation concept that is currently being rolled out step by step.
We recommend using the new components for future development whenever possible.
## CSS Framework
Global-Top-Navigation
You can use several elements inside of <nav class="g-global-top-navigation">. In the following example we are using brand-logo, global-top-navigation-item, popover, divider, avatar and icons.
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/latest/groupui.css">
```html
<div class="global-top-demo">
<nav class="g-global-top-navigation">
<div class="g-brand-logo">
<h1 class="g-brand-logo-application">Application name</h1>
</div>
<ul>
<li><a class="g-global-top-navigation-item" href="/">Global item</a></li>
<li><a class="g-global-top-navigation-item g-active" href="/about">Global item</a></li>
<li>
<details class="g-popover">
<summary class="g-global-top-navigation-item">Global item</summary>
<div class="g-popover-content">content here...</div>
</details>
</li>
<li><a class="g-global-top-navigation-item" href="/contact">Global item</a></li>
</ul>
<div class="g-divider g-divider-vertical g-divider-inverted"></div>
<ul>
<li>
<a class="g-global-top-navigation-item" href="/settings">
<i class="g-icon g-icon-settings-24"></i>
</a>
</li>
<li>
<a class="g-global-top-navigation-item" href="/notifications">
<i class="g-icon g-icon-notification-24"></i>
</a>
</li>
<li>
<a class="g-global-top-navigation-item g-global-top-navigation-item-disabled" tabindex="-1" href="/global">
<i class="g-icon g-icon-global-24"></i>
</a>
</li>
<li>
<details class="g-popover">
<summary class="g-global-top-navigation-item">
<div class="g-avatar g-avatar-inverse g-avatar-s">AA</div>
</summary>
<div class="g-popover-content">content here...</div>
</details>
</li>
</ul>
</nav>
<div id="content"></div>
</div>
```
```
