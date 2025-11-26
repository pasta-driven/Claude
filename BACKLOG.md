# Product Backlog - Claude Kanban Board

## Legende
- 🔴 High Priority
- 🟡 Medium Priority
- 🟢 Low Priority
- ✅ Erledigt
- 🚧 In Arbeit
- 📋 Offen

---

## Epic 1: Basis-Infrastruktur und Projektsetup

### 🔴 US-001: Technologie-Stack festlegen
**Als** Entwickler
**möchte ich** einen klaren Technologie-Stack haben,
**damit** ich mit der Entwicklung beginnen kann.

**Akzeptanzkriterien:**
- Frontend-Framework ausgewählt
- Backend-Technologie definiert
- Datenbank-System festgelegt
- Build-Tools und Entwicklungsumgebung konfiguriert

**Story Points:** 3

---

### 🔴 US-002: Projekt-Struktur aufsetzen
**Als** Entwickler
**möchte ich** eine klare Projektstruktur haben,
**damit** der Code organisiert und wartbar bleibt.

**Akzeptanzkriterien:**
- Ordnerstruktur erstellt
- Package.json / Requirements.txt eingerichtet
- Linting und Formatting konfiguriert
- Git Hooks für Code-Qualität eingerichtet

**Story Points:** 5

---

### 🔴 US-003: Datenbank-Schema entwerfen
**Als** Entwickler
**möchte ich** ein durchdachtes Datenbank-Schema haben,
**damit** alle Entitäten sauber abgebildet werden können.

**Akzeptanzkriterien:**
- Entitäten definiert (User, Board, Column, Card, etc.)
- Beziehungen modelliert
- Migrations-System eingerichtet
- Seed-Daten für Entwicklung erstellt

**Story Points:** 8

---

## Epic 2: Benutzer-Authentifizierung und -Verwaltung

### 🔴 US-004: Benutzerregistrierung
**Als** neuer Nutzer
**möchte ich** mich registrieren können,
**damit** ich das Kanban Board nutzen kann.

**Akzeptanzkriterien:**
- Registrierungsformular mit E-Mail und Passwort
- Passwort-Validierung (Mindestanforderungen)
- E-Mail-Validierung
- Fehlerbehandlung bei bereits existierenden Konten
- Bestätigungs-E-Mail (optional für MVP)

**Story Points:** 8

---

### 🔴 US-005: Benutzer-Login
**Als** registrierter Nutzer
**möchte ich** mich einloggen können,
**damit** ich auf meine Boards zugreifen kann.

**Akzeptanzkriterien:**
- Login-Formular mit E-Mail und Passwort
- Session-Management / JWT-Tokens
- "Eingeloggt bleiben" Option
- Fehlerbehandlung bei falschen Credentials
- Passwort-Hashing im Backend

**Story Points:** 5

---

### 🟡 US-006: Passwort zurücksetzen
**Als** Nutzer
**möchte ich** mein Passwort zurücksetzen können,
**damit** ich wieder Zugriff auf meinen Account erhalte, wenn ich es vergessen habe.

**Akzeptanzkriterien:**
- "Passwort vergessen" Link
- E-Mail mit Reset-Link
- Sicherer Token-basierter Reset-Prozess
- Neues Passwort setzen

**Story Points:** 5

---

## Epic 3: Board-Verwaltung

### 🔴 US-007: Board erstellen
**Als** Nutzer
**möchte ich** ein neues Board erstellen können,
**damit** ich ein Projekt organisieren kann.

**Akzeptanzkriterien:**
- "Neues Board" Button im Dashboard
- Modal/Formular mit Board-Name und Beschreibung
- Board wird dem Nutzer zugeordnet
- Weiterleitung zum neu erstellten Board
- Standard-Spalten werden automatisch erstellt (To Do, In Progress, Done)

**Story Points:** 5

---

### 🔴 US-008: Boards anzeigen
**Als** Nutzer
**möchte ich** alle meine Boards in einer Übersicht sehen,
**damit** ich schnell zu meinen Projekten navigieren kann.

