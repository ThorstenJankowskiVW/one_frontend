---
title: Flyout
source: GroupUI
category: component
type: documentation
topics:
  - web-component
last_modified: Wed, 01. Apr 2026 07:57
---

# Flyout

---

## Usage
The flyout opens a highlighted layer that provides clear user guidance for different content such as navigation, filters or important content. depending on the requirement, it can be opened from above, below, left or right and is closed again with a click outside of the content.

---

### Flyout - Live demo
```html
<div class="flyout-live-demo container-border flex-center">
<groupui-flyout position="right">
<groupui-text>Here is any HTML content allowed</groupui-text>
</groupui-flyout>
<groupui-button onclick="document.querySelector('groupui-flyout')['visible'] = true">
```
Open Flyout
```html
</groupui-button>
</div>

```

---

### Flyout - Right
```html
<div class="flyout-right container-border flex-center">
<groupui-flyout position="right">
<groupui-text>Here is any HTML content allowed</groupui-text>
</groupui-flyout>
<groupui-button onclick="document.querySelector('groupui-flyout')['visible'] = true">
```
Open Flyout
```html
</groupui-button>
</div>

```

---

## Do / Don't
* ![](./Flyout - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvWDZDNHhTMjQ3cDVHRWd6VlNZMlAucG5nIn0_volkswagen_vY0G6rNU0U8Bb9am4RK5Kv1hAKm-23x-Zfv2IUXeF2k)
  Do
  Use flyout for contextual actions or more information in the width and height according to GroupUI guidelines.
* ![](./Flyout - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvaWFIOHRCM0JDRVpQTnpjaDU2eVgucG5nIn0_volkswagen_oRoXet84MQk741GiBNU7r55M_CYghmWC6iHpE4SVmCs)
  Don't
  Do not inset a flyout nor use when main page content below must be visible or clickable.

---

### Flyout
To ensure to correct design and behaviour, it is necessary to use the g-flyout class on a HTML dialog element.
﻿This dialog element should be opened with dialog.showModal(), otherwise there is no backdrop.
The flyout content needs to be wrapped inside a container with g-flyout-content class.
﻿
The position has to be set via g-flyout-position-right, g-flyout-position-left, g-flyout-position-top or g-flyout-position-bottom.
