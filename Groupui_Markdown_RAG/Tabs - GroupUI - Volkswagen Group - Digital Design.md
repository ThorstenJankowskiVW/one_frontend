---
title: Tabs
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
  - web-component
last_modified: Thu, 19. Mar 2026 06:30
---

# Tabs

---

## Usage
Tabs are one of the most frequently used navigation elements that give the user quick and easy access to different sections within a page or view.
They are a good choice to organize and group content that is related without introducing or replacing complex navigation structures.

---

### Tabs - Live demo
```html
<div class="tabs-live-demo container-border">
<groupui-tabs>
<groupui-tab tab="firstTabId">
<span slot="title">Tab item</span>
</groupui-tab>
<groupui-tab tab="secondTabId">
<span slot="title">Tab item</span>
</groupui-tab>
<groupui-tab tab="thirdTabId">
<span slot="title">Tab item</span>
</groupui-tab>
</groupui-tabs>
</div>

```

---

## Variants
Tabs can be used for a variety of subjects and purposes. Usually, to group content in order to make it easily accessible to the user. We provide different variations that adapt to different environments.

---

### Tabs - flexible width
```html
<div class="tabs-flexible-width container-border">
<groupui-tabs>
<groupui-tab tab="firstTabId">
<span slot="title">Tab</span>
</groupui-tab>
<groupui-tab tab="secondTabId">
<span slot="title">Tab with a long name</span>
</groupui-tab>
<groupui-tab tab="thirdTabId">
<span slot="title">Tab with an even longer name</span>
</groupui-tab>
</groupui-tabs>
</div>

```

---

### Tabs - Full width
```html
<div class="tabs-full-width container-border">
<groupui-tabs full-width="true">
<groupui-tab tab="firstTabId">
<span slot="title">Tab 1</span>
</groupui-tab>
<groupui-tab tab="secondTabId">
<span slot="title">Tab 2</span>
</groupui-tab>
<groupui-tab tab="thirdTabId">
<span slot="title">Tab 3</span>
</groupui-tab>
</groupui-tabs>
</div>

```

---

### Tabs - Icons
```html
<div class="tabs-icons container-border">
<groupui-tabs>
<groupui-tab tab="firstTabId">
<span slot="title"><groupui-icon name="car-24"></groupui-icon>Cars</span>
</groupui-tab>
<groupui-tab tab="secondTabId">
<span slot="title"><groupui-icon name="truck-24"></groupui-icon>Trucks</span>
</groupui-tab>
<groupui-tab tab="thirdTabId">
<span slot="title"><groupui-icon name="bike-24"></groupui-icon>Bikes</span>
</groupui-tab>
</groupui-tabs>
</div>

```

---

## Dos and Don’ts
* ![](./Tabs - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvdnV4RVRIOXZXNnVRa1BkdEtGdkcucG5nIn0_volkswagen_tTDJVJ9l6RwAOWwypz3lkfNdq_sjdow_36Gd5luvgck)
  Do
  Keep the text labels short.
* ![](./Tabs - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvU0tuSnlpelFvUnhZYWZjS3NYdXgucG5nIn0_volkswagen_Cm0n-PjbxMPaE_i5vFziMdAewtFrdipCg2C-kVIS1T4)
  Do
  Keep the tabs consistent.
* ![](./Tabs - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvbUJLM0JaTXB5d3Zma1dCRXVtTVUucG5nIn0_volkswagen_SvDH4YFaIHsC0osneUYjmbNVxMWH5WW4aWd-Ts427B0)
  Don’t
  Avoid long descriptive text labels or wrapping text labels.
* ![](./Tabs - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvaGo2UmdORUtObzFNamkyZjNRamgucG5nIn0_volkswagen_RWLXk6rkmCBMaQ7emlaxN0yPVTgLe6ePr5a5y-3tGSc)
  Don’t
  Don’t mix tabs containing text and icons with text-only tabs.

---

