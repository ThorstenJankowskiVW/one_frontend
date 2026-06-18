---
title: Loading
source: GroupUI
category: documentation
type: documentation
topics:
  - accessibility
last_modified: Sun, 28. Sep 2025 17:17
---

# Loading

---

## Usage
Use loading indicators to [communicate the systems’ status](https://www.nngroup.com/articles/visibility-system-status/). Keep users informed about what is going on, through appropriate feedback within a reasonable amount of time. A user's wait time starts as soon as they initiate an action like clicking on a button. The system should immediately provide visual feedback, like the button appearing "pressed" or a page starting to refresh, to confirm the action was received. Without this, users may think the action wasn’t registered and attempt it again.
Depending on the duration of the process, we can determine the correct loading component to use. For any action taking longer than 1 second to process, use loading indicators to help users understand that the system is working.

---

### Designing loading feedback
**Show something as soon as possible**
Should the page display all content at once or load it incrementally? This also depends on the content: image/text cards may load one by one, while large data tables work better all at once. For users to understand that the system is responding, show something as soon as possible, whether it is content or a loading indicator.
**If loading takes an unavoidably long time, let users do something different**
Load content in the background so that users can use the wait time for other tasks. If that’s not possible, consider creating a more interesting experience than just letting users look at a spinner. After 10 seconds, users usually expect that something has gone wrong with the system.
**Lazy loading - load only what the user or browser needs**
Consider loading only necessary content. Here are three common methods:
* 'Load more' buttons for user-triggered content loading
* Infinite scrolling to load content as users reach the end of a list
* Pagination to load content by selected page only

---

### Choosing the right component
Choose loading indicators based on context, content type, and loading time. You might need to use one of the presented components in a different context. However, loading indicators should never be used as decoration, as they serve a purpose.

---

## Loading patterns
There are two types of loading patterns: **determinate** and **indeterminate.**
Determinate means the duration of the process is known and can be communicated to the user. Indeterminate means the duration of the process is unknown or variable.
[![Your browser doesn't support the `video` element.](https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvMW0zY2hTd05NRjN2emtUNm52bUYubXA0In0:volkswagen:-ZDSgwLIFhLzWo_d93ePqV-_-4JqrmdpcdfaZEJ72nQ?width=800)](https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvMW0zY2hTd05NRjN2emtUNm52bUYubXA0In0:volkswagen:-ZDSgwLIFhLzWo_d93ePqV-_-4JqrmdpcdfaZEJ72nQ?width={width}&format=mp4)

---

### Loading time below 1 second
For actions that take less than 1 second, a looped animation can be more distracting than helpful, as it may happen too quickly for users to process, causing confusion or anxiety over what briefly appeared on the screen.
-> No need to display a loading indication

---

### Loading time between 1 and 10 seconds
For quick actions, specifically those lasting between 1 and 10 seconds, display a looping animation. They provide feedback that the system is functioning, but don't inform the user about how long the process will take.
-> Display loading indicators like indeterminate spinners, bars, skele﻿tons, or other looped-animation progress indicators.
Looped-animation loading indicators

---

### Loading time more than 10 seconds
Progressive loading indicators are the most informative wait animations, as they communicate how much progress has been made and how much is left, giving users an idea of the remaining wait time. This reduces uncertainty, helps users decide whether to wait, and can make the wait feel shorter. Progress bars or circles filling from 0-100% are common examples.
Progressive loading indicators are ideal for a process lasting 10 seconds or more, as they reassure users and make them more willing to wait. For shorter tasks, under 10 seconds, they can still be useful if processing multiple items, such as 'uploading file 3 of 50', to clarify the system's work. Provide the option to stop longer processes, to give users control and avoid frustration from feeling stuck.
-> Display loading indicators like determinate progress bars and circles
Progressive loading indicators

---

## Loading Spinner
Indeterminate loading spinners are used to show that isolated elements on a page are being processed. They provide feedback that the system is working, but don’t give any indication on how long the process will take.
[Loading spinner component](https://digitaldesign.volkswagen-group.com/r/wedpgDDe01rfNa1CTTYg5yR81nSPS1l8826ZM0gAnbY)
Loading spinner

---

## Progress circle
The progress circle is a determinate progress indicator used to show that a process is ongoing. Unlike a loading spinner, it can optionally indicate how much of the task has been completed.
[Progress circle component](https://digitaldesign.volkswagen-group.com/r/6HgTUqQItLHfcm-J80-rSSGz-ulJ1woBXRBIvBFo2OA)
Progress circle

---

## Progress bar
Progress bars provide feedback about the progress of a process and how long the user has to wait. File upload, download and installations are common examples for using progress bars.
Progress bar component (*coming soon)*
Progress bar indicating progress in percent

---

## Skeleton
Skeletons are used to indicate that a full page is loading. You should only use skeletons when the wait time is between 2 to 10 seconds. Skeletons help reduce the perceived wait time by hinting at the page’s final appearance.
Benefits of using skeletons:
* prevents users from thinking a system is not working
* creates an illusion of shorter waiting time
* reduces cognitive load
Skeleton component (coming soon)
Skeleton text and headline component on a card

---
