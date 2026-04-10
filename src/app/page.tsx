"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Play, ChevronRight, Star, Users, Briefcase, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import BlurText from "@/components/BlurText";
import PartnersBar from "@/components/PartnersBar";
import SectionHeader from "@/components/SectionHeader";
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

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const videoY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden bg-background"
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
          poster="/images/hero_bg.jpeg"
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
        <section className="py-24 bg-background transition-colors duration-500">
          <Wrapper>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Projects Shipped", value: "12+", icon: <Briefcase className="w-5 h-5" /> },
                { label: "Production Users", value: "500+", icon: <Users className="w-5 h-5" /> },
                { label: "AI Integrations", value: "8+", icon: <Zap className="w-5 h-5" /> },
                { label: "Client Satisfaction", value: "100%", icon: <Star className="w-5 h-5" /> },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="liquid-glass p-8 rounded-[2.5rem] text-center group hover:y-[-5] transition-all"
                >
                  <div className="text-foreground/20 mb-4 flex justify-center group-hover:text-foreground/50 transition-colors">{stat.icon}</div>
                  <div className="text-5xl font-heading italic text-foreground mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Wrapper>
        </section>
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
