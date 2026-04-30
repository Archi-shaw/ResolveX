"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Create Organization",
    desc: "Set up your workspace and configure your environment.",
  },
  {
    title: "Invite Team Members",
    desc: "Collaborate by adding your team in seconds.",
  },
  {
    title: "Assign Roles",
    desc: "Control access with structured role-based permissions.",
  },
  {
    title: "Manage Tickets",
    desc: "Track and resolve issues with streamlined workflows.",
  },
  {
    title: "Track Performance",
    desc: "Analyze productivity with real-time insights.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="docs"
      className="w-full py-32 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            How it works
          </h2>
          <p className="text-gray-400 mt-5 text-lg">
            A simple, powerful workflow from setup to scale.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute top-12 left-0 right-0 h-px bg-white/10" />
          <motion.div
            className="grid md:grid-cols-5 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                className="relative group"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full 
                  bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm shadow-md">
                    {i + 1}
                  </div>
                </div>
                <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md 
                transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-white/10 to-transparent blur-xl" />
                  <div className="relative z-10">
                    <h3 className="text-base font-semibold mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>

                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}