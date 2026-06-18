---
title: Grid Template
source: GroupUI
category: template
type: documentation
topics:
  - web-component
last_modified: Thu, 25. Sep 2025 09:22
---

# Grid

---

### Grid Template - Static
```html
<div id="theme-switch-wrapper">
<div class="template-grid container-border light-grey-background">
<groupui-grid margin-type="static">
<groupui-grid-row>
<groupui-grid-col s="12"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="6"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="6"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="6" l="3"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="6" l="3"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="6" l="3"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="6" l="3"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4" l="2"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4" l="2"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4" l="2"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4" l="2"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4" l="2"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4" l="2"><groupui-card></groupui-card></groupui-grid-col>
</groupui-grid-row>
</groupui-grid>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Grid Template - Flexible
```html
<div id="theme-switch-wrapper">
<div class="template-grid container-border light-grey-background">
<groupui-grid margin-type="flexible">
<groupui-grid-row>
<groupui-grid-col s="12"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="6"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="6"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="6" l="3"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="6" l="3"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="6" l="3"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="6" l="3"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4" l="2"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4" l="2"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4" l="2"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4" l="2"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4" l="2"><groupui-card></groupui-card></groupui-grid-col>
<groupui-grid-col s="12" m="4" l="2"><groupui-card></groupui-card></groupui-grid-col>
</groupui-grid-row>
</groupui-grid>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Grid Template - Offset
```html
<div id="theme-switch-wrapper">
<div class="template-grid container-border light-grey-background">
<groupui-grid margin-type="flexible">
<groupui-grid-row>
<groupui-grid-col s="12" m="4">
<groupui-card></groupui-card>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row>
<groupui-grid-col s="12" m="4" offset-m="4">
<groupui-card></groupui-card>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row>
<groupui-grid-col s="12" m="4" offset-m="8">
<groupui-card></groupui-card>
</groupui-grid-col>
</groupui-grid-row>
</groupui-grid>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>
```
