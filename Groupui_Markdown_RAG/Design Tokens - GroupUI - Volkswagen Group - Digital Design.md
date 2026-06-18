---
title: Design Tokens
source: GroupUI
category: tokens
type: documentation
topics:
  - tokens
last_modified: Wed, 11. Feb 2026 12:27
---

# Design Tokens

---

Here you will find an overview of our releases with all the updates about our Design Tokens.

---

## Version 2.12.0
Released on February 11, 2026
### What's new
* Added groupui-sys-color-neutral-basic-default-inverse
* Added groupui-sys-color-information-basic-default-inverse
* Added groupui-sys-color-success-basic-default-inverse
* Added groupui-sys-color-warning-basic-default-inverse
* Added groupui-sys-color-danger-basic-default-inverse

---

## Version 2.11.0
Released on September 29 ,2025
### What's changed
* Adjusted the color value for `--groupui-vwgroup-ref-color-grey-950`

---

## Version 2.10.0
Released on August 11,2025
### What's new
* Added new system tokens (VWGROUP/VWAG):
* `sys.color.action.quiet-subtle.default`
  `sys.color.action.quiet-subtle.hover`
  `sys.color.action.quiet-subtle.pressed`
  `sys.color.action.quiet-subtle.disabled`
### What's changed
* Changed reference value of `sys.color.success.basic.default` / `ref.color.system-green.800` from `#006F23` to `#0A7A2D` to fix color contrast ratio issue of success icon on `sys.color.background.float`

---

## Version 2.9.0
Released on June 25, 2025
### What's new
* Added new reference tokens (VWGROUP):
  `ref.color.vivid-green.600-03 / #00807508
  ref.color.vivid-green.600-05 / #0080750D`
* Added new sytem tokens (VWGROUP/VWAG):
  `sys.color.on-action.quiet.default`
### What's changed
* Remapped system tokens (VWGROUP light mode):`sys.color.action.subtle.hover / color.vivid-green.600-03
  sys.color.action.subtle.pressed / color.vivid-green.600-05
  sys.color.navigation.unselected.subtle.hover / color.vivid-green.600-03
  sys.color.navigation.unselected.subtle.pressed / color.vivid-green.600-05
  sys.color.navigation.selected.subtle.hover / color.vivid-green.600-03
  sys.color.navigation.selected.subtle.pressed / color.vivid-green.600-05`

---

## Version 2.8.1
Released on May 27, 2025
### What's new
* New reference tokens (VWGROUP/ VWAG)
  `ref.font-size.15 / 15px
  ref.font-size.17 / 17px
  ref.letter-spacing.18 / 1.8px`
* New system tokens (VWGROUP/ VWAG)
  `sys.font-size.375 / ref.font-size.15
  sys.font-size.425 / ref.font-size.17
  sys.letter-spacing.loose / ref.letter-spacing.18`
### What's fixed
* Remapped system token(s) (VWAG Light mode)
  `color.on-success.basic.default / color.white.0`

---

## Version 2.8.0
Released on May 22, 2025
### What's changed
* Added new reference tokens (VWGROUP):
  `color.system-orange.1100 / #B75E00
  color.system-orange.1200 / #AB5800
  color.system-orange-1300 / #994F00
  color.system-orange.100-03 / #F9E6CB08
  color.system-orange.100-06 / #F9E6CB0F
  color.vivid-green.450 / #099C91
  color.vivid-green.480 / #0F9489
  color.vivid-green.400-15 / #37A99E26
  color.system-red.500-05 / #F2595A0D`
* Remapped system tokens (VWGROUP light mode):`color.danger.basic.default / color.system-red.800
  color.warning.basic.hover / color.system-red.900
  color.warning.basic.pressed / color.system-red.1000
  color.danger.subtle.hover / color.system-red.700-05
  color.danger.subtle.presed / color.system-red.700-10
  color.success.basic.default / system-green.800
  color.success.basic.hover / system-green.900
  color.success.basic.pressed / system-green.1000
  color.warning.basic.default / color.system-orange.1100
  color.warning.basic.hover / color.system-orange.1200
  color.warning.basic.pressed / color.system-orange-1300
  color.on-warning.basic.default / color.pure-white
  color.warning.subtle.hover / color.system-orange.100-03
  color.warning.subtle.pressed / color.system-orange.100-06
  color.text.weaker / color.grey.700
  color.action.muted.default / color.grey.700
  color.action.muted.hover / color.grey.800
  color.action.muted.pressed / color.grey.900`
