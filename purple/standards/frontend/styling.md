# Styling

## DOs
- DO nutze GroupUI-Komponenten, Tokens und CSS-Konventionen verpflichtend als Standardsprache der UI.
- DO nutze `Groupui_Markdown_RAG/` als lokale Source of Truth fuer GroupUI-Komponenten, Tokens, Navigation und Design-System-Regeln.
- DO nutze `/Users/dv60tja/projekte/one_frontend/Lavender_Examples` als visuelle Orientierung fuer Look, Rhythmus und Seitenwirkung, wenn neue UI-Flaechen gestaltet oder ueberarbeitet werden.
- DO halte Styling einfach, lesbar und kompatibel mit mehreren Runtime-Targets.
- DO nutze lokales CSS fuer Layout und integrationsspezifische Darstellung, wo GroupUI kein passendes Muster liefert.
- DO bewahre sichtbare Konsistenz zwischen Host und Targets, auch wenn unterschiedliche Frameworks eingesetzt werden.

## DON'Ts
- Kein zweites konkurrierendes Design System einfuehren.
- GroupUI-Verhalten oder Design-System-Annahmen nicht aus Erinnerung ableiten, wenn die lokale GroupUI-Doku im Repo verfuegbar ist.
- Screenshot-Beispiele nicht als technische API-, Komponenten- oder Token-Spezifikation behandeln und nicht 1:1 nachbauen muessen.
- Kein zentrales Layout-Verhalten in frameworkspezifischen Styling-Tools verstecken.
- Demo-Screens nicht so stylen, dass unklar wird, was Host, Target oder geteiltes Muster ist.
