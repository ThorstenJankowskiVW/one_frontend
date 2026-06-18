---
title: Accordion
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Wed, 29. Apr 2026 08:19
---

# Accordion

---

## Usage
The accordion offers the possibility to display informations nested in a simple description on one page. The content is only visible to the user when he clicks on the respective description. Additional components such as lists or pictures can be added to each accordion content area.

---

### Accordion - Live demo
```html
<div class="accordion-live-demo container-border">
<groupui-accordion first="true">
<span slot="headline">
<groupui-headline heading="h6">Headline</groupui-headline>
</span>
</groupui-accordion>
<groupui-accordion>
<span slot="headline">
<groupui-headline heading="h6">Headline</groupui-headline>
</span>
</groupui-accordion>
<groupui-accordion>
<span slot="headline">
<groupui-headline heading="h6">Headline</groupui-headline>
</span>
</groupui-accordion>
</div>

```

---

### Anatomy
Title
Divider
Icon
content

---

## Do / Don't
* ![](./Accordion - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZGFWenFQTlFGN0dSeGhwQkRFNk0ucG5nIn0_volkswagen_e8PQSFhz_KNhylXhM0cjOCNZC8PQ9fPt80nMeEIvVL0)
  Do
  Use chevrons to indicate interaction.
* ![](./Accordion - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvck1meEpXS0VnRmFVUEhwbmFIdFEucG5nIn0_volkswagen_PkJ4Po-HLr29YyCdf2r3RC-njILbtSFKb_ftyxXCLFc)
  Do
  Use accordion labels that are short and concise.
* ![](./Accordion - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvQmJuRG16UkpSZ1BBdkxwczQzeGsucG5nIn0_volkswagen_emyZD5Q0Jij3aSe-_ByyzArHT5EzvWuqi3arlnaWmGc)
  Don't
  Do not mix different icons.
* ![](./Accordion - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvaEdlS0pWazdmeGphNFhZRUg5WkUucG5nIn0_volkswagen_nrTiVt_vvwdLJebQW3TQqrzCPdC3es8rtx42bqcN0-8)
  Don't
  Avoid long labels that wrap to a second line.

---

## Keyboard Handling
| Key | Action |
| --- | --- |
| Tab | * When the focus is on the element which is right before the accordion in the tab order: focusses the accordion * When the accordion is focused: moves the focus to the next focusable DOM element |
| Shift+Tab | * When the focus is on the element which is right behind the accordion in the tab order: focusses the accordion * When the accordion is focused: moves the focus to the previous focusable DOM element |
| Enter/Space | opens/closes the accordion when it is focused |

---

## Deprecation Info
| Property/Event | Deprecated since Version | Removed in Version | Substitute |
| --- | --- | --- | --- |
| headline | 6.4.0 | 7.0.0 | use the dedicated slot instead |
