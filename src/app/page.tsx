"use client";

import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load below-the-fold sections
const About = dynamic(() => import("@/components/About"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const Projects = dynamic(() => import("@/components/Projects"));
const Journey = dynamic(() => import("@/components/Journey"));
const Services = dynamic(() => import("@/components/Services"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-bg text-text relative">
      <div className="grain" aria-hidden="true"></div>
      <Navbar />
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Journey />
        <Services />
        <Contact />
      </main>
      <Footer />
    </main>
  );
}
