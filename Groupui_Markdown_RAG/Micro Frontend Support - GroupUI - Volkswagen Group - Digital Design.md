---
title: Micro Frontend Support
source: GroupUI
category: component
type: documentation
topics:
  - web-component
last_modified: Mon, 08. Sep 2025 07:18
---

# Micro Frontend Support

---

Using GroupUI web components in Micro Frontend environments can be a little tricky, especially when the different frontends depend on different GroupUI versions. This is because a custom web component can be registered in the browser **only once under a given name**. If a micro frontend tries to register a web component under the same name as it has been registered before by another micro frontend already, it will be discarded and only the first micro frontend's version will be used. This raises a problem when different micro frontends depend on different GroupUI versions that may have breaking changes.
Example scenario: **Micro Frontend X** uses a `<groupui-radio-button-group>` from version 8.x.x and **Micro Frontend Y** uses the same component from version 11.x.x. The default selection behavior of this component has changed. Both micro frontends are implemented dealing with a different behavior. But because of the way custom web components are registered in the browser, only version 8.x.x will be used in the whole context and only **Micro Frontend X** will work as expected. **Micro Frontend Y** on the other hand will not behave as expected or even break.
In order to deal with this problem, GroupUI offers a so-called **versioned components package** that uses the **major version** as part of the tag name of the provided components, e.g. `<groupui-11-radio-button-group>`. By using these packages, it's ensured that Micro Frontends depending on different major versions of GroupUI can be used alongside each other, reducing the risk of breaking changes.
The package will be shipped simultaneously with the regular web component package so that bugfixes and other non-breaking improvements from our minor or patch releases can be used. However, the tag name extension will change **only on major releases**.
Attention:
The versioned components release is available since version 11.2.0. Releases for older versions are not available.

---

### Installation possibilities
Similar to the original web component files, the versioned components can be either included as static files or installed either from the CDN or Artifactory. Just the paths are different, so no extra setup preparation is needed.

---

## Usage
With the versioned components, the major version is included within the tag name.
The pattern is: `groupui-[major version]-[component name]`
The following code snippet shows the usage.
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<script
type="module"
src="https://groupui.vwapps.run/versioned-components/specific/11.3.0/static/group-ui-11-3-0/group-ui-11-3-0.esm.js"
></script>
<script
nomodule
src="https://groupui.vwapps.run/versioned-components/specific/11.3.0/static/group-ui-11-3-0/group-ui.js"
></script>
<link
rel="stylesheet"
href="https://groupui.vwapps.run/versioned-components/specific/11.3.0/static/group-ui-11-3-0/assets/themes/vwgroup/vwgroup.css"
/>
<title>GroupUI</title>
```html
</head>
<body>
<groupui-11-headline>Welcome to GroupUI</groupui-11-headline>
<groupui-11-button>Click me!</groupui-11-button>
</body>
</html>

```
---
