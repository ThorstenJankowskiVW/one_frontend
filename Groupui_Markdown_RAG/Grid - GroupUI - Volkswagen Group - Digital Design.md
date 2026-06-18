---
title: Grid
source: GroupUI
category: component
type: documentation
topics:
  - css-framework
  - tokens
last_modified: Thu, 15. Jan 2026 15:27
---

# Grid

---

## Usage
The grid is the basis for positioning and aligning content within an application and forms the basis for a harmonious and user-friendly design. It defines the behavior of the components within responsive designs, so that the content is optimally presented for all end devices.

---

| Tokens | Breakpoints | Columns | Gutters | Static | Flexible |
| --- | --- | --- | --- | --- | --- |
| media-query.s | 320-559 px | 12 (Design only 4 columns) | 16 px | 16 px | 16 px |
| media-query.m | 560-959 px | 12 (Design only 6 columns) | 24 px | 24 px | 24 px |
| media-query.l | 960-1279 px | 12 | 24 px | 24 px | 48 px |
| media-query.xl | 1280-1619 px | 12 | 24 px | 24 px | 72 px |
| media-query.xxl | 1620-... px | 12 | 32 px | 32 px | 96 px |
The maximum width of our content is 1620 px!

---

## Grid types
When it comes to designing a website, there are different options for designing and arranging the content.

---

#### Fluid (Recommended)
With the liquid layout, the sizes of the columns are given in percent. Only that the gutter is given in pixel sizes and changes depending on the size of the screen.

---

#### Hybrid
A hybrid grid contains parts of a fluid as well as a fixed grid. Often elements such as the header and footer are used as a fluid grid and content areas are used as a fixed grid.

---

## Anatomy
The anatomy describes the different elements that make up a grid system.
Columns
Gutters
Margins
Rows
### Columns
The basis in our grid system is a 12 columns layout which can be flexibly adapted. For the display of content on mobile devices, we recommend a maximum number of 4 columns in order to display a uniform and well-structured design.
### Gutters
The gutter is the distance between the columns and defines the visual appearance of each page. The distances between the gutter change over the different breakpoints in order to ensure a balanced size ratio for the respective representations.
### Margins
Margins are the distance between the content and the edges of the screen. Within the grid types there is a different use of the margins for fixed and flexible grids which are described in the grid types. When using fluid grids, static or flexible margins can be used.
* The **margins flexible** (recommended) changes with the scaling of the browser size and adapts to the different break points.
Flexible margins
* The **margins static** behave like the gutter and change only once when switching from the mobile to the desktop view.
Static margins
### Rows
The row describes different sections on a page in which content can be arranged and aligned by using the columns differently. The grid can also be adjusted within the sections, for example to add full-screen elements.

---

## CSS Framework
The implementation of the Group UI Grid uses CSS-Grid to facilitate layout and alignment of content. This system is fully responsive and comprises containers, rows, and columns. Below is an extensive explanation of its components and how they integrate into application development.

---

#### Grid Container
`.g-grid`
Denotes the container of the grid. It applies the grid-template, margins, and gutter spacings. Content alignment is achieved using rows and columns.

---

#### Grid Row
`.g-grid-row`
Signifies a container inside of the grid-container, spanning an entire row. It's an optional wrapper for columns, managing layout using a subgrid.

---

#### Grid Column
`.g-grid-col[-breakpoint]-(colspan)`
Fundamental building block of the grid system. Defines the width of a column within the grid layout by specifying the number of columns it should span per breakpoint.

---

#### Example
This is a basic example of how to use the Group UI CSS Grid. More complex examples including nesting, responsiveness and customizations can be found within the next sections.
Open in CodeSandbox

---

### Breakpoint Cascading
We've implemented responsive class modifiers designed for the six available breakpoints (s, m, l, xl, xxl), which can be applied to both the column component and our customization properties. To ensure precise breakpoint settings, we've incorporated a fallback mechanism following this sequence from highest weight to lowest:
1. *Specific breakpoint settings (e.g., g-grid-col-xl-\*)*
2. *General setting with no breakpoint specification (e.g., g-grid-col-\*)*
3. *Next smaller breakpoints (e.g., g-grid-col-l when the screen width is at xl)*
4. *Default value if none of the above apply.*

