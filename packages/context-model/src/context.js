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

export const aftersalesContextFields = [
  'vin',
  'vehicleModel',
  'vehiclePowertrain',
  'mileageKm',
  'serviceConcern',
  'serviceCategory',
  'appointmentDate',
  'appointmentSlotId',
  'workshopLocation',
  'servicePackageId',
  'servicePackageLabel',
  'estimatedDurationMinutes',
  'estimatedPrice',
  'partsStatus',
  'campaignStatus',
  'mobilityNeed',
  'followUpRequired'
];

export const baseContext = {
  caseId: 'CASE-2026-011',
  vehicleId: 'VEH-WVWZZZ-042',
  customerId: 'CUS-88421',
  status: 'In progress',
  market: 'DE',
  language: 'de-DE',
  userRole: 'service-advisor',
  sourceApp: 'host-shell',
  sourceStep: 'dashboard',
  integrationMode: integrationModes.dashboardLauncher,
  journeyType: 'aftersales',
  customerName: 'Demo Customer GmbH',
  customerEmail: 'service.demo@volkswagen.example',
  vehicleLabel: 'ID. demo vehicle',
  vin: 'WVWZZZDEM01234567',
  vehicleModel: 'Volkswagen ID.7 Tourer',
  vehiclePowertrain: 'BEV',
  mileageKm: 28450,
  serviceConcern: 'Inspection with brake and software check',
  serviceCategory: 'routine-service',
  appointmentDate: '',
  appointmentSlotId: '',
  workshopLocation: 'Berlin Alexanderplatz',
  servicePackageId: '',
  servicePackageLabel: '',
  estimatedDurationMinutes: 0,
  estimatedPrice: 0,
  partsStatus: 'check-pending',
  campaignStatus: 'no-active-campaign',
  mobilityNeed: 'none',
  followUpRequired: false,
  origin: 'Hannover',
  destination: 'Barcelona',
  departureDate: '',
  passengers: 1
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
