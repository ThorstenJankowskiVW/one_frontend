import 'reflect-metadata';
import 'zone.js';
import { defineCustomElements } from '@group-ui/group-ui/dist/loader/index.es2017.js';
import '@group-ui/group-ui/dist/group-ui/assets/themes/tokens.css';
import '@group-ui/group-ui-css-framework/dist/groupui.css';
import './calendar-target.css?v=date-transfer-3';
import '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA, VERSION } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { readLinkedContextFromUrl } from './linked-context.js';

defineCustomElements().catch((error) => {
  console.error('GroupUI custom elements failed to load', error);
});

const context = readLinkedContextFromUrl();

class CalendarTargetComponent {
  context = context;
  selectedDate = context.selectedAppointmentDate || context.departureDate || context.flightBooking?.departureDate || '';
  changeDetectionTicks = 0;
  angularVersion = VERSION.full;
  zoneProof = window.Zone ? 'Zone.js aktiv' : 'Zone.js nicht gefunden';
  intervalId = null;
  transferred = false;
  transferStatus = '';
  transferError = '';
  transferPayloadJson = '';
  channel = null;
  events = [
    { date: '2026-06-16', title: 'Technischer Check-in', type: 'warning' },
    { date: '2026-06-18', title: 'Service-Termin', type: 'success' },
    { date: '2026-06-24', title: 'Review mit Stakeholdern', type: 'warning' },
    { date: '2026-07-02', title: 'Release-Go/No-Go', type: 'success' }
  ];

