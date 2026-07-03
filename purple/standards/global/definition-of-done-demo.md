# Definition Of Done Demo

## DOs
- DO betrachte Arbeit an der Demo erst dann als fertig, wenn die Aenderung in die Multi-Technologie-Integration passt und den Vergleich nicht schwaecht.
- DO pruefe, ob React, Angular, Svelte und Web Components weiterhin als echte Integrationspartner sichtbar bleiben.
- DO pruefe, ob GroupUI weiter die verbindliche UI-Grundlage bleibt.
- DO pruefe, ob Nutzer den Technologiewechsel weiterhin moeglichst nicht bewusst wahrnehmen.
- DO pruefe, ob Werkstatt-/Serviceprozess und gegebenenfalls Reisebuchung weiterhin konsistent zur Demo-Aussage passen.
- DO pruefe Sprachkonsistenz in Deutsch und Englisch ueber Host und Targets hinweg.
- DO pruefe Responsive-Verhalten auf Desktop und Mobile fuer die betroffenen Screens.
- DO pruefe die Accessibility-Basis fuer die betroffenen Screens: Tastatur, Fokus, Labels, Kontrast, Modal-Verhalten.
- DO aktualisiere die relevante Doku: `docs/architecture/`, `docs/decisions/`, `docs/demo-flows/`, `docs/progress/implementation-log.md` und bei Bedarf GroupUI-/Design-Entscheidungen.
- DO halte `npm test` gruen und fuehre `npm run test:e2e` aus, wenn Integrationsverhalten, Journey-Schritte, Handover oder responsive Kernpfade betroffen sind.

## DON'Ts
- Arbeit nicht als fertig behandeln, wenn nur ein einzelnes Target sauber funktioniert.
- Arbeit nicht als fertig behandeln, wenn sie GroupUI umgeht oder verwässert.
- Arbeit nicht als fertig behandeln, wenn Sprache, Kontext oder Rueckkanal zwischen Host und Targets auseinanderlaufen.
- Arbeit nicht als fertig behandeln, wenn Mobile oder Accessibility im betroffenen Pfad sichtbar kaputt sind.
- Arbeit nicht als fertig behandeln, wenn die Demo-Aussage geaendert wurde, aber Doku und Verifikation hinterherhinken.
