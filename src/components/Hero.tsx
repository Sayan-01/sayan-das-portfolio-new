"use client";
import BlurText from "@/components/BlurText";
import { ArrowUpRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const Hero = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.9]);
  return (
    <motion.div
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="h-dvh flex flex-col items-center justify-center text-center px-4"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="liquid-glass-strong rounded-full p-1.5 flex items-center mb-6 border border-foreground/5 shadow-2xl"
      >
        <span className="bg-foreground text-background rounded-full md:px-3 px-1.5 py-1 text-[10px] font-black font-body uppercase tracking-wider">Sayan Das</span>
        <span className="text-[11px] font-bold text-foreground/80 px-2 font-body uppercase tracking-widest">Full-Stack Developer & AI SaaS Architect</span>
      </motion.div>

      {/* Heading */}
      <BlurText
        text="Convert your Dream in Web dev with Sayan."
        className="text-6xl md:text-8xl lg:text-[7rem] font-heading italic text-foreground leading-[0.95] max-w-4xl justify-center tracking-[-4px]"
        delay={100}
        animateBy="words"
        direction="bottom"
      />

      {/* Subheading */}
      <motion.p
        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-6 text-sm md:text-lg text-foreground/80 max-w-2xl font-body font-light leading-tight"
      >
        3rd Year CSE Student. Co-founder of Azeorex. Building production-ready AI SaaS that bridges the gap between complex engineering and human-centric design.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="flex items-center gap-6 mt-8"
      >
        <a
          href="#projects"
          className="liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-medium text-foreground font-body flex items-center gap-2 hover:scale-105 transition-transform"
        >
          View My Work
          <ArrowUpRight className="h-5 w-5" />
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 text-sm font-medium text-foreground font-body hover:opacity-80 transition-opacity"
        >
          <Play className="h-4 w-4 fill-current" />
          Let's Talk
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
