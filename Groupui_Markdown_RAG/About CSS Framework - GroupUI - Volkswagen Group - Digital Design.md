---
title: About CSS Framework
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
  - tokens
last_modified: Mon, 08. Sep 2025 07:18
---

# About CSS Framework

---

## Introduction
The GroupUI CSS Framework is designed to offer our components with enhanced flexibility. Built exclusively on CSS, it allows easy usage through the application of style classes. With the inclusion of our design tokens as CSS custom properties, it ensures consistency and facilitates straightforward mode switching and adaptation to various design requirements.

---

## Naming Conventions
The GroupUI CSS Framework employs the BEM (Block, Element, Modifier) methodology to ensure that the CSS is organized, scalable, and maintainable. This section will guide you through our naming conventions in detail.
Note:
We have based our implementation on the BEM methodology and follow the same principle. We have only simplified and adapted the separators.

---

### BEM Overview
bem-description
BEM stands for Block, Element, Modifier. It is a methodology that helps create reusable components and code sharing in front-end development.
* **Block**: The primary building block of the ***component***, representing a standalone entity that is meaningful on its own.
* **Element**: A distinct part of the block that performs a specific function and is dependent on the block. Just like a filled ***slot.***
* **Modifier**: A class that modifies the appearance or behavior of a block or element, indicating a different state or ***variant.***

---

### Block Naming
Blocks represent the top level abstraction of a GroupUi Component.
**Syntax:**
`.g-component`
**Example:**
`.g-btn`, `.g-card`, `.g-banner`

---

### Element Naming
The element is a part of a block that fulfills a specific role and is semantically tied to the block. In our web-component library, elements are referred to as slots.
**Syntax:**
`.g-component-element`
**Example:**
`.g-banner-head`, `.g-grid-row`, `.g-btn-icon`

---

### Modifier Naming
A modifier is a class that changes the appearance or behavior of a block or element, representing a different state or version. Modifiers apply different GroupUi component variants.
**Syntax:**
`.g-component-modifier`, `.g-component-element-modifier`
**Example:**
`.g-btn-primary`, `.g-card-interactive`, `.g-grid-col-12`

---

#### Button With Icon
<button class="g-btn g-btn-primary">
<i class="g-icon g-icon-clock-24 g-btn-icon" aria-hidden="true"></i>
Button
```html
</button>
```
#### Basic Grid
```html
<div class="g-grid">
<div class="g-grid-row">
<div class="g-grid-col-12 g-grid-col-m-10 g-grid-col-l-8">
```
Content
```html
</div>
</div>
</div>

```

---

## Modes
The GroupUI CSS Framework supports effortless mode switching through the use of design tokens defined as CSS custom properties. To switch modes, simply add the `data-gui-mode=""` attribute to any HTML block element and assign it a valid mode value. This will affect all CSS classes within the scope of that element, allowing for dynamic and context-specific theming.

---

#### Simple dark mode application
<html>
<body data-gui-mode="dark">
<main>
<button class="g-btn g-btn-primary">I'm a dark mode button</button>
```html
</main>
</body>
</html>
```
#### Running different modes in parallel
<html>
<body>
<main data-gui-mode="dark">
<button class="g-btn g-btn-primary">I'm a dark mode button</button>
```html
</main>
<aside data-gui-mode="light">
<div class="g-banner">
<div class="g-banner-head">
```
This is a light mode banner
```html
</div>
</div>
</aside>
</body>
</html>

```

---

## Customization
The GroupUi CSS Framework is designed for easy customization. You can override the default styles by redefining the custom properties or extending existing classes. For a comprehensive list of all available properties, please refer to the Design Tokens page.

---

#### Redefining custom properties
:root {
/\* Overrides the default action color. This will impact e.g. the default button \*/
--groupui-sys-color-action-basic-default: #252EC5;
/\* Overriding the medium drop-shadow. Impacts e.g. the interactive card \*/
--groupui-sys-shadow-m: 5px 5px 0px 0px #000000;
}
#### Extending existing classes
.g-btn {
background-color: #252EC5;
.g-btn-primary {
font-family: Helvetica;
}
}
.g-card {
box-shadow: 5px 5px 0px 0px #000000;
}
