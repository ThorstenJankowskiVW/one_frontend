---
title: Search field
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Mon, 26. Jan 2026 08:42
---

# Search field

---

## Usage
Search fields enable users to explore an application and find relevant content without the use of navigation. They can be used to search for specific information or as a filter to find content to engage with.

---

### Searchfield - Live demo
```html
<div class="searchfield-live-demo flex-center container-border">
<div class="slim-content">
<groupui-search-field placeholder="Placeholder">
<span slot="label">Label</span>
<span slot="description">Description</span>
<groupui-search-suggestion>Suggestion 1</groupui-search-suggestion>
<groupui-search-suggestion>Suggestion 2</groupui-search-suggestion>
</groupui-search-field>
</div>
</div>

```

---

### Searchfield - Icon left
```html
<div class="searchfield-icon-left container-border flex-center">
<div class="slim-content">
<groupui-search-field placeholder="Placeholder">
<span slot="label">Label</span>
<span slot="description">Description</span>
<groupui-search-suggestion>Suggestion 1</groupui-search-suggestion>
<groupui-search-suggestion>Suggestion 2</groupui-search-suggestion>
</groupui-search-field>
</div>
</div>

```

---

### Searchfield - Icon right
```html
<div class="searchfield-icon-right container-border flex-center">
<div class="slim-content">
<groupui-search-field placeholder="Placeholder" search-icon-position="right">
<span slot="label">Label</span>
<span slot="description">Description</span>
<groupui-search-suggestion>Suggestion 1</groupui-search-suggestion>
<groupui-search-suggestion>Suggestion 2</groupui-search-suggestion>
</groupui-search-field>
</div>
</div>

```

---

## Do / Don't
* ![](./Search field - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvbUJCaVdDSlR3ZEp2UWF3OU5BRlAucG5nIn0_volkswagen_TBTZOb-zYwpopK58iu-rJytGMra-PPfQOIirt1sBR7o)
  Do
  Do make the placeholder specific. Give the user a hint about the content they're searching and/or what parameters they can use to search.
* ![](./Search field - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvcXlDN241WFFHb1BjNFVCV3FtQ0MucG5nIn0_volkswagen_7zvPKf4faz5_fdZUfipnL7-E_PXB2C4ttpKBRNYjuUo)
  Do
  Do place the search field above the content the user will be searching.
* ![](./Search field - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvUG80ZTVGUm1haGU2ZmZBbXY0SkwucG5nIn0_volkswagen_oMQgD-6HLhOQ85pMTJDuACGYgmPn4O65EWcYnf22qx0)
  Don't
  Do not add critical information to the placeholder. The placeholder text disappears once the user begins entering data and will therefore be unavailable.
* ![](./Search field - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvcmpvZG51WVhSWnZSQnFmZlE2U1gucG5nIn0_volkswagen_3wfEzFjpuvloZGrCQdAErFVwDXBE93NmoxhO2MjK044)
  Don't
  Do not hide the search field behind an icon button if there is enough space for the full component.

---

### Searchfield - Showcase
info
The search field comes with a default validation, which works fine for simple cases. If you want to work with a more specialized validation or framework specific validation, it is recommended to deactivate the default validation with noValidation and set the severity yourself.

---

### Search field
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
<label for="default" class="g-label">Label</label>
```html
<div class="g-search">
<i class="g-icon g-icon-search-24 g-search-icon"></i>
<input type="search" list="native-html" id="default" placeholder="Placeholder" />
<datalist id="native-html">
<option value="Only"></option>
<option value="Needs"></option>
<option value="Html"></option>
<option value="To"></option>
<option value="Work"></option>
</datalist>
</div>
<span class="g-description">Description</span>
```
```
### Disabled
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
<label for="disabled" class="g-label">Label</label>
```html
<div class="g-search g-search-disabled">
<i class="g-icon g-icon-search-24 g-search-icon"></i>
<input disabled type="search" list="untouchable" id="disabled" placeholder="Placeholder" />
<datalist id="untouchable">
<option value="Disabled"></option>
<option value="Options"></option>
<option value="Won't"></option>
<option value="Open"></option>
</datalist>
</div>
<span class="g-description">Description</span>
```
```
### Severities
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css" />
<label for="success" class="g-label">Label</label>
```html
<div class="g-search g-search-success">
<i class="g-icon g-icon-search-24 g-search-icon"></i>
<input type="search" list="options" id="success" placeholder="Success" aria-describedby="success-description" aria-invalid="false" />
<i class="g-icon g-icon-success-filled-24 g-search-icon g-search-status" aria-hidden="true"></i>
</div>
<span id="success-description" class="g-description">Description</span>
<label for="warning" class="g-label">Label</label>
<div class="g-search g-search-warning">
<i class="g-icon g-icon-search-24 g-search-icon"></i>
<input type="search" list="options" id="warning" placeholder="Warning" aria-describedby="warning-description" aria-invalid="false"
```
/>
<i class="g-icon g-icon-warning-filled-24 g-search-icon g-search-status" aria-hidden="true"></i>
```html
</div>
<span id="warning-description" class="g-description">Description</span>
<label for="danger" class="g-label">Label</label>
<div class="g-search g-search-field-danger">
<i class="g-icon g-icon-search-24 g-search-icon"></i>
<input type="search" list="options" id="danger" placeholder="Danger" aria-describedby="danger-description" aria-invalid="true" />
<i class="g-icon g-icon-danger-filled-24 g-search-icon g-search-status" aria-hidden="true"></i>
</div>
<span id="danger-description" class="g-description">Description</span>
<datalist id="options">
<option value="Used"></option>
<option value="In"></option>
<option value="Multiple"></option>
<option value="Searchfields"></option>
</datalist>
```
```
