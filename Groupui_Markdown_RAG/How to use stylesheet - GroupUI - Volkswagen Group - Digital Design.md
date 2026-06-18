---
title: How to use stylesheet
source: GroupUI
category: documentation
type: documentation
topics:
  - css-framework
last_modified: Mon, 08. Sep 2025 07:18
---

# How to use

---

### CSS / SASS
Once installed, the recommended way to use the Group-UI CSS Framework, is by importing them directly in a CSS or SASS file:
@import "~@group-ui/group-ui-css-framework/dist/groupui.css"
Certain bundlers struggle with resolving aliased node\_module imports during the build process. If this is the case you may have to provide the relative path to the stylesheet:
@import "../node-modules/@group-ui/group-ui-css-framework/dist/groupui.css"

---

### HTML
You can also include the GroupUI CSS Framework directly from a html file. This can be done by simply adding link tag into the `<head>` section of your document
<link rel="stylesheet" href="[path-to-css-framework]/groupui.css">
It's also possible to refer to the remote CSS file directly, but this is only recommended for quickstarts, due to increased network load and reliance on our CDN during runtime. For long-term usage, it's best to avoid this approach.
<link rel="stylesheet" href="https://groupui-css.vwapps.run/latest/groupui.css">

---
