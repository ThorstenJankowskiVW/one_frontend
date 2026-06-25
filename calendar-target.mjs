import 'reflect-metadata';
import 'zone.js';
import { defineCustomElements } from '@group-ui/group-ui/dist/loader/index.es2017.js';
import './calendar-target.css?v=aftersales-capacity-1';
import '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, VERSION } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { workshopAppointments } from './packages/demo-data/src/cases.js';
import { readLinkedContextFromUrl } from './linked-context.js';

defineCustomElements().catch((error) => {
  console.error('GroupUI custom elements failed to load', error);
});

const context = readLinkedContextFromUrl();

class CalendarTargetComponent {
  context = context;
  isAftersales = context.journeyType !== 'flight-booking';
  selectedDate = context.appointmentDate || context.selectedAppointmentDate || context.departureDate || context.flightBooking?.departureDate || '';
  changeDetectionTicks = 0;
  angularVersion = VERSION.full;
  zoneProof = window.Zone ? 'Zone.js aktiv' : 'Zone.js nicht gefunden';
  intervalId = null;
  transferred = false;
  transferStatus = '';
  transferError = '';
  transferPayloadJson = '';
  channel = null;
  entries = this.isAftersales
    ? workshopAppointments
    : [
        {
          id: 'FLIGHT-2026-06-18',
          date: '2026-06-18',
          timeLabel: '08:35',
          title: 'Abflugdatum',
          location: `${context.origin || 'Hannover'} → ${context.destination || 'Barcelona'}`,
          capacityLabel: 'Direktflug-Fenster',
          status: 'recommended',
          durationMinutes: 0
        },
        {
          id: 'FLIGHT-2026-06-24',
          date: '2026-06-24',
          timeLabel: '10:15',
          title: 'Alternative Abreise',
          location: `${context.origin || 'Hannover'} → ${context.destination || 'Barcelona'}`,
          capacityLabel: 'Spätere Abreise',
          status: 'available',
          durationMinutes: 0
        }
      ];

