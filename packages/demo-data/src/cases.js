import { createContext, integrationModes } from '../../context-model/src/context.js';

export const demoCase = {
  id: 'CASE-2026-011',
  title: 'Service request: digital handover',
  vehicle: 'ID. demo vehicle',
  customer: 'Demo Customer GmbH',
  status: 'In progress',
  nextAction: 'Prepare follow-up step'
};

export const journeySteps = [
  'Dashboard',
  'Case auswählen',
  'Details ansehen',
  'Aktion starten',
  'Folgeschritt bearbeiten',
  'Ergebnis ansehen'
];

export const targetPictures = [
  {
    id: integrationModes.linkedLaunchpad,
    title: 'Linked Launchpad',
    fact: 'Geringe Integrationstiefe; Workflow-Sprungpunkte und relevante Kontextinformationen werden identifiziert.',
    decision: 'Die Demo übergibt Kontext sichtbar per URL-artigem Payload an eine Ziel-App.'
  },
  {
    id: integrationModes.embeddedWorkspace,
    title: 'Embedded Workspace',
    fact: 'Eine Shell mit persistenter Navigation.',
    decision: 'Die Demo hält Navigation, Kontext und Debug-Ansicht im Host sichtbar, während Module wechseln.'
  },
  {
    id: integrationModes.integratedExperience,
    title: 'Integrated Experience',
    fact: 'Nahtlose API-getriebene End-to-End Experience.',
    decision: 'Die Demo reduziert sichtbare Systemgrenzen und zeigt die Journey als zusammenhängenden Prozess.'
  }
];

export const initialContexts = {
  launchpad: createContext({ sourceStep: 'dashboard-tile', integrationMode: integrationModes.linkedLaunchpad }),
  modal: createContext({ sourceStep: 'action-step', integrationMode: integrationModes.modal }),
  embedded: createContext({ sourceStep: 'persistent-shell', integrationMode: integrationModes.embeddedWorkspace }),
  integrated: createContext({ sourceStep: 'inline-process', integrationMode: integrationModes.integratedExperience })
};
