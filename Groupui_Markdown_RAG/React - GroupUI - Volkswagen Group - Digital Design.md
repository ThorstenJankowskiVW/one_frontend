---
title: React
source: GroupUI
category: guideline
type: documentation
topics:
  - accessibility
  - angular
  - react
  - tokens
  - web-component
last_modified: Tue, 17. Feb 2026 14:45
---

# React

---

## Installation & Usage
Please choose your preferred installation variant.

---

### Assets
Next to our [groupui-icon](https://digitaldesign.volkswagen-group.com/r/Q3NYZ_DDvt5JFs8m6-HTD53HlUn9MT2rujuTkpFJRXg) web component we provide all icons as well as classification files as svg in a separate npm package.
Add the following entry to your `package.json`:
"@group-ui/group-ui-assets": "https://assets.groupui.vwapps.run/specific/x.x.x/packages/group-ui-assets.tgz"
Afterwards add this import statement to the components javascript definition:
import icon from '@group-ui/group-ui-assets/icons/<brand>/<icon-name>.svg';
import classification from '@group-ui/group-ui-assets/classification/<classification-name>.svg';
Now you can use these assets in your application like the following example:
```html
<img src={icon}>
<img src={classification}>
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

---

### Example Repositories
Example implementations for different frameworks can be found under the following link:
[Example repos](https://digitaldesign.volkswagen-group.com/r/pWT1z2s9ilTFB6owWc80yYHd3UfAac8LB06aucN4sks)

---

### Use types for properties
GroupUI properties can be set via types. These types are located under `node_modules/@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/types/types.d.ts`
Most of the modern IDEs support code completion and auto-import for these types.
You may also import
`node_modules/@group-ui/group-ui-angular/node_modules/@group-ui/group-ui/dist/types/components.d.ts`
to get a better experience.
### How can I test with the React Testing Library?
The React Testing Library is a set of utilities and tools for testing React components. These utilities and tools support the known HTML elements like an `<input>`. Web Components are Custom Elements that the Testing Library does not know in general, so not each approach of the Testing Library can be adapted to Web Components. The further sections show some examples how GroupUI Web Components can be used with the Testing Library utilities and tools.
If you have further questions or use cases that are not considered here, please get in [contact](https://digitaldesign.volkswagen-group.com/r/lBVzqVXVZhE1_tobSE4N7B9ugYDMsjZuRoDTlwunKAQ) with us or open an Issue in our [Jira Contribution Board](https://devstack.vwgroup.com/jira/secure/RapidBoard.jspa?rapidView=20178).
### How to handle queries?
To find an element on the page use e.g. the `...ByTestId` or `...ByText` queries. The `...ByRole` queries are currently not supported. It is an open Issue.
// System under test
type Props = {
handleAnAction?: () => void;
}
const ReactComponent = (props: Props): JSX.Element => {
const handleClick = () => {
props.handleAnAction && props.handleAnAction()
}
return (
<GroupuiButton data-testid="button" onClick={() => handleClick()}>Click Me!</GroupuiButton>
);
};
// Test
test('find the button by data-testid attribute', () => {
const A\_FUNCTION = jest.fn();
render(<ReactComponent handleAnAction={A\_FUNCTION}/>);
const button = screen.getByTestId('button');
fireEvent.click(button)
expect(A\_FUNCTION).toHaveBeenCalled();
});
### How to handle User Input?
To set an input value, use type casting that cast the found `Element` to e.g. `HTMLGroupuiInputElement`. The approach of the `user-event` Library in this case `userEvent.type(A_CONTENT)` is currently not supported.
#### Example: Input Component
// System under test
type Props = {
handleAnAction?: (value?: String) => void;
}
const ReactComponent = (props: Props): JSX.Element => {
const inputRef = createRef<HTMLGroupuiInputElement>();
const handleClick = () => {
props.handleAnAction && props.handleAnAction(inputRef.current?.value)
}
return (
<>
<GroupuiInput data-testid="input" ref={inputRef}/>
<GroupuiButton data-testid="button" onClick={() => handleClick()}>Click Me!</GroupuiButton>
```html
</>
```
);
};
// Test
it('set the input value and call function by a button click', () => {
const A\_FUNCTION = jest.fn();
const A\_CONTENT = 'A\_CONTENT';
render(<ReactComponent handleAnAction={A\_FUNCTION}/>);
(screen.getByTestId('input') as HTMLGroupuiInputElement).value = A\_CONTENT;
fireEvent.click(screen.getByTestId('button'));
expect(A\_FUNCTION).toBeCalledWith(A\_CONTENT);
});
Same for GroupUI Dropdown, the method `userEvent.selectOptions(dropdown, '1')` is not supported.
#### Example: Dropdown Component
// System under test
type Props = {
handleAnAction?: (value?: String) => void;
}
const ReactComponent = (props: Props): JSX.Element => {
const dropDownRef = createRef<HTMLGroupuiDropdownElement>();
const handleClick = () => {
props.handleAnAction && props.handleAnAction(dropDownRef.current?.value)
}
return (
<>
<GroupuiDropdown data-testid="dropdown" ref={dropDownRef}>
<GroupuiDropdownOption data-testid="dropdown-option-a" value="A">Content\_A</GroupuiDropdownOption>
```html
</GroupuiDropdown>
<GroupuiButton data-testid="button" onClick={() => handleClick()}>Click Me!</GroupuiButton>
</>
```
);
};
// Test
test('set the selected value and call function by a button click', async () => {
const A\_FUNCTION = jest.fn();
const A\_VALUE = 'A\_VALUE';
render(<ReactComponent handleAnAction={A\_FUNCTION}/>);
const dropdown = screen.getByTestId('dropdown') as HTMLGroupuiDropdownElement;
dropdown.value = A\_VALUE
fireEvent.click(screen.getByTestId('button'));
expect(A\_FUNCTION).toBeCalledWith(A\_VALUE);
});
### How to Fire an event?
To fire an event by using the `fireEvent` method you need to set the property `bubbles` to `true`.
#### Example: Fire the Input event
// System under test
type Props = {
handleAnAction?: (value?: String) => void;
}
const ReactComponent = (props: Props): JSX.Element => {
const handleInput = (event: React.FormEvent<HTMLGroupuiInputElement>) => {
props.handleAnAction && props.handleAnAction((event.target as HTMLGroupuiInputElement).value)
}
return (
<GroupuiInput data-testid="input"
onInput={(event: React.FormEvent<HTMLGroupuiInputElement>) => handleInput(event)}/>
);
};
// Test
test('set input value and call function by firing an input event', () => {
const A\_FUNCTION = jest.fn();
const A\_CONTENT = 'A\_CONTENT';
render(<GroupUiComponents handleAnAction={A\_FUNCTION}/>);
const input = screen.getByTestId('input') as HTMLGroupuiInputElement;
input.value = A\_CONTENT;
fireEvent.input(input, {bubbles: true})
expect(A\_FUNCTION).toBeCalledWith(A\_CONTENT);
});
To fire the Change event use the custom event `groupuiChange` instead of the native `change` event. The native `change` event can not bubbling through the [Shadow Dom](https://developers.google.com/web/fundamentals/web-components/shadowdom). We forward the `change` event as a custom `groupuiChange` event.
#### Example: Fire the Change event
// System under test
type Props = {
handleAnAction?: (value?: String) => void;
}
const ReactComponent = (props: Props): JSX.Element => {
const handleChange = (event: CustomEvent) => {
props.handleAnAction && props.handleAnAction((event.target as HTMLGroupuiInputElement).value)
}
return (
<GroupuiInput data-testid="input"
onGroupuiChange={(event: CustomEvent) => handleChange(event)}/>
);
};
// Test
test('set input value and call function by firing change event', () => {
const A\_FUNCTION = jest.fn();
const A\_CONTENT = 'A\_CONTENT';
render(<ReactComponent handleAnAction={A\_FUNCTION}/>);
const input = screen.getByTestId('input') as HTMLGroupuiInputElement;
input.value = A\_CONTENT;
fireEvent(input, new Event('groupuiChange', {bubbles: true}))
expect(A\_FUNCTION).toBeCalledWith(A\_CONTENT);
});

---

#### Jest: Unexpected token (export) when importing any component
[Solution](https://github.com/facebook/jest/issues/2550): Extend your Jest configuration (e.g. in jest.config.ts / package.json) with the following entry to prevent syntax checking on the provided groupui dependency:
"jest": {
"transformIgnorePatterns": [
"node\_modules/?!(@group-ui)"
]
}
#### Problems with native events: change and invalid
Most of the native events (e.g. input, blur, …) which are fired by a native html elements (e.g <input/>) inside of a web component are able to pass the Shadow DOM. Some, including the and invalid event, not. React is doing kind of mapping of native events to synthetic events and 'suppressing some'.
Solution: For that reason we added the custom events groupuiChange and groupuiInvalid. Use these events in your react application instead of the native events.
