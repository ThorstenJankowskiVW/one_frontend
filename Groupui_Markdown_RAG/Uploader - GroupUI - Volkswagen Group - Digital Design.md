---
title: Uploader
source: GroupUI
category: component
type: documentation
topics:
  - accessibility
  - css-framework
  - web-component
last_modified: Wed, 29. Apr 2026 09:22
---

# Uploader

---

## Usage
An upload component is crucial for any digital interface where users need to submit files. It allows users to share various file types, such as documents and images, directly with a system. Commonly found in forms, content management systems, and collaborative platforms, upload components are essential for tasks like document verification and media sharing.
The File Uploader component comes in three types. The first one is designed specifically for drag and drop and the two are adaptations of the Input Field and Button components.
**Types of the upload components:**
* Drag-and-drop upload
* Upload Button
* Upload Input
At all three upload components users can modify the restrictions area according to their needs and also the labels of the components.
Upload Drag and Drop
Upload Button
Upload Input

---

### Component Status
We want to provide full transparency about the status of each building block in our documentation.
For every component, you can immediately see whether it is available, planned, or not available.
Figma Component: is available
Upload Button and Status Web Components: are available
Upload Button CSS Component: is available
Upload Input and Drag and Drop Web Components: are not available
Upload Input, Status and Drag and Drop CSS Components: are not available
### Upload drop zone
The upload drop zone component offers a large, interactive drop zones where users can drag files directly from their device. It also supports click-to-upload as a fallback.
Upload drop zone components simplify file uploads, making them faster and more intuitive, especially for power users who often upload multiple files. This method reduces clicks and enhances user engagement with visual feedback, creating a dynamic experience. It's ideal for desktop applications focused on productivity and speed.
* Users need to upload multiple files quickly.
* Uploading is a primary action (e.g., media libraries, file managers).
* The upload area is visually prominent and can afford space.
* Desktop first application (Drag-and-drop action might not be supported on mobile devices)
```
```html
<groupui-upload-dropzone>
```
Drag &amp; drop file or click to browse
```html
<span slot="label">Upload File</span>
<span slot="description">Restrictions</span>
</groupui-upload-dropzone>
```
```
Note:
You can adjust the size of the upload drop zone as needed, but it must have a minimum size of 92px for height and 288px for width.
Drag and drop uploader - Size variations

---

### Upload Button
The upload button provides a minimal interface for file selection. When clicked, it opens the native file picker dialog.
Single upload button components are the most universally accessible and straightforward option. Their simplicity ensures that users of all skill levels can easily understand and complete the upload process. The upload button is highly compatible across devices and browsers, including mobile platforms, and it supports accessibility standards effectively.
* Uploading is part of a form with validation.
* Integrating file upload into forms or compact UI layouts.
* Supporting mobile and touch interfaces where drag-and-drop is not ideal.
* Offering a familiar and accessible interaction pattern.
* Providing a fallback or alternative to drag-and-drop.
### Upload button - live demo
```html
<div class="upload-button container-border flex-center">
<groupui-upload-button>
<span slot="label">Label</span>
<span slot="description">Description</span>
```
Click to upload
```html
</groupui-upload-button>
</div>

```

---

### Upload Input
It is designed to look like a standard text input field, providing a familiar experience. The component's states are designed to meet file upload requirements, allowing users to receive feedback throughout the entire process.
This variation of the file upload component is restricted to used when single file will be uploaded.
Great for situations that need both accuracy and adaptability. It's handy in places where you can't use drag-and-drop, like remote sessions or limited user interfaces. This approach works well for forms since users are already accustomed to the component.
* Uploading is part of a form with validation.
* Users restricted to upload only a single file with this component.
* Integrating file upload into forms or compact UI layouts.
* Offering a familiar and accessible interaction pattern.
Input field uploader - Live demo

---

### Upload Status
This element appears once the upload begins, whether through drag-and-drop or a button variation. It shows the current status of the upload.
When you upload files, they are organized into a table below the upload component. This table displays the files being uploaded with their upload status, file size, file type and name of the file.
There are two different sizes of the upload status (small & large). They have indication on each about the process of the upload. These status are used with the upload button and upload drag-and-drop as they support multiple file uploads.
### Upload Status - live demo
```html
<div class="upload-status container-border">
<groupui-upload-status visible file-size="36 Bytes" message="Uploading" status="uploading">
```
Uploading file upload
```html
</groupui-upload-status>
</div>
```
### Upload Status - variants
```html
<div class="upload-status-variants container-border">
<groupui-upload-status visible file-size="36 Bytes" message="Uploading" status="uploading">
```
Uploading file upload
```html
</groupui-upload-status>
<groupui-upload-status visible file-size="36 Bytes" message="Error Message" status="error">
```
Failed file upload
```html
</groupui-upload-status>
<groupui-upload-status visible message="Success Message" status="success">
```
Successfull file upload
```html
</groupui-upload-status>
<groupui-upload-status size="s" visible file-size="36 Bytes" message="Uploading" status="uploading">
```
Uploading file upload
```html
</groupui-upload-status>
<groupui-upload-status size="s" visible file-size="36 Bytes" message="Error Message" status="error">
```
Failed file upload
```html
</groupui-upload-status>
<groupui-upload-status size="s" visible message="Success Message" status="success">
```
Successfull file upload
```html
</groupui-upload-status>
</div>

```

