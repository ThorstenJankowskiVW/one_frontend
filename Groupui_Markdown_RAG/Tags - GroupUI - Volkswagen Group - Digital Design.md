---
title: Tags
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Tags

---

## Usage
Use tags to communicate severity like information, success, or danger, or use them to highlight information in complex data dashboards. Colors should not be changed and used cautiously to communicate based on the design's purpose.

---

### Tag - Live demo
```html
<div class="tag-live-demo container-border flex-center">
<groupui-tag variant="primary">Primary tag</groupui-tag>
<groupui-tag variant="secondary">Secondary tag</groupui-tag>
</div>

```

---

### Tag - colors
```html
<div class="container-border">
<div class="tag-colors-box">
<groupui-tag variant="primary" >Information</groupui-tag>
<groupui-tag variant="primary" style="background-color: #558F3A; border-color: #558F3A;">Success</groupui-tag>
<groupui-tag variant="primary" style="background-color: #FF9B00; border-color: #FF9B00;">Warning</groupui-tag>
<groupui-tag variant="primary" style="background-color: #DA0C1F; border-color: #DA0C1F;">Error</groupui-tag>
<groupui-tag variant="primary" style="background-color: #7A8084; border-color: #7A8084;">Neutral</groupui-tag>
</div>
</div>
```
Accent colors are only permitted in exceptional cases and exclusively for charts, diagrams or data visualizations.

---

### Tag - Icons
```html
<div class="tag-icons container-border flex-center">
<groupui-tag variant="primary"><groupui-icon name="clipboard-16"></groupui-icon>Primary tag</groupui-tag>
<groupui-tag variant="secondary"><groupui-icon name="clipboard-16"></groupui-icon>Secondary tag</groupui-tag>
</div>

```

---

### Tag as pill
```html
<div class="tag-pill container-border flex-center">
<groupui-tag variant="primary">16</groupui-tag>
<groupui-tag variant="secondary">16</groupui-tag>
</div>

```

---

## Do / Don't
* ![](./Tags - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvUFpWOHlrQ2MyM3NhN2hDbTFnMkMucG5nIn0_volkswagen_ZAHG5nbsk-H3SoQtg6R0zTWSll5bPAlJzKAkVS4WcoQ)
  Do
  Do use tags to communicate severity when necessary.
* ![](./Tags - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvV3ZIR2Y3Wkg1VDUzY0hBYVFxY0MucG5nIn0_volkswagen_47gyDCXJKZDQERZwMfaXC30xXj1tEU6ttgtIM3oYYRE)
  Do
  Do use tags to highlight information or communicate status.
* ![](./Tags - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvVVpNSE50RWpwelVhbXNwMkpMU28ucG5nIn0_volkswagen_KhUdgKjh6JSjznrlXRfYr3V20mxAeJvkcVgz41kMpqE)
  Don't
  Do not use severity colors for anything else than communicating success, warning, or danger.
* ![](./Tags - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvcFdCb2ZXb2F6Y3RldHFRVEczdTYucG5nIn0_volkswagen_tqyeiJpWPRQbnnYZHUj4UkwOEHN4rS2z96log7Tuqxo)
  Don't
  Do not use tags as buttons or interactive components.

---

### Tags
Assign the g-tag class to a div.
There are three variants: primary, secondary .g-tag-secondary and tertiary g-tag-tertiary.
﻿There are also three severities: success .g-tag-success, warning g-tag-warning and danger .g-tag-danger.
It is also possible to add icons with the additional class .g-tag-icon.
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-tag-container" class="container-border flex-center">
<div class="g-tag">Default</div>
<div class="g-tag g-tag-secondary">Secondary</div>
<div class="g-tag g-tag-tertiary">Tertiary</div>
<div class="g-tag">
<i class="g-icon g-tag-icon g-icon-info-16"></i>
```
Default
```html
</div>
<div class="g-tag g-tag-secondary">
```
Secondary
<i class="g-icon g-tag-icon g-icon-info-filled-16"></i>
```html
</div>
<div class="g-tag g-tag-tertiary">
<i class="g-icon g-tag-icon g-icon-info-16"></i>
```
Tertiary
```html
</div>
<div class="g-tag g-tag-success">
```
Success P
<i class="g-icon g-tag-icon g-icon-success-16"></i>
```html
</div>
<div class="g-tag g-tag-success g-tag-secondary">
<i class="g-icon g-tag-icon g-icon-success-filled-16"></i>
```
Success S
```html
</div>
<div class="g-tag g-tag-success g-tag-tertiary">
<i class="g-icon g-tag-icon g-icon-success-filled-16"></i>
```
Success T
```html
</div>
<div class="g-tag g-tag-warning">
```
Warning P
<i class="g-icon g-tag-icon g-icon-warning-16"></i>
```html
</div>
<div class="g-tag g-tag-warning g-tag-secondary">
<i class="g-icon g-tag-icon g-icon-warning-filled-16"></i>
```
Warning S
```html
</div>
<div class="g-tag g-tag-warning g-tag-tertiary">
```
Warning T
<i class="g-icon g-tag-icon g-icon-warning-filled-16"></i>
```html
</div>
<div class="g-tag g-tag-danger">
<i class="g-icon g-tag-icon g-icon-error-16"></i>
```
Danger P
```html
</div>
<div class="g-tag g-tag-danger g-tag-secondary">
```
Danger S
<i class="g-icon g-tag-icon g-icon-error-filled-16"></i>
```html
</div>
<div class="g-tag g-tag-danger g-tag-tertiary">
<i class="g-icon g-tag-icon g-icon-error-filled-16"></i>
```
Danger T
```html
</div>
</div>
```
### Colors
There are multiple colors available for the tag:
* neutral .g-tag-neutral
* accent colors .g-tag-accent-01 to .g-tag-accent-05
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-tag-container" class="container-border flex-center">
<div class="g-tag g-tag-neutral">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Neutral P
```html
</div>
<div class="g-tag g-tag-secondary g-tag-neutral">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Neutral S
```html
</div>
<div class="g-tag g-tag-tertiary g-tag-neutral">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Neutral T
```html
</div>
<div class="g-tag g-tag-accent-01">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 1 P
```html
</div>
<div class="g-tag g-tag-secondary g-tag-accent-01">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 1 S
```html
</div>
<div class="g-tag g-tag-tertiary g-tag-accent-01">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 1 T
```html
</div>
<div class="g-tag g-tag-accent-02">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 2 P
```html
</div>
<div class="g-tag g-tag-secondary g-tag-accent-02">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 2 S
```html
</div>
<div class="g-tag g-tag-tertiary g-tag-accent-02">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 2 T
```html
</div>
<div class="g-tag g-tag-accent-03">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 3 P
```html
</div>
<div class="g-tag g-tag-secondary g-tag-accent-03">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 3 S
```html
</div>
<div class="g-tag g-tag-tertiary g-tag-accent-03">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 3 T
```html
</div>
<div class="g-tag g-tag-accent-04">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 4 P
```html
</div>
<div class="g-tag g-tag-secondary g-tag-accent-04">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 4 S
```html
</div>
<div class="g-tag g-tag-tertiary g-tag-accent-04">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 4 T
```html
</div>
<div class="g-tag g-tag-accent-05">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 5 P
```html
</div>
<div class="g-tag g-tag-secondary g-tag-accent-05">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 5 S
```html
</div>
<div class="g-tag g-tag-tertiary g-tag-accent-05">
<i class="g-icon g-tag-icon g-icon-origami-16"></i>
```
Accent 5 T
```html
</div>
</div>
```
