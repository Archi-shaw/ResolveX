// "use client";

// import { motion } from "framer-motion";
// import {
//   Ticket,
//   ShieldCheck,
//   Zap,
//   BarChart3,
//   Building2,
//   FileText,
// } from "lucide-react";

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0 },
// };

// export default function Features() {
//   const features = [
//     {
//       icon: <Ticket size={24} />,
//       title: "Workflow Engine",
//       desc: "Streamline the entire ticket lifecycle from creation to resolution with structured workflows.",
//     },
//     {
//       icon: <ShieldCheck size={24} />,
//       title: "RBAC",
//       desc: "Implement fine-grained access control to ensure secure and role-specific collaboration.",
//     },
//     {
//       icon: <Zap size={24} />,
//       title: "Real-time Updates",
//       desc: "Stay synchronized with instant updates, live status changes, and notifications.",
//     },
//     {
//       icon: <BarChart3 size={24} />,
//       title: "Analytics",
//       desc: "Gain actionable insights with detailed metrics on performance and trends.",
//     },
//     {
//       icon: <Building2 size={24} />,
//       title: "Multi-tenant",
//       desc: "Support multiple teams or organizations with secure and isolated environments.",
//     },
//     {
//       icon: <FileText size={24} />,
//       title: "Audit Logs",
//       desc: "Maintain full visibility with comprehensive tracking of all system activities.",
//     },
//   ];

//   return (
//     <section  id="features" className="relative w-full py-24 bg-black text-white overflow-hidden">

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

//       <div className="relative max-w-7xl mx-auto px-6">

//         <motion.div
//           variants={item}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
//             Powerful Features for Modern Teams
//           </h2>
//           <p className="text-gray-400 mt-4">
//             Everything you need to manage workflows like a modern SaaS platform.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               variants={item}
//               whileHover={{ y: -6 }}
//               className="group relative p-6 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.07]"
//             >

//               <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-white/5 to-transparent" />

//               <div className="relative z-10">

//                 <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-5 shadow-md">
//                   {f.icon}
//                 </div>

//                 <h3 className="text-lg font-semibold mb-2">
//                   {f.title}
//                 </h3>

//                 <p className="text-sm text-gray-400 leading-relaxed">
//                   {f.desc}
//                 </p>

//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Workflow,
  Lock,
  RefreshCcw,
  Building2,
  Bot,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Workflow Engine",
    desc: "Design complex, multi-stage automation flows with visual builders, support queues, and SLA-based branching.",
    large: true,
  },
  {
    icon: Lock,
    title: "RBAC",
    desc: "Granular permission controls at the organization, team, and individual level. Zero trust by design.",
  },
  {
    icon: RefreshCcw,
    title: "Real-time",
    desc: "Experience live status updates, delivery alerts, and notifications instantly.",
  },
  {
    icon: Building2,
    title: "Multi-tenant",
    desc: "Isolate data and environments for each client with scalable architecture.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Self-healing workflows and intelligent ticket routing powered by AI.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0B090F] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Engineered for Scale
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            Precision tools for high-velocity engineering and support teams.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 ${
                  feature.large ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Icon className="mb-5 text-violet-300" size={24} />

                <h3 className="mb-2 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="text-sm leading-6 text-zinc-400">
                  {feature.desc}
                </p>

                {feature.large && (
                  <Image
                    src="/assets/circuit-bg.png"
                    alt="Workflow engine visual"
                    width={800}
                    height={500}
                    className="mt-8 rounded-xl border border-white/10 object-cover"
                  />
                )}

                {!feature.large && index === 1 && (
                  <Zap className="absolute right-8 top-8 text-white/5" size={72} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}