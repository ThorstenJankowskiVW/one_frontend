export class OneFeActionRemote extends HTMLElement {
  connectedCallback() {
    const context = JSON.parse(this.getAttribute('context') || '{}');
    const extras = context.selectedServiceExtras || [];

    this.innerHTML = `
      <div class="remote remote-web-component">
        <groupui-text weight="bold">Remote B: Web Component extras slice</groupui-text>
        <p>Framework-unabhängige Extras-, Teile- und Mobilitätslogik als Custom Element.</p>
        <dl class="compact-list">
          <div><dt>Vehicle</dt><dd>${context.vehicleModel || context.vehicleLabel || 'n/a'}</dd></div>
          <div><dt>Concern</dt><dd>${context.serviceConcern || 'n/a'}</dd></div>
          <div><dt>Selected extras</dt><dd>${extras.length ? extras.map((item) => item.label).join(', ') : 'Noch keine'}</dd></div>
          <div><dt>Mobility</dt><dd>${context.mobilityNeed || 'none'}</dd></div>
        </dl>
      </div>
    `;
  }
}

if (!customElements.get('onefe-action-remote')) {
  customElements.define('onefe-action-remote', OneFeActionRemote);
}
