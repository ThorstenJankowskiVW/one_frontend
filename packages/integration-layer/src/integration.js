import { createContext, serializeContext } from '../../context-model/src/context.js';

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
