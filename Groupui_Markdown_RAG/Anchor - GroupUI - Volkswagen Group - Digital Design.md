---
title: Anchor
source: GroupUI
category: documentation
type: documentation
topics:
  - web-component
last_modified: Wed, 01. Apr 2026 07:31
---

# Anchor

---

## When to use
Use anchor navigation for long single page content eg. documentation, FAQs or articles where users need quick access to specific sections of a page.
Don’t use anchor navigation to navigate between pages. Anchor navigation is for in page navigation only.
### Component Status
We want to provide full transparency about the status of each building block in our documentation.
For every component, you can immediately see whether it is available, planned, or not available.
Figma Component: is available
Vertical Web Component: is available
Horizontal Web Component: is not available
CSS Component: is not available

---

## Anatomy
Label: A descriptive header for a list of anchor links.
Selected anchor: The current section of the page the user is on.
Unselected anchor: Clicking an unselected anchor scrolls the page to that section and selects the anchor.
Tag (optional) : Calls attention to new, updated or critical content sections.
Nested anchor: Increment label by 12 px per level. All levels are exposed.
## Behavior
Anchor links use ‘scrollspy’ behavior.
* When anchor link is selected section scrolls to top of content area.
* When page is scrolled manually each anchor link is highlighted in turn as each section name reaches the top of the content area.
* Anchor navigation scrolls with page content and then sticks to top of the content area.
Anchor - Behavior - Scrolling - Vertical
Anchor - Behavior - Scrolling - Horizontal
Anchor -Behaviour - Scrolling - Mobile

---

### Long anchor names
Long vertical anchor labels wrap to the next line. Horizontal anchor navigation labels do not truncate or wrap. So either use short anchor labels or a vertical anchor navigation.
Anchor - Long anchor names

---

### Anchor navigation on colored background
If anchor navigation overlaps a colored background then place it inside an inverse card.
Anchor - On colored backgrounds
## Adaptive design
On smaller screens anchor navigation collapses into an expandable. This applies to both vertical and horizontal anchor navigation.
Anchor - Adaptive design - vertical
Anchor - Adaptive design - horizontal
### Types
There are two types of anchor navigation: horizontal and vertical.
Anchor - Types
| Type | Benefits | Risks |
| --- | --- | --- |
| Vertical (recommended) | Flexible placement to left or right of content without covering it.  Supports long anchor names.  Supports nesting. | Less visually prominent.  Reduces horizontal content area. |
| Horziontal | More visually prominent  Spans entire page width. | Must always be positioned at top of content to scroll.  May be confused with Tabs.  Reduces vertical content area. |
## Do / Don't
* ![](./Anchor - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvckZkdm54NXN2UW9QOWN5NmFCRGIucG5nIn0_volkswagen_x7dfHHEHpBK_S8Qsxc-I2cAvmUMwCP9KL0XXDYwc484)
  Do
  Use a title to indicate the function of the anchor links. Eg. ‘Jump to this section’ or ‘On this page’.
* ![](./Anchor - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvUXlpdml0a3B2VEJ1bmlLRDRZWmsucG5nIn0_volkswagen_20AujdfY0ifUOd1qe9ap0fpbfWDMtp_Wh3Qir1T5uUE)
  Don't
  Do not hide the title because it may confuse users what the function is. Additionally a title is necessary for the expandable version on small screens.
* ![](./Anchor - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvN29mcDJ5M3hTNkFEYTdCUnhEOGoucG5nIn0_volkswagen_LOaI-83ISfAC_v124Z18vcTsLDzU7W5TZ2X7ScZyCh4)
  Do
  Display vertical anchors to the right side of content.
* ![](./Anchor - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvODJwempkRFp3YmNuRlNoUWoxWVMucG5nIn0_volkswagen_KXXyXAeMCM9Tet4oh_AUSgdYXbviGKXAuuSKWtbI6rY)
  Don't
  Don’t display vertical anchors to left of content if possible because it may break the flow of the content.
* ![](./Anchor - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvUmdoM2s4TnVLV3NUamcyVnJVWWkucG5nIn0_volkswagen_iHHSJqx46LJLGBVmt_l_UiI2UZUFq-856GIIB0oLMZs)
  Do
  Display anchors in the content area.
* ![](./Anchor - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvdU51UWsxTmVZZ2twNk5TOVo0R1gucG5nIn0_volkswagen_eVuPAR62IAg5PdjEPO-wP_wF3CmaKwVn3wX0Bdi8NJ8)
  Don't
  Do not try to integrate anchors into the global or local navigation. Global and local navigation links to unique pages. Anchors link to sections within pages only.
