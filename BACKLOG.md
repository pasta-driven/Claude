# Product Backlog - Claude Digital Whiteboard

## Legende
- 🔴 High Priority (MVP)
- 🟡 Medium Priority (Phase 2)
- 🟢 Low Priority (Nice-to-have)
- ✅ Erledigt
- 🚧 In Arbeit
- 📋 Offen

---

## Epic 1: Basis-Infrastruktur und Canvas

### 🔴 US-001: Technologie-Stack festlegen
**Als** Entwickler
**möchte ich** einen geeigneten Tech-Stack für ein Whiteboard-Tool haben,
**damit** ich mit der Entwicklung beginnen kann.

**Akzeptanzkriterien:**
- Frontend-Framework mit Canvas-Support (React + Canvas API, oder Fabric.js, Konva, etc.)
- Backend für Echtzeit-Kollaboration (Node.js + Socket.io, oder Yjs, etc.)
- Datenbank für Persistierung
- Evaluierung: Excalidraw-Technologie als Basis?

**Story Points:** 5

---

### 🔴 US-002: Unendliches Canvas implementieren
**Als** Nutzer
**möchte ich** ein unendliches, zoomfähiges Canvas haben,
**damit** ich wie auf einem echten Whiteboard unbegrenzt Platz habe.

**Akzeptanzkriterien:**
- Canvas ohne feste Größenbeschränkung
- Smooth Pan-Funktionalität (Drag mit Maus/Touch)
- Zoom in/out mit Mausrad oder Pinch-Geste
- Zoom-Level-Anzeige
- "Fit to screen" Button
- Performance: 60fps bei normaler Nutzung

**Story Points:** 13

---

### 🔴 US-003: Datenmodell für Whiteboard-Objekte
**Als** Entwickler
**möchte ich** ein flexibles Datenmodell haben,
**damit** verschiedene Whiteboard-Elemente (Post-its, Zeichnungen, etc.) gespeichert werden können.

**Akzeptanzkriterien:**
- Schema für Post-its (Position, Größe, Farbe, Text, Rotation)
- Schema für Zeichnungen (Pfade, Striche, Formen)
- Schema für Bereiche/Swimlanes
- Versionierung für Echtzeit-Updates
- Migrations-System

**Story Points:** 8

---

## Epic 2: Virtuelle Post-its

### 🔴 US-004: Post-it erstellen
**Als** Nutzer
**möchte ich** schnell Post-its auf dem Canvas erstellen können,
**damit** ich Aufgaben wie auf einem echten Board festhalten kann.

**Akzeptanzkriterien:**
- Doppelklick auf Canvas erstellt neues Post-it
- Oder: "Neues Post-it" Button in Toolbar
- Post-it erscheint an Cursor-Position
- Sofort editierbar (Auto-Focus auf Text)
- Standard-Größe und -Farbe

**Story Points:** 5

---

### 🔴 US-005: Post-it bearbeiten
**Als** Nutzer
**möchte ich** Text auf Post-its schreiben und formatieren,
**damit** ich Aufgaben beschreiben kann.

**Akzeptanzkriterien:**
- Click auf Post-it aktiviert Edit-Modus
- Mehrzeiliger Text möglich
- Einfache Formatierung (fett, kursiv - optional für MVP)
- Auto-Resize bei viel Text (optional)
- Klick außerhalb beendet Edit-Modus

**Story Points:** 5

---

### 🔴 US-006: Post-it verschieben
**Als** Nutzer
**möchte ich** Post-its frei auf dem Canvas bewegen,
**damit** ich sie wie auf einem echten Board anordnen kann.

**Akzeptanzkriterien:**
- Drag-and-Drop für Post-its
- Smooth Movement ohne Ruckeln
- Visuelle Feedback beim Dragging (Shadow, Lift-Effekt)
- Position wird automatisch gespeichert
- Multi-Select und gemeinsames Verschieben (später)

**Story Points:** 8

---

### 🟡 US-007: Post-it Farben
**Als** Nutzer
**möchte ich** Post-it Farben ändern können,
**damit** ich visuell kategorisieren kann (wie echte bunte Post-its).

**Akzeptanzkriterien:**
- Color-Picker oder Farb-Palette
- Typische Post-it Farben: Gelb, Rosa, Blau, Grün, Orange
- Rechtsklick oder Button im Post-it
- Farbe wird sofort aktualisiert
- Farbe wird gespeichert

