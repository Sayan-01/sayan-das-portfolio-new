import { motion } from "motion/react";
import Wrapper from "./Wrapper";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 pt-44 bg-background transition-colors duration-500"
    >
      <SectionHeader
        badge="The Story"
        title="Beyond the Code"
        description="A glimpse into the mind of a developer who builds for impact."
      />
      <Wrapper>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Profile Image / Visual */}
          <div className="">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 liquid-glass rounded-[3rem] rotate-6 scale-105 opacity-20" />
              <div className="absolute inset-0 liquid-glass rounded-[3rem] -rotate-3 scale-105 opacity-40" />
              <div className="relative h-full w-full liquid-glass rounded-[3rem] overflow-hidden border border-foreground/10">
                <img
                  src="https://picsum.photos/seed/sayan/800/800"
                  alt="Sayan Das"
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl font-heading italic text-foreground leading-tight">
                I build <span className="text-foreground/40">ecosystems,</span> <br />
                not just code.
              </h3>
              <p className="text-lg text-foreground/80 font-body font-light leading-relaxed">
                I'm a 3rd year CSE student who doesn't just code—I build ecosystems. From co-founding startups to shipping production-ready AI SaaS, I bridge the gap between complex engineering and
                human-centric design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="liquid-glass p-6 rounded-3xl">
                <h4 className="text-foreground font-semibold mb-2">The Difference</h4>
                <p className="text-sm text-foreground/60 font-body">Unlike many students, I've lived the startup lifecycle—from co-founding to handling production users.</p>
              </div>
              <div className="liquid-glass p-6 rounded-3xl">
                <h4 className="text-foreground font-semibold mb-2">The Goal</h4>
                <p className="text-sm text-foreground/60 font-body">Currently seeking internships where I can contribute to high-impact products and push the boundaries of AI.</p>
              </div>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-heading italic text-foreground">8.03 CGPA</p>
                <p className="text-xs text-foreground/40 uppercase font-bold tracking-widest">B.Tech CSE</p>
              </div>
              <div className="h-12 w-px bg-foreground/10" />
              <div>
                <p className="text-3xl font-heading italic text-foreground">Full-Stack</p>
                <p className="text-xs text-foreground/40 uppercase font-bold tracking-widest">AI Specialist</p>
              </div>
              <div className="h-12 w-px bg-foreground/10" />
              <div>
                <p className="text-3xl font-heading italic text-foreground">Ex Co-Founder</p>
                <p className="text-xs text-foreground/40 uppercase font-bold tracking-widest">Azeorex Agency</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
