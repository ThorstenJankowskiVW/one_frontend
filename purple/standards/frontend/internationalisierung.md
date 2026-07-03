# Internationalisierung

## DOs
- DO behandle Deutsch und Englisch als gleichwertige Sprachen der Demo.
- DO halte Sprache, Locale und fachliche Begriffe ueber Host und Targets hinweg konsistent.
- DO fuehre sichtbare Nutzertexte so, dass sie austauschbar bleiben und nicht hart in mehreren Einstiegspunkten verteilt werden.
- DO uebergebe Sprach- oder Locale-Information explizit im gemeinsamen Kontext, wenn ein Target davon abhaengt.
- DO richte Datums-, Zahlen- und Formatierungslogik an der aktiven Locale aus.
- DO dokumentiere, welche Teile bewusst deutsch, englisch oder zweisprachig sind, wenn dies fuer die Demo-Aussage relevant ist.
- DO nutze den Werkstatt-/Serviceprozess und die Reisebuchung in beiden Sprachen nachvollziehbar, statt pro Sprache unterschiedliche Stories zu erfinden.

## DON'Ts
- Keine neue Journey-Stufe einfuehren, deren Texte nur in einem Target uebersetzt sind.
- Keine gemischten Sprachzustaende erzeugen, bei denen Host und Target unterschiedliche aktive Sprache suggerieren.
- Keine Locale-Logik in Einzelfiles verstecken, wenn sie fuer mehrere Targets oder Handover-Pfade relevant ist.
