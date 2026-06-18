---
title: About Design Tokens
source: GroupUI
category: tokens
type: documentation
topics:
  - accessibility
  - tokens
last_modified: Mon, 08. Sep 2025 07:18
---

# About Design Tokens

---

## Introduction
Design tokens are the building blocks of a design system. They ensure consistency by being used across all our design and code components. We translated all styles into design tokens and will offer them as an addition for you to use GroupUI in a more flexible way.
Design tokens are independent from any technology and offer the flexibility you need to develop your own features, solutions, or components, by still following style and interaction guidelines of the Volkswagen group design.

---

## Design tokens
Design tokens are a methodology to express and store design decisions. A token points to style values like colors, fonts, or measurements while using a self-explanatory name. These tokens contain all the design information needed to create a unified user interface for applications and websites, independent from the platform or technology.
Using color as an example

---

## Layers
In our design system, we offer two kinds of token layers: reference and system tokens.

---

### Reference tokens
Reference tokens point to style values, such as HEX codes for color, being represented by a context-independent name. These tokens are serving as a reference for the system tokens.

---

### System tokens
A system token assigns meaning to a reference token and therefore describes the purpose a reference token has in the UI. One system token can point to different reference tokens depending on the context, such as a light or dark mode or in-page themes.

---

## Categories
Our tokens are based on the [W3C token](https://design-tokens.github.io/community-group/format/#types) [format](https://design-tokens.github.io/community-group/format/#types) and every token has a W3C type, which is a predefined categorization that is applied to the value of the token. The color type applies to color tokens, while the dimension token type applies to any dimension in the UI, such as a position, width, height, radius, or thickness. We currently do not include the [W3C](https://design-tokens.github.io/community-group/format/#types) token type in the token name, our design tokens contain a GroupUI token category:
| GroupUI Token Category | W3C Token Type |
| --- | --- |
| Opacity | Number |
| Z-Index | Number |
| Line-height | Number |
| Color | Color |
| Media query | Dimension |
| Border width | Dimension |
| Border radius | Dimension |
| Spacing | Dimension |
| Icon size | Dimension |
| Font size | Dimension |
| Duration | Duration |
| Easing | Cubic bezier |
| Font family | Font family |
| Font weight | Font weight |
| Shadow | Shadow |
| Stroke style | Stroke style |

---

## Naming
Our token naming convention is based on [best practice](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676) and borrows from other benchmark design systems.
Structure of token names and subname examples.
Token names are composed of the naming levels below. When a level is unnecessary it is excluded from the token name.
* **system** - the design system underpinning a common token language. In our case this is always `groupui`
* **brand** - the brand which the tokens describe eg. `vwgroup` or `vwag`
* **layer** - the token layer, either reference or system: `ref` or `sys`
* **category** - defines the purpose of the token eg. `color`, `border-radius`, `font-size`. All tokens must contain a category name.
* **concept** - concept applies only to system tokens. A concept is an 'idea' describing the function or context-of-use of the element eg. `action`, `danger`, `background`, `text`.
* **property** - a property is a single visible element in the UI. Currently not used by us.
* **variant** - variations based on roles eg. `basic`, `subtle` for buttons, checkboxes, radio buttons, `weak` for notifications, `base`, `canvas`, `inform` for backgrounds.
* **state** - indicates the state of an interactive element eg `default`, `hover`, `pressed` , `disabled` for a button
* **scale** - indicates size of an element eg. `s`, `m`, `l` or represents a scale for color shade ramps eg. `600`
* **subscale** - this level is used only when an extra modifier is required eg. the opacity of a color value of 10% is `10`
Example naming structure of tokens.
The long form of our tokens indicate the design system, brand and token type at the start of the name:
`groupui.vwgroup.sys.color.action.basic.default`
When the system (`groupui`) and the brand (`vwgroup`) are already declared elsewhere then the token is abbreviated to:
`sys.color.action.basic.default`
When the token layer (`ref` or `sys`) is already declared elsewhere (eg. Tokenlab) then the token is abbreviated to:
`color.action.basic.default`
A token always has a W3C ‘type’, which is currently not part of the token name to simplify our token naming and experience using them. As the first part of the name after declaring the token layer (`ref`/`sys`) the token category is shown, eg. `color`, `icon-size`, `font-family`.
`sys.color.action.basic.default`
`sys.icon-size.m`
`sys.font-family.primary`
Names are designed to be short as possible but as long as necessary to describe the role of the token. The design system ideally states where a token is to be applied in a component.
“What is the radius of a button?”
`sys.border-radius.xl`
“What is the color of the background for a primary action element eg. button in hover?” - `sys.color.action.basic.hover`
“What is the color of the foreground (icon or text) for a default primary action element?” - `sys.color.on-action.basic.default`

---

## Formats
Our goal is for applications and websites to be able to use our token platform and technology independently. For this purpose, all tokens created by us are made available in the different formats for the platforms and technologies.
* CSS Custom Properties
* ...
Note
Further formats are currently being planned and will be evaluated by us.

---

## Tooling
In order to administer the design tokens created for the Volkswagen Group Design in the best possible way and to deliver them to the various platforms, we have developed the Tokenlab.
