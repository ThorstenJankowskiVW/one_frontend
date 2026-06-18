---
title: Modals Template
source: GroupUI
category: template
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Thu, 23. Oct 2025 11:29
---

# Modals

---

## Information only
Body text contains information the user needs to be aware of concerning their current workflow. No actions for the user to take here.
### Modal Template - Information
```html
<div id="theme-switch-wrapper">
<div id="modal-1-template">
<groupui-modal displayed close-button padding="40px">
<groupui-headline heading="h2">Information headline</groupui-headline>
<groupui-text>Body text contains information the user needs to be aware of concerning their current workflow. No actions for the user to take here.
</groupui-text>
</groupui-modal>
<groupui-button onclick="document.querySelector('groupui-modal')['displayed'] = true">
```
Open Modal
```html
</groupui-button>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

## Acknowledgement
Acknowledgement from the user required. Contains a single button like okay.
### Modal Template - Single action
```html
<div id="theme-switch-wrapper">
<div id="modal-2-template">
<groupui-modal displayed close-button padding="40px">
<groupui-grid margin-type="custom" margin="0">
<groupui-grid-row>
<groupui-grid-col>
<groupui-headline heading="h2">Single action</groupui-headline>
<groupui-text>Acknowledgement from the user required. Contains a single button like <q>okay</q>.
</groupui-text>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row>
<groupui-grid-col offset-m="11" m="1" xs="12">
<groupui-button fullwidth onclick="document.querySelector('groupui-modal')['displayed'] = false">
```
Okay
```html
</groupui-button>
</groupui-grid-col>
</groupui-grid-row>
</groupui-grid>
</groupui-modal>
<groupui-button onclick="document.querySelector('groupui-modal')['displayed'] = true">
```
Open Modal
```html
</groupui-button>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>
```
### Modal Template - Textfield
```html
<div id="theme-switch-wrapper">
<div id="modal-6-template">
<groupui-modal displayed close-button padding="40px">
<groupui-grid margin-type="custom" margin="0">
<groupui-grid-row>
<groupui-grid-col>
<groupui-headline heading="h2">Enter your request</groupui-headline>
<groupui-text>Please add your message below. Our support team will get back to you within 24 hours.</groupui-text>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row>
<groupui-grid-col id="textarea-container"><groupui-textarea maxlength="999" rows="4" typing-info-template="{characters-used}/{characters-max}"></groupui-textarea></groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row id="button-container">
<groupui-grid-col offset-m="11" m="1" xs="12">
<groupui-button fullwidth onclick="document.querySelector('groupui-modal')['displayed'] = false">
```
Send
```html
</groupui-button>
</groupui-grid-col>
</groupui-grid-row>
</groupui-grid>
</groupui-modal>
<groupui-button onclick="document.querySelector('groupui-modal')['displayed'] = true">
```
Open Modal
```html
</groupui-button>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

## User action required
This modal requires user interaction in order to continue. Next to the primary button it contains a secondary cancel option.
### Modal Template - Action required
```html
<div id="theme-switch-wrapper">
<div id="modal-3-template">
<groupui-modal displayed close-button padding="40px">
<groupui-grid margin-type="custom" margin="0">
<groupui-grid-row>
<groupui-grid-col>
<groupui-headline heading="h2">Duplicate page</groupui-headline>
<groupui-text>This modal requires user interaction in order to continue. Next to the primary button it contains a secondary cancel option.
</groupui-text>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row id="button-container">
<groupui-grid-col offset-m="11" m="1" xs="12">
<groupui-button variant="secondary" fullwidth onclick="document.querySelector('groupui-modal')['displayed'] = false">
```
Cancel
```html
</groupui-button>
<groupui-button fullwidth onclick="document.querySelector('groupui-modal')['displayed'] = false">
```
Duplicate
```html
</groupui-button>
</groupui-grid-col>
</groupui-grid-row>
</groupui-grid>
</groupui-modal>
<groupui-button onclick="document.querySelector('groupui-modal')['displayed'] = true">
```
Open Modal
```html
</groupui-button>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>
```
### Modal Template - Textfield cancel
```html
<div id="theme-switch-wrapper">
<div id="modal-5-template">
<groupui-modal displayed close-button padding="40px">
<groupui-grid margin-type="custom" margin="0">
<groupui-grid-row>
<groupui-grid-col>
<groupui-headline heading="h2">Enter your request</groupui-headline>
<groupui-text>Please add your message below. Our support team will get back to you within 24 hours.</groupui-text>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row>
<groupui-grid-col id="textarea-container"><groupui-textarea maxlength="999" rows="4" typing-info-template="{characters-used}/{characters-max}"></groupui-textarea></groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row id="button-container">
<groupui-grid-col offset-m="11" m="1" xs="12">
<groupui-button variant="secondary" fullwidth onclick="document.querySelector('groupui-modal')['displayed'] = false">
```
Cancel
```html
</groupui-button>
<groupui-button fullwidth onclick="document.querySelector('groupui-modal')['displayed'] = false">
```
Send
```html
</groupui-button>
</groupui-grid-col>
</groupui-grid-row>
</groupui-grid>
</groupui-modal>
<groupui-button onclick="document.querySelector('groupui-modal')['displayed'] = true">
```
Open Modal
```html
</groupui-button>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

## Danger
This modal requires user interaction to continue. Next to a danger button to delete files for example, it contains a secondary cancel option.
### Modal Template - Delete
```html
<div id="theme-switch-wrapper">
<div id="modal-4-template">
<groupui-modal displayed close-button padding="40px">
<groupui-grid margin-type="custom" margin="0">
<groupui-grid-row>
<groupui-grid-col>
<groupui-headline heading="h2">Delete item</groupui-headline>
<groupui-text>When deleting this list, all added values will be removed. This can not be undone.</groupui-text>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row id="button-container">
<groupui-grid-col offset-m="11" m="1" xs="12">
<groupui-button variant="secondary" fullwidth onclick="document.querySelector('groupui-modal')['displayed'] = false">
```
Cancel
```html
</groupui-button>
<groupui-button fullwidth severity="danger" onclick="document.querySelector('groupui-modal')['displayed'] = false">
```
Delete
```html
</groupui-button>
</groupui-grid-col>
</groupui-grid-row>
</groupui-grid>
</groupui-modal>
<groupui-button onclick="document.querySelector('groupui-modal')['displayed'] = true">
```
Open Modal
```html
</groupui-button>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>
```
