"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { Star, Users, Briefcase, Zap } from "lucide-react";
import { useState, useRef } from "react";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import LiquidChrome from "@/components/LiquidChrome";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const videoY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden"
    >
      {/* Background Video with Parallax */}
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-0 z-0 h-screen overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="images/hero_bg.png"
          className="h-full w-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_115329_5e00c9c5-4d69-49b7-94c3-9c31c60bb644.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/20 dark:bg-black/40 transition-colors duration-500" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col">
        <Navbar isDark={isDark} />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
