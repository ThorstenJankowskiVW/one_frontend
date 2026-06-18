---
title: Branding
source: GroupUI
category: guideline
type: documentation
topics:
  - accessibility
  - tokens
  - web-component
last_modified: Mon, 08. Sep 2025 07:18
---

# Branding
GroupUI is a framework for multiple brands. We deliver our web components with different brand specific styles. The leading brand is `vwgroup`. Before version of GroupUI 9.0.0 the leading brand was `vwag`.

---

Attention:
With version 12.0.0 the attribute for selecting the styling was changed from brand to data-gui-brand and the dark mode is set buy using data-gui-mode with the value dark.
To apply different styles than the default in older version you still have to use brand.
Versions before 9.0.0 used the keyword theme
## Available Brands
| Brand Selector | Brand | HTML Attribute | Asset path |
| --- | --- | --- | --- |
| vwag | Volkswagen Group | data-gui-brand="vwag"  **Before version 12.0.0** it was  brand="vwag" | @group-ui/group-ui/dist/group-ui/assets/themes/tokens.scss  **Before version 12.0.0** it was  @group-ui/group-ui/dist/group-ui/assets/themes/vwag/vwag.css |
| vwgroup | Volkswagen Group | data-gui-brand="vwgroup"  **Before version 12.0.0** it was  brand="vwgroup" | @group-ui/group-ui/dist/group-ui/assets/themes/tokens.scss  **Before version 12.0.0** it was  @group-ui/group-ui/dist/group-ui/assets/themes/vwgroup/vwgroup.css |

---

## Assets Integration
To use branding in our components it is required to import the suitable css file(s) from the assets folder. There are css variables with some basic values defined (e.g. colors, fonts, ...). After successfully importing these files you can move on with the next step.

---

## Add / change brand attribute
You can define the theme by adding the attribute `brand` to a html element in your application. All nested components will adapt this `brand` attribute. The following example sets the `brand` attribute to the body tag:
<html>
<body data-gui-brand="vwgroup">
```html
<groupui-button>Click me</groupui-button>
</body>
</html>
```
You could also use multiple themes in one page:
<html>
<body data-gui-brand="vwgroup">
```html
<groupui-button>Click me</groupui-button>
<groupui-button data-gui-brand="vwag">Click me</groupui-button>
</body>
</html>
```