**Story Points:** 3

---

### 🟡 US-008: Post-it Größe anpassen
**Als** Nutzer
**möchte ich** Post-it Größen ändern können,
**damit** ich wichtige oder detaillierte Items größer machen kann.

**Akzeptanzkriterien:**
- Resize-Handles an Post-it Ecken
- Proportionales oder freies Resizing
- Minimale und maximale Größe
- Text wird skaliert oder wrapped

**Story Points:** 5

---

### 🟡 US-009: Post-it rotieren
**Als** Nutzer
**möchte ich** Post-its leicht rotieren können,
**damit** das Board organischer aussieht (wie ein echtes Board).

**Akzeptanzkriterien:**
- Rotation-Handle am Post-it
- Smooth Rotation mit Maus
- Rotation in Grad gespeichert
- Optional: Leichte zufällige Rotation beim Erstellen

**Story Points:** 3

---

### 🟡 US-010: Post-it löschen
**Als** Nutzer
**möchte ich** Post-its einfach löschen können,
**damit** ich das Board aufräumen kann.

**Akzeptanzkriterien:**
- Delete-Button im Post-it (bei Hover/Selection)
- Oder: Tastatur Delete/Backspace
- Bestätigung optional (bei Einstellungen)
- Optional: Undo-Funktion

**Story Points:** 2

---

## Epic 3: Zeichenwerkzeuge (Excalidraw-Style)

### 🔴 US-011: Freihand-Zeichnen
**Als** Nutzer
**möchte ich** frei auf dem Canvas zeichnen können,
**damit** ich wie auf einem echten Whiteboard skizzieren kann.

**Akzeptanzkriterien:**
- Pencil/Pen Tool in Toolbar
- Smooth Strokes (Brush-Engine)
- Stiftdicke einstellbar
- Farbe wählbar
- Druck-Sensitivität (optional, bei Stylus)

**Story Points:** 8

---

### 🟡 US-012: Formen zeichnen
**Als** Nutzer
**möchte ich** einfache Formen zeichnen können,
**damit** ich Bereiche und Strukturen visualisieren kann.

**Akzeptanzkriterien:**
- Rechteck-Tool
- Kreis/Ellipse-Tool
- Linie-Tool
- Pfeil-Tool
- Formen mit Drag erstellen
- Outline oder gefüllt

**Story Points:** 8

---

### 🟡 US-013: Bereiche/Swimlanes zeichnen
**Als** Nutzer
**möchte ich** Bereiche auf dem Board markieren können,
**damit** ich Workflow-Phasen abbilden kann (To Do, In Progress, Done, etc.).

**Akzeptanzkriterien:**
- Rechteck-Bereich mit Label
- Hintergrundfarbe/Pattern
- Semi-transparent, damit Post-its sichtbar bleiben
- Bereiche können überlappen
- Größe anpassbar

**Story Points:** 5

---

### 🟡 US-014: Text direkt auf Canvas
**Als** Nutzer
**möchte ich** Text direkt auf das Canvas schreiben können,
**damit** ich Überschriften und Labels erstellen kann.

**Akzeptanzkriterien:**
- Text-Tool in Toolbar
- Click platziert Textfeld
- Schriftgröße und -farbe einstellbar
- Kein Hintergrund (transparenter Text)
- Text verschiebbar

**Story Points:** 5

---

### 🟢 US-015: Radiergummi
**Als** Nutzer
**möchte ich** Zeichnungen löschen können,
**damit** ich Fehler korrigieren kann.

**Akzeptanzkriterien:**
- Eraser-Tool in Toolbar
- Löscht Striche beim Darüberstreichen
- Löscht nur Zeichnungen, nicht Post-its
- Größe einstellbar

**Story Points:** 5

---

### 🟢 US-016: Handschrift-Look (Excalidraw-Style)
**Als** Nutzer
**möchte ich** dass Zeichnungen einen handgezeichneten Look haben,
**damit** das Board authentisch und organisch wirkt.

**Akzeptanzkriterien:**
- Rough.js oder ähnliche Library
- "Sketchy" Look für Formen
- Optional ein-/ausschaltbar
- Konsistenter Stil

**Story Points:** 8

---

## Epic 4: Echte Kanban-Prinzipien

