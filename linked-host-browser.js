import React from 'react';
import ReactDOM from 'react-dom/client';
import '@group-ui/group-ui/dist/group-ui/assets/themes/tokens.css';
import '@group-ui/group-ui-css-framework/dist/groupui.css';
import { defineCustomElements } from '@group-ui/group-ui/dist/loader/index.es2017.js';
import { createLinkedLaunchContext, linkedTransferPayload } from './linked-context.js';

defineCustomElements().catch((error) => {
  console.error('GroupUI custom elements failed to load', error);
});

const context = createLinkedLaunchContext();

function createElement(type, props, ...children) {
  return React.createElement(type, props, ...children);
}

function LinkedHero() {
  return createElement('section', { className: 'linked-hero' },
    createElement('div', null,
      createElement('groupui-tag', null, 'React Shell'),
      createElement('groupui-headline', { heading: 'h1' }, 'Linked Integration'),
      createElement('p', { className: 'hero-lead' }, 'Loose coupling through explicit system handover.')
    ),
    createElement('div', { className: 'linked-system-strip', 'aria-label': 'System handover' },
      createElement('div', { className: 'system-badge system-badge-host' },
        createElement('span', null, 'Host'),
        createElement('strong', null, 'React Shell')
      ),
      createElement('div', { className: 'system-arrow', 'aria-hidden': 'true' }, '→'),
      createElement('div', { className: 'system-badge system-badge-target' },
        createElement('span', null, 'Target'),
        createElement('strong', null, 'Angular App')
      )
    )
  );
}

function JourneyCards() {
  return createElement('section', { className: 'linked-journey', 'aria-label': 'Customer journey' },
    createElement('div', { className: 'journey-card journey-card-active' },
      createElement('span', null, 'Step 1'),
      createElement('strong', null, 'Dashboard with a case'),
      createElement('p', null, 'The React shell shows the case and offers a follow-up action.')
    ),
    createElement('div', { className: 'journey-card' },
      createElement('span', null, 'Step 2'),
      createElement('strong', null, 'Explicit launch'),
      createElement('p', null, 'The button opens a modal popup before leaving the host.')
    ),
    createElement('div', { className: 'journey-card' },
      createElement('span', null, 'Step 3'),
      createElement('strong', null, 'Target system opened'),
      createElement('p', null, 'The browser navigates to a separate Angular app page.')
    )
  );
}

function DashboardCard({ onLaunch }) {
  return createElement('section', { className: 'system-card system-card-host' },
    createElement('groupui-tag', null, 'Host'),
    createElement('groupui-headline', { heading: 'h3' }, 'React Shell Dashboard'),
    createElement('groupui-text', null, `Case ${context.caseId} is visible in the host application.`),
    createElement('dl', { className: 'compact-list' },
      createElement('div', null,
        createElement('dt', null, 'Customer'),
        createElement('dd', null, context.customerId)
      ),
      createElement('div', null,
        createElement('dt', null, 'Vehicle'),
        createElement('dd', null, context.vehicleId)
      ),
      createElement('div', null,
        createElement('dt', null, 'Status'),
        createElement('dd', null, context.status)
      )
    ),
    createElement('groupui-button', { id: 'linked-edit-follow-up', onClick: onLaunch }, 'Edit follow-up step')
  );
}

function TargetPlaceholder() {
  return createElement('section', { className: 'system-card system-card-target' },
    createElement('groupui-tag', null, 'Target'),
    createElement('groupui-headline', { heading: 'h3' }, 'Angular App'),
    createElement('groupui-text', null, 'The target is launched explicitly. It is not embedded in the React shell.'),
    createElement('div', { className: 'target-placeholder' },
      createElement('strong', null, 'Case Follow-Up App'),
      createElement('span', null, 'Opened only after context handover')
    )
  );
}

function ContextPanel() {
  return createElement('section', { className: 'context-panel linked-context-panel', 'aria-label': 'Transfer payload' },
    createElement('div', null,
      createElement('groupui-text', { weight: 'bold' }, 'Transfer payload'),
      createElement('p', null, 'Only the fields needed for the linked handover are shown here.')
    ),
    createElement('pre', null, JSON.stringify(linkedTransferPayload(context), null, 2))
  );
}

