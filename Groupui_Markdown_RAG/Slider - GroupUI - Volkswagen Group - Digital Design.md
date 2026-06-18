---
title: Slider
source: GroupUI
category: component
type: documentation
topics:
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Slider

---

## Usage
The slider allows the user to select a value of choice. It should only be used when the possible minimum and maximum value are given. With the slider the user can then choose an individual value in the range of min and max.

---

### Slider - Live demo
```html
<div class="slider-live-demo container-border flex-center">
<div class="slim-content">
<groupui-slider>
<span slot="label">Label</span>
<span slot="description">Description</span>
</groupui-slider>
</div>
</div>

```

---

### Slider - Tick marks
```html
<div class="slider-thick-marks flex-center container-border">
<div class="slim-content">
<groupui-slider show-tick-marks="true" max="99" step="10">
<span slot="label">Label</span>
<span slot="description">Description</span>
</groupui-slider>
</div>
</div>

```

---

### Range Slider - Live demo
```html
<div class="rangeslider-live-demo flex-center container-border">
<div class="slim-content">
<groupui-range-slider min="0" max="10" from-value="0" to-value="5" step="0">
<span slot="label">Label</span>
<span slot="description">Description</span>
</groupui-range-slider>
</div>
</div>

```

---

## Do / Don't
* ![](./Slider - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvQ3d5eGE0cUJuMlZ1cFoxYXpvemcucG5nIn0_volkswagen_sDJo4rLxi9PocI8QRMsNJld3tdQp0zmOoEn3yt6x4AA)
  Do
  Do use when the accuracy of the numeric value entered isn’t important.
* ![](./Slider - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvVkVqVHVudFIxZjdmbXNhZkhORUUucG5nIn0_volkswagen_ey0zKZ41avkQaCQlTWDru_t-m_xbuDzIfvhKTX-Zq0k)
  Do
  Do show value units to provide context where it helps, like "%," "px," etc.
* ![](./Slider - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvWkxoSHB4dUY0SmJybzNRaHdaOWIucG5nIn0_volkswagen_Q6pUnWBRzJ9lpSdRoJFJZ4eLmIVLF2Lksqx5VHFgGjc)
  Don't
  Do not use when the accuracy of the numeric value entered is important.
* ![](./Slider - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvUmY2Vm9QVjlMeW5WTUZWYkMycG4ucG5nIn0_volkswagen_SnIWSnTeWDUaAXS_YswluIa06qwHuDl0alx3nyIU5vI)
  Don't
  Do not show a slider without the value.

---
