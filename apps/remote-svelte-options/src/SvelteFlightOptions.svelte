<script>
  const params = new URL(window.location.href).searchParams;
  const rawContext = params.get('context');

  let context = {};
  try {
    context = rawContext ? JSON.parse(decodeURIComponent(rawContext)) : {};
  } catch {
    context = {};
  }

  const options = [
    {
      id: 'direct-morning',
      label: 'Direktflug morgens',
      carrier: 'Demo Airlines',
      duration: '2h 25m',
      departure: '08:35',
      arrival: '11:00',
      price: 219
    },
    {
      id: 'via-munich',
      label: 'Via München',
      carrier: 'One Frontend Air',
      duration: '4h 10m',
      departure: '10:15',
      arrival: '14:25',
      price: 179
    },
    {
      id: 'evening-flex',
      label: 'Flex-Tarif abends',
      carrier: 'GroupUI Wings',
      duration: '2h 35m',
      departure: '18:40',
      arrival: '21:15',
      price: 289
    }
  ];

  let selectedOptionId =
    context.selectedFlightOption?.id ||
    context.flightOption?.id ||
    context.flightBooking?.flightOption?.id ||
    options[0].id;
  let transferStatus = '';

  $: selectedOption = options.find((option) => option.id === selectedOptionId) || options[0];

  function postPayload(payload) {
    try {
      const channel = new BroadcastChannel(`onefe-channel-${context.caseId || 'unknown'}`);
      channel.postMessage(payload);
      channel.close();
    } catch {
      // postMessage remains available as fallback.
    }

    window.opener?.postMessage(payload, '*');
    if (window.parent !== window) {
      window.parent.postMessage(payload, '*');
    }
  }

  function submitOption() {
    const payload = {
      type: 'flight-option-transfer',
      from: 'svelte-flight-options-target',
      targetApp: 'react-shell',
      note: `Flugoption übernommen: ${selectedOption.label}`,
      flightOption: selectedOption,
      context: {
        ...context,
        sourceStep: 'flight-option-selected',
        selectedFlightOption: selectedOption
      }
    };

    postPayload(payload);
    transferStatus = `Übergeben: ${selectedOption.label}`;
  }
</script>

<main class="svelte-flight-root">
  <groupui-card padding="24px">
    <groupui-tag>Svelte Remote</groupui-tag>
    <groupui-headline heading="h1">Flugoption auswählen</groupui-headline>
    <groupui-text>
      {context.origin || 'Hannover'} → {context.destination || 'Barcelona'} ·
      {context.departureDate || 'Datum offen'} · {context.passengers || 1} Reisende
    </groupui-text>
  </groupui-card>

  <groupui-card padding="24px" class="svelte-option-panel">
    <groupui-headline heading="h2">Verfügbare Flugoptionen</groupui-headline>
    <groupui-text>Die Auswahl und Darstellung werden reaktiv von Svelte gerendert.</groupui-text>

    <fieldset class="flight-options">
      <legend>Flugoption</legend>
      {#each options as option}
        <label class:selected={selectedOptionId === option.id}>
          <input type="radio" name="flight-option" value={option.id} bind:group={selectedOptionId} />
          <span>
            <strong>{option.label}</strong>
            <small>{option.carrier} · {option.departure}–{option.arrival} · {option.duration}</small>
          </span>
          <strong>{option.price} EUR</strong>
        </label>
      {/each}
    </fieldset>

    <div class="action-row right">
      <button class="svelte-submit" type="button" on:click={submitOption}>
        Ausgewählte Flugoption übernehmen
      </button>
    </div>
    {#if transferStatus}
      <groupui-text class="save-message">{transferStatus}</groupui-text>
    {/if}
  </groupui-card>

  <groupui-card padding="20px" class="selected-summary">
    <groupui-tag>Aktuelle Auswahl</groupui-tag>
    <groupui-headline heading="h3">{selectedOption.label}</groupui-headline>
    <groupui-text>
      {selectedOption.carrier} · Abflug {selectedOption.departure} · Ankunft {selectedOption.arrival} ·
      {selectedOption.duration} · {selectedOption.price} EUR
    </groupui-text>
  </groupui-card>

  <groupui-card padding="20px" class="svelte-proof">
    <groupui-tag>Runtime Proof</groupui-tag>
    <groupui-headline heading="h3">Echte Svelte-Komponente</groupui-headline>
    <groupui-text>
      Diese Ansicht stammt aus einer <code>.svelte</code>-Komponente und wird durch das offizielle
      Vite-Svelte-Plugin kompiliert.
    </groupui-text>
    <pre>{JSON.stringify(context, null, 2)}</pre>
  </groupui-card>
</main>

<style>
  .svelte-flight-root {
    display: grid;
    gap: 20px;
    max-width: 980px;
    margin: 0 auto;
    padding: 24px;
  }

  .svelte-option-panel,
  .selected-summary,
  .svelte-proof {
    display: grid;
    gap: 18px;
  }

  .flight-options {
    display: grid;
    gap: 12px;
    margin: 0;
    padding: 0;
    border: 0;
  }

  .flight-options legend {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  .flight-options label {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border: 1px solid var(--groupui-sys-color-line-weak);
    border-radius: var(--groupui-sys-border-radius-s);
    background: var(--groupui-sys-color-background-base);
    cursor: pointer;
  }

  .flight-options label.selected {
    border-color: var(--groupui-sys-color-action-basic-default);
    background: var(--groupui-sys-color-action-subtle-default);
  }

  .flight-options span {
    display: grid;
    gap: 4px;
  }

  .flight-options small {
    color: var(--groupui-sys-color-text-weaker);
  }

  .svelte-submit {
    min-height: 44px;
    padding: 0 20px;
    border: 0;
    border-radius: var(--groupui-sys-border-radius-s);
    color: var(--groupui-sys-color-text-inverted);
    background: var(--groupui-sys-color-action-basic-default);
    font: inherit;
    font-weight: 700;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .svelte-flight-root {
      gap: 12px;
      padding: 12px;
    }

    .flight-options label {
      grid-template-columns: auto minmax(0, 1fr);
      gap: 12px;
    }

    .flight-options label > strong {
      grid-column: 2;
    }

    .svelte-submit {
      width: 100%;
    }
  }
</style>
