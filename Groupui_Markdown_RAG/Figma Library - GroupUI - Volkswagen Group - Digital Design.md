---
title: Figma Library
source: GroupUI
category: documentation
type: documentation
topics:
  - accessibility
  - tokens
  - web-component
last_modified: Wed, 11. Feb 2026 13:43
---

# Figma Library

---

Here you will find an overview of Figma library releases.
Previously the Figma library was released in sync with the web components.
All Figma library updates prior to web components release 10.1.0 are grouped as Version 1.0.0.

---

## Version 2.14.0
Released on February 11, 2026
### What's new
* Added Global side navigation (icon only) variant
* Added Local side navigation (icon only) variant
### What's changed
* The previous Button Group Figma component has been deprecated and replaced with a new version.
  The new Button Group is fully aligned with the implementation described in our documentation, ensuring consistent and predictable results across design and code.
* The previous Pagination Figma component has been deprecated and replaced with a new version.
  The updated Pagination component is now fully aligned with the code implementation, providing consistent behavior and a more predictable design-to-development workflow.
* Updated Global side  navigation:
  Added Focus rings
  Added item size variants (S/L)
  Fixed issue where utilities were not sticky to footer.
  Removed states on Slot subcomponent
* Updated Local side  navigation:
  Added Focus rings
  Added item size variants (S/L)
  Removed states on Slot subcomponent
* The previous Toast Figma component has been deprecated and replaced with a new version.
  Toast now supports headline, and multiple content lines.
  Toast now supports Links as main action.
  Toast component properties were simplified, now they always show status indicator and icon
### What's fixed
* ...

---

