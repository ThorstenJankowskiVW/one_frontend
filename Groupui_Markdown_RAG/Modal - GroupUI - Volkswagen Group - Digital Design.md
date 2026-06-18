---
title: Modal
source: GroupUI
category: component
type: documentation
topics:
  - css-framework
  - web-component
last_modified: Thu, 28. May 2026 08:11
---

# Modal

---

## Usage
A modal stands out from the actual content and is on a higher level. It focuses the user on the content displayed in it. This view can only be closed via user interaction.
**Centered aligned:**
* Best for important decisions or critical actions
* When the content is short and focused
* To ensure the user's full attention
* Ideal for confirmation dialogs or onboarding steps
**Top aligned**
* Suitable for longer content like forms or detailed information
* When the modal should be less intrusive
* Especially useful on mobile devices
* Good for informational or supportive messages

---

### Modal - Live demo
```html
<div class="modal-live-demo container-border flex-center">
<groupui-modal close-button="true" displayed="true" padding="40px">
<groupui-headline heading="h3">Headline</groupui-headline>
</groupui-modal>
<groupui-button onclick="document.querySelector('groupui-modal')['displayed'] = true">
```
Open Modal
```html
</groupui-button>
</div>

```

---

### Modal
To ensure to correct design and behaviour, it is necessary to use the g-modal class on a HTML dialog element.
﻿This dialog element should be opened with dialog.showModal(), otherwise there is no backdrop.
The modal content needs to be wrapped inside a container with g-modal-content class.
﻿
The centered position has to be set via g-modal-centered.

### Without close button
If there is no need for the close button, remove the button.g-modal-close-button. The dialog can be closed via escape key or with custom event listeners.
