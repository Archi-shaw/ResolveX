"use client";

import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  onLoginClick: () => void;
};


export default function Navbar({ onLoginClick }: NavbarProps) {
  return (
    <nav className="w-full sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="ResolveX Logo"
            width={100}
            height={100}
            className="h-24 w-auto object-contain"
          />
        </Link>

       <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
  {[
    { label: "Features", href: "#features" },
    { label: "Docs", href: "#docs" },
  ].map((item) => (
    <Link
      key={item.label}
      href={item.href}
      className="relative group px-2 py-1"
    >
      <span className="transition-colors duration-200 group-hover:text-white">
        {item.label}
      </span>

      <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  ))}
</div>

        <div>
         <button
  onClick={onLoginClick}
  className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-lg 
  bg-gradient-to-r from-blue-600 to-purple-600 
  hover:from-blue-500 hover:to-purple-500 
  transition-all duration-300"
>
  Login
</button>
        </div>

      </div>
    </nav>
  );
}