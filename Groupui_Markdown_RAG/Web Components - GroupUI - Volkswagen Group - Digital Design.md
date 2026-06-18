---
title: Web Components
source: GroupUI
category: guideline
type: documentation
topics:
  - accessibility
  - angular
  - react
  - tokens
  - web-component
last_modified: Mon, 11. May 2026 09:46
---

# Web Components

---

Here you will find an overview of our releases with all the updates about our web components.

---

## Version 14.0.0
Released on April 29, 2026
### What's new:
* groupui-anchor-item: Added property tag to display a descriptive text
* groupui-classification-label: Added new component
* groupui-date-picker: Added method setDisabledDates to disable dates in default mode
* groupui-date-picker: Added small variant
* groupui-menu: Added `maxHeight` property.
* groupui-multiselect: Added small variant (when no chips were used)
* groupui-multiselect: Added property maxInputHeight to limit the height of the input field
* groupui-search-field: Added small variant
* groupui-select: Added small variant
* groupui-switch: Added property indicator which displayed an icon inside the switch toggle to improve visibility for color blind users
* groupui-upload-dropzone: Added component
### What's changed:
* groupui-checkbox: Adjusted size of the small variant
* groupui-menu: `minWidth` property now requires a unit
* groupui-radio-button: Adjusted size of the small variant
* groupui-select: Adjusted text color of the unselected option
* groupui-upload-button: Adjusted groupuiSelectedFiles event details
### What's fixed:
* groupui-breadcrumbs: Fixed resize behaviour
* groupui-burger-menu: Fixed scrolling behaviour
* groupui-input: Fixed icon color for disabled time input
* groupui-tree-view: Fixed groupuiSelectionChanged event on the second root node
Breaking changes:
* groupui-menu: minWidth property now requires a unit
* groupui-upload-button: The structure of the groupuiSelectedFiles events details changed slightly
* Due to a major update of the Angular and React output target dependencies, minor issues may occur in certain testing frameworks and could require workarounds. The API and general usage of the components were not affected by this change.

---

## Version 13.2.0
Released on April 01, 2026
### What's new:
* groupui-anchor, groupui-anchor-item: Added new components
### What's changed:
* groupui-upload-button: Improved a11y
* groupui-upload-status: Improved a11y and added the property a11y-label-close-button
### What's fixed:
* groupui-tooltip: Fixed console error on conditional render with @if
* groupui-tooltip: Fixed tooltip when the anchor was text only
Known Issues:
﻿
* The following fix had to be rolled back because with this fix in place, the static .js files would not be created and uploaded to the CDN on a release. This is a breaking change for the users of those files. It will stay like that until a sustainable solution is found:
  ﻿Fixed dynamic import warnings in applications which are using vite bundler (e.g. Angular v21) by dropping support for es5

---

## Version 13.1.0
Released on March 12, 2026
### What's new
* groupui-global-top-nav, groupui-local-top-nav: Added chevron, when item is wrapped in menu
* groupui-slider: Added custom range property
* groupui-slider: Added labeled marks underneath slider bar and optional suffix for these labels
* groupui-upload-button: Added new component
* groupui-upload-status: Added new component
### What's changed
* groupui-burger-menu: Improved keyboard handling
* groupui-menu: Improved keyboard handling
* groupui-tabs: Changed internal styling to allow full-height content of tab by using flexbox on tabs component
### What's fixed
* groupui-date-picker: Fixed some design related issues
* groupui-flyout: Fixed flyout close when clicking on scrollbar
* groupui-global-top-navigation, groupui-local-top-navigation, groupui-global-side-navigation, groupui-local-side-navigation: Fixed flaky behavior where a nested groupui-menu does not respect its own visible property on initial load
* groupui-multiselect: Hides placeholder on focus if searchable
* groupui-multiselect: Expands option group if search term matches option in group
* groupui-select: Changed behavior of internal search input, now the input is cleared after selection of an option
* groupui-select: Fixed options, which were disabled, when select was created
* groupui-select: Focus out closes popover
* groupui-select: Show disabled option, when it is preselected
* groupui-select-option-group: Improved a11y by removing unexpandable option groups from keyboard navigation
* Re-enable source maps
* Fixed dynamic import warnings in applications which are using vite bundler (e.g. Angular v21) by dropping support for es5

---