### Tabs
Assign the g-tabs class to a div.
﻿Within this container there are two more:
﻿ - a div with the class g-tabs-list and the role="tablist" for the tabs
- a div with the class g-tabs-content for the content of all tabs
﻿
Every tab is represented by
- a label with the class g-tab and a tabindex=0
﻿ - an invisible input type="radio" with the role="tab" and aria-controls for the corresponding content
The label may also contain an icon. Please add the class g-tab-icon to it.
﻿Every tab-content needs the class g-tab-content, the role="tabpanel" and an id which fits to the aria-controls of the input.
﻿
The functionality is given via Javascript.
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-tabs-container" class="container-border flex-center">
<div class="g-tabs">
<div class="g-tabs-list" role="tablist">
<label for="tab1" class="g-tab" tabindex="0">
<i class="g-icon g-tab-icon g-icon-origami-24"></i>
</label>
<input type="radio" name="tabs" id="tab1" aria-controls="tab1-content" role="tab">
<label for="tab2" class="g-tab" tabindex="0">
<i class="g-icon g-tab-icon g-icon-origami-24"></i>
```
Second Tab
```html
</label>
<input type="radio" name="tabs" id="tab2" aria-controls="tab2-content" role="tab" checked>
<label for="tab3" class="g-tab">
<i class="g-icon g-tab-icon g-icon-origami-24"></i>
```
Disabled Tab
```html
</label>
<input type="radio" name="tabs" id="tab3" aria-controls="tab3-content" role="tab" disabled>
<label for="tab4" class="g-tab" tabindex="0">Another Tab</label>
<input type="radio" name="tabs" id="tab4" aria-controls="tab4-content" role="tab">
</div>
<div class="g-tabs-content">
<section id="tab1-content" class="g-tab-content" role="tabpanel">
```
dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
```html
</section>
<section id="tab2-content" class="g-tab-content" role="tabpanel">Tab 2 Content</section>
<section id="tab3-content" class="g-tab-content" role="tabpanel">Tab 3 Content (should not be visible)</section>
<section id="tab4-content" class="g-tab-content" role="tabpanel">Tab 4 Content</section>
</div>
</div>
</div>
```
### Variants
By adding the class .g-tabs-no-padding it is possible to decrease the horizontal padding of all tabs.
By adding the class .g-tabs-full-width the tabs will use the maximal width of the parent element.
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-tabs-container" class="container-border">
<div class="g-tabs g-tabs-no-padding">
<div class="g-tabs-list" role="tablist">
<label for="tab5" class="g-tab" tabindex="0">
```
No padding
<i class="g-icon g-tab-icon g-icon-origami-24"></i>
```html
</label>
<input type="radio" name="tabs2" id="tab5" aria-controls="tab5-content" role="tab">
<label for="tab6" class="g-tab" tabindex="0">
<i class="g-icon g-tab-icon g-icon-origami-24"></i>
```
Tab 6
```html
</label>
<input type="radio" name="tabs2" id="tab6" aria-controls="tab6-content" role="tab">
<label for="tab7" class="g-tab" tabindex="0">Tab 7</label>
<input type="radio" name="tabs2" id="tab7" aria-controls="tab7-content" role="tab">
<label for="tab8" class="g-tab">Tab 8</label>
<input type="radio" name="tabs2" id="tab8" aria-controls="tab8-content" role="tab" disabled>
</div>
<div class="g-tabs-content">
<section id="tab5-content" class="g-tab-content" role="tabpanel">
```
dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
```html
</section>
<section id="tab6-content" class="g-tab-content" role="tabpanel">Tab 6 Content</section>
<section id="tab7-content" class="g-tab-content" role="tabpanel">Tab 7 Content</section>
<section id="tab8-content" class="g-tab-content" role="tabpanel">Tab 8 Content (should not be visible)</section>
</div>
</div>
<div class="g-tabs g-tabs-full-width">
<div class="g-tabs-list" role="tablist">
<label for="tab9" class="g-tab" tabindex="0">
```
Full width
<i class="g-icon g-tab-icon g-icon-origami-24"></i>
```html
</label>
<input type="radio" name="tabs3" id="tab9" aria-controls="tab9-content" role="tab">
<label for="tab10" class="g-tab" tabindex="0">
<i class="g-icon g-tab-icon g-icon-origami-24"></i>
```
Tab 10
```html
</label>
<input type="radio" name="tabs3" id="tab10" aria-controls="tab10-content" role="tab">
<label for="tab11" class="g-tab" tabindex="0">Tab 11</label>
<input type="radio" name="tabs3" id="tab11" aria-controls="tab11-content" role="tab">
<label for="tab12" class="g-tab">Tab 12</label>
<input type="radio" name="tabs3" id="tab12" aria-controls="tab12-content" role="tab" disabled>
</div>
<div class="g-tabs-content">
<section id="tab9-content" class="g-tab-content" role="tabpanel">
```
dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
```html
</section>
<section id="tab10-content" class="g-tab-content" role="tabpanel">Tab 10 Content</section>
<section id="tab11-content" class="g-tab-content" role="tabpanel">Tab 11 Content</section>
<section id="tab12-content" class="g-tab-content" role="tabpanel">Tab 12 Content (should not be visible)</section>
</div>
</div>
</div>
```
## Deprecation Info
| Property/Event | Deprecated since Version | Removed in Version | Substitute |
| --- | --- | --- | --- |
| equalWidth | 6.4.0 | 7.0.0 | **fullWidth** should be used instead |
