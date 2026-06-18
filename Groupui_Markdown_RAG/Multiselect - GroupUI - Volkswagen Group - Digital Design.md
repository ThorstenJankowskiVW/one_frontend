---
title: Multiselect
source: GroupUI
category: component
type: documentation
topics:
  - react
  - web-component
last_modified: Fri, 12. Dec 2025 15:11
---

# Multiselect

---

### Multiselect - Live demo
```html
<div class="multi-select-life-demo container-border flex-justify-center">
<div class="slim-content">
<groupui-multiselect>
<groupui-multiselect-option value="first">Option 1</groupui-multiselect-option>
<groupui-multiselect-option value="second">Option 2</groupui-multiselect-option>
<span slot="label">Label</span>
<span slot="description">Description</span>
</groupui-multiselect>
</div>
</div>

```

---

### Multiselect - Option Groups
```html
<div class="multi-select-life-demo container-border flex-justify-center">
<div class="slim-content">
<groupui-multiselect>
<span slot="label">Label</span>
<span slot="description">Description</span>
<groupui-multiselect-option-group label="Group One">
<groupui-multiselect-option>Option 1</groupui-multiselect-option>
</groupui-multiselect-option-group>
<groupui-multiselect-option-group label="Group Two">
<groupui-multiselect-option>Option 2</groupui-multiselect-option>
</groupui-multiselect-option-group>
</groupui-multiselect>
</div>
</div>

```

---

### Multiselect - Expandable Option Groups
```html
<div class="multi-select-life-demo container-border flex-justify-center">
<div class="slim-content">
<groupui-multiselect>
<span slot="label">Label</span>
<span slot="description">Description</span>
<groupui-multiselect-option-group label="Group one" expandable>
<groupui-multiselect-option>Option 1</groupui-multiselect-option>
<groupui-multiselect-option>Option 2</groupui-multiselect-option>
</groupui-multiselect-option-group>
<groupui-multiselect-option-group label="Group two" expandable>
<groupui-multiselect-option>Option 3</groupui-multiselect-option>
<groupui-multiselect-option>Option 4</groupui-multiselect-option>
</groupui-multiselect-option-group>
</groupui-multiselect>
</div>
</div>

```

---

### Multiselect - Select all
```html
<div class="multi-select-all container-border flex-justify-center">
<div class="slim-content">
<groupui-multiselect>
<groupui-multiselect-option value="all" select-all>Select all</groupui-multiselect-option>
<groupui-multiselect-option value="first">Option 1</groupui-multiselect-option>
<groupui-multiselect-option value="second">Option 2</groupui-multiselect-option>
<span slot="label">Label</span>
<span slot="description">Description</span>
</groupui-multiselect>
</div>
</div>

```

---

### Multiselect - Options with descriptions
```html
<div class="multi-select-life-demo container-border flex-justify-center">
<div class="slim-content">
<groupui-multiselect>
<span slot="label">Label</span>
<span slot="description">Description</span>
<groupui-multiselect-option-group label="Group One" expandable>
<span slot="description">This is option group one</span>
<groupui-multiselect-option>
```
Option 1
```html
<span slot="description">This is option 1</span>
</groupui-multiselect-option>
<groupui-multiselect-option>
```
Option 2
```html
<span slot="description">This is option 2</span>
</groupui-multiselect-option>
</groupui-multiselect-option-group>
</groupui-multiselect>
</div>
</div>
```
### Multiselect - Built in search
```html
<div class="multi-select-life-demo container-border flex-justify-center">
<div class="slim-content">
<groupui-multiselect built-in-search searchable>
<span slot="label">Search</span>
<span slot="description">Case sensitive</span>
<groupui-multiselect-option-group label="Group one" expandable>
<groupui-multiselect-option>First Option</groupui-multiselect-option>
<groupui-multiselect-option>Second Option</groupui-multiselect-option>
</groupui-multiselect-option-group>
<groupui-multiselect-option-group label="Group two" expandable>
<groupui-multiselect-option>Third Option</groupui-multiselect-option>
<groupui-multiselect-option>Fourth Option</groupui-multiselect-option>
</groupui-multiselect-option-group>
</groupui-multiselect>
</div>
</div>

```

---

In **React**, you have to set the new value by overwriting the old one. See the Code snippet below our check our React example repo.
JSX Copy
export default function Multiselect() {
const allOptions = [
{key: 'o1', label: 'Option 1'},
{key: 'o2', label: 'Option 2'},
{key: 'o3', label: 'Option 3'},
];
let [selectedOptionKeys, setSelectedOptionKeys] = useState([]);
const optionsAsTags = allOptions.map(o =>
<GroupuiMultiselectOption
key={o.key}
value={o.key}
checked={selectedOptionKeys.indexOf(o.key) >= 0}
onCheckedChanged={(e) => {
toggle(e.target.value, e.target.checked);
}}
>
{o.label}
```html
</GroupuiMultiselectOption>,
```
);
function toggle(key, checked) {
if(checked) {
setSelectedOptionKeys((selectedOptionKeys) => [...selectedOptionKeys, key].sort())
} else {
setSelectedOptionKeys((selectedOptionKeys) => selectedOptionKeys.filter(o => o !== key));
}
}
return (
<main className="multiselect">
<GroupuiCard>
<GroupuiMultiselect>
<GroupuiMultiselectOption selectAll>All</GroupuiMultiselectOption>
{optionsAsTags}
```html
</GroupuiMultiselect>
</GroupuiCard>
</main>
```
)
}
## Do / Don't
* ![](./Multiselect - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvanRLOEdzZmhHRVFWWlZCenoycGcucG5nIn0_volkswagen_kOJD8fQIXYoRy_hRRMklOQeSu5HesVaNTsIA1Ui3WeE)
  Do
  Do use concise labels and descriptions to ensure users can understand what needs to be selected.
* ![](./Multiselect - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvc0RxR3Y0SzNNd0c3OHRIZE1XQXIucG5nIn0_volkswagen_hQBJqVdiyW-V6cR8QGUO5TG7vLYtpwNZlP1gf1q51Fk)
  Do
  Do keep enough space so selected option is readable.
* ![](./Multiselect - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvUzZaeDlvQlBFMzhSMksyNDNHZE0ucG5nIn0_volkswagen_nem74NIJaFUM8Yxb-Vm_v3-cvh9YsVPURkxCF_tfHuk)
  Don't
  Do not leave select component without label or use inconcise labels or questions.
* ![](./Multiselect - GroupUI - Volkswagen Group - Digital Design_files/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvWmFVVzZSWHdMdnp5R1FrcVEzOVkucG5nIn0_volkswagen_EEOhoRAzoZcp6tDTDQFXvMIa3m-LSqK04wpPhMjFB2Q)
  Don't
  Avoid truncating content with a short width.

---

### Multiselect - Showcase
info
The multiselect comes with a default validation, which works fine for simple cases. If you want to work with a more specialized validation or framework specific validation, it is recommended to deactivate the default validation with noValidation and set the severity yourself.

---

## Deprecation Info
| Property/Event | Deprecated since Version | Removed in Version | Substitute |
| --- | --- | --- | --- |
| Multiselect: label | 6.5.0 | 7.0.0 | use the dedicated slot instead |
| Multiselect: description | 6.5.0 | 7.0.0 | use the dedicated slot instead |
