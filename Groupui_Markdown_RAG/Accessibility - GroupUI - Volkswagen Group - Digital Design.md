---
title: Accessibility
source: GroupUI
category: guideline
type: documentation
topics:
  - accessibility
last_modified: Wed, 29. Oct 2025 08:38
---

# Accessibility

---

## Usage
Accessible design is essential to ensure that people with disabilities can use our products.
Considering accessibility in the development of digital applications and websites is not only a legal requirement but also contributes to a better user experience for everyone.
Moreover, integrating accessible design early on is beneficial as it ensures that products are accessible and usable by the widest possible audience, and it reduces costs in the long run compared to addressing accessibility later.
The responsibility to ensure that accessible design is integrated into every product lies with everyone, from designers and developers to product owners and managers. The earlier it is incorporated into the product development process, the more accessible it will be for all user groups.
This documentation outlines the fundamental principles, requirements, and best practices necessary for developing accessible digital applications. The goal is to make web content accessible in accordance with the Web Content Accessibility Guidelines (WCAG) 2.1 and other national and international standards.

---

## Principles
The four basic principles of accessibility, which form the foundation of the WCAG, are:
1. **Perceivable:** Content must be presented in a way that all users can perceive it, regardless of sensory limitations (visual impairments, hearing impairments, etc.).
2. **Operable:** All users must be able to operate the user interface, whether they use a mouse, keyboard, voice control, or other devices.
3. **Understandable:** Information and the operation of the user interface must be understandable and intuitive.
4. **Robust:** Content must be robust enough to be compatible with current and future assistive technologies.
Here you can find a link to the documentation to Web Content Accessibility Guidelines (WCAG) from World Wide Web Consortium (W3C):
<https://www.w3.org/WAI/WCAG21/quickref/#principle4>

---

### International Standards
* **Web Content Accessibility Guidelines (WCAG 2.1):** These guidelines from the World Wide Web Consortium (W3C) provide comprehensive recommendations for making web content accessible.
* **PDF/UA Standard (ISO 14289-1):** This standard defines requirements for accessible PDF documents.

---

### European Directives
* **Directive (EU) 2016/2102:** This directive requires public sector bodies in the EU to make their websites and mobile applications accessible.
* **European Standard EN 301 549:** This standard specifies accessibility requirements for information and communication technology (ICT), including web, software, hardware, and mobile applications.

---

### National Laws (Germany)
* **Equal Opportunities for Persons with Disabilities Act (BGG):** This law aims to eliminate discrimination against people with disabilities and ensure their equal participation in society.
* **Accessible Information Technology Ordinance (BITV 2.0):** This ordinance specifies the application of the BGG in the IT sector of federal public authorities and defines the standards for accessibility.
* **Accessibility Strengthening Act (BFSG):** This law implements the European Accessibility Act (EAA) into national law and defines accessibility requirements for products and services placed on the market after June 28, 2025.

---

### Barrierefreiheitsstärkungs-Gesetz (BFSG)
The new Accessibility Strengthening Act (Barrierefreiheitsstärkungs-Gesetz - BFSG) targets various stakeholders who provide products and services to the public. The main affected parties are:
**Companies that manufacture or distribute products:**
* Electronic devices such as computers, smartphones, tablets, and other digital devices.
* Self-service terminals like ATMs, ticket machines, and check-in terminals.
* Payment terminals and other electronic payment systems.
**Service providers:**
* Telecommunications services, including internet access services.
* Audiovisual media services (e.g., television and streaming services).
* Passenger transport services (e.g., air, rail, bus, and ferry transport).
* Banking and financial services (e.g., online banking).
* E-commerce services, i.e., companies that sell goods and services online.
**Public institutions and authorities:**
* Public administrations must ensure that their websites, mobile applications, and other digital services are accessible.
The regulation requires that these products and services be made accessible to people with disabilities to facilitate their participation in social life. Affected companies and institutions must ensure that they meet accessibility requirements to avoid penalties and ensure access for all.
Internal Applications and Websites
﻿The Accessibility Strengthening Act (Barrierefreiheitsstärkungs-Gesetz - BFSG) primarily targets products and services made available to the public, i.e., end users who are consumers. Applications used exclusively within a company by employees are generally not directly covered by this regulation.
﻿
However, there are other regulations and standards that ensure workplaces and the IT systems used there are accessible. For example, employers must ensure that workplaces are accessible to people with disabilities under the General Equal Treatment Act (AGG) and the Workplace Ordinance (ArbStättV). This can also include adapting software applications to be usable by all employees.
﻿
In summary: Internal applications for employees are not directly covered by the new Accessibility Strengthening Act, but there are other legal frameworks in place to ensure accessibility in the workplace.

---