* Remapped system tokens (VWGROUP dark mode):`color.action.basic.hover / color.vivid-green.450
  color.action.basic.pressed / color.vivid-green.480
  color.action.subtle.pressed / color.vivid-green.400-15
  color.on-danger.basic.default / color.black
  color.danger.subtle.hover / color.system-red.500-05
  color.danger.subtle.pressed /color.system-red.500-10
  color.neutral.basic.default / color.grey.300
  color.neutral.basic.hover / color.grey.400
  color.neutral.basic.pressed / color.grey.500
  color.action.muted.default / color.grey.300
  color.action.muted.hover / color.grey.400
  color.action.muted.pressed / color.grey.500`
* Added new reference tokens (VWAG):
  `color.signal-red.800-04 / #DA0C1F0A
  color.signal-red.800-08 / #DA0C1F14
  color.signal-green.1100 / #395F26
  color.signal-green.1200 / #305020
  color.signal-orange.1100 / #A96700
  color.signal-orange.1200 / #8F5700
  color.signal-orange.1300 / #754700
  color.signal-orange.700-01 / #FEA92503
  color.signal-red.500-01 / #E76E7903
  color.signal-red.500-02 / #E76E7905
  color.signal-green.850 / #66A14A
  color.signal-green.700-14 / #7AB55E24`
* Remapped system tokens (VWAG light mode):
  `color.danger.subtle.hover / color.signal-red.800-04
  color.danger.subtle.pressed / color.signal-red.800-08
  color.success.basic.default / color.signal-green.1000
  color.success.basic.hover / color.signal-green.1100
  color.success.basic.pressed / color.signal-green.1200
  color.warning.basic.default / color.signal-orange.1100
  color.warning.basic.hover / color.signal-orange.1200
  color.warning.basic.pressed / color.signal-orange.1300
  color.on-warning.basic.default / color.white.0
  color.warning.subtle.hover / color.signal-orange.700-01
  color.warning.subtle.pressed / color.signal-orange.700-01
  color.text.weaker / color.grey.700
  color.action.muted.default / color.grey.700
  color.action.muted.hover / color.grey.800
  color.action.muted.pressed / color.grey.900
  color.link.secondary.unvisited.pressed / color.grey.1000-80
  color.link.secondary.visited.pressed / color.violet.500`
* Remapped system tokens (VWAG dark mode):`color.on-danger.basic.default / color.black
  color.danger.subtle.hover / color.signal-red.500-01
  color.danger.subtle.pressed / color.signal-red.500-02
  color.success.basic.pressed / color.signal-green.850
  color.success.subtle.pressed / color.signal-green.700-14
  color.action.muted.default / color.grey.300
  color.action.muted.hover / color.grey.400
  color.action.muted.pressed / color.grey.500`
### What's fixed
* Fixed incorrect HEX value on ref.color.violet.800 from #CACDD2 to #5915B8 (VWAG)

---

## Version 2.7.0
Released on April 29, 2025
### What's new
* Added descriptions to all tokens
* Added tokens `sys.color.navigation.selected.basic.disabled`, `sys.color.navigation.selected.basic.disabled-inverse`, `sys.color.navigation.selected.subtle.disabled`, `sys.color.navigation.selected.subtle.disabled-inverse`
### What's changed
* changed reference value of `sys.color.background.backdrop` from `ref.color.deep-space-blue.900-80` to `ref.color.black-60` in dark mode (VW Group)
* `sys.color.line.weak` and `sys.color.card.boder.level-2` changed from `ref.color.grey.950` to `ref.color.grey.900` in dark mode (VW Group)
* changed reference value of `sys.color.shadow.8` from `ref.color.black-60` to `ref.color.black-80` in dark mode (VW Group)
* changed all reference values of `sys.color.hero` to `ref.color.pure-white` as there is no electric-neon used in dark mode (VW Group)
* adjusted all reference values of `sys.color.navigation` from `ref.color.electric-neon` or `ref.color.vivid-green` to `ref.color.pure-white` in dark mode (VW Group)
* changed reference value of `sys.color.action.silent.default` to `ref.color.pure-white` in dark mode (VW Group)

---

## Version 2.6.0
Released on March 05.2025
### What's new
* added tokens `color.light.basic.default-inverse`, `color.light.basic.hover-inverse`, `color.light.basic.pressed-inverse`, `color.light.subtle.default-inverse`, `color.light.subtle.hover-inverse`, `color.light.subtle.pressed-inverse`, `color.on-light.basic.default-inverse`, `color.on-light.subtle.default-inverse`

---

## Version 2.5.0
Released on 29 January, 2025
### What's new
* added token `z-index.fab`
* added `border-width.l`, `border-width.xl`, `border-width.xxl` and `border-width.xxxl`
* added `duration.spinner`

---

