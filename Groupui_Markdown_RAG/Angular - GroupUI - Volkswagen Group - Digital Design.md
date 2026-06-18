---
title: Angular
source: GroupUI
category: guideline
type: documentation
topics:
  - angular
  - tokens
  - web-component
last_modified: Tue, 17. Feb 2026 14:43
---

# Angular

---

### Assets
Next to our [groupui-icon](https://digitaldesign.volkswagen-group.com/r/Q3NYZ_DDvt5JFs8m6-HTD53HlUn9MT2rujuTkpFJRXg) web component we provide all icons as well as classification files as svg in a separate npm package.
Add the following entry to your `package.json`:
"@group-ui/group-ui-assets": "https://assets.groupui.vwapps.run/specific/x.x.x/packages/group-ui-assets.tgz"
Add this code snippet to your angular.json inside the options.assets array:
{
"glob": "\*\*/\*",
"input": "./node\_modules/@group-ui/group-ui-assets/icons",
"output": "./assets/"
},
{
"glob": "\*\*/\*",
"input": "./node\_modules/@group-ui/group-ui-assets/classification",
"output": "./assets/"
}
Now you can use these assets in your application like in the following example:
```html
<img src="assets/vwgroup/check-48.svg">
<img src="assets/confidential-internal-l.svg">
```
If you don't want to download all the [icons](https://digitaldesign.volkswagen-group.com/r/jb7CHDeWInJ0sEEdbMhGCSZpMRnkOrgTrYMmrIAOanU) and [classifications](https://digitaldesign.volkswagen-group.com/r/pD7oJVkTy5x2EW749RVaTKmYy2cJITY3Go-LzdMq1Cs), you can also access them via direct link.
For example:
[https://assets.groupui.vwapps.run/latest/static/icons/vwgroup/rocket-24.svg](https://assets.groupui.vwapps.run/specific/x.x.x/static/icons/vwgroup/rocket-24.svg)
<https://assets.groupui.vwapps.run/specific/x.x.x/static/icons/vwgroup/rocket-24.svg>
<https://assets.groupui.vwapps.run/latest/static/classification/confidential-internal-l.svg>

---

### Package Security
After the installation of npm packages you should ensure that an original group-ui package is used. Therefore we provide integrity checksums. This checksums can then be used to validate the authenticity of the used package.
Check the checksums on the following page to match with the values in your package-lock.json:
[Go to checksums page](https://checksums.groupui.vwapps.run/)
## Usage
The web components which you get by installing the `group-ui-angular` package are wrapped in Angular components. Some advantages of doing this are that you get types for your components, event-binding, and you also get the ability to use ngmodel.
Note: If you are using Angular 9 please be aware that there is an incompatibility with the Ivy Compiler. Newer Angular versions are supported.
Note: Types are currently just working for events. Type safety for component properties isn't working at he moment. [Bugticket for the types issue](https://github.com/stenciljs/output-targets/issues/409)
The following steps will guide you through the integration.

---

#### Step 1
You can install our package by adding the following dependency to `package.json`:
"@group-ui/group-ui-angular": "https://groupui.vwapps.run/specific/x.x.x/packages/group-ui-angular.tgz"
#### Step 2
For asset integration please add the following code snippet to your `angular.json` inside the `options.assets` array:
{
"glob": "\*\*/\*",
"input": "./node\_modules/@group-ui/group-ui-angular/node\_modules/@group-ui/group-ui/dist/group-ui/assets",
"output": "./assets/"
}
To use the assets required by our Web Components, you need to add the following imports to your `styles.scss` (e.g. vwgroup brand, perhaps change path to suitable brand):
**Since GroupUI 12.0.0**
@import "\*\*PATH\_TO\_NODE\_MODULES\*\*/@group-ui/group-ui-angular/node\_modules/@group-ui/group-ui/dist/group-ui/assets/themes/tokens.css";
**Prior to GroupUI 12.0.0**
@import "\*\*PATH\_TO\_NODE\_MODULES\*\*/@group-ui/group-ui-angular/node\_modules/@group-ui/group-ui/dist/group-ui/assets/themes/vwgroup/vwgroup.css";
#### Step 3
Afterwards import the `GroupUiModule` from `@group-ui/group-ui-angular` in any angular module (e.g. the app.module.ts):
import { AppComponent } from './app.component';
import { GroupUiModule } from '@group-ui/group-ui-angular';
@NgModule({
declarations: [
AppComponent
],
imports: [
GroupUiModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
With Angular 17+ the components are marked as standalone by default. Keep in mind, to add the GroupUiModule in every component.

---

### Use types for properties
GroupUI properties can be set via types. These types are located under `node_modules/@group-ui/group-ui-angular/node_modules/@group-ui/group-ui/dist/types/types.d.ts`
Most of the modern IDEs support code completion and auto-import for these types.
You may also import
`node_modules/@group-ui/group-ui-angular/node_modules/@group-ui/group-ui/dist/types/components.d.ts`
to get a better experience.
import {Component} from '@angular/core';
import {TextSize, Weight} from '@group-ui/group-ui-angular/node\_modules/@group-ui/group-ui/dist/types';
@Component({
selector: 'app-root',
template: '<groupui-text ' +
'size=theTypedTextSize ' +
'weight=theTypedWeight>' +
'</groupui-text>',
styleUrls: ['./app.component.scss']
})
export class AppComponent {
theTypedTextSize: TextSize = 'caption';
theTypedWeight: Weight = 'italic';
}

---

### Implementing ControlValueAccessor in Angular
In some use cases especially for form control components (for example using ngModel) it can be helpful to wrap the GroupUI components into custom components or directives. Following example provides guidelines how to implement a [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) in your angular application:
<https://www.digitalocean.com/community/tutorials/angular-custom-form-control>

---

### Example Repositories
Example implementations for different frameworks can be found under the following link:
[Example repos](https://digitaldesign.volkswagen-group.com/r/pWT1z2s9ilTFB6owWc80yYHd3UfAac8LB06aucN4sks)
#### Jest/jest-preset-anguar: Cannot use import statement outside a module
[Solution](https://github.com/thymikee/jest-preset-angular/issues/1149): Extend your Jest configuration (e.g. in jest.config.ts / package.json) with the following entry to prevent syntax checking on the provided groupui dependency:
"jest": {
"transformIgnorePatterns": [
"node\_modules/?!(@group-ui)"
]
}
