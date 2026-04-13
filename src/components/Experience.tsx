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
    icon: <Briefcase className="h-5 w-5" />,
    accent: "text-blue-500",
  },
  {
    role: "Co-Founder & Full-Stack Engineer",
    company: "Azeorex Agency",
    period: "Mar 2024 - Mar 2025",
    description: "Founded and led a web agency specializing in full-stack SaaS. Built 5+ client applications and architected a custom drag-and-drop editor with AI-assisted page generation.",
    icon: <Briefcase className="h-5 w-5" />,
    accent: "text-purple-500",
  },
  {
    role: "B.Tech in Computer Science",
    company: "Narula Institute of Technology",
    period: "2023 - 2027",
    description: "Pursuing Engineering with a focus on core CS fundamentals. Maintaining a CGPA of 8.03 while actively shipping production software.",
    icon: <GraduationCap className="h-5 w-5" />,
    accent: "text-emerald-500",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="md:py-16 py-12 bg-background relative"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/8 blur-[120px] rounded-full pointer-events-none" />

      <SectionHeader
        badge="The Path"
        title="Professional Journey"
        description="A chronological look at my growth as a developer and engineer."
      />

      <Wrapper>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="liquid-glass p-8 rounded-2xl transition-all duration-500 border border-foreground/[0.03] hover:border-foreground/[0.08]">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="h-12 w-12 rounded-xl bg-foreground/5 flex items-center justify-center text-foreground/60 group-hover:bg-foreground group-hover:text-background transition-all duration-500 shrink-0">
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h4 className={`text-2xl font-heading italic tracking-tight leading-tight ${exp.accent}`}>{exp.role}</h4>
                        <p className="text-sm font-semibold text-foreground/50 uppercase tracking-wide">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-foreground/30 uppercase tracking-wider bg-foreground/5 px-4 py-2 rounded-full self-start">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/60 font-body font-light leading-relaxed max-w-2xl">{exp.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
