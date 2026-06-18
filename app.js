import '@group-ui/group-ui/dist/group-ui/assets/themes/tokens.css';
import '@group-ui/group-ui-css-framework/dist/groupui.css';
import { defineCustomElements } from '@group-ui/group-ui/dist/loader/index.es2017.js';
import { createContext, integrationModes, serializeContext } from './packages/context-model/src/context.js';
import { demoCase, initialContexts, journeySteps, targetPictures } from './packages/demo-data/src/cases.js';
import { createContextEventBridge, createEventLog, createModalTrigger, createNavigationTrigger, recordEvent } from './packages/integration-layer/src/integration.js';
import { primaryViews } from './packages/ui-contracts/src/navigation.js?v=isolated-pages-1';
import './apps/remote-webcomponents-action/src/action-card.js';
import { renderVanillaResult } from './apps/remote-vanilla-result/src/result.js';

defineCustomElements();

const COLOR_MODE_STORAGE_KEY = 'onefe-color-mode';

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

const state = {
  activeView: 'overview',
  colorMode: currentColorMode(),
  activeContext: createContext(),
  eventLog: createEventLog(),
  modalContext: null,
  followUpNote: null,
  receivedTransfer: null,
  embeddedModule: 'case-details',
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

const flightBookingSteps = [
  { step: 1, title: 'Reise starten', app: 'React Shell', state: 'active' },
  { step: 2, title: 'Datum wählen', app: 'Angular Calendar', state: 'open' },
  { step: 3, title: 'Flugoption', app: 'Svelte Remote', state: 'open' },
  { step: 4, title: 'Extras', app: 'Web Components', state: 'open' },
  { step: 5, title: 'Zusammenfassung', app: 'React Shell', state: 'open' }
];

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

const flightOptionsTargetVersion = 'flight-options-6';
const flightExtrasTargetVersion = 'flight-extras-1';

const groupUiComponentTags = [
  'groupui-button',
  'groupui-card',
  'groupui-grid',
  'groupui-grid-row',
  'groupui-grid-col',
  'groupui-radio-group',
  'groupui-radio-button',
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
  {
    label: 'Web Components Loader',
    status: 'bundled'
  },
  {
    label: 'CSS Framework',
    status: 'bundled'
  },
  {
    label: 'Theme Tokens',
    status: 'bundled'
  }
];

const isolatedFlightBookingPages = {
  'flight-booking-angular': {
    eyebrow: 'Isolierte Einzelseite · Angular',
    title: 'Angular Kalender isoliert',
    description: 'Der Kalender läuft hier ohne übergebenen Journey-Kontext. Die Seite dient nur zur Ansicht der Angular-App.',
    target: 'calendar-target.html?v=isolated-angular-1',
    technology: 'Angular 20 + GroupUI Date Picker'
  },
  'flight-booking-svelte': {
    eyebrow: 'Isolierte Einzelseite · Svelte',
    title: 'Svelte Flugoptionen isoliert',
    description: 'Die Flugoptionen laufen hier ohne Shell-Kontext. Die Svelte-Seite nutzt ihre eigenen Demo-Werte und GroupUI Radio-Komponenten.',
    target: `target-svelte.html?v=${flightOptionsTargetVersion}`,
    technology: 'Svelte Remote + GroupUI Radio Group'
  },
  'flight-booking-react-target': {
    eyebrow: 'Isolierte Einzelseite · React',
    title: 'React Ziel-App isoliert',
    description: 'Die React-Zielseite wird ohne Kontextparameter geöffnet und zeigt ihr Fallback-Verhalten.',
    target: 'target-react.html',
    technology: 'React Target'
  },
  'flight-booking-webcomponents': {
    eyebrow: 'Isolierte Einzelseite · Web Components',
    title: 'Web-Components-Ziel isoliert',
    description: 'Die Web-Components-Zielseite läuft ohne Journey-Kontext und ist als einzelner Technologiebaustein sichtbar.',
    target: `target-stencil.html?v=${flightExtrasTargetVersion}`,
    technology: 'Native Web Component · Stencil-style'
  }
};

const app = document.querySelector('#app');
const modal = document.querySelector('#process-modal');
const modalBody = document.querySelector('#process-modal-body');
const calendarModal = document.querySelector('#calendar-modal');
const calendarModalBody = document.querySelector('#calendar-modal-body');
const eventBridge = createContextEventBridge(state.eventLog);

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
  render();
}, state.eventLog);

function receiveRemotePayload(payload, eventType) {
  state.followUpNote = payload.note;
  state.receivedTransfer = payload;

  if (payload.type === 'appointment-transfer' && payload.appointment) {
    state.flightBooking = {
      ...state.flightBooking,
      departureDate: payload.appointment.date,
      selectedDateTitle: payload.appointment.title,
      currentStep: 3
    };
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

const openModal = createModalTrigger((context) => {
  state.modalContext = createContext(context);
  renderModal();
  modal.showModal();
}, state.eventLog);

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
  if (event.data && (event.data.type === 'follow-up-return' || event.data.type === 'appointment-transfer' || event.data.type === 'flight-option-transfer' || event.data.type === 'flight-extras-transfer')) {
    receiveRemotePayload(event.data, 'postmessage-received');
    if ((event.data.type === 'appointment-transfer' || event.data.type === 'flight-option-transfer' || event.data.type === 'flight-extras-transfer') && calendarModal.open) {
      calendarModal.close();
      calendarModalBody.innerHTML = '';
    }
    render();
  }
});

function groupuiCard(content, className = '') {
  return `<groupui-card padding="24px" class="${className}">${content}</groupui-card>`;
}

function contextSummaryRows(context) {
  return [
    ['Case', context.caseId],
    ['Quelle', context.sourceApp],
    ['Schritt', context.sourceStep],
    ['Integration', context.integrationMode]
  ];
}