  constructor() {
    try {
      const channelName = `onefe-channel-${this.context?.caseId || 'unknown'}`;
      this.channel = new BroadcastChannel(channelName);
    } catch {
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

  transferSelection(datePicker = null) {
    this.useDatePickerValue(datePicker);

    if (!this.normalizedSelectedDate) {
      this.transferError = 'Bitte zuerst ein vollständiges Datum auswählen.';
      this.transferStatus = '';
      return;
    }

    const transferPayload = this.createTransferPayload();
    this.postTransferPayload(transferPayload);
    this.markTransferDone(transferPayload);
  }

  postTransferPayload(transferPayload) {
    this.channel?.postMessage(transferPayload);

    try {
      if (window.opener && window.opener.postMessage) {
        window.opener.postMessage(transferPayload, '*');
      }
    } catch {
      // ignore opener fallback errors
    }

    try {
      if (window.parent && window.parent !== window && window.parent.postMessage) {
        window.parent.postMessage(transferPayload, '*');
      }
    } catch {
      // ignore iframe parent fallback errors
    }
  }

  createTransferPayload() {
    const selection = this.selectedEntries[0] || this.createFallbackSelection();

    if (this.isAftersales) {
      return {
        type: 'appointment-transfer',
        from: 'angular-calendar-target',
        targetApp: 'react-shell',
        note: `Workshop slot selected: ${selection.title} on ${selection.date}`,
        appointment: selection,
        context: {
          ...this.context,
          sourceStep: 'calendar-appointment-selected',
          appointmentDate: selection.date,
          appointmentSlotId: selection.id,
          workshopLocation: selection.location,
          selectedAppointmentTitle: selection.title
        }
      };
    }

    return {
      type: 'appointment-transfer',
      from: 'angular-calendar-target',
      targetApp: 'react-shell',
      note: `Travel date selected: ${selection.date}`,
      appointment: selection,
      context: {
        ...this.context,
        sourceStep: 'calendar-appointment-selected',
        selectedAppointmentDate: selection.date,
        selectedAppointmentTitle: selection.title
      }
    };
  }

  createFallbackSelection() {
    return this.isAftersales
      ? {
          id: `MANUAL-${this.normalizedSelectedDate}`,
          date: this.normalizedSelectedDate,
          timeLabel: 'manual',
          title: 'Manual workshop slot',
          location: this.context.workshopLocation || 'Berlin Alexanderplatz',
          capacityLabel: 'manual date selection',
          status: 'manual',
          durationMinutes: 90
        }
      : {
          id: `FLIGHT-${this.normalizedSelectedDate}`,
          date: this.normalizedSelectedDate,
          timeLabel: 'manual',
          title: 'Abflugdatum',
          location: `${this.context.origin || 'Hannover'} → ${this.context.destination || 'Barcelona'}`,
          capacityLabel: 'manual date selection',
          status: 'manual',
          durationMinutes: 0
        };
  }

  markTransferDone(transferPayload) {
    this.transferred = true;
    this.transferError = '';
    this.transferStatus = `Übergeben an ${transferPayload.targetApp}`;
    this.transferPayloadJson = JSON.stringify(transferPayload, null, 2);
  }

  get selectedEntries() {
    return this.entries.filter((entry) => entry.date === this.normalizedSelectedDate);
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

  get currentSelectionTitle() {
    return this.selectedEntries[0]?.title || (this.isAftersales ? 'Kein Werkstattslot gewählt' : 'Kein Reisedatum gewählt');
  }
}

Component({
  selector: 'calendar-target-root',
  standalone: false,
  template: `
    <main class="calendar-page">
      <section class="calendar-shell">
        <groupui-grid class="calendar-layout" gutter="24px" margin-type="custom" margin="0">
          <groupui-grid-row>
            <groupui-grid-col xs="12" l="6">
              <groupui-card padding="24px" class="date-selection-card">
                <section class="calendar-header">
                  <div>
                    <groupui-headline heading="h2">{{ isAftersales ? 'Datum und Slot auswählen' : 'Datum auswählen' }}</groupui-headline>
                    <groupui-text>Gewähltes Datum: {{ selectedDateLabel }}</groupui-text>
                    <groupui-text>Aktuelle Auswahl: {{ currentSelectionTitle }}</groupui-text>
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
                    <groupui-button type="button" variant="secondary" (click)="useDatePickerValue(travelDatePicker)">
                      Datepicker-Datum übernehmen
                    </groupui-button>
                  </div>
                </section>

                <section class="demo-date-actions" aria-label="Demo dates">
                  <groupui-button
                    *ngFor="let entry of entries"
                    size="s"
                    variant="secondary"
                    type="button"
                    [attr.data-slot-id]="entry.id"
                    (click)="selectDemoDate(entry.date)"
                  >
                    {{ entry.date }} · {{ entry.timeLabel }} · {{ entry.title }}
                  </groupui-button>
                </section>
              </groupui-card>
            </groupui-grid-col>

            <groupui-grid-col xs="12" l="6">
              <groupui-card padding="24px" class="appointment-transfer">
                <groupui-tag>Return channel</groupui-tag>
                <groupui-headline heading="h3">{{ isAftersales ? 'Auswahl an die Shell zurückgeben' : 'Datum an die Shell zurückgeben' }}</groupui-headline>
                <groupui-text>
                  {{ isAftersales
                    ? 'Die Rückgabe erfolgt über BroadcastChannel und postMessage. Die Shell bleibt Eigentümerin des Gesamtzustands.'
                    : 'Die Rückgabe erfolgt über BroadcastChannel und postMessage. Die React Shell entscheidet über den nächsten Schritt.' }}
                </groupui-text>

                <div class="transfer-actions">
                  <groupui-button id="transferSelectionButton" type="button" (click)="transferSelection(travelDatePicker)">
                    {{ isAftersales ? 'Werkstattslot übernehmen' : 'Reisedatum übernehmen' }}
                  </groupui-button>
                </div>

                <groupui-text *ngIf="transferStatus" class="save-message">{{ transferStatus }}</groupui-text>
                <groupui-text *ngIf="transferError" class="transfer-error">{{ transferError }}</groupui-text>
                <pre *ngIf="transferPayloadJson">{{ transferPayloadJson }}</pre>
              </groupui-card>
            </groupui-grid-col>

            <groupui-grid-col xs="12" l="6">
              <groupui-card padding="24px" class="calendar-summary">
                <groupui-tag>Context summary</groupui-tag>
                <groupui-headline heading="h3">{{ isAftersales ? 'Aftersales context' : 'Flight context' }}</groupui-headline>
                <div class="groupui-info-list">
                  <div>
                    <groupui-text weight="bold">{{ isAftersales ? 'Vehicle' : 'Route' }}</groupui-text>
                    <groupui-text>{{ isAftersales ? context.vehicleModel : ((context.origin || 'Hannover') + ' → ' + (context.destination || 'Barcelona')) }}</groupui-text>
                  </div>
                  <div>
                    <groupui-text weight="bold">{{ isAftersales ? 'Concern' : 'Passengers' }}</groupui-text>
                    <groupui-text>{{ isAftersales ? context.serviceConcern : (context.passengers || 1) }}</groupui-text>
                  </div>
                  <div>
                    <groupui-text weight="bold">Integration</groupui-text>
                    <groupui-text>{{ context.integrationMode }}</groupui-text>
                  </div>
                </div>
              </groupui-card>
            </groupui-grid-col>

            <groupui-grid-col xs="12" l="6">
              <groupui-card padding="24px" class="angular-proof">
                <groupui-tag>Runtime proof</groupui-tag>
                <groupui-headline heading="h3">Angular 20 in production build</groupui-headline>
                <div class="proof-grid">
                  <groupui-card padding="16px">
                    <dt>Angular</dt>
                    <dd>{{ angularVersion }}</dd>
                  </groupui-card>
                  <groupui-card padding="16px">
                    <dt>Zone.js</dt>
                    <dd>{{ zoneProof }}</dd>
                  </groupui-card>
                  <groupui-card padding="16px">
                    <dt>Change detection</dt>
                    <dd>{{ changeDetectionTicks }}s</dd>
                  </groupui-card>
                </div>
              </groupui-card>
            </groupui-grid-col>
          </groupui-grid-row>
        </groupui-grid>
      </section>
    </main>
  `
})(CalendarTargetComponent);

class AppModule {}

NgModule({
  declarations: [CalendarTargetComponent],
  imports: [BrowserModule],
  bootstrap: [CalendarTargetComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})(AppModule);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((error) => console.error(error));
