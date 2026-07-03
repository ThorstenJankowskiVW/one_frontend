# Authentifizierung

## DOs
- DO gehe davon aus, dass dieser Demonstrator derzeit keinen echten Authentifizierungsfluss hat.
- DO modelliere Benutzerrolle oder Quellsystem-Informationen als explizite Kontextfelder, wenn ein Flow sie braucht.
- DO halte Auth-bezogene UI-Texte beschreibend und klar als nicht-produktiv erkennbar, falls ein Mock-Handover gezeigt wird.
- DO dokumentiere jede kuenftige echte Authentifizierungsgrenze, bevor sie implementiert wird.

## DON'Ts
- Keine Fake-Login-Screens, Token-Speicher oder Session-Handling nur zur Unterstuetzung der Demo erfinden.
- Berechtigungsannahmen nicht in app-spezifischem Code verstecken.
- Demo-Kontext nicht als Identitaetsnachweis behandeln.