## Version 2.4.0
Released on November 22, 2024
### What's new
* added tokens `color.accent.subtle.default.01` - `color.accent.subtle.default.08`
* added `color.neutral.weak.default`
* added `color.background.float`
### What's changed
* BREAKING CHANGE: Added 'state' to accent color token names e.g.
* `color.accent.basic.default.01` instead of `color.accent.basic.01`
* `color.accent.basic.default.02` instead of `color.accent.basic.02`
* `color.accent.basic.default.03` instead of `color.accent.basic.03`
* `color.accent.basic.default.04` instead of `color.accent.basic.04`
* `color.accent.basic.default.05` instead of `color.accent.basic.05`
* `color.accent.basic.default.06` instead of `color.accent.basic.06`
* `color.accent.basic.default.07` instead of `color.accent.basic.07`
* `color.accent.basic.default.08` instead of `color.accent.basic.08`
* Changed values of `ref.color.vivid-green.100`, `ref.color.vivid-green.200`, and `ref.color.vivid-green.300`
* Changed values of `ref.color.deep-space-blue.700` - `.100` and added `ref.color.deep-space-blue.50`
* Changed value of `sys.color.navigation.unselected.basic.default` (VWGROUP only)

---

## Version 2.3.0
Released on October 22, 2024
### What’s new
* Added `shadow.card.level-1.default`, `shadow.card.level-1.hover`, `shadow.card.level-2.default`, `shadow.card.level-2.hover`, `shadow.card.level-3.default`, `shadow.card.level-3.hover`
* Added `border-width.card.level-2`
* Added `border-radius.full`
* Added `spacing.8000`, `spacing.16000`, `spacing.1600`
* Added navigation tokens for Header, Side Navigation and Top Navigation components: `color.navigation.unselected.basic.default-inverse`, `color.navigation.unselected.basic.hover-inverse`, `color.navigation.unselected.basic.pressed-inverse`, `color.navigation.unselected.basic.disabled-inverse`,`color.navigation.unselected.basic.default`, `color.navigation.unselected.basic.hover`, `color.navigation.unselected.basic.pressed`, `color.navigation.unselected.basic.disabled`, `color.navigation.unselected.subtle.pressed-inverse`, `color.navigation.unselected.subtle.default-inverse`, `color.navigation.unselected.subtle.hover-inverse`, `color.navigation.unselected.subtle.disabled-inverse`, `color.navigation.unselected.subtle.default`, `color.navigation.unselected.subtle.hover`, `color.navigation.unselected.subtle.pressed`, `color.navigation.unselected.subtle.disabled`, `color.navigation.selected.basic.hover-inverse`, `color.navigation.selected.basic.pressed-inverse`, `color.navigation.selected.basic.default`, `color.navigation.selected.basic.hover`, `color.navigation.selected.basic.pressed`, `color.navigation.selected.subtle.default-inverse`, `color.navigation.selected.subtle.hover-inverse`, `color.navigation.selected.subtle.pressed-inverse`, `color.navigation.selected.subtle.default`, `color.navigation.selected.subtle.hover`, `color.navigation.selected.subtle.pressed`, `border-width.navigation`, `shadow.navigation`
* Added `color.action.quiet.disabled-inverse`
* Added `color.background.stripe` indicating color for alternating table row
* Added `color.card.border.level-2` and `color.card.border.level-2-inverse`
### What's changed
* Updated `shadow.card.flat` and `shadow.card.elevated`

---

## Version 2.2.0
Released on September 03, 2024
### What’s new
* Added `color.action.silent.default-inverse`
* Added `font-size.250` and `font-size.200`
* Added shadow tokens `shadow.navigation` `shadow.tooltip` `shadow.card.flat` `shadow.card.elevated` `shadow.toast` `shadow.popover` `shadow.modal`
### What's changed
* fixed reference value of `color.action.silent.disabled`
* fixed reference value of `color.background.inform` in dark mode

---

## Version 2.1.0
Released on August 06, 2024
### What’s new
* Added Accent colors system tokens eg. `sys.color.accent.basic.01, sys.color.on-accent.basic.01`
### What's changed
* Updated Information color tokens reference values eg. `sys.color.information.basic.default`
* Updated reference values of `color.on-warning.basic.default` and `color.on-success.basic.default`
* Updated reference values of `color.danger`, `color.success`, `color.warning` in dark mode and `color.neutral` in light and dark mode
* Updated hex value of `color.grey.950` for VWGroup only

---

## Version 2.0.0
Released on June 06, 2024 (official release)
Breaking Changes:
* because of the renaming of the Tokens, the users of the old names will have to migrate to the new naming
### What's changed
* Reworked and simplified naming structure of the Design Tokens
* Removed unnecessary tokens

---

## Version 1.1.0
Released on May 22, 2024 (inofficial release)
### What's changed
* Reworked and simplified naming structure of the Design Tokens

---

## Version 1.0.1 - 1.0.9
Released between March and May, 2024
### What's new
* Added multiple missing tokens
## Version 1.0.0
Released on March 12, 2024
### What’s new
* First Design Token release