---

#### Examples
Open in CodeSandbox

| Breakpoint | Computed Colspan |
| --- | --- |
| s | 2 |
| m | 12 |
| l | 2 |
| xl | 2 |
| xxl | 2 |

---

Open in CodeSandbox

| Breakpoint | Computed Colspan |
| --- | --- |
| s | 1 (default value) |
| m | 6 |
| l | 6 |
| xl | 10 |
| xxl | 10 |

---

#### Grid types
The two primary grid types, fluid and fixed, are implemented by applying the corresponding CSS class to the grid container element.
`.g-grid-fluid`
Default grid type, spanning the width of the parent container with dynamic margins.
Open in CodeSandbox

---

`.g-grid-fixed`
Grid with a fixed width matching the corresponding breakpoint by default. Without margins.
Open in CodeSandbox

---

#### Margin types
The two available margin types (static & flexible) can be applied using the respective css class on the grid container element.
`.g-grid-static-margin`
Default margin type
Open in CodeSandbox

---

`.g-grid-flexible-margin`
Open in CodeSandbox

---

#### Column Offset
Columns can be offset by a range of **1 to 11 columns**. Offset columns begin at the value specified for the **offset + 1 column**. You have the option to specify a breakpoint (s, m, l, xl, xxl), or leave it blank to apply the offset across all breakpoints.
`.g-grid-col-offset[-breakpoint]-(offset-value)`
Open in CodeSandbox

---

### Customization
Margins, gutter spacing, and fixed width values can be customized using inline CSS custom properties, allowing general or breakpoint-specific values. Breakpoint-cascading acts analogue to the column class.
#### Custom Margin
Margins can **only** be customized on the grid-container element
`--g-grid-margin[-breakpoint]`
Open in CodeSandbox

---

#### Custom Gutter Spacing
`--g-grid-gutter[-breakpoint]`
Gutter spacings describe the gap between columns and rows of a grid. Customize them on **grid-container or row elements**
Open in CodeSandbox

---

#### Custom Fixed Width
Fixed widths determine the width of the whole grid container. Customizations can be done **only** on the grid-container element
Open in CodeSandbox

Note: You must ensure that the grid-container has the .g-grid-fixed class attached to customize the fixed width.

---

### Nesting
For optimal flexibility, we've enabled the capability to infinitely nest grid-containers into grid-container, rows or columns. Nesting allows you to gain layout control over smaller page fractions inside of the main grid and alter grid specific custom values in a certain scope.
#### Example
Open in CodeSandbox

Note: Nesting row's into row's is possible, but as it has no direct effect on the layout except of creating unnecessary subgrid's, we don't recommend doing so.
﻿Furthermore the nesting of rows ord columns into columns is highly discouraged, as it doesn't make sense semantically and may cause unwanted side-effects.

---

#### Summary
| Class | Where to use | Values | Default |
| --- | --- | --- | --- |
| .g-grid | any html container, row elements, column elements | - | - |
| .g-grid-row | direct children of grid containers | always spans 12 columns | - |
| .g-grid-col[-breakpoint]-(colspan) | direct children of grid containers or row elements | Colspan: 1-12 | Colspans: 1 |
| .g-grid-col-offset[-breakpoint]-(offset) | column elements | Offset: 1-11 | Offset: 0 |
| .g-grid-flexible-margin | grid-container | - | no |
| .g-grid-static-margin | grid-container | - | yes |
| .g-grid-fluid | grid-container | - | yes |
| .g-grid-fixed | grid-container | - | no |
| Custom Properties | Where to use |
| --- | --- |
| --g-grid-gutter[-breakpoint] | grid-container, row element |
| --g-grid-margin[-breakpoint] | grid-container |
| --g-grid-fixed[-breakpoint] | grid-container |

---

#### Code Sandbox
Open in CodeSandbox
