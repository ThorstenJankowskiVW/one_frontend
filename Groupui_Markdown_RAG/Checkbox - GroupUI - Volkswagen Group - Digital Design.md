---
title: Checkbox
source: GroupUI
category: component
type: documentation
topics:
  - web-component
last_modified: Thu, 19. Feb 2026 10:42
---

# Checkbox

---

## Usage
A checkbox is used to make a decision between two clearly opposite choices or options. Consequently, check boxes should be used only to toggle an option on or off or to select or deselect an item. Checkboxes can be used individually or to select any number and combination of options from a list. The user may select any number of choices. Checking one box doesn't uncheck the others.

---

### Checkbox - Live Demo
```html
<div class="checkbox-live-demo container-border flex-center">
<div>
<groupui-checkbox>Checkbox</groupui-checkbox>
<groupui-checkbox>Checkbox</groupui-checkbox>
<groupui-checkbox>Checkbox</groupui-checkbox>
<groupui-checkbox>Checkbox</groupui-checkbox>
</div>
</div>

```

---

### Checkbox - Sizes
```html
<div class="checkbox-sizes container-border flex-center">
<div>
<groupui-checkbox size="s">Small</groupui-checkbox>
<groupui-checkbox size="m">Medium</groupui-checkbox>
</div>
</div>

```

---

## Do / Don't
* ![](./Checkbox - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZldqN3JGeGFiTEM2VHNFQU1LN3YucG5nIn0_volkswagen_0ymUbgxEHd2Jib7f_EMTlfXZriJFvVPRsypl2Li2u6g)
  Do
  Use checkboxes when the user needs to select any number of choices, including none or multiple.
* ![](./Checkbox - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvNDVoeEptamdLYmN3OW93b0VrbmYucG5nIn0_volkswagen_DRRs8sG3nxjnycJ_V61QgEv57-WzcpVmqnPVYaQe8b4)
  Do
  Top align long text labels that wrap to a second line.
* ![](./Checkbox - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZXRicGJCNDJWSkFqWHdvRFpyMUwucG5nIn0_volkswagen_layNDVNENzSGTUn7kJi7aAejIHxbazLkOZJkAqXbXO4)
  Don't
  Do not use checkboxes when there are multiple options and only one needs to be selected – in this scenario, use [radio buttons](https://digitaldesign.volkswagen-group.com/r/t2jBLKhlug3ZeP576RPsSki2grcCiJjeyitnP4tdKjI) instead.
* ![](./Checkbox - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvbTZUWHJlRXRiblhSUWZRSHhzRVoucG5nIn0_volkswagen_KWmUQ6u7rb7023-rO6Y31VhGXFyfZvargf-eALer4ZI)
  Don't
  Do not center align long text labels that wrap to a second line.

---

### Checkbox - Showcase
info
The checkbox comes with a default validation, which works fine for simple cases. If you want to work with a more specialized validation or framework specific validation, it is recommended to deactivate the default validation with noValidation and set the severity yourself.

---

### Approach 1: input wrapped in label
Assign the g-checkbox class only to the parent label

### Approach 2: input and label separated
Both the input and label elements need to be given the g-checkbox class

### State disabled
Simply assign the disabled attribute to the input
