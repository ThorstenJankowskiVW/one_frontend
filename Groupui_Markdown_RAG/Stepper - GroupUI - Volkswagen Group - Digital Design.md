---
title: Stepper
source: GroupUI
category: component
type: documentation
topics:
  - web-component
last_modified: Thu, 29. Jan 2026 15:49
---

# Stepper

---

## Usage
Steppers display progress by a sequence of numbers or icons. They indicate the completed and remaining progress and can be used for navigation.

---

### Stepper Horizontal - Live demo
```html
<div class="stepper-horizontal-live-demo container-border">
<groupui-stepper-horizontal>
<groupui-step done="">Shopping Cart</groupui-step>
<groupui-step active="">Payment Method</groupui-step>
<groupui-step>Billing Address</groupui-step>
<groupui-step>Complete Order</groupui-step>
</groupui-stepper-horizontal>
</div>

```

---

### Stepper Horizontal - Icons
Horizontal steppers are used for wider screen sizes. They are great to indicate steps which depend on each other.
```html
<div class="stepper-horizontal-icons container-border">
<groupui-stepper-horizontal>
<groupui-step done="">Shopping Cart</groupui-step>
<groupui-step active="" icon="credit-card-24">Payment Method</groupui-step>
<groupui-step icon="user-24">Billing Address</groupui-step>
<groupui-step icon="car-24">Complete Order</groupui-step>
</groupui-stepper-horizontal>
</div>

```

---

### Stepper Vertical - Icons
Vertical steppers are used for smaller screen sizes. They work the same as their horizontal counterpart.
```html
<div class="stepper-vertical-live-demo container-border" brand="vwgroup">
<groupui-stepper-vertical>
<groupui-step-vertical done="">Shopping Cart</groupui-step-vertical>
<groupui-step-vertical active="">
```
Payment Method
```html
<div slot="content">Please chose the payment method of your liking.</div>
</groupui-step-vertical>
<groupui-step-vertical>Billing Address</groupui-step-vertical>
<groupui-step-vertical>Complete Order</groupui-step-vertical>
</groupui-stepper-vertical>
</div>

```

---

## Do / Don't
* ![](./Stepper - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvNnNjQU5RMmJUVVZpSHVzRGlKR0cucG5nIn0_volkswagen_J4XhWIVtsGRY7crGWxPY4lDU1hAa28lphP_3lZhMLnk)
  Do
  Do use one stepper to show a process on a page.
* ![](./Stepper - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvUDNLazRTZTZ4WTVQUVVCbUQzdmgucG5nIn0_volkswagen_nzMj-UoJjmscrlpXY9q7OkwhmZcu92iHjMtVWxOjjFQ)
  Do
  Do keep step information short and concise.
* ![](./Stepper - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvYjRjQzI3eThmVUp0aGo3UnZ2NTQucG5nIn0_volkswagen_V0tzYi0pIWJNXUUWPItk5_pkQVs_xjmJ7tbCCTcgAXE)
  Don't
  Do not use multiple steppers on a page.
* ![](./Stepper - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvYnpEY2NDWk1wa2hNZ0NNTWtnc0oucG5nIn0_volkswagen_maqaJMxt7NKHCpYr2OyfS4d3Ip8D8Pct4okji0r8Esg)
  Don't
  Do not include details or complex information inside the steps.

---
