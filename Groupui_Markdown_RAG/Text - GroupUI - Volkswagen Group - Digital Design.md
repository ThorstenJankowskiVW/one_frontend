---
title: Text
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Text

---

## Usage
The text component is used to provide paragraph text for body text and excessive content. For this purpose, "The Group TEXT Pro" is used to ensure optimal legibility even on smaller screen sizes.
We recommend to use Regular as the default font weight and Bold or Italic to emphasize content.

---

### Text - Live demo
```html
<div class="text-live-demo container-border">
<groupui-text weight="bold" class="text-margin">Bold ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam.</groupui-text>
</div>

```

---

### Font size
A detailed description of font sizes, usage, and the different contexts can be found in:
[Typography](https://digitaldesign.volkswagen-group.com/r/nSgNg-fFIn_JiYpKYNkr_oZ5lsZLtaMZi6wg32FiUUY)

---

### Line height
The line height ensures optimal readability. It should be between 120–150%. The line spacing is calculated based on the respective font size.
We recommend to use 150% line height for optimal readability and the best possible accessibility of texts.

---

### Line length
Use the right line length to make content more accessible and easy to read. The ideal line length depends on the font size and should be between 45 and 75 characters per line for the desktop view. For mobile devices or limited content areas such as cards should be between 30-40 characters.

---

### Margins
Margins in the beginning and end of each paragraph help to create a visual hierarchy and make content more accessible. These margins can be used flexible based on individual needs. Please use the recommendations in: [Spacing](https://digitaldesign.volkswagen-group.com/r/8_jJQhOZFC80S1STRU2Zmw14z19myy65ChReWhsjL3A)

---

### Text - Paragraphs
```html
<div class="container-border">
<div class="text-paragraph-box">
<groupui-text size="body-1" weight="bold">Body 1</groupui-text>
</div>
<groupui-divider></groupui-divider>
<div class="text-paragraph-box">
<groupui-text size="body-2" weight="bold">Body 2</groupui-text>
</div>
<groupui-divider></groupui-divider>
<div class="text-paragraph-box">
<groupui-text size="caption" weight="bold">Caption</groupui-text>
</div>
</div>

```

---

### Text - Bold Highlight
```html
<div class="container-border">
<div class="text-bold-highlight-box">
<groupui-text size="body-1"><b>Bold highlight</b> ipsum dolor sit amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </groupui-text>
<groupui-text size="body-1"><i>Italic highlight</i> ipsum dolor sit amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </groupui-text>
</div>
</div>

```

---

## Dos and Don’ts
* ![](./Text - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvSktTNzM0QWJkYmt3aDY4aVpWdFEucG5nIn0_volkswagen_jMPeKDQ5eBB14OhyWZ19WzatedMcO7wn4Iq1tNkqaiM)
  Do
  Use text with a ragged margin.
* ![](./Text - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvdUtjbVpMclVIdGZuVHF6TlRjdnIucG5nIn0_volkswagen_C5U0hT39OkvG388RRwIgByp3B7-D78MCK0Yfmccj_eo)
  Do
  Use The Group TEXT Pro for body text or captions.
* ![](./Text - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvWHYzUlUyekNhZVVFZlBMbVBkQzcucG5nIn0_volkswagen_PJ6EoOI6b-ecZ4jnO3arY3iXgsDOoTZsDOPC60rMeec)
  Don’t
  Don’t use fully justified text.
* ![](./Text - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvclMxOVhpcEtTaDR2dWdKdmZiNHcucG5nIn0_volkswagen_OQKgId9bZbyr6FMkxWivvPDbuTuM-VF51xotMkbs67s)
  Don’t
  Don’t use The Group HEAD Pro for body text.

---

### Text - Showcase
Change color for text:
### Text
Add the class .g-font to the body, to apply the fonts to every tag.
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-text-container" class="container-border flex-center">
<div class="g-font">
<div>Default div</div>
<p>Default p</p>
</div>
</div>
```
### Sizes
To adjust the font sizes, use the classes .g-font-body2, .g-font-caption or .g-font-label.
Keep in mind: Adding the class .g-font to a parent element (like <body>) is necessary for these styles.
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-text-container" class="container-border flex-center">
<div class="g-font">
<div>default size</div>
<div class="g-font-body2">Smaller text</div>
<div class="g-font-caption">Caption text</div>
<div class="g-font-label">Label text</div>
</div>
</div>
```
### Variants
The tags <i>, <b> and <strong> will be styled automatically.
﻿In addition, there are classes to apply the style: .g-font-light, g-font-regular, .g-font-bold and .g-font-italic.
Keep in mind: Adding the class .g-font to a parent element (like <body>) is necessary for these styles.
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-text-container" class="container-border flex-center">
<div class="g-font">
<div>Default div</div>
<div class="g-font-light">Light div</div>
<div class="g-font-regular">Regular div</div>
<div class="g-font-bold">Bold div</div>
<div class="g-font-italic">Italic div</div>
<div class="g-font-bold-italic">Bold italic div</div>
<div><b>b tag</b></div>
<div><strong>strong tag</strong></div>
<div><i>i tag</i></div>
<div><b><i>Combination of b and i tag (works also with strong and other order)</i></b></div>
</div>
</div>
```
