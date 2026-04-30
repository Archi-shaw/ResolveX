"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SignupModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SignupModal({
  isOpen,
  onClose,
}: SignupModalProps) {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const generateSlug = (value: string) => {
    setName(value);
    setSlug(
      value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
    );
  };

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
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-black/80 p-8 backdrop-blur-xl"
          >
                        <h1 className="text-xl font-semibold text-center mb-1 text-white">
              Create Organization
            </h1>

            <p className="text-sm text-gray-500 text-center mb-8">
              Set up your workspace in seconds
            </p>
            <label className="text-xs text-gray-400">
              Organization Name
            </label>
            <input
              value={name}
              onChange={(e) => generateSlug(e.target.value)}
              placeholder="Enter company or team name"
              className="w-full mt-2 mb-4 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500"
            />
            <p className="text-xs text-gray-600 mb-6">
              This will be visible to your team
            </p>
            <label className="text-xs text-gray-400">
              Workspace URL
            </label>
            <div className="flex items-center mt-2 mb-6">
              <span className="text-gray-500 text-sm">
                resolvex.com/
              </span>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="acme-inc"
                className="flex-1 ml-2 px-3 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
              />
            </div>
            <label className="text-xs text-gray-400">Industry</label>
            <select className="w-full mt-2 mb-6 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white">
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Other</option>
            </select>
            <label className="text-xs text-gray-400">Team Size</label>
            <select className="w-full mt-2 mb-6 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white">
              <option>1–10</option>
              <option>11–50</option>
              <option>51–200</option>
              <option>200+</option>
            </select>
            <label className="text-xs text-gray-400">Your Role</label>
            <select className="w-full mt-2 mb-6 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white">
              <option>Admin (recommended)</option>
              <option>Manager</option>
            </select>
            <label className="text-xs text-gray-400">
              Invite Team Members (optional)
            </label>
            <input
              placeholder="email1@company.com, email2@company.com"
              className="w-full mt-2 mb-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500"
            />
            <p className="text-xs text-gray-600 mb-6">
              Separate emails with commas
            </p>
            <div className="flex gap-3">
              <button className="flex-1 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 font-medium text-white">
                Create Organization
              </button>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-lg border border-white/10 text-gray-300"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}