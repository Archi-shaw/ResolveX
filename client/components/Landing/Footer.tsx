// "use client";

// import Link from "next/link";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer id="#footer" className="w-full bg-black text-white border-t border-white/10">
//       <div className="max-w-7xl mx-auto px-6 py-16">

//         <div className="grid md:grid-cols-4 gap-10">

//           <div>
//             <Image
//               src="/assets/logo.png"
//               alt="ResolveX"
//               width={100}
//               height={100}
//               className="h-10 w-auto mb-4"
//             />
//             <p className="text-sm text-gray-400 leading-relaxed">
//               ResolveX is a modern workflow platform designed to help teams manage tickets,
//               automate processes, and scale efficiently.
//             </p>
//           </div>
//           <div>
//             <h4 className="text-sm font-semibold mb-4">Product</h4>
//             <div className="space-y-3 text-sm text-gray-400">
//               <Link href="#features" className="block hover:text-white transition">
//                 Features
//               </Link>
//               <Link href="#pricing" className="block hover:text-white transition">
//                 Pricing
//               </Link>
//               <Link href="#how-it-works" className="block hover:text-white transition">
//                 How it works
//               </Link>
//             </div>
//           </div>
//           <div>
//             <h4 className="text-sm font-semibold mb-4">Company</h4>
//             <div className="space-y-3 text-sm text-gray-400">
//               <Link href="#" className="block hover:text-white transition">
//                 About
//               </Link>
//               <Link href="#" className="block hover:text-white transition">
//                 Careers
//               </Link>
//               <Link href="#" className="block hover:text-white transition">
//                 Contact
//               </Link>
//             </div>
//           </div>
//           <div>
//             <h4 className="text-sm font-semibold mb-4">Legal</h4>
//             <div className="space-y-3 text-sm text-gray-400">
//               <Link href="#" className="block hover:text-white transition">
//                 Privacy Policy
//               </Link>
//               <Link href="#" className="block hover:text-white transition">
//                 Terms of Service
//               </Link>
//             </div>
//           </div>

//         </div>
//         <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
//           <p>© {new Date().getFullYear()} ResolveX. All rights reserved.</p>

//           <div className="flex gap-6 mt-4 md:mt-0">
//             <Link href="#" className="hover:text-white transition">
//               Twitter
//             </Link>
//             <Link href="#" className="hover:text-white transition">
//               GitHub
//             </Link>
//             <Link href="#" className="hover:text-white transition">
//               LinkedIn
//             </Link>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="about" className="border-t border-white/10 bg-[#0B090F] py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <h3 className="mb-4 font-semibold">ResolveX Pro</h3>
          <p className="max-w-sm text-sm leading-6 text-zinc-500">
            The next generation of enterprise workflow management and ticket resolution.
          </p>
        </div>

        {[
          ["Product", ["Features", "Automations", "Security", "API Docs"]],
          ["Company", ["About Us", "Careers", "Blog", "Press Kit"]],
          ["Legal", ["Privacy Policy", "Terms of Service", "Security", "Status"]],
        ].map(([title, links]) => (
          <div key={title as string}>
            <h4 className="mb-4 text-sm font-semibold">{title}</h4>
            <div className="space-y-3">
              {(links as string[]).map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="block text-sm text-zinc-500 transition hover:text-white"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="border-t border-white/10 pt-6 text-sm text-zinc-500 md:col-span-5">
          © {new Date().getFullYear()} ResolveX Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}