# Modelle

## DOs
- DO modelliere geteilte Daten als einfache serialisierbare Objekte.
- DO halte kanonische Kontext- und navigationsbezogene Strukturen in Shared Packages.
- DO bevorzuge additive Modell-Aenderungen, damit bestehende Targets waehrend Vergleichen weiter funktionieren.
- DO richte Modellfelder an Nutzer-Journey und Integrations-Handover aus.
- DO ermoegliche spaetere echte Fachlogik, indem Demo-Modelle nachvollziehbar, erweiterbar und nicht rein praesentationsgetrieben bleiben.

## DON'Ts
- Keine klassenlastigen Domain-Modelle fuer Cross-Runtime-Payloads nutzen.
- Kein einzelnes Target eine Payload-Form definieren lassen, die andere Targets rueckwaerts erschliessen muessen.
- Keine transportkritischen Felder hinter rein berechnetem View-State verstecken.
