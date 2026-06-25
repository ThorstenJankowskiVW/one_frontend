import { createContext, serializeContext } from '../../context-model/src/context.js';

export const integrationModePresentation = {
  linkedLaunchpad: {
    label: 'Linked Launchpad',
    ownershipHint: 'The host launches a dedicated target and passes serialized context.'
  },
  embeddedWorkspace: {
    label: 'Embedded Workspace',
    ownershipHint: 'The shell keeps navigation and summary visible while embedded modules change.'
  },
  integratedExperience: {
    label: 'Integrated Experience',
    ownershipHint: 'Multiple runtime participants contribute to one guided flow inside the same experience.'
  },
  modal: {
    label: 'Modal handover',
    ownershipHint: 'The host opens a contextual step without leaving the current shell surface.'
  },
  newTab: {
    label: 'New-tab handover',
    ownershipHint: 'The browser opens a separate surface while keeping the context payload explicit.'
  },
  navigation: {
    label: 'Shell navigation',
    ownershipHint: 'The host remains the journey owner and changes the active destination inside the shell.'
  },
  processStep: {
    label: 'Process step integration',
    ownershipHint: 'A runtime contributes one business step while the shell owns continuity.'
  },
  dashboardLauncher: {
    label: 'Dashboard launcher',
    ownershipHint: 'A tile or overview entry point starts the next capability with prepared context.'
  }
};

export function createEventLog() {
  return [];
}

export function recordEvent(eventLog, type, detail) {
  const entry = {
    time: new Date().toLocaleTimeString('de-DE'),
    type,
    detail
  };

  eventLog.unshift(entry);
  return entry;
}

export function createNavigationTrigger(onNavigate, eventLog) {
  return function triggerNavigation(targetView, context) {
    recordEvent(eventLog, 'navigation-trigger', { targetView, context });
    onNavigate(targetView, context);
  };
}

export function createModalTrigger(onModal, eventLog) {
  return function triggerModal(context) {
    recordEvent(eventLog, 'modal-trigger', { context });
    onModal(context);
  };
}

export function createContextEventBridge(eventLog) {
  return {
    dispatch(type, context) {
      const eventContext = createContext(context);
      recordEvent(eventLog, 'custom-event', { type, context: eventContext });
      window.dispatchEvent(new CustomEvent(type, { detail: eventContext }));
    },
    toUrl(context) {
      const serialized = serializeContext(context);
      recordEvent(eventLog, 'context-url-serialization', { context });
      return `${window.location.origin}${window.location.pathname}?context=${serialized}`;
    }
  };
}

export function describeIntegrationMode(mode) {
  return integrationModePresentation[mode] || {
    label: mode,
    ownershipHint: 'Integration mode is available but has no dedicated presentation metadata yet.'
  };
}
