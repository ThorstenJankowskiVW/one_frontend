---
title: Popover
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
  - web-component
last_modified: Wed, 29. Apr 2026 11:52
---

# Popover

---

## Usage
Via the popover, content can be displayed in a separate container above all others. Depending on the requirements, this container can be aligned in all directions.

---

### Popover - Live demo
```html
<div class="popover-live-demo container-border flex-center">
<groupui-popover visible="" placement="bottom">
<groupui-avatar slot="parent" size="m" onclick="toggleGroupuiPopover()"></groupui-avatar>
<div class="content" slot="content">
</div>
</groupui-popover>
</div>

```

---

## Do / Don't
* ![](./Popover - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvS2JNbUpXSHl6dmZuaXJwU3FoNDQucG5nIn0_volkswagen_Vs2-IzoMAdLpfVbVdo-vyltr2DcfjxJQ3oEZs1YGbJE)
  Do
  Use the correct border radius and shadow according to GroupUI guidelines.
* ![](./Popover - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvR1V5czZiRzFBVVFSdllUTnI5VEwucG5nIn0_volkswagen_xLXt03KVc1BGpzS2SgJNNh4VTu9Acqkr9efi3jytzWg)
  Don't
  Do not make stylistic changes to the popover.

---

### Popover
To display a popover, please use the <details> tag with the class .g-popover.
﻿The nested <summary> tag is used as the popover-parent, and the <div class="g-popover-content"> is the popover itself.
﻿
It is also possible to use inputs as summary, but please keep in mind, that this is not a best practice from an accessibility view.
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-popover-container" class="container-border flex-center">
<details class="g-popover" open="">
<summary>Click to toggle</summary>
<div class="g-popover-content">
<div>Consetetur sadipscing elitr</div>
</div>
</details>
</div>
```
