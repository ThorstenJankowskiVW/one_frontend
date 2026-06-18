---
title: Text area
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Text area

---

## Usage
A text area allows users to enter and edit text that spans over multiple lines.

---

### Textarea - Live demo
```html
<div class="textarea-live-demo container-border flex-center">
<div class="slim-content">
<groupui-textarea placeholder="Placeholder text" rows="4">
<span slot="label">Label</span>
<span slot="description">Description</span>
</groupui-textarea>
</div>
</div>

```

---

### Textarea - Sizes
```html
<div class="textarea-sizes flex-center container-border">
<div class="slim-content side-by-side">
<groupui-textarea placeholder="Small" size="s">
<span slot="label">Your name</span>
<span slot="description">Please enter your name</span>
</groupui-textarea>
<groupui-textarea placeholder="Medium" size="m">
<span slot="label">Your name</span>
<span slot="description">Please enter your name</span>
</groupui-textarea>
</div>
</div>

```

---

## Do / Don't
* ![](./Text area - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvc3oxd2ZkNUpNN0RkNnZNVG4yOVYucG5nIn0_volkswagen_W03HZDhWNVJvdf5DES9wX6kUqCWWPbwzYvg7d6ZC4aE)
  Do
  Do use when the expected text input is long.
* ![](./Text area - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvdE53QzJYd2RVbVVGcmZ5VlVva3oucG5nIn0_volkswagen_oWa9CTqWg206KaxI8BLrjUwc4SMLPHc1Aml9t4mdtlU)
  Do
  Do provide clear, actionable, and consistent error messaging.
* ![](./Text area - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvcGdZdFFKNFVSbnBZb1BMVjZvemkucG5nIn0_volkswagen_ZPCSPpLdx3efj-nYLXIzq4D993Om0nD7rNGeQfIdDQI)
  Do
  Do use concrete text for label and description.
* ![](./Text area - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvUDQ0eWVjM0RSUzNnaHhqOFJSWjIucG5nIn0_volkswagen_Hvib5zzFRnm96znMrE3dIOCJ6UKtd7cjrfCP23Cr76I)
  Don't
  Do not use when the expected text input it short. Use [input field](https://digitaldesign.volkswagen-group.com/r/Y-qRTbneHC3FjzjZGPmurDrYGB6w_a1kXDoE6EVgPBY) instead.
* ![](./Text area - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvS1Y2dlBNWFJtM0h5WjREZVU0bzQucG5nIn0_volkswagen_ctSEcUALaEqUY0_RLyOHzr7IhToEU3N-6znNsRUfnnM)
  Don't
  Do not offer vague, inconsistent error messaging or rely solely on color.
* ![](./Text area - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvTHVQN2I3WEZiQkI0MnhzakZlQ0oucG5nIn0_volkswagen_wKlG0kl5noMd_LZ1NSy7FMR375jpiepHorIpvY6hdE8)
  Don't
  Do not restate the same information in labels, placeholders, or descriptions.

---

### Textarea - Showcase
info
The text area comes with a default validation, which works fine for simple cases. If you want to work with a more specialized validation or framework specific validation, it is recommended to deactivate the default validation with noValidation and set the severity yourself.

---

### g-textarea
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-textarea-primary-container" class="container-border">
<label id="label" class="g-label">Label</label>
<div class="g-textarea">
<textarea placeholder="Placeholder" rows="4" cols="50" aria-labelledby="label" aria-describedby="description"></textarea>
</div>
<span id="description" class="g-description">Description</span>
</div>
```
```
### Disabled
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-textarea-primary-container" class="container-border">
<label id="label" class="g-label">Label</label>
<div class="g-textarea g-textarea-disabled">
<textarea disabled placeholder="Disabled" rows="4" cols="50" aria-labelledby="label" aria-describedby="description"></textarea>
</div>
<span id="description" class="g-description">Description</span>
</div>
```
```
### Severities
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
<!-- Success -->
```html
<div id="css-textarea-primary-container" class="container-border">
<label id="label1" class="g-label">Label</label>
<div class="g-textarea g-textarea-success">
<textarea placeholder="Success" rows="4" cols="50" aria-labelledby="label1" aria-describedby="description1"></textarea>
</div>
<span id="description1" class="g-description">Description</span>
</div>
<!-- Warning -->
<div id="css-textarea-primary-container" class="container-border">
<label id="label2" class="g-label">Label</label>
<div class="g-textarea g-textarea-warning">
<textarea placeholder="Warning" rows="4" cols="50" aria-labelledby="label2" aria-describedby="description2"></textarea>
</div>
<span id="description2" class="g-description">Description</span>
</div>
<!-- Danger -->
<div id="css-textarea-primary-container" class="container-border">
<label id="label3" class="g-label">Label</label>
<div class="g-textarea g-textarea-danger">
<textarea placeholder="Danger" rows="4" cols="50" aria-labelledby="label3" aria-describedby="description3"></textarea>
</div>
<span id="description3" class="g-description">Description</span>
</div>
```
```
### Severities with Icons
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
<!-- Success -->
```html
<div id="css-textarea-primary-container" class="container-border">
<label id="label1" class="g-label">Label</label>
<div class="g-textarea g-textarea-success">
<textarea placeholder="Success" rows="4" cols="50" aria-labelledby="label1" aria-describedby="description1"></textarea>
<i class="g-icon g-textarea-icon g-icon-success-filled-24 g-textarea-status" aria-hidden="true"></i>
</div>
<span id="description1" class="g-description">Description</span>
</div>
<!-- Warning -->
<div id="css-textarea-primary-container" class="container-border">
<label id="label2" class="g-label">Label</label>
<div class="g-textarea g-textarea-warning">
<textarea placeholder="Warning" rows="4" cols="50" aria-labelledby="label2" aria-describedby="description2"></textarea>
<i class="g-icon g-textarea-icon g-icon-warning-filled-24 g-textarea-status" aria-hidden="true"></i>
</div>
<span id="description2" class="g-description">Description</span>
</div>
<!-- Danger -->
<div id="css-textarea-primary-container" class="container-border">
<label id="label3" class="g-label">Label</label>
<div class="g-textarea g-textarea-danger">
<textarea placeholder="Danger" rows="4" cols="50" aria-labelledby="label3" aria-describedby="description3"></textarea>
<i class="g-icon g-textarea-icon g-icon-danger-filled-24 g-textarea-status" aria-hidden="true"></i>
</div>
<span id="description3" class="g-description">Description</span>
</div>
```
```
### Sizes
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/next/groupui.css">
```html
<div id="css-textarea-primary-container" class="container-border">
<!-- default sized textarea -->
<div class="g-textarea g-textarea-success">
<textarea placeholder="Size M (default, use with 24px icons)" rows="4" cols="50"></textarea>
<i class="g-icon g-textarea-icon g-icon-success-filled-24 g-textarea-status" aria-hidden="true"></i>
</div>
<!-- small input -->
<div class="g-textarea g-textarea-small g-textarea-success">
<textarea placeholder="Size S (use with 16px icons)" rows="4" cols="50"></textarea>
<i class="g-icon g-textarea-icon g-icon-success-filled-16 g-textarea-status" aria-hidden="true"></i>
</div>
</div>
```
```
## Deprecation Info
| Property/Event | Deprecated since Version | Removed in Version | Substitute |
| --- | --- | --- | --- |
| immutable | 6.2.0 | 7.0.0 | use **disabled** instead |
