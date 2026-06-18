---
title: Icon button
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
last_modified: Fri, 12. Dec 2025 15:11
---

# Icon button

---

## Usage
Use icon button for **lower priority actions within a component** represented only by an icon eg:
* Close modal, toast, tooltip, inline notification or banner.
* Filter, options, sort within a  table cell header.
* Toggling functions or filter on/off inside a component eg. filter, favorite
Use icon buttons when the action is lower priority, subtle, and the meaning is clear visually without text.
Icon button - usage
Use icon buttons for functions inside components eg. modal, inline notification, toast,
﻿table cell header.
Icon button - toggle
Icons buttons support toggle on/off for binary actions eg. filter.

---

## Anatomy
The icon button uses a ‘quiet’ interaction color and extra small size representing a lower priority action. There are two types of icon button, **standard and toggle:**
* Standard icon button functions exactly like a standard button in an extra small size.
* Toggle icon button represents binary actions which can be toggled on or off, eg. filter, sort and favorite.
Standard
Toggle off
Toggle on

---

### Sizes
The icon button is available in one size only 24x24px (XS).

---

### Colorways
Icon button has 3 colorways. The variant depends on the background color of the component.
**Light mode**
Base: on base background.
Inverse: on dark background
Weak: on light background.
**Darkmode**
Base: on base background.
Inverse: on dark background
Weak: on light background.

---

---

---

### Do
Do display a tooltip when hovering to identify function.
### Don't
Don't rely solely on the button icon without any supporting text or tooltip. The meaning may be ambiguous.
### Do
Do use an icon button in dense interfaces to reduce visual noise when many icons are present.
### Don't
Don’t use icon buttons for primary or critical actions in the main page or screen. eg. ‘Submit’, ‘Save’, ‘Delete account’.
### Do
Do use correct colorway for a background.
### Don't
Don’t use wrong colorway for a background.
To pick up a draggable item, press the space bar.
While dragging, use the arrow keys to move the item.
Press space again to drop the item in its new position, or press escape to cancel.

---

### Icon Button
To create an icon-button add the class .g-icon-button to a button tag.
﻿Inside this button you can use an icon with the additional class .g-icon-button-icon and a descriptive aria-label.

### Variants
There are multiple variants for the icon button available:
* disabled with the class .g-icon-button-disabled
* toggled with the class .g-icon-button-toggled
* on inverted background with the class .g-icon-button-inverse
* on weak background with the class .g-icon-button-weak
All variants can be combined.