## Version 13.0.0
Released on February 11, 2026
### What's new
* groupui-button: Added new property `loading-indicator-left` and `loading-indicator-right`
* groupui-global-side-navigation, groupui-local-side-navigation: Added `icon-only` variant to support rail-navigation
* groupui-global-top-navigation, groupui-global-side-navigation, groupui-brand-logo: Added custom-breakpoint property to allow more control over layout switch
* groupui-local-side-navigation: Added `groupui-local-side-navigation-drilldown-item`
* groupui-pagination: Added `{total-items}` as a template variable for the visible items label
* groupui-select: Added `groupuiInput` and `groupuiInputFocused` events for searchable select
* groupui-toast: Added lines property (single | multiple)
* groupui-tree-group: Added component
* groupui-tree-view: Added ellipsis behavior for text
### What's changed
* groupui-action-area, groupui-action-area-item, groupui-action-area-popover-item, groupui-header, groupui-side-navigation, groupui-side-navigation-item, groupui-side-navigation-group, groupui-top-navigation, groupui-top-navigation-item: Removed deprecated components
* groupui-burger-menu, groupui-menu: Improved keyboard navigation
* groupui-button: Removed deprecated properties `icon`, `icon-position` and `show-loading-indicator`.
* groupui-global-top-navigation, groupui-local-top-navigation, groupui-global-side-navigation, groupui-local-side-navigation: Excluded navigation- and utility-items inside a menu or popover from the active state management
* groupui-icon-button: Removed deprecated variant `inverse`. Added `inverted` instead
* groupui-icon-static: Removed component
* groupui-icon: No longer uses `latest` version of assets to avoid breaking applications with newer asset releases
* groupui-icon: Removed deprecated property `a11y-label` Use the native `aria-label` instead
* groupui-modal: Removed deprecated property `aria-label-close-button` Use `a11y-label-close-button` instead
* groupui-page: Components adjusts layout according to the breakpoint defined in either global-top-navigation or global-side-navigation
* groupui-page: remove padding of content and add base-background property
* groupui-range-slider: Removed deprecated properties `aria-label-from` and `aria-label-to` Use `a11y-label-from` and `a11y-label-to` instead
* groupui-search-field: Removed deprecated properties `aria-clear-button-label`,`aria-label-clear-button`, `aria-search-button-label` and `aria-label-search-button` Use the `a11y-label-clear-button` and `a11y-label-search-button` instead
* groupui-select: Removed deprecated properties `aria-clear-button-label` and `aria-label-clear-button` Use the `a11y-label-clear-button` instead
* groupui-toast: Changed default position to bottom center (can be changed)
* groupui-toast: Removed `show-icon` property. The icon is now only visible, when a severity is set
* groupui-tooltip: Removed deprecated property `variant` Use inverted instead
* Accessibility improvement: Adjusted focus rings for several components to be more accessible
### What's fixed
* groupui-breadbrumbs: Fixed error thrown in React apps
* groupui-breadcrumbs: Changing `maxItems` now adjusts the visible breadcrumbs
* groupui-button: Component can now be focused via `focus()` call
* groupui-button: Fixed `hero` design when `inverted`
* groupui-button: Loading is spinner now visible in `inverted` mode
* groupui-checkbox: Removed `title` from icon in checkbox
* groupui-flyout: Prevent error thrown in test cases
* groupui-input, groupui-select, groupui-multiselect: Placeholder are now truncated if necessary
* groupui-select: Fixed warning thrown on component load
* Added `esnext` support for Angular wrapper
* Added unit tests support for Angular v21 in combination with Vitest for Angular wrapper
Breaking changes:
* groupui-action-area, groupui-action-area-item, groupui-action-area-popover-item, groupui-header, groupui-top-navigation, groupui-top-navigation-item: Removed deprecated components > Use global-top-navigation instead. See migration guide below
* groupui-side-navigation, groupui-side-navigation-item, groupui-side-navigation-group: Removed deprecated components > Use groupui-global-side-navigation or groupui-local-side-navigation instead. See migration guide below
* groupui-button: Removed deprecated properties icon, icon-position Use the properties icon-left and icon-right instead
* groupui-button: Removed deprecated property show-loading-indicator. Use the newly added properties loading-indicator-left and loading-indicator-right instead
* groupui-icon-button: Removed deprecated variant inverse. Use inverted instead
* groupui-icon-static: Removed component (mostly internally used)
* groupui-icon: No longer uses latest version of assets
* groupui-icon: Removed deprecated property a11y-label Use the native aria-label instead
* groupui-modal: Removed deprecated property aria-label-close-button Use a11y-label-close-button instead
* groupui-page: remove default content padding
* groupui-range-slider: Removed deprecated properties aria-label-from and aria-label-to Use a11y-label-from and a11y-label-to instead
* groupui-search-field: Removed deprecated properties aria-clear-button-label,aria-label-clear-button, aria-search-button-label and aria-label-search-button Use the a11y-label-clear-button and a11y-label-search-button instead
* groupui-select: Removed deprecated properties aria-clear-button-label and aria-label-clear-button Use the a11y-label-clear-button instead
* groupui-toast: Changed default position to bottom center (can be changed)
* groupui-toast: Removed show-icon property. The icon is now only visible, when a severity is set
* groupui-tooltip: Removed deprecated property variant Use inverted instead
Migration Guide:
﻿
groupui-header → groupui-global-top-navigation:
﻿The groupui-global-top-navigation replaces the old groupui-header. Following are some key rules and a component mapping.
Key Rules
* All utility actions now live in groupui-global-top-navigation-utility-items
* There is only one utility item component in the global top navigation now: groupui-global-top-navigation-utility-item
* Popover behavior is achieved by wrapping utility items in groupui-menu
* Branding is now always done with groupui-brand-logo
Component Mapping
* groupui-header → groupui-global-top-navigation
* groupui-headline (for Brand name) → groupui-brand-logo
* groupui-top-navigation → groupui-global-top-navigation-items
* groupui-action-area → groupui-global-top-navigation-utility-items
* groupui-action-area-item → groupui-global-top-navigation-utility-item
* groupui-action-area-popover-item → groupui-top-navigation-utility-item wrapped in groupui-menu
﻿[See also Navigation Templates](https://digitaldesign.volkswagen-group.com/r/0DTKwsuODkh1OW7KdS-v7PFRwVFWRgsAqiG_KifhRnA)﻿
﻿
groupui-side-navigation → groupui-global-side-navigation/groupui-local-side-navigation:
The groupui-side-navigation is replaced by groupui-global-side-navigation and groupui-local-side-navigation. Following are some key rules and a component mapping.
Key Rules
* The primary and secondary variants of the groupui-side-navigation are now covered by the groupui-global-side-navigation and the groupui-local-side-navigation
* groupui-side-navigation-group is no longer needed because grouping behavior automatically happens based on the nesting of items
* "Normal" navigation items have to be wrapped in groupui-global-side-navigation-items/groupui-local-side-navigation-items to be differentiated from the utility items which came as an additional feature to the side navigations
Component Mapping
* groupui-side-navigation variant primary → groupui-global-side-navigation
* groupui-side-navigation-item variant primary → groupui-global-side-navigation-item
* groupui-side-navigation variant secondary → groupui-local-side-navigation
* groupui-side-navigation-item variant primary → groupui-local-side-navigation-item
﻿[See also Navigation Templates](https://digitaldesign.volkswagen-group.com/r/0DTKwsuODkh1OW7KdS-v7PFRwVFWRgsAqiG_KifhRnA)﻿
﻿
groupui-button icons and loading:
The icon and loading indicator API underwent some inconsistency fixing. Following are some key rules and a property mapping.
Key Rules
* Icons must now be explicitly placed using icon-left or icon-right
* Loading indicators must now be explicitly placed using
  ﻿loading-indicator-left or loading-indicator-right
* icon-position is fully removed — the new API eliminates automatic placement
* show-loading-indicator no longer exists — placement is always intentional
Property Mapping
* icon → icon-left or icon-right
* icon-position → (no direct replacement) → choose icon-left or icon-right explicitly
* show-loading-indicator → loading-indicator-left or loading-indicator-right
﻿
Token import
If there are errors regarding the import of tokens.css, please change the import to
﻿../node\_modules/@group-ui/group-ui-angular/node\_modules/@group-ui/group-ui/dist/group-ui/assets/themes/tokens.css in your angular app (when style.css is at the first level of src).
Please check our example repositories for more guidance.

---

## Version 12.11.0
Released on November 26, 2025
### What's new
* groupui-burger-menu-drill-down-item: Added component
* groupui-global-side-navigation: Added possibility to use groupui-burger-menu for responsive layout
* groupui-link: Added `download` property
* groupui-menu: Added `display` property to treat the outmost trigger element as a block box
* groupui-menu: Added keyboard navigation
* groupui-menu: Added submenus
* groupui-multiselect: Add property `case-insensitive-search` to enable case-insensitive search
* groupui-select: Add in-built search functionality
* groupui-tree-view: Added component
### What's changed
* groupui-icon-button: Deprecated variant inverse and added inverted to replace it for more consistent naming
### What's fixed
* groupui-breadbrumbs: Fixed `console.error` thrown when no breadcrumbs exists
* Improved behavior when `testing` with `cypress`

---

## Version 12.10.0
Released on October 30, 2025
### What's new
* groupui-banner, groupui-inline-notification, groupui-toast: Make aria-label of severity icon changeable
* groupui-link: Added property `truncated` to truncate links
* groupui-pagination: Added property to adjust aria-label of previous button, next button and select
* groupui-select-option, groupui-select-option-group: Added `description` property to provide additional information
* groupui-select-option-group: Added `expandable` property to allow groups to have accordion behavior
* groupui-simple-pagination: Add property to adjust aria-label of previous button and next button
* groupui-tooltip: Added `inverted` property for deprecated `variant`
* navigation components: add `a11yLabelIcon` to all items to set a custom accessible text for the icon
### What's changed
* groupui-multiselect: Removed search icon
### What's fixed
* groupui-breadcrumbs: Set aria-hidden to chevron icons
* groupui-datepicker: Keep input value on outside click in range mode
* groupui-datepicker: Added leading zeros to day and month if custom format is `d.m.Y` or `Y-m-d`
* groupui-global-side-navigation, groupui-local-side-navigation: Fix initial active state when child element is active
* groupui-local-side-navigation: Fixed height, when local top nav is wrapped
* groupui-textarea: Hide scrollbar when not needed
* groupui-tooltip: Update tooltip position after parent has moved

---

## Version 12.9.0
Released on October 21, 2025
### What's new
* groupui-brand-logo: Added `href` property
* groupui-date-picker: Added events on month and year change
* groupui-global-top-navigation: Added property `manual-mode` to deactivate active state management
* groupui-global-side-navigation: Add property `manual-mode` to deactivate active state management
* groupui-local-top-navigation: Add property `manual-mode` to deactivate active state management
* groupui-local-side-navigation: Add property `manual-mode` to deactivate active state management
* groupui-burger-menu: Add property `manual-mode` to deactivate active state management (will be overwritten by global-top-navigation)
* groupui-global-side-navigation-utility-item: Added a `slot` for an avatar
* groupui-menu-item: New component
* groupui-multiselect: Added in-built search functionality
* groupui-toast: Improved layout and added possibility to hide the close button with `hideCloseButton`
### What's fixed
* groupui-button: Pass `disabled` down to internal button element
* groupui-date-picker: No longer emits change event on start date selection in range mode
* groupui-global-top-navigation-mobile-item, groupui-global-top-navigation-mobile-items, groupui-global-top-navigation-mobile-utility-item, groupui-global-top-navigation-mobile-utility-items: Added components to angular modules to ensure availability in angular
* groupui-input: Prevent infinite loop in cypress test
* groupui-local-side-navigation: Now checks globally for a `global-top-navigation` to adjust it's height
* groupui-multiselect: Clearing the input now resets the search term
* groupui-multiselect: Keep showing search text on clear/search button keyboard focus
* groupui-multiselect: No longer shows option popover when no options available
* groupui-multiselect: Removed margin under input if an option with description exists
* groupui-radio-group: Allow `severity` on single radio buttons inside of a group
* groupui-search-field: Added property `keepOpen` to keep the search suggestions open after suggestion selected

---

## Version 12.8.0
Released on September 29, 2025
### What's new
* groupui-burger-menu: Added component
* groupui-global-side-navigation-drilldown-item: Implemented item for the `groupui-global-side-navigation`
* groupui-global-top-navigation: Added responsive behavior by offering `global-top-navigation-mobile-items` and `global-top-navigation-utility-mobile-items` and a `breakpoint` property
* groupui-multiselect-option-group: Added `description` slot for expandable group
* groupui-multiselect-option: Added `description` slot
* groupui-multiselect: Added search `value` to `search` and `change` event
* groupui-multiselect: Added the option to make option groups `expandable` and `selectable`
* groupui-multiselect: Adjusted interaction design for options and option groups
* groupui-page: Added new component to handle navigations and content
* groupui-search-field: Added `description` slot for `search-suggestion`
* groupui-search-field: Adjusted interaction design for `search-suggestion`
### What's changed
* groupui-global-top-navigation, groupui-local-top-navigation: Parent items are now only `active` when a nested collapsed child item is `active`
* groupui-input, groupui-multiselect, groupui-select, groupui-search-field: Use `groupui-embedded-button` for component internal interactive elements to improve accessibility
* groupui-multiselect: Added `a11yLabelClearButton` to change the accessibility text of the clear button
* groupui-multiselect: Added `a11yLabelSearchButton` to change the accessibility text of the search button
* groupui-multiselect: Improved screen reader support
* groupui-tooltip, groupui-toast, groupui-modal, groupui-banner, groupui-inline-notification: Use `groupui-icon-button` to improve accessibility
### What's fixed
* groupui-banner, groupui-inline-notification, groupui-toast: Hide status icon for screen-reader to improve accessibility
* groupui-button-group-button: Added functionality for `groupui-button-group-button` to be disabled independently
* groupui-global-top-navigation-utility-item, groupui-global-top-navigation-mobile-utility-item: No longer stops event propagation of click events on nested elements
* groupui-input: Fixed focus-loss of input, when multiple icons change
* groupui-select: Fixed selection when value and options change
* groupui-showcase: Fixed a11y-label appearance
* Fixed `autofocus` in components that can hold other content/components

---

## Version 12.7.0
Released on August 12, 2025
### What's new
New components:
* Icon Button & Embedded Button (see Icon-Button; embedded button will not be used independent`groupui-embedded-button`
  `groupui-icon-button`
* Global Top Navigation Utility Items (see Navigation - global top)
  `groupui-global-top-navigation-utility-items`
  `groupui-global-top-navigation-utility-item`
* Global Side Navigation Category & Utility Items (see Navigation - global side)
  `groupui-global-side-navigation-category`
  `groupui-global-side-navigation-utility-items`
  `groupui-global-side-navigation-utility-item`
* Local Top Navigation (see Navigation - local top)
  `groupui-local-top-navigation`
  `groupui-local-top-navigation-item`
* Local Side Navigation (see Navigation - local side)
  `groupui-local-side-navigation`
  `groupui-local-side-navigation-items`
  `groupui-local-side-navigation-item`
  `groupui-local-side-navigation-category`
* Templates for pages with combinations of global and local navigations (see Template-S﻿ection)
Features for existing components:
* groupui-date-picker: Add properties `a11yLabelClearIcon` and `a11yLabelCalendarIcon` to improve accessibility
* groupui-input: Add property `htmlMinMaxBehavior` which prevents input below or above specified ranges for `type=number` with the `min` or `max` property
### What's changed
* Accessibility: `aria-label-...` is now deprecated in the following components. Please use `a11y-label-...` instead
  groupui-modal: `a11y-label-close-button`
  groupui-range-slider: `a11y-label-from` and `a11y-label-to`
  groupui-search-field: `a11y-label-clear-button` and `a11y-label-search-button`
  groupui-select: `a11y-label-clear-button`
* groupui-breadcrumbs: `aria-label` is now configurable
* groupui-breadcrumbs: Add keyboard handling to breadcrumbs and breadcrumbs-dropdown
* groupui-button: Icon now always has `a11y-hidden` set to `true` to prevent screen readers from reading the icon name
* groupui-input: Add keyboard handling to show/hide password icon for `type=password`
* groupui-multiselect: Add possibility to use `searchable` without `showChips`
### What's fixed
* groupui-brand-logo: Remove unwanted spacing underneath logo
* groupui-button-group: Fix error `componentOnReady is not a function` thrown in React wrapper component
* groupui-date-picker: Fix focus issues, by preventing native flatpickr change events
* groupui-link: Fix alignment when icon-left is set
* groupui-modal: Fix console errors
* groupui-select: Fix a visual bug where a click on the clear button didn't cleared the selected-option
* groupui-select: Fix bug where object passed to a select as value resulted in error
* groupui-select: Fix console warnings
* groupui-slider: Fix runtime errors by adding null checks
* groupui-showcase: Fix background when sub-component is inverted
* groupui-tabs: Fix title not updated after changing language with Angular `ngx-translate` library

---

## Version 12.6.0
Released on June 25,2025
### What's new
* groupui-accordion: Added additional icon-positions `top-left,` `top-right`, `bottom-left` and `bottom-right` for multiline header
* groupui-brand-logo: Added component
* groupui-button: Added properties `icon-left`, `icon-left-source,` `icon-right` and `icon-right-source` which can be used simultaneously (two icons in one button)
* groupui-button: Added property `showLoadingIndicator` to show loading indicator in button
* groupui-global-side-navigation: Added component
* groupui-global-top-navigation: Added new global top navigation
* groupui-global-top-navigation-items: Added item wrapper for new global-top-navigation
* groupui-global-top-navigation-item: Added basic items for new global-top-navigation
* groupui-side-navigation: Added `position` property that controls the css position value of the side nav
* groupui-modal: Added `ariaLabelCloseButton` property to set a custom accessible text for the close button
* groupui-search-field, groupui-select: Added keyboard handling for the clear button
### What's changed
* groupui-button: **Deprecated** `icon`, `icon-source` and `icon-position` . Please use `icon-left` (`icon-left-source`) and `icon-right` (`icon-right-source`) instead
* groupui-select, groupui-search-field: Deprecated ariaClearButtonLabel and ariaSearchButtonLabel, please use ariaLabelSearchButton and ariaLabelClearButton
### What's fixed
* groupui-banner, groupui-inline-notification: Clear auto-dismiss timeout when value is set empty (undefined, null, etc.)
* button-group: Fixed error when trying to set role of buttons on slot change event
* groupui-radio-group: Update disabled attribute of nested radio-buttons (will be set to empty string, if disabled)
* groupui-select: Fixed visualisation of complex objects (e.g. Icon and Text)
* groupui-select: Fixed severities in angular when using formControlName
* groupui-select: Fixed icon of selected option in angular
* groupui-top-navigation: Fixed an issue where search-fields would not handle `space` inputs properly

---

## Version 12.5.0
Released on May 28, 2025
### What's new
* groupui-link: Added `iconLeft` and `iconRight` to add icons to a link (also with `iconLeftSource` and `iconRightSource`)
### What's changed
* groupui-banner, groupui-inline-notification: `auto-dismiss` timer is restarted, when value gets changed by user/app
* groupui-banner, groupui-inline-notification: `groupuiClosed` event is called after hide animation is finished
* groupui-banner, groupui-inline-notification: `groupuiClosed` event is not called when component is initially not visible
* groupui-radio-button, groupui-radio-button-group: Improved screen reader accessibility
* groupui-range-slider: Improved screen reader accessibility
* groupui-search-field: Reset search-suggestion focus when popover opens
* groupui-slider: Improved screen reader accessibility
* groupui-toast: Adjust icon according to severity
* updated from GroupUI tokens 2.7.0 to 2.8.1 which adjusts colors to meet accessibility standards
### What's fixed
* groupui-headline: Fixed cursor appearance
* groupui-loading, groupui-progress: Fixed missing safe area around circle
* groupui-modal: Fixed close button behavior leading to reopening
* groupui-multiselect: Fixed close icon color of chips
* groupui-multiselect: Fixed missing focus indicator for chips
* groupui-range-slider: Fixed focus states for handles
* groupui-search-field: Fixed suggestions showing and input getting focus on suggestions change
* groupui-side-navigation: Prevent nested navigations from being updated, when attributes change
* groupui-switch: Fix disabled text color

---

## Version 12.4.1
Released on May 08, 2025
### What's fixed
* groupui-button-group-button, groupui-tabs: Fixed crashing test workers in Jest with Angular wrapper
* groupui-multiselect: Fix close icon color of chips
* groupui-modal : Fixed body not scrollable after unconventional modal dismissal
* groupui-tag: Text inside is of tag now always centered for every browser scaling

---

## Version 12.4.0
Released on April 29, 2025
### What's new
* Added accessibility improvements to most components
* Enabled hotkeys for clickable components when using screen readers (i.e. voice over)
* groupui-flyout: Added `disableBackdropClose` and `disableEscapeClose` to give the chance to prevent flyout from closing
* groupui-loading: Implement new `loading` component
* groupui-modal: Added `centered` attribute to align the modal vertically centered without using margin
* groupui-progress: Implement new `progress` component
* groupui-tab: Added `update` method to refresh the visualisation
### What's changed
* groupui-action-area-item, groupui-action-area-popover-item: Improved a11y by making the interactable element a `button` element
* groupui-header: Improved a11y by wrapping the header content in a `header` element
* groupui-icon: Deprecated `a11y-label` attribute. Use `aria-label` instead.
* groupui-icon: Deprecated `icon-source` attribute on body. Use `data-gui-icon-source` instead.
* groupui-input: Add possibility to hide spin buttons of `type=number` with `hide-type-indicator`
* groupui-input: Change icon for `type=time` and `type=month`. This can be hidden with `hide-type-indicator`
* groupui-side-navigation-group: Improved a11y by making the interactive element a `button` element. Added proper aria labels and improved keyboard handling
* groupui-side-navigation-item, groupui-top-navigation-item: Improved a11y by making the navigation-items either a `button` or `a` element, depending on the `href` attribute. Added proper aria labels and improved keyboard handling
* groupui-side-navigation: Improved a11y by wrapping the side navigation content in a `nav` element
* groupui-simple-pagination: Improved a11y by making the interactable elements a `button` element. Wrapped the content in a `nav` element
* groupui-tabs: Improved a11y by making the interactable elements a `button` element. Added proper aria labels and improved keyboard handling
* groupui-top-navigation: Change font weight of active items to prevent jumping
* groupui-top-navigation: Improved a11y by wrapping the top navigation content in a `nav` element
### What's fixed
* groupui-badge: Fixed warning text color
* groupui-breadcrumbs: Fix layout not adjusting when adding breadcrumb elements after initialisation
* groupui-chip: Fixed border of `disabled` chip
* groupui-date-picker: Fix error when setting week date via javascript
* groupui-divider: Fixed custom styles on divider
* groupui-flyout: Fixed a bug where the flyout was not showing when `initially open`
* groupui-input: Fix groupui-input value being out of sync with the value in the input field
* groupui-modal: Fixed `margin` attribute
* groupui-modal: Prevent `groupuiModalClose` being fired when modal opens
* groupui-modal: Prevent body from scrolling when modal is open
* groupui-multiselect: Prevent multiselect from opening when clear icon is clicked
* groupui-radio-group: Fix radio group not registering clicks on complex labels
* groupui-search-field: Fix previously choosen value gets readded when adding additional suggestions
* groupui-search-field: Fix `search-field-suggestion` not being rendered properly `onSlotChange` (REACT ONLY ISSUE)
* groupui-select: Fixed pre-selected option not highlighted on options expand
* groupui-select: Fixed readonly select without a placeholder not having the correct height
* groupui-tooltip: Fixed a `console.error` log when used with `*ngIf` directive in Angular
* groupui-tooltip: Fixed crashing test workers in Jest with Angular wrapper
* groupui-top-navigation: Fix wrong background color token

---

## Version 12.3.2
Released on March 20, 2025
### What's fixed
* Angular19-Support: Fix standalone flag
* groupui-date-picker: Fix console error
* groupui-date-picker, groupui-multiselect: Fix label position
* groupui-input: Fix time indicator on mobile chrome
* groupui-modal: Fix usage of breakpoints
* groupui-tabs: Fix focus state for no-padding variant
* groupui-tabs: Use navigation color tokens
* groupui-top-navigation: Fix property delegation for items when they change

---

## Version 12.3.1
Released on March 11, 2025
### What's fixed
* groupui-accordion: Fix focus behavior
* groupui-breadcrumbs: Roll back fix `Fix last chevron when a new breadcrumb is added after initial loading` from v12.3.0 because it introduced some more severe errors
* groupui-button-group-button: Fix keyboard focus not visible
* groupui-modal: Fix overflow property not working
* groupui-tooltip: Fixed tooltip shifting outside of the viewport
* remove console.log() statements

---

## Version 12.3.0
Released on March 06, 2025
Internal changes:
* Although the API of the components hasn't changed, there were changes of the internal structure of the components to improve accessibility of the components. This might cause some issues when testing the internal component structure (not recommended)
### What's changed
* groupui-modal: Now used built-in HTML dialog API
* groupui-multiselect, groupui-select: Introduce `showClearIcon` attribute
* groupui-tooltip: Increase font size according to design guidelines
### What's fixed
* *angular: Add* `standalone: false` *at components and directives to support Angular19*
  (will be released in the next version)
* button-group-button: Can now be wrapped in a tooltip
* button-group-button: Fix icon, when it contains multiple dashes
* groupui-breadcrumbs: Fix last chevron when a new breadcrumb is added after initial loading
* groupui-datepicker: Fix change event, when value is set externally
* groupui-datepicker: Fix console error message when using component with a form control on back routing
* groupui-datepicker: Fix manual validation not being properly executed
* groupui-headline: Fix marketing typography
* groupui-icon: Add `a11y-label` to improve accessibility
* groupui-input, groupui-select: Fixed description showing on focus when `description-only-on-focus` set on a disabled component
* groupui-multiselect: Fix readonly behavior when in readonly mode
* groupui-popover: Fix popover being cut off inside a container with `overflow: hidden`
* groupui-search-field: Fix search suggestion after clearing input
* groupui-select: Component is no longer interactive when disabled
* groupui-select: Fix alignment
* groupui-simple-pagination: Fix focus behavior for page-numbers
* groupui-tabs: Fix dynamic updating of tab titles
* groupui-tooltip: Introduce native PopoverAPI to fix tooltip clipping parent containers
* Add semantic tags/attributes to simple components (i.e. Text, Headline, chip, tag etc.), clickable components, popovers and documentation related components as well as forms components to improve accessibility
* Fix warning `The above dynamic import cannot be analyzed by Vite` when building an Angular project with GroupUI
* documentation (showcase): Fix link to additional supported events by Shadow DOM

---

## Version 12.2.0
Released on January 29, 2025
### What's new
* groupui-checkbox, groupui-input, groupui-radio-button, groupui-switch, groupui-textarea: Add `size` property to choose between normal (m) and small (s) render size
* groupui-date-picker: Add `setEventDates` method to add event markers to selected dates in the date picker (not in week mode)
* groupui-floating-action-button: Added component
* groupui-toast: Introduce `toast` component
* groupui-input: Add `prefix-text` and `suffix-text` properties to add text before and after the inner input field
* groupui-search-field: add `caseInsensitiveHighlighting` property to make the by default case-sensitive highlighting of searched text case-insensitive
### What's changed
* groupui-date-picker: Changed shape of days in the date picker to squares (vwag) / circles (vwgroup)
### What's fixed
* groupui-button: Enable keyboard handling of button with url
* groupui-chip: Fix click events when disabled
* groupui-datepicker: Fix click events when disabled
* groupui-datepicker: Fix week-selection for always-open variant
* groupui-datepicker: Fix consistent position
* groupui-datepicker: Fix last week of year in week mode
* groupui-datepicker: Fix broken design in week mode
* groupui-datepicker: Fix week-selection for always-open variant
* groupui-input: Fix click events when disabled
* groupui-input: Fix too small padding between icon and text
* groupui-multiselect: Fix `multiselect` still being operable when configured as searchable and readonly
* groupui-pagination: Prevent error when loading component
* groupui-radio-group: Fix no selection being reflected as value="null"
* groupui-select: Fix focus behavior for an select-option click
* groupui-stepper-horizontal: Fix text alignment for line-breaking description
* groupui-textarea: Fix click events when disabled
* groupui-textarea: Fix status icon position
* groupui-tooltip: Fix console error in angular when visible was used together with ngif
* documentation (showcase): Fix display of boolean properties: either show or hide them instead of using "true" and "false" as values

---

## Version 12.1.0
Released on November 22, 2024
Known Issues:
* groupui-input: when the type is password, the order of the icons (status, close, hide) is wrong
* groupui-input: when the type is password, the hide icon should be also shown when the input has no focus
### What's new
* groupui-banner, groupui-inline-notification: Added `hideCloseButton` property to define if a banner/inline notification can be dismissed by the user
* groupui-banner, groupui-inline-notification, groupui-modal: Make close-icon accessible for keyboard navigation
* groupui-input: Added show password icon for type=password, can be disabled with the new `hideShowPassword` property
* groupui-radio-group: Added `description` slot that is displayed below the radio-group
* groupui-tag: Added `tertiary` variant and multiple color options.
### What's changed
* groupui-banner, groupui-inline-notification: Add fade-in/-out animation on visibility change
* groupui-side-navigation, groupui-top-navigation: Color change for unselected items
### What's fixed
* groupui-date-picker, groupui-input, groupui-multiselect, groupui-search-field, groupui-textarea: Fix placeholder color for disabled state
* groupui-multiselect, groupui-select: Fixed a bug where HTML characters were escaped in the summary view
* groupui-radio-group: Fixed `required` property not blocking form submission and changing severity if no option is selected
* groupui-tag: Changed default (information) color.

---

## Version 12.0.1
Released on October 25, 2024
### What’s fixed
* Fixed angular modules so that they are available again

---

## Version 12.0.0
Released on October 22, 2024
Breaking changes:
* groupui-checkbox, groupui-radio-button: Removed the severities: warning and success for VWAG
* groupui-chip: Removed the colors: blue, lime, mint, purple and violet
* groupui-modal: Removed background property for VWAG
* groupui-notification: Removed deprecated component. Use groupui-banner or groupui-inline-notification instead
* groupui-select, groupui-select-option: Removed inverted property for VWAG
* groupui-side-navigation: Removed inverted property for VWAG (use variant instead)
* groupui-stepper-vertical: Use of groupui-step-vertical is required
* groupui-tab: Removed deprecated properties name, icon and iconSource. Use title slot instead to put any HTML content in the tab title
* removed custom CSS properties in favor of GroupUI Design Tokens
  ﻿assets/themes/vwgroup/vwgroup.css, assets/themes/vwag/vwag.css and assets/themes/vwag/vwagDark.css do not exist anymore
* The GroupUI Design Tokens are now used inside the Web Components which means that the keyword to switch brands has changed from brand to data-gui-brand to use the vwag dark mode you will now additionally have to set data-gui-mode="dark" instead of using vwagDark
### What's new
* groupui-button, groupui-button-group, groupui-link: Add `inverted` property for VWGroup
### What’s changed
* groupui-action-area-item, groupui-action-area-popover-item: Remove unnecessary dom elements
* groupui-card: Change default elevation from 4 to 8. Refactor dom-tree
* groupui-checkbox, groupui-radio-button: Removed the severities: warning and success for VWAG (**BREAKING CHANGE**)
* groupui-chip: Removed the colors: `blue`, `lime`, `mint`, `purple` and `violet` (**BREAKING CHANGE**)
* groupui-modal: Removed `background` property for VWAG (**BREAKING CHANGE**)
* groupui-notification: Removed deprecated component. Use groupui-banner or groupui-inline-notification instead. (**BREAKING CHANGE**)
* groupui-select, groupui-select-option: Removed `inverted` property for VWAG (**BREAKING CHANGE**)
* groupui-side-navigation: Removed `inverted` property for VWAG (use variant instead) (**BREAKING CHANGE**)
* groupui-stepper-vertical: Use of groupui-step-vertical is required (classes `step-horizontal` and `step-vertical` do not have any effect) (**BREAKING CHANGE**)
* groupui-tab: Removed deprecated properties `name`, `icon` and `iconSource`. Use `title` slot instead to put any HTML content in the tab title (**BREAKING CHANGE**)
* Removed custom CSS properties in favor of GroupUI Design Tokens (**BREAKING CHANGE**)
  `assets/themes/vwgroup/vwgroup.css`, `assets/themes/vwag/vwag.css` and `assets/themes/vwag/vwagDark.css` do not exist anymore
  use `assets/themes/tokens.css` instead
* The keyword to switch brands has changed from `brand` to `data-gui-brand` to use the vwag dark mode you will now additionally have to set `data-gui-mode="dark"` instead of using `vwagDark` (**BREAKING CHANGE**)
### What’s fixed
* groupui-banner, groupui-inline-notification: Fixed `Z-index`
* groupui-headline: Fixed line-height of headline
* groupui-pagination: Fixed possibility for swapping the order of the page select and the size selection
* groupui-progress-circle: Fixed calculation of stroke

---

## Version 11.3.0
Released on September 03, 2024
### What’s changed
* groupui-banner, groupui-inline-notification: Renamed default severity from `default` to `information`
* Cleaned up packages, reducing size to 9.4 MB (pure components) / 17.6 MB (Angular / React wrappers)
### What’s fixed
* groupui-banner, groupui-inline-notification, groupui-badge: Fixed colors for `information` variant
* groupui-banner, groupui-inline-notification: Fixed CSS solution to make it work in Firefox 115 ESR
* Fixed an error in the packages where different version numbers of the GroupUI packages still used the same functions from one version (only relevant in micro frontend contexts)

---

## Version 11.2.0
Released on August 06, 2024
### What’s new
* groupui-banner, groupui-inline-notification: Added component for `vwag` and `vwagDark`
* groupui-checkbox, groupui-date-picker, groupui-multiselect, groupui-search-field, groupui-select, groupui-textarea: Added `validity` attribute which reflects the validity status of the component
* Added **web types** JSON file to web components package that improves IDE support when using web components without Angular/React wrappers
### What’s changed
* groupui-input: Changed behavior of the `validity` attribute so that it reflects the input's validity at all times (even on load)
* groupui-button: Moved `role` of button to improve accessibility
### What’s fixed
* groupui-select: Fixed keyboard interaction still possible in `readonly`
* groupui-multiselect: Fixed keyboard interaction still possible in `readonly`
* groupui-search-field: Fixed incomplete documentation of search field's `groupuiSuggestionSelected` event
* Fixed some components not being available in the Angular GroupUiModule

---

## Version 11.1.1
Released on July 03, 2024
### What’s fixed
* Fixed an issue where the `defineCustomElements` function was not properly included in the build

---

## Version 11.1.0
Released on July 02, 2024
### What’s new
* groupui-avatar: Added `iconTitle` property to set title of icon
* groupui-date-picker: Added `alwaysOpen` property which enables the popup of the date-picker to be open at all times
* groupui-icon: Added `title` property to overwrite `alt` in hover tooltip
* groupui-inline-notification: Added `inline-notification` (only supported for vwgroup brand yet)
* groupui-showcase (documentation component): Added information about Angular ControlValueAccessor
###
### What's changed
* groupui-button-group: Removed support for Angular `ControlValueAccessor` because it did not work properly because event payload is of array type
* groupui-notification: Deprecated > use the new Inline Notification instead
### What’s fixed
* groupui-date-picker: Fixed appearance on config changes for invalid inputs
* groupui-date-picker: Reflect changes of date format
* groupui-input: Fixed Angular `ControlValueAccessor` without explicit type property
* groupui-input: Fixed Angular `ControlValueAccessor` with type=number
* groupui-multiselect: Fixed `placeholder` and console errors when `summary` is given
* groupui-popover: Corrected the `z-index` value of the popover content container in the `vwag` brand
* groupui-textarea: Fixed `max-rows` handling, if `rows` are bigger

---

## Version 11.0.0
Released on June 06, 2024
Breaking changes:
* groupui-checkbox: Removed unused severities success and warning for vwgroup
* groupui-icon: Updated the default icon-source url to dynamically include the brand name, replacing the previous hardcoded vwag reference. Furthermore setting the icon-source on the body will now utilize the exact path given and won't include the brand anymore.
* groupui-input: Property type no longer supports dateand datetimeLocal
* groupui-input: Fixed max-length behavior for type="number"
* groupui-radio-group: Remove selection of first radio-button by default
* groupui-tooltip: Property visible now overrules hover events, meaning that if set, the user has to deal with showing & hiding the tooltip manually
### What’s new
* groupui-banner: Added new component `banner` (only vwgroup)
* groupui-multiselect: Added `readonly` mode
* groupui-multiselect: Added `searchValue` property to receive search value
* groupui-multiselect-option: Added `selectAll` property to select all options at once
* groupui-radio-group: Remove selection of first radio-button by default (**BREAKING CHANGE**)
* groupui-select: Added `readonly` mode
* groupui-switch: Added `labelPosition` property to determine on which side the label is placed
* groupui-tab: Added `title` slot to be able to put any HTML code in the tab title
### Whats’s improved
* groupui-checkbox: Removed unused severities `success` and `warning` for vwgroup (**BREAKING CHANGE**)
* groupui-icon: Updated the default `icon-source` url to dynamically include the brand name, replacing the previous hardcoded `vwag` reference. Furthermore setting the `icon-source` on the body will now utilize the exact path given and won't include the brand anymore. - (**BREAKING CHANGE**)
* groupui-input: Property type no longer supports `date` and `datetimeLocal` (use our date picker instead) (**BREAKING CHANGE**)
* groupui-input: Added type=text as a fallback for unsupported types
* groupui-multiselect: Search value is dispatched on input => `event.target.searchValue`
* groupui-tab: Properties `name`, `icon` and `icon-source` are deprecated. Use new `title` slot instead to put any content in tab title (e.g. `<groupui-icon>`)
* groupui-tooltip: Property visible now overrules hover events, meaning that if set, the user has to deal with showing & hiding the tooltip manually (**BREAKING CHANGE**)
### What’s fixed
* groupui-button-group: Fixed a bug where fullwidth change at runtime wasn't working
* groupui-checkbox: Fixed indeterminate states and interaction styling
* groupui-date-picker: Fixed appearance on mobile screens
* groupui-date-picker: Fixed required behavior without value
* groupui-flyout: Focus autofocus or first Element on open (works only in chrome)
* groupui-input: Hide arrow for time input for mobile chrome
* groupui-input: Fixed max-length behavior for `type="number"` (**BREAKING CHANGE**)
* groupui-multiselect: Fixed returning search-value on input
* groupui-switch: Fixed label color and added missing pressed styling
* groupui-tabs: Fixed active and focus styles

---

## Version 10.1.0
Released on May 02, 2024
### What’s new
* groupui-multiselect: Added `singleLine` property to disable the multiline behavior for selected options, does not work with chips
* groupui-button: Add hero variant (only supported for vwgroup brand and on-deep-space-blue theme)
### What’s fixed
* groupui-button: Fixed button vertical alignment issue. Removed wrong "middle" value from vertical-align property.
* groupui-button, groupui-checkbox, groupui-switch: fix focus outline in disabled state (focused with javascript)
* groupui-button-group Fixed background color of checked button group button when button group is disabled
* groupui-button-group: Fixed `groupuiChange` event not fired
* groupui-checkbox: Fixed checkbox active style for vwgroup checked state
* groupui-date-picker: (week mode) Fixed dates not being parsed correctly when using custom week formats
* groupui-date-picker: Property `disable-weekends` has no effect now if used with `mode="week"` (did not make sense and broke the design), it's still not recommended to use this property with `mode="range"`
* groupui-flyout: Elements are not focusable when flyout is not visible
* groupui-input: Fixed icon positioning when using `iconSource`
* groupui-input: Fixed text color of readonly state and icon-color of disabled state
* groupui-input: Fixed documentation showcase of min and max value
* groupui-input: Fixed different inline block heights for most input types (except file)
* groupui-multiselect: Fixed flickering in chips mode
* groupui-multiselect: Clear search field on Escape press
* groupui-multiselect: Hide placeholder when searching for entries
* groupui-multiselect: Fixed padding of multiselect-options
* groupui-radio-button: Fixed focus outline in several states (focused with javascript)
* groupui-radio-button: Fixed text and disabled color
* groupui-radio-group: Fixed background color of checked radio button when radio group is disabled
* groupui-search-field: Fixed padding of search-suggestions
* groupui-select: Fixed a bug, which caused the whole select container to gain focus instead of the input only. (only vwag brand)
* groupui-step-vertical: Added the component to angular module file to be available in angular.
* groupui-switch: Fixed vwagDark style for disabled state
* groupui-switch: Fixed mouse courser when switch is disabled
* groupui-tabs: Fixed custom html in the name breaks tab size
* groupui-tabs: Fixed change detection for icon and icon-source
* groupui-textarea: Fixed expanding textarea if value changed programmatically after initialization
* groupui-top-navigation: Removed bottom border when embedded into header component
* vwgroup: Fixed font medium italic and elevation level 8

---

## Version 10.0.0
Released on March 12, 2024
Breaking Changes:
* Figma: Removed Input field variants on deep space blue background (VW Group)
* Figma: Added pure-white background color to input field component to match implementation (VW Group)
* groupui-date-picker: in week mode value is now stored and emitted in the fixed format Y-\WW to be consistent with the other modes and the native HTML week picker behavior
* groupui-date-picker: The properties min-date and max-date are expected in the same fixed format as value now: Y-m-d in single and range mode, Y-\WW in week mode
* groupui-date-picker: The property rangeMode has been removed
* groupui-search-field: The property suggestionsMaxHeight has been removed
* groupui-button: Fixed button vertical alignment issue. Removed wrong "middle" value from vertical-align property.
* groupui-grid, groupui-grid-row, groupui-grid-cell: fixed gap values between cells
* groupui-notification: Add visibleproperty to control the visibility of the notification. Defaults to false (that is the breaking change)
### What’s new
* Published `Design Tokens`
* groupui-multiselect: Add groupui-multiselect-option-group component
* groupui-select: Add groupui-select-option-group component
* groupui-input: Added `alwaysShowTypingInfo` and `alignTypingInfo` props to extend control over the typing info display
* groupui-textarea: Added `alwaysShowTypingInfo` and `alignTypingInfo` props to extend control over the typing info display
* groupui-notification: Add `visible` property to control the visibility of the notification. Defaults to false (**BREAKING**)
* groupui-date-picker: new property `disable-manual-input` prevents manual input of dates in the date picker via keyboard
* groupui-date-picker: clear icon for date-picker input and new property `show-clear-icon` to show the clear icon
### What’s improved
* groupui-date-picker: in `week mode` `value` is now stored and emitted in the fixed format `Y-\WW` to be consistent with the other modes and the native HTML week picker behavior (**BREAKING**)
* groupui-date-picker: The properties `min-date` and `max-date` are expected in the same fixed format as value now: `Y-m-d` in `single` and `range` mode, `Y-\WW` in `week` mode (**BREAKING**)
* groupui-date-picker: The property `rangeMode` has been removed (**BREAKING**)
* groupui-search-field: The property `suggestionsMaxHeight` has been removed (**BREAKING**)
* groupui-tab: Dynamically disabling a tab won't remove it's active state anymore
### What’s fixed
* groupui-button: Fixed button vertical alignment issue. Removed wrong "middle" value from vertical-align property. (**BREAKING**)
* groupui-grid, groupui-grid-row, groupui-grid-cell: fixed gap values between cells (**BREAKING**)
* groupui-select: Fixed a bug, which caused the whole select container to gain focus instead of the input only. (only vwag brand)
* groupui-multiselect: Fixed flickering in chips mode
* groupui-multiselect: Clear search field on Escape press
* groupui-multiselect: Hide placeholder when searching for entries
* groupui-date-picker: (week mode) Fix dates not being parsed correctly when using custom week formats
* groupui-date-picker: (week mode) Fix `value` not being stored and emitted in the fixed format `Y-\WW` (html week picker behaviour)
* groupui-textarea: Expands textarea if value changed programmatically after initialization
* groupui-top-navigation: Remove bottom border when embedded into header component
* groupui-radio-group: Fix background color of checked radio button when radio group is disabled
* groupui-button-group: Fix background color of checked button group button when button group is disabled
* groupui-step-vertical: Added the component to angular module file to be available in angular.
* groupui-button, groupui-checkbox, groupui-switch: fix focus outline in disabled state (focused with javascript)
* groupui-input: Fixed icon positioning when using `iconSource`

---

## Version 9.3.0
Released on February 6, 2024
Breaking changes:
* groupui-textarea: Reworked maxlength behaviour to match the groupui-input component. The new default behavior will allow users to surpass the character limit, but fire the invalid event on change. Added the html-maxlength-behavior attribute which restores the old functionality.
### What’s new
* groupui-multiselect: New property `searchable` only usable with show-chips. Can be used to filter options
* groupui-multiselect-option: New property `invisible` only usable with searchable multiselects. Use this for filtering and hide the option
* groupui-pagination: Added `getPageItemsStart()` and `getPageItemsEnd()` methods on the component to get the first and last item's number of the currently selected page
* groupui-checkbox: Make the width of the label container match its parents width so that it's possible to apply proper flex layout's to it
* groupui-input: Added `step` attribute to specify the interval between legal numbers
* Changed stencil config to provide Angular 17 support
### What’s improved
* groupui-checkbox, groupui-radio-button, groupui-chips: Removed unused severities for vwgroup brand
* groupui-chip: Cursor shows this as an interactive element
* groupui-textarea: Reworked `maxlength` behaviour to match the `groupui-input` component. The new default behavior will allow users to surpass the character limit, but fire the `invalid` event on change. Added the `html-maxlength-behavior` attribute which restores the old functionality. (**BREAKING**)
### What’s fixed
* groupui-date-picker: Fixed a bug that caused the datepicker days to not show properly inside of the groupui-tabs or other possibly hidden containers when week numbers are enabled
* groupui-multiselect: Fixed chips padding
* groupui-tabs: Fixed font-weight being too big for unwrapped text in the tab component (only vwgroup)
* groupui-tag: Fixed padding and variant secondary styling,
* groupui-chip: Fixed primary and secondary variants having different widths with the same content
* groupui-chip: Fixed vwagDark interaction styling

---

## Version 9.2.0
Released on January 18, 2024
### What’s improved
* groupui-input: Min and Max value allows now number and string input types
* groupui-stepper: Changed Background from white to transparent
### What’s fixed
* groupui-button: Fixed URLs being called twice on click if the `url` property of the button is set
* groupui-button-group: Fixed hover effects being shown on disabled button-groups
* groupui-date-picker: Fixed custom date formats in week-mode breaking the functionality of the picker
* groupui-date-picker: Fix hover effect still showing on disabled dates if they are in the previous/next month
* groupui-divider: Fixed vertical divider's `display` to `inline-block` so that the height is set correctly
* groupui-search-field: Fixed a bug in Angular apps where an error was thrown on selection for conditionally rendered suggestions
* groupui-search-field: Fixed `groupuiSearchStarted` event being thrown even if the search field is disabled
* groupui-simple-pagination: Fixed the previous and next buttons to be disabled when there is no data
* groupui-tabs: Fixed nested tabs being rendered twice
* groupui-tabs: Fixed layout of tab contents being forced to `display: flex`

---

## Version 9.1.0
Released on December 19, 2023
### What’s new
* groupui-date-picker: Keep invalid values in input field instead of clearing them out
* groupui-date-picker: Fire Custom Event (invalid / groupuiInvalid) containing an array of reason's
* groupui-tabs: Introduce horizontal scrollbar in case of overflow
### What’s improved
* groupui-datepicker: Rework keyboard handling, so that the datepicker won't open on enter
* groupui-multi-select: Added multiline view to show all selected options when the width of the component is not enough to show all selected options
* Packages are available on devstack artifactory again, starting with version 8.6.2
### What’s fixed
* groupui-modal: Fix autofocus behavior for inner components
* groupui-select: Fixed initial severities
* groupui-tabs: Fixed misplaced scrollbar
* groupui-tabs: Fixed disabled not showing cursor: not allowed
* groupui-icon: Use fallback icon when not able to load an icon instead of displaying an error message
* groupui-date-picker: Fixed "Cannot convert undefined or null to object - no inputWrapper" console error when date-picker will shown dynamically on angular
* groupui-date-picker: Fixed the issue that the datepicker won't work in frameworks like react & vue due to some bad lifecycle timings
* groupui-date-picker: Fixed change event not being thrown when date picker is cleared
* groupui-date-picker: Fixed change events not being dispatched in week mode
* groupui-button-group: Fixed not working properties in vwgroup brand
* groupui-multiselect: Fixed escaped HTML characters in multiselect-options being parsed and interpreted as HTML code
* groupui-side-navigation: Fix icon only mode not being preserved if navigation items change

---

## Version 9.0.0
Released on November 16, 2023
Breaking changes:
* !!! The mechanism to change the global styling has changed: instead of using the theme attribute, now the brand attribute is used to make way for further future improvements.
* !!! The new Corporate Design is the default design now. If you want to continue using the vwag design, you must add the brand attribute with the value vwag to your application.
* groupui-button-group: The property variant has been renamed to mode. variantnow sets primary or secondary layout.
* groupui-dropdown, groupui-dropdown-option, groupui-pagination-old have been removed due to deprecation
* groupui-step: groupuiStepActive and groupuiStepDone events are only emitted when set to true
* The location of the index.js file containing the defineCustomElements() inside the packages has changed due to the stenciljs update and is now located in …dist/components instead of …dist/custom-elements. See our package installation guide for react [here (react-scripts)](https://digitaldesign.volkswagen-group.com/r/3JRZxLPNXougPC8Ob4vKJcSjLkPv95TEcnOgxwKddkI) and [here (vite)](https://digitaldesign.volkswagen-group.com/r/1L9veuPAMtcMCq7adpw6Ud5AtEEt6rZIH_2ccdnsuk8) and for plain integration [here](https://digitaldesign.volkswagen-group.com/r/4PZLxdtXjhT3u5rPirGm1uGXzL6kdGVOC8bSsM98-fY).
Changes that only apply to the new VWGroup Design:
* Removed primary, secondary and tertiary postfixes in colors for VWGroup
* groupui-headline: uses fontVariant instead of a combination of serif and weight
* added new classification files for the new corporate design with different names than before
Known Issues:
* Angular: Currently the custom events of the groupui components are not recognizable by IDE, but they still work as before GroupUI 9.0.0. This issue is caused by a bug in the stenciljs angular wrapper introduced with the major update of stenciljs. There is already an [open issue](https://github.com/ionic-team/stencil-ds-output-targets/issues/401) for that in the stenciljs repository.
### What’s new
* Created a brand style for the new corporate design for all components
* groupui-accordion: Add event `groupuiExpandedChanged` emitted on expanded changed
* groupui-code-template: Add Code Template Component for internal use to show code examples in documentation
* groupui-input, groupui-checkbox, groupui-date-picker, groupui-multiselect, groupui-search-field, groupui-select, groupui-textarea: Added public `validate` method to trigger component validation manually.
* groupui-pagination : Added a property `direction` that flips the order of the elements
* groupui-button-group: Added `gap` property and a secondary `variant`
* groupui-step-horizontal: Added new component for horizontal-stepper, behaves like groupui-step with an additional content slot
* groupui-icon: Added `src` property
* groupui-input, groupui-button, groupui-button-group-button, groupui-step, groupui-search-suggestion, groupui-side-navigation-item, groupui-top-navigation-item, groupui-search-field, groupui-tab: Added `iconSource` property, which is a custom path to an SVG and it overrides the icon property if both are set
* groupui-range-slider: Added `groupuiChange` event for React users
* groupui-showcase: Added component methods to showcase component to show available methods in GroupUI documentation.
* groupui-multiselect: Added property `showChips`, can be used to show chips for selected options, which can be removed on click
* groupui-chip: Added property `embedded`, can be used to be included in other components, disables normal keyboard behavior
###
### What’s improved
* groupui-button-group: The property `variant` has been renamed to `mode`. `variant` now sets primary or secondary layout.
* groupui-date-picker: Property `dateFormat` can now be used with `week mode` too
* groupui-date-picker: Hover behavior in week mode. Single dates don't have a different highlight color than the whole week anymore
* groupui-headline: Removed `serif` & `weight` property for VWGroup brand style and provide `fontVariant` to chose the right font
* groupui-text: Removed `weight` property for VWGroup brand style and provide `fontVariant` to chose the right font
* groupui-dropdown, groupui-dropdown-option, groupui-pagination-old: Deprecated components removed
* groupui-card: Removed default drop-shadow for VWGroup brand style and removed `elevation` property for VWGroup brand style, as the elevation only occurs on interactive mode and is not customizable
* groupui-modal: New backdrop color for vwgroup brand style to match its color palette
* removed primary, secondary and tertiary postfixes in colors for VWGroup
* Defined `z-index` layers for all components
* Updated to Stencil 3
### What’s fixed
* groupui-button: Buttons with url no longer need 2 tab-presses to traverse by keyboard
* groupui-date-picker: Fixed label and description focus delegation
* groupui-date-picker: Fixed popup offset
* groupui-grid: Fix disconnect called on non-existing observer
* groupui-grid: Align margins for static and flexible grid according to the documentation. Outer margins equal gutter width
* groupui-multiselect: Fixed angular bug where options could not be loaded dynamically
* groupui-multiselect: Value changes now show in the DOM
* groupui-search-field: Fixed flickering search text on async loading of search results in Angular, some focus related issues
* groupui-search-field, groupui-date-picker: fixed HTMLElement: `focus()` method
* groupui-side-navigation: Fixed padding for all elements at 2nd level and above
* groupui-tab: Fixed content receiving events and inputs
* groupui-tab: Tabindex removed to allow forwarding keyboard inputs to tab content
* groupui-table: Increased `z-index` for table header to support other elements in combination with sticky headers
* groupui-date-picker, groupui-input, groupui-multiselect, groupui-range-slider, groupui-search-field, groupui-select, groupui-slider, groupui-textarea: Changed `label` and `description` color to `grey-1000`
* groupui-select: Fixed focus styling
* groupui-step: groupuiStepActive and groupuiStepDone events are only emitted when set to true
* Angular control value accessor bindings are now listening to the input event instead of groupuiChange
* Removed feature that changing `brand style` property on the body re-renders the whole DOM because of issues with frameworks like Angular, Vue and React

---

## Version 8.6.2
Released on August 1, 2023
### What’s fixed
* groupui-date-picker: Fixed not opening after severity lost with `show-status-icon` enabled
* groupui-date-picker: Fixed a regression bug where the integrated input field would not switch to dark mode
* groupui-tag: Fixed border not being displayed any more for secondary variant

---

## Version 8.6.0
Released on July 27, 2023
Breaking changes:
* Because of the removed border of the tag component, its height and width decreased by 2px
### What’s new
* groupui-date-picker (documentation): added example values for value and change event in week mode
* Changing the `theme` property on the body now re-renders the whole DOM tree in the new theme
* Added Angular ControlValueAccessor bindings for form relevant single-value-components (NOT included: `groupui-multiselect`, `groupui-range-slider`, `groupui-button-group`). Based on value/checked prop and emitted groupuiChange events
### What’s improved
* groupui-icon : Only show title if `alt` is set. Fallback to `name` removed.
* angular and react packages from now on will have the same version like the web component package
###
### What’s fixed
* groupui-flyout: Fix popovers (from groupui-select, groupui-multiselect, groupui-search-field) not positioned correctly
* groupui-tooltip: Fixed tooltip taking up space when not visible
* groupui-date-picker: Fixed issue where the `onChange` event was fired on changing the value programmatically. Will be fired now only on manual change.
* groupui-date-picker: Property changes in runtime now reflect in the date picker
* groupui-date-picker: Fix positioning issues
* groupui-date-picker: fixed a bug where `value` could not be changed programmatically
* groupui-flyout, groupui-action-area-popover-item: Fixed input components not usable inside
* groupui-grid: Propagate properties to later added `groupui-grid-row` as well
* groupui-tag: Removed the unwanted border (**BREAKING**)
* groupui-modal: Changed icon color in vwagDark theme
* groupui-popover: Hidden content is no longer focusable
* groupui-action-area-popover-item: Now only toggles visibility with keyboard on host focus

---

## Version 8.5.0
Released on July 05, 2023
### What’s new
* groupui-date-picker: New property `mode` to set the mode of the date picker. Possible values are `single`, `range` and `week`
* groupui-search-field: New slot `noResultsContent`, will be shown when no suggestions are available
* groupui-link, groupui-button, groupui-chip, groupui-side-navigation-item, groupui-top-navigaion-item: Add value `none` for the `target` property
* groupui-input: New boolean property `showClearIcon` can be used to show a clear icon in the input field
* groupui-input: New boolean property `htmlMaxlengthBehavior` can be used to prevent input longer than the set `maxlength`
* groupui-icon: Added accessibility
* groupui-icon: Added `alt` property to set an alt tag on the icon component
* groupui-action-area-popover-item: Add `placement` property to set the relative position of the popover
### What’s improved
* groupui-date-picker: Property `rangeMode` is deprecated. Use `mode` instead
* groupui-accordion, groupui-action-area-item, groupui-breadcrumb, groupui-button-group: Changed focus color to aqua-500
* groupui-showcase (documentation): use dark background-color when components are viewed with property `inverted` enabled
### What’s fixed
* grouppui-side-navigation: Fixed dynamically change of `iconOnly` property not working correctly
* goupui-action-area-popover: Fixed issue where popover is not overlaying the action area
* groupui-input: Fix sporadic error when using `noValidation` property in forms
* groupui-search-field: hide close icon when disabled
* groupui-date-picker: Fixed nested input field always shown in light mode regardless of actually selected mode

---

## Version 8.4.0
Released on June 05, 2023
### What’s new
* groupui-date-picker: Added property `position` for the open calendar
* groupui-textarea, groupui-input: Added `readonly` mode
* groupui-link: Added visited color for link in dark mode
* Added css variables for the grid breakpoints
* groupui-search-suggestion: Added `value` property
* groupui-search-field: groupuiSuggestionSelected event additionally contains the suggestion `value` if set, otherwise uses the text content as value
* groupui-pagination: add `groupuiPageSizeChanged` event
### What’s improved
* React and Angular packages will now have the same version as the web component package
### What’s fixed
* groupui-multiselect: Fixed predefined options were not rendered when multiselect is nested within other components
* groupui-multiselect: Fixed summary update bug
* groupui-multiselect: Fixed placeholder update bug
* groupui-showcase (in the documentation): Fixed a bug where slots that are named "content" could not be edited
* groupui-select: Removed warning logged to the console when the selected value is reset
* groupui-pagination: the page is now reset to 1 when the number of total elements or the page size is changed
* groupui-pagination: fixed wrong calculation of displayed items in `visibleElementsLabel`
* groupui-search-field: `groupuiSearchStarted` event is no longer dispatched when on a suggestion was selected

---

## Version 8.3.0
Released on May 22, 2023
### What’s new
* groupui-badge: New component
* groupui-search-field, groupui-search-suggestion: Added property `icon` to define a custom search or suggestion icon
* Added types to various EventEmitters
### What’s improved
* groupui-button: Now changes size of the icon if button size changes
### What’s fixed
* groupui-accordion: Fixed that it was not possible to enter SPACE into nested components like textarea within an accordion
* groupui-action-area-popover-item: Fix scrollbar on y-axis when popover is hidden
* groupui-datepicker: Fixed bug not closable calendar on invalid input
* groupui-input: Fixed autofocus not working in Firefox & Safari
* groupui-flyout: Fixed content wider than 400px not correctly hidden
* groupui-notification: `auto-dismiss` does not fire close event if notification already closed
* groupui-searchfield: Fixed bug where search field has to clicked twice to enter a text after a suggestion has been selected
* groupui-textarea: Removed unnecessary margin
* groupui-tooltip: Made container block level element so it's possible to span the slotted element to fullwidth
* groupui-tooltip: Tooltip is correctly placed inside a groupui-card
* groupui-textarea: Shift tab does not focus host element

---

## Version 8.2.0
Released on April 21, 2023
### What’s improved
* upgraded all popover components to use floating-ui (successor of popperjs)
### What’s fixed
* groupui-popover: Fixed popover placement bugs
* groupui-popover: Fixed the performance issues when there are many popovers on a single page
* groupui-loading-spinner: Fixed circle alignment issues
* groupui-flyout: Fixed flyout content bigger than screen
* groupui-flyout: Fixed hidden flyout appears on small screen sizes
* groupui-textarea: Removed unnecessary margin
* groupui-date-picker: Fixed bug where it was not possible to enter a format with spaces
* groupui-date-picker: Fixed bug where disabled state was not propagated to underlying input when changed programatically

---

## Version 8.1.0 (not released)
never made it into production

---

## Version 8.0.0 & 8.0.1
Released on March 13, 2023
Breaking changes:
* A new pagination component was implemented and will replace the old one. The old one will still be available with the tag "groupui-pagination-old":
* Before version 8.0.0 the groupui-grid-row added half the gutter size also on the outside of the first and last groupui-grid-col in one row. This feature was removed to create a more convenient handling with the grid.
* Because of a new internal structure in the groupui-grid-row, the gutter and margin properties now only accept one or two values. Something like "10px 12px 20px 16px" is no longer possible.
### What’s new
* groupui-pagination: new implementation of pagination component
* GroupUI Dark Mode for all components
* groupui-grid: New component that takes the margin and gutter definitions and passes them down to each row
* groupui-grid: Added property `gutter` that defines a gutter for every breakpoint (specific gutter definitions overwrite this)
* groupui-grid: Added property `margin` that defines a margin for every breakpoint (specific margin definitions overwrite this)
* groupui-select, groupui-multiselect: Added `no-validation` property to disable internal validation
* groupui-select: Added `groupuiInvalid` event
* Added `Forms template` - Schedule Service
* Added `Forms Template` - Account settings
### What’s improved
* groupui-pagination: Renamed to `groupui-pagination-old` and set to deprecated (**BREAKING**)
* groupui-grid, groupui-row: You can now use `margin-type: custom` together with `margin: 0` to completely remove the outer margin
### What’s fixed
* groupui-search-field, groupui-multiselect, groupui-input, groupui-date-picker, groupui-select, groupui-textarea: fix text flows behind status icon
* groupui-search-field, groupui-select: Fixed ellipsis for long texts
* groupui-textarea: Fixed `auto-expand` not working correctly with text without line breaks
* groupui-modal: `overlay-open` class gets set and cleaned up properly
* groupui-input: fix bug where validation is triggered when `maxlength` is set and value is undefined
* groupui-search-field: fix bug where optionSelected event fired too often and at the wrong time
* groupui-search-field: fix error thrown where search field tried to select a no longer existing suggestion
* groupui-tabs: fix non-updating tab titles on tab removed
* components using popper: fixed memory leak (tooltip, breadcrumb, popover)
* groupui-date-picker: Internal date representation now uses leading zeros
* groupui-date-picker: fixed problem with Z-Index of the Calendar icon

---

## Version 7.3.0
Released on February 07, 2023
Breaking change:
* Changed forms handling of all components to not use hidden inputs anymore
### What’s new
* groupui-item: added `porschePlant` theme
* groupui-notification: Added `tertiary` variant
* groupui-textarea, groupui-select, groupui-multiselect, groupui-search-field, groupui-date-picker, groupui-input: Added `descriptionOnlyOnFocus` for showing the description only during focus
* groupui-slider, groupui-range-slider: Added property to adjust the `thumb size`
### What’s improved
* groupui-input: fix bug where validation is triggered when `maxlength` is set and value is undefined
* groupui-input, groupui-textarea, groupui-date-picker: Fixed shift tab not navigating out of component
* groupui-search-field: fix bug where `optionSelected` event fired too often and at the wrong time
* groupui-search-field: fix rerendering issue, when suggestions have been changed
* groupui-select: fix spacing between selection and chevron icon
* \*groupui-grid-row: fix default gutter behavior. Default values have been doubled before
* \*groupui-grid-row: fix a timing issue where changes on the gutters have not been applied correctly
* groupui-select, groupui-multi-select, groupui-date-picker, groupui-search-field: fix documentation, so that `showStatusicon` property is shown
* groupui-multi-select: changes of the `summary` are now recognized and rerendered
* groupui-pagination: dropdowns in the pagination now no longer reserve vertical space, when closed
* groupui-switch: can now be focused via keyboard after changing from disabled to enabled
### What’s fixed
* Changed forms handling of all components to not use hidden inputs anymore
* groupui-flyout: width of left/right positioned and height of top/bottom positioned flyouts is now determined by the content
* Remove `px` from Disconnect icon
* Fix checksum creation

---

## Version 7.2.0
Released on December 15, 2022
### What’s new
* Made icons available for dark mode
* groupui-search-field, groupui-multiselect, groupui-input, groupui-date-picker, groupui-select, groupui-textarea: add property `show-status-icon` to show status icons for success, danger, warning severities
* groupui-textarea: Added a `min-height` to the textarea to avoid it being crunshed together in some cases.
* Added missing colors to both light and dark theme of VWAG
* groupui-simple-pagination: New component as an alternative to the more complex `groupui-pagination`
* groupui-textarea: New event `groupuiInput`. Fires on input. Use `event.target.value` to get the current text.
* groupui-link: Added `secondary` variant for a more subtle appearance.
* groupui-link: Added `weight` property.
### What’s improved
* groupui-action-area, groupui-side-navigation, groupui-top-navigation: Changed keyboard handling. Now uses tab keys to cycle through items.
* groupui-icon: Icons are now cached locally. Same icons won't get fetched multiple times.
* groupui-input: Improved forms handling
### What’s fixed
* groupui-search-field: Fixed losing focus on clear icon click
* groupui-textarea: Fixed setting `value` not triggering the auto-expand functionality.
* groupui-search-field, groupui-select, groupui-multiselect: Fixed `max-height` having no effect.
* groupui-search-field: Fixed popover padding and input padding for porschePlant themes
* groupui-search-field: Property `suggestions-max-height` now deprecated. Use `max-height`instead.
* groupui-search-field: Fixed selecting the same suggestion again not updating value

---

## Version 7.1.0
Released on November 22, 2022
### What’s new
* groupui-chip: Add porschePlant themes
* groupui-textarea: Extend validation
* groupui-search-field: Added `hideSearchIcon` property for porschePlant themes
* groupui-textarea: Add `max-rows` property
* groupui-select: Improved forms handling
* groupui-multiselect: Improved forms handling
* groupui-button: Added download property
* groupui-checkbox: Extend validation
* groupui-search-field: Added `hideSearchIcon` property for porschePlant themes
* groupui-chip: Renamed to `groupui-chip-porsche`
* groupui-chip: New component
* groupui-date-picker: Added keyboard handling for opening and closing the selection
* groupui-switch: Add switch sizes `l` and `xl` for porschePlant themes
* groupui-avatar: Add new sizes `xs` and `xl`. CAUTION: old l = xl, m = l, s = m now
* groupui-file-upload-preview: Add "beta" version of new file upload / dropzone component for porschePlant themes
* groupui-popover: Added more placement options. Popover now changes position if configured placement does not fit on screen.
* Added Templates for Cards
### What’s improved
* groupui-text: Change hex code for `text-enabled-darken` for porschePlant themes
* groupui-chip: Add size classes and layout changes for porschePlant themes
* groupui-breadcrumb-dropdown: Layout changes for dropdown for porschePlant themes
* groupui-breadcrumb-dropdown: Change active color for porschePlant light theme
* groupui-button-group-button: Change hover color for porschePlant light theme
* groupui-multiselect: Change join string to `,`
* groupui-multiselect: Change option padding for porschePlant themes
* groupui-checkbox: Change checkbox severities hover effect for porschePlant dark theme
### What’s fixed
* groupui-chip-porsche: Prevent onClick triggering also on `groupuiRemoveClicked`
* groupui-search-field: Back to 100% width.
* groupui-date-picker: Fixed the issue with opening and closing the date picker on the backdrop.
* groupui-accordion: Fix sizes, headline styles and chevron positioning for porschePlant themes
* groupui-input: Fix inconsistent heights between different input types and fix size `s` for porschePlant themes
* Fixed groupui-react boolean attributes
* groupui-date-picker: Fix problem with validation on different localizations and date formats
* groupui-pagination: Replace wrong arrow icon with chevron icon
* groupui-breadcrumbs: Fix focus issue on placeholder
* groupui-multiselect: Fix tab behavior on expanded options
* groupui-radio-button : Disable porschePlant radio button focus within state and fix margin
* groupui-button: Fix button was not tabable in modal
* groupui-modal: Fix modal border color porschePlant light theme
* groupui-modal: Fix possible outside tab on open modal
* groupui-top-navigation-item: Fix porschePlant active state background color
* groupui-step: Fix porschePlantDark step active state foreground color
* groupui-search-suggestion: Fix porschePlant search suggestion hover effect
* groupui-checkbox: Fix porschePlant checkbox hover effect for disabled & pure state
* groupui-button: Fix button with link text decoration for porschePlant themes
* groupui-multiselect-option: Fix porschePlant multiselect option background
* groupui-dropdown, groupui-multiselect: Fix porschePlant dropdown and multiselect description margin
* groupui-select: Fix porschePlant select focus, disabled and overflow styling

---

## Version 7.0.2
Released on October 10, 2022
### What’s improved
* We’ve added a watch handler for `href attribute` to update the `href attribute` of the anchor element when the `href attribute` changes.
* We’ve added `disableContentPadding` property for porschePlant themes in **groupui-accordion.**
### What’s changed
* We’ve removed an unnecessary `div element` in **groupui-headline.**
### What’s fixed
* Fixes an issue where `fullwidth` had no effect when a url was set in **groupui-button.**
* Fixes an issue with the validation simple values in **groupui-date-picker.**
* Fixes an issue so that the icon no more overlaps other components in **groupui-date-picker.**
* Fixes an issue where the cursor appeared on hover in **groupui-item.**

---

## Version 7.0.1
Released on October 06, 2022
### What’s improved
* We’ve renamed the Dropdown component page to Select.
* We’ve optimized single date and range validation in **groupui-date-picker.**
### What’s changed
* Property max-width now behaves like it’s CSS equivalent in **groupui-modal.**
* We’ve added property `overflow` to define custom overflow behavior in **groupui-modal.**
* We’ve added a property `directlyOpen` which opens the search field on focus even if no value is entered in **groupui-search-field.**
* Components again span to container width in **groupui-search-field, groupui-dropdown, groupui-select.**
### What’s fixed
* @popperjs/core moved from `devDependency` to `dependency` to prevent build errors.
* Selecting an item with enter does no longer remove visible focus in **side-navigation.**
* Fixes an issue when a double click was needed to open the calendar in **groupui-date-picker.**
* Fixes background color of the input in **groupui-select.**
* Fixes the used icon (chevron instead of arrow) in **groupui-select.**

---

## Version 7.0.0
Released on September 28, 2022
### What’s new
* We’ve added a type banner to **groupui-notification.**
* We’ve added **groupui-select** component to replace dropdown with some API changes. `groupui-dropdown` is now deprecated.
* We’ve added a new property `directlyOpen`. If set to true the suggestions always show on focus even if no value is applied to the input in **groupui-search-field.**
### What’s improved
* Design adjustments in **groupui-dropdown.**
* Design adjustments in **groupui-multiselect.**
* Design adjustments in **groupui-search-fieldb.**
* Design adjustments in **groupui-select.**
### What’s changed
* We’ve moved repository and artifacts to **VWS2.0.**
* We’ve removed deprecated property `headline` in **groupui-accordion.**
* We’ve removed deprecated date picker in **groupui-date-picker.**
* We’ve renamed component **groupui-date-picker-new** to **groupui-date-picker.**
* We’ve removed deprecated **groupui-date-range-picker** component.
* We’ve added deprecation warning to **groupui-dropdown.** Use `groupui-select` instead.
* We’ve removed deprecated property `immutable` in **groupui-input.**
* We’ve removed deprecated properties `suggestions` and `suggestionsMaxHeight` in **groupui-input.**
* We’ve removed deprecated event `groupuiSuggestionSelected` in **groupui-input.**
* We’ve removed deprecated property `label` and `description` in **groupui-multiselect.**
* We’ve removed deprecated component in **groupui-navigation-item.**
* We’ve removed deprecated event `pageChange` **groupui-pagination.**
* We’ve removed deprecated property `label` and `description` in **groupui-select.**
* We’ve removed deprecated property `headline` in **groupui-side-navigation-group.**
* We’ve removed deprecated property `equal-width` in **groupui-tabs.**
* We’ve removed deprecated property `immutable` in **groupui-textarea.**

---

## Previous releases

---

**Version 6.13.1 – August 31, 2022**
Fixed:
* groupui-action-area : Fixed incorrect positioning inside a header bar
* groupui-dropdown, groupui-searchfield , groupui-multiselect, groupui-groupui-side-navigation-group : use correct icon after renaming
* groupui-table : fix z-index for sticky table header
* groupui-multiselect : design adjustments
Changed:
* groupui-flyout : flyout has a dynamic width
**Version 6.13.0 – August 22, 2022**
Added:
* groupui-grid-col : add offset properties for each viewport (e.g. offset-s, offset-l)
* groupui-flyout : new flyout component
* groupui-slider : add styles for porschePlant themes
* groupui-range-slider : add styles for porschePlant themes
* groupui-action-area-item: add new generic action item for action area
* groupui-tooltip : added property sticky. if set, the tooltip stays open until the x is clicked
* groupui-stepper-horizontal, groupui-step : added horizontal stepper for porschePlant themes
* groupui-avatar : add size 'xl' to porschePlant themes; adjust colors and font styles
* groupui-date-picker-new : add no-validation property
Changed:
* groupui-pagination : change text color for porschePlantDark theme
* groupui-date-picker-new : change and optimize validation
Fixed:
* groupui-checkbox : fix light mode hover state for indeterminate checkbox
* groupui-tooltip : fix tooltip shadow for porschePlant themes
* groupui-input : fix porschePlant input icon alignment
* groupui-table : fix box-sizing for porschePlant themes
* groupui-action-area-popover: fix bug where sticky table headers are positioned on top of action area
* groupui-search-field : fix disabled property
* groupui-search-field : add no-validation property to fix manual set severity lost on blur
* groupui-input : fix porschePlant input box sizing
* groupui-card : remove overflow:hidden
* groupui-table: fix z-index problem on table header
**Version 6.12.0 – July 18, 2022**
Added:
* groupui-search-suggestion : add slot for custom icons or html elements
* groupui-stepper-vertical, groupui-stepper-horizontal : new stepper components
* groupui-avatar : add styles for porschePlant themes
* groupui-tabs : add property showControls to display the tabs overlapping controls for porschePlant themes
* groupui-action-area, groupui-action-area-popover-item : new components to display action items inside a top-navigation
* groupui-pagination : add pagination for porschePlant themes
* groupui-tag : add property to customize the tag background, text and border-color for porschePlant themes
* groupui-button, groupui-button-group-button, groupui-switch, groupui-checkbox, groupui-radio-button, groupui-input, groupui-tooltip : added animations for porschePlant themes
* Added porschePlant animation tokens (duration and easing) as scss and css variables
* groupui-loading-spinner-outline : new outline loading spinner component for porschePlant themes
Fixed:
* groupui-accordion : fix input space bug
* groupui-checkbox : fix porschePlant themes keyboard interaction and pressed state
* groupui-progressbar : fix resize observer initialization
* groupui-avatar : fix height adjustment in certain flex surroundings
* groupui-table : fix elements on top of sticky header when scrolling
**Version 6.11.2 – June 29, 2022**
Fixed:
* groupui-marque : aria label nullable. fixes Angular wrapper bug
**Version 6.11.1 – June 28, 2022**
Added:
* groupui-avatar : icon size (porschePlant themes)
* groupui-progress-bar : calculate animation speed onResize for porschePlant themes
* groupui-side-navigation-item : now supports icon prop for porschePlant themes
* groupui-slider : add property valueTemplate to display the current value
* groupui-slider : add property showDragTooltip to display the current value above slider thumb
* groupui-range-slider : add property valueTemplate to display the current values
* groupui-range-slider : add property showDragTooltip to display the current values above slider thumbs
* groupui-headline : change default color
* groupui-text : change default color
Changed:
* groupui-side-navigation-group : set icon margin-right from toRem(12) to toRem(8) for porschePlant themes
* groupui-marque : implement new size l and resized s&m for porschePlant themes
* groupui-dropdown : add deprecation warning to index property
Fixed:
* groupui-marque : fix marque component not available in angular
* groupui-marque : fix size 'l' not working for porschePlant themes
* groupui-dropdown : fix dropdown-option not in sync with selected option when you change its content
* components with label slot and severity don't colorize label in case of set severity
**Version 6.11.0 – June 9, 2022**
Added:
* groupui-pagination : add groupuiPageChange event - pageChange event is deprecated now!
* groupui-card : highlight bars on both left and right side
* groupui-marque : add new marque component for porschePlant themes
* groupui-top-navigation-item : add icon property for porschePlant themes
* groupui-slider : add showTickMarks property to show tick marks when step specified
* groupui-progress-bar : new component (initial for porschePlant themes)
* groupui-progress-bar-item : new component (initial for porschePlant themes)
* groupui-range-slider : new component for vwag theme
* groupui-date-picker-new : add property to show week numbers
* groupui-date-picker-new : add property to enable date range selection mode
* groupui-date-picker-new : added i18n which defaults to browser language
* groupui-date-picker-new : add property locale to overwrite browser language
* groupui-date-picker-new : add property to define custom date format
* groupui-date-picker-new : add property to define placeholder
* groupui-date-picker-new : add property to make weekends unselectable
* groupui-date-picker-new : add properties to define min and max selectable date
* groupui-input, groupui-textarea : visually separate typing info and description
* groupui-input : add minLength property
* groupui-textarea : remove focus on disabled
* groupui-search-field : added new event groupuiInputFocused when search field is focused
* groupui-search-field : added new method clear to clear search field programmatically
* groupui-select : new component with updated design that replaces groupui-dropdown in the long run
Changed:
* groupui-tooltip : remove variant 'accent' from porschePlant themes. Please use 'primary' or 'secondary' instead.
Fixed:
* groupui-input,groupui-textarea : fix autofocus within grid component
* groupui-dropdown : fix selectedOption is null error
* groupui-input : fix typing info template for porschePlant themes
* groupui-slider : fix floating point rounding errors
* groupui-input : fix icon sizes for porschePlant input
* groupui-button : fix button in size s and button alignment for porschePlant themes
* groupui-multiselect : fix multiselect checkbox size for porschePlant themes
* groupui-accordion : fix icon theme for porschePlant themes
* groupui-searchfield : fix border sizing for porschePlant themes and substring highlighting
* groupui-searchfield : fix gap between input and suggestions for porschePlant themes
* groupui-date-picker : fix calendar icon placement
* groupui-top-navigation-item : fix icon padding for porschePlant themes
* groupui-date-picker-new : fix datepicker popup not positioned correctly in some cases
* groupui-search-field : fix clear icon position when search icon hidden
**Version 6.10.0 – May 11, 2022**
Added:
* groupui-text : add size 'body-3' for porschePlant themes
* groupui-tag : add size 'xs' for porschePlant themes
* groupui-input : add size 's' for porschePlant themes
* groupui-button : update size 's' to use smaller typeface for porschePlant themes
* groupui-switch : add size property, add new size 's' for porschePlant themes
* groupui-checkbox : added sizes 's', 'm' and 'l'(default) for porschePlant themes
* groupui-radio-button : added sizes 's', 'm' and 'l'(default) for porschePlant themes
* groupui-accordion : added sizes 's', 'm'(default) and 'l' for porschePlant themes
* groupui-tabs : added sizes 's', 'm', 'l'(default) and 'xl' for porschePlant themes
* groupui-checkbox : Design adjustments for checkbox in vwag theme
* groupui-multiselect : add size 's' for porschePlant themes
* groupui-dropdown : add size 's' for porschePlant themes
* groupui-search-field : add porschePlant themes
* Added downward compatibility for React Wrapper up until React 17.0.1
* Added event groupuiDidLoad to every component when component finished loading
Fixed:
* groupui-table : Fix styles not updated after adding/removing rows in striped tables
* groupui-radio-group : fixed gap for porschePlant themes
**Version 6.9.1 – May 5, 2022**
Fixed:
* Fix React Dependency Version
**Version 6.9.0 – May 4, 2022**
Added:
* groupui-card : add elevation level 1 - remove level 0
* groupui-tab : add new property disabledDescription
* groupui-tabs : add scroll-snapping and overflow behaviour for porschePlant theme
* groupui-button : fix icon-only sizing for porschePlant
* groupui-radio-button, groupui-checkbox: Add Mouseover and severities focus behavior
* groupui-date-picker-new: (WIP) Add new DatePicker Component which will replace the old one sometime
* groupui-loading-spinner: added porschePlant theme
* groupui-slider: new component
* groupui-switch : add success state for porschePlant
* Added support for React v.18.
* Added data colors for porschePlant theme.
* Add hover transitions to all components
Fixed:
* groupui-button-group-button : fix both light and dark mode selected state, fix dark mode border for porschePlant
* groupui-radio-group : fix radio group margin/spacing for porschePlant
* groupui-table : fix porschePlant table header cursor
* groupui-multiselect: fix selectedOptions when set via props
* groupui-multiselect: fix options font size for porschePlant theme
* groupui-button: fix button icon paddings for porschePlant
* groupui-tabs : fix change in disabled not being displayed
* groupui-multiselect : fix internal change event not contained
* groupui-tab : fix cursor for non disabled tabs
* Fixed some components not properly exported for Angular
**Version 6.8.0 – March 28, 2022**
Added:
* Disabled components no longer show a placeholder for theme VWAG
* Added color and elevation basics for new theme vwagDark
* groupui-chip : new component for Porsche themes
* groupui-link : add inverted and quiet properties
* groupui-radio-button-group, groupui-checkbox: Add severities
* groupui-avatar : new component
* groupui-side-navigation-group : headline property now deprecated. Use provided slot instead.
* groupui-tab: allow html content in name property
* groupui-divider : added options for dashed and vertical
* groupui-multiselect : added summary property for a variable selected options format
* groupui-breadcrumbs : add property 'breakpoint' to define threshold for expanding into dropdown menu.
* groupui-item : add property 'indentation' to add a horizontal padding to the content
* groupui-top-navigation : add property 'embedded' for placing the navigation inside of other containers
* groupui-modal : add ability to close modal by pressing escape key
* groupui-button-group : added change event with event details
Fixed:
* groupui-button : adjust sizings
* groupui-button : Focus disappear on disable
* groupui-multiselect : shows disabled label and description on disabled component
* groupui-modal: Content behind modal not scrollable and focusable anymore
* groupui-multiselect : improved event and native forms handling
* groupui-notification: fix notification icon for porschePlant
* groupui-dropdown: restores placeholder after resetting
* groupui-side-navigation: fix focus handling
**Version 6.7.0 – March 2, 2022**
Added:
* groupui-divider : added intensities for porschePlant
* groupui-pagination : Add possibility to define text templates
* groupui-button : new property autofocus
* porschePlant : z-index management via css variables
* groupui-button, groupui-input, groupui-textarea, groupui-dropdown, groupui-multiselect , groupui-radio-button, groupui-button-group-button, groupui-checkbox, groupui-switch: add autofocus property
* groupui-top-navigation : added style options for equal width and no padding items for vwag
* Added CSS variables for font sizes used in VWAG theme:
* groupui-vwag-font-size-body-1
* groupui-vwag-font-size-body-2
* groupui-vwag-font-size-caption
* groupui-vwag-font-size-label
Fixed:
* groupui-multiselect, groupui-search-field, dropdown, groupui-radio-button, \* groupui-switch\* : fix Tab and Shift+Tab keyboard handling
* groupui-tabs : Fixed focus and minor design adjustments for VWAG
* groupui-tabs : Fixed all disabled tabs throwing error
* groupui-tabs : New property: no-padding. Tabs use spacing instead of padding
* groupui-tabs : Prevent line break in tab header
* groupui-tab : Fixed changed name not showing in tab header
* groupui-modal : Fix close button in modal for porschePlant
* groupui-code-snippet : Fix tabs z-index for porschePlant