---

## Do's and dont's
* ![](./Uploader - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZk5VZng3N1k1THVVODV2eHE5QXAucG5nIn0_volkswagen_06sqzcN9OUqYmd7lwIYJPqBPA1ddk2GoCb3nVwrk3rw)
  Do
  Use upload inputs only for single file uploads.
* ![](./Uploader - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvcVVzNVRubXhIUm1wQlpZU3N5NXgucG5nIn0_volkswagen_2llZrr0uKQ60Hhntins9ZpPTkvHH9ePhw2DWQeQO-0E)
  Do
  Please ensure that the requirements for uploads are written clearly and instructively.
* ![](./Uploader - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvZEhqUXRlZ3RiUXNOTXFYSHo0UlYucG5nIn0_volkswagen_oz89rxP-wn6coQZA_0wpu5nJh2aIKthSF4KqVdRICA0)
  Do
  Ensure that the upload status components maintain a consistent component size.
* ![](./Uploader - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvVWM2eUNmWUZ5ZndDTktOTVNFQlQucG5nIn0_volkswagen_2qlvb3K8eYMI4irsg76qAN0d6TuHA_NgoYFfxsCAmac)
  Do
  Give clear feedback to the users about upload errors
* ![](./Uploader - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwva1h1NkxBV1E4TXhlblRTWGs2SHkucG5nIn0_volkswagen_OpgYcR9zD5_9XHQ_066j43zrhr2p0Aa-k2CJx0s-7_8)
  Don't
  Do not use the upload inputs for multiple file uploads.
* ![](./Uploader - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvVnN6ckNWYXJ6SzlMckpXb1U2MzMucG5nIn0_volkswagen_cFMcrlB5dVrLZ8syhpMNRZ8kdWNxmlwinmc8Xczb26I)
  Don't
  Avoid from writing unclear text to the requirements area for the file uploader component.
* ![](./Uploader - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvOG9LWDVqdWh2cGNVcWtwWVZTc00ucG5nIn0_volkswagen_Za7zlGfTMchqUF7-UulcVI7yjtwAKBp_YxS_bqD9_Dw)
  Don't
  Do not combine the small and large upload status components in the same section.
* ![](./Uploader - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvR1EzdkZ0RjlSWXpmNXFoWDdzc2cucG5nIn0_volkswagen_7sUx1KNsKupwYdbKyEtRI2TCjyvmdr-2EiVJd_3X3-o)
  Don't
  Do not mislead users with unclear error messages
### Upload Button
```
```html
<groupui-showcase components="groupui-upload-button" custom-elements-json-path="https://groupui.vwapps.run/latest/static/group-ui/custom-elements/custom-elements-vwgroup.json">
<groupui-upload-button>
<span slot="label">Label</span>
<span slot="description">Description</span>
```
Click to upload
```html
</groupui-upload-button>
</groupui-showcase>
```
```
### Upload Dropzone
```
```html
<groupui-showcase components="groupui-upload-dropzone" custom-elements-json-path="https://groupui.vwapps.run/staged/static/group-ui/custom-elements/custom-elements-vwgroup.json">
<groupui-upload-dropzone>
```
Drag &amp; drop file or click to browse
```html
<span slot="label">Label</span>
<span slot="description">Description</span>
</groupui-upload-dropzone>
</groupui-showcase>
```
```
### Upload Status
```
```html
<groupui-showcase components="groupui-upload-dropzone" custom-elements-json-path="https://groupui.vwapps.run/latest/static/group-ui/custom-elements/custom-elements-vwgroup.json">
<groupui-upload-status visible file-size="36 Bytes" message="Uploading" status="uploading">
```
Uploading file upload
```html
</groupui-upload-status>
</groupui-showcase>
```
```
## CSS Framework
Upload Button
HTMLSCSSJavascript
```
<link rel="stylesheet" type="text/css" href="https://groupui-css.vwapps.run/latest/groupui.css">
<label class="g-label" for="input-small">Label</label>
<label class="g-upload-btn g-upload-btn-small" for="input-small">
<i class="g-icon g-upload-btn-icon g-icon-upload-16"></i> Small
<input type="file" id="input-small" />
```html
</label>
<span class="g-description">Description</span>
<label class="g-label" for="input">Label</label>
<label class="g-upload-btn" for="input">
<i class="g-icon g-upload-btn-icon g-icon-upload-24"></i> Default
<input type="file" id="input" />
</label>
<span class="g-description">Description</span>
<label class="g-label" for="input-large">Label</label>
<label class="g-upload-btn g-upload-btn-large" for="input-large">
<i class="g-icon g-upload-btn-icon g-icon-upload-32"></i> Large
<input type="file" id="input-large" />
</label>
<span class="g-description">Description</span>
<label class="g-label" for="disabled">Label</label>
<label class="g-upload-btn g-upload-btn-disabled" for="disabled">
<i class="g-icon g-upload-btn-icon g-icon-upload-24"></i> Disabled
<input type="file" id="disabled" disabled/>
</label>
<span class="g-description">Description</span>
```
```
