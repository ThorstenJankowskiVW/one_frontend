# Komponenten

## DOs
- DO halte jede App auf ihre Rolle fokussiert: Host Shell, Remote Target, Linked-Flow-Oberflaeche oder Shared Package.
- DO lasse die Host Shell Journey-State, Navigation und Vergleichslogik besitzen.
- DO nutze Shared Contracts und Kontext-Helfer, bevor du app-lokale Varianten hinzufuegst.
- DO halte Targets isoliert und technologie-authentisch, damit jede Runtime ehrlich demonstriert wird.
- DO nutze visuelle Referenzen wie `/Users/dv60tja/projekte/one_frontend/Lavender_Examples`, um Komposition und Oberflaechenwirkung zu schaerfen, ohne die technischen Rollen von Host und Targets zu verwischen.
- DO mache Systemgrenzen in der UI sichtbar, wenn das das Integrationsmuster besser erklaert.
- DO bevorzuge browserfreundliche Komponenten-Schnittstellen, die Framework-Grenzen ueberleben.
- DO halte isolierte Targets fuer Demo und Verifikation eigenstaendig lauffaehig.

## DON'Ts
- Remotes nicht von Host-Interna abhaengig machen.
- Keinen geteilten Journey-State in einzelne Targets verschieben, solange sich das Vergleichsziel nicht bewusst aendert.
- Die Demo nicht in eine grosse shell-gesteuerte App mit nur vorgetaeuschter Runtime-Trennung verwandeln.
- Keine Komponenten-APIs einfuehren, die nur in einem Framework Sinn ergeben, obwohl das Konzept ueber Frameworks hinweg verglichen werden soll.