**Akzeptanzkriterien:**
- Dashboard mit Board-Kacheln
- Jede Kachel zeigt Name, Beschreibung und letztes Update
- Click auf Kachel öffnet das Board
- Responsive Layout

**Story Points:** 3

---

### 🟡 US-009: Board bearbeiten
**Als** Board-Owner
**möchte ich** Board-Details bearbeiten können,
**damit** ich Name und Beschreibung anpassen kann.

**Akzeptanzkriterien:**
- Edit-Button im Board-Header
- Modal mit editierbaren Feldern
- Änderungen werden gespeichert
- Validierung der Eingaben

**Story Points:** 3

---

### 🟡 US-010: Board löschen
**Als** Board-Owner
**möchte ich** ein Board löschen können,
**damit** ich nicht mehr benötigte Projekte entfernen kann.

**Akzeptanzkriterien:**
- Delete-Button mit Bestätigungs-Dialog
- Warnung über permanentes Löschen
- Alle zugehörigen Spalten und Karten werden gelöscht
- Weiterleitung zum Dashboard

**Story Points:** 3

---

## Epic 4: Spalten-Verwaltung

### 🔴 US-011: Spalte erstellen
**Als** Nutzer
**möchte ich** neue Spalten zu einem Board hinzufügen können,
**damit** ich meinen Workflow abbilden kann.

**Akzeptanzkriterien:**
- "Neue Spalte" Button
- Inline-Edit oder Modal für Spalten-Name
- Spalte wird am Ende des Boards hinzugefügt
- Spalten-Farbe optional wählbar

**Story Points:** 3

---

### 🟡 US-012: Spalte bearbeiten
**Als** Nutzer
**möchte ich** Spalten umbenennen können,
**damit** ich meinen Workflow anpassen kann.

**Akzeptanzkriterien:**
- Click auf Spalten-Titel aktiviert Edit-Modus
- Enter/Blur speichert Änderung
- ESC bricht ab

**Story Points:** 2

---

### 🟡 US-013: Spalte löschen
**Als** Nutzer
**möchte ich** Spalten löschen können,
**damit** ich nicht benötigte Workflow-Schritte entfernen kann.

**Akzeptanzkriterien:**
- Delete-Icon in Spalten-Header
- Bestätigungs-Dialog wenn Karten enthalten sind
- Option: Karten verschieben oder mitlöschen

**Story Points:** 3

---

### 🟡 US-014: Spalten-Reihenfolge ändern
**Als** Nutzer
**möchte ich** Spalten per Drag-and-Drop neu anordnen können,
**damit** ich meinen Workflow optimal darstellen kann.

**Akzeptanzkriterien:**
- Drag-Handle an Spalten-Header
- Visuelle Feedback beim Ziehen
- Drop-Zone Indikatoren
- Position wird gespeichert

**Story Points:** 5

---

## Epic 5: Karten-Verwaltung (Core Feature)

### 🔴 US-015: Karte erstellen
**Als** Nutzer
**möchte ich** schnell neue Karten in Spalten erstellen können,
**damit** ich Aufgaben erfassen kann.

**Akzeptanzkriterien:**
- "+" Button am Ende jeder Spalte
- Quick-Add: Nur Titel eingeben und Enter
- Karte wird erstellt und ist sofort sichtbar
- Optional: Modal für detaillierte Eingabe

**Story Points:** 5

---

### 🔴 US-016: Karte verschieben (Drag-and-Drop)
**Als** Nutzer
**möchte ich** Karten per Drag-and-Drop zwischen Spalten verschieben können,
**damit** ich den Fortschritt von Aufgaben aktualisieren kann.

**Akzeptanzkriterien:**
- Karten sind draggable
- Visuelle Feedback beim Ziehen
- Drop in andere Spalten möglich
- Position innerhalb Spalte änderbar
- Smooth Animationen
- Touch-Support für mobile Geräte

**Story Points:** 13

---

### 🔴 US-017: Karten-Details anzeigen
**Als** Nutzer
**möchte ich** Details einer Karte in einem Modal sehen,
**damit** ich alle Informationen auf einen Blick habe.

