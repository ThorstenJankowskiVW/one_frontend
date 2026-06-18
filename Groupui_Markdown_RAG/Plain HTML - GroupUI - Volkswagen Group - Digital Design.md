---
title: Plain HTML
source: GroupUI
category: documentation
type: documentation
topics:
  - accessibility
  - tokens
  - web-component
last_modified: Tue, 17. Feb 2026 14:36
---

# Plain HTML

---

The web components can be installed as package from either CDN or the VW Artifactory.
Besides that they can be integrated directly into HTML without installation.

---

### Package Security
After the installation of npm packages you should ensure that an original group-ui package is used. Therefore we provide integrity checksums. This checksums can then be used to validate the authenticity of the used package.
Check the checksums on the following page to match with the values in your package-lock.json:
[Go to checksums page](https://checksums.groupui.vwapps.run/)
### Assets
Next to our [groupui-icon](https://digitaldesign.volkswagen-group.com/r/Q3NYZ_DDvt5JFs8m6-HTD53HlUn9MT2rujuTkpFJRXg) web component we provide all icons as well as classification files as svg in a separate npm package.
Add the following entry to your `package.json`:
"@group-ui/group-ui-assets": "https://assets.groupui.vwapps.run/specific/x.x.x/packages/group-ui-assets.tgz"
If you don't want to download all the [icons](https://digitaldesign.volkswagen-group.com/r/jb7CHDeWInJ0sEEdbMhGCSZpMRnkOrgTrYMmrIAOanU) and [classifications](https://digitaldesign.volkswagen-group.com/r/pD7oJVkTy5x2EW749RVaTKmYy2cJITY3Go-LzdMq1Cs), you can also access them via direct link.
For example:
[https://assets.groupui.vwapps.run/latest/static/icons/vwgroup/rocket-24.svg](https://assets.groupui.vwapps.run/specific/x.x.x/static/icons/vwgroup/rocket-24.svg)
<https://assets.groupui.vwapps.run/specific/x.x.x/static/icons/vwgroup/rocket-24.svg>
<https://assets.groupui.vwapps.run/latest/static/classification/confidential-internal-l.svg>
It is also possible, to use the icons from your local directory. See [here](https://digitaldesign.volkswagen-group.com/r/wRrkUPCE9KqxJUZHslN1jGd6cViGluxFM0V41O88Zck) for more information.
### Basic integration
This section demonstrates how to integrate GroupUI in a simple application using webpack.

---

### Prepare package.json
Include the required dependencies for GroupUI and webpack as following:
{
"name": "groupui-webpack",
"version": "1.0.0",
"scripts": {
"build": "webpack"
},
"dependencies": {
"@group-ui/group-ui": "https://groupui.vwapps.run/specific/x.x.x/packages/group-ui.tgz"
},
"devDependencies": {
"css-loader": "^6.7.1",
"html-webpack-plugin": "^5.5.0",
"style-loader": "^3.3.1",
"webpack": "^5.74.0",
"webpack-cli": "^4.10.0"
}
}

---

### Folder structure and custom element definition
Create a `src` folder in your project root and place your `index.html`, your .css files and an `index.js` inside of it.
In `index.js` import and define the custom elements of GroupUI like so:
import './reset.css'
import './style.css'
import { defineCustomElements } from '@group-ui/group-ui/dist/loader/index.es2017.js';
defineCustomElements();
Import your .css files in here as well.

---

### Specify webpack configuration
Create a `webpack.config.js` file in your project root and paste the following content in it:
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry: './src/index.js',
module: {
rules: [
{
test: /\.css$/i,
use: ['style-loader', 'css-loader'],
},
],
},
plugins: [
new HtmlWebpackPlugin({
template: 'src/index.html'
}),
]
}

---

### Build your website
You can now use all the GroupUI web components and the css variables in your `index.html`.
Run `npm run build` to create your bundle!
You can find a working example at <https://groupui.vwapps.run/examples/html-webpack.tgz>
Note: Please keep in mind, to add the fonts to your index.html. The code snippet below should do the trick.
﻿
﻿Since GroupUI 12.0.0
﻿<link rel="stylesheet"
﻿href="../node\_modules/@group-ui/group-ui/dist/collection/assets/themes/tokens.css" />
﻿
﻿Prior to GroupUI 12.0.0
﻿<link rel="stylesheet"
﻿href="../node\_modules/@group-ui/group-ui/dist/collection/assets/themes/vwgroup/vwgroup.css" />

---

### Integration with web application bundler e.g. Parcel, Snowpack, Vite
If you prefer to handle bundling, lazy-loading and defining the custom elements yourself, you could use the custom elements output target. The custom elements bundle does not apply polyfills, nor automatically define each custom elements. This approach is only for advanced usage and some particular bundler techniques like [parcel](https://parceljs.org/), [snowpack](https://www.snowpack.dev/) or [vite](https://vitejs.dev/).
By default, GroupUI 4 components are bundled including self-lazy loading. Instead of requesting the entire component library, the default distribution is able to generate a tiny entry build ready to load any of its components on-demand.
If you choose the way of advanced usage you have to import the vanilla custom elements. The following code snippet will import all components, this could result in a larger bundle size because lazy-loading is not applied.
**Since GroupUI 9.0.0** `defineCustomElements()` has moved to the components directory, so please use the following code.
import { defineCustomElements } from '@group-ui/group-ui/dist/components/index.js';
defineCustomElements();
**Prior to GroupUI 9.0.0** `defineCustomElements()` was located in the custom-elements, so please use the following code
import { defineCustomElements } from '@group-ui/group-ui/dist/custom-elements/index.js';
defineCustomElements();
Also, you could register each component manually
import { GroupuiButton } from '@group-ui/group-ui/dist/custom-elements/index.js';
customElements.define('groupui-button', GroupuiButton);
You will have to include the needed assets by copying them from `./node_modules/@group-ui/group-ui/dist/group-ui/assets/themes` to your build distribution.

---

### Example Repositories
Example implementations for different frameworks can be found under the following link:
[Example repos](https://digitaldesign.volkswagen-group.com/r/pWT1z2s9ilTFB6owWc80yYHd3UfAac8LB06aucN4sks)