function LinkedLaunchModal({ isOpen, onClose, onOpenTarget }) {
  const [note, setNote] = React.useState('');
  const modalRef = React.useRef(null);
  const payload = linkedTransferPayload(context);

  React.useEffect(() => {
    if (isOpen && modalRef.current && !modalRef.current.open) {
      modalRef.current.showModal();
    }

    if (!isOpen && modalRef.current && modalRef.current.open) {
      modalRef.current.close();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createElement('dialog', { ref: modalRef, className: 'g-modal g-modal-centered' },
    createElement('div', { className: 'linked-modal-content' },
      createElement('groupui-tag', null, 'Explicit system handover'),
      createElement('groupui-headline', { heading: 'h3' }, 'Target system opened'),
      createElement('groupui-text', null, 'The React shell is launching the Angular app as a separate page. The target is not embedded.'),
      createElement('div', { className: 'launch-details' },
        createElement('div', { className: 'launch-detail-row' },
          createElement('span', null, 'Application'),
          createElement('strong', null, 'Case Follow-Up App')
        ),
        createElement('div', { className: 'launch-detail-row' },
          createElement('span', null, 'Technology'),
          createElement('strong', null, 'Angular')
        ),
        createElement('div', { className: 'launch-detail-row' },
          createElement('span', null, 'Integration'),
          createElement('strong', null, 'Linked Launchpad')
        ),
        createElement('div', { className: 'launch-detail-row' },
          createElement('span', null, 'Transport'),
          createElement('strong', null, 'URL / serialized context')
        )
      ),
      createElement('div', { className: 'modal-system-strip', 'aria-label': 'Host and target' },
        createElement('div', { className: 'system-badge system-badge-host' },
          createElement('span', null, 'Host'),
          createElement('strong', null, 'React Shell')
        ),
        createElement('div', { className: 'system-arrow', 'aria-hidden': 'true' }, '→'),
        createElement('div', { className: 'system-badge system-badge-target' },
          createElement('span', null, 'Target'),
          createElement('strong', null, 'Angular App')
        )
      ),
      createElement('groupui-headline', { heading: 'h4' }, 'Context received'),
      createElement('dl', { className: 'context-key-values' },
        createElement('div', null,
          createElement('dt', null, 'caseId'),
          createElement('dd', null, payload.caseId)
        ),
        createElement('div', null,
          createElement('dt', null, 'customerId'),
          createElement('dd', null, context.customerId)
        )
      ),
      createElement('groupui-headline', { heading: 'h4' }, 'Transfer payload'),
      createElement('pre', null, JSON.stringify(payload, null, 2)),
      createElement('div', { className: 'modal-form' },
        createElement('label', null,
          createElement('span', null, 'Follow-up note'),
          createElement('input', {
            type: 'text',
            placeholder: 'Example: call customer tomorrow',
            value: note,
            onChange: (event) => setNote(event.target.value)
          })
        ),
        createElement('groupui-button', { onClick: () => onOpenTarget(note) }, 'Open Angular App')
      ),
      createElement('div', { className: 'action-row right' },
        createElement('groupui-button', { variant: 'secondary', onClick: onClose }, 'Close')
      )
    )
  );
}

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const openTarget = (note) => {
    const targetContext = createLinkedLaunchContext({
      sourceStep: 'target-opened',
      followUpNote: note
    });
    const url = `${window.location.origin}${window.location.pathname.replace('linked-host.html', 'linked-target.html')}?context=${encodeURIComponent(JSON.stringify(targetContext))}`;
    window.location.href = url;
  };

  return createElement('main', { className: 'linked-page' },
    createElement(LinkedHero),
    createElement(JourneyCards),
    createElement('div', { className: 'linked-dashboard' },
      createElement(DashboardCard, { onLaunch: () => setModalOpen(true) }),
      createElement('div', { className: 'system-boundary', 'aria-hidden': 'true' },
        createElement('span', null, 'System boundary')
      ),
      createElement(TargetPlaceholder)
    ),
    createElement(ContextPanel),
    createElement(LinkedLaunchModal, {
      isOpen: modalOpen,
      onClose: () => setModalOpen(false),
      onOpenTarget: openTarget
    })
  );
}

ReactDOM.createRoot(document.querySelector('#root')).render(createElement(App));
