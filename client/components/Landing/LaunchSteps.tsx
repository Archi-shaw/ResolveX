"use client";

const steps = [
  ["Create Org", "Initialize your unique enterprise namespace with encrypted cloud storage."],
  ["Invite Members", "Onboard your team via SSO or secure magic links with domain verification."],
  ["Assign Roles", "Define custom policies and assign predefined security clearance levels."],
  ["Manage Tickets", "Activate automation triggers and start resolving at peak efficiency."],
];

export default function LaunchSteps() {
  return (
    <section id="docs" className="bg-[#0B090F] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold">Launch in Minutes</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map(([title, desc], index) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-violet-300 text-violet-200">
                {index + 1}
              </div>

              <h3 className="mb-2 text-sm font-semibold">{title}</h3>
              <p className="text-xs leading-5 text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}