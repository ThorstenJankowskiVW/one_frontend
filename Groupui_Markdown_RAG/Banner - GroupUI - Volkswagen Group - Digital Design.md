---
title: Banner
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Banner

---

## Usage
A banner is appearing on top of the page in full width. Use it to communicate important messages, the user needs to read, but does not necessarily need to act upon. A banner can be used to communicate information about important changes or issues needing minimal or no user interaction.
If you are not sure which notification component to use, you can read more about [notifications here](https://digitaldesign.volkswagen-group.com/r/kZPLcc8B8IQOV7niQWC3qDLUliN-uYull61YhYPSRkM).

---

### Banner - Severities
```html
<div id="banner-severities" class="container-border">
<groupui-banner visible="true" severity="information" hide-icon="false">
<div slot="headline">Severity</div>
<div slot="content">Default/Info</div>
</groupui-banner>
<groupui-banner visible="true" severity="success" hide-icon="false" class="padding-top">
<div slot="headline">Severity</div>
<div slot="content">Success</div>
</groupui-banner>
<groupui-banner visible="true" severity="warning" hide-icon="false" class="padding-top">
<div slot="headline">Severity</div>
<div slot="content">Warning</div>
</groupui-banner>
<groupui-banner visible="true" severity="danger" hide-icon="false" class="padding-top">
<div slot="headline">Severity</div>
<div slot="content">Danger</div>
</groupui-banner>
</div>

```

---

### g-banner
Assign the g-banner class to a div.
﻿
﻿There are three optional elements:
﻿ - a status icon, using the class g-banner-status. This icon is automatically colored.
﻿ - a headline, using the class g-banner-headline
﻿ - content, using the class g-banner-content
﻿In addition the class g-banner-close is made for the close icon. Please use a button with text for accessibility reasons.

### Variants
You can skip the status icon, the headline and/or the content.
﻿It is not recommended to skip the close icon.

### Severities
We also support the severities success, warning and danger.
﻿Just add the needed class to the banner: g-banner-success, g-banner-warning or g-banner-danger.
﻿
﻿Please be also aware, that the status icon differs.
