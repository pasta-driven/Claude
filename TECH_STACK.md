# Technologie-Stack Entscheidung

## Zusammenfassung

Für das Claude Digital Whiteboard haben wir uns für folgenden Stack entschieden:

### Frontend
- **Framework**: React 18+ mit TypeScript
- **Canvas/Drawing Engine**: Excalidraw Libraries + Custom Extensions
- **State Management**: Zustand (leichtgewichtig, performant)
- **Styling**: TailwindCSS + CSS Modules
- **Build Tool**: Vite (schneller als Webpack)

### Backend
- **Runtime**: Node.js 20+ (LTS)
- **Framework**: Express.js
- **Echtzeit-Sync**: Yjs + y-websocket
- **API**: REST + WebSocket (hybrid)

### Datenbank
- **Primary DB**: PostgreSQL 16+
  - User-Accounts
  - Board-Metadaten
  - Permissions
- **Cache/Sessions**: Redis
  - WebSocket Session-Management
  - Rate Limiting
  - Real-time Presence

### DevOps & Tooling
- **Monorepo**: pnpm Workspaces
- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript (strict mode)
- **Testing**: Vitest + React Testing Library
- **E2E Tests**: Playwright
- **CI/CD**: GitHub Actions

---

## Entscheidungs-Begründungen

### 1. Warum React + Excalidraw?

**Excalidraw als Basis:**
- ✅ Open Source (MIT License) - wir können es forken/erweitern
- ✅ Ausgereiftes Canvas-System mit allem, was wir brauchen
- ✅ Handgezeichneter Look (Rough.js) passt perfekt zu unserer Vision
- ✅ Bereits Echtzeit-Kollaboration implementiert
- ✅ Performance-optimiert für große Boards
- ✅ Active Community und gute Dokumentation

**Alternativen und warum nicht:**
- ❌ **Fabric.js**: Älter, weniger aktiv maintained, kein Whiteboard-Focus
- ❌ **Konva.js**: Gut für 2D-Grafik, aber zu low-level für unsere Zwecke
- ❌ **tldraw**: Sehr ähnlich zu Excalidraw, aber weniger ausgereift
- ❌ **Von Grund auf neu**: 6+ Monate nur für Canvas-Engine, nicht sinnvoll

**React:**
- ✅ Riesiges Ecosystem
- ✅ Excalidraw basiert bereits darauf
- ✅ Beste Performance mit React 18 Concurrent Features
- ✅ Team-Expertise verfügbar

**TypeScript:**
- ✅ Typ-Sicherheit crucial bei komplexem Canvas-Code
- ✅ Besseres Refactoring
- ✅ Self-documenting Code

### 2. Warum Yjs für Echtzeit-Sync?

**Yjs (CRDT-basiert):**
- ✅ **Conflict-Free Replicated Data Type** - automatische Konfliktauflösung
- ✅ Offline-First: Nutzer können offline arbeiten, Sync beim Reconnect
- ✅ Keine zentrale Autorität nötig - resilient
- ✅ Excalidraw-kompatibel (excalidraw-collab nutzt ähnliches Konzept)
- ✅ Unglaublich performant (Binary Protocol)
- ✅ Undo/Redo automatisch synchronisiert

**Alternative: Socket.io:**
- ❌ Nur Event-basiert, manuelle Konfliktauflösung nötig
- ❌ Kein Offline-Support out-of-the-box
- ❌ Mehr Code für State-Sync
- ✅ Einfacher zu verstehen (Pro für kleines Team)

**Entscheidung:** Yjs ist der Goldstandard für kollaborative Whiteboard-Apps. Die initiale Komplexität lohnt sich langfristig.

### 3. Warum PostgreSQL?

**Use Cases für unsere DB:**
- User-Accounts (email, hashed password, profile)
- Board-Metadaten (name, owner, created_at, settings)
- Permissions (wer hat Zugriff auf welches Board)
- Board-Snapshots (für Versionierung/History)
- Analytics-Daten (optional)

**PostgreSQL:**
- ✅ ACID-Garantien für kritische Daten (Users, Permissions)
- ✅ Exzellente JSON-Support für flexible Schemas (Board-Settings)
- ✅ Bewährt, stabil, performant
- ✅ Gute ORMs verfügbar (Prisma, TypeORM)
- ✅ Row-Level Security für Multi-Tenancy

