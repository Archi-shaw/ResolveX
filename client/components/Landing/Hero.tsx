// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0 },
// };

// type HeroProps = {
//   onLoginClick: () => void;
// };


// export default function Hero({ onLoginClick }: HeroProps) {
//   return (
//     <motion.section
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="w-full bg-black text-white overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

//         <div>

//           <motion.div
//             variants={fadeUp}
//             className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-white/10 text-xs text-gray-400"
//           >
//             ResolveX Pro
//           </motion.div>

//           <motion.h1
//             variants={fadeUp}
//             className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight"
//           >
//             Multi-tenant workflow engine
//             <br />
//             for modern teams
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             className="mt-6 text-gray-500 text-lg max-w-xl"
//           >
//             Manage tickets, automate workflows, and track performance —
//             all in one scalable SaaS platform.
//           </motion.p>

//           <motion.div
//             variants={fadeUp}
//             className="mt-8 flex gap-4"
//           >
//             <button
//               onClick={onLoginClick}
//               className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
//             >
//               Get Started
//             </button>

//           </motion.div>

//         </div>

//         <motion.div variants={fadeUp}>

//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >

//             <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">

//               <div className="flex justify-between mb-4">
//                 <span className="text-sm text-gray-400">Dashboard</span>

//                 <div className="flex items-center gap-2 text-xs text-green-500">
//                   <span className="relative flex h-2 w-2">
//                     <span className="absolute h-full w-full rounded-full bg-green-400 opacity-50 animate-ping"></span>
//                     <span className="relative h-2 w-2 rounded-full bg-green-400"></span>
//                   </span>
//                   Live
//                 </div>
//               </div>

//               <div className="h-24 bg-white/5 rounded-md mb-4">
//                 <svg viewBox="0 0 300 100" className="w-full h-full">

//                   <motion.path
//                     d="M0 80 L40 60 L80 70 L120 40 L160 50 L200 30 L240 45 L280 20"
//                     fill="none"
//                     stroke="#ffffff"
//                     strokeOpacity="0.7"
//                     strokeWidth="2"
//                     initial={{ pathLength: 0 }}
//                     animate={{ pathLength: 1 }}
//                     transition={{ duration: 1.4, ease: "easeInOut" }}
//                   />

//                   {[
//                     [0, 80],
//                     [40, 60],
//                     [80, 70],
//                     [120, 40],
//                     [160, 50],
//                     [200, 30],
//                     [240, 45],
//                     [280, 20],
//                   ].map(([x, y], i) => (
//                     <motion.circle
//                       key={i}
//                       cx={x}
//                       cy={y}
//                       r="2.5"
//                       fill="#fff"
//                       initial={{ opacity: 0, scale: 0 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 0.8 + i * 0.1 }}
//                     />
//                   ))}
//                 </svg>
//               </div>

// <div className="space-y-3 text-sm">
//   {[
//     ["Bug Fix - Login", "In Progress"],
//     ["API Integration", "Completed"],
//     ["UI Improvements", "Open"],
//   ].map(([title, status], i) => {
//     const statusColor =
//       status === "In Progress"
//         ? "text-yellow-400"
//         : status === "Completed"
//         ? "text-green-400"
//         : "text-blue-400";

//     return (
//       <motion.div
//         key={i}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 + i * 0.15 }}
//         className="flex justify-between text-gray-300"
//       >
//         <span>{title}</span>
//         <span className={statusColor}>{status}</span>
//       </motion.div>
//     );
//   })}
// </div>
//             </div>
//           </motion.div>
//         </motion.div>

//       </div>
//     </motion.section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type HeroProps = {
  onSignupClick: () => void;
};

export default function Hero({ onSignupClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B090F] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.12),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200">
            # NEXT-GEN WORKFLOW ENGINE
          </div>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Multi-tenant workflow engine for modern teams
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
            Manage tickets, automate complex workflows, and track cross-organization
            performance in a single pane of glass. Built for enterprise reliability.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={onSignupClick}
              className="rounded-lg bg-violet-300 px-5 py-3 text-sm font-medium text-black transition hover:bg-violet-200"
            >
              Get Started
            </button>

            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Book Demo <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-violet-950/30">
            <div className="mb-3 flex items-center justify-between px-2">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-zinc-500">00. Sec</span>
            </div>

            <Image
              src="/assets/hero-dashboard.png"
              alt="ResolveX analytics dashboard"
              width={700}
              height={500}
              className="rounded-2xl border border-white/10 object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}