# Dokumentation Und Entscheidungen

## DOs
- DO aktualisiere `docs/architecture/`, wenn sich Repo-Struktur, Integrationsgrenzen oder technische Einstiegspunkte aendern.
- DO aktualisiere `docs/decisions/`, wenn sich Technologieentscheidungen, Build-Annahmen oder Integrationsmuster bewusst aendern.
- DO aktualisiere `docs/demo-flows/`, wenn sich die gemeinsame Journey oder das sichtbare Verhalten der Vergleichsmuster aendert.
- DO aktualisiere `docs/progress/implementation-log.md`, wenn ein Umsetzungsschritt fachlich oder technisch relevant abgeschlossen wurde.
- DO nutze `Groupui_Markdown_RAG/` als lokale Referenz, wenn Design-System-, Komponenten- oder Navigationsentscheidungen mit GroupUI begruendet werden.
- DO halte GroupUI- und Design-Entscheidungen ausdruecklich in Doku und Decisions fest, wenn sie das sichtbare Verhalten oder die Struktur der Demo praegen.
- DO halte Accessibility- und Internationalisierungsentscheidungen fest, sobald sie Host, Targets oder gemeinsame Handover-Pfade betreffen.
- DO verweise auf `/Users/dv60tja/projekte/one_frontend/Lavender_Examples`, wenn visuelle Orientierung aus diesen Beispielen bewusst in neue UI-Arbeit eingeflossen ist.
- DO halte Dokumentation nah an der tatsaechlichen Implementierung und nenne konkrete Dateien oder Targets, wenn das fuer Verstaendlichkeit wichtig ist.

## DON'Ts
- Architektur- und Entscheidungsdokumente nicht veralten lassen, wenn sich Host, Targets oder Shared Packages sichtbar aendern.
- Keine neuen Integrationsmuster einfuehren, ohne ihren Zweck und ihre Abgrenzung in der Doku festzuhalten.
- Fortschritt nicht nur im Code sichtbar machen, wenn sich dadurch wichtige Projektentscheidungen spaeter nicht mehr nachvollziehen lassen.
