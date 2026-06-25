import { integrationModes } from '../../context-model/src/context.js';

export const primaryViews = [
  { id: 'overview', label: 'Overview' },
  { id: 'aftersales-journey', label: 'Aftersales Journey' },
  {
    id: 'flight-booking',
    label: 'Flight Booking',
    children: [
      { id: 'flight-booking-angular', label: 'Angular Kalender' },
      { id: 'flight-booking-svelte', label: 'Svelte Flugoptionen' },
      { id: 'flight-booking-react-target', label: 'React Ziel-App' },
      { id: 'flight-booking-webcomponents', label: 'Web Components' }
    ]
  },
  { id: 'technology-overview', label: 'Technology Overview' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'comparison', label: 'Zielbilder' },
  { id: integrationModes.linkedLaunchpad, label: 'Linked Integration' },
  { id: integrationModes.embeddedWorkspace, label: 'Embedded Workspace' },
  { id: integrationModes.integratedExperience, label: 'Integrated Experience' },
  { id: 'patterns', label: 'Integrationsmuster' },
  { id: 'debug', label: 'Architecture / Debug' }
];
