---
title: Cards Template
source: GroupUI
category: template
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Thu, 25. Sep 2025 09:22
---

# Cards

---

### Card template - Image with tags
```html
<div id="theme-switch-wrapper">
<div class="template-card-image-tags container-border light-grey-background">
<groupui-card padding="0">
<img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvSDgzTmFjR2NkV2lQUkR3Vzl1cnoucG5nIn0:volkswagen:YOipnp4RBD6dqHMlg1bu\_jEqGDNK\_fCouM27gUFIcFM" alt="Futuristic Image"/>
<div class="content">
<groupui-text class="type">GroupUI</groupui-text>
<groupui-headline heading="h3">Card template</groupui-headline>
<groupui-text>This template should serve as inspiration and can be adapted and used as desired in design and code.</groupui-text>
<div class="tags">
<groupui-tag>Design</groupui-tag>
<groupui-tag>Card</groupui-tag>
<groupui-tag>Templates</groupui-tag>
</div>
</div>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Card template - Image with footer
```html
<div id="theme-switch-wrapper">
<div class="template-card-image-footer container-border light-grey-background">
<groupui-card padding="0">
<img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvSDgzTmFjR2NkV2lQUkR3Vzl1cnoucG5nIn0:volkswagen:YOipnp4RBD6dqHMlg1bu\_jEqGDNK\_fCouM27gUFIcFM" alt="Futuristic Image"/>
<div class="content">
<groupui-text class="type">GroupUI</groupui-text>
<groupui-headline heading="h3">Card template</groupui-headline>
<groupui-text>This template should serve as inspiration and can be adapted and used as desired in design and code.</groupui-text>
<groupui-divider></groupui-divider>
<div class="footer">
<groupui-text size="label" class="timestamp">2 days ago</groupui-text>
<div class="actions">
<groupui-icon id="icon-111" name="chat-32" alt="Contact us"></groupui-icon>
<groupui-icon id="icon-111" name="like-32" alt="Like this content"></groupui-icon>
</div>
</div>
</div>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Card template - Image with tags and footer
```html
<div id="theme-switch-wrapper">
<div class="template-card-image-tags-footer container-border light-grey-background">
<groupui-card padding="0">
<img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvSDgzTmFjR2NkV2lQUkR3Vzl1cnoucG5nIn0:volkswagen:YOipnp4RBD6dqHMlg1bu\_jEqGDNK\_fCouM27gUFIcFM" alt="Futuristic Image"/>
<div class="content">
<groupui-text></groupui-text>
<groupui-text class="type">GroupUI</groupui-text>
<groupui-headline heading="h3">Card template</groupui-headline>
<groupui-text>This template should serve as inspiration and can be adapted and used as desired in design and code.</groupui-text>
<div class="tags">
<groupui-tag>Design</groupui-tag>
<groupui-tag>Card</groupui-tag>
<groupui-tag>Templates</groupui-tag>
</div>
<groupui-divider></groupui-divider>
<div class="footer">
<groupui-text size="label" class="timestamp">Today</groupui-text>
<div class="actions">
<groupui-icon class="icon-112" name="chat-32" alt="Contact us"></groupui-icon>
<groupui-icon class="icon-112" name="like-32" alt="Like this content"></groupui-icon>
</div>
</div>
</div>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Card template - Categories
```html
<div id="theme-switch-wrapper">
<div class="template-card-categories container-border light-grey-background">
<groupui-card padding="24px">
<groupui-headline heading="h3">Get started</groupui-headline>
<groupui-text class="sub">Select your category</groupui-text>
<div class="categories">
<div class="category">
<div class="icon">
<groupui-icon class="icon-113" name="handbook-48" alt="Select books"></groupui-icon>
</div>
<groupui-text size="label">Books</groupui-text>
</div>
<div class="category">
<div class="icon">
<groupui-icon class="icon-113" name="car-48" alt="Select cars"></groupui-icon>
</div>
<groupui-text size="label">Cars</groupui-text>
</div>
<div class="category highlighted">
<div class="icon">
<groupui-icon class="icon-113" name="leaf-48" alt="Select environment"></groupui-icon>
</div>
<groupui-text size="label">Environment</groupui-text>
</div>
<div class="category">
<div class="icon">
<groupui-icon class="icon-113" name="music-48" alt="Select music"></groupui-icon>
</div>
<groupui-text size="label">Music</groupui-text>
</div>
<div class="category">
<div class="icon">
<groupui-icon class="icon-113" name="shield-safety-48" alt="Select security"></groupui-icon>
</div>
<groupui-text size="label">Security</groupui-text>
</div>
<div class="category">
<div class="icon">
<groupui-icon class="icon-113" name="video-on-48" alt="Select technology"></groupui-icon>
</div>
<groupui-text size="label">Technology</groupui-text>
</div>
</div>
<groupui-button fullwidth>Next</groupui-button>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Card template - Tasks
```html
<div id="theme-switch-wrapper">
<div class="template-card-tasks container-border light-grey-background">
<groupui-card padding="24px">
<div class="header">
<div>
<groupui-text class="timestamp">September 2, 2022</groupui-text>
<groupui-headline heading="h3" id="options-group-label">Tasks</groupui-headline>
</div>
</div>
<groupui-divider></groupui-divider>
<div class="options" role="group" aria-labelledby="options-group-label">
<groupui-checkbox checked>Make an obstacle course</groupui-checkbox>
<groupui-checkbox>Hide something and make a treasure hunt</groupui-checkbox>
<groupui-checkbox>Create my own comic strip</groupui-checkbox>
<groupui-checkbox checked>Have a picnic</groupui-checkbox>
<groupui-checkbox>Go to the park</groupui-checkbox>
</div>
<groupui-divider></groupui-divider>
<groupui-button fullwidth>Add new</groupui-button>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Card template - Avatar
```html
<div id="theme-switch-wrapper">
<div class="template-card-avatar container-border light-grey-background">
<groupui-card interactive="true" padding="24px">
<div class="header">
<groupui-avatar size="l"></groupui-avatar>
<div class="label">
<groupui-headline heading="h4">Arthur Dumas</groupui-headline>
<groupui-text weight="regular" size="body-1">Designer</groupui-text>
</div>
</div>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Card template - Avatar with Buttons
```html
<div id="theme-switch-wrapper">
<div class="template-card-avatar-button container-border light-grey-background" brand="vwgroup">
<groupui-card padding="24px">
<div class="header">
<groupui-avatar size="l"></groupui-avatar>
<div class="label">
<groupui-headline heading="h4">Arthur Dumas</groupui-headline>
<groupui-text weight="regular" size="body-1">Designer</groupui-text>
</div>
</div>
<div class="btn-row">
<groupui-button fullwidth="true" size="m" variant="secondary" >Message</groupui-button>
<groupui-button fullwidth size="m">Call</groupui-button>
</div>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Card template - Avatar with Input field and Buttons
```
```html
<div id="theme-switch-wrapper">
<div class="template-card-avatar-input-button container-border light-grey-background">
<groupui-card padding="24px">
<div class="header">
<groupui-avatar size="l"></groupui-avatar>
<div class="label">
<groupui-headline heading="h4">Arthur Dumas</groupui-headline>
<groupui-text weight="regular" size="body-1">Designer</groupui-text>
</div>
</div>
<groupui-textarea placeholder="Placeholder" rows="4" value="Hi Arthur, "> </groupui-textarea>
<div class="btn-row">
<groupui-button fullwidth="true" size="m" variant="secondary" >Message</groupui-button>
<groupui-button fullwidth="true" size="m">Call</groupui-button>
</div>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>
```
```

---
