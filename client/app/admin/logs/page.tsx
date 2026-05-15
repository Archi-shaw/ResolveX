"use client";

import {
  Calendar,
  User,
  Zap,
  Filter,
  Download,
  RefreshCw,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Shield,
  Database,
  HardDrive,
} from "lucide-react";

const logs = [
  {
    actor: "Marcus Chen",
    email: "marcus.c@acme.com",
    action: "Ticket Updated",
    entity: "INC-9842-PROD",
    timestamp: "2024-10-12 14:22:01",
    ip: "192.168.1.142",
    status: "Success",
  },
  {
    actor: "Sarah Drasner",
    email: "s.drasner@acme.com",
    action: "User Invited",
    entity: "ORG-INV-771",
    timestamp: "2024-10-12 14:18:55",
    ip: "45.22.189.11",
    status: "Success",
  },
  {
    actor: "Alex Rivera",
    email: "a.rivera@acme.com",
    action: "Password Reset Failed",
    entity: "USR-882-AUTH",
    timestamp: "2024-10-12 14:05:12",
    ip: "201.12.88.42",
    status: "Failed",
  },
  {
    actor: "System Process",
    email: "internal_daemon",
    action: "Backup Initiated",
    entity: "DB-PROD-REPLICA",
    timestamp: "2024-10-12 14:00:00",
    ip: "10.0.0.1",
    status: "In Progress",
  },
];

export default function AuditLogsPage() {
  return (
    <div className="w-full space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-3">
          <FilterButton icon={<Calendar className="h-4 w-4" />} label="Last 24 Hours" />
          <FilterButton icon={<User className="h-4 w-4" />} label="All Users" />
          <FilterButton icon={<Zap className="h-4 w-4" />} label="Action Type" />

          <button className="flex items-center gap-2 rounded-xl bg-violet-500/20 px-5 py-3 text-sm font-medium text-violet-200 hover:bg-violet-500/30">
            <Filter className="h-4 w-4" />
            Advanced Filters
          </button>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-slate-800 bg-[#0b0b10] px-5 py-3 text-sm font-medium text-slate-300 hover:bg-white/5">
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <LogStatCard
          title="Total Logs (24h)"
          value="12,482"
          sub="+14.2% vs yesterday"
          icon={<Database className="h-16 w-16 text-white/5" />}
        />

        <LogStatCard
          title="Security Events"
          value="42"
          sub="Requires immediate review"
          danger
          icon={<Shield className="h-16 w-16 text-white/5" />}
        />

        <LogStatCard
          title="Active Actors"
          value="158"
          sub="Unique user identifiers"
          icon={<User className="h-16 w-16 text-white/5" />}
        />

        <LogStatCard
          title="Storage Usage"
          value="84.2 GB"
          sub=""
          icon={<HardDrive className="h-16 w-16 text-white/5" />}
          progress
        />
      </div>

      {/* Activity Feed */}
      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0b0b10]">
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-white">Activity Feed</h2>

            <span className="rounded-md bg-violet-500/20 px-2 py-1 text-xs font-semibold text-violet-300">
              LIVE STREAM
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <RefreshCw className="h-4 w-4" />
            <MoreVertical className="h-4 w-4" />
          </div>
        </div>

        <table className="w-full text-left">
          <thead className="text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-6 py-5">Actor</th>
              <th className="px-6 py-5">Action</th>
              <th className="px-6 py-5">Entity</th>
              <th className="px-6 py-5">Timestamp</th>
              <th className="px-6 py-5">IP Address</th>
              <th className="px-6 py-5">Status</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr
                key={log.entity}
                className="border-t border-white/5 transition hover:bg-white/[0.02]"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-xs font-semibold text-violet-200">
                      {log.actor
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-200">
                        {log.actor}
                      </p>
                      <p className="text-xs text-slate-500">{log.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 text-slate-300">{log.action}</td>

                <td className="px-6 py-5">
                  <span className="rounded-md bg-white/10 px-3 py-2 text-xs font-semibold text-slate-300">
                    {log.entity}
                  </span>
                </td>

                <td className="px-6 py-5 text-slate-400">
                  {log.timestamp}
                </td>

                <td className="px-6 py-5 text-slate-400">{log.ip}</td>

                <td className="px-6 py-5">
                  <StatusBadge status={log.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-white/5 px-6 py-5">
          <p className="text-sm text-slate-400">
            Showing <span className="text-white">1</span> to{" "}
            <span className="text-white">25</span> of{" "}
            <span className="text-white">12,482</span> logs
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
              500
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

function FilterButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex items-center gap-2 rounded-xl border border-slate-800 bg-[#0b0b10] px-5 py-3 text-sm font-medium text-slate-300 hover:bg-white/5">
      {icon}
      {label}
    </button>
  );
}

function LogStatCard({
  title,
  value,
  sub,
  icon,
  danger,
  progress,
}: {
  title: string;
  value: string;
  sub: string;
  icon: React.ReactNode;
  danger?: boolean;
  progress?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0b0b10] p-5">
      <div className="relative z-10">
        <p className="text-sm font-semibold text-slate-400">{title}</p>

        <h3
          className={`mt-2 text-4xl font-bold ${
            danger ? "text-red-300" : "text-white"
          }`}
        >
          {value}
        </h3>

        {sub && (
          <p
            className={`mt-3 text-xs ${
              danger ? "text-slate-400" : "text-yellow-300"
            }`}
          >
            {sub}
          </p>
        )}

        {progress && (
          <div className="mt-6 h-1.5 rounded-full bg-white/10">
            <div className="h-full w-[68%] rounded-full bg-violet-300" />
          </div>
        )}
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        {icon}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Success: "bg-emerald-500/10 text-emerald-300 border-emerald-400/20",
    Failed: "bg-red-500/10 text-red-300 border-red-400/20",
    "In Progress": "bg-violet-500/10 text-violet-300 border-violet-400/20",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status.toUpperCase()}
    </span>
  );
}