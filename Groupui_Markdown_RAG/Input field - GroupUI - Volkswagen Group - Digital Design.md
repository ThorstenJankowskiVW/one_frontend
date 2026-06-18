---
title: Input field
source: GroupUI
category: component
type: documentation
topics:
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Input field

---

## Usage
Input fields are the most frequent used form elements. They allow users to enter text and consist of a label, a text area with placeholder and an optional description. Input fields can be mandatory or optional.

---

### Input - Live demo
```html
<div class="input-live-demo flex-center container-border">
<div class="slim-content">
<groupui-input placeholder="Placeholder" maxlength="16" pattern="[A-Za-z]{3}">
<span slot="label">Label</span>
<span slot="description">Description</span>
</groupui-input>
</div>
</div>

```

---

### Input - Character Count
```html
<div class="input-character-count flex-center container-border">
<div class="slim-content">
<groupui-input placeholder="Julia Doe" maxlength="16" pattern="[A-Za-z]{3}" typing-info-template="{characters-used}/{characters-max}">
<span slot="label">Your name</span>
<span slot="description">Please enter your name</span>
</groupui-input>
</div>
</div>

```

---

Input - Password

---

Input - Prefix and Suffix
Input fields can contain prefix or suffix text such as a currency symbol, or measurements.

---

## Do / Don't
* ![](./Input field - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvQUZYeUdpS2JnRHNicjdnYno2R1MucG5nIn0_volkswagen_Kk3N1STGsfXTD7zi6rI55oySVwgWJqpn2vf_E5Vbo1w)
  Do
  Do provide clear, actionable, and consistent error messaging.
* ![](./Input field - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvSE5jSHVOQ3cxOWFVa3RLdG85YjEucG5nIn0_volkswagen_60Ub2w4w4MCxp9TPxVeTEnXILS3ZgDZFkiSNS__Lmf4)
  Do
  Do use short and concise labels.
* ![](./Input field - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvU3YyRThuVUxoUGdUTnQ0WnlzYTYucG5nIn0_volkswagen_5fJYqQuXYOTyT_Y59ZFxm1zfyhBecJElvCPeW0WXf0o)
  Do
  Do use a single input size per form.
* ![](./Input field - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvMmVpaXp5OUdmZnF0OTFncVVoQnoucG5nIn0_volkswagen_a6yQDU97AS10mk4mVIzouO1bgEavZvxuFny2SIBlpwU)
  Don't
  Do not offer vague, inconsistent error messaging or rely solely on color.
* ![](./Input field - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvanJRaEUyMVhBMUVFRnFyZTNjb2gucG5nIn0_volkswagen_RF2PQsqjNBpgl0tZ52AlSs6alDSKBDQSc1ALM9j9qHw)
  Don't
  Do not use long labels to describe what the user has to do, use description if you need to add additional information.
* ![](./Input field - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvOHJGeWZ3MlRhV0ZVdEprRHFkZzcucG5nIn0_volkswagen_ZPXZG0aKygzGD3IeWyGI7wCRkYFcrjIvqqIGQfTGdso)
  Don't
  Do not mix input field sizes in the same form.

---

### Input - Showcase
info
The input field comes with a default validation, which works fine for simple cases. If you want to work with a more specialized validation or framework specific validation, it is recommended to deactivate the default validation with noValidation and set the severity yourself.

---

## Deprecation Info
| Property/Event | Deprecated since Version | Removed in Version | Substitute |
| --- | --- | --- | --- |
| immutable | 6.2.0 | 7.0.0 | use disabled instead |
| suggestions | 6.2.0 | 7.0.0 | searchfield component should be used instead of the input component for this feature |
| suggestionsMaxHeight | 6.2.0 | 7.0.0 | searchfield component should be used instead of the input component for this feature |
| suggestionList | 6.2.0 | 7.0.0 | searchfield component should be used instead of the input component for this feature |
| groupuiSuggestionSelected | 6.2.0 | 7.0.0 | searchfield component should be used instead of the input component for this feature |
