---
title: Table
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
  - tokens
last_modified: Mon, 01. Jun 2026 09:48
---

# Table

---

## Usage
Tables display data efficiently in a grid-like format of rows and columns. Information is organized, so that users can scan and understand content quickly.
**A table might contain:**
* Interactive components (such as icons, buttons, or menus)
* Non-interactive elements (such as tags)
* Tools to query and manipulate data (filter, search)
This page contains a lot of use cases. Some of them are already covered with the new CSS Table. Others will follow soon.

---

### When to use a table
The main benefits of using a data table over other data presentation methods (collection of cards, dashboard with data visualizations) are:
* **Scalability:** Tables can easily accommodate more rows and columns as the dataset expands.
* **Comparisons:** Tables make it simple to compare data points side by side. Unlike card-based interfaces, users can view items simultaneously without needing to shift their focus or rely on short-term memory.

---

### Main user tasks in tables
Although the specific tasks performed in a table may differ based on the application or the user, [there are four core tasks](https://www.nngroup.com/articles/data-tables/) commonly executed that a table design should support:
* Finding records that meet specific criteria
* Comparing data
* Viewing, editing, or adding data to a single row
* Taking actions on selected records
(Data Tables: Four Major User Tasks, Page Laubheimer, https://www.nngroup.com/articles/data-tables/)

---

### Basic table
Column header names describe the type of content displayed in each column. Each row contains data related to a single entity.
#### Column alignment
By default, most column data is left aligned, so that data is easily scannable and comparable. One exception is numeric data related to size (i.e. count, percent), which should be right aligned to help users identify number size.
#### Alignment of icons
When column data is left aligned, icons change position. In a left aligned header cell, the sort icon for example will appear on the left side of the headline.

---

### Basic table - striped
Can improve readability of table content as it adds a grey background to every other row, which can help users to differentiate between rows of data. Use it for complex tables that contain a lot of data.

---

### Sizes
There are 3 different cell sizes available you can use depending on the available screen space and information density:
Size L: relaxed
Size M: regular
Size S: condensed

---

### Select content
When a row is selected, the background color is highlighted to indicate the selection, as the checkbox might be outside of the users viewport. Any kind of selection is usually followed by an action the user has to take like editing, deleting, rearranging data.
#### Multi selection
A row can be selected with a checkbox. All rows can be selected with the uppermost checkbox in the header.
#### Single selection
A single row can be selected with a radio button in the first column.

---

### Scroll content vertically or horizontally
Whenever data is filling up the screen, fix the header row or column, so that users always understand where a cell stands for and where it belongs to.

---

### Filter content
Users can filter data with an interactive filter-icon next to the column header name. Users select options with the menu.
#### Input filter
Another possibility to filter content is with a build-in input filter field.

---

### Sort content
Users should be able to sort content based on certain requirements. To indicate sorting, arrow-icons are used to help users understand whether content is sorted ascending or descending. Default sorting is indicated without any icon. Sorting in descending order is indicated by an downward-arrow-icon. Sorting in ascending order is indicated by an upward-arrow-icon.

---

### Search content
Help users find data they are looking for by providing search functionalities. One option is to let users search the whole data set with a search bar right above the table.
#### Column based search
With an input right above each column, users can search for data inside the related column.

---

### Expand content
If you need to display additional information, or help users to be able to focus on data related to a single row, use an accordion to display further data when the user expands the row. The type of content shown inside an accordion is based on the data you need to display and use case. The accordion can display information only, or could offer other components to trigger actions.

---

### Edit content
There are multiple ways to make cell content editable, choose depending on the amount of data users have to look at, and whether they need to scroll horizontally in order to access all content.
#### Edit in place
Use this solution when the table is narrow. Users need to identify edit mode in order to prevent accidental changes. When focused, the cell behaves similar to the input field component.
#### Edit in separate component
Allow users to edit content with a separate component like a modal, flyout or in an expanded row. This solution might help users to focus on the content they are editing. A tradeoff is, that other content might be out of sight. Be careful with using modals to edit cell content, as the users won’t be able to reference or copy data from another cell.

---

### Take actions on content
Take action on one or multiple records (beyond editing the record itself) — for example, deleting, sharing, or performing some other data-specific action (like sending out invoices, changing deadlines, etc.).
#### Single-record action
Placing the single-record actions inline within a table row can work if you just have one or two actions. Avoid crowded actions without text labels as they are hard to click and distinguish. Be careful with hidden actions under a hover gesture or a generic menu, as actions are hard to discover (and potentially with low accessibility if a hover gesture is used).
#### Batch actions
Batch actions usually involve a mechanism for selecting records (e.g. a checkbox) and then a series of action buttons or menus above or below the table. This type of design allows for a space-efficient presentation of multiple options. If applying the same action to the full data set is a common need, it’s a convenient shortcut to have a single-click option to 'select all'.

---

## Complex data tables
To implement a complex table or data-heavy dashboards into your product, we recommend to use the AG Grid framework. GroupUI provides a ready-to-use template following the GroupUI guidelines, based on our design tokens. [Go to AG Grid Template](https://digitaldesign.volkswagen-group.com/r/my6a_xvly_WSorvk6T2h3igMqEUIQ4QKOLn7lM0o568).

---

### Table
Assign the g-table class to a table.
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/latest/groupui.css">
```html
<div id="css-table-container" class="container-border flex-center">
<table class="g-table">
<tr>
<th>Head 1</th>
<th>Head 2</th>
</tr>
<tr>
<td>Cell 1</td>
<td>Cell 2</td>
</tr>
<tr>
<td>Cell 3</td>
<td>Cell 4</td>
</tr>
</table>
</div>
```
### Variants
There are multiple variants for the table:
﻿- a striped version (adding class .g-table-striped)
﻿- a version with vertical borders (adding class .g-table-vertical-borders)
﻿- a version without horizontal borders (adding class .g-table-no-horizontal-borders)
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/latest/groupui.css">
```html
<div id="css-table-container" class="container-border flex-center">
<table class="g-table g-table-striped">
<tr>
<th>Head 1</th>
<th>Head 2</th>
</tr>
<tr>
<td>Cell 1</td>
<td>Cell 2</td>
</tr>
<tr>
<td>Cell 3</td>
<td>Cell 4</td>
</tr>
</table>
<table class="g-table g-table-vertical-borders">
<tr>
<th>Head 1</th>
<th>Head 2</th>
</tr>
<tr>
<td>Cell 1</td>
<td>Cell 2</td>
</tr>
<tr>
<td>Cell 3</td>
<td>Cell 4</td>
</tr>
</table>
<table class="g-table g-table-no-horizontal-borders">
<tr>
<th>Head 1</th>
<th>Head 2</th>
</tr>
<tr>
<td>Cell 1</td>
<td>Cell 2</td>
</tr>
<tr>
<td>Cell 3</td>
<td>Cell 4</td>
</tr>
</table>
</div>
```
### Sizes
There are multiple sizes for the table:
﻿- a smaller and a larger version (adding class .g-table-small or .g-table-large)
﻿- a version with a fixed small, default or large height (adding class .g-table-fixed-size)
﻿ - this fixed height only applies for child elements within the table cells
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/latest/groupui.css">
```html
<div id="css-table-container" class="container-border flex-center">
<table class="g-table g-table-small">
<tr>
<th>Head 1</th>
<th>Head 2</th>
</tr>
<tr>
<td>Cell 1</td>
<td>Cell 2</td>
</tr>
<tr>
<td>Cell 3</td>
<td>Cell 4</td>
</tr>
</table>
<table class="g-table g-table-large">
<tr>
<th>Head 1</th>
<th>Head 2</th>
</tr>
<tr>
<td>Cell 1</td>
<td>Cell 2</td>
</tr>
<tr>
<td>Cell 3</td>
<td>Cell 4</td>
</tr>
</table>
<table class="g-table g-table-fixed-size">
<tr>
<th>Head 1</th>
<th>Head 2</th>
</tr>
<tr>
<td><div>Cell 1</div></td>
<td><div>Cell 2</div></td>
</tr>
<tr>
<td><div>Cell 3</div></td>
<td><div>Cell 4</div></td>
</tr>
</table>
</div>
```
### Sticky head
To enable a sticky head add class g-table-sticky-head to the table.
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/latest/groupui.css">
```html
<div id="css-table-sticky-head-container" class="container-border flex-center">
<div id="overflow-container">
<table class="g-table g-table-sticky-head">
<tr>
<th>Head 1</th>
<th>Head 2</th>
<th>Head 3</th>
</tr>
<tr>
<td>Cell 1</td>
<td>Cell 2</td>
<td>Cell 3</td>
</tr>
<tr>
<td>Cell 4</td>
<td>Cell 5</td>
<td>Cell 6</td>
</tr>
<tr>
<td>Cell 7</td>
<td>Cell 8</td>
<td>Cell 9</td>
</tr>
<tr>
<td>Cell 10</td>
<td>Cell 11</td>
<td>Cell 12</td>
</tr>
</table>
</div>
</div>
```
