# Setup & Installation

Dieses Dokument beschreibt, wie Sie das Claude Whiteboard Projekt lokal aufsetzen und entwickeln.

## Voraussetzungen

Stellen Sie sicher, dass folgende Software installiert ist:

- **Node.js**: Version 20 oder höher ([Download](https://nodejs.org/))
- **pnpm**: Version 8 oder höher
  ```bash
  npm install -g pnpm
  ```
- **PostgreSQL**: Version 16 oder höher ([Download](https://www.postgresql.org/download/))
- **Redis**: Version 7 oder höher ([Download](https://redis.io/download))
  - Optional für lokale Entwicklung, kann später hinzugefügt werden

## Projekt-Setup

### 1. Repository klonen

```bash
git clone http://local_proxy@127.0.0.1:64004/git/pasta-driven/Claude
cd Claude
```

### 2. Dependencies installieren

```bash
pnpm install
```

Dies installiert alle Abhängigkeiten für alle Workspaces (Frontend, Backend, Shared).

### 3. Umgebungsvariablen konfigurieren

**Backend (.env):**

```bash
cd apps/server
cp .env.example .env
```

Bearbeiten Sie `apps/server/.env` und passen Sie die Werte an:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/claude_whiteboard"
REDIS_URL="redis://localhost:6379"
JWT_SECRET="change-this-to-a-secure-random-string"
CORS_ORIGIN="http://localhost:5173"
```

### 4. Datenbank einrichten

**PostgreSQL Datenbank erstellen:**

```bash
# In PostgreSQL CLI (psql)
CREATE DATABASE claude_whiteboard;
```

**Prisma einrichten (später, wenn Schema definiert ist):**

```bash
cd apps/server
pnpm db:generate  # Generiert Prisma Client
pnpm db:migrate   # Führt Migrationen aus
```

> **Note**: Prisma Schema muss zuerst erstellt werden (kommt in US-003).

### 5. Redis starten (optional für MVP)

**macOS (mit Homebrew):**
```bash
brew services start redis
```

**Linux:**
```bash
sudo systemctl start redis
```

**Docker (empfohlen):**
```bash
docker run -d -p 6379:6379 --name redis redis:7-alpine
```

## Development

### Alles auf einmal starten

Vom Root-Verzeichnis aus:

```bash
pnpm dev
```

Dies startet:
- ✅ **Frontend**: http://localhost:5173 (Vite Dev Server)
- ✅ **Backend**: http://localhost:3000 (Express API)

### Einzelne Services starten

**Nur Frontend:**
```bash
cd apps/web
pnpm dev
```

**Nur Backend:**
```bash
cd apps/server
pnpm dev
```

### Nützliche Befehle

**Type Checking (alle Packages):**
```bash
pnpm typecheck
```

**Linting:**
```bash
pnpm lint
```

**Tests ausführen:**
```bash
pnpm test
```

**Code formatieren:**
```bash
pnpm format
```

**Production Build:**
```bash
pnpm build
```

## Projekt-Struktur

```
claude/
├── apps/
│   ├── web/              # React Frontend (Vite)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── stores/   # Zustand State Management
│   │   │   ├── lib/      # Yjs Integration
│   │   │   └── pages/
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   └── server/           # Node.js Backend (Express)
│       ├── src/
│       │   ├── routes/
│       │   ├── controllers/
│       │   ├── websocket/  # Yjs WebSocket Server
│       │   └── index.ts
│       └── package.json
│
├── packages/
│   └── shared/           # Shared Types & Utils
│       ├── src/
│       │   ├── types/
│       │   └── utils/
│       └── package.json
│
├── package.json          # Root package.json
├── pnpm-workspace.yaml   # pnpm Workspace Config
└── TECH_STACK.md         # Tech-Stack Dokumentation
```

## Troubleshooting

### Port bereits in Verwendung

**Frontend (5173) oder Backend (3000) Port blockiert:**

```bash
# Port-Nutzung prüfen
lsof -i :5173  # oder :3000

# Prozess beenden
kill -9 <PID>
```

Oder Port in Config ändern:
- Frontend: `apps/web/vite.config.ts` → `server.port`
- Backend: `apps/server/.env` → `PORT`

### PostgreSQL Verbindung fehlgeschlagen

**Prüfen, ob PostgreSQL läuft:**

```bash
# macOS
brew services list

# Linux
sudo systemctl status postgresql
```

**Connection String prüfen:**

Format: `postgresql://USER:PASSWORD@HOST:PORT/DATABASE`

Beispiel: `postgresql://postgres:password@localhost:5432/claude_whiteboard`

### pnpm Fehler

**pnpm Cache löschen:**

```bash
pnpm store prune
rm -rf node_modules
pnpm install
```

### TypeScript Fehler

**Nach Dependency-Updates:**

```bash
pnpm install
pnpm typecheck
```

## Nächste Schritte

Nach erfolgreichem Setup:

1. ✅ **US-001**: Tech-Stack festgelegt (aktuell)
2. 🚧 **US-002**: Unendliches Canvas implementieren
3. 🚧 **US-003**: Datenmodell erstellen (Prisma Schema)
4. 🚧 **US-004**: Post-its erstellen

Siehe [BACKLOG.md](BACKLOG.md) für alle User Stories.

## Support

Bei Problemen:
- Überprüfen Sie die [TECH_STACK.md](TECH_STACK.md) für Details zum Stack
- Lesen Sie die [README.md](README.md) für Projekt-Übersicht
- Checken Sie Issues im Repository

---

**Status**: Setup-Anleitung für US-001 ✅
