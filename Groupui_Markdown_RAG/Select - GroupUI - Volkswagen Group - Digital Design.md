---
title: Select
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Thu, 19. Mar 2026 09:43
---

# Select

---

## Usage
A Select is a control element that allows users to choose content from a predefined list. They are preferably used in navigation or forms.

---

### Select - Live demo
```html
<div class="select-life-demo container-border flex-justify-center">
<div class="slim-content">
<groupui-select label="Label">
<groupui-select-option>Option 1</groupui-select-option>
<groupui-select-option>Option 2</groupui-select-option>
<groupui-select-option>Option 3</groupui-select-option>
<span slot="label">Label</span>
<span slot="description">Description</span>
</groupui-select>
</div>

```

---

### Select - Option Groups
```html
<div class="select-life-demo container-border flex-justify-center">
<div class="slim-content">
<groupui-select label="Select options" description="Please choose smth.">
<span slot="label">Label</span>
<span slot="description">Description</span>
<groupui-select-option-group label="Group One">
<groupui-select-option>Option 1</groupui-select-option>
</groupui-select-option-group>
<groupui-select-option-group label="Group Two">
<groupui-select-option>Option 2</groupui-select-option>
</groupui-select-option-group>
</groupui-select>
</div>
</div>

```

---

---

## Do / Don't
* ![](./Select - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvanRLOEdzZmhHRVFWWlZCenoycGcucG5nIn0_volkswagen_kOJD8fQIXYoRy_hRRMklOQeSu5HesVaNTsIA1Ui3WeE)
  Do
  Do use concise labels and descriptions to ensure users can understand what needs to be selected.
* ![](./Select - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvc0RxR3Y0SzNNd0c3OHRIZE1XQXIucG5nIn0_volkswagen_hQBJqVdiyW-V6cR8QGUO5TG7vLYtpwNZlP1gf1q51Fk)
  Do
  Do keep enough space so selected option is readable.
* ![](./Select - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvUzZaeDlvQlBFMzhSMksyNDNHZE0ucG5nIn0_volkswagen_nem74NIJaFUM8Yxb-Vm_v3-cvh9YsVPURkxCF_tfHuk)
  Don't
  Do not leave select component without label or use inconcise labels or questions.
* ![](./Select - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvWmFVVzZSWHdMdnp5R1FrcVEzOVkucG5nIn0_volkswagen_EEOhoRAzoZcp6tDTDQFXvMIa3m-LSqK04wpPhMjFB2Q)
  Don't
  Avoid truncating content with a short width.

---

### Select - Showcase
info
The select comes with a default validation, which works fine for simple cases. If you want to work with a more specialized validation or framework specific validation, it is recommended to deactivate the default validation with noValidation and set the severity yourself.

---

### g-select (native)
Assign the g-select class to a div, which contains the select
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
<label for="select" class="g-label">Label</label>
```html
<div class="g-select">
<select id="select" aria-describedby="description">
<optgroup label="Group 1">
<option value="o1">Option 1</option>
<option value="o2">Option 2</option>
<option value="o3">Option 3</option>
</optgroup>
<optgroup label="Group 2">
<option value="a1">Alternative 1</option>
<option value="a2">Alternative 2</option>
</optgroup>
</select>
</div>
<span id="description" class="g-description">Description</span>
```
```
### State disabled
Simply assign the disabled attribute to the select
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
<label for="select" class="g-label">Label</label>
```html
<div class="g-select">
<select disabled id="select" aria-describedby="description">
<option value="o1">Disabled 1</option>
<option value="o2">Disabled 2</option>
<option value="o3">Disabled 3</option>
</select>
</div>
<span id="description" class="g-description">Description</span>
```
```
### Severities
Append the css class g-select-success, g-select-warning or g-select-danger to the wrapping div.
﻿Adding the corresponding icon indicates the severity even better.
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
<label for="success" class="g-label">Label</label>
```html
<div class="g-select g-select-success">
<select id="success" aria-describedby="success-description">
<option value="o1">Success 1</option>
<option value="o2">Success 2</option>
<option value="o3">Success 3</option>
</select>
<i class="g-icon g-select-icon g-icon-success-filled-24 g-select-status"></i>
</div>
<span id="success-description" class="g-description">Description</span>
<br/>
<label for="warning" class="g-label">Label</label>
<div class="g-select g-select-warning">
<select id="warning" aria-describedby="warning-description">
<option value="o1">Warning 1</option>
<option value="o2">Warning 2</option>
<option value="o3">Warning 3</option>
</select>
<i class="g-icon g-select-icon g-icon-warning-filled-24 g-select-status"></i>
</div>
<span id="warning-description" class="g-description">Description</span>
<br/>
<label for="danger" class="g-label">Label</label>
<div class="g-select g-select-danger">
<select id="danger" aria-describedby="danger-description">
<option value="o1">Danger 1</option>
<option value="o2">Danger 2</option>
<option value="o3">Danger 3</option>
</select>
<i class="g-icon g-select-icon g-icon-danger-filled-24 g-select-status"></i>
</div>
<span id="danger-description" class="g-description">Description</span>
```
```

---

### g-select (details)
Assign the g-select class to a details element, which contains a summary element and an input group that represents the select options. A small js snippet is needed to have the complete funcitonality
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/next/groupui.css" />
<label id="label" class="g-label">Label</label>
<details class="g-select" aria-labelledby="label" aria-describedby="description">
<summary class="g-select-input"><span class="g-select-selected-option">Option 1</span></summary>
<fieldset class="g-select-dropdown">
<label class="g-select-option">
Option 1
<input checked type="radio" name="select" id="option1" value="1" data-display-value="Option 1"/>
```html
</label>
<label class="g-select-option">
```
Option 2
<input checked type="radio" name="select" id="option2" value="2" data-display-value="Option 2"/>
```html
</label>
<label class="g-select-option">
```
Option 3
<input checked type="radio" name="select" id="option3" value="3" data-display-value="Option 3" />
```html
</label>
</fieldset>
</details>
<span id="description" class="g-description">Description</span>
```
```
### State disabled
Simply assign the g-select-disabled class to the details tag
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/next/groupui.css" />
<label id="label" class="g-label">Label</label>
<details class="g-select g-select-disabled" aria-labelledby="label" aria-describedby="description">
<summary class="g-select-input"><span class="g-select-selected-option">Option 1</span></summary>
<fieldset class="g-select-dropdown">
<label class="g-select-option">
Option 1
<input checked type="radio" name="select" id="option1" value="1" data-display-value="Option 1"/>
```html
</label>
<label class="g-select-option">
```
Option 2
<input checked type="radio" name="select" id="option2" value="2" data-display-value="Option 2"/>
```html
</label>
<label class="g-select-option">
```
Option 3
<input checked type="radio" name="select" id="option3" value="3" data-display-value="Option 3" />
```html
</label>
</fieldset>
</details>
<span id="description" class="g-description">Description</span>
```
```

---

## Deprecation Info
| Property/Event | Deprecated since Version | Removed in Version | Substitute |
| --- | --- | --- | --- |
| Dropdown: deprecated | 7.0.0 | 8.0.0 | use the new select component instead |
