---
title: Breadcrumb
source: GroupUI
category: component
type: documentation
topics:
  - web-component
last_modified: Mon, 30. Mar 2026 12:19
---

# Breadcrumb

---

## Usage
Breadcrumbs are used to navigate through a hierarchy of information. They provide the current location and allow navigation to any of its ancestors. We recommend keeping the navigation as simple as possible, using breadcrumbs as a supplement only without replacing global navigation.

---

### Breadcrumbs - Live demo
```html
<div class="breadcrumbs-live-demo container-border flex-center">
<groupui-breadcrumbs>
<groupui-breadcrumb>Level 1</groupui-breadcrumb>
<groupui-breadcrumb>Level 2</groupui-breadcrumb>
<groupui-breadcrumb>Level 3</groupui-breadcrumb>
<groupui-breadcrumb>Level 4</groupui-breadcrumb>
<groupui-breadcrumb>Current location</groupui-breadcrumb>
</groupui-breadcrumbs>
</div>

```

---

### Anatomy
The link navigates the user directly to the respective content of an application. Separators provide direction by visually separating the different breadcrumb elements. The last part of a breadcrumb navigation reflects the user’s current location and is not interactive.
Link
Separator
Current location

---

### Breadcrumbs - Truncated and responsive
```html
<div class="breadcrumbs-truncated container-border flex-center">
<groupui-breadcrumbs max-items="2">
<groupui-breadcrumb>Level 1</groupui-breadcrumb>
<groupui-breadcrumb>Level 2</groupui-breadcrumb>
<groupui-breadcrumb>Level 3</groupui-breadcrumb>
<groupui-breadcrumb>Level 4</groupui-breadcrumb>
<groupui-breadcrumb>Level 5</groupui-breadcrumb>
</groupui-breadcrumbs>
</div>
```
Long breadcrumb lists will automatically truncate. Only the first and last page links will be visible while the breadcrumbs in between will be merged into an overflow menu. This menu will expand on interaction or turn into a flyout menu on smaller breakpoints.

---

## Do / Don't
* ![](./Breadcrumb - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZnl2RUJuSm5NMmlSQ0dVZDl6SkYucG5nIn0_volkswagen_megAyACv4Yb5PcgNGN-2Erd308emFJmB_z1XD_1eRnE)
  Do
  Use breadcrumbs to visualize a multilevel hierarchy.
* ![](./Breadcrumb - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvR05kR3ZzTEZtY0dZTlZCdGo4cFMucG5nIn0_volkswagen_Ij05g1cGGOjNzAsW8O7Mu5dx0RIhGwf55l3TyPn4J8k)
  Do
  Use the overflow menu to collapse long lists.
* ![](./Breadcrumb - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvY3JiMWM2VnR5YXJtWWRSa1pFMm4ucG5nIn0_volkswagen_dNV0KGHVF8f4HPVOX-SBcF-O-hWz0qU9W8oZL9eBqQE)
  Do
  Use chevrons as separators to indicate direction.
* ![](./Breadcrumb - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvMzN1M1I4ek5BWnU0YlZDTjVEU2MucG5nIn0_volkswagen_JPrYEUzk9_Gtul6VsmV4x9F7-XG1_DxTAOlAE5bTGyg)
  Don’t
  Do not use breadcrumbs for less than three levels.
* ![](./Breadcrumb - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvTkZtQmR3c2d6UUNjcXRyVlUxVUwucG5nIn0_volkswagen_5DSHbqeNghYSJX_PehcL55ZfGUvM6aS9b8iDYcFhOqU)
  Don’t
  Do not wrap breadcrumbs into a second line.
* ![](./Breadcrumb - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvWEt5R3R5VFQ5NXlRWFlFZzVreXAucG5nIn0_volkswagen_K85rtd6BXtk7CLlfkPykgci96k7ZL_OeT-Zbd-d2UCc)
  Don’t
  Avoid slashes as they only used for separation.

---
