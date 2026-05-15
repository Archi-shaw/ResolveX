"use client";

import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Filter,
  Pencil,
  Search,
  Settings,
  ShieldAlert,
  Timer,
  CheckCircle2,
} from "lucide-react";

const tasks = [
  {
    id: "#RX-8281",
    subject: "API Authentication Failure",
    desc: "User reporting 401 errors on production ...",
    priority: "CRITICAL",
    status: "In Progress",
    due: "Due in 14m",
  },
  {
    id: "#RX-8304",
    subject: "Subscription Tier Mismatch",
    desc: "Customer billed for Enterprise but stuck ...",
    priority: "HIGH",
    status: "Open",
    due: "Due in 1.2h",
  },
  {
    id: "#RX-8211",
    subject: "UI Glitch on Mobile Header",
    desc: "Logo overlaps with search icon on iOS 1...",
    priority: "MEDIUM",
    status: "Awaiting Info",
    due: "Due in 4.5h",
  },
  {
    id: "#RX-8200",
    subject: "Update Documentation: SDK v4",
    desc: "Internal task: Revise getting started guid...",
    priority: "LOW",
    status: "Open",
    due: "Due in 2d",
  },
];

export default function AgentTasksPage() {
  return (
    <div className="w-full space-y-7">
      {/* Top mini bar */}
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            placeholder="Search tasks, IDs, or priority..."
            className="h-10 w-full rounded-full border border-slate-800 bg-[#0b0b10] pl-10 pr-4 text-sm text-slate-300 outline-none placeholder:text-slate-600"
          />
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <Bell className="h-4 w-4" />
          <Settings className="h-4 w-4" />

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-semibold text-white">Alex Rivera</p>
              <p className="text-[10px] text-slate-500">SENIOR AGENT</p>
            </div>

            <div className="h-9 w-9 rounded-full bg-violet-500/20" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Assigned Tasks
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Manage and resolve tickets assigned to your queue.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-800 bg-[#0b0b10] px-4 py-2 text-sm text-slate-300 hover:bg-white/5">
            <Filter className="h-4 w-4" />
            Filters
          </button>

          <button className="flex items-center gap-2 rounded-lg border border-slate-800 bg-[#0b0b10] px-4 py-2 text-sm text-slate-300 hover:bg-white/5">
            <Pencil className="h-4 w-4" />
            Bulk Update
          </button>
        </div>
      </div>

      {/* Task Table */}
      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0b0b10]">
        <table className="w-full text-left">
          <thead className="bg-white/[0.04] text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-6 py-5">
                <input type="checkbox" className="accent-violet-400" />
              </th>
              <th className="px-6 py-5">Ticket ID</th>
              <th className="px-6 py-5">Subject</th>
              <th className="px-6 py-5">Priority</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5">SLA Deadline</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="border-t border-white/5 transition hover:bg-white/[0.02]"
              >
                <td className="px-6 py-6">
                  <input type="checkbox" className="accent-violet-400" />
                </td>

                <td className="px-6 py-6 font-semibold text-violet-300">
                  {task.id}
                </td>

                <td className="px-6 py-6">
                  <p className="font-semibold text-slate-200">
                    {task.subject}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {task.desc}
                  </p>
                </td>

                <td className="px-6 py-6">
                  <PriorityBadge priority={task.priority} />
                </td>

                <td className="px-6 py-6">
                  <StatusBadge status={task.status} />
                </td>

                <td
                  className={`px-6 py-6 text-sm font-medium ${
                    task.priority === "CRITICAL"
                      ? "text-red-300"
                      : "text-slate-400"
                  }`}
                >
                  {task.due}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-white/5 px-6 py-5">
          <p className="text-sm text-slate-400">
            Showing <span className="text-white">4</span> of{" "}
            <span className="text-white">28</span> tasks
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

            <button className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <MiniStatCard
          icon={<ShieldAlert className="h-5 w-5 text-red-300" />}
          label="SLA Breaches Near"
          value="3 Tickets"
          danger
        />

        <MiniStatCard
          icon={<Timer className="h-5 w-5 text-violet-300" />}
          label="Average Resolution"
          value="2.4h"
        />

        <MiniStatCard
          icon={<CheckCircle2 className="h-5 w-5 text-yellow-300" />}
          label="Completed Today"
          value="12 Tickets"
        />
      </div>
    </div>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    CRITICAL: "bg-red-500/10 text-red-300 border-red-400/20",
    HIGH: "bg-violet-500/10 text-violet-300 border-violet-400/20",
    MEDIUM: "bg-yellow-500/10 text-yellow-300 border-yellow-400/20",
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
  return (
    <div className="flex items-center gap-2 text-sm text-slate-300">
      <span className="h-2 w-2 rounded-full bg-violet-300" />
      {status}
    </div>
  );
}

function MiniStatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  danger?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0b0b10] p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04]">
          {icon}
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500">{label}</p>
          <h3 className="text-2xl font-bold text-white">{value}</h3>
        </div>
      </div>
    </div>
  );
}