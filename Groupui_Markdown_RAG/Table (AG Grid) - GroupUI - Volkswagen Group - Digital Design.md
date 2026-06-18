---
title: Table (AG Grid)
source: GroupUI
category: documentation
type: documentation
topics:
  - accessibility
  - angular
  - react
last_modified: Thu, 26. Mar 2026 13:56
---

# Table (AG Grid)

---

## Usage
The AG Grid table framework is a powerful component specifically designed to efficiently represent complex tables and data structures. Our custom theme for AG Grid complements our base table and offers extended functionalities and customization options. This component is ideal for teams that need to manage and display large amounts of data and integrates seamlessly into our existing design system.
Please note:
Please note that the use of the AG Grid framework must be reviewed and approved separately by each product team. The clarification of whether you can license the AG Grid is also up to the respective products. Our team only considers the visual aspects during customization. We are not responsible for bugs and feature requests that are not related to the design.

---

## Installation
**Step-by-Step Guide**
1. If not yet installed, then install AG Grid according to [their documentation](https://www.ag-grid.com/react-data-grid/getting-started/).
2. Add the linked [CSS file](https://assets.groupui.vwapps.run/latest/static/themes/ag-grid/groupui-ag-grid.css) to your stylesheets, to theme your AG Grid table.
   `https://assets.groupui.vwapps.run/specific/2.6.1/static/themes/ag-grid/groupui-ag-grid.css`
3. Be aware, that the import of this style is after the AG Grid styles.
API Change at AG-Grid:
﻿With v33 there has been a change in AG-Grid's theming API. The currently provided GroupUI AG-Grid theme will still work but you will have to pass the string "legacy" to the theme grid option (see [here](https://www.ag-grid.com/angular-data-grid/theming-migration/#updating-your-app-for-v33)).
﻿A new, adapted GroupUI theme will be provided soon.

---

## Demo
We have prepared a small example, how tables may look like using AG Grid.
Please check the added Javascript block for the configuration.
Reset pattern
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
<link rel="stylesheet" type="text/css" href="https://assets.groupui.vwapps.run/latest/static/themes/ag-grid/groupui-ag-grid.css"/>
```html
<div id="css-ag-grid-container" class="flex-center container-border">
<div id="content">
<div id="exampleTable" class="ag-theme-quartz" style="height:500px;">
</div>
</div>
</div>
```
```
## Pitfalls
If you are using AG-Grid inside a `display: flex` container, it helps to set the `domLayout` to `autoHeight`:
`<ag-grid-angular domLayout="autoHeight" />`
The default height of the table is set to 150px. To change that you can reset the min-height in CSS
`.ag-center-cols-viewport { min-height: unset !important; }`

---

## Compatability
| AG-Grid Version | GroupUI Assets >= v2.3.0 | GroupUI Assets < v2.3.0 |
| --- | --- | --- |
| >= v33 | ✅ | ✅ (must enable [ag-grid legacy mode](https://www.ag-grid.com/angular-data-grid/theming-migration/#continue-with-legacy-themes)) |
| < v33 | ❌ | ✅ |

---

### AG Grid v33 Theming Changes
With the release of AG Grid v33, the theming API has been significantly reworked, requiring updates to our groupui-ag-grid-theme. Key changes include:
* Updated Theme Variables – Some variables have been added, changed, or removed.
* No More Theme Classes – Theme classes (e.g., class="ag-grid-theme-quartz") are no longer required.
* JS Theming API – AG Grid now provides a JavaScript-based theming API, which is not supported by groupui-ag-grid-theme.
For more details, refer to the [AG Grid v33 Migration Guide](https://www.ag-grid.com/angular-data-grid/theming-migration/).
