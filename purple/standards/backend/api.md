# API

## DOs
- DO behandle APIs als externe Systeme, die der Demonstrator darstellen kann, aber hier nicht implementiert.
- DO halte Integrationsvertraege an der Grenze explizit: Payload-Form, Richtung und Transportmechanismus.
- DO kapsle kuenftige API-Adapter hinter geteilten Integrationsmodulen, falls das Repo ueber reines Demo-Verhalten hinauswaechst.

## DON'Ts
- Keine Mock-API-Annahmen ueber mehrere Einstiegspunkte verteilen.
- Keine frameworkspezifischen Data-Fetching-Muster als geteilte Architektur einfuehren.
- Keine End-to-End-API suggerieren, solange der Vertrag nicht dokumentiert und bewusst verdrahtet ist.
