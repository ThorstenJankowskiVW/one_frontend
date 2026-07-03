# Code-Stil

## DOs
- DO bevorzuge plain ESM JavaScript und halte Module klein und verantwortungsgetrieben.
- DO zentralisiere wiederverwendbare Vertraege und Hilfen unter `packages/`, statt sie in Apps zu duplizieren.
- DO halte Host-State-Management in host-eigenen Modulen und gib Targets nur den Kontext, den sie wirklich brauchen.
- DO halte Cross-App-Payloads serialisierbar und explizit.
- DO verwende Namen, die Business-Flow oder Integrationsrolle beschreiben, nicht Framework-Trivia.
- DO behandle `index.html`, `app.js`, `styles.css`, Target-Einstiegspunkte und Shared Packages als bewusste Architekturgrenzen.
- DO halte Kommentare selten und nutze sie nur dort, wo das Browser-Integrationsverhalten nicht offensichtlich ist.

## DON'Ts
- Source-of-Truth-Werte nicht in mehreren Einstiegspunkten vergraben.
- Kein einzelnes Target den geteilten Kontextvertrag informell neu definieren lassen.
- Keine unnoetigen Abstraktionsschichten fuer einen Demo-Flow einfuehren.
- Integrationslogik, View-Vertraege und visuelles Markup nicht vermischen, wenn eine Shared-Package-Grenze verfuegbar ist.
