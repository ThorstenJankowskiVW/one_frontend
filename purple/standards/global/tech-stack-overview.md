# Tech-Stack-Ueberblick

## DOs
- DO behandle dieses Repo als Frontend-Integrationsdemonstrator mit Vite-Host und mehreren Runtime-Targets.
- DO halte React, Angular, Svelte und Web Components als verpflichtende Bestandteile der Demo sichtbar und integriert.
- DO behandle die Host Shell als Orchestrator einer gemeinsamen Flight-Booking-Journey ueber isolierte Ziel-Apps hinweg.
- DO halte Host, Remotes, Shared Packages, Doku und Tests nach Verantwortung getrennt.
- DO nutze Shared Packages fuer Kontextmodell, Integrationshilfen, Demo-Daten und UI-Vertraege.
- DO halte Integrationsgrenzen browser-nativ: URL-Payloads, `BroadcastChannel`, `postMessage` und DOM-Events.
- DO nutze GroupUI verpflichtend als Design-System-Schicht fuer visuelle Konsistenz ueber alle Runtimes hinweg.
- DO bewahre den Vite-Base-Pfad `/one_frontend/`, solange die Deployment-Standards nicht bewusst geaendert werden.
- DO trage neue Standalone-Targets in `vite.config.js` ein, wenn sie einen eigenen produktiven HTML-Einstiegspunkt brauchen.

## DON'Ts
- DON'T ziehe geteilte Vertraege wieder in app-lokale Kopien auseinander.
- DON'T kopple eine Runtime ueber Framework-Interna an eine andere.
- DON'T reduziere die Demo nicht auf nur ein oder zwei Technologien, wenn dadurch der Integrationsvergleich verloren geht.
- DON'T gehe davon aus, dass reine Dev-Server-Pfade den Produktions-Build ueberleben.
- DON'T fuege diesem Repo Backend-Annahmen hinzu, solange Scope und Standards nicht bewusst erweitert wurden.
