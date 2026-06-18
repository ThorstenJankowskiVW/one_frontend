---
title: Classification
source: GroupUI
category: documentation
type: documentation
topics:
  - accessibility
  - css-framework
  - web-component
last_modified: Fri, 08. May 2026 12:44
---

# Classification

---

## Usage
Information classification is a key method for protecting sensitive data within the Volkswagen Group. For digital products such as applications and websites, the assigned classification level must be clearly and consistently displayed.
The following guidelines have been developed in close collaboration with the Classification and Legal departments and are mandatory for all relevant products.

---

### Confidentiality levels
There are 4 types of severities at classification label. All applications must be reviewed by the Application Security department before release. They will confirm the appropriate confidentiality levels.
| Confidentiality levels | Description | Display Requirement |
| --- | --- | --- |
| Secret | Information whose knowledge or disclosure to unauthorized persons could seriously jeopardize the achieving of company objectives and must therefore be subject to a highly restrictive distribution list and strict controls. | Mandatory |
| Confidential | Information whose knowledge or disclosure to unauthorized persons could jeopardize the achieving of product and project objectives and must therefore only be made accessible to a limited group of authorized persons. | Mandatory |
| Internal | Information that is intended for internal use only and not for the general public. | Mandatory |
| Public | Information that is not subject to any restrictions and, e.g., is published by the company in newspapers or in the internet. | Optional |
You can find the explanation of each severity types from the document below.
[Link for documents](https://group-wiki.wob.vw.vwg/wikis/spaces/Informationsklassifikation/pages/527796620/Introduction+to+the+subject+of+information+classification)
Note
All applications must be reviewed by the Application Security department before release. They will confirm the appropriate classification level.

---

### Visualization
Classification levels should be represented as visual labels that are easy to distinguish and seamlessly integrated into the design of the application or website.

---

### Positioning
The classification label must be placed in the footer of the application or website. It is sufficient if the label becomes visible only when the user scrolls to the bottom of the page. Displaying the label in the header is not required and should be avoided to maintain a clean and consistent layout.

---

### References
* [Group Wiki - Information classification](https://group-wiki.wob.vw.vwg/wikis/spaces/Informationsklassifikation/pages/527796620/Introduction+to+the+subject+of+information+classification) [(Intranet Link)](https://group-wiki.wob.vw.vwg/wikis/spaces/Informationsklassifikation/pages/527796620/Introduction+to+the+subject+of+information+classification)
* Legal Department (Intranet Link)

---

### Do
Keep location of the classification label at the suggested area.
### Don't
Do not change the location of the classification label from the suggestion location.
### Do
Use only the actual one language version.
### Don't
Do not add another language option to the label.
To pick up a draggable item, press the space bar.
While dragging, use the arrow keys to move the item.
Press space again to drop the item in its new position, or press escape to cancel.

---

## Assets
* [Classifiaction-Labels.zip11 KB - zip](https://digitaldesign.volkswagen-group.com/api/attachment/download/eyJibG9ja19yZWZlcmVuY2UiOm51bGwsImlkIjoxNzg4OTh9:volkswagen:CBKljTVgFkbn93BhxdUKZvrBP-aFNwp_SsAJ2AY3wy4)

---

## Code
All classification files can be accessed via CDN.
https://assets.groupui.vwapps.run/latest/static/classification/...

---

## Web Component
Classification Label

## CSS Framework
To use the classification label, add a g-classification-label class to an <i> tag.
﻿The different levels can be set with g-classification-label-public, g-classification-label-internal, g-classification-label-confidential and g-classification-label-secret. On inverted background the additional class g-classification-label-inverse has to be used.
