---
title: Navigation - local side
source: GroupUI
category: documentation
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Thu, 21. May 2026 12:19
---

# Navigation - local side

---

## Usage
Local side navigation is used to access lower levels in a structure, below the global navigation pages. These navigation components can be mixed and matched with global navigation components and sometimes each other.
**Use local side navigation:**
* with any global navigation
* to support 1 level of local navigation in basic form
* to support further levels with nested accordion / drill down navigation
[Navigation overview](https://digitaldesign.volkswagen-group.com/r/Yi-5jIRZ3yV8eOnDl-By1ZLYZml6ZTfUpTQM7HNBGFg)
Global navigation components with local side navigation

---

### Anatomy
Optional: header / white space
Top level local items
Second level local items (+ more levels)
Top level items as folders

---

### Indentation
When expanding a folder or accordion, you will see different indentation spacing values based on margin, whether the higher-level category has one, two or no left icon. The starting point to set the correct indentation is always the text. On each sub-level the indentation will be increased by 12px to the left, based on the former level's spacing between text and left side.

---

### Responsive behavior
Local side navigation( text or icon only 'rail') is designed for use on large viewports only.
It should not be used on medium to small viewports eg. tablet/mobile. For medium to small viewports use a local drill down reached via a hamburger menu in a global top navigation.
| Breakpoint | Navigation component | Left padding |
| --- | --- | --- |
| L-XXL | Global top/ global side + local side (text/icon only) | 24 px |
| M | Global top navigation with hamburger | 24 px |
| S | Global top navigation with hamburger | 16 px |
On smaller breakpoints, where the global top navigation transforms into a mobile navigation, the hamburger icon triggers the global side menu component, which can trigger the local side menu component.
* ![Local side navigation with global side - responsive desktop](https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvSjRtZlo5dkFHS3lxc2o5UXF4Y00ucG5nIn0:volkswagen:R71pEa-wFyJSVzUez27J_HL3u4wnR8sSIb8QcEpbK94?width=766)
  Global side with local side on large viewports
* ![Local side navigation - responsive mobile](https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvbWF4RzNrMjVQUERVYXQ1VzRXMXkucG5nIn0:volkswagen:sM1-ZXge9-UjhgYDVogRoQSEy44_AZwvaKBm7G6XApM?width=766)
  Global side with local side on small viewports
* ![Local side navigation with global top - responsive desktop](https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvbUx0SHlNQlk4UlRrZFo0dTRmanYucG5nIn0:volkswagen:KClm5cz9qGcRu-WEH6DqEHA00mqc-NO8igq76YibtLY?width=766)
  Global top with local side on large viewports
* ![Local side navigation - responsive mobile](https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvbWF4RzNrMjVQUERVYXQ1VzRXMXkucG5nIn0:volkswagen:sM1-ZXge9-UjhgYDVogRoQSEy44_AZwvaKBm7G6XApM?width=766)
  Global top with local side on small viewports
**Margins**
Margins are different on small and larger viewports.

---

### Combination with global navigation
There are different ways to combine local side navigation with global navigation components. It depends for example on the available screen space, amount of local navigation categories, or whether you want to lock out the content area or not.
**Combined with global side navigation**
Global item in global side navigation triggers local side navigation.
* ![Global side navigation - with local side 01](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3C/svg%3E)
* ![Global side navigation - with local side 02](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3C/svg%3E)
**Combined with global top navigation**
Global item in global top navigation triggers local side navigation.
* ![Global top navigation - with local side 01](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3C/svg%3E)
* ![Global top navigation - with local side 02](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3C/svg%3E)
**Combined with global and local top navigation**
Global item triggers local side navigation which can trigger a local top navigation.
* ![Global top and local side - with local top 01](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3C/svg%3E)
* ![Global top and local side - with local top 02](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3C/svg%3E)
**Combined with global top and local top navigation**
Compared to the example above, the global item triggers a local top navigation, which can trigger a local side navigation.
* ![Global top and local top - with local side 01](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3C/svg%3E)
  Global top with local side on large viewports
* ![Global top and local top - with local side 02](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3C/svg%3E)
  Global top with local side on small viewports

---

## Variants
There are different variants to cover a wide range of marketing and product related applications. You can customize the global side navigation based on your sites' structure and needs.

---

---

### Expandable/collapsible
The local side navigation is collapsible to the icon-only rail variant via the expand/collapse control.
Navigation - local side - expandable/collapsible

#### Behaviour, placement and impact on content area
**Expand/collapse on click**
Clicking the expand/collapse control toggles between expanded and icon only local side navigation. Content area is adjusted to automatically fit the area.
Navigation - local side - expand collapse on click
**Expand/collapse on hover (optional)**
**﻿**
In some situations, users may need to hover over a collapsed navigation rail to temporarily display the expanded menu. During the hover state, the collapsed side navigation temporarily overlaps the main content area.
User can hover on any part of the rail. The expand/ collapse control must still be visually present in order to support touch interactions.
Navigation - local side - expand collapse on hover

---

### Sizes
The local side navigation comes in two sizes to support complex navigation structures and structures that need more whitespace like e.g. a corporate website.
Left side size S and size L on the right

---

### Icons
Pair icons with text whenever you want higher emphasis on the local item and want to visually support the name of the page. Be careful with using icons when your sites' structure is complex with a lot of local items or nested structures like accordion, or folder trees.
Navigation Items with icons

---

### Dividers
Dividers can be used inside the local side navigation to visually separate local items. Consider this for complex local navigation structures with a lot of local items, be careful with using dividers when the navigation structure only consists of a few local items.
Left side no dividers and dividers on the right

---

### Accordion
You can nest sub-categories into the main categories by using an accordion structure.
A local side navigation supports accordion structures perfectly, as you have enough vertical space to display, expand, and collapse multi-level category structures.
Collapsed items on the left and expanded on the right

---

### Drill down
With a drill down structure, you navigate back and forth between top-level and lower-level navigation categories.
A drill down works well on mobile and is a common pattern to be used on smaller viewports.
* ![Local side navigation - drilldown](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3C/svg%3E)
  Local side navigation - drill down
* ![Global to local side navigation - drilldown](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3C/svg%3E)
  Global to local side navigation - drill down

---

### Folder tree
A local side navigation supports folder or tree structures, as it provides enough vertical space to display multiple local levels.
Nest lower-level folders into top-level folders, similar to an accordion structure.
Left side collapsed and expanded on the right

---

## Do / Don't
* ![](./Navigation - local side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvd1FzdDlhSGh1TkdrNjVvNTY1NVIucG5nIn0_volkswagen_Eq9YnNJtFEnP4_Q0N-hzi5r_djNhbSy3lUrNZsnjl58)
  Do
  Use local side navigation for local items - triggered by any global navigation - only.
* ![](./Navigation - local side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvVXkyRk1ZZWF4ZTI3WXM5UEh6ODcucG5nIn0_volkswagen_UhVzUN-cBHmRTX-qViK9tUsdDixu4WizsgskRyD1NaE)
  Do
  Do use local side navigation for 5+ local categories.
* ![](./Navigation - local side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvVVh4VEdlZFo2enNnNXI0VzRNTlYucG5nIn0_volkswagen_duu-WRO3ii9fu1_Ta_4t9guzdALQ815QviFecy14Dts)
  Do
  When using a collapsible side navigation show icons consistently in expanded and collapsed mode.
* ![](./Navigation - local side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvNnBVbXZBTkVXM3g5Y0FGcHFrWE4ucG5nIn0_volkswagen_mEP-lPKKZzQsISCGHpJtffhoHZNfFEIBsZACY8vL-bo)
  Do
  Use local side navigation only with a global top or global side navigation.
* ![](./Navigation - local side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvdng4eDRNMmhjTEdnem9OcTdIc1AucG5nIn0_volkswagen_6qbF4lbAmvgyurTC8WUKoczxjvFGZyqIPIyI9MHif-w)
  Don't
  Do not use local side navigation for top level global items, use global navigation instead.
* ![](./Navigation - local side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvVUdQWEtqaXpnYWg4eGt1eERzcjQucG5nIn0_volkswagen_B5DhveIusTVkZtJBfvnqqvOi5iF6HDY12BryiN29Hxg)
  Don't
  Do not use local side navigation for less than 5 local categories. Use local top navigation instead.
* ![](./Navigation - local side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvOWNLU3VtQkhzTEJhVm1BY0xDcGQucG5nIn0_volkswagen_ZtLvHG6sdg-46g7H9q2ZjRgoNpxmuB5bJlbhK-ppkmg)
  Don't
  Don’t show icons only on collapsed and text only on expanded.
* ![](./Navigation - local side - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvS3RvTnR6dUdmWDhEQlNWMThLWnMucG5nIn0_volkswagen_PdUPamHKH5e5jaV_U4roSgg6Exts310LzPDowWSTtQU)
  Don't
  Don’t use local side navigation without a global navigation.

---

## Web Component
Local side navigation - Showcase
The div container is used for this documentation and not needed in your application.

Deprecated Component:
The component below is deprecated and part of our legacy navigation system. It will be replaced by a new, modular navigation concept that is currently being rolled out step by step.
We recommend using the new components for future development whenever possible.
## Deprecation Info
| Property/Event | Deprecated since Version | Removed in Version | Substitute |
| --- | --- | --- | --- |
| groupui-side-navigation- group: headline | 6.8.0 | 7.0.0 | use the dedicated slot instead |
| groupui-navigation-item | 6.4.0 | 7.0.0 | component is deprecated, use groupui-top-navigation-item or  groupui-side-navigation-item instead |
