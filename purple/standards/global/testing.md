# Testing

## DOs
- DO halte `npm test` gruen, bevor Arbeit als fertig gilt.
- DO entscheide die Testtiefe pragmatisch nach Aenderungsrisiko; fuer eine Demo ist Verifikation wichtig, aber nicht jede Aenderung braucht dieselbe Schwere.
- DO fuehre den produktionsnahen E2E-Smoke-Test aus, wenn sich Integrationsverhalten, responsive Booking-Flow-Logik oder ein Target-to-Host-Handover aendert.
- DO verifiziere produktionsnahes Verhalten ueber den Build-Output, nicht nur ueber das Dev-Server-Verhalten.
- DO ergaenze oder aktualisiere Browser-Tests, wenn eine Aenderung Navigation, Kontextuebergabe oder Target-to-Host-Kommunikation betrifft.
- DO fuehre bei UI-nahen Aenderungen mindestens einen kurzen manuellen Check fuer Barrierefreiheit und Sprachkonsistenz durch.
- DO teste den kompletten Handover-Pfad, wenn sich URL-Serialisierung, `BroadcastChannel`, `postMessage` oder Modal- bzw. New-Tab-Launch-Verhalten aendert.
- DO behandle alle Runtime-Targets als Produktionsflaechen: Host, Linked Flow, Calendar Target, Svelte Target, Web-Component-Target und React Target.

## DON'Ts
- Sich bei integrationskritischem Verhalten nicht auf manuelle Spot-Checks verlassen.
- Nicht jeden trivialen Text- oder Doku-Wechsel mit schwergewichtigen E2E-Laeufen blockieren.
- Keine fragilen Tests hinzufuegen, die an zufaelligem Markup haengen, wenn sich stattdessen ein sichtbarer Nutzerfluss pruefen laesst.
- Nicht bei Syntax- oder Build-Checks stoppen, wenn sich ein Journey-Schritt oder eine Cross-Runtime-Interaktion geaendert hat.
- Keine Aenderungen ausliefern, die nur in einer Runtime funktionieren, obwohl die gemeinsame Journey mehrere Runtimes vergleichen soll.

## QA Loop: Website Und Host Shell
- Ziel: Sicherstellen, dass die Host Shell als zentraler Einstiegspunkt stabil bleibt.
- Pruefe Startseite, Navigation, zentrale Journey-Schritte und sichtbare Systemgrenzen.
- Pruefe, dass `index.html`, `app.js` und `styles.css` zusammen weiterhin die beabsichtigte Host-Erfahrung liefern.
- Pruefe nach relevanten Aenderungen mindestens lokal im Browser und bei groesseren Eingriffen zusaetzlich ueber den produktionsnahen Build.
- Beende den Loop erst, wenn Navigation, Kontextanzeige, Layout und zentrale Handlungsaufforderungen sichtbar konsistent funktionieren.

## QA Loop: Multi-Target-Integration
- Ziel: Sicherstellen, dass React, Angular, Svelte und Web Components als echte Integrationspartner zusammenspielen.
- Pruefe Kontextuebergabe vom Host in betroffene Targets und Rueckkanaele vom Target zurueck zum Host.
- Pruefe Linked-, Embedded-, Modal- und New-Tab-Verhalten immer dann, wenn ein Handover-Pfad oder gemeinsamer Kontext angefasst wurde.
- Nutze `npm run test:e2e`, sobald Journey-Schritte, Handover-Logik, Rueckkanal oder Target-Verhalten veraendert wurden.
- Beende den Loop erst, wenn kein Target nur isoliert funktioniert, sondern der uebergreifende Integrationsfluss intakt ist.

## QA Loop: Responsive Und Mobile
- Ziel: Sicherstellen, dass die Demo auf Desktop und Mobile nutzbar bleibt.
- Pruefe betroffene Screens mindestens in einer Desktop- und einer schmalen mobilen Breite.
- Priorisiere Werkstatt-/Serviceprozess, Reisebuchung, Modals, New-Tab-Targets und zusammengesetzte Vergleichsseiten.
- Pruefe, dass Layouts umbrechen, Inhalte lesbar bleiben und primaere Aktionen erreichbar sind.
- Beende den Loop erst, wenn die betroffenen Pfade nicht nur technisch sichtbar, sondern praktisch benutzbar sind.

## QA Loop: Barrierefreiheit Und Sprachkonsistenz
- Ziel: Sicherstellen, dass die Demo zugaenglich bleibt und DE/EN nicht auseinanderlaufen.
- Pruefe Tastaturbedienung, sichtbare Focus-States, Labels, Dialogfokus und verstaendliche Status- bzw. Fehlermeldungen auf betroffenen Screens.
- Pruefe, dass Sprachzustand, Labels, zentrale Begriffe und Locale-nahe Inhalte zwischen Host und Targets konsistent bleiben.
- Fuehre bei UI-nahen Aenderungen mindestens einen kurzen manuellen Check durch, auch wenn kein voller E2E-Lauf noetig ist.
- Beende den Loop erst, wenn weder Accessibility-Basis noch Sprachkonsistenz im betroffenen Nutzerpfad sichtbar gebrochen sind.