function contextPanel(context = state.activeContext) {
  return groupuiCard(`
      <groupui-tag>Aktueller Kontext</groupui-tag>
      <groupui-headline heading="h3">Shared Context Payload</groupui-headline>
      <groupui-text>Der gleiche Payload wird fuer Launchpad, Modal, Navigation, Embedded Workspace und Integrated Experience verwendet.</groupui-text>
      <div class="groupui-info-list">
        ${contextSummaryRows(context).map(([label, value]) => `
          <div>
            <groupui-text weight="bold">${label}</groupui-text>
            <groupui-text>${value || 'n/a'}</groupui-text>
          </div>
        `).join('')}
      </div>
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
    <groupui-headline heading="h3">Echte GroupUI-Nutzung</groupui-headline>
    <groupui-text>${registeredCount}/${components.length} Web Components sind im Browser registriert. Loader, CSS Framework und Theme Tokens sind im Vite-Build gebündelt.</groupui-text>
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

function previewContextUrl(context) {
  return `${window.location.origin}${window.location.pathname}?context=${serializeContext(context)}`;
}

function isNavigationSectionActive(item) {
  return state.activeView === item.id || item.children?.some((child) => child.id === state.activeView);
}

function isTopNavigationActive(viewId) {
  if (viewId === 'flight-booking') {
    const flightBookingView = primaryViews.find((item) => item.id === viewId);
    return isNavigationSectionActive(flightBookingView);
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
      <groupui-global-top-navigation breakpoint="s" manual-mode aria-label="Hauptnavigation">
        <groupui-brand-logo type="application">One Frontend Demonstrator</groupui-brand-logo>
        <groupui-global-top-navigation-mobile-utility-items>
          <groupui-burger-menu a11y-label-open-button="Navigation öffnen" a11y-label-close-button="Navigation schließen">
            <groupui-burger-menu-items>
              <groupui-burger-menu-item data-nav="overview" ${isTopNavigationActive('overview') ? 'active' : ''}>
                <div slot="label">Overview</div>
              </groupui-burger-menu-item>
              <groupui-burger-menu-item data-nav="flight-booking" ${isTopNavigationActive('flight-booking') ? 'active' : ''}>
                <div slot="label">Flight Booking</div>
              </groupui-burger-menu-item>
              <groupui-burger-menu-item data-nav="comparison" ${isTopNavigationActive('comparison') ? 'active' : ''}>
                <div slot="label">Zielbilder</div>
              </groupui-burger-menu-item>
              <groupui-burger-menu-item data-nav="patterns" ${isTopNavigationActive('patterns') ? 'active' : ''}>
                <div slot="label">Integrationsmuster</div>
              </groupui-burger-menu-item>
            </groupui-burger-menu-items>
            <groupui-burger-menu-utility-items>
              <groupui-burger-menu-utility-item icon="${colorModeIconName}" icon-source="${colorModeIcon}" a11y-label-icon="${colorModeLabel}" data-action="toggle-color-mode">
                <div slot="label">${colorModeLabel}</div>
              </groupui-burger-menu-utility-item>
              <groupui-burger-menu-utility-item icon="clock-24" data-action="emit-context">
                <div slot="label">Custom Event senden</div>
              </groupui-burger-menu-utility-item>
              <groupui-burger-menu-utility-item icon="rocket-24" data-nav="patterns">
                <div slot="label">Integrationsmuster anzeigen</div>
              </groupui-burger-menu-utility-item>
              <groupui-burger-menu-utility-item icon="user-24" data-action="go-debug">
                <div slot="label">Context ansehen</div>
              </groupui-burger-menu-utility-item>
            </groupui-burger-menu-utility-items>
          </groupui-burger-menu>
        </groupui-global-top-navigation-mobile-utility-items>
        <groupui-global-top-navigation-items>
          <groupui-global-top-navigation-item data-nav="overview" ${isTopNavigationActive('overview') ? 'active' : ''}>Overview</groupui-global-top-navigation-item>
          <groupui-global-top-navigation-item data-nav="flight-booking" ${isTopNavigationActive('flight-booking') ? 'active' : ''}>Flight Booking</groupui-global-top-navigation-item>
          <groupui-global-top-navigation-item data-nav="comparison" ${isTopNavigationActive('comparison') ? 'active' : ''}>Zielbilder</groupui-global-top-navigation-item>
          <groupui-global-top-navigation-item data-nav="patterns" ${isTopNavigationActive('patterns') ? 'active' : ''}>Integrationsmuster</groupui-global-top-navigation-item>
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
  const briefingItems = [
    {
      tag: 'Nutzerperspektive',
      title: 'Journey, Interaktion, Ergebnis',
      rows: [
        ['Journey', demoCase.title],
        ['Interaktion', 'Link, Modal, Navigation und Inline-Prozess'],
        ['Ergebnis', 'sichtbarer Remote-Status und Context-Weitergabe']
      ]
    },
    {
      tag: 'Integrationsperspektive',
      title: 'Link / Embedded / Integrated',
      rows: [
        ['Link / Launchpad', 'neue Ziel-App mit Kontext'],
        ['Embedded', 'Module bleiben in persistenter Shell'],
        ['Integrated', 'Remote-Grenzen werden nicht inszeniert'],
        ['Muster', 'Modal, Inline, Navigation und Prozessschritt']
      ]
    },
    {
      tag: 'Technologieperspektive',
      title: 'Host vs. Remote',
      rows: [
        ['Host', 'Shell, Navigation, Modal und Event Bridge'],
        ['Remote', 'Angular-Slot, Web Component und Vanilla Result'],
        ['Technologien', 'React / Angular / Web Component / Vanilla']
      ]
    }
  ];

  return `
    <section class="view overview-view">
      <groupui-grid type="fluid" margin-type="custom" margin="0" gutter="24px" class="overview-hero-grid" aria-label="Intro und Kennzahlen">
        <groupui-grid-row>
          <groupui-grid-col xs="12" s="12" m="6" l="4" xl="4" xxl="4">
            <groupui-card padding="32px" class="overview-hero-main">
              <div class="hero-copy">
                <groupui-tag>Grundlagen</groupui-tag>
                <groupui-headline heading="h1">Die Integration ist massgeschneidert auf die Bedürfnisse der Nutzer.</groupui-headline>
                <groupui-text class="hero-lead">Der Demonstrator zeigt, wie eine nahtlose fachliche Journey über unterschiedliche Integrationsansätze umgesetzt wird - mit konsistentem Kontext und diversen Frontend-Technologien.</groupui-text>
              </div>
            </groupui-card>
          </groupui-grid-col>

          <groupui-grid-col xs="12" s="12" m="6" l="4" xl="4" xxl="4">
            <groupui-card padding="32px" class="overview-hero-main">
              <div class="hero-copy">
                <groupui-tag>ONE Frontend</groupui-tag>
                <groupui-headline heading="h3">Funktionen am richtigen Touchpoint</groupui-headline>
                <groupui-text weight="bold" class="hero-quote">ONE Frontend bringt die richtigen Funktionselemente genau an den prozessualen Touchpoint, an dem sie benötigt werden - nahtlos, kontextbezogen und ohne wahrnehmbaren Systembruch.</groupui-text>
                <div class="hero-actions">
                  <groupui-button size="s" fullwidth data-action="linked-in-shell">Linked Integration Demo</groupui-button>
                  <groupui-button size="s" fullwidth variant="secondary" data-nav="flight-booking">Flight Booking starten</groupui-button>
                  <groupui-button size="s" fullwidth variant="secondary" data-nav="comparison">Zielbilder vergleichen</groupui-button>
                  <groupui-button size="s" fullwidth variant="secondary" data-nav="debug">Event Log ansehen</groupui-button>
                </div>
              </div>
            </groupui-card>
          </groupui-grid-col>

          <groupui-grid-col xs="12" s="12" m="12" l="4" xl="4" xxl="4">
            <groupui-card padding="32px" class="overview-metrics-card">
              <groupui-tag>Basis Info</groupui-tag>
              <groupui-headline heading="h3">Demo auf einen Blick</groupui-headline>
              <div class="hero-metrics" aria-label="Briefing-Kennzahlen">
                <div>
                  <groupui-text weight="bold" class="metric-value">3</groupui-text>
                  <groupui-text size="caption">Blickwinkel auf Integration</groupui-text>
                  <div class="metric-list" aria-label="Blickwinkel auf Integration">
                    <div class="metric-list-row"><groupui-text size="caption" weight="bold">1.</groupui-text><groupui-text size="caption">Fachliche Journey</groupui-text></div>
                    <div class="metric-list-row"><groupui-text size="caption" weight="bold">2.</groupui-text><groupui-text size="caption">Interaktionsform</groupui-text></div>
                    <div class="metric-list-row"><groupui-text size="caption" weight="bold">3.</groupui-text><groupui-text size="caption">Technologische Umsetzung</groupui-text></div>
                  </div>
                </div>
                <div>
                  <groupui-text weight="bold" class="metric-value">3</groupui-text>
                  <groupui-text size="caption">Integrationsbilder</groupui-text>
                  <div class="metric-list" aria-label="Integrationsbilder">
                    <div class="metric-list-row"><groupui-text size="caption" weight="bold">1.</groupui-text><groupui-text size="caption">Launch / Navigation</groupui-text></div>
                    <div class="metric-list-row"><groupui-text size="caption" weight="bold">2.</groupui-text><groupui-text size="caption">Embedded / Modal</groupui-text></div>
                    <div class="metric-list-row"><groupui-text size="caption" weight="bold">3.</groupui-text><groupui-text size="caption">Integrated / Inline</groupui-text></div>
                  </div>
                </div>
                <div><groupui-text weight="bold" class="metric-value">1</groupui-text><groupui-text size="caption">Context Payload</groupui-text></div>
              </div>
            </groupui-card>
          </groupui-grid-col>
        </groupui-grid-row>
      </groupui-grid>

      <groupui-grid type="fluid" margin-type="custom" margin="0" gutter="24px" class="briefing-grid" aria-label="Was der Demonstrator sichtbar machen muss">
        <groupui-grid-row>
          ${briefingItems.map((item) => `
            <groupui-grid-col xs="12" s="12" m="6" l="4" xl="4" xxl="4">
              ${groupuiCard(`
                <groupui-tag>${item.tag}</groupui-tag>
                <groupui-headline heading="h3">${item.title}</groupui-headline>
                <div class="groupui-info-list">
                  ${item.rows.map(([label, value]) => `
                    <div>
                      <groupui-text weight="bold">${label}</groupui-text>
                      <groupui-text>${value}</groupui-text>
                    </div>
                  `).join('')}
                </div>
              `, 'overview-grid-card')}
            </groupui-grid-col>
          `).join('')}
        </groupui-grid-row>
      </groupui-grid>

      <groupui-grid type="fluid" margin-type="custom" margin="0" gutter="24px" class="overview-tile-grid" aria-label="Journey und Architektur">
        <groupui-grid-row>
          <groupui-grid-col xs="12" s="12" m="6" l="4" xl="4" xxl="4">
            ${groupuiCard(`
              <groupui-tag>Dashboard-Kachel</groupui-tag>
              <groupui-headline heading="h3">Case ${demoCase.id}</groupui-headline>
              <groupui-text>${demoCase.title}</groupui-text>
              <div class="groupui-info-list">
                <div><groupui-text weight="bold">Vehicle</groupui-text><groupui-text>${demoCase.vehicle}</groupui-text></div>
                <div><groupui-text weight="bold">Customer</groupui-text><groupui-text>${demoCase.customer}</groupui-text></div>
                <div><groupui-text weight="bold">Status</groupui-text><groupui-text>${demoCase.status}</groupui-text></div>
              </div>
              <groupui-button data-action="launchpad">Ziel-App mit Kontext oeffnen</groupui-button>
            `, 'overview-tile-card')}
          </groupui-grid-col>
          <groupui-grid-col xs="12" s="12" m="6" l="4" xl="4" xxl="4">
            ${groupuiCard(`
              <groupui-tag>Journey</groupui-tag>
              <groupui-headline heading="h3">Wiederverwendbarer Business Flow</groupui-headline>
              <div class="groupui-step-list">
                ${journeySteps.map((step, index) => `
                  <div>
                    <groupui-tag>${index + 1}</groupui-tag>
                    <groupui-text>${step}</groupui-text>
                  </div>
                `).join('')}
              </div>
              <groupui-button variant="secondary" data-nav="comparison">Zielbilder vergleichen</groupui-button>
            `, 'overview-tile-card')}
          </groupui-grid-col>
          <groupui-grid-col xs="12" s="12" m="6" l="4" xl="4" xxl="4">
            ${groupuiCard(`
              <groupui-tag>Architektur</groupui-tag>
              <groupui-headline heading="h3">Shared Context + Event Bridge</groupui-headline>
              <groupui-text>Context Passing, Native Clicks und Custom Events werden sichtbar geloggt.</groupui-text>
              <groupui-button variant="secondary" data-nav="debug">Debug View oeffnen</groupui-button>
            `, 'overview-tile-card')}
          </groupui-grid-col>
          <groupui-grid-col xs="12" s="12" m="12" l="12" xl="12" xxl="12">
            ${groupuiCard(`
              <groupui-tag>Gemeinsamer Context</groupui-tag>
              <groupui-headline heading="h3">Ein Payload, mehrere Integrationsformen</groupui-headline>
              <groupui-text>Derselbe Payload wird fuer Launchpad, Modal, Navigation, Embedded Workspace und Integrated Experience verwendet.</groupui-text>
              <div class="groupui-info-list">
                ${contextSummaryRows(state.activeContext).map(([label, value]) => `
                  <div>
                    <groupui-text weight="bold">${label}</groupui-text>
                    <groupui-text>${value || 'n/a'}</groupui-text>
                  </div>
                `).join('')}
              </div>
            `, 'overview-tile-card')}
          </groupui-grid-col>
          <groupui-grid-col xs="12" s="12" m="12" l="12" xl="12" xxl="12">
            ${renderGroupUiRuntimeCard()}
          </groupui-grid-col>
        </groupui-grid-row>
      </groupui-grid>
      ${contextPanel()}
    </section>
  `;
}

function renderComparison() {
  return `
    <section class="view">
      <div class="view-heading">
        <groupui-headline heading="h2">Vergleich der Zielbilder</groupui-headline>
        <p>Dokumentierte Fakten sind von Demo-Entscheidungen getrennt.</p>
      </div>
      <div class="comparison-grid">
        ${targetPictures.map((picture) => groupuiCard(`
          <groupui-tag>${picture.id}</groupui-tag>
          <groupui-headline heading="h3">${picture.title}</groupui-headline>
          <p><strong>Dokumentierter Fakt:</strong> ${picture.fact}</p>
          <p><strong>Architekturentscheidung:</strong> ${picture.decision}</p>
          <groupui-button variant="secondary" data-nav="${picture.id}">Demo anzeigen</groupui-button>
        `)).join('')}
      </div>
    </section>
  `;
}

function createFlightBookingContext(overrides = {}) {
  const booking = state.flightBooking;

  return createContext({
    journeyType: 'flight-booking',
    sourceApp: 'react-shell',
    sourceStep: 'flight-booking-step-1',
    targetApp: 'angular-calendar-target',
    integrationMode: 'stepper-shell',
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
        <groupui-tag>React Shell Stepper</groupui-tag>
        <groupui-headline heading="h2">Flugbuchung Hannover → Barcelona</groupui-headline>
        <groupui-text>Schritt 1 startet in der React Shell. Danach wird der Kontext an den Angular Kalender übergeben.</groupui-text>
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
          ${flightBookingSteps.map((item) => `
            <span><strong>${item.step}</strong>${item.app}</span>
          `).join('')}
        </div>
      </section>

      ${state.flightBooking.departureDate ? groupuiCard(`
        <groupui-tag>Von Angular zurückgegeben</groupui-tag>
        <groupui-headline heading="h3">Reisedatum übernommen</groupui-headline>
        <groupui-text>Der Angular Kalender hat den Termin an die React Shell zurückgegeben.</groupui-text>
        <dl class="compact-list">
          <div><dt>Datum</dt><dd>${state.flightBooking.departureDate}</dd></div>
          <div><dt>Auswahl</dt><dd>${state.flightBooking.selectedDateTitle}</dd></div>
          <div><dt>Quelle</dt><dd>${state.receivedTransfer?.from || 'angular-calendar-target'}</dd></div>
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
        <groupui-text>Die Svelte-App läuft als iframe innerhalb der Shell. Anzeige, GroupUI Radio-Auswahl und Übernehmen-Button kommen aus Svelte.</groupui-text>
        <iframe
          class="embedded-svelte-frame"
          title="Svelte Flight Options Embedded"
          src="${embeddedFlightOptionsUrl}"
        ></iframe>
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
              <groupui-button type="button" data-action="select-shell-flight-option" data-option-id="${option.id}">
                Direkt wählen
              </groupui-button>
            </groupui-card>
          `).join('')}
        </div>
      `, 'shell-flight-options-card') : ''}

      ${state.flightBooking.flightOption ? groupuiCard(`
        <groupui-tag>${flightOptionSourceLabel}</groupui-tag>
        <groupui-headline heading="h3">Flugoption übernommen</groupui-headline>
        <groupui-text>${flightOptionSourceText}</groupui-text>
        <dl class="compact-list">
          <div><dt>Option</dt><dd>${state.flightBooking.flightOption.label}</dd></div>
          <div><dt>Airline</dt><dd>${state.flightBooking.flightOption.carrier}</dd></div>
          <div><dt>Preis</dt><dd>${state.flightBooking.flightOption.price} EUR</dd></div>
          <div><dt>Quelle</dt><dd>${state.receivedTransfer?.from || 'svelte-flight-options-target'}</dd></div>
        </dl>
        <groupui-button variant="secondary" type="button" data-action="open-flight-options">Flugoption ändern</groupui-button>
      `, 'flight-option-return-card') : ''}

      ${state.flightBooking.flightOption && (!state.flightBooking.flightExtras || state.flightBooking.currentStep === 4) ? groupuiCard(`
        <groupui-tag>Schritt 4 · Native Web Component</groupui-tag>
        <groupui-headline heading="h3">Reise-Extras auswählen</groupui-headline>
        <groupui-text>Die Extras werden in einer eigenständigen Web-Components-Ziel-App bedient. Die React Shell bettet sie als iframe ein.</groupui-text>
        <iframe
          class="embedded-stencil-frame"
          title="Web Component Flight Extras Embedded"
          src="${embeddedFlightExtrasUrl}"
        ></iframe>
      `, 'embedded-flight-extras-card') : ''}

      ${state.flightBooking.flightExtras && state.flightBooking.currentStep !== 4 ? groupuiCard(`
        <groupui-tag>Von Web Components zurückgegeben</groupui-tag>
        <groupui-headline heading="h3">Extras übernommen</groupui-headline>
        <groupui-text>Die Web-Component-App hat die Zusatzleistungen an die React Shell zurückgegeben.</groupui-text>
        <dl class="compact-list">
          <div><dt>Sitzplatz</dt><dd>${state.flightBooking.flightExtras.seat}</dd></div>
          <div><dt>Gepäck</dt><dd>${state.flightBooking.flightExtras.baggage}</dd></div>
          <div><dt>Priority</dt><dd>${state.flightBooking.flightExtras.priorityBoarding ? 'Ja' : 'Nein'}</dd></div>
          <div><dt>CO2-Ausgleich</dt><dd>${state.flightBooking.flightExtras.carbonOffset ? 'Ja' : 'Nein'}</dd></div>
          <div><dt>Preis Extras</dt><dd>${state.flightBooking.flightExtras.totalPrice} EUR</dd></div>
          <div><dt>Quelle</dt><dd>${state.receivedTransfer?.from || 'stencil-flight-extras-target'}</dd></div>
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
          <div>
            <span>Von</span>
            <strong>${state.flightBooking.origin}</strong>
          </div>
          <div class="flight-summary-route-line" aria-hidden="true"></div>
          <div>
            <span>Nach</span>
            <strong>${state.flightBooking.destination}</strong>
          </div>
        </div>

        <div class="flight-summary-sections">
          <section>
            <groupui-tag>Angular</groupui-tag>
            <h4>Reisedatum</h4>
            <dl class="compact-list">
              <div><dt>Datum</dt><dd>${state.flightBooking.departureDate}</dd></div>
              <div><dt>Auswahl</dt><dd>${state.flightBooking.selectedDateTitle}</dd></div>
            </dl>
          </section>

          <section>
            <groupui-tag>Svelte</groupui-tag>
            <h4>Flugoption</h4>
            <dl class="compact-list">
              <div><dt>Option</dt><dd>${state.flightBooking.flightOption.label}</dd></div>
              <div><dt>Airline</dt><dd>${state.flightBooking.flightOption.carrier}</dd></div>
              <div><dt>Zeit</dt><dd>${state.flightBooking.flightOption.departure}-${state.flightBooking.flightOption.arrival}</dd></div>
              <div><dt>Preis</dt><dd>${state.flightBooking.flightOption.price} EUR</dd></div>
            </dl>
          </section>

          <section>
            <groupui-tag>Web Components</groupui-tag>
            <h4>Reise-Extras</h4>
            <dl class="compact-list">
              <div><dt>Sitzplatz</dt><dd>${state.flightBooking.flightExtras.seat}</dd></div>
              <div><dt>Gepäck</dt><dd>${state.flightBooking.flightExtras.baggage}</dd></div>
              <div><dt>Priority</dt><dd>${state.flightBooking.flightExtras.priorityBoarding ? 'Ja' : 'Nein'}</dd></div>
              <div><dt>CO2</dt><dd>${state.flightBooking.flightExtras.carbonOffset ? 'Ja' : 'Nein'}</dd></div>
            </dl>
          </section>

          <section class="flight-summary-costs">
            <groupui-tag>React Shell</groupui-tag>
            <h4>Kostenübersicht</h4>
            <dl class="compact-list">
              <div><dt>Flug</dt><dd>${state.flightBooking.flightOption.price} EUR</dd></div>
              <div><dt>Extras</dt><dd>${state.flightBooking.flightExtras.totalPrice} EUR</dd></div>
              <div class="flight-summary-total"><dt>Gesamt</dt><dd>${state.flightBooking.flightOption.price + state.flightBooking.flightExtras.totalPrice} EUR</dd></div>
            </dl>
          </section>
        </div>

        <div class="flight-summary-actions">
          <groupui-button variant="secondary" type="button" data-flight-step="2">Datum ändern</groupui-button>
          <groupui-button variant="secondary" type="button" data-flight-step="3">Flug ändern</groupui-button>
          <groupui-button variant="secondary" type="button" data-flight-step="4">Extras ändern</groupui-button>
        </div>
      `, 'flight-summary-card') : ''}

      <div class="flight-booking-grid">
        ${groupuiCard(`
          <groupui-tag>Schritt 1 · React Shell</groupui-tag>
          <groupui-headline heading="h3">Reisedaten festlegen</groupui-headline>
          <groupui-text>Die Shell erzeugt den initialen Journey-Kontext für die späteren Remote-Schritte.</groupui-text>

          <form class="flight-form">
            <label>
              <span>Von</span>
              <input data-flight-field="origin" value="${state.flightBooking.origin}" />
            </label>
            <label>
              <span>Nach</span>
              <input data-flight-field="destination" value="${state.flightBooking.destination}" />
            </label>
            <label>
              <span>Reiseart</span>
              <select data-flight-field="tripType">
                <option value="one-way" ${state.flightBooking.tripType === 'one-way' ? 'selected' : ''}>One-way</option>
                <option value="return" ${state.flightBooking.tripType === 'return' ? 'selected' : ''}>Return</option>
              </select>
            </label>
            <label>
              <span>Reisende</span>
              <input type="number" min="1" max="9" data-flight-field="passengers" value="${state.flightBooking.passengers}" />
            </label>
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
          <groupui-tag>Live Payload</groupui-tag>
          <groupui-headline heading="h3">Kontext aus Schritt 1</groupui-headline>
          <groupui-text>Dieser Payload wird im nächsten Schritt an die Angular Calendar App übergeben.</groupui-text>
          <pre class="context-snippet">${JSON.stringify(context, null, 2)}</pre>
        `)}
      </div>
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
        <groupui-text>Diese Seite wird ohne <code>?context=...</code> geladen. Sie ist nur als isolierte Technologieansicht gedacht.</groupui-text>
        <iframe
          class="isolated-app-frame"
          title="${page.title}"
          src="${page.target}"
        ></iframe>
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
  const proofSnippet = `// app.js\nfunction linkedLaunchContext() {\n  return createContext({\n    ...state.activeContext,\n    sourceApp: 'react-shell',\n    targetApp: 'case-follow-up-app',\n    sourceStep: 'dashboard-follow-up-action',\n    integrationMode: integrationModes.linkedLaunchpad\n  });\n}`;

  return `
    <section class="view linked-page">
      <section class="linked-hero">
        <div>
          <groupui-tag>Linked Integration</groupui-tag>
          <groupui-headline heading="h1">Linked Integration</groupui-headline>
          <p class="hero-lead">Loose coupling through explicit system handover.</p>
        </div>
        <div class="linked-system-strip" aria-label="System handover">
          <div class="system-badge system-badge-host"><span>Host</span><strong>React Shell</strong></div>
          <div class="system-arrow" aria-hidden="true">→</div>
          <div class="system-badge system-badge-target"><span>Target</span><strong>Angular App</strong></div>
        </div>
      </section>

      <section class="linked-journey" aria-label="Customer journey">
        <div class="journey-card journey-card-active">
          <span>Step 1</span>
          <strong>Dashboard with a case</strong>
          <p>The host shows the case and offers a follow-up action.</p>
        </div>
        <div class="journey-card">
          <span>Step 2</span>
          <strong>Explicit launch</strong>
          <p>The button hands over serialized context to another system.</p>
        </div>
        <div class="journey-card">
          <span>Step 3</span>
          <strong>Target system opened</strong>
          <p>The Angular app receives the context; the target is not embedded.</p>
        </div>
      </section>

      <div class="linked-dashboard">
        <div class="system-card system-card-host">
          <groupui-tag>Host</groupui-tag>
          <div class="system-branding">
            <div class="logo">
              <img src="./public/React.png" alt="React Logo" />
            </div>
            <div>
              <groupui-headline heading="h3">React Shell Dashboard</groupui-headline>
              <groupui-text weight="bold">React Shell</groupui-text>
            </div>
          </div>
          <groupui-text>Case ${demoCase.id} is visible in the host application.</groupui-text>
          <dl class="compact-list">
            <div><dt>Customer</dt><dd>${demoCase.customer}</dd></div>
            <div><dt>Vehicle</dt><dd>${demoCase.vehicle}</dd></div>
            <div><dt>Status</dt><dd>${demoCase.status}</dd></div>
          </dl>
          ${state.followUpNote ? `
            <div class="returned-note">
              <groupui-text weight="bold">React Shell received:</groupui-text>
              <p>${state.followUpNote}</p>
              ${state.receivedTransfer?.appointment ? `
                <pre>${JSON.stringify(state.receivedTransfer, null, 2)}</pre>
              ` : ''}
            </div>
          ` : `
            <groupui-text>Die React Shell wartet auf eine Follow-up Note aus der Angular Target App.</groupui-text>
          `}
          <groupui-button type="button" data-action="linked-launch">Edit follow-up step</groupui-button>
        </div>

        <div class="system-boundary" aria-hidden="true">
          <span>System boundary</span>
        </div>

        <div class="system-card system-card-target">
          <groupui-tag>Target</groupui-tag>
          <div class="system-branding">
            <div class="logo">
              <img src="./public/Angular.png" alt="Angular Logo" />
            </div>
            <div>
              <groupui-headline heading="h3">Angular App</groupui-headline>
              <groupui-text weight="bold">Angular Target App</groupui-text>
            </div>
          </div>
          <groupui-text>The target is launched explicitly. It is not embedded in the React shell.</groupui-text>
          <div class="target-placeholder">
            <strong>Case Follow-Up App</strong>
            <span>Opened only after context handover</span>
          </div>
        </div>
      </div>

      <section class="context-panel linked-context-panel" aria-label="Transfer payload">
        <div>
          <groupui-text weight="bold">Transfer payload</groupui-text>
          <p>Der vollständige App-Kontext wird innerhalb der React Shell an die Linked Integration übergeben.</p>
        </div>
        <pre>${JSON.stringify(transferPayload, null, 2)}</pre>
      </section>

      <section class="proof-panel" aria-label="Proof of React and Angular apps">
        <groupui-headline heading="h4">Proof: React & Angular</groupui-headline>
        <groupui-text>Dieser Kontext stammt direkt aus dem React Shell-Code und zeigt die klare Host-/Target-Beziehung.</groupui-text>
        <pre class="code-proof">${proofSnippet}</pre>
      </section>
    </section>
  `;
}

