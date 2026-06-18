---
title: Menu
source: GroupUI
category: documentation
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Mon, 04. May 2026 13:25
---

# Menu

---

## Usage
The menu component provides a list of actions or navigation options. It is typically triggered by a button, input or icon and appears as a dropdown or popover. Menus help users make selections or navigate without cluttering the interface.
**Use the menu component when:**
* You need to present a list of related actions
* Space is limited and a dropdown is more appropriate than inline buttons
* Actions are secondary or contextual to a primary element (e.g., a card or list item)
**Common use cases:**
* Contextual actions (e.g., “Edit”, “Delete” on a card)
* Navigation menus in top or side navigation
* Overflow actions in toolbars

---

### Anatomy
Group headline (optional)
Icon left (optional)
Icon right (optional)
Selected indicator
Dividers (optional)
Supporting text (optional)
Label (optional)

---

### Alignment
By default, the menu will open underneath the trigger component, eg. an input component or a button. Depending on the available screen space, a menu can also open on top or be right aligned with the trigger component.

---

### Width
The menu component width can adapt accordingly to the width of its trigger component, eg. input components or buttons. Depending on the component or use case, the menu can have a different width than the trigger, eg. icon buttons, or global items in navigation to avoid narrow appearances.
Even if the menu width adapts on smaller screen sizes or needs to be fit into narrow space, make sure content is still readable and accessible to the user.

---

### Multi-level menus
Multi-level menus, where one menu item opens a second level menu, can work well in contextual menus, where you need to display different kinds of actions like sorting, sharing, or making any kind of settings directly with the menu component. However, multi-level menus can become frustrating for the user, as screen space is narrow and users need to track their path through the interface. They also increase the risk of closing the menu accidentally, or selecting the wrong category. Try to avoid more than two levels when possible.
**Alignment**
Multi-level menus are aligned with no gap in between both menu components to ensure seamless mouse interaction. The second level opens on hover.

---

### Basic text-only
Simple display of options, usually used in a single select.

---

### Icons or images
Icons can help to support the options' meaning. Images like user avatars might help the user to find the option they are looking for more quickly. However, avoid using icons or images for stylistic reasons only.

---

### Groups or headlines
You might need to group options in a menu. This can be supported with a group headline.

---

### Dividers, labels, supporting text
Dividers can help to visually separate options or option groups from each other. Labels are often used to provide information like keyboard shortcuts. If an option needs additional information you can add supporting text. Different menu items can be styled differently, some might need a label, while others are better supported with an icon. Only use these additions when necessary and helpful for the user.

---

### Multi selection
Checkboxes indicate if a user is able to select multiple options from the list. If multi selection is possible, all items in the list have checkboxes.

---

### Do
Use clear and concise labels.
### Don't
Avoid long labels if possible. If needed, truncate text or add line break depending on design requirements.
### Do
Use two levels of menus maximum if possible.
### Don't
Avoid too many nested levels.
### Do
Keep number of options manageable.
### Don't
Avoid too many options in a list.
To pick up a draggable item, press the space bar.
While dragging, use the arrow keys to move the item.
Press space again to drop the item in its new position, or press escape to cancel.
## Web Component
Menu - Showcase
