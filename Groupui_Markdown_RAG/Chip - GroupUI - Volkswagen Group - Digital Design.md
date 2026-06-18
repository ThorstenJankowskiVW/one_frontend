---
title: Chip
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Chip

---

## Usage
The chip component allows users to enter information or to filter content via an interaction. It can also be used in conjunction with other components such as the Multiselect.

---

### Chip - Live demo
```html
<div class="chip-live-demo container-border flex-center">
<groupui-chip color="information" target="self" variant="primary">Lorem ipsum</groupui-chip>
<groupui-chip color="information" target="self" variant="secondary">Lorem ipsum</groupui-chip>
</div>

```

---

### Chip - Colors
```html
<div class="container-border flex-center">
<div class="chip-colors-box">
<groupui-chip color="info" target="self">Info</groupui-chip>
<groupui-chip color="success" target="self">Success</groupui-chip>
<groupui-chip color="warning" target="self">Warning</groupui-chip>
<groupui-chip color="error" target="self">Error</groupui-chip>
<groupui-chip color="neutral" target="self">Neutral</groupui-chip>
<groupui-chip color="light" target="self">Light</groupui-chip>
</div>
</div>
```
### Chip - Sizing
```html
<div class="chip-live-demo container-border flex-center">
<groupui-chip color="information" target="self" size="m" variant="primary">Medium</groupui-chip>
<groupui-chip color="information" target="self" size="l" variant="primary">Large</groupui-chip>
</div>

```

---

## Do / Don't
* ![](./Chip - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvOHEzUFpNWnJCa3pKNERWdmFqdFoucG5nIn0_volkswagen_7LtujMr3etPgod6z60cr5i8YpmKTHRYRjbZTUZQEXFQ)
  Do
  Use chips with short and concise labels.
* ![](./Chip - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwveXRGcGliTGhMU0J6bzJ2Tmt4d1AucG5nIn0_volkswagen_agPEJAKqr6dUV4sR3N85J3tKVqp300enkwGoW9j8E24)
  Do
  Use chips in clusters.
* ![](./Chip - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvdVFhcEgxdFdhbkFqTGQ1amhHaG0ucG5nIn0_volkswagen_LU-6QLG2k0hygwdFpvGYcMgo6BaaD8bUrl6wWkQOz6E)
  Don't
  Avoid chips with long labels.
* ![](./Chip - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvS2hobXdQeWJ3N0FxRDIzYUtkMmIucG5nIn0_volkswagen_cyE-MW3a8nUto61EVLkVPqg1QYaSB0QLxSt22VDbki8)
  Don't
  Do not use chips as buttons.

---

### Chips
Assign the g-chip class to a button or an a tag.
[1/3] Downloading manifest
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-chip-container" class="container-border flex-center">
<button class="g-chip">Button Chip</button>
<a class="g-chip">Link Chip</a>
</div>
```
### Variants
There are multiple variants for the chip:
* sizes: medium (default) and large g-chip-large
* variants: primary (default) and secondary g-chip-secondary
* disabled: g-chip-disabled
* light color: g-chip-light
* with icons: .g-chip-icon at the icon .g-icon
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-chip-container" class="container-border flex-center">
<button class="g-chip">Medium</button>
<button class="g-chip g-chip-large">Large</button>
<button class="g-chip">Primary</button>
<button class="g-chip g-chip-secondary">Secondary</button>
<button class="g-chip g-chip-disabled">Disabled</button>
<button class="g-chip g-chip-disabled g-chip-secondary">Disabled Secondary</button>
<button class="g-chip g-chip-light">Light</button>
<button class="g-chip g-chip-light g-chip-secondary">Light Secondary</button>
<button class="g-chip g-chip-disabled g-chip-light">Light Disabled</button>
<button class="g-chip g-chip-disabled g-chip-light g-chip-secondary">Light Secondary Disabled</button>
<button class="g-chip">
<i class="g-icon g-chip-icon g-icon-info-16"></i>
```
Icon left
```html
</button>
<button class="g-chip">
```
Icon right
<i class="g-icon g-chip-icon g-icon-info-16"></i>
```html
</button>
</div>
```
