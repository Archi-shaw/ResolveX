"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "How does multi-tenancy work?",
    a: "Each organization gets isolated data, users, roles, workflows, and analytics inside a secure shared platform.",
  },
  {
    q: "Is my data encrypted at rest?",
    a: "Yes, every tenant environment uses AES-256 encryption at rest and TLS 1.3 in transit.",
  },
  {
    q: "Can I migrate from Jira or Zendesk?",
    a: "Yes, ResolveX supports structured imports for tickets, users, roles, and workflow mappings.",
  },
  {
    q: "What is your uptime SLA?",
    a: "Enterprise plans include dedicated infrastructure with a 99.9% uptime SLA.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(1);

  return (
    <section className="bg-[#0B090F] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="rounded-xl border border-white/10 bg-white/[0.035]"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium"
              >
                {faq.q}
                {open === index ? <X size={16} /> : <Plus size={16} />}
              </button>

              {open === index && (
                <p className="px-5 pb-5 text-sm leading-6 text-zinc-400">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}