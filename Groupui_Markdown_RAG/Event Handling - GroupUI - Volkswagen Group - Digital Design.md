---
title: Event Handling
source: GroupUI
category: documentation
type: documentation
topics:
  - accessibility
  - react
  - web-component
last_modified: Mon, 08. Sep 2025 07:18
---

# Event Handling

---

## Native Events
Most of the events which are fired by an HTML element inside a Web Component bubble through the [Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom). These Events belong to the group of [UIEvents](https://www.w3schools.com/jsref/obj_uievent.asp).
**Related Event Object are:**
* [FocusEvents](https://www.w3schools.com/jsref/obj_focusevent.asp)
* [InputEvents](https://www.w3schools.com/jsref/obj_inputevent.asp)
* [KeyboardEvents](https://www.w3schools.com/jsref/obj_keyboardevent.asp)
* [MouseEvents](https://www.w3schools.com/jsref/obj_mouseevent.asp)
* [TouchEvents](https://www.w3schools.com/jsref/obj_touchevent.asp)
* [WheelEvents](https://www.w3schools.com/jsref/obj_wheelevent.asp)
Have a look [here](https://developers.google.com/web/fundamentals/web-components/shadowdom#events) for more details.
CAUTION when using the react wrapper: Some events that are not able to bubble through the [Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom) are lifted and dispatched as by a custom event (e.g. change). These custom events are listed in the event section of the component.

---

## Custom Events
For special use cases we still provide some custom events which are also listed in the event section of the component's documentation.
