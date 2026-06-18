---
title: Forms Template
source: GroupUI
category: template
type: documentation
topics:
  - accessibility
  - web-component
last_modified: Wed, 01. Oct 2025 16:46
---

# Forms

---

### Forms Template - Account settings
```html
<div id="theme-switch-wrapper">
<span slot="label">Expiry date</span>
</groupui-date-picker>
</groupui-grid-col>
<groupui-grid-col m="6">
<groupui-input type="password" id="card-cvv" value="123" icon="info-24"
```
icon-position="right">
```html
<span slot="label">CVC/CVV</span>
</groupui-input>
</groupui-grid-col>
</groupui-grid-row>
</groupui-grid>
</div>
<groupui-checkbox checked>Save card for future use</groupui-checkbox>
</div>
<div id="actions">
<div id="ssl-hint">
<groupui-icon name="locked-16"></groupui-icon>
<span>Your transaction is secured with SSL encryption</span>
</div>
<div class="button">
<groupui-button>Add</groupui-button>
</div>
</div>
</groupui-tab>
</groupui-tabs>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Forms template - Lets talk
```html
<div id="theme-switch-wrapper">
<div class="template-fac-feedback-container container-border light-grey-background">
<groupui-card padding="0px" elevation="8">
<groupui-grid>
<groupui-grid-row class="template-fac-feedback-grid-row template-fac-feedback-headline-row">
<groupui-grid-col xs="12">
<groupui-headline class="template-fac-feedback-headline" heading="h3" marketing="true" weight="light">Let's talk</groupui-headline>
<groupui-text class="template-fac-feedback-paragraph"
```
>We'd love to hear your feedback! Your template-fac-feedback is very important to us and will help
improve the future of GroupUI.</groupui-text
>
```html
</groupui-grid-col>
</groupui-grid-row>
<form>
<groupui-grid-row class="template-fac-feedback-grid-row">
<groupui-grid-col xs="12">
<div class="template-fac-feedback-input-container">
<groupui-input placeholder="Your name" name="name"></groupui-input>
</div>
<div class="template-fac-feedback-input-container">
<groupui-input type="email" placeholder="Your email" name="email"></groupui-input>
</div>
<div class="template-fac-feedback-input-container">
<groupui-textarea placeholder="Your message" rows="4" name="message"></groupui-textarea>
</div>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row class="template-fac-feedback-grid-row">
<groupui-grid-col xs="6" m="3">
<groupui-button fullwidth variant="secondary">Cancel</groupui-button>
</groupui-grid-col>
<groupui-grid-col xs="6" m="3">
<groupui-button type="submit" fullwidth>Send</groupui-button>
</groupui-grid-col>
</groupui-grid-row>
</form>
</groupui-grid>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Forms template - Voting
```html
<div class="container-border light-grey-background">
<div id="theme-switch-wrapper">
<!-- Template starts here -->
<div class="template-fac-voting-container">
<groupui-card class="card-123"padding="var(--groupui-sys-spacing-1000)" elevation="8">
<form>
<groupui-grid>
<groupui-grid-row class="template-fac-voting-grid-row">
<groupui-grid-col xs="12">
<groupui-headline class="template-fac-voting-headline" heading="h1">Feedback</groupui-headline>
<groupui-text
```
>We are interested in bugs, feature ideas and anything else you would like to share.</groupui-text
>
```html
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row class="template-fac-voting-grid-row">
<groupui-grid-col xs="12">
<groupui-textarea rows="5" placeholder="Your message">
<span slot="label">Message</span>
</groupui-textarea>
<groupui-checkbox class="template-fac-voting-checkbox"
```
>Yes, I agree to be contacted in response to my feedback.</groupui-checkbox
>
```html
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row class="template-fac-voting-grid-row">
<groupui-grid-col xs="12">
<groupui-text>How likely are you to recommend GroupUI to a colleague?</groupui-text>
<div>
<div class="template-fac-voting-radio-container">
<input value="1" type="radio" name="rating" />
<input value="2" type="radio" name="rating" />
<input value="3" type="radio" name="rating" />
<input value="4" type="radio" name="rating" />
<input value="5" type="radio" name="rating" />
<input value="6" type="radio" name="rating" />
<input value="7" type="radio" name="rating" />
<input value="8" type="radio" name="rating" />
<input value="9" type="radio" name="rating" />
<input value="10" type="radio" name="rating" />
</div>
<div class="template-fac-voting-rating-caption-container">
<groupui-text class="template-fac-voting-rating-caption" size="caption"
```
>Not very likely</groupui-text
>
```html
<groupui-text class="template-fac-voting-rating-caption" size="caption">Very likely</groupui-text>
</div>
</div>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row class="template-fac-voting-grid-row">
<groupui-grid-col xs="6" m="4">
<groupui-button variant="secondary" fullwidth>Cancel</groupui-button>
</groupui-grid-col>
<groupui-grid-col xs="6" m="4">
<groupui-button type="submit" fullwidth>Send</groupui-button>
</groupui-grid-col>
</groupui-grid-row>
</groupui-grid>
</form>
</groupui-card>
</div>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Forms template - Contact
```html
<div class="container-border light-grey-background">
<div id="theme-switch-wrapper">
<div class="template-fac-contact-container">
<groupui-card padding="var(--groupui-sys-spacing-1000)" elevation="8">
<form>
<groupui-grid>
<groupui-grid-row class="template-fac-contact-grid-row">
<groupui-grid-col xs="12">
<groupui-input placeholder="Jane Doe" name="fullname">
<span slot="label">Full name</span>
</groupui-input>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row class="template-fac-contact-grid-row">
<groupui-grid-col xs="12">
<groupui-input type="email" placeholder="example@domain.com" name="email">
<span slot="label">Email</span>
</groupui-input>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row class="template-fac-contact-grid-row">
<groupui-grid-col xs="12">
<groupui-input placeholder="Your subject" name="subject">
<span slot="label">Subject</span>
</groupui-input>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row class="template-fac-contact-grid-row">
<groupui-grid-col xs="12">
<groupui-textarea rows="5" placeholder="Your message" name="message">
<span slot="label">Message</span>
</groupui-textarea>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row class="template-fac-contact-grid-row">
<groupui-grid-col xs="6">
<groupui-button fullwidth type="submit" variant="primary">Submit</groupui-button>
</groupui-grid-col>
</groupui-grid-row>
</groupui-grid>
</form>
</groupui-card>
</div>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>

