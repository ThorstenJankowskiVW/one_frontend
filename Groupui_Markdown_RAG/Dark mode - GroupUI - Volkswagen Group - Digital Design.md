---
title: Dark mode
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - tokens
  - web-component
last_modified: Sun, 28. Sep 2025 17:17
---

# Dark mode

---

## Usage
Dark Mode is an alternate color theme designed with a darker background and lighter foreground content. It provides a comfortable visual experience in low-light environments and can enhance readability, accessibility, and energy efficiency on certain devices.
**Benefits of dark mode**
* Dark mode can reduce eye strain, especially in low-light conditions, by minimizing the amount of light emitted from the screen.
* It helps reduce screen glare in dimly lit environments, making it easier to read and interact with content.
* For users with visual impairments or light sensitivity, dark mode can provide a more comfortable viewing experience.
* On OLED and AMOLED screens, dark mode can save battery life by using less power to display darker pixels.
**When to use dark mode**
* Offer as an optional theme switch or automatic toggle based on system preferences.
* Prioritize dark mode for products used extensively in low-light or night-time scenarios (e.g., entertainment, reading, dashboards).
* Apply to user interfaces that require long reading or viewing sessions to reduce visual fatigue.
Dark mode is a global theme, applied to the whole application or website. Offering dark mode means all pages including components will switch to dark mode.

---

### Anatomy
Design tokens are applied to all GroupUI components. The same tokens apply to light and dark mode, allowing a component or color to translate to another mode effortlessly.

---

### User control
Dark mode can be enabled or disabled using a control that is displayed:
* prominently: with a switch or an icon toggle to turn dark mode on or off, or
* with reduced prominence: with an option to select, placed inside a menu or settings page.
Example of dark mode toggle options
*Some products might only be available in dark mode, if the product is extensively used in low-light or night-time scenarios for example.*
**Dark mode should never be a stylistic choice.** Offering or even prioritizing dark mode in an application should be based on criteria like reducing screen glare in dimly lit environments, or enhancing readability, accessibility, and energy efficiency.

---

### Enabling in Figma
Color tokens are assigned to all GroupUI components in Figma. A system token (eg. `color.action.basic.default`) is the same, no matter if light or dark mode. Reference tokens for light and dark mode are assigned to a system token, which makes the automatic switch to dark mode possible.
#### Switching a component to dark mode
Select the component. In the right hand panel, select ‘mode’ and ‘dark’. The component variant will automatically switch to dark mode.
[![Your browser doesn't support the `video` element.](https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvemhCQmg0V1M5dFN3c0ZMa01OWnkubW92In0:volkswagen:bakphmsODGeOvObpnLWiLAsSQtS2_QMKSiE7OCUbLWs?width=800)](https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvemhCQmg0V1M5dFN3c0ZMa01OWnkubW92In0:volkswagen:bakphmsODGeOvObpnLWiLAsSQtS2_QMKSiE7OCUbLWs?width={width}&format=mp4)
Switching a component to dark mode
#### Applying dark mode to frames
Select the frame or screen you want to switch to dark mode. As the fill color of the frame, assign a background color token, eg. `color.background.base`. In the right hand panel, select ‘mode’ and ‘dark’. The frame will automatically switch to dark mode. If you add a component to the frame, either change the mode of the component, or remove the mode setting. If you remove the setting, the component will automatically adapt to the parent frame.
[![Your browser doesn't support the `video` element.](https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvVTRpREVQeW1CYlg1Q2dIQUNrelMubW92In0:volkswagen:JF-WzzhAzqle6KMrvJmv4cB6S3OsPWfBUYvA1TpPNl0?width=800)](https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvVTRpREVQeW1CYlg1Q2dIQUNrelMubW92In0:volkswagen:JF-WzzhAzqle6KMrvJmv4cB6S3OsPWfBUYvA1TpPNl0?width={width}&format=mp4)
Switching frame and component to dark mode

---

### Enabling in Code
Like in Figma all Web Components as well as the CSS Components use the system tokens which allows for easy mode switching.
By default the light mode is active for all components. To apply the dark mode all that has to be done is adding the `data-gui-mode` attribute to the body tag of your application and set the value to `dark`.
If the colors/background-colors of the application are also set up to use system tokens, then it will also switch to dark mode.
The following code example demonstrates a way to switch between the modes with a simple javascript script.
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/staged/groupui.css">
```html
<div id="mode-switch-wrapper" class="flex-center">
<groupui-button>Web Component</groupui-button>
<button class="g-btn">CSS Component</button>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="mode-switch">
<groupui-text id="bold-switch-label" weight="bold">Darkmode</groupui-text>
<groupui-switch id="toggle" label-position="right" size="m"></groupui-switch>
</div>
```
```

---

### Do
Provide toggle option: allow users to easily switch between dark and light modes based on their preference.
### Don't
Don’t assume dark mode is universally preferred—offer a choice.
### Do
Use light or dark mode components only in designs for the related mode.
### Don't
Don't mix light and dark mode component variants.
### Do
Use saturated colors sparingly. Dark mode aims to reduce eye strain.
### Don't
Avoid saturated colors on dark backgrounds—they may vibrate visually. No hero color in dark mode.
To pick up a draggable item, press the space bar.
While dragging, use the arrow keys to move the item.
Press space again to drop the item in its new position, or press escape to cancel.
