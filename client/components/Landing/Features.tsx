"use client";

import { motion } from "framer-motion";
import {
  Ticket,
  ShieldCheck,
  Zap,
  BarChart3,
  Building2,
  FileText,
} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  const features = [
    {
      icon: <Ticket size={24} />,
      title: "Workflow Engine",
      desc: "Streamline the entire ticket lifecycle from creation to resolution with structured workflows.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "RBAC",
      desc: "Implement fine-grained access control to ensure secure and role-specific collaboration.",
    },
    {
      icon: <Zap size={24} />,
      title: "Real-time Updates",
      desc: "Stay synchronized with instant updates, live status changes, and notifications.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics",
      desc: "Gain actionable insights with detailed metrics on performance and trends.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Multi-tenant",
      desc: "Support multiple teams or organizations with secure and isolated environments.",
    },
    {
      icon: <FileText size={24} />,
      title: "Audit Logs",
      desc: "Maintain full visibility with comprehensive tracking of all system activities.",
    },
  ];

  return (
    <section  id="features" className="relative w-full py-24 bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-gray-400 mt-4">
            Everything you need to manage workflows like a modern SaaS platform.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.07]"
            >

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-white/5 to-transparent" />

              <div className="relative z-10">

                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-5 shadow-md">
                  {f.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {f.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {f.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}