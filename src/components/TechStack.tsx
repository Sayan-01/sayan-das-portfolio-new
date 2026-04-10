import { motion } from "motion/react";
import { Code2, Layers, Database, Cloud, Cpu, Smartphone, Wind, Terminal, Palette } from "lucide-react";
import Wrapper from "./Wrapper";
import SectionHeader from "./SectionHeader";

const skills = [
  { name: "Languages", icon: <Code2 className="w-6 h-6" />, items: ["TypeScript", "JavaScript", "C++", "SQL"] },
  { name: "Frontend", icon: <Layers className="w-6 h-6" />, items: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Shadcn UI"] },
  { name: "Backend", icon: <Database className="w-6 h-6" />, items: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Auth.js"] },
  { name: "AI & Data", icon: <Cpu className="w-6 h-6" />, items: ["Gemini API", "OpenAI", "Vector DBs", "REST APIs", "DBMS"] },
  { name: "DevOps", icon: <Cloud className="w-6 h-6" />, items: ["Docker", "Git", "Vercel", "GitHub", "Linux"] },
  { name: "Design & Tools", icon: <Palette className="w-6 h-6" />, items: ["Figma", "Postman", "Framer Motion", "Polar", "VS Code"] },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <SectionHeader
        badge="The Arsenal"
        title="Tech Stack"
        description="Modern tools for modern problems. A curated selection of technologies I use to build high-performance applications."
      />
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="liquid-glass p-10 rounded-[2.5rem] group transition-all duration-500"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-foreground/5 rounded-2xl text-foreground/80 group-hover:bg-foreground group-hover:text-background transition-all duration-500 ease-out shadow-sm">
                  {skill.icon}
                </div>
                <h3 className="text-3xl font-heading italic text-foreground tracking-tight underline-offset-8 decoration-foreground/10 group-hover:decoration-foreground/30 underline transition-all">
                  {skill.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-5 py-2.5 bg-foreground/5 border border-foreground/5 rounded-2xl text-[13px] font-medium text-foreground/50 font-body hover:border-foreground/20 hover:text-foreground hover:bg-foreground/[0.02] transition-all duration-300 cursor-default tracking-wide uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
