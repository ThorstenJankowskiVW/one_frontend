---
title: Headline
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Headline

---

## Usage
The heading component is used to provide paragraph text for body text and excessive content. For this purpose, depending on the use case, 'The Group HEAD Pro' and 'The Group TEXT Pro' can be used.

---

### Headline - Live Demo
```html
<div class="headline-live-demo flex-center container-border">
<div class="box">
<groupui-headline heading="h6" style="color: var(--groupui-vwgroup-color-grey-400)">The Group HEAD Pro</groupui-headline><br>
<groupui-headline font-variant="TheGroupHEAD-Light" serif="true" weight="light" heading="h1">Headline H1</groupui-headline>
<groupui-headline font-variant="TheGroupHEAD-Light" serif="true" weight="light" heading="h2">Headline H2</groupui-headline>
<groupui-headline font-variant="TheGroupHEAD-Light" serif="true" weight="light" heading="h3">Headline H3</groupui-headline>
<groupui-headline font-variant="TheGroupHEAD-Light" serif="true" weight="light" heading="h4">Headline H4</groupui-headline>
<groupui-headline font-variant="TheGroupHEAD-Light" serif="true" weight="light" heading="h5">Headline H5</groupui-headline>
<groupui-headline font-variant="TheGroupHEAD-Light" serif="true" weight="light" heading="h6">Headline H6</groupui-headline>
</div>
<div class="box">
<groupui-headline heading="h6" style="color: var(--groupui-vwgroup-color-grey-400)">The Group TEXT Pro</groupui-headline><br>
<groupui-headline heading="h1">Headline H1</groupui-headline>
<groupui-headline heading="h2">Headline H2</groupui-headline>
<groupui-headline heading="h3">Headline H3</groupui-headline>
<groupui-headline heading="h4">Headline H4</groupui-headline>
<groupui-headline heading="h5">Headline H5</groupui-headline>
<groupui-headline heading="h6">Headline H6</groupui-headline>
</div>
</div>

```

---

### Font size
A detailed description of the use of font sizes for the different application types and screen resolutions can be found under the basic information under typography.
[Typography](https://digitaldesign.volkswagen-group.com/r/nSgNg-fFIn_JiYpKYNkr_oZ5lsZLtaMZi6wg32FiUUY)

---

### Line height
The line spacing ensures optimal readability. It should be between 120 % – 150 %. For optimal readability and the best possible accessibility of the typography, we recommend using 150 % line height. The line spacing is calculated based on the respective font size.

---

### Text highlighting
To highlight words or sections in headings, Electric Neon can be used. The use of the color Electric Neon in headlines can only be used on the Deep Space Blue theme or on dark images.

---

## Variant
Depending on the application, both fonts can be used as headings.

---

### The Group HEAD Pro
"The Group HEAD Pro" is the main font used for all headlines. It is mainly used in marketing applications. It should be noted that this heading is used in large font sizes and enough white space. Therefore, it should be used in a reduced way on pages or within sections to make the headline stand out from other content.
* ![](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2576 1086"%3E%3C/svg%3E)
* ![](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2576 1086"%3E%3C/svg%3E)

---

### The Group TEXT Pro
"The Group TEXT Pro" can be used for headings and is subordinate to the "The Group HEAD Pro". It will preferably be used in product applications where a lot of content is displayed. The bolder font makes it easy to highlight content without giving too much white space.
* ![](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2576 1086"%3E%3C/svg%3E)
* ![](data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2576 1086"%3E%3C/svg%3E)

---

## Do / Don't
* ![](./Headline - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvOEZOYm5mNjFMZ055VlNGODUxdm8ucG5nIn0_volkswagen_FQhqTI20B9R6TxjshgUnXs8r6EQANc4LCQH93LLgIcM)
  Do
  Do use the recommended color for headings.
* ![](./Headline - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvOHRRbUY4bVNqNkRkOFdtRkpwWXAucG5nIn0_volkswagen_Y8xuNYSzin4NxAKLA9w9mVA9_9AZ4-414c-T4Qn6ImY)
  Do
  Do use the same alignment for headlines and body text.
* ![](./Headline - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvYXZCREJxNkFaUE1qdEgyYWJiWEEucG5nIn0_volkswagen_3amY4rpG4q9ZviOL31NyQRZWcPe19mEK8_N9Xs6qFaw)
  Don't
  Do not use any other colors than the recommended color for emphasis.
* ![](./Headline - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvMkVLaHhyb0s4VWEyelBNMm95VGUucG5nIn0_volkswagen_PbRDql22zffgTloDQnluaqk46N5NNhksi_YPIf2WFNc)
  Don't
  Do not use center aligned headlines with left aligned body text.

---

### Headline - Showcase
Change color for headline:
```html
<groupui-headline heading="h5"style="color: var(--groupui-vwgroup-color-grey-600)">Headline </groupui-headline>
```
### Headline
Add the class .g-font to the body, to apply the fonts to <h1> - <h6>.
It is also possible to apply these styles by adding the class .g-font-h1 - .g-font-h6 to other tags.
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-headline-container" class="container-border flex-center">
<div class="g-font">
<h1 role="heading">Headline H1</h1>
<h2 role="heading">Headline H2</h2>
<h6 role="heading">Headline H6</h6>
<div role="heading" class="g-font-h4">div with h4 style</div>
</div>
</div>
```
### Headline variants
There are additional classes to apply:
﻿.g-font-light, .g-font-regular and .g-font-italic
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-headline-container" class="container-border flex-center">
<div class="g-font">
<h3 role="heading" class="g-font-light">Light H3</h3>
<h3 role="heading" class="g-font-regular">Regular H3</h3>
<h3 role="heading" class="g-font-italic">Italic H3</h3>
</div>
</div>
```
