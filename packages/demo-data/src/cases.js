import { createContext, integrationModes } from '../../context-model/src/context.js';

export const demoCase = {
  id: 'CASE-2026-011',
  title: 'Service appointment with workshop capacity',
  vehicle: 'Volkswagen ID.7 Tourer',
  customer: 'Demo Customer GmbH',
  status: 'Service planning in progress',
  nextAction: 'Confirm workshop slot and service package',
  vin: 'WVWZZZDEM01234567',
  mileageKm: 28450,
  serviceConcern: 'Inspection with brake and software check',
  serviceCategory: 'Routine service'
};

export const journeySteps = [
  'Vehicle and concern',
  'Workshop capacity',
  'Service package',
  'Optional extras',
  'Order summary'
];

export const targetPictures = [
  {
    id: integrationModes.linkedLaunchpad,
    title: 'Linked Launchpad',
    fact: 'The shell hands over serialized context and opens a dedicated target system only when the user needs it.',
    decision: 'Use explicit launch points when a business flow benefits from a visible system boundary.'
  },
  {
    id: integrationModes.embeddedWorkspace,
    title: 'Embedded Workspace',
    fact: 'The host shell keeps navigation, summary, and context visible while integrated modules change inside the workspace.',
    decision: 'Use an embedded shell when continuity and side-by-side guidance matter more than strict system separation.'
  },
  {
    id: integrationModes.integratedExperience,
    title: 'Integrated Experience',
    fact: 'Multiple runtime participants contribute to one flow while the user perceives a single guided process.',
    decision: 'Reduce visible boundaries when the business journey should stay primary and the technical reveal is secondary.'
  }
];

export const workshopAppointments = [
  {
    id: 'BER-2026-06-18-AM',
    date: '2026-06-18',
    timeLabel: '08:30',
    title: 'Service-Termin',
    location: 'Berlin Alexanderplatz',
    capacityLabel: '3 workshop bays available',
    status: 'recommended',
    durationMinutes: 95
  },
  {
    id: 'BER-2026-06-18-PM',
    date: '2026-06-18',
    timeLabel: '13:45',
    title: 'Express inspection',
    location: 'Berlin Alexanderplatz',
    capacityLabel: '1 workshop bay available',
    status: 'limited',
    durationMinutes: 75
  },
  {
    id: 'BER-2026-06-24-AM',
    date: '2026-06-24',
    timeLabel: '09:15',
    title: 'Workshop review slot',
    location: 'Berlin Alexanderplatz',
    capacityLabel: '2 workshop bays available',
    status: 'available',
    durationMinutes: 110
  }
];

export const servicePackages = [
  {
    id: 'PKG-INSPECT-PLUS',
    label: 'Inspection Plus',
    summary: 'Inspection, brake check, software status review',
    estimatedPrice: 349,
    estimatedDurationMinutes: 95
  },
  {
    id: 'PKG-BRAKE-COMFORT',
    label: 'Brake Comfort Package',
    summary: 'Inspection with brake cleaning and wear diagnostics',
    estimatedPrice: 429,
    estimatedDurationMinutes: 120
  },
  {
    id: 'PKG-SOFTWARE-READY',
    label: 'Software Ready Service',
    summary: 'Inspection with software campaign validation and update prep',
    estimatedPrice: 289,
    estimatedDurationMinutes: 80
  }
];

export const serviceExtras = [
  {
    id: 'EXTRA-SHUTTLE',
    label: 'Shuttle service',
    type: 'mobility',
    price: 0,
    availability: 'available'
  },
  {
    id: 'EXTRA-REPLACEMENT',
    label: 'Replacement vehicle',
    type: 'mobility',
    price: 39,
    availability: 'limited'
  },
  {
    id: 'EXTRA-WIPER',
    label: 'Wiper blade replacement',
    type: 'parts',
    price: 24,
    availability: 'available'
  }
];

export const aftersalesScenarioCards = [
  {
    id: 'service-campaign-check',
    title: 'Recall / Service campaign check',
    summary: 'Validate VIN eligibility and route campaign findings into the service flow.',
    cta: 'Check campaign status'
  },
  {
    id: 'parts-and-workshop-order',
    title: 'Parts availability and workshop order',
    summary: 'Combine parts readiness with workshop feasibility before confirming repair work.',
    cta: 'Review parts and capacity'
  },
  {
    id: 'customer-follow-up',
    title: 'Customer follow-up',
    summary: 'Capture the next customer action and send it back into the shell-owned process state.',
    cta: 'Open follow-up flow'
  },
  {
    id: 'mobility-replacement',
    title: 'Mobility replacement',
    summary: 'Offer shuttle, replacement vehicle, or transit support as modular add-ons.',
    cta: 'Plan mobility support'
  }
];

export const flightReferenceFlow = {
  eyebrow: 'Reference flow',
  title: 'Flight booking',
  summary: 'Preserved as a secondary cross-runtime proof that remains useful for comparison and responsive UX checks.'
};

export const initialContexts = {
  launchpad: createContext({
    sourceStep: 'dashboard-tile',
    integrationMode: integrationModes.linkedLaunchpad,
    targetApp: 'case-follow-up-app'
  }),
  modal: createContext({
    sourceStep: 'action-step',
    integrationMode: integrationModes.modal,
    targetApp: 'case-follow-up-app'
  }),
  embedded: createContext({
    sourceStep: 'persistent-shell',
    integrationMode: integrationModes.embeddedWorkspace,
    targetApp: 'service-order-workspace'
  }),
  integrated: createContext({
    sourceStep: 'inline-process',
    integrationMode: integrationModes.integratedExperience,
    targetApp: 'service-order-flow'
  }),
  aftersalesJourney: createContext({
    sourceStep: 'service-overview',
    integrationMode: integrationModes.processStep,
    targetApp: 'angular-workshop-capacity',
    appointmentSlotId: workshopAppointments[0].id,
    appointmentDate: workshopAppointments[0].date,
    workshopLocation: workshopAppointments[0].location,
    servicePackageId: servicePackages[0].id,
    servicePackageLabel: servicePackages[0].label,
    estimatedDurationMinutes: servicePackages[0].estimatedDurationMinutes,
    estimatedPrice: servicePackages[0].estimatedPrice
  })
};