  constructor() {
    try {
      const channelName = 'onefe-channel-' + (this.context?.caseId || 'unknown');
      this.channel = new BroadcastChannel(channelName);
    } catch (error) {
      this.channel = null;
    }
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.changeDetectionTicks += 1;
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onDateChange(event) {
    this.selectedDate = event.target.value || event.detail?.value || event.detail || '';
  }

  selectDemoDate(date) {
    this.selectedDate = date;
    const picker = document.querySelector('groupui-date-picker');
    if (picker) {
      picker.value = date;
      picker.setAttribute('value', date);
    }
  }

  useDatePickerValue(datePicker) {
    const picker = datePicker || document.querySelector('groupui-date-picker');
    const value = picker?.value
      || picker?.getAttribute?.('value')
      || picker?.shadowRoot?.querySelector?.('input')?.value
      || '';

    if (value) {
      this.selectedDate = this.coerceDateValue(value);
    }
  }

  transferSelectedAppointment(datePicker = null) {
    this.useDatePickerValue(datePicker);

    if (!this.normalizedSelectedDate) {
      this.transferError = 'Bitte zuerst ein vollständiges Datum auswählen.';
      this.transferStatus = '';
      return;
    }

    const transferPayload = this.createAppointmentTransferPayload();

    this.postTransferPayload(transferPayload);
    this.markTransferDone(transferPayload);
  }

  postTransferPayload(transferPayload) {
    if (this.channel) {
      this.channel.postMessage(transferPayload);
    }

    try {
      if (window.opener && window.opener.postMessage) {
        window.opener.postMessage(transferPayload, '*');
      }
    } catch (error) {
      /* ignore opener fallback errors */
    }

    try {
      if (window.parent && window.parent !== window && window.parent.postMessage) {
        window.parent.postMessage(transferPayload, '*');
      }
    } catch (error) {
      /* ignore iframe parent fallback errors */
    }
  }

  openReactTargetWithAppointment(datePicker = null) {
    this.useDatePickerValue(datePicker);

    if (!this.normalizedSelectedDate) {
      this.transferError = 'Bitte zuerst ein vollständiges Datum auswählen.';
      this.transferStatus = '';
      return;
    }

    const transferPayload = this.createAppointmentTransferPayload({
      targetApp: 'react-follow-up-target'
    });
    const serializedContext = encodeURIComponent(JSON.stringify(transferPayload.context));
    const base = import.meta.env.BASE_URL;
    window.open(`${window.location.origin}${base}target-react.html?context=${serializedContext}`, '_blank');
    this.markTransferDone(transferPayload);
  }

  createAppointmentTransferPayload(overrides = {}) {
    const appointment = this.selectedEvents[0] || {
      date: this.normalizedSelectedDate,
      title: this.context.journeyType === 'flight-booking' ? 'Abflugdatum' : 'Manuell gewählter Termin',
      type: this.context.journeyType === 'flight-booking' ? 'flight-date' : 'manual'
    };

    return {
      type: 'appointment-transfer',
      from: 'angular-calendar-target',
      targetApp: 'next-scheduling-app',
      note: `Termin übergeben: ${appointment.title} am ${appointment.date}`,
      appointment,
      context: {
        ...this.context,
        selectedAppointmentDate: appointment.date,
        selectedAppointmentTitle: appointment.title,
        sourceStep: 'calendar-appointment-selected'
      },
      ...overrides
    };
  }

  markTransferDone(transferPayload) {
    this.transferred = true;
    this.transferError = '';
    this.transferStatus = `Übergeben an ${transferPayload.targetApp}`;
    this.transferPayloadJson = JSON.stringify(transferPayload, null, 2);
  }

  get selectedEvents() {
    return this.events.filter((event) => event.date === this.normalizedSelectedDate);
  }

  get normalizedSelectedDate() {
    const value = this.coerceDateValue(this.selectedDate);
    const germanDate = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec(value);
    const isoDate = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

    if (germanDate) {
      const [, day, month, year] = germanDate;
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }

    if (isoDate) {
      return value;
    }

    return '';
  }

  coerceDateValue(value) {
    const rawValue = Array.isArray(value) ? value[0] : value;
    const text = rawValue instanceof Date
      ? rawValue.toISOString().slice(0, 10)
      : String(rawValue || '');
    const germanDate = text.match(/\b\d{1,2}\.\d{1,2}\.\d{4}\b/);
    const isoDate = text.match(/\b\d{4}-\d{2}-\d{2}\b/);

    return germanDate?.[0] || isoDate?.[0] || text;
  }

  get selectedDateLabel() {
    return this.selectedDate || 'noch nichts gewählt';
  }
}

Component({
  standalone: false,
  selector: 'calendar-target-root',
  template: `
    <main class="calendar-page">
      <section class="calendar-shell">
        <groupui-card padding="32px" class="calendar-hero">
          <div>
            <groupui-tag>Angular Calendar App</groupui-tag>
            <groupui-headline heading="h1">Kalender in Angular</groupui-headline>
            <groupui-text class="hero-lead">Eine echte, durch Vite gebündelte Angular-App zeigt einen interaktiven Kalender mit Demo-Terminen.</groupui-text>
          </div>
        </groupui-card>

        <groupui-card padding="24px" class="date-selection-card">
          <section class="calendar-header">
            <div>
              <groupui-headline heading="h2">Datum auswählen</groupui-headline>
              <groupui-text>Gewähltes Datum: {{ selectedDateLabel }}</groupui-text>
            </div>
          </section>

          <section class="calendar-picker" aria-label="Date picker">
            <groupui-date-picker
              #travelDatePicker
              placeholder="Datum wählen"
              date-format="d.m.Y"
              locale="de"
              (onChange)="onDateChange($event)"
              (groupuiChange)="onDateChange($event)"
              (change)="onDateChange($event)"
              (input)="onDateChange($event)"
            ></groupui-date-picker>
            <div class="datepicker-actions">
              <groupui-button
                type="button"
                variant="secondary"
                (click)="useDatePickerValue(travelDatePicker)"
              >
                Datepicker-Datum übernehmen
              </groupui-button>
            </div>
          </section>

          <section class="demo-date-actions" aria-label="Demo dates">
            <groupui-button
              *ngFor="let event of events"
              size="s"
              variant="secondary"
              type="button"
              (click)="selectDemoDate(event.date)"
            >
              {{ event.date }} · {{ event.title }}
            </groupui-button>
          </section>
        </groupui-card>

        <groupui-card padding="16px" class="calendar-summary">
          <groupui-headline heading="h3">Ausgewählter Termin</groupui-headline>
          <groupui-text *ngIf="selectedEvents.length">
            <span *ngFor="let event of selectedEvents">{{ event.title }} ({{ event.type }})</span>
          </groupui-text>
          <groupui-text *ngIf="!selectedEvents.length">Keine Demo-Termine an diesem Tag.</groupui-text>
        </groupui-card>

        <groupui-card padding="24px" class="appointment-transfer" aria-label="Appointment transfer">
          <div>
            <groupui-tag>Context Handover</groupui-tag>
            <groupui-headline heading="h2">Termin an andere App übergeben</groupui-headline>
            <groupui-text>
              Der ausgewählte Termin wird zusammen mit dem Case-Kontext als strukturierter Payload
              über BroadcastChannel und postMessage an die öffnende App geschickt.
            </groupui-text>
          </div>
          <div class="transfer-actions">
            <groupui-button
              type="button"
              (click)="transferSelectedAppointment(travelDatePicker)"
            >
              An Host zurückgeben
            </groupui-button>
            <groupui-button
              type="button"
              variant="secondary"
              (click)="openReactTargetWithAppointment(travelDatePicker)"
            >
              In React App öffnen
            </groupui-button>
          </div>
          <groupui-text *ngIf="!normalizedSelectedDate && !transferError" class="transfer-hint">Bitte zuerst ein vollständiges Datum auswählen.</groupui-text>
          <groupui-text *ngIf="transferError" class="transfer-error">{{ transferError }}</groupui-text>
          <groupui-text *ngIf="transferStatus" class="save-message">{{ transferStatus }}</groupui-text>
          <pre *ngIf="transferred">{{ transferPayloadJson }}</pre>
        </groupui-card>

        <groupui-card padding="24px" class="angular-proof" aria-label="Angular runtime proof">
          <div>
            <groupui-tag>Angular Runtime Proof</groupui-tag>
            <groupui-headline heading="h2">Das ist nachweislich Angular</groupui-headline>
            <groupui-text>
              Diese Werte kommen direkt aus der laufenden Angular-Runtime und aus Angulars
              Template-Binding. Der Zähler aktualisiert sich über Angular Change Detection.
            </groupui-text>
          </div>

          <dl class="proof-grid">
            <groupui-card padding="14px">
              <dt>Angular-Version</dt>
              <dd>{{ angularVersion }}</dd>
            </groupui-card>
            <groupui-card padding="14px">
              <dt>Bootstrap</dt>
              <dd>NgModule + BrowserModule</dd>
            </groupui-card>
            <groupui-card padding="14px">
              <dt>Template-Beweis</dt>
              <dd>*ngFor, *ngIf, json pipe, Event Binding</dd>
            </groupui-card>
            <groupui-card padding="14px">
              <dt>Zone Status</dt>
              <dd>{{ zoneProof }}</dd>
            </groupui-card>
            <groupui-card padding="14px">
              <dt>Change Detection</dt>
              <dd>{{ changeDetectionTicks }} Live-Ticks</dd>
            </groupui-card>
          </dl>
        </groupui-card>

        <section class="context-panel linked-context-panel" aria-label="Angular context proof">
          <div>
            <groupui-text weight="bold">Context received</groupui-text>
            <groupui-text>Die Angular App kann denselben Kontext wie die anderen Targets empfangen.</groupui-text>
          </div>
          <pre>{{ context | json }}</pre>
        </section>
      </section>
    </main>
  `
})(CalendarTargetComponent);

class CalendarTargetModule {}

NgModule({
  declarations: [CalendarTargetComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [CalendarTargetComponent]
})(CalendarTargetModule);

platformBrowserDynamic().bootstrapModule(CalendarTargetModule).catch((err) => console.error(err));