```

---

### Forms template - Log In
```html
<div id="theme-switch-wrapper">
<div class="template-signin-form container-border light-grey-background flex-center">
<groupui-card elevation="4" padding="32px 32px 40px 32px">
<div class="header">
<div>
<groupui-headline heading="h3" weight="normal">Log in</groupui-headline>
</div>
<div class="signin-btn-container">
<groupui-button alignment="right" size="m" target="self" icon="arrow-right-32" icon-position="right" variant="tertiary">Sign up</groupui-button>
</div>
</div>
<groupui-divider></groupui-divider>
<div class="input-wrapper">
<groupui-input placeholder="Email or Username" maxlength="16" pattern="[A-Za-z]{3}" severity="none" type="text">
</groupui-input>
</div>
<div class="input-wrapper">
<groupui-input placeholder="Password" maxlength="16" pattern="[A-Za-z]{3}" severity="none" type="password">
</groupui-input>
</div>
<groupui-checkbox>
```
Remember me
```html
</groupui-checkbox>
<div class="btn-container">
<groupui-button class="signin-btn" target="self" fullwidth="true">Log in</groupui-button>
<groupui-link href="#" target="self" quiet="true" inverted="false" variant="primary">Forgot your password</groupui-link>
</div>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>
```
### Forms template - Sign Up
```html
<div id="theme-switch-wrapper">
<div class="template-signup-form container-border light-grey-background flex-center">
<groupui-card elevation="4" padding="32px 32px 32px 32px">
<div class="header">
<div>
<groupui-headline heading="h3" weight="normal">Sign up</groupui-headline>
</div>
<div class="signin-btn-container">
<groupui-button alignment="right" size="m" target="self" icon="arrow-right-32" icon-position="right" variant="tertiary">Log in</groupui-button>
</div>
</div>
<groupui-divider></groupui-divider>
<div class="input-wrapper">
<groupui-input placeholder="Email" maxlength="16" pattern="[A-Za-z]{3}" severity="none" type="text">
<span slot="label">Email</span>
</groupui-input>
</div>
<div class="input-wrapper">
<groupui-input placeholder="Password" maxlength="16" pattern="[A-Za-z]{3}" severity="none" type="password">
<span slot="label">Password</span>
</groupui-input>
</div>
<div class="input-wrapper">
<groupui-input placeholder="Username" maxlength="16" pattern="[A-Za-z]{3}" severity="none" type="password">
<span slot="label">Username</span>
</groupui-input>
</div>
<groupui-date-picker date-format="Y/n/j" severity="none" placeholder="1987/07/27">
<span slot="label">Date of birth</span>
</groupui-date-picker>
<groupui-checkbox>I agree to the Terms and Privacy Policy</groupui-checkbox>
<div class="btn-container">
<groupui-button class="signin-btn" target="self" fullwidth="true">Sign up</groupui-button>
</div>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>
```
### Forms template - Sign Up with Banner
```html
<div id="theme-switch-wrapper">
<div class="template-signup-form-xl container-border light-grey-background flex-center">
<groupui-card elevation="4" padding="0">
<groupui-grid gutter="0px">
<groupui-grid-row>
<groupui-grid-col l="7" m="7" s="0">
<div class="banner">
<div class="banner-wrapper">
<img width="120px" src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvMVlNcFIxakxwTUVza1lXak5rZjMucG5nIn0:volkswagen:u5DN6KqPh6anyMzayTly\_2qZIz03r-bxi-jz6jvPz8s">
<groupui-headline heading="h1" weight="normal">Volkswagen Design</groupui-headline>
<groupui-text>A design system for modular user interfaces and a development framework for designing and developing applications within the Volkswagen group and its brands.
</groupui-text>
</div>
</div>
</groupui-grid-col>
<groupui-grid-col l="5" m="5" s="12">
<div class="form">
<div class="header">
<div>
<groupui-headline heading="h3" weight="normal">Sign up</groupui-headline>
</div>
<div class="signin-btn-container">
<groupui-button alignment="right" size="m" target="self" icon="arrow-right-32" icon-position="right" variant="tertiary">Log in</groupui-button>
</div>
</div>
<groupui-divider></groupui-divider>
<div class="input-wrapper">
<groupui-input placeholder="Email" maxlength="16" pattern="[A-Za-z]{3}" severity="none" type="text">
<span slot="label">Email</span>
</groupui-input>
</div>
<div class="input-wrapper">
<groupui-input placeholder="Password" maxlength="16" pattern="[A-Za-z]{3}" severity="none" type="password">
<span slot="label">Password</span>
</groupui-input>
</div>
<div class="input-wrapper">
<groupui-input placeholder="Username" maxlength="16" pattern="[A-Za-z]{3}" severity="none" type="password">
<span slot="label">Username</span>
</groupui-input>
</div>
<div class="input-wrapper">
<groupui-date-picker date-format="Y/n/j" severity="none" placeholder="1987/07/27">
<span slot="label">Date of birth</span>
</groupui-date-picker>
</div>
<groupui-checkbox>
```
I agree to the Terms and Privacy Policy
```html
</groupui-checkbox>
<div class="btn-container">
<groupui-button class="signin-btn" target="self" fullwidth="true">Sign up</groupui-button>
</div>
</div>
</groupui-grid-col>
</groupui-grid-row>
</groupui-grid>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>
```
### Forms template - Schedule Service
```html
<div id="theme-switch-wrapper">
<div class="template-forms-others-service container-border light-grey-background flex-center">
<groupui-card padding="40px" elevation="8">
<groupui-grid gutter="16px" margin-type="custom" margin="0px">
<groupui-headline heading="h1">Schedule service with a dealership</groupui-headline>
<groupui-text id="description">The first inspection after delivery is due for most VW vehicles after
```
three years or 60,000 kilometers, then every 2 years or 60,000 km.
```html
</groupui-text>
<groupui-headline heading="h5" class="sub-headings">Vehicle information</groupui-headline>
<groupui-grid-row>
<groupui-grid-col m="6" l="4">
<groupui-select value="volkswagen">
<span slot="label">Car make</span>
<groupui-select-option value="volkswagen">Volkswagen</groupui-select-option>
<groupui-select-option>Seat</groupui-select-option>
<groupui-select-option>Skoda</groupui-select-option>
</groupui-select>
</groupui-grid-col>
<groupui-grid-col m="6" l="4">
<groupui-select value="id3">
<span slot="label">Model</span>
<groupui-select-option value="id3">ID.3</groupui-select-option>
<groupui-select-option>Leon</groupui-select-option>
<groupui-select-option>Octavia</groupui-select-option>
</groupui-select>
</groupui-grid-col>
<groupui-grid-col m="6" l="4">
<groupui-date-picker value="2023-01-04">
<span slot="label">First registration</span>
</groupui-date-picker>
</groupui-grid-col>
</groupui-grid-row>
<groupui-headline heading="h5" class="sub-headings">Details</groupui-headline>
<groupui-grid-row>
<groupui-grid-col m="6">
<groupui-input value="23.869 km">
<span slot="label">Milage</span>
</groupui-input>
</groupui-grid-col>
<groupui-grid-col m="6">
<groupui-input value="WOB VW 123">
<span slot="label">License plate</span>
</groupui-input>
</groupui-grid-col>
</groupui-grid-row>
<groupui-headline heading="h5" class="sub-headings">Service</groupui-headline>
<groupui-grid-row>
<groupui-grid-col m="6" l="3">
<groupui-checkbox checked>Brakes</groupui-checkbox>
</groupui-grid-col>
<groupui-grid-col m="6" l="3">
<groupui-checkbox checked>Fluids</groupui-checkbox>
</groupui-grid-col>
<groupui-grid-col m="6" l="3">
<groupui-checkbox checked>Tires</groupui-checkbox>
</groupui-grid-col>
<groupui-grid-col m="6" l="3">
<groupui-checkbox>Battery</groupui-checkbox>
</groupui-grid-col>
<groupui-grid-col m="6" l="3">
<groupui-checkbox>Windshield wipers</groupui-checkbox>
</groupui-grid-col>
</groupui-grid-row>
<groupui-headline heading="h5" class="sub-headings">Additional note</groupui-headline>
<groupui-textarea placeholder="Your message" rows="4" class="textarea"></groupui-textarea>
<div class="button-col">
<groupui-button variant="secondary">Cancel</groupui-button>
<groupui-button>Schedule</groupui-button>
</div>
</groupui-grid>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>
```
### Forms template - Oil change
```html
<div id="theme-switch-wrapper">
```
Quality check passed
```html
</groupui-tag>
</groupui-grid-col>
</groupui-grid-row>
<groupui-grid-row class="section-top-spacing" gutter-s="24px" gutter-m="24px">
<groupui-grid-col s="12" m="6" l="4">
<groupui-text size="body-2" class="order-information-label">ORDER NUMBERS</groupui-text>
<groupui-text>06942</groupui-text>
</groupui-grid-col>
<groupui-grid-col s="12" m="6" l="4">
<groupui-text size="body-2" class="order-information-label">MILAGE AT ACCEPTANCE</groupui-text>
<groupui-text>71.527 km</groupui-text>
</groupui-grid-col>
<groupui-grid-col s="12" m="6" l="4">
<groupui-text size="body-2" class="order-information-label">MILAGE AT RETURN</groupui-text>
<groupui-text>71.531 km</groupui-text>
</groupui-grid-col>
</groupui-grid-row>
<groupui-headline heading="h6" class="section-top-spacing section-bottom-spacing">Additional work
</groupui-headline>
<groupui-accordion first expanded>
<span slot="headline"><groupui-headline heading="h6">Brakes</groupui-headline></span>
```
The entire brake system is inspected including fluid, pads, lines, hoses, and rotors.
```html
</groupui-accordion>
<groupui-accordion>
<span slot="headline"><groupui-headline heading="h6">Tires</groupui-headline></span>
</groupui-accordion>
<groupui-accordion>
<span slot="headline"><groupui-headline heading="h6">Windshield wipers</groupui-headline></span>
</groupui-accordion>
<groupui-button id="show-all-button" variant="tertiary" fullwidth>Show all</groupui-button>
<groupui-grid-row class="section-top-spacing" gutter-s="24px">
<groupui-grid-col s="12" m="6">
<groupui-headline heading="h6">Customer segment</groupui-headline>
<groupui-radio-group>
<groupui-radio-button checked>Private</groupui-radio-button>
<groupui-radio-button>Business</groupui-radio-button>
</groupui-radio-group>
</groupui-grid-col>
<groupui-grid-col s="12" m="6">
<groupui-headline heading="h6">Mobile warranty</groupui-headline>
<groupui-radio-group>
<groupui-radio-button>Yes</groupui-radio-button>
<groupui-radio-button checked>No</groupui-radio-button>
</groupui-radio-group>
</groupui-grid-col>
</groupui-grid-row>
<div class="section-top-spacing">
<groupui-textarea placeholder="Your message" rows="4">
<span slot="label">Hints and recommendations (optional)</span>
<span slot="description">Notes and recommendation are transferred to DSP.</span>
</groupui-textarea>
</div>
<groupui-headline heading="h6" class="section-top-spacing section-bottom-spacing">Executed by
</groupui-headline>
<groupui-grid-row gutter-xs="24px 0px" gutter-s="24px 0px" gutter="0px 40px">
<groupui-grid-col s="12" m="6">
<groupui-text><b>Carried out</b></groupui-text>
<div id="date-picker" class="grid-content">
<groupui-date-picker value="2023-01-04"></groupui-date-picker>
</div>
</groupui-grid-col>
<groupui-grid-col s="12" m="6">
<groupui-text class="grid-content">
<b>Executed by</b><br>Autohaus Schmitt<br>Mohlenhofstrasse 2<br>20095 Hamburg<br>Germany
</groupui-text>
</groupui-grid-col>
</groupui-grid-row>
<div class="button-col section-top-spacing">
<groupui-button>Submit</groupui-button>
</div>
</groupui-grid>
</form>
</groupui-card>
</div>
</div>
<!-- THIS IS JUST FOR THEME SWITCHING -->
<div id="theme-mode-switch" data-gui-brand="vwgroup">
<groupui-text weight="bold" class="hydrated">Darkmode</groupui-text>
<groupui-switch value="on" id="switch"></groupui-switch>
</div>
```
