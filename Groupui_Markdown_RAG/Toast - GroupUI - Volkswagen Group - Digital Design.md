---
title: Toast
source: GroupUI
category: documentation
type: documentation
topics:
  - accessibility
last_modified: Wed, 25. Mar 2026 08:11
---

# Toast

---

## Usage
Toasts or floating notifications are non-disruptive messages to provide quick feedback on the outcome of an action. Use toasts to communicate system feedback or any passive, non-critical information.
Toasts usually appear at the bottom of the screen and provide feedback based on an action the user has taken before. They can either disappear on their own, or remain visible until the user has taken action.
Read more about notification components and how to decide which one to use [here](https://digitaldesign.volkswagen-group.com/r/kZPLcc8B8IQOV7niQWC3qDLUliN-uYull61YhYPSRkM).

---

### Anatomy
Icon (optional)
Label
Action (optional)
Close button (optional)

---

### Position
Recommended default position of a toast message is in the bottom center of the viewport, floating above the main content. The position of a toast might need to be adjusted to avoid overlapping with other important UI elements such as floating action buttons or toolbars. When setting a different position for the toast, be careful not to place a toast in front of frequently used UI elements such as navigation.

---

### Container width
In wide layouts the toast container width can be extended to support longer text labels, keeping the optimal line length for text in mind, which is typically between 45-75 characters. As toasts communicate non-disruptive messages, keep text labels as short and concise as possible.

---

### Responsive behaviour
On a small viewport the toast text label can break into a second line. Buttons can wrap underneath the text label to provide more space for text and longer button labels.
Toast on a small viewport

---

---

### Do
Keep text labels short and concise.
### Don't
Avoid long text labels with unnecessary information.
### Do
Use toasts to notify users about low priority, no action required information.
### Don't
Don't use toasts for critical information that require user action.
To pick up a draggable item, press the space bar.
While dragging, use the arrow keys to move the item.
Press space again to drop the item in its new position, or press escape to cancel.

---

### g-toast
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
```html
<div class="g-toast">
<i class="g-icon g-icon-info-filled-24 g-toast-status"></i>
<span class="g-toast-content">Content</span>
<button class="g-toast-close">
```
Close
<i class="g-icon g-icon-close-24"></i>
```html
</button>
</div>
```
```
Assign the `g-toast` class to a div.
There are two optional elements:
- a status icon, using the class `g-toast-status`. This icon is automatically colored.
- content, using the class `g-toast-content`
- this content may include a call-to-action element, like a button
In addition the class `g-toast-close` is made for the close icon. Please use a button for accessibility reasons.

---

### Variants
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
```html
<div class="g-toast">
<span class="g-toast-content">Content without status</span>
<button class="g-toast-close">
```
Close
<i class="g-icon g-icon-close-24"></i>
```html
</button>
</div>
<br>
<div class="g-toast">
<i class="g-icon g-icon-info-filled-24 g-toast-status"></i>
<span class="g-toast-content">
<span>Content</span>
<button class="g-btn g-btn-inverted g-btn-small g-btn-secondary">Button</button>
</span>
<button class="g-toast-close">
```
Close
<i class="g-icon g-icon-close-24"></i>
```html
</button>
</div>
```
```
You can skip the status icon.
It is not recommended to skip the close icon.

---

### Severities
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
```html
<div class="g-toast g-toast-information">
<i class="g-icon g-icon-info-filled-24 g-toast-status"></i>
<span class="g-toast-content">Information</span>
<button class="g-toast-close">
```
Close
<i class="g-icon g-icon-close-24"></i>
```html
</button>
</div>
<br>
<div class="g-toast g-toast-success">
<i class="g-icon g-icon-success-filled-24 g-toast-status"></i>
<span class="g-toast-content">Success</span>
<button class="g-toast-close">
```
Close
<i class="g-icon g-icon-close-24"></i>
```html
</button>
</div>
<br>
<div class="g-toast g-toast-warning">
<i class="g-icon g-icon-warning-filled-24 g-toast-status"></i>
<span class="g-toast-content">Warning</span>
<button class="g-toast-close">
```
Close
<i class="g-icon g-icon-close-24"></i>
```html
</button>
</div>
<br>
<div class="g-toast g-toast-danger">
<i class="g-icon g-icon-danger-filled-24 g-toast-status"></i>
<span class="g-toast-content">Danger</span>
<button class="g-toast-close">
```
Close
<i class="g-icon g-icon-close-24"></i>
```html
</button>
</div>
```
We also support the severities `information`, `success`, `warning` and `danger`.
Just add the needed class to the toast: `g-toast-information`, `g-toast-success`, `g-toast-warning` or `g-toast-danger`.
Please be also aware, that the status icon differs.
