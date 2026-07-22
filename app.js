import { defineCustomElements } from '@group-ui/group-ui/dist/loader/index.es2017.js';
import { createContext, deserializeContext, integrationModes, serializeContext } from './packages/context-model/src/context.js';
import {
  aftersalesScenarioCards,
  demoCase,
  flightReferenceFlow,
  initialContexts,
  journeySteps,
  servicePackages,
  targetPictures,
  workshopAppointments
} from './packages/demo-data/src/cases.js';
import {
  createContextEventBridge,
  createEventLog,
  createNavigationTrigger,
  describeIntegrationMode,
  recordEvent
} from './packages/integration-layer/src/integration.js';
import { primaryViews } from './packages/ui-contracts/src/navigation.js?v=aftersales-platform-1';
import './apps/remote-webcomponents-action/src/action-card.js';
import { renderVanillaResult } from './apps/remote-vanilla-result/src/result.js';

defineCustomElements().catch((error) => {
  console.error('GroupUI custom elements failed to load', error);
});

const COLOR_MODE_STORAGE_KEY = 'onefe-color-mode';
const flightOptionsTargetVersion = 'aftersales-packages-1';
const flightExtrasTargetVersion = 'aftersales-extras-1';

const flightOptions = [
  {
    id: 'direct-morning',
    label: 'Direktflug morgens',
    carrier: 'Demo Airlines',
    duration: '2h 25m',
    departure: '08:35',
    arrival: '11:00',
    price: 219
  },
  {
    id: 'via-munich',
    label: 'Via München',
    carrier: 'One Frontend Air',
    duration: '4h 10m',
    departure: '10:15',
    arrival: '14:25',
    price: 179
  },
  {
    id: 'evening-flex',
    label: 'Flex-Tarif abends',
    carrier: 'GroupUI Wings',
    duration: '2h 35m',
    departure: '18:40',
    arrival: '21:15',
    price: 289
  }
];

const aftersalesSteps = [
  { step: 1, title: 'Service context / Service-Kontext', app: 'React Shell' },
  { step: 2, title: 'Workshop capacity / Werkstattkapazität', app: 'Angular Target' },
  { step: 3, title: 'Package recommendation / Paketempfehlung', app: 'Svelte Target' },
  { step: 4, title: 'Extras and mobility / Extras und Mobilität', app: 'Web Components' },
  { step: 5, title: 'Service order preview / Serviceauftrag', app: 'React Shell' }
];

const flightBookingSteps = [
  { step: 1, title: 'Reise starten', app: 'React Shell' },
  { step: 2, title: 'Datum wählen', app: 'Angular Calendar' },
  { step: 3, title: 'Flugoption', app: 'Svelte Remote' },
  { step: 4, title: 'Extras', app: 'Web Components' },
  { step: 5, title: 'Zusammenfassung', app: 'React Shell' }
];

const isolatedFlightBookingPages = {
  'flight-booking-angular': {
    eyebrow: 'Isolierte Einzelseite · Angular',
    title: 'Angular Kapazität bzw. Kalender isoliert',
    description: 'Die Angular-Seite läuft ohne übergebenen Journey-Kontext und bleibt als eigenständiger Runtime-Baustein sichtbar.',
    target: 'calendar-target.html?v=aftersales-capacity-1',
    technology: 'Angular 20 + GroupUI Date Picker'
  },
  'flight-booking-svelte': {
    eyebrow: 'Isolierte Einzelseite · Svelte',
    title: 'Svelte Optionen isoliert',
    description: 'Die Svelte-Seite bleibt als eigenständiger Zielschritt sichtbar und nutzt ohne Host-Kontext ihre Demo-Fallbacks.',
    target: `target-svelte.html?v=${flightOptionsTargetVersion}`,
    technology: 'Svelte Remote + GroupUI Radio Group'
  },
  'flight-booking-react-target': {
    eyebrow: 'Isolierte Einzelseite · React',
    title: 'React Ziel-App isoliert',
    description: 'Die React-Zielseite zeigt ihr Fallback-Verhalten ohne explizite Journey-Parameter.',
    target: 'target-react.html',
    technology: 'React Target'
  },
  'flight-booking-webcomponents': {
    eyebrow: 'Isolierte Einzelseite · Web Components',
    title: 'Web-Components-Ziel isoliert',
    description: 'Die Web-Component-Zielseite läuft auch ohne Shell-Kontext und bleibt als technologieauthentische Runtime sichtbar.',
    target: `target-stencil.html?v=${flightExtrasTargetVersion}`,
    technology: 'Native Web Component'
  }
};

const groupUiComponentTags = [
  'groupui-accordion',
  'groupui-button',
  'groupui-card',
  'groupui-grid',
  'groupui-grid-row',
  'groupui-grid-col',
  'groupui-input',
  'groupui-radio-group',
  'groupui-radio-button',
  'groupui-select',
  'groupui-select-option',
  'groupui-stepper-horizontal',
  'groupui-step',
  'groupui-modal',
  'groupui-global-top-navigation',
  'groupui-global-top-navigation-mobile-utility-items',
  'groupui-global-top-navigation-items',
  'groupui-global-top-navigation-item',
  'groupui-global-top-navigation-utility-items',
  'groupui-global-top-navigation-utility-item',
  'groupui-burger-menu',
  'groupui-burger-menu-items',
  'groupui-burger-menu-item',
  'groupui-burger-menu-utility-items',
  'groupui-burger-menu-utility-item',
  'groupui-local-side-navigation',
  'groupui-local-side-navigation-items',
  'groupui-local-side-navigation-item'
];

const groupUiAssets = [
  { label: 'Web Components Loader', status: 'bundled' },
  { label: 'CSS Framework', status: 'bundled' },
  { label: 'Theme Tokens', status: 'bundled' }
];

function currentColorMode() {
  return document.documentElement.hasAttribute('data-gui-mode') ? 'dark' : 'light';
}

function syncColorModeToFrames(mode) {
  document.querySelectorAll('iframe').forEach((frame) => {
    const syncFrame = () => {
      try {
        if (frame.contentDocument?.documentElement) {
          if (mode === 'dark') {
            frame.contentDocument.documentElement.setAttribute('data-gui-mode', 'dark');
          } else {
            frame.contentDocument.documentElement.removeAttribute('data-gui-mode');
          }
          frame.contentDocument.documentElement.style.colorScheme = mode;
        }
      } catch {
        // Cross-origin frames keep their own color-mode handling.
      }
    };

    syncFrame();
    frame.addEventListener('load', syncFrame, { once: true });
  });
}

function applyColorMode(mode) {
  if (mode === 'dark') {
    document.documentElement.setAttribute('data-gui-mode', 'dark');
  } else {
    document.documentElement.removeAttribute('data-gui-mode');
  }
  document.documentElement.style.colorScheme = mode;
  syncColorModeToFrames(mode);
}

const navigableViewIds = new Set(
  primaryViews.flatMap((item) => [item.id, ...(item.children || []).map((child) => child.id)])
);

function readViewFromUrl() {
  const requestedView = new URL(window.location.href).searchParams.get('view');
  return navigableViewIds.has(requestedView) ? requestedView : 'overview';
}

