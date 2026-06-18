# Technology Choices

## Empfehlung

- Host / Shell: React als Zielarchitektur.
- Remote A: Angular als Case-/Details-App.
- Remote B: Web Components / Stencil-nahe Custom Elements als Action-App.
- Remote C: Vanilla / Plain HTML als Result-App.

## Aktuelles lokales Scaffolding

Der erste lauffaehige Prototyp bleibt bewusst leichtgewichtig und statisch startbar. Die Ordner fuer Host und Remotes sind angelegt. Die sichtbare Demo wird zunaechst ueber `index.html`, `styles.css` und `app.js` zusammengefuehrt, damit die Integrationsmuster schnell lokal vergleichbar sind.

## Begründung

React, Angular, Web Components und Vanilla zeigen unterschiedliche Integrationsprofile. Web Components sind fuer fremde Frontends framework-unabhaengig geeignet. Der statische erste Schritt reduziert Setup-Risiko, ohne die Zielstruktur zu verlieren.

## Versionsregel

Der erste Prototyp verwendet keine parallelen Major-Versionen derselben Custom Elements. Registrierungs- und Versionskollisionen werden im Debug-/Architecture-Bereich sichtbar als Risiko dokumentiert.
