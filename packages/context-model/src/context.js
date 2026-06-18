export const integrationModes = {
  linkedLaunchpad: 'linked-launchpad',
  embeddedWorkspace: 'embedded-workspace',
  integratedExperience: 'integrated-experience',
  newTab: 'new-tab',
  modal: 'modal',
  navigation: 'navigation',
  processStep: 'process-step',
  dashboardLauncher: 'dashboard-launcher'
};

export const baseContext = {
  caseId: 'CASE-2026-011',
  vehicleId: 'VEH-WVWZZZ-042',
  customerId: 'CUS-88421',
  market: 'DE',
  language: 'de-DE',
  userRole: 'service-advisor',
  sourceApp: 'host-shell',
  sourceStep: 'dashboard',
  integrationMode: integrationModes.dashboardLauncher
};

export function createContext(overrides = {}) {
  return {
    ...baseContext,
    ...overrides
  };
}

export function serializeContext(context) {
  return encodeURIComponent(JSON.stringify(context));
}

export function deserializeContext(value) {
  if (!value) {
    return createContext();
  }

  try {
    return createContext(JSON.parse(decodeURIComponent(value)));
  } catch (error) {
    return createContext({ sourceStep: 'context-parse-failed' });
  }
}
