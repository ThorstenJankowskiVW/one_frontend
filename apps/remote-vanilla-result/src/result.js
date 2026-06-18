export function renderVanillaResult(context) {
  return `
    <div class="remote remote-vanilla">
      <groupui-text weight="bold">Remote C: Vanilla Result</groupui-text>
      <p>Einfaches Plain-HTML-Zielmodul fuer Ergebnis- oder Legacy-nahe Integration.</p>
      <pre>${JSON.stringify(context, null, 2)}</pre>
    </div>
  `;
}
