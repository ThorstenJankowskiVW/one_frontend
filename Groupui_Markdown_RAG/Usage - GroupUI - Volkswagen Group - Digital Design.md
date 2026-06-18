---
title: Usage
source: GroupUI
category: documentation
type: documentation
topics:
  - tokens
last_modified: Mon, 08. Sep 2025 07:18
---

# Usage

---

## Introduction
At the beginning of each product development, it must be determined which Corporate Identity/Corporate Design is to be used for the respective application. There is the possibility here between Volkswagen Group design or respective brand design (Volkswagen, Skoda, etc.).

---

## Guidelines
Which design is to be used when is described in the regulation portal in the Volkswagen Group guidelines KRL19 and ORL119.
An important factor for the choice of Corporate Identity/Corporate Design for an application with frontend is the target group that uses the application.
**We differentiate between internal users and end customers.**
* **Internal users** refer to employees of Volkswagen AG and its subsidiary companies.
* **End customers** are consumers of the products of Volkswagen AG (e.g. cars, mobility services).
If an application is used by internal users (Production, Logistics, HR, After sales, etc.) then the Volkswagen Group digital design system "GroupUI" should be considered. However, if an application is used by end customers, it should use the respective brand design (Volkswagen, Skoda, etc.).
The grey area in this landscape includes the employees of a car dealership in the sales or aftersales area. This is a grey area as it is in between the OEM (internal) and the end customer. In this case we recommend to discuss with the PO (business department) whether it is OK to use GroupUI. We recommend to use GroupUI whenever it is possible, because it is not limited to any single brand within the Volkswagen Group and therefore makes multi-brand utilisation easier.

---

### Decision tree
The Volkswagen Group includes several brands. We have created a decision tree to quickly and easily identify and apply the right design for applications and websites.

---

## Compliance
Design compliance is crucial for maintaining a consistent and professional image across all platforms and materials, including applications and websites. By adhering to established design guidelines, organizations can ensure that their brand identity is recognizable and trustworthy. This not only helps in building customer loyalty but also protects against legal issues related to trademark and copyright infringements. Clear and documented compliance with design standards streamlines processes, saves time, avoids additional costs, and enhances the overall efficiency and effectiveness of branding efforts.

---

### Product types
The adherence to design compliance varies depending on the product type. Each product type is assigned a specific compliance level that must be achieved. The primary goal is to always attain the highest possible design compliance and to utilize the respective design systems to the fullest extent.
| Product Type | Description | Compliance Level |
| --- | --- | --- |
| Custom Development | Application/project with at least partial individual development content | 3-5 |
| OneSDC | Custom development based on the specific processes and technologies of the Software Development Center | 4-5 |
| PowerApp (Professional Dev) | Custom development based on the MS Power Platform, classified as Professional Development | 0-2 |
| Purchased Software | Standard software without individual customizations, operated and supported independently | 0-2 |
| SaaS | Software as a Service - software developed, hosted, and supported externally | 0-2 |
| SAP | The application is based on or contains components of SAP | 0-2 |

---

### Compliance Level
Compliance levels provide clear guidance on the requirements that must be met for each level. These levels vary and are applied differently depending on the product. The technical solution involves using reusable components from the respective design systems.
|  | 0 - No Usage | 1 - Minimal Compliance | 2 - Basic Compliance | 3 - Partial Compliance | 4 - High Compliance | 5 - Full Compliance |
| --- | --- | --- | --- | --- | --- | --- |
| **Description** | No consideration of the design system. | Usage of basic consideration of brand guidelines | Use of defined design tokens for all Basics. | Use of design tokens and some technical solutions. | Use of design tokens and comprehensive technical solutions. | 100% use of the design system including all technical solutions. |
| **Basics** |  |  |  |  |  |  |
| Typography | Not relevant | Recommended | Mandatory | Mandatory | Mandatory | Mandatory |
| Color | Not relevant | Recommended | Mandatory | Mandatory | Mandatory | Mandatory |
| Icons | Not relevant | Recommended | Mandatory | Mandatory | Mandatory | Mandatory |
| Corner-radius | Not relevant | Optional | Mandatory | Mandatory | Mandatory | Mandatory |
| Spacing | Not relevant | Optional | Mandatory | Mandatory | Mandatory | Mandatory |
| Grid | Not relevant | Optional | Mandatory | Mandatory | Mandatory | Mandatory |
| Shadows | Not relevant | Optional | Mandatory | Mandatory | Mandatory | Mandatory |
| **Technical Solution** |  |  |  |  |  |  |
| Some technical solutions | Not relevant | Optional | Optional | Mandatory | Mandatory | Mandatory |
| Comprehensive technical solutions | Not relevant | Optional | Optional | Optional | Mandatory | Mandatory |
| All technical solutions | Not relevant | Optional | Optional | Optional | Optional | Mandatory |

---

## Colibri
Colibri (Group Digital Product Framework) is a group-wide, customizable framework that enables product teams to deliver their IT products optimally throughout all phases of the product lifecycle. User Experience (UX) and User Interface (UI) design are integral parts of the GDPF, ensuring user-centered design for applications and websites by providing numerous guidelines to adhere to.
All information about the Colibri (GDPF) can be found in the Group Wiki (Volkswagen Group intranet) under the following link:
[Group Wiki - Colibri (Group Digital Product Framework)](https://volkswagen-net.de/wikis/pages/viewpage.action?pageId=5389289465)
