"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load below-the-fold sections
const About = dynamic(() => import("@/components/About"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const Projects = dynamic(() => import("@/components/Projects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Services = dynamic(() => import("@/components/Services"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const videoY = useTransform(scrollY, [0, 1000], [0, 300]);

  // Detect mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  // Delay video loading (CRITICAL for performance)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1500); // wait until initial render is done

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden"
    >
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-0 z-0 h-screen overflow-hidden"
      >
        <Image
          src="/images/hero_bg.png"
          alt="hero background"
          fill
          priority
          className="object-cover"
        />

        {showVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_115329_5e00c9c5-4d69-49b7-94c3-9c31c60bb644.mp4"
              type="video/mp4"
            />
          </video>
        )}

        <div className="absolute inset-0 bg-background/20 dark:bg-black/40 transition-colors duration-500" />
      </motion.div>

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
