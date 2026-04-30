"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="#footer" className="w-full bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <Image
              src="/assets/logo.png"
              alt="ResolveX"
              width={100}
              height={100}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              ResolveX is a modern workflow platform designed to help teams manage tickets,
              automate processes, and scale efficiently.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <Link href="#features" className="block hover:text-white transition">
                Features
              </Link>
              <Link href="#pricing" className="block hover:text-white transition">
                Pricing
              </Link>
              <Link href="#how-it-works" className="block hover:text-white transition">
                How it works
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <Link href="#" className="block hover:text-white transition">
                About
              </Link>
              <Link href="#" className="block hover:text-white transition">
                Careers
              </Link>
              <Link href="#" className="block hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <Link href="#" className="block hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="#" className="block hover:text-white transition">
                Terms of Service
              </Link>
            </div>
          </div>

        </div>
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ResolveX. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">
              Twitter
            </Link>
            <Link href="#" className="hover:text-white transition">
              GitHub
            </Link>
            <Link href="#" className="hover:text-white transition">
              LinkedIn
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}