---
title: Navigation - global side
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Thu, 04. Jun 2026 11:46
---

# Navigation - global side

---

## Usage
The global side navigation represents the top-level pages of a site's structure. It appears in an unchanged, consistent position on all pages.
**Use global side navigation when:**
* site has 5+ main navigation categories
* number of main navigation categories may increase in the future
* need to nest sub menus in global navigation eg. accordion, drill down, tree.
* size of content area is not so important
[Navigation overview](https://digitaldesign.volkswagen-group.com/r/Yi-5jIRZ3yV8eOnDl-By1ZLYZml6ZTfUpTQM7HNBGFg)

---

### Anatomy
Logo/product name
Top level global items
Second level global items (+ more levels)
Top level items as folders
Utility links for global functions like settings, language selection, or login.

---

### Branding
To ensure consistent and clear communication across all applications, it is crucial that the corporate logo is uniformly presented in both public and internal applications and websites. There are four different possibilities to customize the branding of the global top navigation, depending on the website or application. For the correct use of logos inside the global top navigation, please find more guidelines about brand architecture in [Logos](https://digitaldesign.volkswagen-group.com/r/glWRMpz1kJzSsiav85Gj4vziFWrFGKglvG5HRxpXOBk).

---

### Indentation
When expanding a folder or accordion, you will see different indentation spacing values based on margin, whether the higher-level category has one, two or no left icon. The starting point to set the correct indentation is always the text. On each sub-level the indentation will be increased by 12px to the left, based on the former level's spacing between text and left side.

---

### Responsive behavior
Global side navigation( expanded with text or icon only 'rail') is designed for use on large viewports.
It should not be used on medium to small viewports. For small viewports use a Global top navigation with a hamburger menu instead.
On smaller breakpoints, where the global top navigation transforms into a mobile navigation, the hamburger icon triggers the global side menu component.
Mobile navigation - hamburger icon triggers global side menu

---

### Combination with local navigation
There are different ways in which the navigation on a page can be used and combined with other navigation components. It depends for example on the available screen space, amount of local navigation categories, or whether you want to lock out the content area or not.
For combination examples, see:
* [Local side navigation](https://digitaldesign.volkswagen-group.com/r/tDm2kQD3FStkmTLQO99yoaE_kjsXghjknuhUjB5-0JQ)
* [Local top navigation](https://digitaldesign.volkswagen-group.com/r/YTjIW-46RNE2gqpOxPsmq_y0avmewEnJ3XflfK4sHJU)
* ![Global side navigation - with local side](./Navigation - global side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvYzZDTEt1dXVrNVpDVktLS2dVbnYucG5nIn0_volkswagen_hW7d0_YOgGpxb0Cu4vGaGRac-YmSbLfcVTQtQmfWo6Y)
  Global side with local side navigation
* ![Global side navigation - with local top](./Navigation - global side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvVGR3eHNBbVVrU0d3TmpIcUFHbWcucG5nIn0_volkswagen_5r89JZn5wblnq6o3T2I4CA_Ut6sXQ1jq8y3V1FkkqXQ)
  Global side with local top navigation

---

## Variants
There are different variants to cover a wide range of marketing and product related applications. You can customize the global side navigation based on your sites' structure and needs.

---

---

### Expandable / Collapsible
Text based global side navigation is collapsible to the icon-only variant via an expand/collapse control. Navigation is expanded by default to provide context to new and infrequent users. Navigation is collapsible for experienced users or when content area is limited.
Navigation - global side - variant - collapsible/expandable
#### Behaviour, placement and impact on content area
**Expand/collapse on click**
Clicking the expand/collapse control toggles between expanded and icon only global side navigation. Content area is adjusted to automatically fit the area.
Navigation - global side - variant expandable - on click
**Expand/collapse on hover (optional)**
**﻿**
In some situations, users may need to hover over a collapsed navigation rail to temporarily display the expanded menu. During the hover state, the collapsed side navigation temporarily overlaps the main content area.
User can hover on any part of the rail. The expand/ collapse control must still be visually present in order to support touch interactions.
Navigation - global side - variant expandable - on hover

---

### Sizes
The global side navigation comes in two sizes to support complex navigation structures and structures that need more whitespace like e.g. a corporate website.
Left side size S (default) and Right side size L

---

### Icons
Pair icons with text whenever you want higher emphasis on the global item and want to visually support the name of the page. Be careful with using icons when your sites' structure is complex with a lot of global items or nested structures like accordion, or folder trees.
Navigation Items with icons

---

### Dividers
Dividers can be used inside the global side navigation to visually separate global items. Consider this for complex global navigation structures with a lot of global items, be careful with using dividers when the navigation structure only consists of a few global items.
Left side without dividers (default) and Right side with dividers

---

### Accordion
You can nest sub-categories into the main categories by using an accordion structure.
A global side navigation supports accordion structures perfectly, as you have enough vertical space to display, expand, and collapse multi-level category structures.
Collapsed items on the left (default) and Expanded items on the right

---

### Drill down
With a drill down structure, you navigate back and forth between top-level and lower-level navigation categories.
A drill down works well on mobile and is a common pattern to be used on smaller viewports.
Left side top level and Drilled down two levels on the right
```
```html
<div class="container">
<groupui-global-side-navigation-item>
<div slot="label">Global Item</div>
</groupui-global-side-navigation-item>
<groupui-global-side-navigation-item>
<div slot="label">Global Item</div>
</groupui-global-side-navigation-item>
</groupui-global-side-navigation-drilldown-item>
</groupui-global-side-navigation-drilldown-item>
<groupui-global-side-navigation-drilldown-item>
<div slot="label">Global Item</div>
<groupui-global-side-navigation-drilldown-item back-button-text="Back to Mid-Level">
<div slot="label">Global Item</div>
<groupui-global-side-navigation-item>
<div slot="label">Global Item</div>
</groupui-global-side-navigation-item>
<groupui-global-side-navigation-item>
<div slot="label">Global Item</div>
</groupui-global-side-navigation-item>
</groupui-global-side-navigation-drilldown-item>
<groupui-global-side-navigation-drilldown-item back-button-text="Back to Mid-Level">
<div slot="label">Global Item</div>
<groupui-global-side-navigation-item>
<div slot="label">Global Item</div>
</groupui-global-side-navigation-item>
<groupui-global-side-navigation-item>
<div slot="label">Global Item</div>
</groupui-global-side-navigation-item>
</groupui-global-side-navigation-drilldown-item>
</groupui-global-side-navigation-drilldown-item>
</groupui-global-side-navigation-items>
</groupui-global-side-navigation>
</div>
```
```

---

### Folder tree
A global side navigation supports folder or tree structures, as it provides enough vertical space to display multiple global levels.
Nest lower-level folders into top-level folders, similar to an accordion structure.
Collapsed items on the left (default) and Expanded items on the right

---

### Responsiveness
The web component `groupui-global-side-navigation` is responsive.
When either the property `breakpoint` (which supports predefined values from s to xl) or `customBreakpoint` (which accepts any pixel value) is set, the component automatically switches to mobile view once the screen size becomes smaller than the defined breakpoint.
In this case, the component checks whether a `groupui-burger-menu` is present within the navigation.
If so, it is displayed instead of the `groupui-global-side-navigation-items` and `groupui-global-side-navigation-utility-items`.
The `customBreakpoint` has a higher priority than `breakpoint`.
Mobile view with a burger menu is shown below the breakpoint l

---

## Do / Don't
* ![](./Navigation - global side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvTDgxRnd5Ym9hRkJDUlNNUjVMTW8ucG5nIn0_volkswagen_gRN3ZtqA4B_UAGqZ4VpJsAn1sgMcAAjUrXmXIpctPB0)
  Do
  Use global side navigation structure for 5+ main categories.
* ![](./Navigation - global side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvRFQ2VFRkQjVXdXZjanpDbmZWUUYucG5nIn0_volkswagen_9eqhekk4RtrWBVI_C9bVwEBhxGZ3FjUxkq6qpMMvJ1Q)
  Do
  Do use the defined branding for communication in the navigation.
* ![](./Navigation - global side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvdHBEWG14ZGJGQTRNbTU0WjNvdTgucG5nIn0_volkswagen_Q7dDVJF4gs8cmAuKlp7vqAqCuHHFcjYeLMqTXkHbAW0)
  Do
  Do use the global side navigation only with a local navigation.
* ![](./Navigation - global side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvM043eldaWVR6ZldzUzFKZG50SjMucG5nIn0_volkswagen_Gpf3bboxnUTXruFqwgcTVONeUGPhqLQa16jzA1rCb94)
  Do
  When using a collapsible side navigation show icons consistently in expanded and collapsed mode.
* ![](./Navigation - global side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvTEtNdXNURWp6alB1NDJ5d3liN24ucG5nIn0_volkswagen_QWACLXASqFyj-52Hu2out25xStL5R-KNIRMDPlz0UsE)
  Don't
  Do not use global side navigation for less than 5 main categories, use global top navigation instead.
* ![](./Navigation - global side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvUUgyZHZtcU1ieDR6cExlQUtZTE0ucG5nIn0_volkswagen_aJx9YVt76o6fgS22Ib7CFd4jpWhCnZK2qQHVKX2QViU)
  Don't
  Do not use custom visualizations or logos in the navigation.
* ![](./Navigation - global side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvNWJrb0pkeEtzTW9xRWFOUU03RVYucG5nIn0_volkswagen_lzpyP8rqPwm1myiX2PyTguj4Ttwm3VTaujDwM1lmVpQ)
  Don't
  Do not use the global side navigation with a global top navigation.
* ![](./Navigation - global side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvcDYxVWRIVWJxc0VybzNGMnpYVUgucG5nIn0_volkswagen_1qyEkQEHcuc-Lh_lD9GT3ZCyvdjXY8TxR2v5NXYdL8k)
  Don't
  Don’t show icons only on collapsed and text only on expanded.

---

### Global Side Navigation - Showcase
The div container is used for this documentation and not needed in your application.

---

## Deprecation Info
Deprecated Component:
The component below is deprecated and part of our legacy navigation system. It will be replaced by a new, modular navigation concept that is currently being rolled out step by step.
We recommend using the new components for future development whenever possible.
### Side Navigation - Deprecated
| Property/Event | Deprecated since Version | Removed in Version | Substitute |
| --- | --- | --- | --- |
| groupui-side-navigation- group: headline | 6.8.0 | 7.0.0 | use the dedicated slot instead |
| groupui-navigation-item | 6.4.0 | 7.0.0 | component is deprecated, use groupui-top-navigation-item or  groupui-side-navigation-item instead |
