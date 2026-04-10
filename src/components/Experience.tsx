import { motion } from "motion/react";
import { Briefcase, GraduationCap, Calendar, ChevronRight } from "lucide-react";
import Wrapper from "./Wrapper";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    role: "Frontend Engineer Intern",
    company: "Hooman Digital",
    period: "Jan 2026 - Feb 2026",
    description: "Developing pixel-perfect, production-ready pages from Figma designs using React.js and Astro. Focusing on performance optimization and advanced SEO techniques.",
    icon: <Briefcase className="h-6 w-6" />,
    color: "from-blue-500/20 to-cyan-500/20"
   
  },
  {
    role: "Co-Founder & Full-Stack Engineer",
    company: "Azeorex Agency",
    period: "Mar 2024 - Mar 2025",
    description: "Founded and led a web agency specializing in full-stack SaaS. Built 5+ client applications and architected a custom drag-and-drop editor with AI-assisted page generation.",
    icon: <Briefcase className="h-6 w-6" />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    role: "B.Tech in Computer Science",
    company: "Narula Institute of Technology",
    period: "2023 - 2027",
    description: "Pursuing Engineering with a focus on core CS fundamentals. Maintaining a CGPA of 8.03 while actively shipping production software.",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "from-emerald-500/20 to-teal-500/20"
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <SectionHeader
        badge="The Path"
        title="Professional Journey"
        description="A chronological look at my growth as a developer and engineer."
      />

      <Wrapper>
        <div className="relative ">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-foreground/20 via-foreground/5 to-transparent h-full hidden md:block" />

          <div className="space-y-24 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-[50%] w-4 h-4 rounded-full bg-foreground border-4 border-background z-10 hidden md:block" />

                {/* Card Content */}
                <div className={`w-full  ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <motion.div
                    whileHover={{ y: -10, transition: { duration: 0.4 } }}
                    className="liquid-glass p-12 rounded-[4rem] group transition-all duration-500 relative overflow-hidden shadow-2xl border border-foreground/[0.03]"
                  >
                    {/* Decorative Gradient Glow */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                    
                    <div className="relative z-10 space-y-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="h-16 w-16 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground/70 group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-xl border border-white/5">
                          {exp.icon}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-black text-foreground/30 uppercase tracking-[0.25em] bg-foreground/5 px-5 py-3 rounded-full border border-foreground/[0.03]">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-4xl lg:text-5xl font-heading italic text-foreground tracking-tighter leading-none group-hover:text-blue-500/90 transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-bold text-foreground/40 uppercase tracking-[0.1em]">{exp.company}</p>
                      </div>

                      <p className="text-base text-foreground/60 font-body font-light leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="pt-4 flex items-center gap-2 text-foreground/30 group-hover:text-foreground transition-colors cursor-pointer text-sm font-medium">
                        View Projects <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Side Info (Year / Indicator) */}
                <div className={`hidden md:flex w-full justify-center items-center select-none pointer-events-none ${index % 2 === 0 ? "md:pl-12 lg:pl-24" : "md:pr-12 lg:pr-24"}`}>
                   <motion.div 
                     initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                     whileInView={{ opacity: 0.08, x: 0 }}
                     transition={{ duration: 1, delay: 0.2 }}
                     className="text-[8rem]  font-heading italic text-foreground leading-none tracking-tight"
                   >
                     {exp.period}
                   </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
