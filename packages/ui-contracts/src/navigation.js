import { integrationModes } from '../../context-model/src/context.js';

export const primaryViews = [
  { id: 'overview', label: 'Overview' },
  {
    id: 'base-apps',
    label: 'Base Apps',
    group: true,
    children: [
      { id: 'calendar-management', label: 'Kalender (Angular)' },
      { id: 'base-service-catalog', label: 'Service Katalog (Svelte)' },
      { id: 'base-mobility-services', label: 'Mobilitäts-Services (Webcomponents)' }
    ]
  },
  {
    id: 'integrated-journeys',
    label: 'Integrated Journeys',
    group: true,
    children: [
      { id: 'aftersales-journey', label: 'AfterSales Journey' },
      { id: 'flight-booking', label: 'Flight Booking' }
    ]
  },
  {
    id: 'details',
    label: 'Details',
    group: true,
    children: [
      { id: 'technology-overview', label: 'Technology Overview' },
      { id: 'implementation', label: 'Implementation' },
      { id: 'comparison', label: 'Zielbilder' },
      { id: integrationModes.linkedLaunchpad, label: 'Linked integration' },
      { id: integrationModes.embeddedWorkspace, label: 'Embedded Workspace' },
      { id: integrationModes.integratedExperience, label: 'Integrated Experience' },
      { id: 'patterns', label: 'Integrationsmuster' },
      { id: 'debug', label: 'Architecture/Debug' }
    ]
  }
];
