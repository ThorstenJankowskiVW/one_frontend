---
title: Installation (CSS)
source: GroupUI
category: documentation
type: documentation
topics:
  - tokens
last_modified: Mon, 09. Mar 2026 14:48
---

# Installation (CSS)

---

## Introduction
We provide the GroupUI Design Tokens either as npm packages for installation or as plain CSS bundles that can be integrated directly into HTML.
Currently, they can be installed as CSS custom properties through:
* Package from CDN using npm
* Package from the Devstack artifactory using npm
* Plain CSS bundles from CDN via html import

---

## Custom Property import
Once installed, the recommended way to use the Group-UI Design Tokens, is by importing them directly in a CSS file:

---

@import "~@group-ui/design-tokens-css/vwgroup/bundle.css"
.example {
color: var(--groupui-sys-color-action-basic-default)
}

---

Certain bundlers struggle with resolving aliased node\_module imports during the build process. If this is the case you may have to provide the relative path to the stylesheet:
@import "../node\_modules/@group-ui/design-tokens-css/vwgroup/bundle.css"
.example {
color: var(--groupui-sys-color-action-basic-default)
}

---

## Version Migration
With Version 2.0.0 came major updates in the name structure of the token names that will break your code.
Therefor a migration script was created to update the token names in your source code.
It consists of a `migration.sh` and a `gui-tokens.txt` file.
The first one will replace the token names in all SCSS files using the gui-tokens file as mapping source for the replacement.
To migrate the tokens in your application you have to download the zip file for the version update you need and place both files in the top level of your application structure.
Now you can run the migration.sh and the tokens will be updated in the SCSS files.
* [token-migration-v1-to-v2.zip3 KB - zip](https://digitaldesign.volkswagen-group.com/api/attachment/download/eyJibG9ja19yZWZlcmVuY2UiOm51bGwsImlkIjoxNzY3MDB9:volkswagen:EvaUoPAFK_db3CbZVd3MjSWgaLsjcNFs2UR9oq3Xs8I)
