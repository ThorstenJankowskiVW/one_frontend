---
title: Badge
source: GroupUI
category: component
type: documentation
topics:
  - web-component
last_modified: Fri, 15. May 2026 07:37
---

# Badge

---

## Usage
The badge is mainly used for notification, to inform about a status. The status can be communicated via text or a number. It is often used in combination with the avatar component and also tables.

---

### Badge - Live demo
```html
<div class="badge-live-demo flex-center container-border">
<groupui-badge color="information" position="top-right">
<div slot="parent" class="parent"></div>
<span slot="content">2</span>
</groupui-badge>
<groupui-badge color="information" position="top-right">
<div slot="parent" class="parent"></div>
</groupui-badge>
</div>

```

---

### Badge - Colors
```html
<div class="container-border">
<div class="badge-colors flex-center">
<groupui-badge color="neutral">
<div slot="parent" class="parent"></div>
<span slot="content">neutral</span>
</groupui-badge>
<groupui-badge color="information">
<div slot="parent" class="parent"></div>
<span slot="content">information</span>
</groupui-badge>
<groupui-badge color="success">
<div slot="parent" class="parent"></div>
<span slot="content">success</span>
</groupui-badge>
<groupui-badge color="warning">
<div slot="parent" class="parent"></div>
<span slot="content">warning</span>
</groupui-badge>
<groupui-badge color="error">
<div slot="parent" class="parent"></div>
<span slot="content">error</span>
</groupui-badge>
<groupui-badge color="light">
<div slot="parent" class="parent"></div>
<span slot="content">light</span>
</groupui-badge>
</div>
</div>

```

---

### Badge - Positions
```html
<div class="badge-positions container-border flex-center">
<groupui-badge color="information" position="top-right">
<div slot="parent" class="parent"></div>
<span slot="content">1</span>
</groupui-badge>
<groupui-badge color="information" position="top-left">
<div slot="parent" class="parent"></div>
<span slot="content">2</span>
</groupui-badge>
<groupui-badge color="information" position="bottom-right">
<div slot="parent" class="parent"></div>
<span slot="content">3</span>
</groupui-badge>
<groupui-badge color="information" position="bottom-left">
<div slot="parent" class="parent"></div>
<span slot="content">4</span>
</groupui-badge>
</div>

```

---

### Badge - Offsets
```html
<div class="badge-offsets container-border flex-center">
<groupui-badge color="information" position="top-right" offset-x="12px">
<div slot="parent" class="parent"></div>
<span slot="content">1</span>
</groupui-badge>
<groupui-badge color="information" position="top-right" offset-x="-12px">
<div slot="parent" class="parent"></div>
<span slot="content">2</span>
</groupui-badge>
<groupui-badge color="information" position="top-right" offset-y="12px">
<div slot="parent" class="parent"></div>
<span slot="content">3</span>
</groupui-badge>
<groupui-badge color="information" position="top-right" offset-x="12px" offset-y="12px">
<div slot="parent" class="parent"></div>
<span slot="content">4</span>
</groupui-badge>
</div>

```

---

## Do / Don't
* ![](./Badge - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvNkVwTEdrMnB1UU5uMXh6b1ViMVUucG5nIn0_volkswagen_ydA2KDe94mm8WgZzxSzgfiSd1yL69hSmS8vxmaDXylk)
  Do
  Use excessive characters in badges and abbreviate large numbers.
* ![](./Badge - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvWGNaTFI4S0JkeDFUZjJHNG9vVFUucG5nIn0_volkswagen_Jzi4bGD9MnvpmixzwbuZrKlngrV4XloYQKizfXrPeO0)
  Do
  Use badges to provide dynamic / time sensitive information.
* ![](./Badge - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvWExKYkxmRHhkeWRNYmh0VzRlVEwucG5nIn0_volkswagen_ZPqfD0RstdMhrrksr50ZNIME2Uj6RK1meqGpU34Y4lo)
  Don't
  Do not use significantly long badges to avoid overlapping other elements.
* ![](./Badge - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvV1F5ZHBMM1ZYcGtEM045N1ozWVoucG5nIn0_volkswagen_L1V6QIEsiVrmNXJ0DhEt0sxnpfW70_d45sl1GGGCkaI)
  Don't
  Do not use badges as tooltips.

---
