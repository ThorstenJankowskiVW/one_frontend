---
title: Pagination
source: GroupUI
category: component
type: documentation
topics:
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Pagination

---

## Usage
Pagination allows you to divide large amounts of content into several smaller pages and to navigate between these pages.

---

### Pagination - Live demo
```html
<div class="pagination-live-demo container-border flex-center">
<groupui-pagination total-elements="400" page-size-options="[5, 10, 25]"></groupui-pagination>
</div>

```

---

### Simple pagination - Live demo
```html
<div class="simple-pagination-live-demo container-border flex-center">
<groupui-simple-pagination page-count="7" displayed-page-count="5" selected-page="1"></groupui-simple-pagination>
</div>

```

---

## Do / Don't
* ![](./Pagination - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvc29uZUFVMXo5RjNxMWM2cnJSejQucG5nIn0_volkswagen_PqTxCIs_ulrBjKIHIqtAkEFS2xatswsrP1PGlcNnLyo)
  Do
  Do use single line for pagination and navigation labels.
* ![](./Pagination - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvYnBTZHhNd2NHRUppM3hGcUZMc20ucG5nIn0_volkswagen_j_iJlFGtH0QD3PT21iS93qP_VdY4i0tmTWsluTnzgdQ)
  Do
  Do place pagination at the bottom of a page that displays rows of content.
* ![](./Pagination - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvckhyaVJ6OEpQcjE0cjJmVjlqMVkucG5nIn0_volkswagen_SToAzQjAQ5HNlUQPyP4h0PlqLCXONfcPAq_ioqojCnU)
  Don't
  Do not use more than two lines for pagination and navigation labels.
* ![](./Pagination - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZkNlUXBDZ0VxcjlQNmU3S1N6aVUucG5nIn0_volkswagen_13E6551eUM5KR8Ydufnuj3tf9CLdDhKG43i4bL9WRw4)
  Don't
  Do not place pagination above search results.

---

## Web Component

---

Deprecation Information: Since Version 8.0.0 the known pagination is deprecated and replaced by a new component. The old pagination component will still be available with the tag "groupui-pagination-old" and the code documentation is still available below the documentation of the new component.
## Deprecation Info
| Property/Event | Deprecated since Version | Removed in Version | Substitute |
| --- | --- | --- | --- |
| pageChange | 6.11.0 | 7.0.0 | use groupuiPageChange instead |
| groupui-pagination-old | 8.0.0 | - | use the new pagination instead |
