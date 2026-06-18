export class OneFeActionRemote extends HTMLElement {
  connectedCallback() {
    const context = JSON.parse(this.getAttribute('context') || '{}');
    this.innerHTML = `
      <div class="remote remote-web-component">
        <groupui-text weight="bold">Remote B: Web Component Action</groupui-text>
        <p>Framework-unabhaengige Ziel-Funktion als Custom Element.</p>
        <pre>${JSON.stringify(context, null, 2)}</pre>
      </div>
    `;
  }
}

if (!customElements.get('onefe-action-remote')) {
  customElements.define('onefe-action-remote', OneFeActionRemote);
}
