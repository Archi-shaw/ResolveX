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
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Navbar onLoginClick={() => setOpen(true)} />

//       <Hero  onLoginClick={() => setOpen(true)} />
//       <Features />
//       <Docs />
//       <Footer />

//       <SignupModal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//       />
//       <SigninModal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//       />
     
//     </>
//   );
// }



"use client";
import { useState } from "react";
import Navbar from "@/components/Landing/Navbar";
import Features from "@/components/Landing/Features";
import Hero from "@/components/Landing/Hero";
import Docs from "@/components/Landing/Docs";
import Footer from "@/components/Landing/Footer";
import SigninModal from "@/components/auth/SigninModal";
import SignupModal from "@/components/auth/SignupModal";

export default function Page() {
  const [authMode, setAuthMode] =
    useState<"login" | "signup" | null>(null);

  return (
    <>
      <Navbar onLoginClick={() => setAuthMode("login")} />
      <Hero  onLoginClick={() => setAuthMode("signup")}/>
      <Features />
      <Docs />
      <Footer />
      <SigninModal
        isOpen={authMode === "login"}
        onClose={() => setAuthMode(null)}
      />
      <SignupModal
        isOpen={authMode === "signup"}
        onClose={() => setAuthMode(null)}
      />
    </>
  );
}