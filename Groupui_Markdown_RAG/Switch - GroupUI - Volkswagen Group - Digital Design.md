---
title: Switch
source: GroupUI
category: component
type: documentation
topics:
  - web-component
last_modified: Thu, 19. Mar 2026 09:34
---

# Switch

---

## Usage
Toggle switches are digital on/off switches. They prompt users to choose between two mutually exclusive options and always have a default value. They should provide immediate results (e.g. setting applied, functionality hidden) without the user having to confirm the setting first.

---

### Switch - Live demo
```html
<div class="switch-live-demo container-border flex-center">
<groupui-switch>Label</groupui-switch>
</div>

```

---

### Switch - Sizes
```html
<div class="switch-sizes container-border flex-center">
<div>
<groupui-switch size="s">Small</groupui-switch>
<groupui-switch size="m">Medium</groupui-switch>
</div>
</div>

```

---

## Do / Don't
* ![](./Switch - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvU1FUdUdGVk1LRHdOS0dTVWNaUEEucG5nIn0_volkswagen_0Q_i2gbHq4t9M6kWgaJtuZD51Me3YQSne8y4Kp5jaVI)
  Do
  Do use short and concise labels which describe what the control will do.
* ![](./Switch - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZnNrMjR2Mkhjd3VxWjYxanY5akYucG5nIn0_volkswagen_vJNalOMw2XhCc_YmxNe1ojohkC42HB8zfUePP3t91Jk)
  Do
  Do use the default switch colors only defined by GroupUI guidelines.
* ![](./Switch - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvY0phRnBVaTFLdDI5b0FvdHJ1NnIucG5nIn0_volkswagen_EqW1ZFimDoVzZbPDYtBpLwlE0Fxi-nNspFm-Rnm4JOg)
  Do
  Do use switches as digital on/off switches with two mutual options and a default option.
* ![](./Switch - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvbTNMTkpIdFpmTXNpUEM0d0RScXUucG5nIn0_volkswagen_YCGrK3XNDM9zIRUwFlDe3JsIMvJNEZW9Cz85Oq7LPnY)
  Don't
  Do not use long or ambiguous labels.
* ![](./Switch - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvNEJ6UDFEVzVaWHk0dXdodGJSTHoucG5nIn0_volkswagen_gCBYrgzPuyQbwjzZ0d7u3QGX1AK499BKVk1uI8qBWE8)
  Don't
  Do not customize the switch color. Switches are interactive elements und should therefore use the interaction color.
* ![](./Switch - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvVEYyUU1aWUNFVUM0Z1F2SGtqSzEucG5nIn0_volkswagen_4VynTuWUDY5DLC2IfCNR12TYhLVGrSuaBZq-7cPFDzk)
  Don't
  Do not use switches to make the user decide between two different options. Use a [button group](https://digitaldesign.volkswagen-group.com/r/Ao_xRiwycHeb6alTB6g1KtWLTbnRaCGpjhkarIY_Wnk) or [radio buttons](https://digitaldesign.volkswagen-group.com/r/t2jBLKhlug3ZeP576RPsSki2grcCiJjeyitnP4tdKjI) instead.

---

### g-switch
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-switch-container" class="container-border">
<label class="g-switch">
<input type="checkbox"/>
```
Label
```html
</label>
</div>
```
```
### g-switch checked
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="css-switch-checked-container" class="container-border">
<label class="g-switch">
<input type="checkbox" checked/>
```
Label
```html
</label>
</div>
```
```
### g-switch disabled
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div role="group" id="css-switch-disabled-container" class="container-border">
<div>
<label class="g-switch">
<input type="checkbox" disabled/>
```
Label
```html
</label>
</div>
<div>
<label class="g-switch">
<input type="checkbox" checked disabled/>
```
Label
```html
</label>
</div>
</div>
```
### g-switch sizes
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/next/groupui.css">
```html
<div role="group" id="css-switch-disabled-container" class="container-border">
<div>
<label class="g-switch">
<input type="checkbox" checked/>
```
Size M (default)
```html
</label>
</div>
<div>
<label class="g-switch g-switch-small">
<input type="checkbox" checked/>
```
Size S
```html
</label>
</div>
</div>
```
