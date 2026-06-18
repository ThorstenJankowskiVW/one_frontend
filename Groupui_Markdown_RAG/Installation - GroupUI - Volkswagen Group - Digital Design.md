---
title: Installation
source: GroupUI
category: documentation
type: documentation
topics:
  - css-framework
  - tokens
last_modified: Fri, 08. May 2026 07:49
---

# Installation

---

## Availability
We provide three distinct methods for integrating the Group-UI CSS Framework:
1. Package from CDN using npm
2. Package from the devstack artifactory using npm
3. Plain CSS bundles from CDN

---

## From CDN
To incorporate the Group-UI CSS Framework into your Node.js project, run one of the following commands within your project directory, where the 'package.json' file is situated. This is commonly the root directory of your project.

---

### Latest
Shell Copy
npm install https://groupui-css.vwapps.run/latest/groupui-css.tgz

---

### Versioned
Shell Copy
npm install https://groupui-css.vwapps.run/specific/\*\*VERSION\*\*/groupui-css.tgz
IMPORTANT: For optimal stability in production environments, it is strongly advised to install a specific version of the tokens. Be sure to replace "latest" with a valid version. You can find the list of available versions [here](https://digitaldesign.volkswagen-group.com/document/1717#/releases/css-framework).

---

## From Devstack Artifactory
To install the Group-UI CSS Framework from the devstack artifactory, ensure that npm is configured correctly by following these steps:
Shell Copy
npm config set @group-ui:registry https://jfrog.devstack.vwgroup.com/artifactory/api/npm/groupui-npm/
npm login --scope=@group-ui
Once this is done, you can install the package using one of the following commands:

---

### Versioned
Shell Copy
npm install @group-ui/group-ui-css-framework@\*\*VERSION\*\*

---

## Plain CSS Bundle
It's also possible to download the plain CSS bundle. You'll find them here:
* LATEST: <https://groupui-css.vwapps.run/latest/groupui.css>
* VERSIONED: [https://groupui-css.vwapps.run/specific/\*\*VERSION\*\*/groupui.css](https://groupui-css.vwapps.run/specific/1.0.1/groupui.css)
