import 'reflect-metadata';
import 'zone.js';
import { defineCustomElements } from '@group-ui/group-ui/dist/loader/index.es2017.js';
import '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { createLinkedLaunchContext, linkedTransferPayload, readLinkedContextFromUrl } from './linked-context.js';

defineCustomElements().catch((error) => {
  console.error('GroupUI custom elements failed to load', error);
});

const context = readLinkedContextFromUrl();
const payload = linkedTransferPayload(context);

class LinkedTargetComponent {
  context = context;
  payload = payload;
  payloadJson = JSON.stringify(payload, null, 2);
  note = context.followUpNote || '';
  saved = false;

  constructor() {
    // create a channel to reply to the host that opened us
    try {
      const chName = 'onefe-channel-' + (this.context?.caseId || 'unknown');
      this._channel = new BroadcastChannel(chName);
    } catch (e) {
      this._channel = null;
    }
  }

  save() {
    this.saved = true;
    // send follow-up note back to host
    const note = this.note || 'Saved in Angular target';
    if (this._channel) {
      this._channel.postMessage({ type: 'follow-up-return', note, from: 'angular-target', context: this.context });
    }
    try {
      if (window.opener && window.opener.postMessage) {
        window.opener.postMessage({ type: 'follow-up-return', note, from: 'angular-target', context: this.context }, '*');
      }
    } catch (e) {
      /* ignore */
    }
  }
}

Component({
  standalone: false,
  selector: 'linked-target-root',
  template: `
    <main class="linked-page">
      <section class="linked-hero linked-hero-target">
        <div>
          <groupui-tag>Angular App</groupui-tag>
          <groupui-headline heading="h1">Target system opened</groupui-headline>
          <p class="hero-lead">Case Follow-Up App received context from the React Shell.</p>
        </div>
        <div class="linked-system-strip" aria-label="System handover">
          <div class="system-badge system-badge-host"><span>Host</span><strong>React Shell</strong></div>
          <div class="system-arrow" aria-hidden="true">→</div>
          <div class="system-badge system-badge-target"><span>Target</span><strong>Angular App</strong></div>
        </div>
      </section>

      <section class="linked-journey" aria-label="Received context">
        <div class="journey-card journey-card-active">
          <span>Application</span>
          <strong>Case Follow-Up App</strong>
          <p>This page is a separate Angular application.</p>
        </div>
        <div class="journey-card">
          <span>Technology</span>
          <strong>Angular 20.0.7</strong>
          <p>The target system was launched explicitly, not embedded.</p>
        </div>
        <div class="journey-card">
          <span>Integration</span>
          <strong>Linked Launchpad</strong>
          <p>Context arrived via URL / serialized context.</p>
        </div>
      </section>

      <div class="linked-dashboard">
        <section class="system-card system-card-host">
          <groupui-tag>Host</groupui-tag>
          <groupui-headline heading="h3">React Shell</groupui-headline>
          <groupui-text>The host sent the case follow-up context.</groupui-text>
          <dl class="compact-list">
            <div><dt>sourceApp</dt><dd>{{ payload.sourceApp }}</dd></div>
            <div><dt>sourceStep</dt><dd>{{ context.sourceStep }}</dd></div>
            <div><dt>integrationMode</dt><dd>{{ context.integrationMode }}</dd></div>
          </dl>
        </section>

        <div class="system-boundary" aria-hidden="true">
          <span>System boundary crossed</span>
        </div>

        <section class="system-card system-card-target">
          <groupui-tag>Target</groupui-tag>
          <groupui-headline heading="h3">Angular App</groupui-headline>
          <groupui-text>The Angular target displays the received context and offers a local follow-up action.</groupui-text>
          <dl class="compact-list">
            <div><dt>caseId</dt><dd>{{ payload.caseId }}</dd></div>
            <div><dt>customerId</dt><dd>{{ context.customerId }}</dd></div>
            <div><dt>targetApp</dt><dd>{{ payload.targetApp }}</dd></div>
          </dl>
        </section>
      </div>

      <section class="context-panel linked-context-panel" aria-label="Transfer payload">
        <div>
          <groupui-text weight="bold">Context received</groupui-text>
          <p>The Angular app parsed the serialized context from the URL.</p>
        </div>
        <pre>{{ payloadJson }}</pre>
      </section>

      <section class="target-form-card" aria-label="Follow-up form">
        <groupui-headline heading="h3">Follow-up action</groupui-headline>
        <p>Optional: save a note inside the target system.</p>
        <form (ngSubmit)="save()" class="modal-form">
          <label>
            <span>Follow-up note</span>
            <input name="note" [(ngModel)]="note" placeholder="Example: call customer tomorrow" />
          </label>
          <groupui-button type="submit">Save in Angular App</groupui-button>
        </form>
        <p *ngIf="saved" class="save-message">Saved inside the Angular target system.</p>
      </section>
    </main>
  `
})(LinkedTargetComponent);

class LinkedTargetModule {}

NgModule({
  declarations: [LinkedTargetComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [LinkedTargetComponent]
})(LinkedTargetModule);

platformBrowserDynamic().bootstrapModule(LinkedTargetModule).catch((err) => console.error(err));
