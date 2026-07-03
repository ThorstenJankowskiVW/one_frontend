# Barrierefreiheit

## DOs
- DO nutze `Groupui_Markdown_RAG/Accessibility - GroupUI - Volkswagen Group - Digital Design.md` als lokale Referenz fuer Accessibility-Grundlagen und GroupUI-nahe Erwartungen.
- DO stelle sicher, dass Host, Linked Flow und alle Targets per Tastatur bedienbar bleiben.
- DO halte Fokusreihenfolge logisch und sichtbare Focus-States in allen interaktiven Elementen aufrecht.
- DO nutze semantisches HTML, saubere Labels und zugaengliche Formularstrukturen, bevor du mit ARIA nachbesserst.
- DO sorge dafuer, dass Dialoge, Modals und Overlays den Fokus korrekt uebernehmen und wieder sauber zurueckgeben.
- DO pruefe Kontraste, Fehlermeldungen, Statusanzeigen und interaktive Zustaende so, dass sie nicht nur ueber Farbe verstaendlich sind.
- DO halte Inhalte auch bei Zoom und auf schmalen Viewports nutzbar und lesbar.
- DO nutze sinnvolle `alt`-Texte, wenn Bilder in der Demo Information transportieren.

## DON'Ts
- Keine Interaktion bauen, die nur mit Maus sinnvoll funktioniert.
- Focus-Indikatoren nicht aus optischen Gruenden entfernen oder abschwaechen.
- Platzhaltertexte nicht als Ersatz fuer echte Feldbeschriftungen verwenden.
- Barrierefreiheit nicht nur dem Host ueberlassen, waehrend einzelne Targets unzugaenglich bleiben.