function writeViewToUrl(view, { replace = false } = {}) {
  const url = new URL(window.location.href);
  if (view === 'overview') {
    url.searchParams.delete('view');
  } else {
    url.searchParams.set('view', view);
  }

  const method = replace ? 'replaceState' : 'pushState';
  window.history[method]({ view }, '', url);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

const state = {
  activeView: readViewFromUrl(),
  colorMode: currentColorMode(),
  activeContext: createContext({
    sourceStep: 'overview',
    integrationMode: integrationModes.dashboardLauncher,
    journeyType: 'aftersales',
    serviceConcern: demoCase.serviceConcern,
    mileageKm: demoCase.mileageKm,
    workshopLocation: 'Berlin Alexanderplatz'
  }),
  eventLog: createEventLog(),
  modalContext: null,
  followUpNote: null,
  receivedTransfer: null,
  embeddedModule: 'case-details',
  broadcastChannels: {},
  aftersales: {
    currentStep: 1,
    mileageKm: demoCase.mileageKm,
    serviceConcern: demoCase.serviceConcern,
    workshopLocation: 'Berlin Alexanderplatz',
    selectedAppointment: null,
    selectedPackage: null,
    serviceExtras: null
  },
  flightBooking: {
    currentStep: 1,
    tripType: 'one-way',
    origin: 'Hannover',
    destination: 'Barcelona',
    passengers: 1,
    travelClass: 'Economy'
  },
  groupUiRuntime: {
    components: [],
    assets: []
  }
};

const app = document.querySelector('#app');
const modal = document.querySelector('#process-modal');
const modalBody = document.querySelector('#process-modal-body');
const journeyModal = document.querySelector('#calendar-modal');
const journeyModalBody = document.querySelector('#calendar-modal-body');
const eventBridge = createContextEventBridge(state.eventLog);

function centerDialog(dialogElement) {
  dialogElement.style.position = 'fixed';
  dialogElement.style.inset = 'auto auto auto auto';
  dialogElement.style.top = '50%';
  dialogElement.style.left = '50%';
  dialogElement.style.margin = '0';
  dialogElement.style.transform = 'translate(-50%, -50%)';
}

function collectGroupUiComponentStatus() {
  return groupUiComponentTags.map((tagName) => ({
    tagName,
    registered: Boolean(customElements.get(tagName))
  }));
}

async function updateGroupUiRuntimeStatus() {
  const components = collectGroupUiComponentStatus();
  const assets = groupUiAssets;
  const nextRuntime = { components, assets };

  if (JSON.stringify(state.groupUiRuntime) !== JSON.stringify(nextRuntime)) {
    state.groupUiRuntime = nextRuntime;
    render();
  }
}

const navigate = createNavigationTrigger((targetView, context) => {
  state.activeView = targetView;
  state.activeContext = createContext(context);
  writeViewToUrl(targetView);
  render();
}, state.eventLog);

function groupuiCard(content, className = '') {
  return `<groupui-card padding="24px" class="${className}">${content}</groupui-card>`;
}

function createAftersalesContext(overrides = {}) {
  const appointment = state.aftersales.selectedAppointment || {};
  const selectedPackage = state.aftersales.selectedPackage || {};
  const serviceExtras = state.aftersales.serviceExtras || {};
  const totalPrice = (selectedPackage.estimatedPrice || 0) + (serviceExtras.totalPrice || 0);

  return createContext({
    ...state.activeContext,
    journeyType: 'aftersales',
    sourceApp: 'react-shell',
    sourceStep: 'aftersales-shell',
    targetApp: 'service-order-platform',
    integrationMode: integrationModes.processStep,
    serviceConcern: state.aftersales.serviceConcern,
    mileageKm: state.aftersales.mileageKm,
    appointmentDate: appointment.date || '',
    appointmentSlotId: appointment.id || '',
    workshopLocation: appointment.location || state.aftersales.workshopLocation,
    selectedAppointmentTitle: appointment.title || '',
    servicePackageId: selectedPackage.id || '',
    servicePackageLabel: selectedPackage.label || '',
    estimatedDurationMinutes: selectedPackage.estimatedDurationMinutes || appointment.durationMinutes || 0,
    estimatedPrice: totalPrice,
    partsStatus: serviceExtras.partsStatus || 'check-pending',
    campaignStatus: serviceExtras.campaignStatus || 'no-active-campaign',
    mobilityNeed: serviceExtras.mobilityNeed || 'none',
    followUpRequired: Boolean(serviceExtras.followUpRequired),
    selectedServiceExtras: serviceExtras.selectedExtras || [],
    ...overrides
  });
}

function createFlightBookingContext(overrides = {}) {
  const booking = state.flightBooking;

  return createContext({
    journeyType: 'flight-booking',
    sourceApp: 'react-shell',
    sourceStep: 'flight-booking-step-1',
    targetApp: 'angular-calendar-target',
    integrationMode: integrationModes.processStep,
    origin: booking.origin,
    destination: booking.destination,
    tripType: booking.tripType,
    passengers: Number(booking.passengers),
    travelClass: booking.travelClass,
    departureDate: booking.departureDate || null,
    selectedDateTitle: booking.selectedDateTitle || null,
    flightBooking: {
      ...booking
    },
    ...overrides
  });
}

function contextSummaryRows(context) {
  return [
    ['Journey', context.journeyType || 'n/a'],
    ['Case', context.caseId],
    ['Vehicle', context.vehicleModel || context.vehicleLabel || 'n/a'],
    ['Source', context.sourceApp],
    ['Step', context.sourceStep],
    ['Integration', context.integrationMode],
    ['Language', context.language]
  ];
}

function contextPanel(context = state.activeContext) {
  return groupuiCard(`
    <groupui-tag>Shared Context</groupui-tag>
    <groupui-headline heading="h3">Serialized payload / Serialisierter Payload</groupui-headline>
    <groupui-text>
      Host und Targets greifen auf denselben serialisierbaren Vertrag zu. Neue Schritte reichern den Kontext explizit an,
      statt stillen Zustand zu teilen.
    </groupui-text>
    <div class="groupui-info-list">
      ${contextSummaryRows(context).map(([label, value]) => `
        <div>
          <groupui-text weight="bold">${label}</groupui-text>
          <groupui-text>${escapeHtml(value || 'n/a')}</groupui-text>
        </div>
      `).join('')}
    </div>
    <pre class="context-snippet">${escapeHtml(JSON.stringify(context, null, 2))}</pre>
  `, 'context-panel');
}

function statusBadge(ok) {
  return `<groupui-tag variant="secondary">${ok ? 'OK' : 'Offen'}</groupui-tag>`;
}

function renderGroupUiRuntimeCard() {
  const components = state.groupUiRuntime.components.length
    ? state.groupUiRuntime.components
    : collectGroupUiComponentStatus();
  const registeredCount = components.filter((component) => component.registered).length;
  const assets = state.groupUiRuntime.assets.length
    ? state.groupUiRuntime.assets
    : groupUiAssets;

  return groupuiCard(`
    <groupui-tag>GroupUI Runtime</groupui-tag>
    <groupui-headline heading="h3">Design-system proof / Runtime proof</groupui-headline>
    <groupui-text>
      ${registeredCount}/${components.length} Web Components sind registriert. Loader, CSS-Framework und Tokens laufen über denselben Vite-Build wie die Journey selbst.
    </groupui-text>
    <groupui-grid type="fluid" margin-type="custom" margin="0" gutter="16px" class="runtime-checks">
      <groupui-grid-row>
        ${components.map((component) => `
          <groupui-grid-col xs="12" s="12" m="6" l="4" xl="4" xxl="4">
            <div><groupui-text>${component.tagName}</groupui-text>${statusBadge(component.registered)}</div>
          </groupui-grid-col>
        `).join('')}
        ${assets.map((asset) => `
          <groupui-grid-col xs="12" s="12" m="6" l="4" xl="4" xxl="4">
            <div><groupui-text>${asset.label}</groupui-text><groupui-tag variant="secondary">${asset.status}</groupui-tag></div>
          </groupui-grid-col>
        `).join('')}
      </groupui-grid-row>
    </groupui-grid>
  `, 'runtime-card');
}

function aftersalesContextForStep(sourceStep, integrationMode, targetApp) {
  return createAftersalesContext({
    sourceStep,
    integrationMode,
    targetApp
  });
}

function createFlightOptionsTargetUrl(context) {
  const base = import.meta.env.BASE_URL;
  return `${window.location.origin}${base}target-svelte.html?context=${serializeContext(context)}&v=${flightOptionsTargetVersion}`;
}

function createFlightExtrasTargetUrl(context) {
  const base = import.meta.env.BASE_URL;
  return `${window.location.origin}${base}target-stencil.html?context=${serializeContext(context)}&v=${flightExtrasTargetVersion}`;
}

function openFlightCalendarModal(context) {
  const isAftersales = context.journeyType === 'aftersales';
  const base = import.meta.env.BASE_URL;
  const url = `${window.location.origin}${base}calendar-target.html?context=${serializeContext(context)}&v=aftersales-capacity-2`;

  journeyModalBody.innerHTML = `
    <div class="calendar-modal-shell">
      <div class="calendar-modal-header">
        <div>
          <groupui-tag>${isAftersales ? 'Schritt 2 · Angular Workshop Capacity' : 'Schritt 2 · Angular Calendar'}</groupui-tag>
          <groupui-headline heading="h3">${isAftersales ? 'Werkstattkapazität auswählen / Choose workshop capacity' : 'Reisedatum wählen'}</groupui-headline>
          <groupui-text>
            ${isAftersales
              ? 'Die React Shell bleibt Eigentümerin des Journey-State. Angular liefert explizit den gewählten Werkstattslot zurück.'
              : 'Die React Shell bleibt sichtbar. Der Kalender läuft als echte Angular-App im iframe.'}
          </groupui-text>
        </div>
        <groupui-button variant="secondary" type="button" data-action="close-journey-modal">Schließen</groupui-button>
      </div>
      <iframe
        class="calendar-modal-frame"
        title="${isAftersales ? 'Angular Aftersales Appointment App' : 'Angular Calendar App'}"
        src="${url}"
      ></iframe>
    </div>
  `;

  recordEvent(state.eventLog, isAftersales ? 'open-aftersales-calendar-modal' : 'open-flight-calendar-modal', {
    url,
    context,
    target: 'calendar-target.html'
  });
  journeyModal.showModal();
  centerDialog(journeyModal);
}

function openFlightOptionsModal(context) {
  const isAftersales = context.journeyType === 'aftersales';
  const url = createFlightOptionsTargetUrl(context);

  journeyModalBody.innerHTML = `
    <div class="calendar-modal-shell">
      <div class="calendar-modal-header">
        <div>
          <groupui-tag>${isAftersales ? 'Schritt 3 · Svelte Recommendations' : 'Schritt 3 · Svelte Remote'}</groupui-tag>
          <groupui-headline heading="h3">${isAftersales ? 'Servicepaket auswählen / Choose service package' : 'Flugoption auswählen'}</groupui-headline>
          <groupui-text>
            ${isAftersales
              ? 'Svelte liefert eine leichte, reaktive Auswahloberfläche für Paketempfehlungen und sendet das Ergebnis strukturiert an die Shell zurück.'
              : 'Die React Shell bleibt sichtbar. Die Flugauswahl läuft als Svelte-Remote im iframe.'}
          </groupui-text>
        </div>
        <groupui-button variant="secondary" type="button" data-action="close-journey-modal">Schließen</groupui-button>
      </div>
      <iframe
        class="calendar-modal-frame"
        title="${isAftersales ? 'Svelte Aftersales Package App' : 'Svelte Flight Options App'}"
        src="${url}"
      ></iframe>
    </div>
  `;

  recordEvent(state.eventLog, isAftersales ? 'open-aftersales-packages-modal' : 'open-flight-options-modal', {
    url,
    context,
    target: 'target-svelte.html'
  });
  journeyModal.showModal();
  centerDialog(journeyModal);
}

function openFlightExtrasModal(context) {
  const isAftersales = context.journeyType === 'aftersales';
  const url = createFlightExtrasTargetUrl(context);

  journeyModalBody.innerHTML = `
    <div class="calendar-modal-shell">
      <div class="calendar-modal-header">
        <div>
          <groupui-tag>${isAftersales ? 'Schritt 4 · Web Components Extras' : 'Schritt 4 · Native Web Component'}</groupui-tag>
          <groupui-headline heading="h3">${isAftersales ? 'Extras und Mobilität ändern / Change extras and mobility' : 'Reise-Extras ändern'}</groupui-headline>
          <groupui-text>
            ${isAftersales
              ? 'Das Web-Component-Target hält seinen eigenen UI-State und gibt Extras, Teile- und Mobilitätsentscheidungen explizit an die Shell zurück.'
              : 'Die Web-Components-Ziel-App läuft im iframe und gibt die Extras an die React Shell zurück.'}
          </groupui-text>
        </div>
        <groupui-button variant="secondary" type="button" data-action="close-journey-modal">Schließen</groupui-button>
      </div>
      <iframe
        class="calendar-modal-frame"
        title="${isAftersales ? 'Web Component Aftersales Extras App' : 'Web Component Flight Extras App'}"
        src="${url}"
      ></iframe>
    </div>
  `;

  recordEvent(state.eventLog, isAftersales ? 'open-aftersales-extras-modal' : 'open-flight-extras-modal', {
    url,
    context,
    target: 'target-stencil.html'
  });
  journeyModal.showModal();
  centerDialog(journeyModal);
}

function closeJourneyModal() {
  journeyModal.close();
  journeyModalBody.innerHTML = '';
  recordEvent(state.eventLog, 'journey-modal-close', { sourceApp: 'react-shell' });
}

function closeJourneyModalIfOpen() {
  if (journeyModal.open) {
    closeJourneyModal();
  }
}

function receiveRemotePayload(payload, eventType) {
  state.followUpNote = payload.note;
  state.receivedTransfer = payload;

  if (payload.type === 'appointment-transfer' && payload.appointment) {
    if (payload.context?.journeyType === 'flight-booking') {
      state.flightBooking = {
        ...state.flightBooking,
        departureDate: payload.appointment.date,
        selectedDateTitle: payload.appointment.title,
        currentStep: 3
      };
      state.activeContext = createFlightBookingContext({
        sourceStep: 'flight-date-selected',
        selectedAppointmentDate: payload.appointment.date,
        selectedAppointmentTitle: payload.appointment.title
      });
    } else {
      state.aftersales = {
        ...state.aftersales,
        currentStep: 2,
        workshopLocation: payload.appointment.location || state.aftersales.workshopLocation,
        selectedAppointment: payload.appointment
      };
      state.activeContext = createAftersalesContext({
        sourceStep: 'aftersales-appointment-selected',
        integrationMode: payload.context?.integrationMode || integrationModes.modal
      });
    }
  }

  if (payload.type === 'service-package-transfer' && payload.servicePackage) {
    state.aftersales = {
      ...state.aftersales,
      currentStep: 4,
      selectedPackage: payload.servicePackage
    };
    state.activeContext = createAftersalesContext({
      sourceStep: 'service-package-selected',
      integrationMode: payload.context?.integrationMode || integrationModes.modal
    });
  }

  if (payload.type === 'service-extras-transfer' && payload.serviceExtras) {
    state.aftersales = {
      ...state.aftersales,
      currentStep: 5,
      serviceExtras: payload.serviceExtras
    };
    state.activeContext = createAftersalesContext({
      sourceStep: 'service-extras-selected',
      integrationMode: payload.context?.integrationMode || integrationModes.embeddedWorkspace
    });
  }

  if (payload.type === 'flight-option-transfer' && payload.flightOption) {
    state.flightBooking = {
      ...state.flightBooking,
      flightOption: payload.flightOption,
      currentStep: 4
    };
  }

  if (payload.type === 'flight-extras-transfer' && payload.flightExtras) {
    state.flightBooking = {
      ...state.flightBooking,
      flightExtras: payload.flightExtras,
      currentStep: 5
    };
  }

  recordEvent(state.eventLog, eventType, payload);
}

window.addEventListener('onefe:context-received', (event) => {
  state.activeContext = createContext(event.detail);
  recordEvent(state.eventLog, 'custom-event-received', event.detail);
  render();
});

window.addEventListener('onefe:follow-up-return', (event) => {
  state.followUpNote = event.detail.note;
  state.receivedTransfer = event.detail;
  recordEvent(state.eventLog, 'custom-event-received', event.detail);
  render();
});

window.addEventListener('message', (event) => {
  const supportedTypes = [
    'follow-up-return',
    'appointment-transfer',
    'service-package-transfer',
    'service-extras-transfer',
    'flight-option-transfer',
    'flight-extras-transfer'
  ];

  if (event.data && supportedTypes.includes(event.data.type)) {
    receiveRemotePayload(event.data, 'postmessage-received');
    if (event.data.type !== 'follow-up-return') {
      closeJourneyModalIfOpen();
    }
    render();
  }
});

function isNavigationSectionActive(item) {
  return state.activeView === item.id || item.children?.some((child) => child.id === state.activeView);
}

function isTopNavigationActive(viewId) {
  if (viewId === 'flight-booking') {
    return state.activeView === 'flight-booking' || Boolean(isolatedFlightBookingPages[state.activeView]);
  }

  if (viewId === 'patterns') {
    return [
      'patterns',
      integrationModes.linkedLaunchpad,
      integrationModes.embeddedWorkspace,
      integrationModes.integratedExperience,
      'debug'
    ].includes(state.activeView);
  }

  return state.activeView === viewId;
}

function renderNavigation() {
  return `
    <groupui-local-side-navigation class="shell-nav" manual-mode aria-label="Bereichsnavigation">
      <groupui-local-side-navigation-items>
        ${primaryViews.map((item) => {
          const childActive = item.children?.some((child) => child.id === state.activeView);
          return `
            <groupui-local-side-navigation-item data-nav="${item.id}" ${state.activeView === item.id ? 'active' : ''} ${item.children && (state.activeView === item.id || childActive) ? 'open' : ''}>
              <div slot="label">${item.label}</div>
              ${item.children ? item.children.map((child) => `
                <groupui-local-side-navigation-item data-nav="${child.id}" ${state.activeView === child.id ? 'active' : ''}>
                  <div slot="label">${child.label}</div>
                </groupui-local-side-navigation-item>
              `).join('') : ''}
            </groupui-local-side-navigation-item>
          `;
        }).join('')}
      </groupui-local-side-navigation-items>
    </groupui-local-side-navigation>
  `;
}

function renderHeader() {
  const darkMode = state.colorMode === 'dark';
  const colorModeIconName = darkMode ? 'sun-24' : 'moon-24';
  const colorModeIcon = darkMode ? './assets/icons/sun-24.svg' : './assets/icons/moon-24.svg';
  const colorModeLabel = darkMode ? 'Light Mode aktivieren' : 'Dark Mode aktivieren';

  return `
    <header>
      <groupui-global-top-navigation breakpoint="l" manual-mode aria-label="Hauptnavigation">
        <groupui-brand-logo type="application">Volkswagen Aftersales Platform Demonstrator</groupui-brand-logo>
        <groupui-global-top-navigation-mobile-utility-items>
          <groupui-burger-menu a11y-label-open-button="Navigation öffnen" a11y-label-close-button="Navigation schließen">
            <groupui-burger-menu-items>
              <groupui-burger-menu-item data-nav="overview" ${isTopNavigationActive('overview') ? 'active' : ''}><div slot="label">Overview</div></groupui-burger-menu-item>
              <groupui-burger-menu-item data-nav="aftersales-journey" ${isTopNavigationActive('aftersales-journey') ? 'active' : ''}><div slot="label">Aftersales Journey</div></groupui-burger-menu-item>
              <groupui-burger-menu-item data-nav="flight-booking" ${isTopNavigationActive('flight-booking') ? 'active' : ''}><div slot="label">Flight Booking</div></groupui-burger-menu-item>
              <groupui-burger-menu-item data-nav="technology-overview" ${isTopNavigationActive('technology-overview') ? 'active' : ''}><div slot="label">Technology</div></groupui-burger-menu-item>
              <groupui-burger-menu-item data-nav="implementation" ${isTopNavigationActive('implementation') ? 'active' : ''}><div slot="label">Implementation</div></groupui-burger-menu-item>
              <groupui-burger-menu-item data-nav="patterns" ${isTopNavigationActive('patterns') ? 'active' : ''}><div slot="label">Patterns</div></groupui-burger-menu-item>
            </groupui-burger-menu-items>
            <groupui-burger-menu-utility-items>
              <groupui-burger-menu-utility-item icon="${colorModeIconName}" icon-source="${colorModeIcon}" a11y-label-icon="${colorModeLabel}" data-action="toggle-color-mode"><div slot="label">${colorModeLabel}</div></groupui-burger-menu-utility-item>
              <groupui-burger-menu-utility-item icon="clock-24" data-action="emit-context"><div slot="label">Context-Event senden</div></groupui-burger-menu-utility-item>
              <groupui-burger-menu-utility-item icon="rocket-24" data-nav="patterns"><div slot="label">Integrationsmuster</div></groupui-burger-menu-utility-item>
              <groupui-burger-menu-utility-item icon="user-24" data-action="go-debug"><div slot="label">Debug</div></groupui-burger-menu-utility-item>
            </groupui-burger-menu-utility-items>
          </groupui-burger-menu>
        </groupui-global-top-navigation-mobile-utility-items>
        <groupui-global-top-navigation-items>
          <groupui-global-top-navigation-item data-nav="overview" ${isTopNavigationActive('overview') ? 'active' : ''}>Overview</groupui-global-top-navigation-item>
          <groupui-global-top-navigation-item data-nav="aftersales-journey" ${isTopNavigationActive('aftersales-journey') ? 'active' : ''}>Aftersales Journey</groupui-global-top-navigation-item>
          <groupui-global-top-navigation-item data-nav="flight-booking" ${isTopNavigationActive('flight-booking') ? 'active' : ''}>Flight Booking</groupui-global-top-navigation-item>
          <groupui-global-top-navigation-item data-nav="technology-overview" ${isTopNavigationActive('technology-overview') ? 'active' : ''}>Technology Overview</groupui-global-top-navigation-item>
          <groupui-global-top-navigation-item data-nav="implementation" ${isTopNavigationActive('implementation') ? 'active' : ''}>Implementation</groupui-global-top-navigation-item>
          <groupui-global-top-navigation-item data-nav="patterns" ${isTopNavigationActive('patterns') ? 'active' : ''}>Patterns</groupui-global-top-navigation-item>
        </groupui-global-top-navigation-items>
        <groupui-global-top-navigation-utility-items>
          <groupui-global-top-navigation-utility-item icon="${colorModeIconName}" icon-source="${colorModeIcon}" a11y-label-icon="${colorModeLabel}" aria-label="${colorModeLabel}" data-action="toggle-color-mode"></groupui-global-top-navigation-utility-item>
          <groupui-global-top-navigation-utility-item icon="clock-24" aria-label="Custom Event mit aktuellem Kontext senden" popover-placement="bottom-start" data-action="emit-context">
            <groupui-text slot="popover">Custom Event mit aktuellem Kontext senden</groupui-text>
          </groupui-global-top-navigation-utility-item>
          <groupui-global-top-navigation-utility-item icon="rocket-24" aria-label="Integrationsmuster anzeigen" popover-placement="bottom-start" data-nav="patterns">
            <groupui-text slot="popover">Integrationsmuster anzeigen</groupui-text>
          </groupui-global-top-navigation-utility-item>
          <groupui-global-top-navigation-utility-item icon="user-24" aria-label="Context und Runtime-Status ansehen" popover-placement="bottom-start" data-action="go-debug">
            <groupui-text slot="popover">Context und Runtime-Status ansehen</groupui-text>
          </groupui-global-top-navigation-utility-item>
        </groupui-global-top-navigation-utility-items>
      </groupui-global-top-navigation>
    </header>
  `;
}

function renderOverview() {
  const keyMetrics = [
    { value: '4', label: 'Runtimes im Journey-Verbund' },
    { value: '3', label: 'sichtbare Handover-Kanäle' },
    { value: '11', label: 'stabile Navigations-Views' }
  ];

  return `
    <section class="view overview-view">
      <groupui-grid type="fluid" margin-type="custom" margin="0" gutter="24px" class="overview-hero-grid" aria-label="Intro und Kennzahlen">
        <groupui-grid-row>
          <groupui-grid-col xs="12" s="12" m="12" l="7" xl="7" xxl="7">
            <groupui-card padding="32px" class="overview-hero-main">
              <div class="hero-copy">
                <groupui-tag>Volkswagen Aftersales Platform</groupui-tag>
                <groupui-headline heading="h1">Service appointment orchestration across real frontend runtimes</groupui-headline>
                <groupui-text class="hero-lead">
                  Der Demonstrator priorisiert jetzt die Werkstatt- und Service-Journey. React bleibt Host und Kontinuitätslayer,
                  während Angular, Svelte und Web Components echte Prozessschritte mit expliziter Kontextübergabe übernehmen.
                </groupui-text>
                <div class="hero-actions">
                  <groupui-button fullwidth data-nav="aftersales-journey">Aftersales Journey öffnen</groupui-button>
                  <groupui-button fullwidth variant="secondary" data-nav="technology-overview">Technology Overview</groupui-button>
                  <groupui-button fullwidth variant="secondary" data-nav="flight-booking">Flight Booking als Referenz</groupui-button>
                </div>
              </div>
            </groupui-card>
          </groupui-grid-col>

          <groupui-grid-col xs="12" s="12" m="12" l="5" xl="5" xxl="5">
            <groupui-card padding="32px" class="overview-metrics-card">
              <groupui-tag>Platform briefing</groupui-tag>
              <groupui-headline heading="h3">Was die Demo sichtbar macht</groupui-headline>
              <div class="hero-metrics">
                ${keyMetrics.map((item) => `
                  <div>
                    <groupui-text weight="bold" class="metric-value">${item.value}</groupui-text>
                    <groupui-text size="caption">${item.label}</groupui-text>
                  </div>
                `).join('')}
                <div class="metric-list">
                  <div class="metric-list-row"><groupui-text size="caption" weight="bold">Host</groupui-text><groupui-text size="caption">Journey-State, Navigation, Summary</groupui-text></div>
                  <div class="metric-list-row"><groupui-text size="caption" weight="bold">Targets</groupui-text><groupui-text size="caption">Kapazität, Pakete, Extras</groupui-text></div>
                  <div class="metric-list-row"><groupui-text size="caption" weight="bold">Contracts</groupui-text><groupui-text size="caption">URL, BroadcastChannel, postMessage</groupui-text></div>
                </div>
              </div>
            </groupui-card>
          </groupui-grid-col>
        </groupui-grid-row>
      </groupui-grid>

      <groupui-grid type="fluid" margin-type="custom" margin="0" gutter="24px" class="overview-tile-grid" aria-label="Story und Szenarien">
        <groupui-grid-row>
          <groupui-grid-col xs="12" s="12" m="6" l="4" xl="4" xxl="4">
            ${groupuiCard(`
              <groupui-tag>Primary case</groupui-tag>
              <groupui-headline heading="h3">${demoCase.title}</groupui-headline>
              <div class="groupui-info-list">
                <div><groupui-text weight="bold">Vehicle</groupui-text><groupui-text>${escapeHtml(demoCase.vehicle)}</groupui-text></div>
                <div><groupui-text weight="bold">VIN</groupui-text><groupui-text>${escapeHtml(demoCase.vin)}</groupui-text></div>
                <div><groupui-text weight="bold">Concern</groupui-text><groupui-text>${escapeHtml(demoCase.serviceConcern)}</groupui-text></div>
                <div><groupui-text weight="bold">Next action</groupui-text><groupui-text>${escapeHtml(demoCase.nextAction)}</groupui-text></div>
              </div>
              <groupui-button data-nav="aftersales-journey">Journey starten</groupui-button>
            `, 'overview-tile-card')}
          </groupui-grid-col>

          <groupui-grid-col xs="12" s="12" m="6" l="4" xl="4" xxl="4">
            ${groupuiCard(`
              <groupui-tag>Journey ownership</groupui-tag>
              <groupui-headline heading="h3">Wer besitzt welchen Schritt?</groupui-headline>
              <div class="groupui-step-list">
                ${aftersalesSteps.map((item) => `
                  <div>
                    <groupui-tag>${item.step}</groupui-tag>
                    <div>
                      <groupui-text weight="bold">${item.title}</groupui-text>
                      <groupui-text>${item.app}</groupui-text>
                    </div>
                  </div>
                `).join('')}
              </div>
            `, 'overview-tile-card')}
          </groupui-grid-col>

          <groupui-grid-col xs="12" s="12" m="12" l="4" xl="4" xxl="4">
            ${groupuiCard(`
              <groupui-tag>${flightReferenceFlow.eyebrow}</groupui-tag>
              <groupui-headline heading="h3">${flightReferenceFlow.title}</groupui-headline>
              <groupui-text>${flightReferenceFlow.summary}</groupui-text>
              <groupui-button variant="secondary" data-nav="flight-booking">Referenzfluss ansehen</groupui-button>
            `, 'overview-tile-card reference-flow-card')}
          </groupui-grid-col>
        </groupui-grid-row>
      </groupui-grid>

      <div class="comparison-grid scenario-grid">
        ${aftersalesScenarioCards.map((card) => groupuiCard(`
          <groupui-tag>Secondary scenario</groupui-tag>
          <groupui-headline heading="h3">${card.title}</groupui-headline>
          <groupui-text>${card.summary}</groupui-text>
          <groupui-text weight="bold">${card.cta}</groupui-text>
        `, 'overview-grid-card')).join('')}
      </div>

      <div class="comparison-grid">
        ${targetPictures.map((picture) => groupuiCard(`
          <groupui-tag>${picture.title}</groupui-tag>
          <groupui-headline heading="h3">${picture.id}</groupui-headline>
          <p><strong>Business effect:</strong> ${picture.fact}</p>
          <p><strong>Architectural decision:</strong> ${picture.decision}</p>
          <groupui-button variant="secondary" data-nav="${picture.id}">View pattern</groupui-button>
        `)).join('')}
      </div>

      ${renderGroupUiRuntimeCard()}
      ${contextPanel(createAftersalesContext({ sourceStep: 'overview', integrationMode: integrationModes.dashboardLauncher }))}
    </section>
  `;
}

function renderCompactDefinitionList(rows) {
  return `
    <dl class="compact-list">
      ${rows.map(([label, value]) => `
        <div>
          <dt>${escapeHtml(label)}</dt>
          <dd>${escapeHtml(value)}</dd>
        </div>
      `).join('')}
    </dl>
  `;
}

function renderWorkflowStatusList(items) {
  return `
    <div class="workflow-status-list">
      ${items.map((item) => `
        <div class="workflow-status-item ${item.done ? 'done' : ''}">
          <div class="workflow-status-item-header">
            <strong>${item.step}. ${escapeHtml(item.label)}</strong>
            ${item.done ? '' : '<em>Offen</em>'}
          </div>
          ${item.done ? `<p class="workflow-status-item-value">${escapeHtml(item.value)}</p>` : ''}
          <span>${escapeHtml(item.runtime)}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderContextAccordion(context = state.activeContext) {
  return `
    <div class="workflow-context-accordion">
      <groupui-accordion first="true">
        <span slot="headline">
          <groupui-headline heading="h6">Serialized payload</groupui-headline>
        </span>
        <div class="workflow-context-accordion-body">
          <groupui-text>
            Host und Targets greifen auf denselben serialisierbaren Vertrag zu. Neue Schritte reichern den Kontext explizit an,
            statt stillen Zustand zu teilen.
          </groupui-text>
          <div class="groupui-info-list">
            ${contextSummaryRows(context).map(([label, value]) => `
              <div>
                <groupui-text weight="bold">${label}</groupui-text>
                <groupui-text>${escapeHtml(value || 'n/a')}</groupui-text>
              </div>
            `).join('')}
          </div>
          <pre class="context-snippet">${escapeHtml(JSON.stringify(context, null, 2))}</pre>
        </div>
      </groupui-accordion>
    </div>
  `;
}

function renderAftersalesJourney() {
  const context = createAftersalesContext({
    sourceStep: 'aftersales-journey-view',
    integrationMode: integrationModes.navigation
  });
  const appointment = state.aftersales.selectedAppointment;
  const selectedPackage = state.aftersales.selectedPackage;
  const serviceExtras = state.aftersales.serviceExtras;
  const totalPrice = (selectedPackage?.estimatedPrice || 0) + (serviceExtras?.totalPrice || 0);
  const workflowStatus = [
    {
      step: 1,
      label: 'Service-Kontext',
      runtime: 'React Shell',
      done: true,
      value: `${state.aftersales.serviceConcern} · ${state.aftersales.mileageKm} km`
    },
    {
      step: 2,
      label: 'Werkstattslot',
      runtime: 'Angular',
      done: Boolean(appointment),
      value: appointment ? `${appointment.date} · ${appointment.timeLabel || appointment.title}` : 'Offen'
    },
    {
      step: 3,
      label: 'Servicepaket',
      runtime: 'Svelte',
      done: Boolean(selectedPackage),
      value: selectedPackage ? `${selectedPackage.label} · ${selectedPackage.estimatedPrice} EUR` : 'Offen'
    },
    {
      step: 4,
      label: 'Extras und Mobilität',
      runtime: 'Web Components',
      done: Boolean(serviceExtras),
      value: serviceExtras
        ? `${(serviceExtras.selectedExtras || []).length || 0} Extras · ${serviceExtras.totalPrice || 0} EUR`
        : 'Offen'
    }
  ];
  const isInitialAftersalesStep = !appointment && !selectedPackage && !serviceExtras;
  const editingContext = Boolean(state.aftersales.editContext);

  let focusTag = 'Step 1 · React Shell';
  let focusTitle = 'Service-Kontext prüfen';
  let focusDescription = '';
  let focusPrimaryAction = '';
  let summaryExtra = '';
  let focusBody = `
    <groupui-grid class="aftersales-shell-form" gutter="16px" margin-type="custom" margin="0">
      <groupui-grid-row>
        <groupui-grid-col xs="12" m="6">
          <groupui-input data-aftersales-field="serviceConcern" value="${escapeHtml(state.aftersales.serviceConcern)}">
            <span slot="label">Service concern / Anliegen</span>
          </groupui-input>
        </groupui-grid-col>
        <groupui-grid-col xs="12" m="6">
          <groupui-input data-aftersales-field="mileageKm" value="${escapeHtml(state.aftersales.mileageKm)}">
            <span slot="label">Mileage / Kilometerstand</span>
          </groupui-input>
        </groupui-grid-col>
        <groupui-grid-col xs="12" m="6">
          <groupui-input data-aftersales-field="workshopLocation" value="${escapeHtml(state.aftersales.workshopLocation)}">
            <span slot="label">Workshop / Werkstatt</span>
          </groupui-input>
        </groupui-grid-col>
        <groupui-grid-col xs="12" m="6">
          <groupui-select data-aftersales-field="language" value="${escapeHtml(state.activeContext.language)}">
            <span slot="label">Language / Sprache</span>
            <groupui-select-option value="de-DE">Deutsch</groupui-select-option>
            <groupui-select-option value="en-GB">English</groupui-select-option>
          </groupui-select>
        </groupui-grid-col>
      </groupui-grid-row>
    </groupui-grid>
    <div class="workflow-next-step-inline">
      <div class="action-row right">
        ${editingContext
          ? `<groupui-button type="button" data-action="finish-aftersales-context-edit">Zurück zur Übersicht</groupui-button>`
          : `<groupui-button variant="secondary" type="button" data-action="reset-aftersales">Journey zurücksetzen</groupui-button>
        <groupui-button type="button" data-action="open-aftersales-calendar">Werkstattslot auswählen</groupui-button>`}
      </div>
    </div>
  `;

  if (editingContext) {
    focusTitle = 'Service-Kontext ändern';
    focusDescription = 'Passe Kunden- und Servicekontext an und kehre anschließend zur Übersicht zurück.';
  }

  if (!editingContext && appointment && !selectedPackage) {
    summaryExtra = `
      <groupui-tag>Step 2 abgeschlossen · Angular</groupui-tag>
      ${renderCompactDefinitionList([
        ['Werkstattslot', appointment.title],
        ['Datum', appointment.date],
        ['Werkstatt', appointment.location || state.aftersales.workshopLocation],
        ['Dauer', `${appointment.durationMinutes || 0} min`]
      ])}
    `;
    focusTag = 'Next step · Svelte';
    focusTitle = 'Servicepaket auswählen';
    focusDescription = 'Der nächste Dialog zeigt eine reduzierte Empfehlungsauswahl für passende Servicepakete.';
    focusPrimaryAction = `
      <div class="action-row">
        <groupui-button type="button" data-action="open-aftersales-packages">Jetzt auswählen</groupui-button>
      </div>
    `;
    focusBody = `
      <div class="workflow-preview-list">
        ${servicePackages.slice(0, 3).map((item) => `
          <div>
            <strong>${escapeHtml(item.label)}</strong>
            <span>${escapeHtml(item.summary)}</span>
          </div>
        `).join('')}
      </div>
      <div class="action-row">
        <groupui-button variant="secondary" type="button" data-action="open-aftersales-calendar">Werkstattslot ändern</groupui-button>
      </div>
    `;
  }

  if (!editingContext && selectedPackage && !serviceExtras) {
    focusTag = 'Step 3 abgeschlossen · Svelte';
    focusTitle = 'Servicepaket übernommen';
    focusDescription = 'Paket, Dauer und Grundpreis liegen jetzt in der Shell. Als letzter Eingabeschritt folgt eine fokussierte Extras- und Mobilitätsauswahl im Dialog.';
    focusBody = `
      <div class="workflow-selection-grid">
        <div class="workflow-selection-block">
          <groupui-tag>Bereits gewählt</groupui-tag>
          ${renderCompactDefinitionList([
            ['Werkstattslot', `${appointment.title} · ${appointment.date}`],
            ['Werkstatt', appointment.location || state.aftersales.workshopLocation],
            ['Servicepaket', selectedPackage.label],
            ['Grundpreis', `${selectedPackage.estimatedPrice} EUR`]
          ])}
        </div>
        <div class="workflow-selection-block">
          <groupui-tag>Package summary</groupui-tag>
          <groupui-headline heading="h3">${escapeHtml(selectedPackage.label)}</groupui-headline>
          <groupui-text>${escapeHtml(selectedPackage.summary)}</groupui-text>
          <groupui-text>${escapeHtml(selectedPackage.estimatedDurationMinutes)} min · ${escapeHtml(selectedPackage.estimatedPrice)} EUR</groupui-text>
        </div>
      </div>
      <div class="workflow-teaser">
        <div>
          <groupui-tag>Next step · Web Components</groupui-tag>
          <groupui-headline heading="h3">Extras auswählen</groupui-headline>
          <groupui-text>Ein kompakter Dialog für Mobilität, Teile-Status und optionale Add-ons. Nach Bestätigung zeigt die Shell direkt die Serviceauftragsvorschau.</groupui-text>
        </div>
        <div class="workflow-preview-list">
          <div><strong>Shuttle service</strong><span>Mobility option</span></div>
          <div><strong>Replacement vehicle</strong><span>Optional premium support</span></div>
          <div><strong>Wiper replacement</strong><span>Parts add-on</span></div>
        </div>
        <div class="action-row">
          <groupui-button type="button" data-action="open-aftersales-extras">Extras auswählen</groupui-button>
          <groupui-button variant="secondary" type="button" data-action="open-aftersales-packages">Servicepaket ändern</groupui-button>
        </div>
      </div>
    `;
  }

  if (!editingContext && selectedPackage && serviceExtras) {
    focusTag = 'Step 4 abgeschlossen · Web Components';
    focusTitle = 'Service order preview / Serviceauftragsvorschau';
    focusDescription = 'Alle Runtime-Beiträge sind übernommen. Die Shell zeigt nur noch die verdichtete Ergebnisansicht und hält den gesamten Verlauf nachvollziehbar.';
    focusBody = `
      <div class="flight-summary-header">
        <div>
          <groupui-headline heading="h3">Service order preview / Serviceauftragsvorschau</groupui-headline>
          <groupui-text>React führt Angular-, Svelte- und Web-Components-Rückgaben in einer finalen Shell-Zusammenfassung zusammen.</groupui-text>
        </div>
        <div class="flight-summary-price">
          <span>Estimated total</span>
          <strong>${totalPrice} EUR</strong>
        </div>
      </div>
      <div class="flight-summary-sections">
        <section>
          <groupui-tag>React Shell</groupui-tag>
          <h4>Customer and vehicle</h4>
          ${renderCompactDefinitionList([
            ['Customer', demoCase.customer],
            ['Vehicle', demoCase.vehicle],
            ['Concern', state.aftersales.serviceConcern]
          ])}
          <div class="action-row summary-section-actions">
            <groupui-button variant="secondary" type="button" data-action="edit-aftersales-context">Ändern</groupui-button>
          </div>
        </section>
        <section>
          <groupui-tag>Angular</groupui-tag>
          <h4>Workshop slot</h4>
          ${renderCompactDefinitionList([
            ['Appointment', appointment.title],
            ['Date', appointment.date],
            ['Location', appointment.location]
          ])}
          <div class="action-row summary-section-actions">
            <groupui-button variant="secondary" type="button" data-action="open-aftersales-calendar">Ändern</groupui-button>
          </div>
        </section>
        <section>
          <groupui-tag>Svelte</groupui-tag>
          <h4>Recommended package</h4>
          ${renderCompactDefinitionList([
            ['Package', selectedPackage.label],
            ['Duration', `${selectedPackage.estimatedDurationMinutes} min`],
            ['Base price', `${selectedPackage.estimatedPrice} EUR`]
          ])}
          <div class="action-row summary-section-actions">
            <groupui-button variant="secondary" type="button" data-action="open-aftersales-packages">Ändern</groupui-button>
          </div>
        </section>
        <section class="flight-summary-costs">
          <groupui-tag>Web Components</groupui-tag>
          <h4>Extras and mobility</h4>
          ${renderCompactDefinitionList([
            ['Extras', (serviceExtras.selectedExtras || []).map((item) => item.label).join(', ') || 'Keine'],
            ['Mobility', serviceExtras.mobilityNeed || 'none'],
            ['Total extras', `${serviceExtras.totalPrice || 0} EUR`],
            ['Estimated total', `${totalPrice} EUR`]
          ])}
          <div class="action-row summary-section-actions">
            <groupui-button variant="secondary" type="button" data-action="open-aftersales-extras">Ändern</groupui-button>
          </div>
        </section>
      </div>
      <div class="action-row">
        <groupui-button variant="secondary" type="button" data-action="reset-aftersales">Journey zurücksetzen</groupui-button>
      </div>
    `;
  }

  const focusTagClass = focusTag === 'Next step · Svelte' ? 'aftersales-pill-compact' : '';

  return `
    <section class="view aftersales-view">
      ${groupuiCard(`
        <groupui-tag>React Journey / Shell Summary</groupui-tag>
        <groupui-headline heading="h3">Volkswagen Aftersales service appointment</groupui-headline>
        <groupui-text>
          Die Shell besitzt den Gesamtzustand. Jeder Schritt zeigt nur die bisherige Auswahl und teasered den nächsten
          Dialogschritt, statt mehrere Runtime-Flächen parallel offen zu halten. Die Shell startet den Prozess,
          hält Fahrzeug- und Servicekontext und teasered den nächsten Runtime-Schritt als klaren Dialog-Call-to-Action an.
        </groupui-text>
      `, 'aftersales-header-card')}

      ${groupuiCard(`
        <section class="flight-stepper aftersales-stepper" aria-label="Aftersales journey steps">
          <groupui-stepper-horizontal>
            ${aftersalesSteps.map((item) => `
              <groupui-step
                data-aftersales-step="${item.step}"
                ${item.step === state.aftersales.currentStep ? 'active=""' : ''}
              >${item.title}</groupui-step>
            `).join('')}
          </groupui-stepper-horizontal>
          <div class="flight-step-technologies" aria-label="Frontend technologies per step">
            ${aftersalesSteps.map((item) => `
              <span class="${item.step === state.aftersales.currentStep ? 'is-current' : ''}">
                ${item.app}
              </span>
            `).join('')}
          </div>
        </section>
      `, 'aftersales-stepper-card')}


      ${(isInitialAftersalesStep || editingContext) ? `
        <div class="aftersales-workflow-layout aftersales-step1-layout">
          ${groupuiCard(`
              <groupui-tag class="${focusTagClass}">${focusTag}</groupui-tag>
              <groupui-headline heading="h3">${focusTitle}</groupui-headline>
              ${focusDescription ? `<groupui-text>${focusDescription}</groupui-text>` : ''}
              ${focusBody}
            `, 'aftersales-focus-card')}
            ${groupuiCard(`
              <groupui-tag size="s" class="aftersales-pill-nowrap">Customer data</groupui-tag>
              <groupui-headline heading="h3">Kundendaten</groupui-headline>
              ${renderCompactDefinitionList([
                ['Name', demoCase.customer],
                ['Vehicle', demoCase.vehicle],
                ['VIN', demoCase.vin],
                ['Workshop', state.aftersales.workshopLocation],
                ['Language', state.activeContext.language]
              ])}
            `, 'aftersales-summary-card')}
          ${groupuiCard(renderContextAccordion(context), 'aftersales-accordion-card')}
        </div>
      ` : `
        <div class="aftersales-workflow-layout">
          ${groupuiCard(`
              <groupui-tag class="${focusTagClass}">${focusTag}</groupui-tag>
              <groupui-headline heading="h3">${focusTitle}</groupui-headline>
              ${focusPrimaryAction}
              <groupui-text>${focusDescription}</groupui-text>
              ${focusBody}
            `, 'aftersales-focus-card')}
          ${groupuiCard(`
              ${summaryExtra}
              <groupui-tag>Shell summary</groupui-tag>
              <groupui-headline heading="h3">Bisheriger Stand</groupui-headline>
              ${renderWorkflowStatusList(workflowStatus)}
              <div class="summary-price-panel">
                <span>Estimated order value</span>
                <strong>${selectedPackage ? totalPrice : selectedPackage?.estimatedPrice || 0} EUR</strong>
              </div>
              ${renderCompactDefinitionList([
                ['Customer', demoCase.customer],
                ['Vehicle', demoCase.vehicle],
                ['Workshop', appointment?.location || state.aftersales.workshopLocation],
                ['Language', state.activeContext.language]
              ])}
            `, 'aftersales-summary-card')}
          ${groupuiCard(renderContextAccordion(context), 'aftersales-accordion-card')}
        </div>
      `}
    </section>
  `;
}

function renderComparison() {
  return `
    <section class="view">
      <div class="view-heading">
        <groupui-headline heading="h2">Vergleich der Zielbilder</groupui-headline>
        <p>Die Plattform bleibt fachlich Aftersales-first, erklärt aber weiterhin sichtbar unterschiedliche Integrationsmuster.</p>
      </div>
      <div class="comparison-grid">
        ${targetPictures.map((picture) => groupuiCard(`
          <groupui-tag>${picture.id}</groupui-tag>
          <groupui-headline heading="h3">${picture.title}</groupui-headline>
          <p><strong>Documented fact:</strong> ${picture.fact}</p>
          <p><strong>Demo decision:</strong> ${picture.decision}</p>
          <groupui-button variant="secondary" data-nav="${picture.id}">Demo anzeigen</groupui-button>
        `)).join('')}
      </div>
    </section>
  `;
}

function renderTechnologyOverview() {
  const techCards = [
    {
      tag: 'React Shell',
      title: 'Host shell and continuity layer',
      copy: 'React besitzt Navigation, Zusammenfassung, Journey-State und die Merge-Logik für alle Target-Rückgaben.'
    },
    {
      tag: 'Angular',
      title: 'Workshop capacity step',
      copy: 'Angular zeigt den kapazitätsbezogenen Auswahl-Schritt als eigenständige App und gibt den Slot über Browser-native Kanäle zurück.'
    },
    {
      tag: 'Svelte',
      title: 'Recommendation step',
      copy: 'Svelte liefert einen kompakten, reaktiven Paket-Auswahlschritt für Aftersales-Services.'
    },
    {
      tag: 'Web Components',
      title: 'Framework-neutral extras',
      copy: 'Das Extras-Target demonstriert frameworkunabhängige, browserfreundliche UI-Schnittstellen.'
    },
    {
      tag: 'GroupUI',
      title: 'Mandatory visual language',
      copy: 'GroupUI-Komponenten, Tokens und Layoutregeln bleiben das gemeinsame Designsystem über Host und Targets hinweg.'
    },
    {
      tag: 'Shared packages',
      title: 'Contracts, demo data and integration helpers',
      copy: 'Context-Modell, Navigation und Handover-Helfer bleiben zentral unter packages/ statt in Apps dupliziert.'
    }
  ];

  return `
    <section class="view">
      <div class="view-heading">
        <groupui-tag>Technical stakeholder view</groupui-tag>
        <groupui-headline heading="h2">Technology Overview</groupui-headline>
        <groupui-text>Diese Seite erklärt, wie die Plattform aus realen Runtime-Teilnehmern zusammengesetzt ist, ohne die fachliche Journey in Debug-Details aufzulösen.</groupui-text>
      </div>
      <div class="comparison-grid tech-card-grid">
        ${techCards.map((card) => groupuiCard(`
          <groupui-tag>${card.tag}</groupui-tag>
          <groupui-headline heading="h3">${card.title}</groupui-headline>
          <groupui-text>${card.copy}</groupui-text>
        `, 'overview-grid-card')).join('')}
      </div>
      ${renderGroupUiRuntimeCard()}
    </section>
  `;
}

function renderImplementation() {
  const implementationCards = [
    {
      tag: 'Host ownership',
      title: 'Shell stays canonical',
      copy: 'Die Shell besitzt Journey-State, Navigation, Zusammenfassungen und die finale Serviceauftragsvorschau.'
    },
    {
      tag: 'Context model',
      title: 'Serializable and explicit',
      copy: 'Alle Aftersales-Felder bleiben URL-serialisierbar. Targets schlagen Änderungen vor, die Shell führt sie zusammen.'
    },
    {
      tag: 'Handover channels',
      title: 'URL, BroadcastChannel, postMessage',
      copy: 'Isolierte, eingebettete, Modal- und New-Tab-Pfade bleiben sichtbar und browsernah.'
    },
    {
      tag: 'Verification',
      title: 'Build and QA hardening',
      copy: 'Der Produktions-Build bleibt die Referenz. Unit-/Syntax-Checks und E2E decken Landing, Handover und Referenzfluss ab.'
    }
  ];

  return `
    <section class="view">
      <div class="view-heading">
        <groupui-tag>Implementation briefing</groupui-tag>
        <groupui-headline heading="h2">Implementation</groupui-headline>
        <groupui-text>Diese Zusammenfassung richtet sich an Entwickler und Architekten, die Ownership, Datenfluss und Teststrategie der Plattform schnell verstehen müssen.</groupui-text>
      </div>
      <div class="comparison-grid implementation-grid">
        ${implementationCards.map((card) => groupuiCard(`
          <groupui-tag>${card.tag}</groupui-tag>
          <groupui-headline heading="h3">${card.title}</groupui-headline>
          <groupui-text>${card.copy}</groupui-text>
        `, 'overview-grid-card')).join('')}
      </div>
      <div class="comparison-grid implementation-grid">
        ${Object.entries({
          [integrationModes.linkedLaunchpad]: describeIntegrationMode('linkedLaunchpad'),
          [integrationModes.embeddedWorkspace]: describeIntegrationMode('embeddedWorkspace'),
          [integrationModes.integratedExperience]: describeIntegrationMode('integratedExperience'),
          [integrationModes.modal]: describeIntegrationMode('modal')
        }).map(([mode, detail]) => groupuiCard(`
          <groupui-tag>${mode}</groupui-tag>
          <groupui-headline heading="h3">${detail.label}</groupui-headline>
          <groupui-text>${detail.ownershipHint}</groupui-text>
        `)).join('')}
      </div>
      ${contextPanel(createAftersalesContext({ sourceStep: 'implementation-briefing', integrationMode: integrationModes.navigation }))}
    </section>
  `;
}

function renderFlightBooking() {
  const context = createFlightBookingContext();
  const embeddedFlightOptionsContext = createFlightBookingContext({
    sourceStep: 'flight-option-selection-embedded',
    targetApp: 'svelte-flight-options-target',
    integrationMode: integrationModes.embeddedWorkspace
  });
  const embeddedFlightOptionsUrl = createFlightOptionsTargetUrl(embeddedFlightOptionsContext);
  const embeddedFlightExtrasContext = createFlightBookingContext({
    sourceStep: 'flight-extras-selection-embedded',
    targetApp: 'stencil-flight-extras-target',
    integrationMode: integrationModes.embeddedWorkspace
  });
  const embeddedFlightExtrasUrl = createFlightExtrasTargetUrl(embeddedFlightExtrasContext);
  const flightOptionFromShell = state.receivedTransfer?.from === 'react-shell-inline';
  const flightOptionFromEmbeddedSvelte = state.receivedTransfer?.context?.integrationMode === integrationModes.embeddedWorkspace;
  const flightOptionSourceLabel = flightOptionFromShell
    ? 'Direkt in der React Shell gewählt'
    : flightOptionFromEmbeddedSvelte
      ? 'Von eingebettetem Svelte iframe zurückgegeben'
      : 'Von Svelte zurückgegeben';
  const flightOptionSourceText = flightOptionFromShell
    ? 'Die React Shell hat den Flugoptions-Schritt selbst ausgeführt und denselben Kontext erweitert.'
    : flightOptionFromEmbeddedSvelte
      ? 'Die Svelte-App lief als iframe direkt in der React Shell und hat die Flugauswahl zurückgegeben.'
      : 'Die Svelte Remote hat die Flugauswahl an die React Shell zurückgegeben.';

  return `
    <section class="view flight-booking-view">
      <div class="view-heading">
        <groupui-tag>Reference flow / Referenzfluss</groupui-tag>
        <groupui-headline heading="h2">Flight booking Hannover → Barcelona</groupui-headline>
        <groupui-text>
          Der bestehende Flugfluss bleibt als sekundärer Referenzpfad erhalten. Er erklärt Ownership und Handover weiter sichtbar,
          steht aber nicht mehr im Zentrum der Produktstory.
        </groupui-text>
      </div>

      <section class="flight-stepper" aria-label="Flight booking steps">
        <groupui-stepper-horizontal>
          ${flightBookingSteps.map((item) => `
            <groupui-step
              data-flight-step="${item.step}"
              ${item.step < state.flightBooking.currentStep ? 'done=""' : ''}
              ${item.step === state.flightBooking.currentStep ? 'active=""' : ''}
            >${item.title}</groupui-step>
          `).join('')}
        </groupui-stepper-horizontal>
        <div class="flight-step-technologies" aria-label="Frontend technologies per step">
          ${flightBookingSteps.map((item) => `<span><strong>${item.step}</strong>${item.app}</span>`).join('')}
        </div>
      </section>

      ${state.flightBooking.departureDate ? groupuiCard(`
        <groupui-tag>Von Angular zurückgegeben</groupui-tag>
        <groupui-headline heading="h3">Reisedatum übernommen</groupui-headline>
        <groupui-text>Der Angular-Kalender hat den Termin an die React Shell zurückgegeben.</groupui-text>
        <dl class="compact-list">
          <div><dt>Datum</dt><dd>${escapeHtml(state.flightBooking.departureDate)}</dd></div>
          <div><dt>Auswahl</dt><dd>${escapeHtml(state.flightBooking.selectedDateTitle)}</dd></div>
          <div><dt>Quelle</dt><dd>${escapeHtml(state.receivedTransfer?.from || 'angular-calendar-target')}</dd></div>
        </dl>
        <groupui-button variant="secondary" type="button" data-action="open-flight-calendar">Termin ändern</groupui-button>
      `, 'flight-return-card') : ''}

      ${state.flightBooking.departureDate && (!state.flightBooking.flightOption || state.flightBooking.currentStep === 3) ? groupuiCard(`
        <groupui-tag>Schritt 3 · Svelte Remote</groupui-tag>
        <groupui-headline heading="h3">Flugoption auswählen</groupui-headline>
        <groupui-text>Integration Pattern A: Die Shell übergibt Route und Datum an eine Svelte-Remote-App.</groupui-text>
        <div class="action-row">
          <groupui-button type="button" data-action="open-flight-options">Svelte Flugoptionen öffnen</groupui-button>
        </div>
      `, 'flight-option-launch-card') : ''}

      ${state.flightBooking.departureDate && (!state.flightBooking.flightOption || state.flightBooking.currentStep === 3) ? groupuiCard(`
        <groupui-tag>Integration Pattern B · Embedded Svelte</groupui-tag>
        <groupui-headline heading="h3">Flugoptionen direkt in der React Shell bedienen</groupui-headline>
        <groupui-text>Die Svelte-App läuft als iframe innerhalb der Shell. Anzeige, Auswahl und Übernehmen-Button kommen aus Svelte.</groupui-text>
        <iframe class="embedded-svelte-frame" title="Svelte Flight Options Embedded" src="${embeddedFlightOptionsUrl}"></iframe>
      `, 'embedded-flight-options-card') : ''}

      ${state.flightBooking.departureDate && (!state.flightBooking.flightOption || state.flightBooking.currentStep === 3) ? groupuiCard(`
        <groupui-tag>Integration Pattern C · Shell UI</groupui-tag>
        <groupui-headline heading="h3">Flugoption direkt in der React Shell wählen</groupui-headline>
        <groupui-text>Keine Remote-App: Die Shell übernimmt den Schritt selbst und erweitert denselben Kontext.</groupui-text>
        <div class="shell-flight-options">
          ${flightOptions.map((option) => `
            <groupui-card padding="16px" class="shell-flight-option">
              <groupui-tag>${option.carrier}</groupui-tag>
              <groupui-headline heading="h3">${option.label}</groupui-headline>
              <dl class="compact-list">
                <div><dt>Abflug</dt><dd>${option.departure}</dd></div>
                <div><dt>Ankunft</dt><dd>${option.arrival}</dd></div>
                <div><dt>Dauer</dt><dd>${option.duration}</dd></div>
                <div><dt>Preis</dt><dd>${option.price} EUR</dd></div>
              </dl>
              <groupui-button type="button" data-action="select-shell-flight-option" data-option-id="${option.id}">Direkt wählen</groupui-button>
            </groupui-card>
          `).join('')}
        </div>
      `, 'shell-flight-options-card') : ''}

      ${state.flightBooking.flightOption ? groupuiCard(`
        <groupui-tag>${flightOptionSourceLabel}</groupui-tag>
        <groupui-headline heading="h3">Flugoption übernommen</groupui-headline>
        <groupui-text>${flightOptionSourceText}</groupui-text>
        <dl class="compact-list">
          <div><dt>Option</dt><dd>${escapeHtml(state.flightBooking.flightOption.label)}</dd></div>
          <div><dt>Airline</dt><dd>${escapeHtml(state.flightBooking.flightOption.carrier)}</dd></div>
          <div><dt>Preis</dt><dd>${escapeHtml(state.flightBooking.flightOption.price)} EUR</dd></div>
          <div><dt>Quelle</dt><dd>${escapeHtml(state.receivedTransfer?.from || 'svelte-flight-options-target')}</dd></div>
        </dl>
        <groupui-button variant="secondary" type="button" data-action="open-flight-options">Flugoption ändern</groupui-button>
      `, 'flight-option-return-card') : ''}

      ${state.flightBooking.flightOption && (!state.flightBooking.flightExtras || state.flightBooking.currentStep === 4) ? groupuiCard(`
        <groupui-tag>Schritt 4 · Native Web Component</groupui-tag>
        <groupui-headline heading="h3">Reise-Extras auswählen</groupui-headline>
        <groupui-text>Die Extras werden in einer eigenständigen Web-Components-Ziel-App bedient. Die React Shell bettet sie als iframe ein.</groupui-text>
        <iframe class="embedded-stencil-frame" title="Web Component Flight Extras Embedded" src="${embeddedFlightExtrasUrl}"></iframe>
      `, 'embedded-flight-extras-card') : ''}

      ${state.flightBooking.flightExtras && state.flightBooking.currentStep !== 4 ? groupuiCard(`
        <groupui-tag>Von Web Components zurückgegeben</groupui-tag>
        <groupui-headline heading="h3">Extras übernommen</groupui-headline>
        <groupui-text>Die Web-Component-App hat die Zusatzleistungen an die React Shell zurückgegeben.</groupui-text>
        <dl class="compact-list">
          <div><dt>Sitzplatz</dt><dd>${escapeHtml(state.flightBooking.flightExtras.seat)}</dd></div>
          <div><dt>Gepäck</dt><dd>${escapeHtml(state.flightBooking.flightExtras.baggage)}</dd></div>
          <div><dt>Priority</dt><dd>${state.flightBooking.flightExtras.priorityBoarding ? 'Ja' : 'Nein'}</dd></div>
          <div><dt>CO2-Ausgleich</dt><dd>${state.flightBooking.flightExtras.carbonOffset ? 'Ja' : 'Nein'}</dd></div>
          <div><dt>Preis Extras</dt><dd>${escapeHtml(state.flightBooking.flightExtras.totalPrice)} EUR</dd></div>
          <div><dt>Quelle</dt><dd>${escapeHtml(state.receivedTransfer?.from || 'stencil-flight-extras-target')}</dd></div>
        </dl>
        <groupui-button variant="secondary" type="button" data-action="open-flight-extras">Extras ändern</groupui-button>
      `, 'flight-extras-return-card') : ''}

      ${state.flightBooking.flightExtras && state.flightBooking.currentStep === 5 ? groupuiCard(`
        <groupui-tag>Schritt 5 · React Shell</groupui-tag>
        <div class="flight-summary-header">
          <div>
            <groupui-headline heading="h2">Buchung zusammenfassen</groupui-headline>
            <groupui-text>Alle Informationen aus React Shell, Angular, Svelte und Web Components laufen hier in einer gemeinsamen Buchungsübersicht zusammen.</groupui-text>
          </div>
          <div class="flight-summary-price">
            <span>Gesamtpreis</span>
            <strong>${state.flightBooking.flightOption.price + state.flightBooking.flightExtras.totalPrice} EUR</strong>
          </div>
        </div>

        <div class="flight-summary-route">
          <div><span>Von</span><strong>${escapeHtml(state.flightBooking.origin)}</strong></div>
          <div class="flight-summary-route-line" aria-hidden="true"></div>
          <div><span>Nach</span><strong>${escapeHtml(state.flightBooking.destination)}</strong></div>
        </div>

        <div class="flight-summary-sections">
          <section>
            <groupui-tag>Angular</groupui-tag>
            <h4>Reisedatum</h4>
            <dl class="compact-list">
              <div><dt>Datum</dt><dd>${escapeHtml(state.flightBooking.departureDate)}</dd></div>
              <div><dt>Auswahl</dt><dd>${escapeHtml(state.flightBooking.selectedDateTitle)}</dd></div>
            </dl>
          </section>
          <section>
            <groupui-tag>Svelte</groupui-tag>
            <h4>Flugoption</h4>
            <dl class="compact-list">
              <div><dt>Option</dt><dd>${escapeHtml(state.flightBooking.flightOption.label)}</dd></div>
              <div><dt>Airline</dt><dd>${escapeHtml(state.flightBooking.flightOption.carrier)}</dd></div>
              <div><dt>Zeit</dt><dd>${escapeHtml(state.flightBooking.flightOption.departure)}-${escapeHtml(state.flightBooking.flightOption.arrival)}</dd></div>
              <div><dt>Preis</dt><dd>${escapeHtml(state.flightBooking.flightOption.price)} EUR</dd></div>
            </dl>
          </section>
          <section>
            <groupui-tag>Web Components</groupui-tag>
            <h4>Reise-Extras</h4>
            <dl class="compact-list">
              <div><dt>Sitzplatz</dt><dd>${escapeHtml(state.flightBooking.flightExtras.seat)}</dd></div>
              <div><dt>Gepäck</dt><dd>${escapeHtml(state.flightBooking.flightExtras.baggage)}</dd></div>
              <div><dt>Priority</dt><dd>${state.flightBooking.flightExtras.priorityBoarding ? 'Ja' : 'Nein'}</dd></div>
              <div><dt>CO2</dt><dd>${state.flightBooking.flightExtras.carbonOffset ? 'Ja' : 'Nein'}</dd></div>
            </dl>
          </section>
          <section class="flight-summary-costs">
            <groupui-tag>React Shell</groupui-tag>
            <h4>Kostenübersicht</h4>
            <dl class="compact-list">
              <div><dt>Flug</dt><dd>${escapeHtml(state.flightBooking.flightOption.price)} EUR</dd></div>
              <div><dt>Extras</dt><dd>${escapeHtml(state.flightBooking.flightExtras.totalPrice)} EUR</dd></div>
              <div class="flight-summary-total"><dt>Gesamt</dt><dd>${state.flightBooking.flightOption.price + state.flightBooking.flightExtras.totalPrice} EUR</dd></div>
            </dl>
          </section>
        </div>
      `, 'flight-summary-card') : ''}

      <div class="flight-booking-grid">
        ${groupuiCard(`
          <groupui-tag>Schritt 1 · React Shell</groupui-tag>
          <groupui-headline heading="h3">Reisedaten festlegen</groupui-headline>
          <groupui-text>Die Shell erzeugt den initialen Journey-Kontext für die späteren Remote-Schritte.</groupui-text>
          <form class="flight-form">
            <label><span>Von</span><input data-flight-field="origin" value="${escapeHtml(state.flightBooking.origin)}" /></label>
            <label><span>Nach</span><input data-flight-field="destination" value="${escapeHtml(state.flightBooking.destination)}" /></label>
            <label>
              <span>Reiseart</span>
              <select data-flight-field="tripType">
                <option value="one-way" ${state.flightBooking.tripType === 'one-way' ? 'selected' : ''}>One-way</option>
                <option value="return" ${state.flightBooking.tripType === 'return' ? 'selected' : ''}>Return</option>
              </select>
            </label>
            <label><span>Reisende</span><input type="number" min="1" max="9" data-flight-field="passengers" value="${escapeHtml(state.flightBooking.passengers)}" /></label>
            <label>
              <span>Klasse</span>
              <select data-flight-field="travelClass">
                <option value="Economy" ${state.flightBooking.travelClass === 'Economy' ? 'selected' : ''}>Economy</option>
                <option value="Premium Economy" ${state.flightBooking.travelClass === 'Premium Economy' ? 'selected' : ''}>Premium Economy</option>
                <option value="Business" ${state.flightBooking.travelClass === 'Business' ? 'selected' : ''}>Business</option>
              </select>
            </label>
          </form>
          <div class="action-row">
            <groupui-button type="button" data-action="open-flight-calendar">Angular Kalender im Modal öffnen</groupui-button>
            <groupui-button variant="secondary" type="button" data-nav="debug">Event Log ansehen</groupui-button>
          </div>
        `, 'flight-form-card')}

        ${groupuiCard(`
          <groupui-tag>Live payload</groupui-tag>
          <groupui-headline heading="h3">Kontext aus Schritt 1</groupui-headline>
          <groupui-text>Dieser Payload wird im nächsten Schritt an die Angular Calendar App übergeben.</groupui-text>
          <pre class="context-snippet">${escapeHtml(JSON.stringify(context, null, 2))}</pre>
        `)}
      </div>
    </section>
  `;
}

function renderBaseAppPlaceholder(pageId) {
  const pages = {
    'base-service-catalog': {
      eyebrow: 'Svelte · Base App',
      title: 'Service Katalog',
      technology: 'Svelte Remote',
      description: 'Eigenständige Base App für den Servicekatalog. Inhalt folgt.'
    },
    'base-mobility-services': {
      eyebrow: 'Web Components · Base App',
      title: 'Mobilitäts-Services',
      technology: 'Native Web Component',
      description: 'Eigenständige Base App für Mobilitäts- und Zusatzservices. Inhalt folgt.'
    }
  };
  const page = pages[pageId] || pages['base-service-catalog'];

  return `
    <section class="view base-app-placeholder-page">
      <div class="view-heading">
        <groupui-tag>${page.eyebrow}</groupui-tag>
        <groupui-headline heading="h2">${page.title}</groupui-headline>
        <groupui-text>${page.description}</groupui-text>
      </div>
      ${groupuiCard(`
        <groupui-tag>${page.technology}</groupui-tag>
        <groupui-headline heading="h3">Content to be done</groupui-headline>
        <groupui-text>Diese Base App ist als eigenständiger Baustein angelegt. Die fachliche Ausgestaltung folgt in einem späteren Schritt.</groupui-text>
      `, 'base-app-placeholder-card')}
    </section>
  `;
}

function renderCalendarManagement() {
  const base = import.meta.env.BASE_URL;
  const url = `${base}calendar-app.html?v=calendar-crud-1`;

  return `
    <section class="view calendar-management-page">
      <div class="view-heading">
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 16px;">
          <groupui-tag>Angular · Werkstatt-Kalender</groupui-tag>
          <groupui-tag>Eingebettete Angular-App</groupui-tag>
        </div>
        <groupui-headline heading="h2">Kalenderverwaltung / Manage appointments</groupui-headline>
        <groupui-text>
          Die Angular-Kalender-App verwaltet alle Werkstatttermine (anlegen, ändern, löschen).
          Die Daten werden lokal als JSON im Browser gespeichert und stehen dem Datepicker der
          Aftersales-Journey direkt zur Verfügung. Die React Shell bleibt Rahmen und Navigation. Der Kalender läuft als echte Angular-App im iframe
          und teilt seinen Datenbestand über den gemeinsamen Termin-Store.
        </groupui-text>
      </div>
      ${groupuiCard(`
        <iframe class="calendar-management-frame" title="Angular Werkstatt-Kalender" src="${url}"></iframe>
      `, 'calendar-management-card')}
    </section>
  `;
}

function renderIsolatedFlightBookingPage(pageId) {
  const page = isolatedFlightBookingPages[pageId];
  if (!page) return renderFlightBooking();

  return `
    <section class="view isolated-flight-page">
      <div class="view-heading">
        <groupui-tag>${page.eyebrow}</groupui-tag>
        <groupui-headline heading="h2">${page.title}</groupui-headline>
        <groupui-text>${page.description}</groupui-text>
      </div>
      ${groupuiCard(`
        <groupui-tag>Singuläre Ansicht</groupui-tag>
        <groupui-headline heading="h3">${page.technology}</groupui-headline>
        <groupui-text>Diese Seite wird ohne <code>?context=...</code> geladen und bleibt als eigenständige Runtime-Ansicht verfügbar.</groupui-text>
        <iframe class="isolated-app-frame" title="${page.title}" src="${page.target}"></iframe>
      `, 'isolated-app-card')}
    </section>
  `;
}

function linkedLaunchContext() {
  return createContext({
    ...state.activeContext,
    sourceApp: 'react-shell',
    targetApp: 'case-follow-up-app',
    sourceStep: 'dashboard-follow-up-action',
    integrationMode: integrationModes.linkedLaunchpad
  });
}

function linkedTransferPayload(context = linkedLaunchContext()) {
  return { ...context };
}

function renderLinkedLaunchpad() {
  const context = linkedLaunchContext();
  const transferPayload = linkedTransferPayload(context);

  return `
    <section class="view linked-page">
      <section class="linked-hero">
        <div>
          <groupui-tag>Linked Integration</groupui-tag>
          <groupui-headline heading="h1">Linked integration / sichtbare Systemgrenze</groupui-headline>
          <p class="hero-lead">Loose coupling through explicit system handover.</p>
        </div>
        <div class="linked-system-strip" aria-label="System handover">
          <div class="system-badge system-badge-host"><span>Host</span><strong>React Shell</strong></div>
          <div class="system-arrow" aria-hidden="true">→</div>
          <div class="system-badge system-badge-target"><span>Target</span><strong>Angular App</strong></div>
        </div>
      </section>

      <section class="linked-journey" aria-label="Customer journey">
        <div class="journey-card journey-card-active"><span>Step 1</span><strong>Host prepares context</strong><p>The host shows the case and prepares serialized context.</p></div>
        <div class="journey-card"><span>Step 2</span><strong>Explicit launch</strong><p>The button hands over serialized context to another system.</p></div>
        <div class="journey-card"><span>Step 3</span><strong>Target system opened</strong><p>The Angular app receives the context; the target is not embedded.</p></div>
      </section>

      <div class="linked-dashboard">
        <div class="system-card system-card-host">
          <groupui-tag>Host</groupui-tag>
          <groupui-headline heading="h3">React Shell Dashboard</groupui-headline>
          <groupui-text>Case ${demoCase.id} is visible in the host application.</groupui-text>
          <dl class="compact-list">
            <div><dt>Customer</dt><dd>${escapeHtml(demoCase.customer)}</dd></div>
            <div><dt>Vehicle</dt><dd>${escapeHtml(demoCase.vehicle)}</dd></div>
            <div><dt>Status</dt><dd>${escapeHtml(demoCase.status)}</dd></div>
          </dl>
          ${state.followUpNote ? `
            <div class="returned-note">
              <groupui-text weight="bold">React Shell received:</groupui-text>
              <p>${escapeHtml(state.followUpNote)}</p>
            </div>
          ` : '<groupui-text>Die React Shell wartet auf eine Follow-up Note aus der Angular Target App.</groupui-text>'}
          <groupui-button type="button" data-action="linked-launch">Edit follow-up step</groupui-button>
        </div>

        <div class="system-boundary" aria-hidden="true"><span>System boundary</span></div>

        <div class="system-card system-card-target">
          <groupui-tag>Target</groupui-tag>
          <groupui-headline heading="h3">Angular App</groupui-headline>
          <groupui-text>The target is launched explicitly. It is not embedded in the React shell.</groupui-text>
          <div class="target-placeholder"><strong>Case Follow-Up App</strong><span>Opened only after context handover</span></div>
        </div>
      </div>

      <section class="context-panel linked-context-panel" aria-label="Transfer payload">
        <div>
          <groupui-text weight="bold">Transfer payload</groupui-text>
          <p>Der vollständige App-Kontext wird innerhalb der React Shell an die Linked Integration übergeben.</p>
        </div>
        <pre>${escapeHtml(JSON.stringify(transferPayload, null, 2))}</pre>
      </section>
    </section>
  `;
}

function renderCaseRemote(context) {
  return `
    <div class="remote remote-angular">
      <groupui-text weight="bold">Remote A: Angular service slice</groupui-text>
      <p>Die Shell hält den Kontext sichtbar. Angular übernimmt hier einen klar abgrenzbaren Funktionsschritt.</p>
      <dl class="compact-list">
        <div><dt>Case</dt><dd>${escapeHtml(demoCase.id)}</dd></div>
        <div><dt>Concern</dt><dd>${escapeHtml(context.serviceConcern || demoCase.serviceConcern)}</dd></div>
        <div><dt>Integration</dt><dd>${escapeHtml(context.integrationMode)}</dd></div>
      </dl>
      <groupui-button data-action="modal">Folgeschritt im Modal bearbeiten</groupui-button>
    </div>
  `;
}

function renderEmbeddedWorkspace() {
  const context = createContext(initialContexts.embedded);
  const moduleContent = state.embeddedModule === 'case-details'
    ? renderCaseRemote(context)
    : `<onefe-action-remote context="${escapeHtml(JSON.stringify(context))}"></onefe-action-remote>`;

  return `
    <section class="view workspace-view">
      <div class="view-heading">
        <groupui-tag>Embedded Workspace</groupui-tag>
        <groupui-headline heading="h2">Persistente Shell mit Navigation</groupui-headline>
        <p>Die Shell bleibt sichtbar, während eingebettete Module wechseln.</p>
      </div>
      <div class="workspace-shell">
        <aside class="workspace-menu">
          <button class="nav-item ${state.embeddedModule === 'case-details' ? 'active' : ''}" data-module="case-details">Case Details</button>
          <button class="nav-item ${state.embeddedModule === 'action' ? 'active' : ''}" data-module="action">Action Remote</button>
        </aside>
        <main class="embedded-module">${moduleContent}</main>
      </div>
      ${contextPanel(context)}
    </section>
  `;
}

function renderIntegratedExperience() {
  const context = createAftersalesContext({
    ...initialContexts.integrated,
    sourceStep: 'integrated-experience',
    integrationMode: integrationModes.integratedExperience
  });

  return `
    <section class="view">
      <div class="view-heading">
        <groupui-tag>Integrated Experience</groupui-tag>
        <groupui-headline heading="h2">Nahtlose End-to-End Journey</groupui-headline>
        <p>Die technische Herkunft bleibt erklärbar, aber der Nutzer erlebt eine fachlich zusammenhängende Journey.</p>
      </div>
      <div class="process-strip">
        ${journeySteps.map((step, index) => `
          <div class="process-step ${index === journeySteps.length - 1 ? 'highlight' : ''}">
            <span>${index + 1}</span>
            <strong>${step}</strong>
          </div>
        `).join('')}
      </div>
      <div class="integrated-flow">
        ${renderCaseRemote(context)}
        <onefe-action-remote context="${escapeHtml(JSON.stringify(context))}"></onefe-action-remote>
        ${renderVanillaResult(context)}
      </div>
      ${contextPanel(context)}
    </section>
  `;
}

function patternCard(title, description, action) {
  return groupuiCard(`
    <groupui-headline heading="h3">${title}</groupui-headline>
    <groupui-text>${description}</groupui-text>
    <groupui-button variant="secondary" data-action="${action}">Muster ausführen</groupui-button>
  `);
}

function renderPatterns() {
  return `
    <section class="view">
      <div class="view-heading">
        <groupui-headline heading="h2">Integrationsmuster extra</groupui-headline>
        <p>Alle Muster nutzen denselben Context-Vertrag und werden im Event Log sichtbar.</p>
      </div>
      <div class="pattern-grid">
        ${patternCard('New Tab / Window', 'Kontext wird in eine URL serialisiert und in einer separaten Oberfläche geöffnet.', 'new-tab')}
        ${patternCard('Modal / Dialog', 'Ein Prozessschritt öffnet eine Zielfunktion im Dialog.', 'modal')}
        ${patternCard('Navigation', 'Shell-Navigation wechselt in ein Zielmodul.', 'navigation')}
        ${patternCard('Prozessschritt-Integration', 'Inline-Funktion ohne sichtbaren App-Sprung.', 'process-step')}
        ${patternCard('Dashboard-Kachel / App-Launcher', 'Kachel startet Ziel-App mit Kontext.', 'launchpad')}
      </div>
      <div style="margin-top:18px; display:flex; gap:12px; flex-wrap:wrap;">
        <groupui-button type="button" data-action="new-tab-react">Open New Tab: React Target</groupui-button>
        <groupui-button type="button" data-action="new-tab-angular">Open New Tab: Angular Target</groupui-button>
        <groupui-button type="button" data-action="new-tab-calendar">Open New Tab: Angular Calendar</groupui-button>
        <groupui-button type="button" data-action="new-tab-svelte">Open New Tab: Svelte Target</groupui-button>
        <groupui-button type="button" data-action="new-tab-stencil">Open New Tab: Web Component Target</groupui-button>
      </div>
      <div class="inline-step">
        <groupui-headline heading="h3">Inline-Prozessschritt</groupui-headline>
        <onefe-action-remote context="${escapeHtml(JSON.stringify(createAftersalesContext({ sourceStep: 'patterns-inline', integrationMode: integrationModes.integratedExperience })))}"></onefe-action-remote>
      </div>
    </section>
  `;
}

function renderDebug() {
  return `
    <section class="view debug-view">
      <div class="view-heading">
        <groupui-headline heading="h2">Architektur / Debug / Context</groupui-headline>
        <p>Native Events, BroadcastChannel und postMessage werden getrennt sichtbar protokolliert.</p>
      </div>
      <div class="debug-grid">
        ${contextPanel()}
        ${groupuiCard(`
          <groupui-headline heading="h3">Event Log</groupui-headline>
          <div class="event-log">
            ${state.eventLog.length ? state.eventLog.map((entry) => `
              <article>
                <strong>${entry.time} - ${entry.type}</strong>
                <pre>${escapeHtml(JSON.stringify(entry.detail, null, 2))}</pre>
              </article>
            `).join('') : '<p>Noch keine Events.</p>'}
          </div>
        `)}
        ${groupuiCard(`
          <groupui-headline heading="h3">Micro-Frontend Versionsregel</groupui-headline>
          <p>Custom Elements können pro Tag-Namen nur einmal registriert werden. Unterschiedliche Major-Versionen werden im Prototyp nicht parallel genutzt.</p>
          <p>Vorsorge: Das Demo-Custom-Element prüft vor Registrierung <code>customElements.get(...)</code>.</p>
        `)}
        ${renderGroupUiRuntimeCard()}
      </div>
    </section>
  `;
}

function renderLinkedLaunchModal() {
  const context = linkedLaunchContext();
  const payload = linkedTransferPayload(context);

  modalBody.innerHTML = `
    <div class="g-modal-content modal-inner linked-modal">
      <groupui-tag>System handover visible</groupui-tag>
      <groupui-headline heading="h3">Angular Target App opened</groupui-headline>
      <groupui-text>Dies ist die Angular Zielanwendung. Die React Shell bleibt im Hintergrund und kann die Follow-up Note zurückempfangen.</groupui-text>
      <div class="launch-details">
        <div class="launch-detail-row"><span>Application</span><strong>Case Follow-Up App</strong></div>
        <div class="launch-detail-row"><span>Technology</span><strong>Angular</strong></div>
        <div class="launch-detail-row"><span>Integration type</span><strong>Linked Launchpad</strong></div>
        <div class="launch-detail-row"><span>Transport</span><strong>URL / serialized context</strong></div>
      </div>
      <groupui-headline heading="h4">Transfer payload</groupui-headline>
      <pre>${escapeHtml(JSON.stringify(payload, null, 2))}</pre>
      <form class="modal-form" data-action="linked-form-submit">
        <label>
          <span>Follow-up note</span>
          <input type="text" name="note" placeholder="Example: call customer tomorrow" />
        </label>
        <groupui-button type="submit">Save</groupui-button>
      </form>
      <div class="action-row right">
        <groupui-button variant="secondary" data-action="close-modal">Close</groupui-button>
      </div>
    </div>
  `;
}

function renderModal() {
  if (!state.modalContext) return;

  if (state.modalContext.integrationMode === integrationModes.linkedLaunchpad) {
    renderLinkedLaunchModal();
    return;
  }

  modalBody.innerHTML = `
    <div class="g-modal-content modal-inner">
      <groupui-headline heading="h3">Modal Context</groupui-headline>
      <pre>${escapeHtml(JSON.stringify(state.modalContext, null, 2))}</pre>
      <div class="action-row right">
        <groupui-button variant="secondary" data-action="close-modal">Close</groupui-button>
      </div>
    </div>
  `;
}

function renderActiveView() {
  if (state.activeView === 'aftersales-journey') return renderAftersalesJourney();
  if (state.activeView === 'calendar-management') return renderCalendarManagement();
  if (state.activeView === 'base-service-catalog') return renderBaseAppPlaceholder('base-service-catalog');
  if (state.activeView === 'base-mobility-services') return renderBaseAppPlaceholder('base-mobility-services');
  if (state.activeView === 'comparison') return renderComparison();
  if (state.activeView === 'technology-overview') return renderTechnologyOverview();
  if (state.activeView === 'implementation') return renderImplementation();
  if (state.activeView === 'flight-booking') return renderFlightBooking();
  if (isolatedFlightBookingPages[state.activeView]) return renderIsolatedFlightBookingPage(state.activeView);
  if (state.activeView === integrationModes.linkedLaunchpad) return renderLinkedLaunchpad();
  if (state.activeView === integrationModes.embeddedWorkspace) return renderEmbeddedWorkspace();
  if (state.activeView === integrationModes.integratedExperience) return renderIntegratedExperience();
  if (state.activeView === 'patterns') return renderPatterns();
  if (state.activeView === 'debug') return renderDebug();
  return renderOverview();
}

function render() {
  app.innerHTML = `
    ${renderHeader()}
    <div class="app-shell">
      ${renderNavigation()}
      <main>${renderActiveView()}</main>
    </div>
  `;
  syncColorModeToFrames(state.colorMode);
}

function ensureBroadcastChannel(context) {
  const channelName = `onefe-channel-${context.caseId}`;
  if (state.broadcastChannels[channelName]) return;

  try {
    const channel = new BroadcastChannel(channelName);
    channel.onmessage = (event) => {
      if (event.data && [
        'follow-up-return',
        'appointment-transfer',
        'service-package-transfer',
        'service-extras-transfer',
        'flight-option-transfer',
        'flight-extras-transfer'
      ].includes(event.data.type)) {
        receiveRemotePayload(event.data, 'channel-message');
        render();
      }
    };
    state.broadcastChannels[channelName] = channel;
  } catch (error) {
    console.warn('BroadcastChannel not available:', error);
  }
}

function handleAction(action, sourceElement) {
  if (action === 'launchpad') {
    navigate(integrationModes.linkedLaunchpad, initialContexts.launchpad);
  }

  if (action === 'new-tab' || action === 'new-tab-react' || action === 'new-tab-angular' || action === 'new-tab-calendar' || action === 'new-tab-svelte' || action === 'new-tab-stencil') {
    const context = createAftersalesContext({ sourceStep: 'new-tab-launch', integrationMode: integrationModes.newTab });
    ensureBroadcastChannel(context);
    const serialized = serializeContext(context);
    let targetPage = 'linked-host.html';
    if (action === 'new-tab-react') targetPage = 'target-react.html';
    if (action === 'new-tab-angular') targetPage = 'linked-target.html';
    if (action === 'new-tab-calendar') targetPage = 'calendar-target.html';
    if (action === 'new-tab-svelte') targetPage = 'target-svelte.html';
    if (action === 'new-tab-stencil') targetPage = 'target-stencil.html';
    const base = import.meta.env.BASE_URL;
    const url = `${window.location.origin}${base}${targetPage}?context=${serialized}`;
    recordEvent(state.eventLog, 'open-new-tab', { url, context, target: targetPage });
    window.open(url, '_blank');
  }

  if (action === 'open-aftersales-calendar') {
    state.aftersales.currentStep = 2;
    openFlightCalendarModal(aftersalesContextForStep('aftersales-capacity-selection', integrationModes.modal, 'angular-workshop-capacity-target'));
  }

  if (action === 'open-aftersales-packages') {
    state.aftersales.currentStep = 3;
    openFlightOptionsModal(aftersalesContextForStep('aftersales-package-selection', integrationModes.modal, 'svelte-service-package-target'));
  }

  if (action === 'open-aftersales-extras') {
    state.aftersales.currentStep = 4;
    openFlightExtrasModal(aftersalesContextForStep('aftersales-extras-selection', integrationModes.modal, 'webcomponents-aftersales-extras-target'));
  }

  if (action === 'edit-aftersales-context') {
    state.aftersales.editContext = true;
    render();
  }

  if (action === 'finish-aftersales-context-edit') {
    state.aftersales.editContext = false;
    render();
  }

  if (action === 'reset-aftersales') {
    state.aftersales = {
      ...state.aftersales,
      currentStep: 1,
      editContext: false,
      selectedAppointment: null,
      selectedPackage: null,
      serviceExtras: null
    };
    state.activeContext = createAftersalesContext({
      sourceStep: 'aftersales-reset',
      integrationMode: integrationModes.dashboardLauncher
    });
    render();
  }

  if (action === 'open-flight-calendar') {
    openFlightCalendarModal(createFlightBookingContext({
      sourceStep: 'flight-date-selection',
      integrationMode: integrationModes.modal
    }));
  }

  if (action === 'open-flight-options') {
    openFlightOptionsModal(createFlightBookingContext({
      sourceStep: 'flight-option-selection',
      targetApp: 'svelte-flight-options-target',
      integrationMode: integrationModes.modal
    }));
  }

  if (action === 'open-flight-extras') {
    openFlightExtrasModal(createFlightBookingContext({
      sourceStep: 'flight-extras-selection',
      targetApp: 'stencil-flight-extras-target',
      integrationMode: integrationModes.modal
    }));
  }

  if (action === 'close-journey-modal') {
    closeJourneyModal();
  }

  if (action === 'select-shell-flight-option') {
    const option = flightOptions.find((item) => item.id === sourceElement?.dataset.optionId) || flightOptions[0];
    receiveRemotePayload({
      type: 'flight-option-transfer',
      from: 'react-shell-inline',
      targetApp: 'react-shell',
      note: `Flugoption direkt gewählt: ${option.label}`,
      flightOption: option,
      context: createFlightBookingContext({
        sourceStep: 'flight-option-selected-inline',
        selectedFlightOption: option
      })
    }, 'shell-inline-flight-option');
    render();
  }

  if (action === 'linked-launch') {
    state.modalContext = linkedLaunchContext();
    renderModal();
    modal.showModal();
    return;
  }

  if (action === 'modal') {
    state.modalContext = createContext({ sourceStep: 'modal-action', integrationMode: integrationModes.modal });
    renderModal();
    modal.showModal();
  }

  if (action === 'linked-form-submit') {
    const note = sourceElement?.querySelector('input[name="note"]')?.value.trim() || 'Keine Follow-up Note angegeben.';
    recordEvent(state.eventLog, 'target-form-submit', { type: 'target-saved-in-modal', note, context: linkedTransferPayload() });
    eventBridge.dispatch('onefe:follow-up-return', {
      note,
      sourceApp: 'case-follow-up-app',
      targetApp: 'react-shell',
      origin: 'angular-target'
    });
    modal.close();
    render();
  }

  if (action === 'navigation') {
    navigate(integrationModes.embeddedWorkspace, createContext({ sourceStep: 'shell-navigation', integrationMode: integrationModes.navigation }));
  }

  if (action === 'process-step') {
    navigate(integrationModes.integratedExperience, createAftersalesContext({ sourceStep: 'inline-process-step', integrationMode: integrationModes.processStep }));
  }

  if (action === 'emit-context') {
    eventBridge.dispatch('onefe:context-received', createContext({ sourceStep: 'header-custom-event', integrationMode: state.activeContext.integrationMode }));
  }

  if (action === 'toggle-color-mode') {
    state.colorMode = state.colorMode === 'dark' ? 'light' : 'dark';
    localStorage.setItem(COLOR_MODE_STORAGE_KEY, state.colorMode);
    applyColorMode(state.colorMode);
    render();
  }

  if (action === 'go-debug') {
    navigate('debug', state.activeContext);
  }

  if (action === 'close-modal') {
    modal.close();
    recordEvent(state.eventLog, 'native-event', { type: 'dialog-close' });
    render();
  }
}

document.addEventListener('submit', (event) => {
  const actionTarget = event.target.closest('[data-action]');
  if (actionTarget) {
    event.preventDefault();
    recordEvent(state.eventLog, 'native-event', { type: 'submit', action: actionTarget.dataset.action });
    handleAction(actionTarget.dataset.action, event.target);
  }
});

function canNavigateFlightStep(step) {
  if (step === 1) return true;
  if (step === 2) return true;
  if (step === 3) return Boolean(state.flightBooking.departureDate);
  if (step === 4) return Boolean(state.flightBooking.flightOption);
  if (step === 5) return Boolean(state.flightBooking.flightExtras);
  return false;
}

function navigateFlightStep(step) {
  if (!canNavigateFlightStep(step)) {
    recordEvent(state.eventLog, 'flight-step-navigation-blocked', {
      requestedStep: step,
      flightBooking: state.flightBooking
    });
    return;
  }

  if (step === 2) {
    openFlightCalendarModal(createFlightBookingContext({
      sourceStep: 'flight-date-selection-stepper',
      integrationMode: integrationModes.modal
    }));
    return;
  }

  state.flightBooking = {
    ...state.flightBooking,
    currentStep: step
  };
  recordEvent(state.eventLog, 'flight-step-navigation', { step });
  render();
}

document.addEventListener('click', (event) => {
  const actionTarget = event.target.closest('[data-action]');
  const navTarget = event.target.closest('[data-nav]');
  const moduleTarget = event.target.closest('[data-module]');
  const flightStepTarget = event.target.closest('[data-flight-step]');

  if (flightStepTarget) {
    navigateFlightStep(Number(flightStepTarget.dataset.flightStep));
    return;
  }

  if (actionTarget && actionTarget.tagName !== 'FORM') {
    recordEvent(state.eventLog, 'native-event', { type: 'click', action: actionTarget.dataset.action });
    handleAction(actionTarget.dataset.action, actionTarget);
  }

  if (navTarget) {
    let targetView = navTarget.dataset.nav;
    const groupDefinition = primaryViews.find((item) => item.id === targetView && item.children);
    if (groupDefinition) {
      targetView = groupDefinition.children[0].id;
    }
    if (targetView === 'aftersales-journey') {
      navigate(targetView, createAftersalesContext({ sourceStep: 'shell-nav', integrationMode: integrationModes.navigation }));
      return;
    }
    navigate(targetView, createContext({ sourceStep: 'shell-nav', integrationMode: integrationModes.navigation }));
  }

  if (moduleTarget) {
    state.embeddedModule = moduleTarget.dataset.module;
    recordEvent(state.eventLog, 'embedded-module-switch', { module: state.embeddedModule });
    render();
  }
});

function handleFlightFieldChange(event, shouldRender = true) {
  const field = getDataFieldElement(event, 'flightField');
  if (!field) return;

  const key = field.dataset.flightField;
  const rawValue = readFieldValue(field, event);
  const value = key === 'passengers'
    ? Math.max(1, Number(rawValue || 1))
    : rawValue;

  state.flightBooking = {
    ...state.flightBooking,
    [key]: value
  };
  state.activeContext = createFlightBookingContext();
  recordEvent(state.eventLog, 'flight-booking-update', { field: key, value });
  if (shouldRender) render();
}

function handleAftersalesFieldChange(event, shouldRender = true) {
  const field = getDataFieldElement(event, 'aftersalesField');
  if (!field) return;

  const key = field.dataset.aftersalesField;
  const rawValue = readFieldValue(field, event);
  const value = key === 'mileageKm'
    ? Math.max(0, Number(rawValue || 0))
    : rawValue;

  state.aftersales = {
    ...state.aftersales,
    [key]: value
  };
  state.activeContext = createAftersalesContext({
    sourceStep: 'aftersales-shell-update',
    [key]: value
  });
  recordEvent(state.eventLog, 'aftersales-context-update', { field: key, value });
  if (shouldRender) render();
}

function getDataFieldElement(event, datasetKey) {
  const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
  return path.find((node) => node?.dataset?.[datasetKey]) || event.target.closest?.(`[data-${datasetKey.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}]`) || null;
}

function readFieldValue(field, event) {
  return field.value
    ?? field.getAttribute?.('value')
    ?? event.detail?.value
    ?? event.target?.value
    ?? '';
}

document.addEventListener('change', (event) => {
  handleFlightFieldChange(event);
  handleAftersalesFieldChange(event);
});

document.addEventListener('input', (event) => {
  // Nur State aktualisieren, kein render() – verhindert Flackern/Cursor-Reset bei Texteingabe.
  // render() erfolgt beim 'change'- bzw. 'groupuiChange'-Event (Feld verlassen / Wert bestätigt).
  handleFlightFieldChange(event, false);
  handleAftersalesFieldChange(event, false);
});

document.addEventListener('groupuiChange', (event) => {
  handleFlightFieldChange(event);
  handleAftersalesFieldChange(event);
});

window.addEventListener('popstate', () => {
  state.activeView = readViewFromUrl();
  render();
});

render();

window.onefeTestHelpers = {
  setActiveView(view) {
    state.activeView = view;
    render();
  },
  getActiveView() {
    return state.activeView;
  },
  getState() {
    return state;
  },
  receivePayload(payload) {
    receiveRemotePayload(payload, 'test-helper');
    render();
  }
};

Promise.all(groupUiComponentTags.map((tagName) => customElements.whenDefined(tagName).catch(() => null)))
  .then(updateGroupUiRuntimeStatus);
updateGroupUiRuntimeStatus();
