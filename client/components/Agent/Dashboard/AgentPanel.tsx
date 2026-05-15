"use client";

import {
  Bell,
  CircleUserRound,
  Search,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Clock3,
  MoreVertical,
  Filter,
  MessageSquare,
  RefreshCcw,
} from "lucide-react";

export default function AgentPanel() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      {/* Navbar */}
      <header className="flex h-14 items-center justify-between border-b border-white/10 px-6">
        <div className="flex items-center gap-5">
          <h1 className="text-2xl font-bold">ResolveX Pro</h1>

          <div className="relative w-[250px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

            <input
              placeholder="Search workflow..."
              className="h-10 w-full rounded-xl border border-white/10 bg-[#0c0c11] pl-10 pr-4 text-sm outline-none placeholder:text-zinc-600"
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
        {/* Top Stats */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            icon={<CheckCircle2 className="h-5 w-5 text-violet-300" />}
            value="12"
            title="My Open Tickets"
            status="Active"
          />

          <StatCard
            icon={<AlertTriangle className="h-5 w-5 text-red-300" />}
            value="03"
            title="SLA Breaches"
            status="Critical"
            danger
          />

          <StatCard
            icon={<Clock3 className="h-5 w-5 text-yellow-300" />}
            value="28"
            title="Resolved Today"
            status="Daily"
          />

          <StatCard
            icon={<Flame className="h-5 w-5 text-violet-300" />}
            value="05"
            title="High Priority"
            status="Urgent"
          />
        </div>

        {/* Main Layout */}
        <div className="mt-5 grid grid-cols-[2fr_1fr] gap-5">
          {/* Left */}
          <div className="space-y-5">
            {/* Assigned Queue */}
            <section className="rounded-2xl border border-white/10 bg-[#0b0b10]">
              <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
                <h2 className="text-3xl font-semibold tracking-tight">
                  Assigned Work Queue
                </h2>

                <div className="flex items-center gap-3">
                  <Filter className="h-4 w-4 text-zinc-500" />
                  <MoreVertical className="h-4 w-4 text-zinc-500" />
                </div>
              </div>

              <div className="px-6 py-4">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-zinc-500">
                      <th className="pb-4">Ticket</th>
                      <th className="pb-4">Requester</th>
                      <th className="pb-4">Priority</th>
                      <th className="pb-4">Time Left</th>
                    </tr>
                  </thead>

                  <tbody>
                    <QueueRow
                      id="#RX-4922"
                      title="SSO Login failure on mobile ..."
                      requester="John Doe"
                      priority="HIGH"
                      time="14m 20s"
                      danger
                    />

                    <QueueRow
                      id="#RX-4925"
                      title="API Rate limit adjustment re..."
                      requester="Alice Smith"
                      priority="MEDIUM"
                      time="02h 45m"
                    />

                    <QueueRow
                      id="#RX-4930"
                      title="Bulk export formatting error"
                      requester="Elena Vance"
                      priority="LOW"
                      time="06h 12m"
                      low
                    />
                  </tbody>
                </table>
              </div>
            </section>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-4">
              <ActionCard
                icon={<RefreshCcw className="h-5 w-5 text-violet-300" />}
                title="Update Status"
                subtitle="Bulk change workflow"
              />

              <ActionCard
                icon={<MessageSquare className="h-5 w-5 text-zinc-300" />}
                title="Post Internal Note"
                subtitle="Add private context"
              />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {/* Weekly Goal */}
            <section className="rounded-2xl border border-white/10 bg-[#0b0b10] p-6">
              <h2 className="text-4xl font-bold leading-tight">
                Weekly Goal
                <br />
                Progress
              </h2>

              <div className="mt-8 space-y-6">
                <ProgressItem
                  title="Ticket Resolution"
                  value="82%"
                  width="82%"
                  purple
                />

                <ProgressItem
                  title="Avg. Response Time"
                  value="95%"
                  width="95%"
                />
              </div>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-zinc-300">
                  Tier 2 Performance
                </p>

                <p className="mt-1 text-lg font-semibold">
                  Top 5% this month
                </p>
              </div>
            </section>

            {/* Activity Feed */}
            <section className="rounded-2xl border border-white/10 bg-[#0b0b10] p-6">
              <h2 className="mb-6 text-4xl font-bold">Activity Feed</h2>

              <div className="space-y-6">
                <FeedItem
                  name="Mark Wilson"
                  action="mentioned you in #RX-4911"
                  message="@Agent, can you double check the log timestamp on this?"
                  time="12 MINUTES AGO"
                />

                <FeedItem
                  name="System Agent"
                  action="auto-escalated #RX-4922"
                  time="45 MINUTES AGO"
                  system
                />

                <FeedItem
                  name="Sarah Chen"
                  action="closed #RX-4889"
                  time="2 HOURS AGO"
                />
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------- Components ---------------- */

function StatCard({
  icon,
  value,
  title,
  status,
  danger,
}: {
  icon: React.ReactNode;
  value: string;
  title: string;
  status: string;
  danger?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border bg-[#0b0b10] p-5 ${
        danger ? "border-red-400/20" : "border-white/10"
      }`}
    >
      <div className="mb-5 flex items-center justify-between">
        {icon}

        <span
          className={`text-sm ${
            danger ? "text-red-300" : "text-zinc-400"
          }`}
        >
          {status}
        </span>
      </div>

      <h2 className="text-5xl font-bold">{value}</h2>

      <p className="mt-2 text-lg text-zinc-400">{title}</p>
    </div>
  );
}

function QueueRow({
  id,
  title,
  requester,
  priority,
  time,
  danger,
  low,
}: {
  id: string;
  title: string;
  requester: string;
  priority: string;
  time: string;
  danger?: boolean;
  low?: boolean;
}) {
  return (
    <tr className="border-t border-white/5">
      <td className="py-5">
        <p className="font-semibold text-violet-300">{id}</p>
        <p className="mt-1 text-sm text-zinc-500">{title}</p>
      </td>

      <td className="text-zinc-300">{requester}</td>

      <td>
        <span
          className={`rounded-md px-2 py-1 text-xs font-medium ${
            danger
              ? "bg-red-500/10 text-red-300"
              : low
              ? "bg-violet-500/10 text-violet-300"
              : "bg-yellow-500/10 text-yellow-300"
          }`}
        >
          {priority}
        </span>
      </td>

      <td className={danger ? "text-red-300" : "text-zinc-400"}>
        {time}
      </td>
    </tr>
  );
}

function ActionCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b0b10] p-5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>
    </div>
  );
}

function ProgressItem({
  title,
  value,
  width,
  purple,
}: {
  title: string;
  value: string;
  width: string;
  purple?: boolean;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-zinc-400">{title}</span>
        <span>{value}</span>
      </div>

      <div className="h-2 rounded-full bg-white/10">
        <div
          style={{ width }}
          className={`h-full rounded-full ${
            purple ? "bg-violet-400" : "bg-yellow-300"
          }`}
        />
      </div>
    </div>
  );
}

function FeedItem({
  name,
  action,
  message,
  time,
  system,
}: {
  name: string;
  action: string;
  message?: string;
  time: string;
  system?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <div
        className={`mt-1 h-10 w-10 rounded-full ${
          system ? "bg-yellow-500/20" : "bg-violet-500/20"
        }`}
      />

      <div>
        <p className="text-sm font-medium">
          {name}{" "}
          <span className="font-normal text-zinc-400">{action}</span>
        </p>

        {message && (
          <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm italic text-zinc-400">
            {message}
          </div>
        )}

        <p className="mt-2 text-xs text-zinc-600">{time}</p>
      </div>
    </div>
  );
}