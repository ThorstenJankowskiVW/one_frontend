---
title: Z-Index
source: GroupUI
category: documentation
type: documentation
topics:
  - tokens
last_modified: Sun, 28. Sep 2025 17:17
---

# Z-Index

---

## Usage
Z index defines the default vertical stacking order of surfaces in the UI. Content lies by default inside surfaces and does not add depth. Content includes text, images, cards, buttons, input fields and most other components. A few components function as independent surfaces. These components stack to overlap others and are listed in the table below.

---

| Token | Surface |
| --- | --- |
| z-index.content-layer | Content Layer (Includes Cards, Inline Notification, Banner) |
| z-index.navigation | Navigation (Primary, Secondary and Tertiary navigation) |
| z-index.popover | Menu, Popover |
| z-index.tooltip | Tooltip |
| z-index.toast | Toast |
| z-index.backdrop | Backdrop |
| z-index.modal | Modal, Flyout |
| z-index.process-indicator | Page Process Indicator |

---

## Visual examples
The visual examples below help communicate how surfaces stack above each other based on their Z-index.

---

### 100 - Content layer
* Content sits flat on this surface. This includes Cards, Inline Notification, Banner.

---

### 300 - Tertiary navigation ﻿
Top Navigation or Side Navigation
﻿
* Content sits flat on this surface
﻿
﻿[Visit Navigation](https://digitaldesign.volkswagen-group.com/r/brqMtBzFzfSyfswRw6Ie-k9hnpIswUWO6eFGFphXxMk)﻿
### 300 - Secondary navigation
Side Navigation or Top Navigation sits above Tertiary Navigation at this level
﻿
* Content sits flat on this surface
﻿
﻿[Visit Navigation](https://digitaldesign.volkswagen-group.com/r/brqMtBzFzfSyfswRw6Ie-k9hnpIswUWO6eFGFphXxMk)﻿
### 300 - Primary navigation
﻿
Header or Primary Side Navigation sits above Tertiary Navigation at this level.
﻿
* Content sits flat on this surface
﻿
﻿[Visit Navigation](https://digitaldesign.volkswagen-group.com/r/brqMtBzFzfSyfswRw6Ie-k9hnpIswUWO6eFGFphXxMk)﻿

---

### 400 - Popover ﻿
Select, Search and Datepicker components trigger a floating options menu which overlaps surfaces at a lower z-index.
﻿
﻿
* Content sits flat on this surface
### 400 - Menu
* Content sits flat on this surface

---

### 500 - Tooltip
* Content sits flat on this surface
﻿
﻿[Visit Tooltip](https://digitaldesign.volkswagen-group.com/r/OcUUvzHFfXQaZlfBpCgvFhn8-nkPP_tHCTi5sxsYQXU) ﻿

---

### 600 - Toast
This surface pops out above surfaces with a lower z-index. Inline notifications do not pop out.
﻿
* Content sits flat on this surface

---

### 700 - Backdrop
* No content sits flat on this surface

---

### 800 - Flyout
By default this surface sits above all other surfaces. A Flyout must not generate a Modal.
﻿
* Content sits flat on this surface
﻿
﻿[Visit Flyout](https://digitaldesign.volkswagen-group.com/r/C5k2uchegA4pjxI-Jszq_LPLUR7BvhRT4rHiXv3-0w8)﻿
### 800 - Modal
By default this surface sits above all other surfaces. A Modal must not generate a Flyout.
﻿
* Content sits flat on this surface
﻿
﻿[Visit Modal](https://digitaldesign.volkswagen-group.com/r/y3NzISMal08EEp_pISSCW-hzdSqkvQHU1H0A3lfmgUs)﻿

---

### 900 - Page process indicator
Full page process indicator locks out all content at a lower Z-index
