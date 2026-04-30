"use client";
import { useState } from "react";
import Navbar from "@/components/Landing/Navbar";
import Features from "@/components/Landing/Features";
import Hero from "@/components/Landing/Hero";
import Docs from "@/components/Landing/Docs";
import Footer from "@/components/Landing/Footer";
import SigninModal from "@/components/auth/SigninModal";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setOpen(true)} />

      <Hero />
      <Features />
      <Docs />
      <Footer />

      <SigninModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}