**Akzeptanzkriterien:**
- Click auf Karte öffnet Detail-Modal
- Anzeige: Titel, Beschreibung, Labels, Assignees, Datum
- Aktivitäts-Log/Historie
- Close-Button und ESC-Key Support

**Story Points:** 5

---

### 🟡 US-018: Karte bearbeiten
**Als** Nutzer
**möchte ich** Karten-Details bearbeiten können,
**damit** ich Informationen aktualisieren kann.

**Akzeptanzkriterien:**
- Inline-Editing im Detail-Modal
- Titel und Beschreibung editierbar
- Rich-Text Editor für Beschreibung (optional)
- Auto-Save oder expliziter Save-Button
- Änderungs-Timestamp

**Story Points:** 5

---

### 🟡 US-019: Karte löschen
**Als** Nutzer
**möchte ich** Karten löschen können,
**damit** ich nicht mehr relevante Aufgaben entfernen kann.

**Akzeptanzkriterien:**
- Delete-Button im Karten-Modal
- Bestätigungs-Dialog
- Karte wird permanent gelöscht
- Optional: Archivierung statt Löschung

**Story Points:** 2

---

### 🟡 US-020: Karten-Beschreibung hinzufügen
**Als** Nutzer
**möchte ich** detaillierte Beschreibungen zu Karten hinzufügen,
**damit** ich Kontext und Anforderungen dokumentieren kann.

**Akzeptanzkriterien:**
- Textfeld für Beschreibung im Karten-Modal
- Markdown-Unterstützung (optional)
- Formatierung (fett, kursiv, Listen, etc.)
- Beschreibung wird gespeichert und angezeigt

**Story Points:** 3

---

## Epic 6: Labels und Tags

### 🟡 US-021: Labels erstellen und verwalten
**Als** Nutzer
**möchte ich** Labels erstellen können,
**damit** ich Karten kategorisieren kann.

**Akzeptanzkriterien:**
- Label-Verwaltung in Board-Settings
- Name und Farbe für Labels
- Vordefinierte Farben zur Auswahl
- Labels erstellen, bearbeiten, löschen

**Story Points:** 5

---

### 🟡 US-022: Labels zu Karten hinzufügen
**Als** Nutzer
**möchte ich** Karten mit Labels versehen,
**damit** ich sie kategorisieren und filtern kann.

**Akzeptanzkriterien:**
- Label-Auswahl im Karten-Modal
- Multi-Select: Mehrere Labels pro Karte
- Labels werden auf Karten-Vorschau angezeigt
- Farb-Codierung sichtbar

**Story Points:** 3

---

### 🟢 US-023: Nach Labels filtern
**Als** Nutzer
**möchte ich** Karten nach Labels filtern können,
**damit** ich bestimmte Kategorien fokussieren kann.

**Akzeptanzkriterien:**
- Filter-Dropdown im Board-Header
- Multi-Select für Labels
- Gefilterte Ansicht zeigt nur passende Karten
- "Filter zurücksetzen" Button

**Story Points:** 5

---

## Epic 7: Team-Kollaboration

### 🟡 US-024: Nutzer zu Board einladen
**Als** Board-Owner
**möchte ich** andere Nutzer zu meinem Board einladen können,
**damit** wir gemeinsam arbeiten können.

**Akzeptanzkriterien:**
- "Team einladen" Button in Board-Settings
- E-Mail-Eingabe für Einladungen
- Einladungs-E-Mail wird versendet
- Einladungslink mit Token
- Anzeige aller Board-Mitglieder

**Story Points:** 8

---

### 🟡 US-025: Karten zuweisen
**Als** Nutzer
**möchte ich** Karten Teammitgliedern zuweisen können,
**damit** klar ist, wer woran arbeitet.

**Akzeptanzkriterien:**
- Assignee-Auswahl im Karten-Modal
- Dropdown mit allen Board-Mitgliedern
- Multiple Assignees möglich
- Avatar/Initial wird auf Karte angezeigt

**Story Points:** 5

---

### 🟢 US-026: Kommentare zu Karten
**Als** Nutzer
**möchte ich** Kommentare zu Karten hinzufügen,
**damit** ich mit dem Team diskutieren kann.

