# Vibe Tracking Platform

Full-stack project setup built with **Next.js**, **NestJS**, **Prisma**, and **Supabase (PostgreSQL)**.

## Project Structure

```text
├── backend/                  # NestJS backend application
│   ├── prisma/
│   │   └── schema.prisma     # Prisma schema configured for Supabase PostgreSQL
│   ├── src/
│   │   ├── prisma/           # Prisma service and module
│   │   ├── app.controller.ts # Health check & sample endpoint
│   │   ├── app.module.ts
│   │   └── main.ts           # Configured with CORS for Next.js (port 3001)
│   ├── .env.example
│   └── package.json
├── frontend/                 # Next.js 15 (React 19) frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx      # Dashboard testing backend health check
│   │   └── lib/
│   │       └── api.ts        # API client for backend
│   ├── .env.example
│   └── package.json
└── package.json              # Root orchestration scripts
```

---

## Getting Started

### 1. Database Configuration (Supabase)
1. Create a project at [supabase.com](https://supabase.com).
2. Copy your PostgreSQL database connection strings from **Project Settings > Database**:
   - Connection pooler URL (Transaction mode on port 6543)
   - Direct connection URL (port 5432)
3. In `backend/.env`, set:
   ```env
   DATABASE_URL="postgresql://postgres.[REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true"
   DIRECT_URL="postgresql://postgres:[PASSWORD]@db.[REF].supabase.co:5432/postgres"
   PORT=3001
   ```

### 2. Install Dependencies
In a local environment (or terminal), run:
```bash
# In backend directory
cd backend
npm install

# Generate Prisma Client & push schema to Supabase
npm run prisma:generate
npm run prisma:push

# In frontend directory
cd ../frontend
npm install
```

### 3. Run Development Servers
From the root directory or respective folders:
```bash
# Run NestJS Backend (http://localhost:3001)
npm run dev:backend

# Run Next.js Frontend (http://localhost:3000)
npm run dev:frontend
```

---

## Endpoints & Features
- **Frontend URL:** `http://localhost:3000`
- **Backend Health Check:** `http://localhost:3001/api/health`
- **Prisma Studio:** `cd backend && npm run prisma:studio`