### 🟡 US-017: WIP-Limits definieren
**Als** Team
**möchte ich** Work-in-Progress Limits für Bereiche setzen,
**damit** wir Fokus bewahren und Überlastung vermeiden.

**Akzeptanzkriterien:**
- WIP-Limit pro Bereich/Swimlane einstellbar
- Visuelles Feedback bei Überschreitung (z.B. roter Rahmen)
- Counter: "3/5 Items"
- Optional: Warnung beim Verschieben über Limit

**Story Points:** 8

---

### 🟡 US-018: Blocker visualisieren
**Als** Nutzer
**möchte ich** blockierte Aufgaben markieren können,
**damit** Impediments sichtbar werden.

**Akzeptanzkriterien:**
- Blocker-Icon oder roter Marker auf Post-it
- Grund/Beschreibung des Blockers hinzufügen
- Geblockte Items visuell hervorgehoben
- Anzahl Blocker im Board sichtbar

**Story Points:** 5

---

### 🟢 US-019: Flow-Metriken erfassen
**Als** Team
**möchte ich** automatisch Flow-Metriken erfassen,
**damit** wir unseren Prozess verbessern können.

**Akzeptanzkriterien:**
- Cycle Time: Zeit von "In Progress" bis "Done"
- Lead Time: Zeit von "To Do" bis "Done"
- Throughput: Anzahl abgeschlossener Items pro Zeiteinheit
- Automatische Timestamp-Erfassung bei Verschiebungen
- Daten für Auswertung gespeichert

**Story Points:** 13

---

### 🟢 US-020: Cumulative Flow Diagram
**Als** Team
**möchte ich** ein Cumulative Flow Diagram sehen,
**damit** ich Engpässe und WIP-Trends erkennen kann.

**Akzeptanzkriterien:**
- CFD-Visualisierung als Overlay oder separates Panel
- Farbige Bereiche für jede Workflow-Phase
- Zeitachse konfigurierbar (letzte 7/30/90 Tage)
- Export als Bild (optional)

**Story Points:** 13

---

### 🟢 US-021: Policy-Dokumentation
**Als** Team
**möchte ich** Prozess-Policies direkt am Board dokumentieren,
**damit** alle das gleiche Verständnis haben (Definition of Done, etc.).

**Akzeptanzkriterien:**
- Info-Icon an Bereichen
- Policy-Text editierbar
- Markdown-Support
- Sichtbar beim Hover oder Click

**Story Points:** 5

---

## Epic 5: Team-Kollaboration in Echtzeit

### 🔴 US-022: Echtzeit-Synchronisation
**Als** Nutzer
**möchte ich** Änderungen anderer Teammitglieder sofort sehen,
**damit** wir wirklich gemeinsam am Board arbeiten können.

**Akzeptanzkriterien:**
- WebSocket oder CRDT-basierte Sync (Yjs)
- Post-it Bewegungen live sichtbar
- Neue Post-its erscheinen sofort
- Änderungen an Text sofort sichtbar
- Konflikt-Resolution bei simultanen Edits

**Story Points:** 21

---

### 🟡 US-023: Cursor-Positionen anderer Nutzer
**Als** Nutzer
**möchte ich** sehen, wo andere Teammitglieder gerade sind,
**damit** ich weiß, woran sie arbeiten.

**Akzeptanzkriterien:**
- Cursors anderer Nutzer als farbige Marker
- Name/Initial neben Cursor
- Smooth Movement der fremden Cursor
- Automatisches Ausblenden bei Inaktivität

**Story Points:** 8

---

### 🟡 US-024: Nutzer zu Board einladen
**Als** Board-Owner
**möchte ich** Teammitglieder einladen,
**damit** wir gemeinsam arbeiten können.

**Akzeptanzkriterien:**
- Share-Button mit Link
- Link-basierte Einladung (kein komplexes User-Management für MVP)
- Oder: E-Mail-Einladung
- Board-Zugriffsliste
- Optional: Read-only vs. Edit-Rechte

**Story Points:** 8

---

### 🟢 US-025: Kommentare und Diskussionen
**Als** Nutzer
**möchte ich** Kommentare zu Post-its hinzufügen,
**damit** wir am Board diskutieren können.

**Akzeptanzkriterien:**
- Comment-Thread an Post-its
- @Mentions für Teammitglieder
- Benachrichtigung bei neuen Kommentaren
- Kommentar-Count auf Post-it sichtbar

