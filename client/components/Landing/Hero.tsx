"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <motion.div
            variants={fadeUp}
            className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-white/10 text-xs text-gray-400"
          >
            ResolveX Pro
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight"
          >
            Multi-tenant workflow engine
            <br />
            for modern teams
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-500 text-lg max-w-xl"
          >
            Manage tickets, automate workflows, and track performance —
            all in one scalable SaaS platform.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex gap-4"
          >
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Get Started
            </Link>

            <Link
              href="/demo"
              className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition"
            >
              Request Demo
            </Link>
          </motion.div>

        </div>

        <motion.div variants={fadeUp}>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">

              <div className="flex justify-between mb-4">
                <span className="text-sm text-gray-400">Dashboard</span>

                <div className="flex items-center gap-2 text-xs text-green-500">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full rounded-full bg-green-400 opacity-50 animate-ping"></span>
                    <span className="relative h-2 w-2 rounded-full bg-green-400"></span>
                  </span>
                  Live
                </div>
              </div>

              <div className="h-24 bg-white/5 rounded-md mb-4">
                <svg viewBox="0 0 300 100" className="w-full h-full">

                  <motion.path
                    d="M0 80 L40 60 L80 70 L120 40 L160 50 L200 30 L240 45 L280 20"
                    fill="none"
                    stroke="#ffffff"
                    strokeOpacity="0.7"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                  />

                  {[
                    [0, 80],
                    [40, 60],
                    [80, 70],
                    [120, 40],
                    [160, 50],
                    [200, 30],
                    [240, 45],
                    [280, 20],
                  ].map(([x, y], i) => (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="2.5"
                      fill="#fff"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    />
                  ))}
                </svg>
              </div>

<div className="space-y-3 text-sm">
  {[
    ["Bug Fix - Login", "In Progress"],
    ["API Integration", "Completed"],
    ["UI Improvements", "Open"],
  ].map(([title, status], i) => {
    const statusColor =
      status === "In Progress"
        ? "text-yellow-400"
        : status === "Completed"
        ? "text-green-400"
        : "text-blue-400";

    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 + i * 0.15 }}
        className="flex justify-between text-gray-300"
      >
        <span>{title}</span>
        <span className={statusColor}>{status}</span>
      </motion.div>
    );
  })}
</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}