**Akzeptanzkriterien:**
- Kommentar-Bereich im Karten-Modal
- Textfeld für neue Kommentare
- Kommentare mit Autor und Timestamp
- Chronologische Sortierung
- Kommentare bearbeiten und löschen (eigene)

**Story Points:** 8

---

### 🟢 US-027: Echtzeit-Updates
**Als** Nutzer
**möchte ich** Änderungen anderer Nutzer in Echtzeit sehen,
**damit** alle immer auf dem aktuellen Stand sind.

**Akzeptanzkriterien:**
- WebSocket-Verbindung zum Server
- Karten-Bewegungen werden live synchronisiert
- Neue Karten erscheinen sofort
- Änderungen von anderen Nutzern sichtbar
- Konflikt-Handling bei simultanen Edits

**Story Points:** 13

---

## Epic 8: Such- und Filterfunktionen

### 🟢 US-028: Karten suchen
**Als** Nutzer
**möchte ich** nach Karten suchen können,
**damit** ich schnell spezifische Aufgaben finde.

**Akzeptanzkriterien:**
- Suchfeld im Board-Header
- Suche in Titel und Beschreibung
- Live-Suche (während des Tippens)
- Matching-Karten werden hervorgehoben
- Nicht-matching Karten ausgeblendet oder gedimmt

**Story Points:** 5

---

### 🟢 US-029: Nach Assignees filtern
**Als** Nutzer
**möchte ich** Karten nach zugewiesenen Personen filtern,
**damit** ich sehe, woran jemand arbeitet.

**Akzeptanzkriterien:**
- Filter-Option für Assignees
- Auswahl einzelner oder mehrerer Personen
- Gefilterte Ansicht
- "Meine Aufgaben" Schnellfilter

**Story Points:** 3

---

## Epic 9: Zusatzfeatures

### 🟢 US-030: Due Dates (Fälligkeitsdaten)
**Als** Nutzer
**möchte ich** Fälligkeitsdaten zu Karten hinzufügen,
**damit** ich Deadlines im Blick behalte.

**Akzeptanzkriterien:**
- Datepicker im Karten-Modal
- Datum wird auf Karte angezeigt
- Visuelle Warnung bei überfälligen Karten
- Optional: Benachrichtigungen vor Deadline

**Story Points:** 5

---

### 🟢 US-031: Checklisten in Karten
**Als** Nutzer
**möchte ich** Checklisten zu Karten hinzufügen,
**damit** ich Teilaufgaben tracken kann.

**Akzeptanzkriterien:**
- Checklist-Sektion im Karten-Modal
- Items hinzufügen, bearbeiten, löschen
- Checkbox zum Abhaken
- Fortschritts-Anzeige (z.B. "3/5 erledigt")
- Fortschritt auf Karten-Vorschau sichtbar

**Story Points:** 8

---

### 🟢 US-032: Datei-Anhänge
**Als** Nutzer
**möchte ich** Dateien an Karten anhängen können,
**damit** ich relevante Dokumente zentral ablegen kann.

**Akzeptanzkriterien:**
- Upload-Bereich im Karten-Modal
- Drag-and-Drop File Upload
- Unterstützte Formate: Bilder, PDFs, Dokumente
- Dateigröße-Limit (z.B. 10MB)
- Vorschau für Bilder
- Download-Funktion
- Anhänge löschen

**Story Points:** 13

---

### 🟢 US-033: Benachrichtigungen
**Als** Nutzer
**möchte ich** Benachrichtigungen über wichtige Aktivitäten erhalten,
**damit** ich nichts verpasse.

**Akzeptanzkriterien:**
- Benachrichtigung bei Zuweisung
- Benachrichtigung bei Kommentaren auf eigenen Karten
- Benachrichtigung bei @Mentions
- In-App Notification Center
- Optional: E-Mail Benachrichtigungen
- Benachrichtigungs-Einstellungen

**Story Points:** 13

---

### 🟢 US-034: Board-Vorlagen
**Als** Nutzer
**möchte ich** Boards aus Vorlagen erstellen können,
**damit** ich schnell mit gängigen Workflows starten kann.

