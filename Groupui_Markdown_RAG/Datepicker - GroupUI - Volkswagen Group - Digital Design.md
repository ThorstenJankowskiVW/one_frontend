---
title: Datepicker
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Fri, 06. Mar 2026 11:57
---

# Datepicker

---

Known issues:
* Using date-format Y.W.w (and similar) will always return 4 (Thursday) as day of week
* Entering a date manually without leading zeros having a date-format others than d.m.Y or Y-m-d will become invalid
* As the datepicker uses flatpickr, all issues of flatpickr may occur (see <https://github.com/flatpickr/flatpickr/issues>). This may also result in bugs that cannot be resolved (at all or with a reasonable amount of effort) in the GroupUI version of the datepicker.
## Usage
The date picker allows the user to easily enter a single date or a range of dates into a text field.

---

### Datepicker - Live demo
```html
<div class="datepicker-life-demo flex-justify-center container-border">
<div class="slim-content">
<groupui-date-picker>
<span slot="label">Label</span>
<span slot="description">Description</span>
</groupui-date-picker>
</div>
</div>

```

---

### Datepicker - Range Mode
```html
<div class="datepicker-range-mode flex-justify-center container-border">
<div class="slim-content">
<groupui-date-picker mode="range">
<span slot="label">Label</span>
<span slot="description">Description</span>
</groupui-date-picker>
</div>
</div>
```
## Do / Don't
* ![](./Datepicker - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvNHZ5a2VwWndmRVBCZTEyc3RQQloucG5nIn0_volkswagen_SvhBdI3XPUVOAFToI8wvFLvoeHQ41wFeiIXpBotkOgI)
  Do
  Use date picker with the correct sizing and spacing according to GroupUI guidelines.
* ![](./Datepicker - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvMkNEeUpMRFdYYlNhbk5YY1pwZW4ucG5nIn0_volkswagen_cbyPo9ql-v9wOUJy5efnJwRM3RsVHAKj_BwzAxMGTHk)
  Do
  Use the date picker in the default layout.
* ![](./Datepicker - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvenhtc1NCcmZLeVU0VkY2ZHZDNFUucG5nIn0_volkswagen_i7bXWJleVn0r7Mv97JGhe75EvYOoGggM2U2pSfVr8CM)
  Don't
  Do not make stylistic changes to the date picker.
* ![](./Datepicker - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvQU1zNTdOcWpDeWMxdW52RnlWOGcucG5nIn0_volkswagen_52L2vb19rcxcOVMP6n4mboZyN_4xbYk8OPMfKnzMiHE)
  Don't
  Do not scale or resize the date picker.

---

### Datepicker - Showcase
info
The date picker comes with a default validation, which works fine for simple cases. If you want to work with a more specialized validation or framework specific validation, it is recommended to deactivate the default validation with noValidation and set the severity yourself.

---

## Accessibility Info
The GroupUI date picker is built with the help of the [flatpickr](https://flatpickr.js.org/) dependency.
Unfortunately this means the influence of the GroupUI Team on accessibility is very limited. In this component
Especially keyboard navigation in the calendar is not working properly.
Nevertheless the GroupUI team is trying to ensure the best possible experience.
Please let us know if you have any issues in that regard via the [GroupUI Service Desk](https://devstack.vwgroup.com/jira/servicedesk/customer/portal/199).

---

## Deprecation Info
| Property/Event/ Component | Deprecated since Version | Removed in Version | Substitute |
| --- | --- | --- | --- |
| old groupui-date-picker | 6.9.0 | 7.0.0 | use the new date picker instead |
| old groupui-date-range-picker | 6.9.0 | 7.0.0 | use the new date picker in range mode instead |
| groupui-date-picker-new | - | 7.0.0 | renamed to groupui-date-picker |
