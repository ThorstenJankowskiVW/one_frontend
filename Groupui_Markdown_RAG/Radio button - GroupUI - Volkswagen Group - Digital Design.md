---
title: Radio button
source: GroupUI
category: component
type: documentation
topics:
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Radio button

---

## Usage
Radio buttons are used for two or more related options that are mutually exclusive. The user must select exactly one choice. Because of the latter, have a default preselected. This should also be the first option. Exceptions can be safety or legal reasons: for example when users have to make an explicit choice or the UI has to correctly represent the current state which hasn't been set yet. If there might be a case where a user cannot make a selection, offer a neutral choice (e.g. "none" or "other").

---

### Radiobutton - Live Demo
```html
<div class="radiobutton-live-demo container-border flex-center">
<div>
<groupui-radio-group>
<groupui-radio-button checked="">Radiobutton</groupui-radio-button>
<groupui-radio-button>Radiobutton</groupui-radio-button>
<groupui-radio-button>Radiobutton</groupui-radio-button>
<groupui-radio-button>Radiobutton</groupui-radio-button>
</groupui-radio-group>
</div>
</div>

```

---

### Radiobutton - Sizes
```html
<div class="radiobutton-sizes container-border flex-center">
<div>
<groupui-radio-group>
<groupui-radio-button checked="" size="s">Small</groupui-radio-button>
<groupui-radio-button size="m">Medium</groupui-radio-button>
</groupui-radio-group>
</div>
</div>

```

---

## Do / Don't
* ![](./Radio button - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvQzFvVTdIa1l6UlNHTmFCb04xUDEucG5nIn0_volkswagen_iL8ZphSOxcynatAF3JR3pHjWQz6g8z6Tvg4am92kZ-Y)
  Do
  Do use radio buttons when users must select one option from a list.
* ![](./Radio button - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwveU43amQyRWJIQkRkWWRNS3ZSRjcucG5nIn0_volkswagen_qtanFWed6Gnew6xvi9H-AKYDep6p4nV80lQoujYvbsE)
  Do
  Do include at least two radio button choices.
* ![](./Radio button - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvU0ZWYjdkc1duSnBITUczYmdXVFgucG5nIn0_volkswagen_L_Fy9OKFoQqZwR9uGOtH6mkRHUYU70tkyxq9Y1GRUxg)
  Don't
  Do not use radio buttons when there are multiple selectable options – in this scenario, use [checkbox](https://digitaldesign.volkswagen-group.com/r/jZxDJz9redqjFtE6G8JH6T_ieCYpLd4MjyX-WbUHEaU).
* ![](./Radio button - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvOVg3cjNVUGdoeHhhRDZuVEdVRGUucG5nIn0_volkswagen_avrmFg_bPjPfpz1eA2gAkjaf9IsJWAl19Rr5kLMhacg)
  Don't
  Do not use only one radio button. Consider a [checkbox](https://digitaldesign.volkswagen-group.com/r/jZxDJz9redqjFtE6G8JH6T_ieCYpLd4MjyX-WbUHEaU) or possibly a [switch](https://digitaldesign.volkswagen-group.com/r/_t_C9XBnD6uBciPy9OW4q6OthIP2iJCqL86rDEMytc8) instead.

---

### Radio Group - Showcase
info
The radio group comes with a default validation, which works fine for simple cases. If you want to work with a more specialized validation or framework specific validation, it is recommended to deactivate the default validation with noValidation and set the severity yourself.

---

### Approach 1: input wrapped in label
Assign the g-radio-btn class only to the parent label
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
```html
<div role="group" style="display: flex; flex-direction: column; gap: 0.5em;">
<div>
<label class="g-radio-btn">
<input type="radio"
```
name="radiogroup"
checked
/>Option 1
```html
</label>
</div>
<div>
<label class="g-radio-btn">
<input type="radio"
```
name="radiogroup"
/>Option 2
```html
</label>
</div>
</div>
```
```
### Approach 2: input and label separated
Both the input and label elements need to be given the g-radio-btn class
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
```html
<div role="group" style="display: flex; flex-direction: column; gap: 0.5em;">
<div>
<input class="g-radio-btn"
```
type="radio"
id="radio1"
name="radiogroup"
checked
/><label class="g-radio-btn" for="radio1">Option 1</label>
```html
</div>
<div>
<input class="g-radio-btn"
```
type="radio"
id="radio2"
name="radiogroup"
/><label class="g-radio-btn" for="radio2">Option 2</label>
```html
</div>
</div>
```
```
### Severity g-radio-btn-danger
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
```html
<div role="group" style="display: flex; flex-direction: column; gap: 0.5em;">
<div>
<label class="g-radio-btn g-radio-btn-danger">
<input type="radio"
```
name="radiogroup"
checked
/>Option 1 (wrapped)
```html
</label>
</div>
<div>
<input class="g-radio-btn g-radio-btn-danger"
```
type="radio"
id="radio2"
name="radiogroup"
/><label class="g-radio-btn" for="radio2">Option 2 (separated)</label>
```html
</div>
</div>
```
```
### State disabled
Simply assign the disabled attribute to the input
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
```html
<div role="group" style="display: flex; flex-direction: column; gap: 0.5em;">
<div>
<label class="g-radio-btn">
<input type="radio"
```
name="radiogroup"
disabled
checked
/>Option 1 (wrapped)
```html
</label>
</div>
<div>
<input class="g-radio-btn"
```
type="radio"
id="radio2"
name="radiogroup"
disabled
/><label class="g-radio-btn" for="radio2">Option 2 (separated)</label>
```html
</div>
</div>
```
```
### Sizes
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/next/groupui.css" />
```html
<div role="group" class="checkbox-container">
<div>
<label class="g-radio-btn">
<input type="radio"
```
name="radiogroup"
checked
/>Size M (default)
```html
</label>
</div>
<div>
<label class="g-radio-btn g-radio-btn-small">
<input type="radio"
```
name="radiogroup"
checked
/>Size S
```html
</label>
</div>
</div>
```
```
