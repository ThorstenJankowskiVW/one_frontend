---
title: Layouts Template
source: GroupUI
category: template
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Mon, 16. Feb 2026 15:31
---

# Layouts

---

In order to ensure a uniform appearance across all application types in the long term, we have defined different design principles for the layout, which can be used flexibly for the respective applications.

---

### Layout - Product Application
```
```html
<div id="theme-switch-wrapper">
</div>
</groupui-global-top-navigation-utility-item>
</groupui-global-top-navigation-utility-items>
</groupui-global-top-navigation>
<groupui-local-side-navigation divider="">
<groupui-local-side-navigation-items>
<groupui-local-side-navigation-item icon="rocket-24">
<div slot="label">Item 1</div>
</groupui-local-side-navigation-item>
<groupui-local-side-navigation-item icon="sparkle-24" active="">
<div slot="label">Item 2</div>
</groupui-local-side-navigation-item>
<groupui-local-side-navigation-item icon="shopping-cart-24">
<div slot="label">Item 3</div>
</groupui-local-side-navigation-item>
</groupui-local-side-navigation-items>
</groupui-local-side-navigation>
<main slot="content" id="content">
<groupui-grid-row margin-type="flexible">
<groupui-grid-col>
<groupui-card padding="40px" elevation="8" class="template-product-application-forms-others-service">
<groupui-grid gutter="16px" margin-type="custom" margin="0px">
<groupui-headline heading="h1">Product headline</groupui-headline>
</groupui-text>
<groupui-headline heading="h5" class="sub-headings">Headline text</groupui-headline>
<groupui-grid-row>
<groupui-grid-col m="6" l="4">
<groupui-select value="Item 1" placeholder="Placeholder">
<span slot="label">Label</span>
<groupui-select-option>Item 1</groupui-select-option>
<groupui-select-option>Item 2</groupui-select-option>
<groupui-select-option>Item 3</groupui-select-option>
</groupui-select>
</groupui-grid-col>
<groupui-grid-col m="6" l="4">
<groupui-select value="Item 1" placeholder="Placeholder">
<span slot="label">Label</span>
<groupui-select-option>Item 1</groupui-select-option>
<groupui-select-option>Item 2</groupui-select-option>
<groupui-select-option>Item 3</groupui-select-option>
</groupui-select>
</groupui-grid-col>
<groupui-grid-col m="6" l="4">
<groupui-date-picker value="2023-01-04">
<span slot="label">Label</span>
</groupui-date-picker>
</groupui-grid-col>
</groupui-grid-row>
<groupui-headline heading="h5" class="sub-headings">Headline text</groupui-headline>
<groupui-grid-row>
<groupui-grid-col m="6">
<groupui-input placeholder="Placeholder">
<span slot="label">Label</span>
</groupui-input>
</groupui-grid-col>
<groupui-grid-col m="6">
<groupui-input placeholder="Placeholder">
<span slot="label">Label</span>
</groupui-input>
</groupui-grid-col>
</groupui-grid-row>
<groupui-headline heading="h5" class="sub-headings">Service</groupui-headline>
<groupui-grid-row>
<groupui-grid-col m="6" l="6">
<groupui-checkbox checked>Checkbox</groupui-checkbox>
</groupui-grid-col>
<groupui-grid-col m="6" l="6">
<groupui-checkbox checked>Checkbox</groupui-checkbox>
</groupui-grid-col>
<groupui-grid-col m="6" l="6">
<groupui-checkbox checked>Checkbox</groupui-checkbox>
</groupui-grid-col>
<groupui-grid-col m="6" l="6">
<groupui-checkbox>Checkbox</groupui-checkbox>
</groupui-grid-col>
<groupui-grid-col m="6" l="6">
<groupui-checkbox>Checkbox</groupui-checkbox>
</groupui-grid-col>
</groupui-grid-row>
<groupui-headline heading="h5" class="sub-headings">Additional note</groupui-headline>
<groupui-textarea placeholder="Your message" rows="4" class="textarea"></groupui-textarea>
<div class="button-col">
<groupui-button variant="secondary">Cancel</groupui-button>
<groupui-button>Schedule</groupui-button>
</div>
</groupui-grid>
</groupui-card>
</groupui-grid-col>
</groupui-grid-row>
</main>
</groupui-page>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>
```
```

---
