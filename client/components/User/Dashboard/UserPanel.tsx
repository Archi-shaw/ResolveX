"use client";

import {
  Bell,
  CircleUserRound,
  Search,
  PlusCircle,
  ClipboardList,
  Clock3,
  CheckCircle2,
  ChevronRight,
  Filter,
} from "lucide-react";

export default function UserDashboardPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      {/* Navbar */}
      <header className="flex h-14 items-center justify-between border-b border-white/10 px-6">
        <div className="flex items-center gap-5">
          <h1 className="text-2xl font-bold">ResolveX Pro</h1>

          <div className="relative w-[260px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

            <input
              placeholder="Search knowledge base..."
              className="h-10 w-full rounded-xl border border-white/10 bg-[#0b0b10] pl-10 pr-4 text-sm outline-none placeholder:text-zinc-600"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Bell className="h-4 w-4 text-zinc-400" />

          <span className="text-xl tracking-[0.3em] text-zinc-300">
            COM ✦ D
          </span>

          <span className="text-sm text-zinc-400">Support</span>

          <CircleUserRound className="h-8 w-8 text-violet-300" />
        </div>
      </header>

      <section className="p-6">
        {/* Welcome */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-6xl font-bold tracking-tight">
              Welcome back, Alex.
            </h1>

            <p className="mt-4 text-xl text-zinc-400">
              You have{" "}
              <span className="font-semibold text-violet-300">
                3 items
              </span>{" "}
              requiring your immediate attention today.
            </p>
          </div>

          <button className="flex items-center gap-3 rounded-2xl bg-violet-300 px-8 py-5 text-lg font-medium text-black transition hover:bg-violet-200">
            <PlusCircle className="h-5 w-5" />
            Create New Ticket
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-5">
          <DashboardCard
            icon={<ClipboardList className="h-5 w-5 text-violet-300" />}
            count="05"
            title="My Active Requests"
            description="Ongoing technical tickets and support inquiries."
          />

          <DashboardCard
            icon={<Bell className="h-5 w-5 text-yellow-300" />}
            count="03"
            title="Awaiting My Action"
            description="Pending approvals or requested clarifications from you."
            warning
          />

          <DashboardCard
            icon={<CheckCircle2 className="h-5 w-5 text-violet-300" />}
            count="12"
            title="Recently Resolved"
            description="Tickets successfully closed in the last 30 days."
          />
        </div>

        {/* Table */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-[#0b0b10]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
            <h2 className="text-4xl font-bold">
              Recent Support Requests
            </h2>

            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-300">
                View All
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-300">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5 text-left text-sm text-zinc-500">
                  <th className="px-6 py-5">Ticket ID</th>
                  <th className="px-6 py-5">Subject</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Priority</th>
                  <th className="px-6 py-5">Last Updated</th>
                  <th className="px-6 py-5"></th>
                </tr>
              </thead>

              <tbody>
                <RequestRow
                  id="#RX-8902"
                  subject="Cloud Migration Connectivity Issues"
                  category="Infrastructure & Networking"
                  status="Processing"
                  priority="Urgent"
                  updated="2 hours ago"
                  urgent
                />

                <RequestRow
                  id="#RX-8841"
                  subject="User Access Level Modification"
                  category="IAM / Security"
                  status="Awaiting Action"
                  priority="Medium"
                  updated="5 hours ago"
                  warning
                />

                <RequestRow
                  id="#RX-8722"
                  subject="Subscription Billing Variance"
                  category="Billing & Finance"
                  status="Resolved"
                  priority="Low"
                  updated="Yesterday"
                  resolved
                />
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}

/* ---------------- Components ---------------- */

function DashboardCard({
  icon,
  count,
  title,
  description,
  warning,
}: {
  icon: React.ReactNode;
  count: string;
  title: string;
  description: string;
  warning?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border bg-[#0b0b10] p-6 ${
        warning ? "border-yellow-400/20" : "border-white/10"
      }`}
    >
      <div className="mb-8 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04]">
          {icon}
        </div>

        <h2
          className={`text-5xl font-bold ${
            warning ? "text-yellow-300" : "text-violet-200"
          }`}
        >
          {count}
        </h2>
      </div>

      <h3 className="text-3xl font-bold">{title}</h3>

      <p className="mt-4 max-w-[260px] text-sm leading-6 text-zinc-500">
        {description}
      </p>
    </div>
  );
}

function RequestRow({
  id,
  subject,
  category,
  status,
  priority,
  updated,
  urgent,
  warning,
  resolved,
}: {
  id: string;
  subject: string;
  category: string;
  status: string;
  priority: string;
  updated: string;
  urgent?: boolean;
  warning?: boolean;
  resolved?: boolean;
}) {
  return (
    <tr className="border-b border-white/5 transition hover:bg-white/[0.02]">
      <td className="px-6 py-6 font-medium text-violet-300">
        {id}
      </td>

      <td className="px-6 py-6">
        <p className="text-lg font-semibold">{subject}</p>

        <p className="mt-1 text-sm text-zinc-500">{category}</p>
      </td>

      <td className="px-6 py-6">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            resolved
              ? "bg-zinc-700/30 text-zinc-300"
              : warning
              ? "bg-yellow-500/10 text-yellow-300"
              : "bg-violet-500/10 text-violet-300"
          }`}
        >
          {status}
        </span>
      </td>

      <td className="px-6 py-6">
        <div className="flex items-center gap-2">
          {urgent && <span className="text-red-300">!</span>}

          {resolved && (
            <Clock3 className="h-4 w-4 text-zinc-500" />
          )}

          <span
            className={`text-sm ${
              urgent
                ? "text-red-300"
                : warning
                ? "text-zinc-300"
                : "text-zinc-400"
            }`}
          >
            {priority}
          </span>
        </div>
      </td>

      <td className="px-6 py-6 text-sm text-zinc-400">
        {updated}
      </td>

      <td className="px-6 py-6">
        <ChevronRight className="h-5 w-5 text-zinc-500" />
      </td>
    </tr>
  );
}