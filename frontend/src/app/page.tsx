"use client";

import { useState, useEffect } from "react";
import { fetchHealth, HealthResponse } from "../lib/api";

export default function Home() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const checkConnection = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchHealth();
      setHealth(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error connecting to backend");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-zinc-100 flex flex-col items-center justify-center p-6">
      <main className="w-full max-w-4xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Full Stack Initialized
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Vibe Tracking Platform
            </h1>
            <p className="text-zinc-400 text-sm mt-1">
              Next.js 15 App Router &bull; NestJS &bull; Prisma &bull; PostgreSQL (Supabase)
            </p>
          </div>
          <button
            onClick={checkConnection}
            disabled={loading}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-white active:scale-95 transition-all shadow-md disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Checking API..." : "Ping Backend"}
          </button>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-zinc-800/40 border border-zinc-800 hover:border-zinc-700 transition">
            <span className="text-xs font-medium text-zinc-400">Frontend</span>
            <h3 className="text-lg font-semibold text-white mt-1">Next.js</h3>
            <p className="text-xs text-zinc-500 mt-0.5">React + TailwindCSS</p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-800/40 border border-zinc-800 hover:border-zinc-700 transition">
            <span className="text-xs font-medium text-zinc-400">Backend</span>
            <h3 className="text-lg font-semibold text-white mt-1">NestJS</h3>
            <p className="text-xs text-zinc-500 mt-0.5">TypeScript &bull; REST API</p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-800/40 border border-zinc-800 hover:border-zinc-700 transition">
            <span className="text-xs font-medium text-zinc-400">ORM</span>
            <h3 className="text-lg font-semibold text-white mt-1">Prisma</h3>
            <p className="text-xs text-zinc-500 mt-0.5">Type-safe queries</p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-800/40 border border-zinc-800 hover:border-zinc-700 transition">
            <span className="text-xs font-medium text-zinc-400">Database</span>
            <h3 className="text-lg font-semibold text-white mt-1">PostgreSQL</h3>
            <p className="text-xs text-zinc-500 mt-0.5">Supabase Hosted</p>
          </div>
        </div>

        {/* Backend Connection Status */}
        <div className="p-6 rounded-2xl bg-zinc-800/30 border border-zinc-800 space-y-4">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-zinc-400">
            Backend Connectivity Status
          </h2>
          {loading && (
            <p className="text-sm text-zinc-400 animate-pulse">
              Connecting to NestJS at {process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}...
            </p>
          )}
          {error && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm">
              <p className="font-semibold">Backend offline or uncontactable</p>
              <p className="text-xs text-amber-400/80 mt-1">{error}</p>
              <p className="text-xs text-zinc-400 mt-2">
                Make sure the NestJS backend is running: <code className="bg-black/30 px-1 py-0.5 rounded">npm run start:dev</code> in the <code className="bg-black/30 px-1 py-0.5 rounded">backend</code> directory.
              </p>
            </div>
          )}
          {health && !error && !loading && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm space-y-1">
              <p className="font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Connected to NestJS Backend Successfully!
              </p>
              <div className="text-xs text-zinc-400 space-y-0.5 pt-2">
                <p>Status: <span className="text-emerald-400 font-mono">{health.status}</span></p>
                <p>Service: <span className="text-zinc-200 font-mono">{health.service}</span></p>
                <p>Timestamp: <span className="text-zinc-200 font-mono">{health.timestamp}</span></p>
                <p>Uptime: <span className="text-zinc-200 font-mono">{Math.round(health.uptime)}s</span></p>
              </div>
            </div>
          )}
        </div>

        {/* Setup Checklist */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-semibold text-zinc-300">Phase Checklist</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li className="flex items-center gap-2.5">
              <span className="text-emerald-400 font-bold">&check;</span>
              <span><strong>Phase 1:</strong> Database configuration &amp; Supabase connection template</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-emerald-400 font-bold">&check;</span>
              <span><strong>Phase 2:</strong> NestJS backend scaffolded with Prisma ORM service</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-emerald-400 font-bold">&check;</span>
              <span><strong>Phase 3:</strong> Next.js App Router scaffolded with TailwindCSS and API client</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-emerald-400 font-bold">&check;</span>
              <span><strong>Phase 4:</strong> CORS and health check verification configured</span>
            </li>
          </ul>
        </div>

      </main>
    </div>
  );
}
