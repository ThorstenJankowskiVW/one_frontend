# Abhaengigkeiten Und Build

## DOs
- DO halte den Vite-Multi-Page-Build fuer alle Host- und Target-Einstiegspunkte funktionsfaehig.
- DO aktualisiere `vite.config.js`, wenn eine neue Standalone-Target-Seite Teil des Produktions-Builds werden muss.
- DO halte Deployment-Annahmen kompatibel mit dem Base-Pfad `/one_frontend/`.
- DO behandle GroupUI-Assets und Framework-Runtimes als gebuendelte Build-Time-Abhaengigkeiten, nicht als implizite Runtime-CDN-Annahmen.
- DO fuehre Dependency-Upgrades bewusst durch, besonders im Angular-Dependency-Baum.

## DON'Ts
- `npm audit fix --force` nicht verwenden.
- Keine ungeprueften Major-Upgrades im Angular-Dependency-Baum durchfuehren.
- Keine Target-Seite hinzufuegen, die lokal funktioniert, aber im Produktions-Build-Graph fehlt.
