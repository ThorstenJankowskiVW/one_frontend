---
title: Language Selector Template
source: GroupUI
category: template
type: documentation
topics:
  - accessibility
last_modified: Wed, 14. Jan 2026 10:50
---

# Language Selector

---

## Usage
This section describes the usage and patterns of the Language Selector in the interface.
It focuses on placement and interaction within navigation and other UI areas. The language selector enables users to change the interface language of the product. It ensures accessibility for multilingual users and supports a consistent user experience across all supported languages.
Applications should adapt automatically to the browser or system language on first use. The language selector is provided as a secondary option for users who want to change the default.
**Use the language selector when:**
* The product is available in more than one language.
* Users may need to switch languages after onboarding.
* Accessibility requires offering content in different languages.

---

### Placement
The placement of the language selector depends on the frequency of use within the product. The more often users are expected to change languages, the more prominent the selector must be.
Placement Examples
**Options for placement, by frequency of use:**
* **High frequency** - Main navigation: Use when users frequently switch languages or when incorrect default language detection may occur.
* **Medium frequency** - User preferences: Use when language switching is an occasional action. The selector can be placed inside Profile or Settings, grouped with other personal options.
* **Low frequency** - Footer: Use when language switching is a rare action and the product is primarily used in a single language context.
The more frequent the action, the more prominent the placement.

---

### Using supporting text
In some cases, the language name may be shown with a fallback in the system’s default language (for example: Deutsch (German).
This pattern is not recommended as the default, but can be applied when there are strong internal needs that justify its use, such as:
* Support teams or QA staff who must identify languages they do not speak
* Shared-device contexts where multiple users with different language knowledge may need to assist each other
* Regional Language support
The fallback should only be used when there is a clear operational requirement. For all other cases, languages must be displayed only in their native tongue to prioritize end-user recognition.
Menu variants

---

### Pattern by Number of Languages
The number of supported languages directly determines which interaction pattern should be used. A language selector for two languages behaves very differently from one for thirty languages.
Pattern by Number of Languages

---

### Responsive behavior
The number of supported languages directly determines which interaction pattern should be used. A language selector for two languages behaves very differently from one for thirty languages.
**Main** - Sets above 4 languages
Desktop: Use a popup menu for up to ~10 languages.
Mobile: Always navigate to a dedicated language selector page for clarity and consistency.
Default mobile responsive behavior
**Exception** - Small sets (≤3 languages)
Desktop: Use a popup menu.
Mobile: A popup menu may also be used, as the short list fits comfortably on screen.
Exception for smaller sets

---

## Do / Don't
* ![](./Language Selector Template - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvRFRGdkJEWkxQQUJGMWoxUERjWkIucG5nIn0_volkswagen_FctG9oOK9zY6q_JqQaaxwcENDsQFd3_AYG4Gi-5W9TU)
  Do
  Write each language name in its native tongue (Deutsch, Español, 日本語, العربية).
* ![](./Language Selector Template - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvYUdoZGVQSnk5TXBXM3A5MTc2aXIucG5nIn0_volkswagen_aptX7i63Q40blGkDY04sAR8eqJ40TMHcNYOMcS6St04)
  Don't
  Translate language names into the interface language (German, Spanish, Japanese, Arabic).
* ![](./Language Selector Template - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvWjlxd0Q2MUxrQ1NtR2pMQ1dTZXAucG5nIn0_volkswagen_05ye_uwuVjyoGSPEiE2onvdEUTVSflMUJqZMmL3V25I)
  Do
  Write language names in plain text without visual decoration.
* ![](./Language Selector Template - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZVc3Y1BxOEhUSlNkS2pXNmlGRmQucG5nIn0_volkswagen_I-o_OafzDteAXbje2MifNHgOrqcvQlgoGohp9jcjxio)
  Don't
  Display languages with country flags, as flags represent nations, not languages.
