"use client";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO at CloudLink",
    text: "ResolveX Pro transformed our multi-tenant support operations. We’ve seen a 40% reduction in response time since migrating.",
  },
  {
    name: "Michael Chen",
    role: "Head of Engineering, SaaSFlow",
    text: "The AI automation layer is genuinely smart. It handles routine triaging so our engineers can focus on complex architecture.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0B090F] py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-8"
          >
            <div className="mb-4 text-yellow-300">★★★★★</div>
            <p className="mb-6 text-lg font-medium italic leading-7">
              “{item.text}”
            </p>
            <p className="text-sm font-semibold">{item.name}</p>
            <p className="text-xs text-zinc-500">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}