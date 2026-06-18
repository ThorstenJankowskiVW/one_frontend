---
title: Inline notification
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Inline notification
## Usage
Inline notifications are informational messages that alert the user of general occurrences within a system. They appear at the top of the content area or next to the item needing the users' attention.

---

### Notification - Variants
```html
<div class="notification-error container-border">
<div class="box white">
<groupui-inline-notification visible>
<span slot="content">Default/Info</span>
</groupui-inline-notification>
</div>
<div class="box">
<groupui-inline-notification visible severity="success">
<span slot="content">Success</span>
</groupui-inline-notification>
</div>
<div class="box">
<groupui-inline-notification visible severity="warning">
<span slot="content">Warning</span>
</groupui-inline-notification>
</div>
<div class="box">
<groupui-inline-notification visible severity="danger">
<span slot="content">Danger</span>
</groupui-inline-notification>
</div>
</div>

```

---

### g-inline-notification
Assign the g-inline-notification class to a div.
﻿
﻿There are three optional elements:
﻿ - a status icon, using the class g-inline-notification-status. This icon is automatically colored.
﻿ - a headline, using the class g-inline-notification-headline
﻿ - content, using the class g-inline-notification-content
﻿In addition the class g-inline-notification-close is made for the close icon. Please use a button with text for accessibility reasons.

### Variants
You can skip the status icon, the headline and/or the content.
﻿It is not recommended to skip the close icon.

### Severities
We also support the severities success, warning and danger.
﻿Just add the needed class to the inline-notification: g-inline-notification-success, g-inline-notification-warning or g-inline-notification-danger.
﻿
﻿Please be also aware, that the status icon differs.