## Version 2.13.0
Released on November 26, 2025
### What's new
* None.
### What's changed
* Introduced a new Focus property across all components that support focus interactions.
* Search Field, Select and Multiselect variants have been adjusted to match our current code implementation. Previous Search field, Select and Multiselect are now Deprecated, please use the new ones.
### What's fixed
* None.
## Version 2.12.0
Released on October 30, 2025
### What's new
* No updates.
### What's changed
* Tooltip background colors updated. Tooltip has dark background when triggered on light background and vice versa.
### What's fixed
* No updates.
## Version 2.11.0
Released on September 29, 2025
### What's new
* Added new component Icon Button for lower priority interactions within components eg. modals, banners, inline notifications, table header cells.
* Added support for multi-level Menu. Added templates showing example of multi-level menu in context.
* Added Tree view and tree node components.
* Added Template for App Icon sizes (IOS, MacOS, Android, Windows).
* Added Uploader component and templates.
* Added new library 'VW Group UI - Illustrations' to design system library. Copied contributed illustrations into library. Organised sections.
### What's changed
* Interactive buttons within fields now support states and focus: multiselect, select, search, input field.
* Replaced chevron icon with Button in Datepicker. Replaced close icons with Icon buttons for: Modal, Toast, Inline notification, Banner. Replaced Filter and Options icons with Icon buttons for: Table cell header. These controls now support hover, pressed and disabled states.
* Footer template: replaced body text with secondary quiet links to match implementation updated brand logos. Removed mode setting from nested components so that Footer template switches to dark mode smoothly.
### What's fixed
* Fixed an issue where color of success icon on Toast in light mode failed contrast of 3:1. Default success color in Basics>Color was updated.
## Version 2.10.0
Released on June 25, 2025
### What's new
* Added new Global Top Navigation component incorporating Volkswagen Group branding. Use this instead of Header component.
* Added new Global Side Navigation component incorporating Volkswagen Group branding. Use this instead of Side Navigation component.
* Added new Local Side Navigation component. Use this instead of Side Navigation component.
* Added new Local Top Navigation component. Use this instead of Top Navigation component.
* Added templates with examples of Global Top Navigation, Global Side Navigation, Local Top Navigation and Local Side Navigation and combinations of these components.
### What's changed
* Changed Input Field icon color to disabled for Read Only variant.
* Added new Lamborghini and Seat Logo.
## Version 2.9.0
Released on May 28, 2025
### What's new
* Possibility to turn on icons in link component (VWGroup)
### What's changed
* VWGROUP UI Basics. Updated light mode palette with adjusted colors applying system tokens to main colors, accents and feedback colors. Extra color swatches added for new solid reference colors. Added dark mode color palettes for main colors, accents and feedback colors. Added some reference tokens
* GroupUI - Basics. Remapped color styles to tokens. Extra color swatches added for new solid reference colors. Deleted local color styles, please use tokens instead. Added some reference tokens
* VW Group UI - Design Tokens. Remapped some system tokens to other reference tokens for improved A11y color contrast.
* VW Group UI Components. Subtle color tweaks to various components to fix text and non-text color contrast A11y issues.
* Accordion VWGroup: simplified component by using boolean properties to show/hide divider lines and separator, switch to expand or collapse accordion.
* Logos: adjusted border-radius of the favicon.
* VW Group navigation logos: removed background color fill, adjusted spacing and line-height. Added logo variant for navigation rails.
### What's fixed
* Fixed spacing between label and container in text area to match input field in VWGroup.
* Fixed issue in table header cell, where font-size was resetting to default when changing alignment in VWGroup.
* Fixed grid on navigation examples in Library - VWGroup / Templates
* Switch changed text color of label to disabled color.
## Version 2.8.0
Released on April 29, 2025
### What's new
* Dark mode available for all components (see dark mode documentation on [how to enable in Figma and code](https://digitaldesign.volkswagen-group.com/r/N7DZR5BEMWnqRazghajy6jqfWT_WymirtnyiRfwPIkE))
* Design tokens file including all system tokens (as Figma variables) for light and dark mode, VW Group und VW AG including token descriptions
* Loading spinner component
* Progress circle component
### What's changed
* Swapped color, spacing, border radius tokens from VW Group UI Basics to 'Design tokens' in all components (no visual or functional changes)
* Swapped text and effect styles from VW GroupUI Basics to 'Design tokens' in all components (no visual or functional changes)
* Button: simplified variants using boolean properties to turn icons on/off and swapping icon instances, fixing the issue of an icon falling back to default whenever type, state, or size changes.

---

## Version 2.7.1
Released on 04 April, 2025
### What's fixed
* Fixed new table component: Selection of text item was not possible due to unassigned properties

---

## Version 2.7.0
Released on 06 March, 2025
### What's new
* Datepicker: Added events
* Input field: Added possibility to display tooltip with info icon next to label
* New icons: checklist, redo, snowflake, judge-hammer, elephant, pump-electric, petrol, archive, archive-filled
* Added new component 'VW Group Navigation Logos ' to Logos (VW Group only)
### What's changed
* Datepicker: Language selection via variable mode now, shape of dates subcomponent fully rounded (VW Group only)
* Thumbnails of design system libraries updated (VW Group only)
* Stepper component: Fixed text alignment on line break
* Tabs: Reassigned navigation tokens to tabs component and fixed spacing on 'no padding variant' from 48px to 32px to match implementation
### What's fixed
* Headline font updated for marketing typography to VW Antiqua in Basics file (VWAG only)
* Fixed elevation-8 in VWAG basics to match implementation

---

## Version 2.6.0
Released on 30 January, 2025
### What's new
* Introduced new components and templates for Table providing designers flexibility to build tables bottom up using modular components and slots. Templates provide an inspiration and starting point (VWGROUP, VWAG).
* Added small versions of form components: Input, Textarea, Switch, Checkbox, Radio Button.(VWGROUP, VWAG).
* Added Floating Action Button component (VWGROUP, VWAG).
* Added redesigned icons reflecting new CI for: copy, trash.
* Added prefix and suffix property to the Input component (VWGROUP, VWAG)
### What's changed
* Deprecated old Table components.
* Fixed resizing height on Toast

---

## Version 2.5.0
Released on November 22, 2024
### What's changed
* Tags: Introducing a tertiary variant of the tag, fixed color contrast issues (text on background color), added accent color tags for data visualisations (VW Group) and reworked tags for VW AG to fix incorrect implementation (tags are not interactive)
* Banner and inline notification: close icon can be hidden now
* Side navigation and Top Navigation components: Unselected default state color changed to help differentiate from selected state. (VWGROUP only)
### What's fixed
* Changed text style 'caption' for Product Large (1620 - ...) from font size 16px to 12px.
* Fixed an issue where Dividers did not fill container in Side Navigation component (VWAG only).
* Remapped some missing libraries (VWAG)
* Fixed an issue in Avatar where incorrect icon size used across sizes (VWAG only).
* Fixed an issue in Side Navigation where incorrect icon size used and icon color mapped to legacy library. Updated to map to correct color token (VWAG only).

---

## Version 2.4.0
Released on October 22, 2024
What’s changed
* Adjusted severity colors like `color.danger.basic.default` or `color.on-warning.basic.default` in order to improve accessibility and pass WCAG simple contrast check (VWAG light and dark mode and VW Group).
* Pagination component (VWAG) text changed to bold to match token.
* Bread crumb component (VWAG) text changed to bold to match token.
* Applied color.action.silent.default as avatar border color.
* Templates>Layout updated to include Side Navigation at correct width (VWGROUP).
* Changed line-height values for headlines in Typography to occupy less vertical space for some headline sizes. (VWAG + VWGROUP)
### What’s fixed
* Fixed Side Navigation width to match implementation (VWGROUP, VWAG). Previously incorrect in Figma.
* Added Text Styles to Basics (VWAG) for Button-label-S, Button-label-M, Button-label-L.
* Fixed VWAG: Basics: System Variable font-weight/action to 700 from 500.
* Added text styles to Button components (VWAG).
* Fixed an issue where Buttongroup sub-components pointed to external legacy library (VWAG>Components).
* Datepicker: fixed border radius of range mode start and end date to match implementation (VW AG)

---

## Version 2.3.0
Released on September 03, 2024
### What’s new
* Updated Lamborghini Logo (VW Group)
* Added Volkswagen Group Favicon
* Added new icons: share, chevron-double-left, chevron-double-right, rename, rename-letters
### What’s fixed
* Datepicker: fixed horizontal spacing to match implementation
* Datepicker: fixed border radius of range mode start and end date to match implementation (VW Group)

---

## Version 2.2.0
Released on August 06, 2024
### What’s new
* Datepicker component added for light and dark mode (VWAG)
### What’s fixed
* Text style Product Large H6 was corrected from 22 px to 20px (VWGROUP) in Basics Library

---

## Version 2.1.0
Released on July 02, 2024
### What’s new
* Added modal and backdrop components (VW Group)
* Converted templates to an additional component library (VW Group)
### What's changed
* Updated border token for banner and inline notification components (VW AG)
* Updated information color for notifications (inline notification, banner, toast) (VW Group and VWAG)
* Updated information color in Basics library (VW Group and VW AG)
### What’s fixed
* Updated vertical stepper with fixed spacing (VW Group)

---

## Version 2.0.0
Breaking changes:
* Variants on themes "deep-space-blue" and "vivid-green" have been removed for all components in order to simplify our component library. Some variants are replaced with an inverted variant in order to be used on background colors (avatar, button, button group, cards, divider, labels, link, logos, tooltip).
* groupui-input: differentiated placeholder and filled input text
* groupui-checkbox: removed color inconsistencies and added missing states of danger variants (VW AG)
Design tokens in Figma (Variables)
As we introduced our design tokens to our Figma library, you might face "missing variants" in your designs on the component settings in the right panel. This might happen whenever we had to add dark mode variants again (VW AG). Whenever this happens, restore to default and change the settings back to the variant you use in your design.
﻿
You might also notice some visual differences with this version, as with applying the tokens, we removed inconsistencies we had in our libraries.
Released on June 06, 2024
### What’s new
* design tokens: added design tokens as Figma variables to basics
* design tokens: applied system tokens as variables to components
* added new icons: search-plus-filled, search-minus-filled
* groupui-button: added missing severity variants (success, warning) for VW AG
* groupui-textarea: added missing variants (severities, read-only, filled, unfilled)
* groupui-input: added missing variants (severities, read-only, filled, unfilled) for VW AG
* groupui-input: differentiated placeholder and filled input text (BREAKING CHANGE)
### What's changed
* removed component variants on themes deep-space-blue and vivid-green to simplify the library and usage of components (VW Group) (BREAKING CHANGE)
* added inverted variants for some components than can be used on background colors (VW Group)
* groupui-input: assigned background colors to input to match implementation (VW AG)
* groupui-textarea: assigned background colors to input to match implementation (VW AG)
* groupui-switch: updated switch component with optional text label for VWGROUP
### What’s fixed
* groupui-input: fixed color inconsistencies on severity variants
* groupui-textarea: fixed colors on severity variants
* groupui-checkbox: removed color inconsistencies and added missing states of danger variants (VW AG) (BREAKING CHANGE)
* groupui-radio-button: removed color inconsistencies and added missing states of danger variants (VW AG)

---

## Version 1.0.0
Released on May 02, 2024
### What’s new
* Added reset icons
* Slider: Added different sizes for slider handles to Figma component to match implementation
* Accordion: Added missing variants to the Figma component (size, icon position, indentation)
* Header: Added missing items "active hover", "active pressed" to match implementation
### What’s fixed
* fixed incorrect label for Vivid Green 200 color variable (VWGROUP)
* fixed inconsistent border color for Deep Space Blue card variant. Was: Deep Space Blue 700, Now Deep Space Blue 600 (VWGROUP)
* Accordion: changed space between icon and headline to 12px to match implementation (VWGROUP)
* Accordion: changed padding left & right to 16px to match implementation (VWGROUP)
* Date picker: changed border radius to 4px, font size to 14px, and font weight from bold to medium for "today" and "select" to match implementation (VWGROUP)
* Header: changed text color on hover and pressed: electric-neon.100, and changed divider height to 48px to match implementation (VWGROUP)
* Link: remapped visited link colors to "violet", fixed secondary link on hover to grey.1000 80%, pressed to grey.1000 60% to match implementation and applied same behavior for white link color (VWGROUP)
* Tabs: fixed auto layout settings of full width tab items on hover and pressed (VWGROUP)
### What’s new
* Added search-input and search-menu as Figma component (VW Group)
* Added select-input and select-menu as Figma component (VW Group)
* Added multiselect-input and multiselect-menu as Figma component (VW Group)
* Added datepicker-input as Figma component
* Added Popover Menu as Figma component (VW Group)
* Added Chips as Figma component (VW Group)
* Added reset icon to icon library (VW AG)
* Added multiple new icons (drag, hide, sorting-left, sorting-right, grip, maximum, minimum, last, first, unlink, blocked, columns, none, file-excel, file-csv, pivot, chart, aggregation, pin, color-bucket, loading, list-group, paste)
### What’s improved
* Removed Input field variants on deep space blue background (**BREAKING**) (VW Group)
* Added pure-white background color to input field component to match implementation (**BREAKING**) (VW Group)
* Added status icon and clear icon property to Input field component (VW Group)
* Added filled and unfilled variants to Input field component (VW Group)
* Unified paddings on tags and chips (VW Group)
### What’s fixed
* fixed icon layer naming inconsistencies (VW AG and VW Group)
* fixed icons that have not been flattened before (VW AG and VW Group)
* fixed icon names (e.g. "component" to "sort-filter-up")
### What’s new
* Added brand logos as components to Figma library (Components > Logos) as simple logos and as logo grids to use on white and deep space blue backgrounds
### What’s fixed
* Fixed font-weight for product name in Header component. Changed from medium to bold.
* Fixed a font mapping issue in Datepicker where selected date characters do not display.
### What’s fixed
* Removed duplicate icon set 'settings' from VWGROUP & VWAG icon libraries
* VWAG Components library: corrected colours for Avatar-Dark Mode; corrected colour for Input Field- Disabled- Dark Mode.
### What’s improved
* Fixed secondary button background color of hover state on pure white for VWGroup
* Fixed nested button font bug on pagination for VWGroup
### What’s new
* Defined colors with shades for the new corporate design supporting 3 in-page themes in light mode
* Created a Figma library for the new corporate design
* Created date picker component in Figma
* Created toast component in Figma
* Created inline notification component in Figma
* Created banner component in Figma
* Created vertical stepper variant in Figma
* Created buttongroup component in Figma
* Added contributed icons to the icon library
* Introducing color and dimension variables in Figma
* Introducing component properties to some of our components
* Added semantic color states for buttons (danger, warning, success)
* Added semantic color states for checkbox (danger)
* Added semantic color states for radio button (danger)
* Added semantic color states for input fields (danger, warning, success)
* Added semantic color states for tags (danger, warning, success)
* Added semantic color states for text area (danger, warning, success)
* Added layout examples for pages using new corporate design in Templates
* Added new classification files for the new corporate design
### What’s improved
* Improved tag component in Figma
* removed primary, secondary and tertiary postfixes in colors for VWGroup
### What’s new
* added modal templates to the Figma library (templates)
* added link component to the Figma library (components)
### What’s fixed
* grey 200 color updated in Figma to match implementation color
### What’s new
* Templates>Forms - Fixed action color in darkmode to Aqua500
### What’s fixed
* Input field - Changed icon color within dark mode to aqua 500
* Stepper - Changed disabled label color to grey 400
### What’s improved
* Top navigation – changed properties and adjust colors for interaction to aqua-500
* Side navigation – Adjust colors for interaction to aqua-500
* Header – Adjust colors for interaction to aqua-500
### What's fixed
* Fixed Slider bug. Now should be visible as component
### What’s new
* Added `Pagination` as component
### What’s improved
* Change `Button` disabled color from grey-800 to grey-600 in dark theme
* Hide nested components inside `Table` component
### What’s new
**Design:**
* Added `Slider` as component
* Added `Badge` as component
* Added Icon for `email inbox`
* Added `Table` as component
* Added `Footer` Template
* Added `Form` Templates
* Added `Card` Templates
* Added `Navigation` Templates
### What’s improved
**Design:**
* Change name from Figma component `Textfield` to `Input field`
* Delete `Adjust filled` icon
* Improvement of icons `Arrow up` , `Arrow Down` , `Arrow Left` and `Arrow Right`
### What’s new
* Added Templates File
* Added Card Templates
### What’s improved
* Added own workspace for GroupUI
