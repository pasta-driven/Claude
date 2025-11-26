# Claude - Digitales Kanban Board

Ein digitales Whiteboard, das das Gefühl und die Freiheit eines physischen Kanban Boards in die digitale Welt überträgt.

## Überblick

Claude ist kein weiteres strukturiertes Projektmanagement-Tool. Es ist ein **digitales Whiteboard**, das die Freiheit und Haptik eines echten Whiteboards mit den Vorteilen digitaler Kollaboration verbindet. Wie bei einem physischen Board können Teams frei zeichnen, Post-its platzieren und ihren Workflow so gestalten, wie es für sie am besten funktioniert.

Inspiriert von Tools wie Excalidraw und den ursprünglichen Kanban-Prinzipien von Toyota, ermöglicht Claude Teams, ihre Arbeit authentisch zu visualisieren - ohne in starre Strukturen gepresst zu werden.

## Vision

Wir möchten das **Gefühl eines echten Whiteboards** digital erlebbar machen:
- **Freiheit statt Struktur** - Zeichnen, skizzieren und organisieren wie auf einem echten Board
- **Echtes Kanban** - Die ursprünglichen Prinzipien, nicht nur Spalten und Karten
- **Natürliche Kollaboration** - So arbeiten, wie Teams es am Whiteboard tun würden
- **Flow visualisieren** - WIP-Limits, Engpässe und Durchsatz sichtbar machen

## Geplante Kernfunktionen

### Core Features
- 📋 Übertragen des "echten Whiteboards" Gefühls in die digitale Welt
- 🎯 Auf dem Board können Bereiche wie bei Excalidraw gezeichnet werden
- 👥 Team-Kollaboration in Echtzeit
- 🔄 Drag-and-Drop Interface
- 💬 Virtuelle Post-its

### Down the line
- 📊 Fortschritts-Tracking
- 📈 KPI-Dashboards

### Was wird abgebildet
Echtes Kanban mit den ursprünglichen Prinzipien:
- **Arbeit sichtbar machen** - Visualisierung des gesamten Workflows
- **Work in Progress (WIP) limitieren** - Fokus und Flow verbessern
- **Flow managen** - Kontinuierliche Lieferung ermöglichen
- **Explizite Prozess-Policies** - Gemeinsames Verständnis schaffen
- **Feedback-Schleifen** - Kontinuierliche Verbesserung
- **Kollaborativ verbessern** - Gemeinsam experimentieren und evolvieren

## Installation & Setup

Detaillierte Anweisungen finden Sie in [SETUP.md](SETUP.md).

**Quick Start:**

```bash
# Repository klonen
git clone http://local_proxy@127.0.0.1:64004/git/pasta-driven/Claude
cd Claude

# Dependencies installieren
pnpm install

# Development Server starten
pnpm dev
```

Öffnen Sie dann:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## Technologie-Stack

✅ **Festgelegt in US-001** - Details in [TECH_STACK.md](TECH_STACK.md)

**Frontend:**
- React 18 + TypeScript
- Excalidraw (Canvas & Drawing Engine)
- Zustand (State Management)
- Vite (Build Tool)
- TailwindCSS

**Backend:**
- Node.js 20 + Express
- Yjs (CRDT-basierte Echtzeit-Sync)
- PostgreSQL (Datenbank)
- Redis (Cache & Sessions)

**DevOps:**
- pnpm Workspaces (Monorepo)
- TypeScript (strict mode)
- Vitest + Playwright (Testing)

## Projektplanung

Alle User Stories und geplanten Features finden Sie in der [BACKLOG.md](BACKLOG.md) Datei.

## Beitragen

Beiträge sind willkommen! Bitte erstellen Sie einen Pull Request oder öffnen Sie ein Issue.

## Lizenz

[Lizenzinformationen hier einfügen]

## Kontakt

Weitere Informationen erhalten Sie unter: [Kontaktinformationen]
