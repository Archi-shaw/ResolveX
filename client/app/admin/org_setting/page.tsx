"use client";

import {
  Bell,
  CreditCard,
  Download,
  Globe,
  ImageIcon,
  KeyRound,
  Lock,
  Palette,
  Settings2,
} from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Settings
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Manage workspace configuration and organization preferences.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-6 border-b border-slate-800 pb-3 text-sm">
        <Tab active label="Organization" />
        <Tab label="Security" />
        <Tab label="Billing" />
        <Tab label="Integrations" />
        <Tab label="API Keys" />
        <Tab label="Appearance" />
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        {/* Left Side */}
        <div className="space-y-6">
          {/* Organization Details */}
          <section className="rounded-2xl border border-slate-800 bg-[#0b0b10] p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Organization Details
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Manage your workspace brand and core identity.
                </p>
              </div>

              <button className="rounded-xl bg-violet-300 px-5 py-2 text-sm font-semibold text-black hover:bg-violet-200">
                Save Changes
              </button>
            </div>

            {/* Form */}
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Workspace Name
                </label>

                <input
                  defaultValue="Acme Corp"
                  className="h-12 w-full rounded-xl border border-slate-800 bg-[#111116] px-4 text-sm text-slate-300 outline-none focus:border-violet-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Company URL
                </label>

                <div className="flex gap-2">
                  <input
                    defaultValue="rez.pro/"
                    className="h-12 w-[110px] rounded-xl border border-slate-800 bg-[#111116] px-4 text-sm text-slate-300 outline-none"
                  />

                  <input
                    defaultValue="acme-hq"
                    className="h-12 flex-1 rounded-xl border border-slate-800 bg-[#111116] px-4 text-sm text-slate-300 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Logo Upload */}
            <div className="mt-8">
              <label className="mb-3 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Organization Logo
              </label>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-[#111116] p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-700 bg-[#0b0b10]">
                  <ImageIcon className="h-6 w-6 text-slate-500" />
                </div>

                <div className="flex-1">
                  <button className="rounded-lg border border-slate-700 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 hover:bg-white/5">
                    Upload New Image
                  </button>

                  <p className="mt-2 text-xs text-slate-500">
                    Min 400x400px. PNG or SVG preferred.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SSO Authentication */}
          <section className="rounded-2xl border border-slate-800 bg-[#0b0b10] p-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                SSO Authentication
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Configure enterprise single sign-on providers.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {/* Google */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#111116] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                    <Globe className="h-5 w-5 text-blue-300" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Google Workspace
                    </h3>

                    <p className="text-sm text-slate-500">
                      Connected since Jan 2024
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                  ACTIVE
                </span>
              </div>

              {/* Okta */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#111116] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-500/10">
                    <Lock className="h-5 w-5 text-slate-300" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      SAML 2.0 / Okta
                    </h3>

                    <p className="text-sm text-slate-500">
                      Configure custom enterprise connection
                    </p>
                  </div>
                </div>

                <button className="rounded-lg border border-slate-700 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 hover:bg-white/5">
                  Configure
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Current Plan */}
          <section className="rounded-2xl border border-slate-800 bg-[#0b0b10] p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Current Plan
            </p>

            <div className="mt-4 flex items-end gap-2">
              <h2 className="text-5xl font-bold text-white">$499</h2>

              <span className="mb-2 text-slate-400">/month</span>
            </div>

            {/* Progress */}
            <div className="mt-8">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-400">Seat Usage</span>
                <span className="text-white">18 / 25</span>
              </div>

              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-violet-300" />
              </div>
            </div>

            {/* Features */}
            <div className="mt-8 space-y-4">
              <Feature label="Advanced Analytics" />
              <Feature label="24/7 Priority Support" />
              <Feature label="Custom API Limits" />
            </div>

            <button className="mt-8 w-full rounded-xl border border-violet-400/20 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-200 hover:bg-violet-500/20">
              Manage Subscription
            </button>
          </section>

          {/* Billing History */}
          <section className="rounded-2xl border border-slate-800 bg-[#0b0b10] p-6">
            <h2 className="text-2xl font-bold text-white">
              Billing History
            </h2>

            <div className="mt-6 space-y-5">
              <InvoiceItem
                invoice="#RES-9012"
                date="May 01, 2024"
              />

              <InvoiceItem
                invoice="#RES-8944"
                date="Apr 01, 2024"
              />

              <InvoiceItem
                invoice="#RES-8821"
                date="Mar 01, 2024"
              />
            </div>

            <button className="mt-8 text-sm font-medium text-violet-300 hover:text-violet-200">
              View All Invoices
            </button>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-300">ResolveX Pro</p>
          <p>© 2024 ResolveX Pro. All rights reserved.</p>
        </div>

        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Security</span>
          <span>Status</span>
        </div>
      </footer>
    </div>
  );
}

/* Components */

function Tab({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`text-sm font-medium transition ${
        active
          ? "border-b-2 border-violet-300 pb-3 text-violet-300"
          : "text-slate-500 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function Feature({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-300">
      <div className="h-2 w-2 rounded-full bg-violet-300" />
      {label}
    </div>
  );
}

function InvoiceItem({
  invoice,
  date,
}: {
  invoice: string;
  date: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-[#111116] p-4">
      <div>
        <p className="font-semibold text-white">
          Invoice {invoice}
        </p>

        <p className="mt-1 text-sm text-slate-500">{date}</p>
      </div>

      <button className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white">
        <Download className="h-4 w-4" />
      </button>
    </div>
  );
}