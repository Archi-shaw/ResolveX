"use client";

import {
  Bell,
  CircleUserRound,
  Download,
  Mail,
  Plus,
  Search,
  Sparkles,
  Timer,
  Ticket,
  Users,
} from "lucide-react";

export default function AdminPanel() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      {/* Top Navbar */}
      <header className="flex h-14 items-center justify-between border-b border-white/10 px-6">
        <div className="relative w-[360px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            placeholder="Search resources, logs, or tickets..."
            className="h-9 w-full rounded-full border border-white/10 bg-[#0b0b10] pl-10 pr-4 text-sm text-zinc-300 outline-none placeholder:text-zinc-600"
          />
        </div>

        <div className="flex items-center gap-4">
          <Bell className="h-4 w-4 text-zinc-400" />
          <span className="text-sm font-semibold tracking-widest text-zinc-300">
            COM ✦ D
          </span>

          <div className="flex items-center gap-2">
            <div className="text-right leading-tight">
              <p className="text-xs font-semibold">Alex Rivera</p>
              <p className="text-[10px] text-zinc-500">System Admin</p>
            </div>
            <CircleUserRound className="h-8 w-8 text-violet-300" />
          </div>
        </div>
      </header>

      <section className="px-6 py-6">
        {/* Title */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Command Center
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Global system overview for ResolveX Pro instances.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#111116] px-4 py-2 text-sm text-zinc-300 hover:bg-white/10">
              <Download className="h-4 w-4" />
              Export Report
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500">
              <Plus className="h-4 w-4" />
              New Ticket
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            title="TOTAL USERS"
            value="12,842"
            change="+9.2%"
            icon={<Users className="h-5 w-5 text-violet-300" />}
          />

          <StatCard
            title="OPEN TICKETS"
            value="142"
            change="↑ High"
            danger
            icon={<Ticket className="h-5 w-5 text-orange-300" />}
          />

          <StatCard
            title="AVG RESOLUTION"
            value="14.2m"
            change="↓ 4.1%"
            icon={<Timer className="h-5 w-5 text-yellow-300" />}
            description="Calculated over the last 24 hours."
          />

          <StatCard
            title="PENDING INVITES"
            value="48"
            change="Expiring soon"
            icon={<Mail className="h-5 w-5 text-violet-300" />}
          />
        </div>

        {/* Middle */}
        <div className="mt-4 grid grid-cols-[2fr_1fr] gap-4">
          <section className="rounded-2xl border border-white/10 bg-[#0b0b10] p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  Ticket Velocity Trends
                </h2>
                <p className="text-sm text-zinc-500">
                  Visualizing resolution flow across departments.
                </p>
              </div>

              <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-400">
                Last 30 Days
              </button>
            </div>

            <div className="flex h-72 items-end gap-6 px-4">
              {[80, 130, 100, 190, 140, 115, 125].map((height, index) => (
                <div key={index} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    style={{ height }}
                    className="w-full rounded-t-lg bg-violet-400/60"
                  />
                  <span className="text-xs text-zinc-500">
                    {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"][index]}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#0b0b10] p-6">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold">
              <Sparkles className="h-5 w-5 text-violet-300" />
              AI Insights
            </h2>

            <InsightCard
              label="ANOMALY DETECTED"
              time="2m ago"
              text="Spike in Billing API errors from US-East region. Recommend checking upstream provider logs."
            />

            <InsightCard
              label="OPTIMIZATION"
              time="1h ago"
              yellow
              text="Support response time is 15% slower than average. Distribute 3 more agents to Tier 2 tickets."
            />

            <button className="mt-5 w-full rounded-xl border border-violet-400/20 bg-violet-500/5 px-4 py-3 text-sm text-violet-300">
              Generate Full Intelligence Report
            </button>
          </section>
        </div>

        {/* Bottom */}
        <div className="mt-4 grid grid-cols-[1fr_2fr] gap-4">
          <section className="rounded-2xl border border-white/10 bg-[#0b0b10] p-6">
            <h2 className="mb-6 text-lg font-semibold">Priority Distribution</h2>

            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-[14px] border-violet-300">
              <div className="text-center">
                <p className="text-3xl font-bold">142</p>
                <p className="text-xs text-zinc-500">TICKETS</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <Legend label="Urgent" value="15%" />
              <Legend label="Medium" value="45%" />
              <Legend label="Low" value="40%" />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#0b0b10] p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Audit Logs Preview</h2>
                <p className="text-sm text-zinc-500">
                  Chronological record of system-wide administrative actions.
                </p>
              </div>

              <button className="text-sm text-violet-300">View All Logs</button>
            </div>

            <table className="w-full text-left text-sm">
              <thead className="text-zinc-500">
                <tr>
                  <th className="pb-4">Actor</th>
                  <th className="pb-4">Action</th>
                  <th className="pb-4">Resource</th>
                  <th className="pb-4">Timestamp</th>
                </tr>
              </thead>

              <tbody className="text-zinc-300">
                <AuditRow actor="Marcus K." action="PLAN UPDATE" resource="Global Settings Prod" />
                <AuditRow actor="Jane Doe" action="ACCESS REVOKED" resource="User-Dev-4041" red />
                <AuditRow actor="Alex Rivera" action="TICKET REASSIGNED" resource="REQ-993-B" green />
              </tbody>
            </table>
          </section>
        </div>
      </section>

      <button className="fixed bottom-10 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-violet-400 text-white shadow-lg shadow-violet-500/30">
        <Plus className="h-5 w-5" />
      </button>
    </main>
  );
}

function StatCard({
  title,
  value,
  change,
  icon,
  description,
  danger,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  description?: string;
  danger?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b0b10] p-5">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-400">{title}</p>
        {icon}
      </div>

      <div className="flex items-center gap-3">
        <h3 className="text-3xl font-bold">{value}</h3>
        <span
          className={`rounded-full px-2 py-1 text-xs ${
            danger
              ? "bg-red-500/10 text-red-400"
              : "bg-emerald-500/10 text-emerald-400"
          }`}
        >
          {change}
        </span>
      </div>

      {description && (
        <p className="mt-4 text-sm leading-5 text-zinc-500">{description}</p>
      )}

      {!description && (
        <div className="mt-8 h-1.5 rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-violet-400" />
        </div>
      )}
    </div>
  );
}

function InsightCard({
  label,
  time,
  text,
  yellow,
}: {
  label: string;
  time: string;
  text: string;
  yellow?: boolean;
}) {
  return (
    <div className="mb-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-2 flex justify-between text-xs">
        <span className={yellow ? "text-yellow-300" : "text-violet-300"}>
          {label}
        </span>
        <span className="text-zinc-500">{time}</span>
      </div>
      <p className="text-sm leading-6 text-zinc-200">{text}</p>
    </div>
  );
}

function Legend({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-zinc-400">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function AuditRow({
  actor,
  action,
  resource,
  red,
  green,
}: {
  actor: string;
  action: string;
  resource: string;
  red?: boolean;
  green?: boolean;
}) {
  return (
    <tr className="border-t border-white/5">
      <td className="py-4">{actor}</td>
      <td>
        <span
          className={`rounded px-2 py-1 text-xs ${
            red
              ? "bg-red-500/10 text-red-400"
              : green
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-blue-500/10 text-blue-400"
          }`}
        >
          {action}
        </span>
      </td>
      <td>{resource}</td>
      <td className="text-zinc-500">Oct 24, 14:22:10</td>
    </tr>
  );
}