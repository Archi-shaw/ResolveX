"use client";

import {
  Bell,
  CircleUserRound,
  Search,
  AlertTriangle,
  Users,
  FolderKanban,
  Gauge,
  UserPlus,
  Ticket,
  BarChart3,
} from "lucide-react";

export default function ManagerDashboardPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      {/* Navbar */}
      <header className="flex h-14 items-center justify-between border-b border-white/10 px-6">
        <div className="flex items-center gap-5">
          <h1 className="text-2xl font-bold">ResolveX Pro</h1>

          <div className="relative w-[240px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

            <input
              placeholder="Search systems..."
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
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-violet-300">
              Operational Overview
            </p>

            <h1 className="mt-2 text-6xl font-bold leading-none">
              Manager
              <br />
              Dashboard
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#121218] px-5 py-3 text-sm text-zinc-300 hover:bg-white/5">
              <Ticket className="h-4 w-4" />
              Assign Tickets
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#121218] px-5 py-3 text-sm text-zinc-300 hover:bg-white/5">
              <UserPlus className="h-4 w-4" />
              Invite Agents
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/10 px-5 py-3 text-sm text-violet-300 hover:bg-violet-500/20">
              <BarChart3 className="h-4 w-4" />
              View Analytics
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          <ManagerStatCard
            icon={<AlertTriangle className="h-5 w-5 text-red-300" />}
            title="Unassigned Tickets"
            value="14"
            subtitle="+3 from last hour"
            status="Critical"
            danger
          />

          <ManagerStatCard
            icon={<Users className="h-5 w-5 text-violet-300" />}
            title="Team Workload"
            value="82%"
            subtitle="18 / 22 Active"
            status="Real-time"
            progress
          />

          <ManagerStatCard
            icon={<FolderKanban className="h-5 w-5 text-yellow-300" />}
            title="In Progress"
            value="47"
            subtitle="Normal Load"
            status=""
          />

          <ManagerStatCard
            icon={<Gauge className="h-5 w-5 text-violet-300" />}
            title="Resolution Rate"
            value="94%"
            subtitle="+ 4% today"
            status="Avg. 14m"
          />
        </div>

        {/* Content */}
        <div className="mt-5 grid grid-cols-[2fr_1fr] gap-5">
          {/* Left */}
          <section className="rounded-3xl border border-white/10 bg-[#0b0b10] p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-4xl font-bold">
                  Productivity Metrics
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  Team output vs Service Level Agreement (SLA)
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-1">
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm">
                  Daily
                </button>

                <button className="px-4 py-2 text-sm text-zinc-500">
                  Weekly
                </button>
              </div>
            </div>

            {/* Fake Graph */}
            <div className="mt-20 flex h-[280px] items-end justify-between px-5">
              {[42, 31, 64, 55, 72, 28, 39].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4"
                >
                  <div
                    style={{
                      height: `${item * 2}px`,
                    }}
                    className="w-10 rounded-t-xl bg-violet-400/60"
                  />

                  <div className="text-center">
                    <p className="text-lg font-semibold">{item}</p>

                    <span className="text-xs text-zinc-600">
                      {
                        ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"][
                          index
                        ]
                      }
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Right */}
          <section className="rounded-3xl border border-white/10 bg-[#0b0b10] p-6">
            <h2 className="text-4xl font-bold">Recent Activity</h2>

            <div className="mt-10 space-y-10">
              <ActivityItem
                title="New Critical Ticket"
                desc="System failure reported in Zone-4 cluster. Immediate attention required."
                badge="High Priority"
                time="2 mins ago"
                purple
              />

              <ActivityItem
                title="Ticket Re-assigned"
                desc="#RX-4092 moved from Elena R. to Marcus C. (Load Balancing)"
                time="14 mins ago"
              />

              <ActivityItem
                title="SLA Warning"
                desc="Ticket #RX-3882 approaching 24-hour resolution window."
                badge="Warning"
                time="45 mins ago"
                yellow
              />
            </div>
          </section>
        </div>

        {/* Team Members */}
        <section className="mt-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-4xl font-bold">
              Active Team Members
            </h2>

            <button className="text-sm text-violet-300">
              View All
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <MemberCard
              name="Marcus Chen"
              role="Senior Support Agent"
              tickets="24 Tickets"
            />

            <MemberCard
              name="Elena Rivera"
              role="Infrastructure Team"
              tickets="18 Tickets"
            />

            <MemberCard
              name="Sarah Kim"
              role="Backend Operations"
              tickets="12 Tickets"
            />
          </div>
        </section>
      </section>
    </main>
  );
}

/* ---------------- Components ---------------- */

function ManagerStatCard({
  icon,
  title,
  value,
  subtitle,
  status,
  danger,
  progress,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  status: string;
  danger?: boolean;
  progress?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border bg-[#0b0b10] p-5 ${
        danger ? "border-red-400/20" : "border-white/10"
      }`}
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04]">
          {icon}
        </div>

        <span
          className={`text-sm ${
            danger ? "text-red-300" : "text-zinc-400"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="text-lg text-zinc-500">{title}</p>

      <div className="mt-2 flex items-end gap-3">
        <h2 className="text-5xl font-bold">{value}</h2>

        <span className="mb-2 text-sm text-zinc-400">
          {subtitle}
        </span>
      </div>

      {progress && (
        <div className="mt-5 h-2 rounded-full bg-white/10">
          <div className="h-full w-[82%] rounded-full bg-violet-400" />
        </div>
      )}
    </div>
  );
}

function ActivityItem({
  title,
  desc,
  badge,
  time,
  purple,
  yellow,
}: {
  title: string;
  desc: string;
  badge?: string;
  time: string;
  purple?: boolean;
  yellow?: boolean;
}) {
  return (
    <div className="relative pl-8">
      <div
        className={`absolute left-0 top-2 h-3 w-3 rounded-full ${
          yellow ? "bg-yellow-300" : "bg-violet-300"
        }`}
      />

      <div className="absolute left-[5px] top-5 h-full w-[1px] bg-white/10" />

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        {desc}
      </p>

      <div className="mt-4 flex items-center gap-3">
        {badge && (
          <span
            className={`rounded-full px-3 py-1 text-xs ${
              yellow
                ? "bg-yellow-500/10 text-yellow-300"
                : "bg-red-500/10 text-red-300"
            }`}
          >
            {badge}
          </span>
        )}

        <span className="text-xs text-zinc-600">{time}</span>
      </div>
    </div>
  );
}

function MemberCard({
  name,
  role,
  tickets,
}: {
  name: string;
  role: string;
  tickets: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b0b10] p-5">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-violet-500/20" />

        <div>
          <h3 className="text-xl font-semibold">{name}</h3>

          <p className="text-sm text-zinc-500">{role}</p>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-white/[0.03] p-3 text-sm text-zinc-300">
        {tickets}
      </div>
    </div>
  );
}