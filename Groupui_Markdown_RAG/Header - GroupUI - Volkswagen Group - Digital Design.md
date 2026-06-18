---
title: Header
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Thu, 12. Mar 2026 13:42
---

# Header

---

Deprecated: The header component is deprecated and was removed in version 13.0.0 of the web components. Use the newer [global top navigation](https://digitaldesign.volkswagen-group.com/r/u-jsie5U913LdVeJddoa8T0wR6_EWhEzf2ybk5qq6MI) component instead. A migration guide can be found in the [release notes](https://digitaldesign.volkswagen-group.com/r/AoJY1h904k5GPrWioQfFVIoJ6JvvD14naShE4TsOmiM).
## Usage
The header is part of every page and the basis of every navigation. It presents the product name, top level information, and actions to the user. Depending on the product, the header can be used alone or in combination with top and side navigation.
There are different ways in which the navigation on a page can be used. Please have a look at our documentation on the different navigation layouts.
[Navigation overview](https://digitaldesign.volkswagen-group.com/r/eRtaf5rRuEOM-hsqbCkuY241BeOSCH7xhpSyh6hrsKU)

---

### Header - Live demo
```html
<div class="header-live-demo container-border">
<groupui-header>
<groupui-headline heading="h5">Product name</groupui-headline>
<groupui-top-navigation size="l" inverted="true" embedded>
<groupui-top-navigation-item>Item 1</groupui-top-navigation-item>
<groupui-top-navigation-item>Item 2</groupui-top-navigation-item>
<groupui-top-navigation-item>Item 3</groupui-top-navigation-item>
</groupui-top-navigation>
<groupui-divider vertical inverted></groupui-divider>
<groupui-action-area>
<groupui-action-area-popover-item>
<span style="color: white" slot="parent"><groupui-icon name="clock-32"></groupui-icon></span>
</groupui-action-area-popover-item>
<groupui-action-area-popover-item>
<span style="color: white" slot="parent"><groupui-icon name="rocket-32"></groupui-icon></span>
</groupui-action-area-popover-item>
<groupui-action-area-popover-item>
<groupui-avatar slot="parent" inverted size="m"></groupui-avatar>
</groupui-action-area-popover-item>
</groupui-action-area>
</groupui-header>
</div>

```

---

## Variants
Depending on the product and context of use, the header can be integrated into the respective product in different ways. The complexity of the header depends on the combinations with the secondary navigation.

---

### Header - Standalone

The basic element contains the product name and can optionally be supplemented with a logo. It is always positioned on the left edge.

---

### Header - Action Items

The header can be supplemented with icons so that important functions can be easily and quickly accessed by the user. This reduced application is mostly used when there is a secondary navigation.

---

### Header - Top Navigation

A list can be added to the header for simple navigation structures. The list should not contain more than a maximum of five navigation points. To use the list elements in the primary navigation, please use the code components from the top navigation as embedded. Under the following link you can find more details.
[Top navigation](https://digitaldesign.volkswagen-group.com/r/Z55ukKAiRiF909nz3zwdZ9E9fzxcfT71tnUfVa9ak3E)

---

### Header - Top Navigation and Action Items

Lists and icons can be used to keep the navigation complexity as low as possible and to display a large number of functionalities in a small area.

---

## Do / Don't
* ![](./Header - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZEFzVHV5OXVCN1pvV3JTUlhlWmMucG5nIn0_volkswagen_qbFW9FU7vPLdjlwbMpfd1A20oCh054Vz8dUgaQBb9r0)
  Do
  Do use the default header colors only.
* ![](./Header - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvNWJZVllVc21CbURhOU54Q2tGQTIucG5nIn0_volkswagen_NyvMN6uQVBdQwICle3tKraX_P4h_6LMvZLVLJ7jQqpA)
  Do
  Do maintain the order of navigation and action items.
* ![](./Header - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvTFhwcFNKNjdZRWpCakJBdlBoZVIucG5nIn0_volkswagen_iPLo8LbuKVVx9WvCSEKTcsr3MF0nQXQaZktjbX3pPuo)
  Don't
  Do not customize the header color.
* ![](./Header - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvRTNIaHpndERxY2dyU0JYZHl1NlgucG5nIn0_volkswagen_MUM9SNNJGBKIxtQFcqgpPODqXqkwKnOpAmXUzcx15rg)
  Don't
  Do not change the order of navigation and action items.

---
