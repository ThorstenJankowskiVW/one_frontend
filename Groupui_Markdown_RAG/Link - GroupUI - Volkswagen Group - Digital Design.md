---
title: Link
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Link

---

## Usage
Links are a part of the navigational elements. They are used to highlight relaying content and offer users a shortcut to content in greater depth.

---

### Link - Live demo
```html
<div class="link-live-demo container-border flex-center">
<groupui-text>Read our <groupui-link href="#">blog post</groupui-link> to find further information about this topic.</groupui-text>
</div>

```

---

### Link - Primary
```html
<div class="link-primary container-border flex-center">
<groupui-link variant="primary" quiet="false" href="#">Link</groupui-link>
</div>

```

---

### Link - Secondary
```html
<div class="link-secondary container-border flex-center">
<groupui-link variant="secondary" quiet="false" href="#">Link</groupui-link>
</div>

```

---

### Link - Standalone
```html
<div class="link-standalone container-border flex-center">
<div>
<groupui-link href="#">Read more</groupui-link>
</div>
</div>

```

---

## Do / Don't
* ![](./Link - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwveFZ4eFd3aXJucm1xN3h4TUJvc1AucG5nIn0_volkswagen_l4ay7AzZ7gDzURzFjxuFUQdH56QcaIs5IH5TvQCyeI8)
  Do
  Do use links in the color recommended by GroupUI guidelines.
* ![](./Link - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZ0o5dzg3QzRqS0pNY25TazloOHYucG5nIn0_volkswagen_YF38rImjYGMK63Sy08LaOHtA72gqEkIkKTwCbOIWurE)
  Do
  Use links in the recommended font size.
* ![](./Link - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvRnlLSmJkTVRhVDl4ODVYbTRIYjIucG5nIn0_volkswagen_egrEsbr8Lrb-2p9uoiZOkcKEffYVSMcAxTB6Ujzm4ro)
  Don't
  Do not change the color of links. Do not use electric-neon links on white backgrounds.
* ![](./Link - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvQlUyeE1qU3h2dEVFbWo1SGlNRU4ucG5nIn0_volkswagen_9rymzyrkh8pWL4D1UPLtNNBYiAbQUmU91fFlH_Rhd_8)
  Don't
  Do not scale links within body text.

---

### Link
To create a link, add the css class g-link to an <a> tag.
﻿Inside this tag, text content has to be inside a <span> tag with the class g-link-content.
﻿This text might be surrounded by icons using the additional class g-link-icon.
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/latest/groupui.css">
```html
<div id="css-link-container" class="container-border flex-center">
<a class="g-link" href="https://vw.to/ui" target="_blank">
<i class="g-icon g-link-icon g-icon-origami-16"></i>
<span class="g-link-content">Link</span>
<i class="g-icon g-link-icon g-icon-origami-16"></i>
</a>
</div>
```
```
### Variants
The link can be used in multiple variants:
* without icons
* bold by adding g-link-bold
* quiet (without underline) by adding g-link-quiet
* secondary by adding g-link-secondary
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/latest/groupui.css">
```html
<div id="css-link-variants-container" class="container-border flex-center">
<a class="g-link g-link-secondary" href="https://vw.to/ui" target="_blank">
<span class="g-link-content">Pure</span>
</a>
<a class="g-link g-link-bold" href="https://vw.to/ui" target="_blank">
<i class="g-icon g-link-icon g-icon-origami-16"></i>
<span class="g-link-content">Bold</span>
<i class="g-icon g-link-icon g-icon-origami-16"></i>
</a>
<a class="g-link g-link-quiet" href="https://vw.to/ui" target="_blank">
<i class="g-icon g-link-icon g-icon-origami-16"></i>
<span class="g-link-content">Quiet</span>
<i class="g-icon g-link-icon g-icon-origami-16"></i>
</a>
<a class="g-link g-link-secondary" href="https://vw.to/ui" target="_blank">
<i class="g-icon g-link-icon g-icon-origami-16"></i>
<span class="g-link-content">Secondary</span>
<i class="g-icon g-link-icon g-icon-origami-16"></i>
</a>
</div>
```
```
### Inverse Background
The link can also be used on an inverted background.
﻿To ensure the correct design, it needs to have the additional class g-link-inverse
