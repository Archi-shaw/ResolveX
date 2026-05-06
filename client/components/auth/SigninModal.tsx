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
                    <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
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
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-white/10 blur-[120px] rounded-full" />

            <h2 className="text-xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              ResolveX Pro
            </h2>
            <label className="text-xs text-gray-400">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 mb-5 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 outline-none focus:border-white/30 transition"
            />
            <label className="text-xs text-gray-400">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 mb-6 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 outline-none focus:border-white/30 transition"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition"
            >
              Continue
            </motion.button>

            <p className="text-xs text-gray-500 mt-5 text-center">
              Only invited users allowed
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}






