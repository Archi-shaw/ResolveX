"use client";

import Link from "next/link";
import { Bug, Grid2X2 } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      {/* Navbar */}
      <header className="flex h-14 items-center justify-between border-b border-white/10 bg-[#0b0b10] px-6">
        <div className="flex items-center gap-8">
          <h1 className="text-lg font-bold">ResolveX Pro</h1>

          <nav className="hidden gap-6 text-sm text-slate-400 md:flex">
            <span>Solutions</span>
            <span>Infrastructure</span>
            <span>Pricing</span>
          </nav>
        </div>

        <div className="flex items-center gap-5 text-sm text-slate-400">
          <span>⌘</span>
          <span>◐</span>
          <span>♢</span>
          <span className="text-violet-300">Support</span>
        </div>
      </header>

      {/* Content */}
      <section className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="grid w-full max-w-4xl gap-8 rounded-2xl border border-slate-800 bg-[#111116] p-8 shadow-2xl md:grid-cols-[1fr_1fr]">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
              Error Code: 404
            </p>

            <h2 className="mt-3 text-5xl font-bold leading-tight">
              404 - Page Not Found
            </h2>

            <p className="mt-6 text-sm leading-6 text-slate-400">
              The requested architectural node could not be located within the
              ResolveX infrastructure. It may have been decommissioned or moved
              to a new endpoint.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 hover:bg-violet-500"
              >
                <Grid2X2 className="h-4 w-4" />
                Return to Dashboard
              </Link>

              <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-4 text-sm font-semibold text-slate-300 hover:bg-white/5">
                <Bug className="h-4 w-4" />
                Report Issue
              </button>
            </div>
          </div>

          {/* Right visual */}
          <div className="flex items-center justify-center rounded-xl border border-slate-800 bg-black/40 p-6">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 via-black to-violet-950 shadow-inner">
              <div className="absolute h-56 w-56 rounded-full border border-violet-300/20" />
              <div className="absolute h-40 w-40 rounded-full border border-slate-500/20" />
              <div className="h-24 w-24 rounded-full bg-violet-500/30 blur-xl" />
              <div className="absolute h-12 w-12 rounded-full bg-violet-300 shadow-lg shadow-violet-500/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-[#0b0b10] px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-semibold text-slate-300">ResolveX Pro</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Empowering enterprise operations through precision engineering and
              advanced infrastructure.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-slate-500 md:items-end">
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Security</span>
              <span>Status</span>
            </div>

            <p>© 2024 ResolveX Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}