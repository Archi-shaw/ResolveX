"use client";

import { Filter, Send, UserPlus } from "lucide-react";

const invites = [
  {
    recipient: "j.carter@enterprise.com",
    id: "INV-8821",
    role: "Operator",
    status: "Pending",
    sentAt: "2 hours ago",
  },
  {
    recipient: "m.ross@digital.io",
    id: "INV-8819",
    role: "Administrator",
    status: "Accepted",
    sentAt: "Yesterday",
  },
  {
    recipient: "dev-ops-alias@acme.org",
    id: "INV-8790",
    role: "System Architect",
    status: "Expired",
    sentAt: "8 days ago",
  },
  {
    recipient: "sarah.l@vector-tech.net",
    id: "INV-8812",
    role: "Analyst",
    status: "Pending",
    sentAt: "3 days ago",
  },
];

export default function AdminInvitationsPage() {
  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
          Access Management
        </p>

        <h1 className="mt-2 text-5xl font-bold tracking-tight text-white">
          Invitations
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
          Provision new access and manage existing pending requests for your
          organization.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[340px_1fr]">
        {/* Send Invite Card */}
        <section className="rounded-2xl border border-slate-800 bg-[#111116] p-6">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
            <UserPlus className="h-5 w-5 text-violet-300" />
            Send Invite
          </h2>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-400">
                Email Address
              </label>

              <input
                type="email"
                placeholder="colleague@acmecorp.com"
                className="h-12 w-full rounded-xl border border-slate-800 bg-[#09090d] px-4 text-sm text-slate-300 outline-none placeholder:text-slate-600 focus:border-violet-400/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-400">
                Assign Role
              </label>

              <select className="h-12 w-full rounded-xl border border-slate-800 bg-[#09090d] px-4 text-sm text-slate-300 outline-none focus:border-violet-400/40">
                <option>Technical Operator</option>
                <option>Administrator</option>
                <option>System Architect</option>
                <option>Analyst</option>
              </select>
            </div>

            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500"
            >
              <Send className="h-4 w-4" />
              Send Invitation
            </button>
          </form>

          <div className="mt-6 rounded-xl border border-slate-800 bg-white/[0.04] p-4">
            <p className="text-sm italic leading-6 text-slate-400">
              Invites are valid for 7 days. New users will receive a secure
              link to complete their registration.
            </p>
          </div>
        </section>

        {/* Invites Table */}
        <section className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111116]">
          <div className="flex items-center justify-between border-b border-slate-800 bg-white/[0.03] px-6 py-5">
            <div className="flex items-center gap-5 text-sm">
              <button className="border-b-2 border-violet-300 pb-2 font-semibold text-violet-300">
                All Invites
              </button>

              <button className="pb-2 text-slate-400 hover:text-white">
                Pending (12)
              </button>

              <button className="pb-2 text-slate-400 hover:text-white">
                Expired
              </button>
            </div>

            <button className="rounded-lg border border-slate-800 bg-[#09090d] p-2 text-slate-400 hover:text-white">
              <Filter className="h-4 w-4" />
            </button>
          </div>

          <table className="w-full text-left">
            <thead className="text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-6 py-4">Recipient</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Sent At</th>
              </tr>
            </thead>

            <tbody>
              {invites.map((invite) => (
                <tr
                  key={invite.id}
                  className="border-t border-white/5 transition hover:bg-white/[0.02]"
                >
                  <td className="px-6 py-5">
                    <p className="font-semibold text-slate-200">
                      {invite.recipient}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      ID: {invite.id}
                    </p>
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {invite.role}
                  </td>

                  <td className="px-6 py-5">
                    <StatusBadge status={invite.status} />
                  </td>

                  <td className="px-6 py-5 text-slate-400">
                    {invite.sentAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-between border-t border-white/5 px-6 py-5">
            <p className="text-sm text-slate-400">
              Showing <span className="text-white">4</span> of{" "}
              <span className="text-white">12</span> invitations
            </p>

            <div className="flex gap-2">
              <button className="rounded-lg border border-slate-800 px-4 py-2 text-sm text-slate-600">
                Previous
              </button>

              <button className="rounded-lg border border-slate-800 px-4 py-2 text-sm text-slate-300 hover:bg-white/5">
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Pending: "bg-violet-500/10 text-violet-300 border-violet-400/20",
    Accepted: "bg-yellow-500/10 text-yellow-300 border-yellow-400/20",
    Expired: "bg-red-500/10 text-red-300 border-red-400/20",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      • {status}
    </span>
  );
}