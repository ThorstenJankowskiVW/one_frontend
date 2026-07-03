# Integrationsmuster Und Kontextuebergabe

## DOs
- DO behandle die Host Shell als zentrale Instanz fuer Journey-State, Navigation und Vergleich der Integrationsmuster.
- DO halte React, Angular, Svelte und Web Components als echte, integrierte Bestandteile der Demo sichtbar.
- DO uebergebe Kontext an Targets explizit und nachvollziehbar, bevorzugt ueber serialisierte URL-Parameter oder klar dokumentierte Browser-Kanaele.
- DO nutze `packages/context-model/src/context.js` als kanonische Basis fuer geteilte Kontextfelder und ihre Serialisierung.
- DO nutze `packages/integration-layer/src/integration.js` fuer wiederverwendbare Browser-Integrationsmechanismen, statt Handover-Logik in mehrere Einstiegspunkte zu verstreuen.
- DO halte Rueckkanaele von Targets zum Host klar erkennbar, zum Beispiel ueber `BroadcastChannel` oder `postMessage`.
- DO gestalte Integrationsmuster so, dass der Anwender die Technologiegrenzen moeglichst nicht bewusst wahrnimmt.
- DO dokumentiere bei neuen Integrationsmustern, wer den Zustand besitzt, wie der Kontext uebergeben wird und wie Ergebnisse zurueckfliessen.

## DON'Ts
- Keine framework-spezifischen Integrationsabkuerzungen bauen, die den Vergleich zwischen React, Angular, Svelte und Web Components verfaelschen.
- Keine Pattern bauen, bei denen einzelne Targets nur dekorative Platzhalter bleiben statt echte Integrationspartner zu sein.
- Keine versteckten Kontextabhaengigkeiten in einzelnen Targets aufbauen, die ausserhalb des gemeinsamen Kontextmodells liegen.
- Rueckmeldungen aus Targets nicht ueber zufaellige globale Seiteneffekte oder implizite DOM-Kopplung transportieren.
- Keine neuen Handover-Pfade einfuehren, ohne sie in Tests und Doku sichtbar zu machen.
