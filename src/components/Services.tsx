import { motion } from "motion/react";
import { Code2, BrainCircuit, Rocket, Layout, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";
import Wrapper from "./Wrapper";
import SectionHeader from "./SectionHeader";

const services = [
  {
    title: "Full-Stack SaaS Development",
    description: "Building production-ready software from scratch with scalable architectures.",
    icon: <Rocket className="h-5 w-5" />,
    accent: "blue",
  },
  {
    title: "AI Integration & Automation",
    description: "Implementing LLMs and AI agents to automate complex business workflows.",
    icon: <BrainCircuit className="h-5 w-5" />,
    accent: "purple",
  },
  {
    title: "Custom Web Applications",
    description: "High-performance React/Next.js apps with modern UI/UX principles.",
    icon: <Layout className="h-5 w-5" />,
    accent: "cyan",
  },
  {
    title: "API Design & Backend Systems",
    description: "Robust Node.js backends with secure and efficient API layers.",
    icon: <Code2 className="h-5 w-5" />,
    accent: "indigo",
  },
  {
    title: "Performance Optimization",
    description: "Speeding up existing applications and optimizing database queries.",
    icon: <Zap className="h-5 w-5" />,
    accent: "blue",
  },
  {
    title: "Technical Consulting",
    description: "Strategic advice on tech stack selection and product architecture.",
    icon: <ShieldCheck className="h-5 w-5" />,
    accent: "purple",
  },
];

const accentColors: Record<string, { icon: string; bg: string; hoverBg: string; num: string }> = {
  blue:   { icon: "text-blue-400",   bg: "bg-blue-500/10",   hoverBg: "group-hover:bg-blue-500",   num: "text-blue-500/20"   },
  purple: { icon: "text-purple-400", bg: "bg-purple-500/10", hoverBg: "group-hover:bg-purple-500", num: "text-purple-500/20" },
  cyan:   { icon: "text-cyan-400",   bg: "bg-cyan-500/10",   hoverBg: "group-hover:bg-cyan-500",   num: "text-cyan-500/20"   },
  indigo: { icon: "text-indigo-400", bg: "bg-indigo-500/10", hoverBg: "group-hover:bg-indigo-500", num: "text-indigo-500/20" },
};

export default function Services() {
  return (
    <section id="services" className="md:py-24 py-12 relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover opacity-8 saturate-0"
        >
          <source src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8" type="application/x-mpegURL" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95 pointer-events-none" />
      </div>

      <div className="relative z-10">
        <SectionHeader
          badge="The Offering"
          title="Services Provided"
          description="How I can help you bring your next big idea to life."
        />

        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const a = accentColors[service.accent];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="liquid-glass p-7 rounded-2xl group hover:-translate-y-1 transition-all duration-500 border border-foreground/[0.04] hover:border-foreground/[0.10] relative overflow-hidden"
                >
                  {/* Large number watermark */}
                  <span className={`absolute top-3 right-5 text-[4rem] font-heading italic leading-none font-bold ${a.num} select-none pointer-events-none`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className={`p-3 rounded-xl w-fit ${a.bg} ${a.icon} ${a.hoverBg} group-hover:text-white transition-all duration-500 mb-5`}>
                    {service.icon}
                  </div>

                  <h4 className="text-xl font-heading italic text-foreground mb-2 leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-sm text-foreground/55 font-body leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-1 text-xs font-semibold text-foreground/30 group-hover:text-foreground/60 transition-colors">
                    Get started <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Wrapper>
      </div>
    </section>
  );
}
