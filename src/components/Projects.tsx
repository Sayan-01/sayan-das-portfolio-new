import { motion } from "motion/react";
import { ExternalLink, Code2, Cpu, Globe, ChevronRight, ChevronLeft } from "lucide-react";
import { ReactNode, useState } from "react";
import { BsGithub } from "react-icons/bs";
import Wrapper from "./Wrapper";
import SectionHeader from "./SectionHeader";

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  achievements: string[];
  liveLink?: string;
  githubLink?: string;
  images: string[];
  icon: ReactNode;
}

const projects: Project[] = [
  {
    title: "Azeorex AI Builder",
    description: "Full-stack AI-powered SaaS platform that enables users to create and publish websites through a custom editor.",
    problem: "Website building is often slow and requires manual coding for complex layouts.",
    solution: "Engineered a JSON node-tree architecture using tree data structures for real-time editing with sub-100ms latency.",
    impact: "Increased user website-creation speed by 60% with integrated OpenAI/Anthropic APIs.",
    tech: ["Next.js", "PostgreSQL", "OpenAI", "TypeScript", "Node.js", "Zod", "Framer Motion"],
    achievements: [
      "Built a custom drag-and-drop editor from scratch without third-party library dependencies",
      "Integrated OpenAI/Anthropic APIs to generate structured JSON layouts mapped to component trees",
      "Developed a secure marketplace with role-based authentication for templates",
    ],
    liveLink: "https://azeorex.com",
    githubLink: "#",
    images: [
      "https://picsum.photos/seed/azeorex1/1200/800",
      "https://picsum.photos/seed/azeorex2/1200/800",
      "https://picsum.photos/seed/azeorex3/1200/800"
    ],
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Persona-AI",
    description: "AI Content Generator and Analytical Tools for multi-platform content creation.",
    problem: "Content creators struggle with ideation and performance tracking across different platforms.",
    solution: "Designed modules for content generation and growth insights using Gemini API and dynamic preference capture.",
    impact: "Improved first-session completion rates through a personalized, dynamic onboarding flow.",
    tech: ["Next.js 14", "PostgreSQL", "Gemini API", "TypeScript", "Tailwind CSS", "Polar"],
    achievements: [
      "Designed a personalized onboarding flow with dynamic preference capture and behavioral analytics",
      "Integrated advanced user features like persona customization and subscription management",
      "Built dedicated modules for YouTube optimization and cross-platform growth insights",
    ],
    liveLink: "#",
    githubLink: "#",
    images: [
      "https://picsum.photos/seed/persona1/1200/800",
      "https://picsum.photos/seed/persona2/1200/800",
      "https://picsum.photos/seed/persona3/1200/800"
    ],
    icon: <Cpu className="h-6 w-6" />,
  },
];

const ImageGallery = ({ images, title, liveLink, githubLink }: { images: string[], title: string, liveLink?: string, githubLink?: string }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Main Large Image */}
      <div className="relative liquid-glass rounded-[2rem] overflow-hidden aspect-[16/10] group border border-foreground/5 shadow-2xl">
        <motion.img
          key={activeIdx}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={images[activeIdx]}
          alt={`${title} main`}
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        
        {/* Navigation Overlays */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-4">
             {liveLink && liveLink !== "#" && (
                <a href={liveLink} className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <ExternalLink className="h-5 w-5" />
                </a>
             )}
             {githubLink && githubLink !== "#" && (
                <a href={githubLink} className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <BsGithub className="h-5 w-5" />
                </a>
             )}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))} className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))} className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div 
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`cursor-pointer rounded-2xl overflow-hidden aspect-video border-2 transition-all duration-300 ${
              activeIdx === i ? "border-foreground scale-95 opacity-100" : "border-transparent opacity-40 hover:opacity-100"
            }`}
          >
            <img src={img} alt={`${title} thumb ${i}`} className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-8 lg:px-16"
    >
      <SectionHeader
        badge="The Portfolio"
        title="Featured Projects"
        description="A selection of my best work, from AI builders to personalization engines."
      />

      <Wrapper>
        <div className="grid grid-cols-1 gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-24 items-start`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full relative">
                 <ImageGallery 
                    images={project.images} 
                    title={project.title} 
                    liveLink={project.liveLink} 
                    githubLink={project.githubLink} 
                 />
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="liquid-glass p-3 rounded-2xl text-foreground">{project.icon}</div>
                  <h3 className="text-4xl font-heading italic text-foreground">{project.title}</h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="liquid-glass p-4 rounded-2xl">
                      <p className="text-xs font-bold text-foreground/40 uppercase mb-1">Problem</p>
                      <p className="text-sm text-foreground/80">{project.problem}</p>
                    </div>
                    <div className="liquid-glass p-4 rounded-2xl">
                      <p className="text-xs font-bold text-foreground/40 uppercase mb-1">Solution</p>
                      <p className="text-sm text-foreground/80">{project.solution}</p>
                    </div>
                    <div className="liquid-glass p-4 rounded-2xl">
                      <p className="text-xs font-bold text-foreground/40 uppercase mb-1">Impact</p>
                      <p className="text-sm text-foreground/80">{project.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground/60 font-body text-sm"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-xs text-foreground/60 font-body"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
