import { createContext } from './packages/context-model/src/context.js';

export function createLinkedLaunchContext(overrides = {}) {
  return createContext({
    sourceApp: 'react-shell',
    targetApp: 'case-follow-up-app',
    sourceStep: 'dashboard-follow-up-action',
    integrationMode: 'linked-launchpad',
    ...overrides
  });
}

export function linkedTransferPayload(context) {
  return {
    caseId: context.caseId,
    sourceApp: context.sourceApp,
    targetApp: context.targetApp,
    integrationMode: context.integrationMode
  };
}

export function serializeLinkedContext(context) {
  return encodeURIComponent(JSON.stringify(context));
}

export function readLinkedContextFromUrl() {
  const contextParam = new URLSearchParams(window.location.search).get('context');

  if (!contextParam) {
    return createLinkedLaunchContext();
  }

  try {
    return createContext(JSON.parse(decodeURIComponent(contextParam)));
  } catch (error) {
    return createLinkedLaunchContext({ sourceStep: 'context-parse-failed' });
  }
}