function renderEmbeddedWorkspace() {
  const context = createContext(initialContexts.embedded);
  const moduleContent = state.embeddedModule === 'case-details'
    ? renderCaseRemote(context)
    : `<onefe-action-remote context='${JSON.stringify(context)}'></onefe-action-remote>`;

  return `
    <section class="view workspace-view">
      <div class="view-heading">
        <groupui-tag>Embedded Workspace</groupui-tag>
        <groupui-headline heading="h2">Persistente Shell mit Navigation</groupui-headline>
        <p>Die Shell bleibt sichtbar, waehrend eingebettete Module wechseln.</p>
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
  const context = createContext(initialContexts.integrated);

  return `
    <section class="view">
      <div class="view-heading">
        <groupui-tag>Integrated Experience</groupui-tag>
        <groupui-headline heading="h2">Nahtlose End-to-End Journey</groupui-headline>
        <p><strong>Dokumentiert:</strong> API-getriebene End-to-End Experience. <strong>Demo-Entscheidung:</strong> Remote-Grenzen werden als technische Herkunft gezeigt, aber nicht als App-Sprung inszeniert.</p>
      </div>
      <div class="process-strip">
        ${journeySteps.map((step, index) => `
          <div class="process-step ${index === 4 ? 'highlight' : ''}">
            <span>${index + 1}</span>
            <strong>${step}</strong>
          </div>
        `).join('')}
      </div>
      <div class="integrated-flow">
        ${renderCaseRemote(context)}
        <onefe-action-remote context='${JSON.stringify(context)}'></onefe-action-remote>
        ${renderVanillaResult(context)}
      </div>
      ${contextPanel(context)}
    </section>
  `;
}

function renderPatterns() {
  return `
    <section class="view">
      <div class="view-heading">
        <groupui-headline heading="h2">Integrationsmuster extra</groupui-headline>
        <p>Alle Muster nutzen dasselbe Context Model und werden im Event Log sichtbar.</p>
      </div>
      <div class="pattern-grid">
        ${patternCard('New Tab / Window', 'Kontext wird in eine URL serialisiert.', 'new-tab')}
        ${patternCard('Modal / Dialog', 'Ein Prozessschritt oeffnet eine Ziel-Funktion im Dialog.', 'modal')}
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
        <onefe-action-remote context='${JSON.stringify(createContext(initialContexts.integrated))}'></onefe-action-remote>
      </div>
    </section>
  `;
}

function patternCard(title, description, action) {
  return groupuiCard(`
    <groupui-headline heading="h3">${title}</groupui-headline>
    <groupui-text>${description}</groupui-text>
    <groupui-button variant="secondary" data-action="${action}">Muster ausfuehren</groupui-button>
  `);
}

function renderDebug() {
  return `
    <section class="view debug-view">
      <div class="view-heading">
        <groupui-headline heading="h2">Architektur / Debug / Context</groupui-headline>
        <p>Dokumentierte Event-Grundlage: Native Events und Custom Events werden unterschieden. Die Bridge hier ist eine Architekturentscheidung.</p>
      </div>
      <div class="debug-grid">
        ${contextPanel()}
        ${groupuiCard(`
          <groupui-headline heading="h3">Event Log</groupui-headline>
          <div class="event-log">
            ${state.eventLog.length ? state.eventLog.map((entry) => `
              <article>
                <strong>${entry.time} - ${entry.type}</strong>
                <pre>${JSON.stringify(entry.detail, null, 2)}</pre>
              </article>
            `).join('') : '<p>Noch keine Events.</p>'}
          </div>
        `)}
        ${groupuiCard(`
          <groupui-headline heading="h3">Micro-Frontend Versionsregel</groupui-headline>
          <p>Custom Elements koennen pro Tag-Namen nur einmal registriert werden. Unterschiedliche Major-Versionen werden im ersten Prototyp nicht parallel genutzt.</p>
          <p>Vorsorge: Das Demo-Custom-Element prueft vor Registrierung <code>customElements.get(...)</code>.</p>
        `)}
        ${renderGroupUiRuntimeCard()}
      </div>
    </section>
  `;
}

function renderCaseRemote(context) {
  return `
    <div class="remote remote-angular">
      <groupui-text weight="bold">Remote A: Angular Case Zielstruktur</groupui-text>
      <p>Case Details fuer ${demoCase.id}. Im ersten Prototyp als Host-gerenderter Remote-Slot dargestellt.</p>
      <dl class="compact-list">
        <div><dt>Next action</dt><dd>${demoCase.nextAction}</dd></div>
        <div><dt>Integration</dt><dd>${context.integrationMode}</dd></div>
      </dl>
      <groupui-button data-action="modal">Folgeschritt im Modal bearbeiten</groupui-button>
    </div>
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
        <div class="launch-detail-row">
          <span>Application</span>
          <strong>Case Follow-Up App</strong>
        </div>
        <div class="launch-detail-row">
          <span>Technology</span>
          <strong>Angular</strong>
        </div>
        <div class="launch-detail-row">
          <span>Integration type</span>
          <strong>Linked Launchpad</strong>
        </div>
        <div class="launch-detail-row">
          <span>Transport</span>
          <strong>URL / serialized context</strong>
        </div>
      </div>

      <div class="modal-system-strip" aria-label="Host and target">
        <div class="system-badge system-badge-host">
          <span>Host</span>
          <strong>React Shell</strong>
          <div class="logo"><img src="./public/React.png" alt="React Logo" /></div>
        </div>
        <div class="system-arrow" aria-hidden="true">→</div>
        <div class="system-badge system-badge-target">
          <span>Target</span>
          <strong>Angular App</strong>
          <div class="logo"><img src="./public/Angular.png" alt="Angular Logo" /></div>
        </div>
      </div>

      <groupui-headline heading="h4">Context received</groupui-headline>
      <dl class="context-key-values">
        <div><dt>caseId</dt><dd>${payload.caseId}</dd></div>
        <div><dt>customerId</dt><dd>${context.customerId}</dd></div>
      </dl>

      <groupui-headline heading="h4">Transfer payload</groupui-headline>
      <pre>${JSON.stringify(payload, null, 2)}</pre>

      <section class="proof-panel proof-inline" aria-label="Proof block">
        <groupui-text weight="bold">Proof</groupui-text>
        <p>React Shell sends this payload to the Angular Target App. The returned note will travel back to the host.</p>
        <pre class="code-proof">// app.js
function linkedLaunchContext() {
  return createContext({
    sourceApp: 'react-shell',
    targetApp: 'case-follow-up-app',
    integrationMode: integrationModes.linkedLaunchpad
  });
}</pre>
      </section>

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

function openFlightCalendarModal(context) {
  const base = import.meta.env.BASE_URL;
  const url = `${window.location.origin}${base}calendar-target.html?context=${serializeContext(context)}&v=date-transfer-3`;

  calendarModalBody.innerHTML = `
    <div class="calendar-modal-shell">
      <div class="calendar-modal-header">
        <div>
          <groupui-tag>Schritt 2 · Angular Calendar</groupui-tag>
          <groupui-headline heading="h3">Reisedatum wählen</groupui-headline>
          <groupui-text>Die React Shell bleibt sichtbar. Der Kalender läuft als echte Angular App im iframe.</groupui-text>
        </div>
        <groupui-button variant="secondary" type="button" data-action="close-calendar-modal">Schließen</groupui-button>
      </div>
      <iframe
        class="calendar-modal-frame"
        title="Angular Calendar App"
        src="${url}"
      ></iframe>
    </div>
  `;

  recordEvent(state.eventLog, 'open-flight-calendar-modal', { url, context, target: 'calendar-target.html' });
  calendarModal.showModal();
}

function createFlightOptionsTargetUrl(context) {
  const base = import.meta.env.BASE_URL;
  return `${window.location.origin}${base}target-svelte.html?context=${serializeContext(context)}&v=${flightOptionsTargetVersion}`;
}

function createFlightExtrasTargetUrl(context) {
  const base = import.meta.env.BASE_URL;
  return `${window.location.origin}${base}target-stencil.html?context=${serializeContext(context)}&v=${flightExtrasTargetVersion}`;
}

function openFlightOptionsModal(context) {
  const url = createFlightOptionsTargetUrl(context);

  calendarModalBody.innerHTML = `
    <div class="calendar-modal-shell">
      <div class="calendar-modal-header">
        <div>
          <groupui-tag>Schritt 3 · Svelte Remote</groupui-tag>
          <groupui-headline heading="h3">Flugoption auswählen</groupui-headline>
          <groupui-text>Die React Shell bleibt sichtbar. Die Flugauswahl läuft als Svelte-Remote im iframe.</groupui-text>
        </div>
        <groupui-button variant="secondary" type="button" data-action="close-calendar-modal">Schließen</groupui-button>
      </div>
      <iframe
        class="calendar-modal-frame"
        title="Svelte Flight Options App"
        src="${url}"
      ></iframe>
    </div>
  `;

  recordEvent(state.eventLog, 'open-flight-options-modal', { url, context, target: 'target-svelte.html' });
  calendarModal.showModal();
}

function openFlightExtrasModal(context) {
  const url = createFlightExtrasTargetUrl(context);

  calendarModalBody.innerHTML = `
    <div class="calendar-modal-shell">
      <div class="calendar-modal-header">
        <div>
          <groupui-tag>Schritt 4 · Native Web Component</groupui-tag>
          <groupui-headline heading="h3">Reise-Extras ändern</groupui-headline>
          <groupui-text>Die Web-Components-Ziel-App läuft im iframe und gibt die Extras an die React Shell zurück.</groupui-text>
        </div>
        <groupui-button variant="secondary" type="button" data-action="close-calendar-modal">Schließen</groupui-button>
      </div>
      <iframe
        class="calendar-modal-frame"
        title="Web Component Flight Extras App"
        src="${url}"
      ></iframe>
    </div>
  `;

  recordEvent(state.eventLog, 'open-flight-extras-modal', { url, context, target: 'target-stencil.html' });
  calendarModal.showModal();
}

function closeFlightCalendarModal() {
  calendarModal.close();
  calendarModalBody.innerHTML = '';
  recordEvent(state.eventLog, 'calendar-modal-close', { sourceApp: 'react-shell' });
}

function renderModal() {
  if (!state.modalContext) return;

  if (state.modalContext.integrationMode === integrationModes.linkedLaunchpad) {
    return renderLinkedLaunchModal();
  }

  // Standard-Modal für andere Integrationsmodi
  const context = state.modalContext;
  modalBody.innerHTML = `
    <div class="g-modal-content modal-inner">
      <groupui-headline heading="h3">Modal Context</groupui-headline>
      <pre>${JSON.stringify(context, null, 2)}</pre>
      <div class="action-row right">
        <groupui-button variant="secondary" data-action="close-modal">Close</groupui-button>
      </div>
    </div>
  `;
}

function renderActiveView() {
  if (state.activeView === 'comparison') return renderComparison();
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

function handleAction(action, sourceElement) {
  if (action === 'launchpad') {
    navigate(integrationModes.linkedLaunchpad, initialContexts.launchpad);
  }

  if (action === 'linked-in-shell') {
    navigate(integrationModes.linkedLaunchpad, createContext({
      ...state.activeContext,
      sourceApp: 'react-shell',
      targetApp: 'case-follow-up-app',
      sourceStep: 'overview-linked-integration-demo',
      integrationMode: integrationModes.linkedLaunchpad
    }));
  }

  if (action === 'new-tab' || action === 'new-tab-react' || action === 'new-tab-angular' || action === 'new-tab-calendar' || action === 'new-tab-svelte' || action === 'new-tab-stencil') {
    const context = createContext({ sourceStep: 'new-tab-launch', integrationMode: integrationModes.newTab });
    const chName = 'onefe-channel-' + context.caseId;

    // ensure a BroadcastChannel exists to receive replies from the new tab
    if (!state.broadcastChannels) state.broadcastChannels = {};
    if (!state.broadcastChannels[chName]) {
      try {
        const ch = new BroadcastChannel(chName);
        ch.onmessage = (ev) => {
          if (ev.data && (ev.data.type === 'follow-up-return' || ev.data.type === 'appointment-transfer' || ev.data.type === 'flight-option-transfer' || ev.data.type === 'flight-extras-transfer')) {
            receiveRemotePayload(ev.data, 'channel-message');
            render();
          }
        };
        state.broadcastChannels[chName] = ch;
      } catch (e) {
        // BroadcastChannel not available; fall back to postMessage via window handle
        console.warn('BroadcastChannel not available:', e);
      }
    }

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

  if (action === 'open-flight-calendar') {
    const context = createFlightBookingContext({
      sourceStep: 'flight-date-selection',
      integrationMode: integrationModes.modal
    });
    openFlightCalendarModal(context);
  }

  if (action === 'close-calendar-modal') {
    closeFlightCalendarModal();
  }

  if (action === 'open-flight-options') {
    const context = createFlightBookingContext({
      sourceStep: 'flight-option-selection',
      targetApp: 'svelte-flight-options-target',
      integrationMode: integrationModes.modal
    });
    openFlightOptionsModal(context);
  }

  if (action === 'open-flight-extras') {
    const context = createFlightBookingContext({
      sourceStep: 'flight-extras-selection',
      targetApp: 'stencil-flight-extras-target',
      integrationMode: integrationModes.modal
    });
    openFlightExtrasModal(context);
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

  if (action === 'modal') {
    openModal(createContext({ sourceStep: 'modal-action', integrationMode: integrationModes.modal }));
  }

  if (action === 'linked-launch') {
    openModal(linkedLaunchContext());
    return;
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
    navigate(integrationModes.integratedExperience, createContext({ sourceStep: 'inline-process-step', integrationMode: integrationModes.processStep }));
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
    const context = createFlightBookingContext({
      sourceStep: 'flight-date-selection-stepper',
      integrationMode: integrationModes.modal
    });
    openFlightCalendarModal(context);
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
    navigate(navTarget.dataset.nav, createContext({ sourceStep: 'shell-nav', integrationMode: navTarget.dataset.nav }));
  }

  if (moduleTarget) {
    state.embeddedModule = moduleTarget.dataset.module;
    recordEvent(state.eventLog, 'embedded-module-switch', { module: state.embeddedModule });
    render();
  }
});

function handleFlightFieldChange(event) {
  const field = event.target.closest('[data-flight-field]');

  if (!field) return;

  const key = field.dataset.flightField;
  const value = key === 'passengers'
    ? Math.max(1, Number(field.value || 1))
    : field.value;

  state.flightBooking = {
    ...state.flightBooking,
    [key]: value
  };
  state.activeContext = createFlightBookingContext();
  recordEvent(state.eventLog, 'flight-booking-update', { field: key, value });
  render();
}

document.addEventListener('change', handleFlightFieldChange);
document.addEventListener('input', handleFlightFieldChange);

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
  }
};

Promise.all(groupUiComponentTags.map((tagName) => customElements.whenDefined(tagName).catch(() => null)))
  .then(updateGroupUiRuntimeStatus);
updateGroupUiRuntimeStatus();
