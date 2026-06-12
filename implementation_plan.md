# Implementation Plan — Kaia-Skies Website-Optimierung

## Rechercheergebnisse
- Offizielles Impressum (mein.online-impressum.de/kaiaskies/) abgerufen. Der Link „Zweiter Kontaktweg" zeigt dort auf den Anker `#Zweiter_Kontaktweg` → auf unserer Seite wird er als externer Link `https://mein.online-impressum.de/kaiaskies/#Zweiter_Kontaktweg` übernommen.
- Dort zusätzlich angegeben: „Zuständige Regulierungs- und Aufsichtsbehörde: Landesanstalt für Medien Nordrhein-Westfalen, Sitz: Deutschland" → wird mit übernommen.
- Produktwissen (aus Memory, PDFs lokal nicht parsbar): Free = 14 S. Taster (Tools 1–2 von 7, Quick-Win-Atemübung, Angstprofil, Journey-Map). Full = 58 S. Complete Edition (4 Kernängste: Kontrollverlust, Turbulenzen, Absturzangst, Panikattacken an Bord; „When News Fuels Fear"-Kapitel; Top-20-Fragen; Emergency Card; Exposure Ladder). **Keine erfundenen Testimonials** (frühere Composite-Testimonials wurden auf deinen Wunsch gelöscht — kein fabrizierter Social Proof auf der Website).
- Preis der Vollversion wird auf der Website **nicht** beziffert (im Free-PDF auch nicht) — nur „Special Launch Price für Wartelisten-Abonnenten". Sag Bescheid, falls €20 + Launch-Rabatt konkret genannt werden sollen.

## Dateien

### [MODIFY] index.html
1. **Neue Sektion „Complete Edition — Coming Soon"** (nach #workbook, vor Footer):
   - Zweites Buch-Mockup (Gold-Variante) + „Coming Soon"-Badge.
   - Feature-Liste der Vollversion (58 Seiten, 7-Tool-Toolkit komplett, 4 Kernängste, Turbulenzen-/Sicherheitskapitel, Exposure Ladder, Top-20-Fragen, Emergency Card zum Ausschneiden).
   - Hinweis-Box: „Hol dir jetzt das kostenlose Workbook — du bekommst automatisch eine E-Mail zum Launch **+ Special Launch Price**." CTA verlinkt auf denselben systeme.io-Opt-in.
2. **Marketing-Schärfung Bestandssektionen**: Workbook-Sektion bekommt Badge „Tool 1 & 2 von 7 · 14 Seiten", Benefits an echten PDF-Inhalt angepasst; Hero-Sub erwähnt das kostenlose Workbook direkt.
3. **Hero-Scrub flüssiger**:
   - `fastSeek()` entfernen (springt nur auf Keyframes → ruckelt) → präzises `currentTime`.
   - Statt 24fps-Throttle im Scroll-Handler: Scroll setzt nur `targetTime`; eine `requestAnimationFrame`-Loop lerpt `currentTime` sanft Richtung Ziel und seekt erst, wenn der vorherige Seek fertig ist (`seeked`-Gating). Ergebnis: butterweiches Nachziehen statt Frame-Sprünge.
4. Footer-Jahr → 2026.

### [MODIFY] lang.js
- Neue i18n-Keys EN/DE für die Coming-Soon-Sektion (`full.*`) und angepasste `wb.*`/`hero.*`-Texte.
- `footer.copy` → 2026.

### [MODIFY] legal.html
- Impressum-Block (EN + DE) ersetzen durch:
  Kaiaskies Management - Gino Stephan Kümmeke · c/o Online-Impressum #8916 · Europaring 90 · 53757 St Augustin · E-Mail: crew@kaiaskies.com · Link „Zweiter Kontaktweg" → mein.online-impressum.de/kaiaskies/#Zweiter_Kontaktweg
- Aufsichtsbehörde (Landesanstalt für Medien NRW) ergänzen.
- Rechtskorrektur: „§ 5 TMG" → „§ 5 DDG" und „§ 55 Abs. 2 RStV" → „§ 18 Abs. 2 MStV" (TMG/RStV sind außer Kraft).
- Stand: Juni 2026; Footer-Jahr 2026.

### [MODIFY] privacy.html
- Abschnitt 6 (Drittanbieter/Systeme.io) präzisieren: Beim Anfordern des kostenlosen Workbooks wird die E-Mail-Adresse auf systeme.io erhoben und für Workbook-Zustellung + Launch-Benachrichtigung der Vollversion genutzt; Abmeldung jederzeit per Unsubscribe-Link.
- Kontakt-E-Mail crew@kaiaskies.com ergänzen (Abschnitt 10).
- Datum → Juni 2026; Footer-Jahr 2026.

### [MODIFY] terms.html
- §1/§3 um die kommende kostenpflichtige Vollversion ergänzen (Vorankündigung, kein Verkauf über diese Website; Verkauf erfolgt künftig über die Plattform mit eigenen Bedingungen/Widerrufsbelehrung).
- Datum → Juni 2026; Footer-Jahr 2026.

## Nicht geplant
- Keine Änderung an den PDFs oder am systeme.io-Funnel.
- Kein Re-Encoding von hero-scrub.mp4 (falls das Scrubben trotz Code-Fix ruckelt, wäre ein Re-Encode mit dichteren Keyframes der nächste Schritt — sag Bescheid).

**Freigabe?** (Antwort „Yes"/„Ja" → Umsetzung per Checkliste)
