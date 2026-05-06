"use client";

import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    items: ["Up to 10 Agents", "5 Workflows", "Basic Analytics"],
  },
  {
    name: "Professional",
    price: "$199",
    popular: true,
    items: ["Unlimited Agents", "50 Workflows", "AI Optimization", "Custom RBAC Roles"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    items: ["Dedicated Instance", "White-labeling", "24/7 Priority Support"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0B090F] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-3xl font-semibold">
          Flexible Enterprise Pricing
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-violet-300 bg-white/[0.06]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-300 px-3 py-1 text-xs text-black">
                  Most Popular
                </span>
              )}

              <p className="mb-4 text-xs uppercase text-zinc-400">
                {plan.name}
              </p>

              <h3 className="mb-8 text-4xl font-semibold">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="text-sm text-zinc-500"> /mo</span>
                )}
              </h3>

              <div className="space-y-3">
                {plan.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-violet-300" />
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full rounded-lg py-3 text-sm font-medium ${
                  plan.popular
                    ? "bg-violet-300 text-black hover:bg-violet-200"
                    : "border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : `Choose ${plan.name}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}