---
title: Loading spinner
source: GroupUI
category: documentation
type: documentation
topics:
  - accessibility
  - css-framework
  - tokens
last_modified: Tue, 14. Apr 2026 07:26
---

# Loading spinner

---

## Usage
The loading spinner is a visual indicator used to convey that a user request is being processed and the system is working. It is commonly used for data fetching, form submissions, and page transitions. This feedback helps manage user expectations and improves the user experience by preventing confusion or frustration during wait times. Loading spinners can appear in various contexts such as after clicking a button, while searching for data, inside a table, or after submitting a form.
Use loading spinners
* when retrieving or refreshing small amounts of data
* when an action can not be performed instantly and requires users to wait between 1 and 10 seconds
[Loading overview](https://digitaldesign.volkswagen-group.com/r/qF4KGDsxK9Aux7boUWkThmdXOETUZVHzIxcvmNrl44k)

---

### Anatomy
Spinner
Label (optional)

---

### Loading states
Inactive state: the spinner remains hidden until triggered by an action requiring loading.
﻿
Active state: the spinner is visible and spinning while the process is ongoing.
﻿
Success state: the spinner disappears once the process completes, and the relevant content is displayed.
﻿
Error state: if an error occurs, replace the spinner with an error message or retry button.
﻿Timeout handling: if loading takes too long, consider displaying a message or alternative feedback.
﻿
Accessibility considerations: ensure the spinner is announced to screen readers and does not cause unnecessary motion issues.

---

### Interactions
Spinners can replace components or content to communicate that the system is working and performing an action. When loading spinners temporarily replace content, they should appear in the same spot and maintain the same alignment to make sure the user can see loading feedback.
* ![loading spinner - interaction 02](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3C/svg%3E)
  Content position remains
* ![loading spinner - interaction](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3C/svg%3E)
  Button position remains

---

## Variants
Loading spinners can support general loading scenarios, appear inside other components or across the whole page.

---

### Sizes
The loading spinner comes in 4 sizes to use for general loading scenarios, and as inline spinners inside other components like buttons, inputs, tables, etc.: small (s), medium (m), large (l), and extra large (xl).
There are two additional sizes – xxl and xxxl to use for general loading scenarios or full page loads. You can choose the appropriate size of the spinner depending on the design requirements, but make sure spinner size aligns with icon size whenever you use them together.
| Token | Spinner Size | Usage |
| --- | --- | --- |
| spacing.400 | S (16 x 16px) | Use this size inside chips, small buttons, etc. |
| spacing.600 | M (24 x 24px) | Ideal for elements such as buttons or form fields. |
| spacing.800 | L (32 x 32px) | Suitable for prominent areas requiring more visibility and large buttons. |
| spacing.1200 | XL (48 x 48px) | Use as default spinner for general loading scenarios. |
| spacing.2400 | XXL (96 x 96px) | Use as default spinner for general loading scenarios or as full page spinner. |
| spacing.3400 | XXXL (136 x 136px) | Use as default spinner for general loading scenarios or as full page spinner. |

---

### Default (Circular Spinner)
A simple, looped-animated circular spinner used for general loading scenarios.
Loading additional data

---

### Inline Spinner
A smaller version of the circular spinner that appears within content, such as inside buttons or list items.
Ideal for indicating progress within specific components.
Inline spinner

---

### Full Page Spinner
A large spinner centered on the page, often paired with a backdrop overlay.
Full page load with backdrop

---

## Do / Don't
* ![](./Loading spinner - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvR3dmNmJaZlZXdEhNWHFSYjFjenEucG5nIn0_volkswagen_F_YAu9Y_P3lF9i0UH_T1Tv75fgmCsZiGpo4ALb1l-6w)
  Do
  Use loading spinners for processes taking more than 1 second to give users feedback the system is working on their request.
* ![](./Loading spinner - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvMnQyYVk4bWhFZHdRM25tZENhNkoucG5nIn0_volkswagen_GXgoqwe8bqKVUtjkjDwOVsk9e2WzSy3vd59lCi8MJkc)
  Do
  Use short and concise labels next to the spinner to explain users what the system is doing.
* ![](./Loading spinner - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvWEJoNDJwRzV3SFhYOUZwUnhEQkwucG5nIn0_volkswagen_q2hWiwK4GEAJ0BL6kqDNq2RCSt6rX3cfxxxKkGS7MYc)
  Do
  Use one spinner at a time to indicate the process.
* ![](./Loading spinner - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvNlpSYU5oVDV2dzJOQ0ROZjZTaWoucG5nIn0_volkswagen_MNHFv3O3G7MAAoLWNRmDYszG_zoS2E5lZXtYjTtu6FA)
  Don't
  Do not show spinners for actions taking less than 1 second, as this might not be visible to the user and confuse them.
* ![](./Loading spinner - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvQ3E4MW10VmZQeEh0c2VGS1ZVTlkucG5nIn0_volkswagen_2FcEBldB2P0H48sxgmCBv_UAisd1IFaq7chwisZuu0g)
  Don't
  Do not use vague and long labels to describe what the system is doing.
* ![](./Loading spinner - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvQ3JweEI1WXlNQnl3cjh6SmV3cTkucG5nIn0_volkswagen_2KRzGCem3QNSiIqL8G5a-8dJ6NraQOgEQooLc7Rp2DM)
  Don't
  Do not show multiple spinners at the same time.

---

Download indicator

Loading Button

## CSS Framework
Global Spinner

---

Inline Spinner

---

Sizes & No-Track

---

Inverted

---

---

## Deprecation info
The old `groupui-loading-spinner` component is deprecated and will be removed in a later major release.
Please use `groupui-loading` instead.
