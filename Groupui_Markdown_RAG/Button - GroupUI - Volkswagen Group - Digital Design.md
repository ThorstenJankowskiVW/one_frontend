---
title: Button
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
  - web-component
last_modified: Wed, 22. Apr 2026 11:42
---

# Button

---

## Usage
Buttons allow users to take actions and make choices with a single tap. They express what action is taken when the user clicks or touches them.

---

### Button - Live demo
```html
<div class="button-live-demo container-border flex-center">
<groupui-button variant="primary">Primary</groupui-button>
<groupui-button variant="secondary">Secondary</groupui-button>
<groupui-button variant="tertiary">Tertiary</groupui-button>
</div>
```
#### Primary
Use primary buttons to signal a call to action ("Register now!") or to indicate the action that will help the user commence or complete their task ("Next", "Start"). Typically, there is only one primary button within each context.
#### Secondary
Secondary buttons are the alternative to the primary action. The Cancel or Back button (or other labels for dismissive behavior) should signify a fallback to safety, not a call to action. Pressing it will not cause changes to the system. Therefore, it should be a secondary option.
#### Tertiary
Tertiary actions can be about anything that is important but might not be the main action the user is looking to do at the moment (e.g. "Read more", "Show History").

---

### Button - Sizing
Buttons are available in 3 sizes S,M,L. Buttons sizes are independent of the viewport used.

---

## Do / Don't
* ![](./Button - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvcFBRaXdyZzZVRnF0aGEzZHpHeGQucG5nIn0_volkswagen_BKefJ9tb1sQONMz1sm1ctovhZQVVgXAj6KMKyUFhL3U)
  Do
  Use one primary button per page.
* ![](./Button - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvQUY5RU1rcnJreW1yUURQa2Z2ZjIucG5nIn0_volkswagen_qDoAEd2bvfskvvkehsRYKtOR74eAgzhU7BP7fZZmXqY)
  Do
  Use buttons with concise and clear call to actions.
* ![](./Button - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvWXRoV2J6RXFIU2JiYnZObkREU0YucG5nIn0_volkswagen_fkpFrK6Onty9Ojo8E2fLq04crRgthTuIJ2PlU-laBhs)
  Do
  Use buttons with correct colors, sizing and spacing according to GroupUI guidelines.
* ![](./Button - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvdFdtTXZNdktVdVBwVzdxNER1YjUucG5nIn0_volkswagen_Gca3pf9cKe6hbTJpNQqgpuv0sRcL5hk5979FjumvqB8)
  Don't
  Do not use multiple primary buttons.
* ![](./Button - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvRlRIS0E4VjhROXdIOXR4NW50TEUucG5nIn0_volkswagen_dr-EcF2CuEhW__Tv3G_v8dmAIr__6P6xVxQXpEg3rF8)
  Don't
  Do not use generic labels like "click here."
* ![](./Button - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvc2txUlRqVTZWWXd5U0RleUxHUzIucG5nIn0_volkswagen_XRO_-P6hDS-5WBrWSjOJ8n3NNMVWM8pEVfF2Z0K5zK0)
  Don't
  Do not change button colors, spacings, sizings, or the defined border radius.

---

### On inverted background
Using the button on an inverted background requires the additional class .g-btn-inverted

### Disabled
Using "disabled" class

Best practice: Using native "disabled"
