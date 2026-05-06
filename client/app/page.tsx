// "use client";
// import { useState } from "react";
// import Navbar from "@/components/Landing/Navbar";
// import Features from "@/components/Landing/Features";
// import Hero from "@/components/Landing/Hero";
// import Docs from "@/components/Landing/Docs";
// import Footer from "@/components/Landing/Footer";
// import SigninModal from "@/components/auth/SigninModal";
// import SignupModal from "@/components/auth/SignupModal";

// export default function Page() {
//   const [authMode, setAuthMode] =
//     useState<"login" | "signup" | null>(null);

//   return (
//     <>
//       <Navbar onLoginClick={() => setAuthMode("login")} />
//       <Hero  onLoginClick={() => setAuthMode("signup")}/>
//       <Features />
//       <Docs />
//       <Footer />
//       <SigninModal
//         isOpen={authMode === "login"}
//         onClose={() => setAuthMode(null)}
//       />
//       <SignupModal
//         isOpen={authMode === "signup"}
//         onClose={() => setAuthMode(null)}
//       />
//     </>
//   );
// }

"use client";

import { useState } from "react";
import Navbar from "@/components/Landing/Navbar";
import Hero from "@/components/Landing/Hero";
import Features from "@/components/Landing/Features";
import LaunchSteps from "@/components/Landing/LaunchSteps";
import Pricing from "@/components/Landing/Pricing";
import Testimonials from "@/components/Landing/Testimonials";
import FAQ from "@/components/Landing/FAQ";
import Footer from "@/components/Landing/Footer";
import SigninModal from "@/components/auth/SigninModal";
import SignupModal from "@/components/auth/SignupModal";

export default function Page() {
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);

  return (
    <main className="min-h-screen bg-[#0B090F] text-white">
      <Navbar onLoginClick={() => setAuthMode("login")} />
      <Hero onSignupClick={() => setAuthMode("signup")} />
      <Features />
      <LaunchSteps />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />

      <SigninModal
        isOpen={authMode === "login"}
        onClose={() => setAuthMode(null)}
      />

      <SignupModal
        isOpen={authMode === "signup"}
        onClose={() => setAuthMode(null)}
      />
    </main>
  );
}