### Color Selection and Contrast
* **Color Contrast:** The contrast between text and background must be sufficiently high for better readability. The WCAG recommends a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text (18 pt or 14 pt bold).
* **No Sole Reliance on Color:** Information should not be conveyed solely through color, as colorblind users may have difficulty distinguishing it. Use additional symbols, text, or patterns.
Tools for Contrast Checking:
* WAVE Accessibility Tool
* Contrast Checker by WebAIM
* Stark - Contrast & Accessibility Checker (Figma plug-in)

---

### Typography and Readability
* **Font Size:** Use a minimum font size of `16 px` to ensure readability on all devices.
* **Scalable Fonts:** Text should be defined in relative units (such as `em` or `%`) instead of fixed pixel values to allow for better scalability.
* **Line Spacing:** Ensure sufficient line and character spacing. A line height of `1.5` improves readability.
* **Sans-Serif Fonts:** Use clear, `sans-serif` fonts for better readability.

---

### Keyboard Accessibility
All interactive elements (such as links, buttons, form elements) must be fully accessible and operable via the keyboard.
* **Tab Order:** The tab order should be logical and intuitive, allowing users to easily navigate through the page.
* **Focus States:** Ensure that all interactive elements have a clear visible focus state, indicating where the user is on the page.
Best Practices:
* Use HTML tags correctly to ensure natural keyboard navigation.
* Implement “Skip-to-Content” links to help users skip directly to the main content.

---

### Accessible Forms
* **Labels:** All form fields should be clearly labeled, and the labels must be programmatically associated with their respective input fields (e.g., using the label element in HTML).
* **Placeholder Text:** Do not use placeholder text as a substitute for labels, as it disappears when typing and may lose the field’s meaning.
* **Error Messages:** Error messages should be clearly formulated and well-placed. Color differences alone are not enough – use symbols or additional text to indicate errors.

---

### Media and Alternative Texts
* **Alt Text for Images:** Every image conveying information must have a descriptive alternative text (alt attribute) so that screen reader users can understand the content.
* **Videos and Audio Files:** Use captions and transcripts for videos to ensure that deaf or hard-of-hearing users can understand the content.
* Provide transcripts for audio material.
Best Practices:
* For decorative images, use an empty alt="" to ensure they are ignored by screen readers.
* Avoid auto-playing media.

---

### Accessible Components and Widgets
All interactive components, such as modals, dropdown menus, or carousels, must be accessible:
* **ARIA Attributes (Accessible Rich Internet Applications):** Use ARIA attributes to make dynamic and interactive content accessible to users of assistive technologies.
* **Focus Management in Dialogs/Modals:** When a modal or dialog opens, the focus should be set to the modal, and navigation outside the modal should not be possible until it is closed.

---

## Responsive design
Accessible design must be consistent across all screen sizes and devices:
* **Flexible Layouts:** The layout should adapt to different screen sizes without cutting off or making content inaccessible.
* **Scaling:** Content should remain accessible and readable even at a zoom level of 200%.

---

## Testing
It is important to test digital applications for accessibility – both manually and automatically.
#### Manual Tests
* **Keyboard Navigation:** Test the entire website using only the keyboard (without a mouse).
* **Screen Readers:** Test the website with screen readers like JAWS, NVDA, or VoiceOver.
#### Automated Tests
* WAVE Accessibility Tool
* Axe Accessibility Plugin
* Lighthouse Audit in Chrome DevTools

---

## Focus Indicator
All interactive elements must have a visible focus indicator when navigated by keyboard or assistive technologies. This ensures that users always know which element is active and can operate the interface without a mouse.
**Guidelines**
* **﻿**The focus indicator must be clearly visible and meet the minimum contrast ratio of 3:1 against adjacent colors (WCAG 2.1 AA).
* The indicator must remain visible for as long as the element has focus. It must not fade out or disappear after a delay.
* In some cases, it may require adaptations due to structural or visual constraints. Always refer to the specific component’s documentation to see how the focus indicator is applied in that context.
* Do not remove or suppress the focus indicator for aesthetic reasons.
**Best Practices**
* Test focus indicator in both light and dark themes.
* Verify that keyboard navigation order is logical and that focus is never trapped.
* Apply focus consistently across all interactive components (buttons, inputs, links, tabs, etc.).
Focus ring behavior in several components

---

## Continuous improvement
Accessibility is an ongoing process. Regular updates and tests should be conducted to ensure that new content and features meet accessibility requirements.
* **Feedback Channels:** Provide users with the ability to report accessibility issues.
* **Training:** Continuously train your teams on the latest accessibility standards and technologies.

---

## Resources
* WCAG 2.1 Guidelines: <https://www.w3.org/TR/WCAG21/>
* WAI-ARIA: <https://www.w3.org/WAI/ARIA/>
* Accessibility Testing: <https://wave.webaim.org/>
* Portal Barrierefreiheit - Gesetze und Richtlinien (bund.de):
  <https://www.barrierefreiheit-dienstekonsolidierung.bund.de/Webs/PB/DE/gesetze-und-richtlinien/gesetze-und-richtlinien-node.html>