**Story Points:** 8

---

### 🟢 US-026: "Follow-Me" Modus
**Als** Nutzer
**möchte ich** den Viewport eines anderen Nutzers folgen,
**damit** wir gemeinsam durchs Board navigieren können (z.B. bei Präsentationen).

**Akzeptanzkriterien:**
- "Follow [Name]" Button
- Viewport synchronisiert sich mit anderem Nutzer
- Zoom und Pan übernommen
- Jederzeit beendbar

**Story Points:** 5

---

## Epic 6: Benutzer-Authentifizierung

### 🔴 US-027: Einfache Registrierung
**Als** Nutzer
**möchte ich** mich schnell registrieren können,
**damit** ich eigene Boards erstellen kann.

**Akzeptanzkriterien:**
- Registrierung mit E-Mail + Passwort
- Oder: Social Login (Google, GitHub - optional)
- Minimale Daten erforderlich
- Email-Verification (optional für MVP)

**Story Points:** 8

---

### 🔴 US-028: Login
**Als** Nutzer
**möchte ich** mich einloggen,
**damit** ich auf meine Boards zugreifen kann.

**Akzeptanzkriterien:**
- Login mit E-Mail + Passwort
- Session-Management / JWT
- "Remember me" Option
- Fehlerbehandlung

**Story Points:** 5

---

### 🟡 US-029: Board-Übersicht
**Als** Nutzer
**möchte ich** alle meine Boards in einer Liste sehen,
**damit** ich schnell navigieren kann.

**Akzeptanzkriterien:**
- Dashboard mit Board-Thumbnails/Liste
- Board-Name, letztes Update, Team-Größe
- "Neues Board" Button
- Suche/Filter (optional)

**Story Points:** 5

---

## Epic 7: Erweiterte Features

### 🟢 US-030: Templates / Board-Vorlagen
**Als** Nutzer
**möchte ich** vorkonfigurierte Kanban-Templates nutzen,
**damit** ich schnell starten kann.

**Akzeptanzkriterien:**
- Template-Gallery beim Board-Erstellen
- Vorlagen: Basic Kanban, Scrum Board, Bug Tracking, Value Stream
- Template lädt vordefinierte Bereiche und Beispiel-Post-its
- Custom Templates speichern

**Story Points:** 8

---

### 🟢 US-031: Board-Export
**Als** Nutzer
**möchte ich** das Board als Bild oder PDF exportieren,
**damit** ich es in Präsentationen nutzen kann.

**Akzeptanzkriterien:**
- Export als PNG oder SVG
- Optional: PDF-Export
- Ganzes Board oder aktueller Viewport
- Download-Button

**Story Points:** 5

---

### 🟢 US-032: Versionierung / History
**Als** Nutzer
**möchte ich** frühere Versionen des Boards sehen,
**damit** ich Änderungen nachvollziehen kann.

**Akzeptanzkriterien:**
- Snapshot-basierte History
- Timeline-View der Änderungen
- Wiederherstellen früherer Versionen
- Automatische Snapshots (z.B. stündlich)

**Story Points:** 13

---

### 🟢 US-033: Bilder und Attachments
**Als** Nutzer
**möchte ich** Bilder auf das Board ziehen,
**damit** ich visuell arbeiten kann (Screenshots, Mockups, etc.).

**Akzeptanzkriterien:**
- Drag-and-Drop für Bilder
- Bilder platzierbar auf Canvas
- Größe anpassbar
- Unterstützte Formate: PNG, JPG, GIF, SVG

**Story Points:** 8

---

### 🟢 US-034: Keyboard Shortcuts
**Als** Power-User
**möchte ich** Shortcuts nutzen,
**damit** ich schneller arbeiten kann.

**Akzeptanzkriterien:**
- Shortcuts für Tools (P = Pen, R = Rectangle, T = Text, etc.)
- Shortcuts für Aktionen (Ctrl+C/V, Delete, Undo/Redo)
- Shortcut-Übersicht (? oder Help)
- Konfigurierbar (optional)

**Story Points:** 5

---

### 🟢 US-035: Dark Mode
**Als** Nutzer
**möchte ich** einen dunklen Modus haben,
**damit** ich auch abends angenehm arbeiten kann.

