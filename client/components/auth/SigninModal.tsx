
// "use client";

// import { motion, AnimatePresence } from "framer-motion";

// type SigninModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function SigninModal({ isOpen, onClose }: SigninModalProps) {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>          <motion.div
//             className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />

//           {/* Center wrapper */}
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center z-50 px-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             {/* Modal */}
//             <motion.div
//               onClick={(e) => e.stopPropagation()}
//               initial={{ opacity: 0, scale: 0.92, y: 30 }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//                 y: 0,
//                 transition: {
//                   type: "spring",
//                   stiffness: 220,
//                   damping: 20,
//                 },
//               }}
//               exit={{ opacity: 0, scale: 0.92, y: 20 }}
//               className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-black/90 p-8 shadow-2xl"
//             >
//               {/* Glow */}
//               <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-white/10 blur-[120px] rounded-full" />

//               {/* TITLE (ResolveX gradient style like button) */}
//               <h2 className="text-xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                 ResolveX Pro
//               </h2>

//               {/* Email */}
//               <label className="text-xs text-gray-400">Email</label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full mt-2 mb-5 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm outline-none 
//                 focus:border-white/30 focus:bg-white/10 transition"
//               />

//               {/* Password */}
//               <label className="text-xs text-gray-400">Password</label>
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 className="w-full mt-2 mb-6 px-4 py-3 rounded-lg bg-white border border-white/10 text-sm outline-none 
//                 focus:border-white/30 focus:bg-white/10 transition"
//               />

//               {/* Button */}
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium 
//                 hover:from-blue-500 hover:to-purple-500 transition"
//               >
//                 Continue
//               </motion.button>

//               {/* Footer */}
//               <p className="text-xs text-gray-500 mt-5 text-center">
//                 Only invited users allowed
//               </p>
//             </motion.div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }


"use client";

import { motion, AnimatePresence } from "framer-motion";

type SigninModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SigninModal({ isOpen, onClose }: SigninModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          
          {/* BACKDROP (click outside closes) */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 220,
                damping: 20,
              },
            }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-black/90 p-8 shadow-2xl"
          >
            {/* Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-white/10 blur-[120px] rounded-full" />

            {/* TITLE */}
            <h2 className="text-xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              ResolveX Pro
            </h2>

            {/* Email */}
            <label className="text-xs text-gray-400">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 mb-5 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 outline-none focus:border-white/30 transition"
            />

            {/* Password */}
            <label className="text-xs text-gray-400">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 mb-6 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 outline-none focus:border-white/30 transition"
            />

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition"
            >
              Continue
            </motion.button>

            {/* FOOTER */}
            <p className="text-xs text-gray-500 mt-5 text-center">
              Only invited users allowed
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}