**Akzeptanzkriterien:**
- Vorlagen-Auswahl beim Board-Erstellen
- Vordefinierte Templates (z.B. Scrum, Kanban, Bug Tracking)
- Template erstellt Board mit passenden Spalten
- Optional: Custom Templates speichern

**Story Points:** 8

---

### 🟢 US-035: Archivierung
**Als** Nutzer
**möchte ich** Karten archivieren statt löschen,
**damit** ich abgeschlossene Aufgaben ausblenden aber behalten kann.

**Akzeptanzkriterien:**
- "Archivieren" Option für Karten
- Archivierte Karten werden ausgeblendet
- "Archiv anzeigen" Toggle
- Karten aus Archiv wiederherstellen
- Archivierte Karten endgültig löschen

**Story Points:** 5

---

### 🟢 US-036: Board Export
**Als** Nutzer
**möchte ich** mein Board exportieren können,
**damit** ich Backups habe oder Daten außerhalb nutzen kann.

**Akzeptanzkriterien:**
- Export-Funktion in Board-Settings
- Format: JSON oder CSV
- Alle Karten, Spalten, Labels exportiert
- Download-Link oder direkter Download

**Story Points:** 5

---

### 🟢 US-037: Dark Mode
**Als** Nutzer
**möchte ich** zwischen hellem und dunklem Design wechseln,
**damit** ich auch nachts angenehm arbeiten kann.

**Akzeptanzkriterien:**
- Toggle in User-Settings
- Komplettes UI passt sich an
- Präferenz wird gespeichert
- Optional: System-Theme automatisch übernehmen

**Story Points:** 5

---

### 🟢 US-038: Mobile Responsive Design
**Als** Nutzer
**möchte ich** das Kanban Board auch auf dem Smartphone nutzen,
**damit** ich unterwegs arbeiten kann.

**Akzeptanzkriterien:**
- Responsive Layout für alle Screen-Größen
- Touch-optimierte Bedienung
- Horizontal Scrolling für Spalten auf Mobile
- Vereinfachtes UI auf kleinen Displays
- Touch Drag-and-Drop funktioniert

**Story Points:** 13

---

## Epic 10: Administration und Settings

### 🟡 US-039: Benutzer-Profil
**Als** Nutzer
**möchte ich** mein Profil bearbeiten können,
**damit** ich Name, Avatar und Einstellungen anpassen kann.

**Akzeptanzkriterien:**
- Profil-Seite mit editierbaren Feldern
- Avatar Upload
- Name, E-Mail ändern
- Passwort ändern
- Theme-Einstellungen

**Story Points:** 5

---

### 🟡 US-040: Board-Berechtigungen
**Als** Board-Owner
**möchte ich** Rollen und Berechtigungen vergeben,
**damit** ich steuern kann, wer was tun darf.

**Akzeptanzkriterien:**
- Rollen: Owner, Admin, Member, Viewer
- Owner: Volle Rechte inkl. Löschen
- Admin: Alles außer Board löschen
- Member: Karten und Spalten bearbeiten
- Viewer: Nur lesen
- Rollen in Team-Übersicht zuweisen

**Story Points:** 8

---

## Zusammenfassung

**Total User Stories:** 40
**Total Story Points (geschätzt):** ~245

### Priorität Breakdown:
- 🔴 High Priority: 11 Stories (MVP)
- 🟡 Medium Priority: 15 Stories (Phase 2)
- 🟢 Low Priority: 14 Stories (Nice-to-have)

### Empfohlener MVP Scope (Phase 1):
User Stories US-001 bis US-017 bilden ein funktionierendes Minimal Viable Product mit:
- Basis-Setup
- Authentifizierung
- Board-Verwaltung
- Spalten-Verwaltung
- Karten mit Drag-and-Drop

**MVP Story Points:** ~75 Points

---

## Notizen

- Story Points basieren auf Fibonacci-Skala (1, 2, 3, 5, 8, 13)
- Technische Schulden und Bug Fixes sind hier nicht aufgeführt
- Jede User Story sollte später in Tasks aufgebrochen werden
- Regelmäßiges Backlog Refinement empfohlen
- Diese Liste ist ein lebendiges Dokument und wird sich weiterentwickeln