**Akzeptanzkriterien:**
- Toggle in Settings
- Dunkler Canvas-Hintergrund
- Post-it Farben angepasst
- UI konsistent dunkel

**Story Points:** 5

---

### 🟢 US-036: Mobile Support
**Als** Nutzer
**möchte ich** das Board auch auf Tablet/Smartphone nutzen,
**damit** ich unterwegs Zugriff habe.

**Akzeptanzkriterien:**
- Touch-Gesten: Pan, Zoom, Tap
- Responsives UI
- Touch-optimierte Toolbar
- Eingeschränkte Funktionalität akzeptabel (v.a. Read-only)

**Story Points:** 13

---

### 🟢 US-037: Suche auf dem Board
**Als** Nutzer
**möchte ich** nach Post-it Inhalten suchen,
**damit** ich schnell Informationen finde.

**Akzeptanzkriterien:**
- Suchfeld in Toolbar
- Live-Search
- Matching Post-its hervorgehoben
- Viewport springt zu Treffern

**Story Points:** 5

---

### 🟢 US-038: Post-it Assignees (Optional)
**Als** Team
**möchte ich** Post-its Personen zuweisen,
**damit** klar ist, wer woran arbeitet.

**Akzeptanzkriterien:**
- Avatar/Initial auf Post-it
- Auswahl aus Team-Mitgliedern
- Filter nach Assignee
- Optional: Avatar-Sticker platzieren

**Story Points:** 5

---

### 🟢 US-039: Grid und Snapping (Optional)
**Als** Nutzer
**möchte ich** ein Raster haben und Post-its daran ausrichten,
**damit** das Board ordentlicher aussieht.

**Akzeptanzkriterien:**
- Optional sichtbares Grid
- Snap-to-Grid beim Verschieben
- Snap-Toleranz einstellbar
- Ein-/Ausschaltbar

**Story Points:** 3

---

### 🟢 US-040: Undo/Redo
**Als** Nutzer
**möchte ich** Aktionen rückgängig machen können,
**damit** ich Fehler korrigieren kann.

**Akzeptanzkriterien:**
- Undo: Strg+Z
- Redo: Strg+Y
- History-Stack für Aktionen
- Funktioniert für Bewegungen, Erstellung, Löschung

**Story Points:** 8

---

## Zusammenfassung

**Total User Stories:** 40
**Total Story Points (geschätzt):** ~300

### Priorität Breakdown:
- 🔴 High Priority (MVP): 8 Stories (~75 Points)
- 🟡 Medium Priority (Phase 2): 12 Stories (~90 Points)
- 🟢 Low Priority (Nice-to-have): 20 Stories (~135 Points)

### Empfohlener MVP Scope (Phase 1):

**Core Whiteboard Experience:**
- US-001: Tech-Stack
- US-002: Unendliches Canvas
- US-003: Datenmodell
- US-004-006: Post-its (Erstellen, Bearbeiten, Verschieben)
- US-011: Freihand-Zeichnen
- US-022: Echtzeit-Sync
- US-027-028: Auth

**MVP Umfang:** ~75 Story Points

Dies ergibt ein funktionierendes digitales Whiteboard mit Post-its, Zeichenfunktion und Echtzeit-Kollaboration - der Kern des "echten Whiteboard-Gefühls".

### Phase 2 Focus:
- Erweiterte Zeichenwerkzeuge (Bereiche, Formen)
- Kanban-Prinzipien (WIP-Limits, Blocker)
- Post-it Anpassungen (Farben, Rotation, Größe)

### Phase 3 Focus:
- Flow-Metriken und Analytics
- Erweiterte Features (Templates, Export, History)
- Polish (Dark Mode, Shortcuts, Mobile)

---

## Notizen

- **Inspiration**: Excalidraw (für Zeichenwerkzeuge und Look), Miro/FigJam (für Kollaboration), echte Kanban-Boards (Toyota-Prinzipien)
- **Differenzierung**: Fokus auf Whiteboard-Feeling statt starrer Strukturen, echte Kanban-Prinzipien statt nur Trello-Clone
- **Technische Herausforderungen**: Echtzeit-Sync bei vielen gleichzeitigen Nutzern, Performance bei großen Boards, CRDT-Implementation
- Story Points basieren auf Fibonacci (1, 2, 3, 5, 8, 13, 21)
- Diese Liste ist ein lebendiges Dokument und wird sich weiterentwickeln