**Alternative: MongoDB:**
- ❌ Keine Transaktionen (wichtig für User-Board-Permissions)
- ❌ Weniger Struktur = mehr Bugs
- ✅ Flexibler (aber brauchen wir nicht)

**Redis als Cache:**
- ✅ WebSocket Session-Tracking (wer ist online)
- ✅ Rate Limiting (DDoS-Schutz)
- ✅ Pub/Sub für Cross-Server Events

### 4. Warum Vite statt Webpack?

**Vite:**
- ✅ 10-100x schnellerer Dev-Server (ESM-based)
- ✅ Instant HMR (Hot Module Replacement)
- ✅ Optimierte Production Builds (Rollup)
- ✅ Out-of-the-box TypeScript Support
- ✅ Kleinere Community aber wächst schnell

**Alternative: Webpack:**
- ❌ Langsamer, besonders bei großen Apps
- ❌ Komplexe Konfiguration
- ✅ Mehr Plugins (aber brauchen wir nicht alle)

### 5. Warum Zustand statt Redux?

**Zustand:**
- ✅ Minimal, nur 1KB
- ✅ Keine Boilerplate
- ✅ Hook-basiert, einfach zu nutzen
- ✅ Perfekt für Canvas-State (nicht zu viel Re-Rendering)

**Alternative: Redux:**
- ❌ Overkill für unsere Zwecke
- ❌ Viel Boilerplate
- ✅ DevTools (aber Zustand hat auch welche)

**Alternative: React Context:**
- ❌ Performance-Probleme bei vielen Updates (Canvas ändert sich ständig)

---

## Architektur-Übersicht

```
┌─────────────────────────────────────────────────────────┐
│                     Frontend (React)                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Excalidraw  │  │   Post-its   │  │  Kanban UI   │  │
│  │    Engine    │  │   Component  │  │  (WIP, etc.) │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│         │                   │                   │        │
│         └───────────────────┴───────────────────┘        │
│                           │                              │
│                   ┌───────▼────────┐                     │
│                   │  Zustand Store │                     │
│                   └───────┬────────┘                     │
│                           │                              │
│                   ┌───────▼────────┐                     │
│                   │   Yjs Doc      │  (CRDT State)       │
│                   └───────┬────────┘                     │
└───────────────────────────┼──────────────────────────────┘
                            │
                   WebSocket Connection
                            │
┌───────────────────────────▼──────────────────────────────┐
│                Backend (Node.js + Express)                │
│  ┌─────────────────────────────────────────────────────┐ │
│  │           Yjs WebSocket Server (y-websocket)        │ │
│  │              - Manages document state                │ │
│  │              - Broadcasts changes to all clients     │ │
│  └─────────────────────────────────────────────────────┘ │
│                            │                              │
│  ┌─────────────────────────▼───────────────────────────┐ │
│  │               REST API (Express)                     │ │
│  │  - User Auth (JWT)                                   │ │
│  │  - Board CRUD                                        │ │
│  │  - Permissions                                       │ │
│  └─────────────────────────────────────────────────────┘ │
└───────────────────────────┬──────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
┌───────▼────────┐  ┌───────▼────────┐  ┌──────▼──────┐
│  PostgreSQL    │  │     Redis      │  │ File Storage│
│  - Users       │  │  - Sessions    │  │ (S3/Local)  │
│  - Boards      │  │  - Presence    │  │ - Exports   │
│  - Permissions │  │  - Cache       │  │ - Uploads   │
└────────────────┘  └────────────────┘  └─────────────┘
```

---

## Data Flow: Echtzeit-Kollaboration

1. **User zeichnet/verschiebt Post-it:**
   ```
   User Interaction → Excalidraw → Local Yjs Doc Update
   ```

2. **Lokales Update wird propagiert:**
   ```
   Yjs Doc → WebSocket → Yjs Server → Broadcast zu allen Clients
   ```

3. **Andere Clients empfangen Update:**
   ```
   WebSocket → Lokales Yjs Doc → Excalidraw Re-Render
   ```

4. **Persistierung (periodisch):**
   ```
   Yjs Server → Snapshot → PostgreSQL (komprimiert)
   ```

**Vorteile:**
- ⚡ Instant Updates (< 50ms typisch)
- 🔄 Automatische Conflict Resolution
- 📡 Offline-fähig
- 💾 Effiziente Persistierung

