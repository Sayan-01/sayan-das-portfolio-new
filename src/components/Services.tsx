import { motion } from "motion/react";
import { Code2, BrainCircuit, Rocket, Layout, Zap, ShieldCheck } from "lucide-react";
import Wrapper from "./Wrapper";
import SectionHeader from "./SectionHeader";

const services = [
  {
    title: "Full-Stack SaaS Development",
    description: "Building production-ready software from scratch with scalable architectures.",
    icon: <Rocket className="h-6 w-6" />,
  },
  {
    title: "AI Integration & Automation",
    description: "Implementing LLMs and AI agents to automate complex business workflows.",
    icon: <BrainCircuit className="h-6 w-6" />,
  },
  {
    title: "Custom Web Applications",
    description: "High-performance React/Next.js apps with modern UI/UX principles.",
    icon: <Layout className="h-6 w-6" />,
  },
  {
    title: "API Design & Backend Systems",
    description: "Robust Node.js/Python backends with secure and efficient API layers.",
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    title: "Performance Optimization",
    description: "Speeding up existing applications and optimizing database queries.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Technical Consulting",
    description: "Strategic advice on tech stack selection and product architecture.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-8 lg:px-16"
    >
      <SectionHeader
        badge="The Offering"
        title="Services Provided"
        description="How I can help you bring your next big idea to life."
      />
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="liquid-glass p-8 rounded-[2.5rem] hover:bg-foreground/5 transition-colors group"
            >
              <div className="h-14 w-14 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h4 className="text-2xl font-heading italic text-foreground mb-4">{service.title}</h4>
              <p className="text-sm text-foreground/60 font-body leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
