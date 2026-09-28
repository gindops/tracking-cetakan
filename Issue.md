# Project Setup Planning

## Overview
This document outlines the high-level steps required to initialize a new full-stack project using the specified technology stack.

## Tech Stack
- **Frontend:** Next.js (React) + TailwindCSS
- **Backend:** NestJS (Node.js) + TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL (Supabase)

---

## Phase 1: Database & Supabase Preparation
1. **Create Supabase Project:** Initialize a new project on the Supabase dashboard.
2. **Obtain Credentials:** Retrieve the PostgreSQL connection string (Database URL) to be used by Prisma.
   - Configured in `backend/.env.example` and `backend/.env` (Direct URL & Pooler URL).

## Phase 2: Backend Setup (NestJS + Prisma)
1. **Scaffold NestJS:** Created in `backend/` directory.
2. **Install Prisma:** Added Prisma CLI and `@prisma/client` to `backend/package.json`.
3. **Configure ORM:**
   - Initialized schema at `backend/prisma/schema.prisma` configured for Supabase.
   - Configured environment variables in `backend/.env`.
   - Initial `User` model created.
4. **Prisma Service:** Implemented in `backend/src/prisma/prisma.service.ts` and `backend/src/prisma/prisma.module.ts`.

## Phase 3: Frontend Setup (Next.js + TailwindCSS)
1. **Scaffold Next.js:** Created in `frontend/` directory with App Router and TailwindCSS.
2. **Environment Setup:** Configured `frontend/.env.local` and `frontend/.env.example` pointing to `http://localhost:3001`.
3. **Basic Styling:** Modern dark-theme full-stack dashboard in `frontend/src/app/page.tsx`.
4. **API Client:** Implemented typed HTTP client in `frontend/src/lib/api.ts`.

## Phase 4: Integration & Verification
1. **CORS Configuration:** Configured in `backend/src/main.ts` allowing `http://localhost:3000`.
2. **Health Check endpoint:** Endpoint `/api/health` added in `backend/src/app.controller.ts`.
3. **Frontend Fetch:** Live ping button and status card in `frontend/src/app/page.tsx`.

## Delivery Checklist
- [x] Supabase project configuration template & schema available.
- [x] NestJS backend scaffolded with Prisma ORM service.
- [x] Next.js frontend scaffolded with TailwindCSS applied.
- [x] CORS and `/api/health` endpoint configured for frontend verification.