---

## Ordner-Struktur (Monorepo)

```
claude/
├── apps/
│   ├── web/                    # Frontend React App
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Canvas/     # Excalidraw Integration
│   │   │   │   ├── PostIt/     # Post-it Component
│   │   │   │   ├── Kanban/     # WIP-Limits, Metrics UI
│   │   │   │   └── UI/         # Buttons, Modals, etc.
│   │   │   ├── stores/         # Zustand Stores
│   │   │   ├── hooks/          # Custom React Hooks
│   │   │   ├── lib/            # Yjs Integration
│   │   │   └── pages/
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   └── server/                 # Backend Node.js
│       ├── src/
│       │   ├── routes/         # Express Routes
│       │   ├── controllers/
│       │   ├── models/         # DB Models (Prisma)
│       │   ├── middleware/     # Auth, etc.
│       │   ├── websocket/      # Yjs WebSocket Server
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   ├── shared/                 # Shared Types & Utils
│   │   ├── types/
│   │   └── utils/
│   └── config/                 # Shared Config (ESLint, TS)
│
├── package.json                # Root package.json (pnpm workspace)
├── pnpm-workspace.yaml
├── .gitignore
└── README.md
```

---

## Entwicklungs-Workflow

### Lokale Entwicklung:

```bash
# Alle Dependencies installieren
pnpm install

# Dev-Server starten (concurrent)
pnpm dev

# Öffnet:
# - Frontend: http://localhost:5173
# - Backend: http://localhost:3000
# - WebSocket: ws://localhost:3000/collab
```

### Testing:

```bash
# Unit Tests
pnpm test

# E2E Tests
pnpm test:e2e

# Type Check
pnpm typecheck
```

---

## Nächste Schritte (nach dieser Entscheidung):

1. ✅ Monorepo mit pnpm initialisieren
2. ✅ Frontend-App mit Vite + React + TypeScript aufsetzen
3. ✅ Backend mit Express + TypeScript aufsetzen
4. ✅ PostgreSQL + Prisma konfigurieren
5. ✅ Excalidraw als Dependency hinzufügen
6. ✅ Yjs Integration vorbereiten
7. ✅ Basic Authentication implementieren
8. → Dann: US-002 (Unendliches Canvas)

---

## Risiken & Mitigationen

| Risiko | Wahrscheinlichkeit | Impact | Mitigation |
|--------|-------------------|--------|------------|
| Excalidraw-Library breaking changes | Mittel | Hoch | Version pinnen, langsam upgraden, eigene Patches |
| Yjs zu komplex für Team | Niedrig | Mittel | Gute Dokumentation, Abstraction Layer |
| PostgreSQL zu langsam für große Boards | Niedrig | Mittel | Redis-Cache, Snapshots optimieren |
| WebSocket Skalierung | Mittel | Hoch | Horizontal Scaling mit Redis Adapter, Load Balancer |

---

## Lizenz-Compliance

- **Excalidraw**: MIT License ✅ (kommerziell nutzbar)
- **Yjs**: MIT License ✅
- **React**: MIT License ✅
- **PostgreSQL**: PostgreSQL License ✅ (permissive)
- **Redis**: BSD License ✅

**Alles kommerziell nutzbar ohne Restrictions.**

---

## Geschätzte Entwicklungszeit (mit diesem Stack):

- **MVP (US-001 bis US-017)**: ~8-10 Wochen (1 Entwickler)
- **Phase 2**: +6-8 Wochen
- **Phase 3**: +4-6 Wochen

**Total: ~5-6 Monate für komplettes Produkt**

Ohne Excalidraw als Basis: +3-4 Monate nur für Canvas-Engine.

---

## Entscheidung: ✅ APPROVED

Dieser Tech-Stack ist optimal für unsere Anforderungen:
- ✅ Schneller Time-to-Market (Excalidraw spart Monate)
- ✅ Produktions-ready (bewährte Technologien)
- ✅ Skalierbar (Yjs + horizontale Skalierung möglich)
- ✅ Developer Experience (Vite, TypeScript, pnpm)
- ✅ Langfristig wartbar (große Communities)

**Status**: US-001 ✅ **COMPLETED**

**Datum**: 2025-11-26
**Verantwortlich**: Development Team
