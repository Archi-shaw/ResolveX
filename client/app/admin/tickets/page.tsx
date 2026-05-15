"use client";

import {
  Download,
  Filter,
  Grid2X2,
  List,
  UserPlus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const tickets = [
  {
    id: "#RX-8291",
    title: "API Gateway Latency Spike",
    desc: "System latency exceeded 500ms threshold...",
    priority: "CRITICAL",
    status: "In Progress",
    assignee: "Alex Rivera",
    date: "Oct 24, 2024",
  },
  {
    id: "#RX-8288",
    title: "Auth0 Integration Error",
    desc: "SSO loop detected for regional offices in EMEA...",
    priority: "HIGH",
    status: "Open",
    assignee: "Sarah Chen",
    date: "Oct 23, 2024",
  },
  {
    id: "#RX-8285",
    title: "Database Index Optimization",
    desc: "Running slow queries analysis on production shard...",
    priority: "MEDIUM",
    status: "In Progress",
    assignee: "Marcus King",
    date: "Oct 23, 2024",
  },
  {
    id: "#RX-8281",
    title: "Mobile App UI Regression",
    desc: "Button overlap issues on iOS 17.2 devices...",
    priority: "LOW",
    status: "Resolved",
    assignee: "Elena Voss",
    date: "Oct 22, 2024",
  },
];

export default function AdminTicketsPage() {
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Support Tickets
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Manage and track your active support requests across the organization.
          </p>
        </div>

        <div className="flex rounded-xl border border-slate-700 bg-[#1a1820] p-1">
          <button className="flex items-center gap-2 rounded-lg bg-violet-300 px-4 py-2 text-sm font-semibold text-black">
            <List className="h-4 w-4" />
            Table
          </button>

          <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-slate-400 hover:text-white">
            <Grid2X2 className="h-4 w-4" />
            Kanban
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-slate-800 bg-[#0b0b10] p-4">
        <div className="flex flex-col gap-3 xl:flex-row">
          <div className="relative flex-1">
            <Filter className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              placeholder="Filter tickets by title or ID..."
              className="h-12 w-full rounded-xl border border-slate-800 bg-[#09090d] pl-11 pr-4 text-sm text-slate-300 outline-none placeholder:text-slate-600 focus:border-violet-400/40"
            />
          </div>

          <button className="rounded-xl border border-slate-800 bg-[#09090d] px-4 py-2 text-sm text-slate-300">
            Status: All
          </button>

          <button className="rounded-xl border border-slate-800 bg-[#09090d] px-4 py-2 text-sm text-slate-300">
            Priority: All
          </button>

          <button className="flex items-center justify-center rounded-xl border border-slate-800 bg-[#09090d] px-4 py-2 text-slate-300">
            <UserPlus className="h-4 w-4" />
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-800 bg-[#09090d] px-5 py-2 text-sm text-slate-300">
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0b0b10]">
        <table className="w-full text-left">
          <thead className="bg-white/[0.04] text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-6 py-5">Ticket ID</th>
              <th className="px-6 py-5">Title</th>
              <th className="px-6 py-5">Priority</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5">Assignee</th>
              <th className="px-6 py-5">Created Date</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="border-t border-white/5 transition hover:bg-white/[0.02]"
              >
                <td className="px-6 py-6 font-semibold text-violet-300">
                  {ticket.id}
                </td>

                <td className="px-6 py-6">
                  <p className="font-semibold text-slate-200">
                    {ticket.title}
                  </p>
                  <p className="mt-1 max-w-[260px] text-sm leading-5 text-slate-500">
                    {ticket.desc}
                  </p>
                </td>

                <td className="px-6 py-6">
                  <PriorityBadge priority={ticket.priority} />
                </td>

                <td className="px-6 py-6">
                  <StatusBadge status={ticket.status} />
                </td>

                <td className="px-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-xs font-semibold text-violet-200">
                      {ticket.assignee
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>

                    <span className="text-sm text-slate-300">
                      {ticket.assignee}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-6 text-sm text-slate-400">
                  {ticket.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-white/5 px-6 py-5">
          <p className="text-sm text-slate-400">
            Showing <span className="text-white">1 - 4</span> of{" "}
            <span className="text-white">152</span> tickets
          </p>

          <div className="flex items-center gap-2">
            <button className="rounded-lg p-2 text-slate-500 hover:bg-white/5 hover:text-white">
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button className="rounded-lg bg-violet-300 px-3 py-2 text-sm font-semibold text-black">
              1
            </button>

            <button className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-white/5">
              2
            </button>

            <button className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-white/5">
              3
            </button>

            <span className="px-2 text-slate-500">...</span>

            <button className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-white/5">
              38
            </button>

            <button className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

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

function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    CRITICAL: "bg-red-500/10 text-red-300 border-red-400/20",
    HIGH: "bg-yellow-500/10 text-yellow-300 border-yellow-400/20",
    MEDIUM: "bg-violet-500/10 text-violet-300 border-violet-400/20",
    LOW: "bg-slate-500/10 text-slate-300 border-slate-400/20",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${styles[priority]}`}
    >
      {priority}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const dot =
    status === "Resolved"
      ? "bg-emerald-400"
      : status === "Open"
      ? "bg-slate-500"
      : "bg-violet-300";

  return (
    <div className="flex items-center gap-2 text-sm text-slate-300">
      <span className={`h-2 w-2 rounded-full ${dot}`} />
      {status}
    </div>
  );
}