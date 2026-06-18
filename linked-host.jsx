import React from 'react';
import { createRoot } from 'react-dom/client';
import { createLinkedLaunchContext, linkedTransferPayload } from './linked-context.js';

const context = createLinkedLaunchContext();

function LinkedHero() {
  return (
    <section className="linked-hero">
      <div>
        <groupui-tag>React Shell</groupui-tag>
        <groupui-headline heading="h1">Linked Integration</groupui-headline>
        <p className="hero-lead">Loose coupling through explicit system handover.</p>
      </div>
      <div className="linked-system-strip" aria-label="System handover">
        <div className="system-badge system-badge-host"><span>Host</span><strong>React Shell</strong></div>
        <div className="system-arrow" aria-hidden="true">→</div>
        <div className="system-badge system-badge-target"><span>Target</span><strong>Angular App</strong></div>
      </div>
    </section>
  );
}

function JourneyCards() {
  return (
    <section className="linked-journey" aria-label="Customer journey">
      <div className="journey-card journey-card-active">
        <span>Step 1</span>
        <strong>Dashboard with a case</strong>
        <p>The React shell shows the case and offers a follow-up action.</p>
      </div>
      <div className="journey-card">
        <span>Step 2</span>
        <strong>Explicit launch</strong>
        <p>The button opens a modal popup before leaving the host.</p>
      </div>
      <div className="journey-card">
        <span>Step 3</span>
        <strong>Target system opened</strong>
        <p>The browser navigates to a separate Angular app page.</p>
      </div>
    </section>
  );
}

function DashboardCard({ onLaunch }) {
  return (
    <section className="system-card system-card-host">
      <groupui-tag>Host</groupui-tag>
      <groupui-headline heading="h3">React Shell Dashboard</groupui-headline>
      <groupui-text>Case {context.caseId} is visible in the host application.</groupui-text>
      <dl className="compact-list">
        <div><dt>Customer</dt><dd>{context.customerId}</dd></div>
        <div><dt>Vehicle</dt><dd>{context.vehicleId}</dd></div>
        <div><dt>Status</dt><dd>{context.status}</dd></div>
      </dl>
      <groupui-button id="linked-edit-follow-up" onClick={onLaunch}>Edit follow-up step</groupui-button>
    </section>
  );
}

function TargetPlaceholder() {
  return (
    <section className="system-card system-card-target">
      <groupui-tag>Target</groupui-tag>
      <groupui-headline heading="h3">Angular App</groupui-headline>
      <groupui-text>The target is launched explicitly. It is not embedded in the React shell.</groupui-text>
      <div className="target-placeholder">
        <strong>Case Follow-Up App</strong>
        <span>Opened only after context handover</span>
      </div>
    </section>
  );
}

function ContextPanel() {
  return (
    <section className="context-panel linked-context-panel" aria-label="Transfer payload">
      <div>
        <groupui-text weight="bold">Transfer payload</groupui-text>
        <p>Only the fields needed for the linked handover are shown here.</p>
      </div>
      <pre>{JSON.stringify(linkedTransferPayload(context), null, 2)}</pre>
    </section>
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

  return (
    <dialog ref={modalRef} className="g-modal g-modal-centered">
      <div className="linked-modal-content">
        <groupui-tag>Explicit system handover</groupui-tag>
        <groupui-headline heading="h3">Target system opened</groupui-headline>
        <groupui-text>The React shell is launching the Angular app as a separate page. The target is not embedded.</groupui-text>

        <div className="launch-details">
          <div className="launch-detail-row"><span>Application</span><strong>Case Follow-Up App</strong></div>
          <div className="launch-detail-row"><span>Technology</span><strong>Angular</strong></div>
          <div className="launch-detail-row"><span>Integration</span><strong>Linked Launchpad</strong></div>
          <div className="launch-detail-row"><span>Transport</span><strong>URL / serialized context</strong></div>
        </div>

        <div className="modal-system-strip" aria-label="Host and target">
          <div className="system-badge system-badge-host"><span>Host</span><strong>React Shell</strong></div>
          <div className="system-arrow" aria-hidden="true">→</div>
          <div className="system-badge system-badge-target"><span>Target</span><strong>Angular App</strong></div>
        </div>

        <groupui-headline heading="h4">Context received</groupui-headline>
        <dl className="context-key-values">
          <div><dt>caseId</dt><dd>{payload.caseId}</dd></div>
          <div><dt>customerId</dt><dd>{context.customerId}</dd></div>
        </dl>

        <groupui-headline heading="h4">Transfer payload</groupui-headline>
        <pre>{JSON.stringify(payload, null, 2)}</pre>

        <div className="modal-form">
          <label>
            <span>Follow-up note</span>
            <input
              type="text"
              placeholder="Example: call customer tomorrow"
              value={note}
              onChange={(event) => setNote(event.target.value)}
            />
          </label>
          <groupui-button onClick={() => onOpenTarget(note)}>Open Angular App</groupui-button>
        </div>

        <div className="action-row right">
          <groupui-button variant="secondary" onClick={onClose}>Close</groupui-button>
        </div>
      </div>
    </dialog>
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

  return (
    <main className="linked-page">
      <LinkedHero />
      <JourneyCards />
      <div className="linked-dashboard">
        <DashboardCard onLaunch={() => setModalOpen(true)} />
        <div className="system-boundary" aria-hidden="true">
          <span>System boundary</span>
        </div>
        <TargetPlaceholder />
      </div>
      <ContextPanel />
      <LinkedLaunchModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onOpenTarget={openTarget}
      />
    </main>
  );
}

createRoot(document.querySelector('#root')).render(<App />);
