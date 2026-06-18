---
title: Avatar
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Avatar

---

## Usage
The avatar is a visual representation of a person or entity used within the application. Content or status can be recognized and assigned via the avatar. The avatar can optionally be used with a profile picture. If this is not available, a placeholder icon or initials can be used as an alternative.

---

### Avatar - Live demo
```html
<div class="avatar-live-demo container-border flex-center">
<groupui-avatar size="m" image-source="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvYWNjb3VudHNcL2ZjXC80MDAwNTY5XC9wcm9qZWN0c1wvOTlcL2Fzc2V0c1wvMjlcLzUwMTE5XC8wNDY4OGIwYmIxZDI5YzgxMDBiNDFhYThmNzg1NTk0Ny0xNjQ4NjMwMDk4LnBuZyJ9:volkswagen:KUAfamPRsHucPTIOu3Y\_m3y5R5-CuExogToHGOU3CcU?width={width}"></groupui-avatar>
<groupui-avatar size="m"></groupui-avatar>
<groupui-avatar size="m" initials="AH"></groupui-avatar>
</div>

```

---

### Avatar - Sizing
```html
<div class="avatar-sizing container-border flex-center">
<groupui-avatar size="s"></groupui-avatar>
<groupui-avatar size="m"></groupui-avatar>
<groupui-avatar size="l"></groupui-avatar>
</div>

```

---

### Avatar - Initials
```html
<div class="avatar-initials container-border flex-center">
<groupui-avatar size="m" initials="AH"></groupui-avatar>
</div>

```

---

### Avatar - Image
```html
<div class="avatar-image container-border flex-center">
<groupui-avatar size="m" image-source="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvYWNjb3VudHNcL2ZjXC80MDAwNTY5XC9wcm9qZWN0c1wvOTlcL2Fzc2V0c1wvMjlcLzUwMTE5XC8wNDY4OGIwYmIxZDI5YzgxMDBiNDFhYThmNzg1NTk0Ny0xNjQ4NjMwMDk4LnBuZyJ9:volkswagen:KUAfamPRsHucPTIOu3Y\_m3y5R5-CuExogToHGOU3CcU?width={width}"></groupui-avatar>
</div>

```

---

### Avatar - Icon
```html
<div class="avatar-icon container-border flex-center">
<groupui-avatar size="m"></groupui-avatar>
</div>

```

---

## Do / Don't
* ![](./Avatar - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvWkp4Q050RmJDVmtNems2aFBKc1oucG5nIn0_volkswagen_W6TmmQFj1ur0eKysLjKSSYh4f7dW-cVvyESZiSvymAU)
  Do
  Use avatars in the appropriate size for your need.
* ![](./Avatar - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvaTlpTXY2aWVISmV0dGhTWkZwMWIucG5nIn0_volkswagen_jfuhx3AfP0POWVr-vzHHABkdYCFT1OO2RA-WX9rx6Tk)
  Do
  Use 1-2 initials of a provided name if no user image is available.
* ![](./Avatar - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvUGh5WlQySndQaGVvSDUyWDdhQVQucG5nIn0_volkswagen_13BP6hkpw6knFvO8ll9v46exPSlfP6TDB2vbwQOd8ag)
  Don't
  Do not scale or change the shape of the avatar.
* ![](./Avatar - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvNlViWHhZVksybXBlUWk5TmFhQ2MucG5nIn0_volkswagen_MBw7PsYfHb8s6f6zUPUC_09iYMUKAxG_SrcOeXicBI8)
  Don't
  Do not use any alternative graphics or icons except for the default user icon.

---

### Avatar
Add the class .g-avatar to a div to visualise an avatar.
You can add the initials of the user inside this component.

### Variants
There are two variants, if the initials do not meet your requirements.
﻿Either you add an avatar-icon to this component and add the class .g-avatar-icon to this icon,
﻿or an image with a custom src and the class .g-avatar-image.

### Sizes
There are 5 supported sizes: xs, s, m, l, xl. The default size is s.
﻿To apply these sizes, use one of the classes .g-avatar-xs, .g-avatar-s, .g-avatar-m, .g-avatar-l and .g-avatar-xl.
﻿These sizes can be applied to all variants (initials, icon, image).
