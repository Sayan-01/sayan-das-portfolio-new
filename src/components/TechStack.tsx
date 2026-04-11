import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Wrapper from "./Wrapper";
import SectionHeader from "./SectionHeader";

/* ─── Inline SVG visuals for each card ─────────────────────────── */

const CodeVisual = () => (
  <div className="relative w-full h-full min-h-[180px] rounded-2xl overflow-hidden bg-[#0d0d14] border border-white/5 p-4 font-mono text-[11px] leading-relaxed select-none">
    <div className="flex gap-1.5 mb-4">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
    </div>
    <div className="space-y-1">
      <p><span className="text-purple-400">const</span> <span className="text-blue-300">stack</span> <span className="text-white/40">=</span> <span className="text-yellow-300">{`{`}</span></p>
      <p className="pl-4"><span className="text-cyan-300">languages</span><span className="text-white/40">:</span> <span className="text-green-300">[&quot;TypeScript&quot;, &quot;C++&quot;]</span>,</p>
      <p className="pl-4"><span className="text-cyan-300">passion</span><span className="text-white/40">:</span> <span className="text-green-300">&quot;building ecosystems&quot;</span>,</p>
      <p className="pl-4"><span className="text-cyan-300">coffeeCups</span><span className="text-white/40">:</span> <span className="text-orange-300">Infinity</span>,</p>
      <p><span className="text-yellow-300">{`}`}</span><span className="text-white/40">;</span></p>
    </div>
    <motion.div
      className="absolute bottom-3 right-3 w-2 h-4 bg-blue-400"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  </div>
);

const FrontendVisual = () => (
  <div className="relative w-full h-full min-h-[180px] rounded-2xl overflow-hidden bg-[#0d0d14] border border-white/5">
    {/* Browser-like mockup */}
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
      <div className="flex gap-1.5">
        <span className="w-2 h-2 rounded-full bg-red-500/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <span className="w-2 h-2 rounded-full bg-green-500/70" />
      </div>
      <div className="flex-1 mx-4 bg-white/5 rounded-md px-3 py-1 text-[10px] text-white/30 font-mono">localhost:3000</div>
    </div>
    <div className="p-4 space-y-3">
      {/* Simulated component blocks */}
      <motion.div
        className="h-3 w-3/4 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40"
        animate={{ width: ["60%", "75%", "60%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="flex gap-2">
        <div className="h-16 w-1/2 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-500/5 border border-blue-500/10" />
        <div className="h-16 w-1/2 rounded-xl bg-gradient-to-br from-purple-500/15 to-purple-500/5 border border-purple-500/10" />
      </div>
      <div className="flex gap-2">
        <div className="h-8 w-1/3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 border border-cyan-500/10" />
        <div className="h-8 w-2/3 rounded-lg bg-white/[0.03] border border-white/5" />
      </div>
      <div className="h-3 w-1/2 rounded-full bg-white/5" />
    </div>
  </div>
);

const BackendVisual = () => (
  <div></div>
);

const AIVisual = () => (
  <div className="relative w-full h-full min-h-[180px] rounded-2xl overflow-hidden bg-[#0d0d14] border border-white/5 p-5">
    {/* Neural network SVG */}
    <svg viewBox="0 0 300 200" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="ai-grad-1" x1="0" y1="0" x2="300" y2="200">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Connections */}
      {[
        [40, 40, 150, 30], [40, 40, 150, 100], [40, 40, 150, 170],
        [40, 100, 150, 30], [40, 100, 150, 100], [40, 100, 150, 170],
        [40, 160, 150, 30], [40, 160, 150, 100], [40, 160, 150, 170],
        [150, 30, 260, 70], [150, 30, 260, 130],
        [150, 100, 260, 70], [150, 100, 260, 130],
        [150, 170, 260, 70], [150, 170, 260, 130],
      ].map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="url(#ai-grad-1)" strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
        />
      ))}
      {/* Nodes — Input layer */}
      {[40, 100, 160].map((y) => (
        <motion.circle key={`in-${y}`} cx={40} cy={y} r={6} fill="#a855f7" fillOpacity={0.8}
          animate={{ r: [5, 7, 5], fillOpacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      ))}
      {/* Hidden layer */}
      {[30, 100, 170].map((y) => (
        <motion.circle key={`hid-${y}`} cx={150} cy={y} r={6} fill="#6366f1" fillOpacity={0.8}
          animate={{ r: [5, 7, 5], fillOpacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }}
        />
      ))}
      {/* Output layer */}
      {[70, 130].map((y) => (
        <motion.circle key={`out-${y}`} cx={260} cy={y} r={6} fill="#3b82f6" fillOpacity={0.8}
          animate={{ r: [5, 7, 5], fillOpacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, delay: 1, repeat: Infinity }}
        />
      ))}
    </svg>
  </div>
);

const DevOpsVisual = () => (
  <div className="relative w-full h-full min-h-[180px] rounded-2xl overflow-hidden bg-[#0d0d14] border border-white/5 p-4 font-mono text-[11px]">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 rounded bg-green-500/60" />
      <span className="text-green-400/80 text-[10px] font-bold">TERMINAL</span>
    </div>
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <span className="text-green-400">$</span>
        <motion.span
          className="text-white/70"
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          docker build -t app:latest .
        </motion.span>
      </div>
      <p className="text-white/30 pl-4">Building image... <span className="text-blue-400">▓▓▓▓▓▓▓▓░░</span> 80%</p>
      <div className="flex items-start gap-2">
        <span className="text-green-400">$</span>
        <span className="text-white/70">git push origin main</span>
      </div>
      <p className="text-white/30 pl-4">→ Deploying to <span className="text-cyan-400">Vercel</span></p>
      <div className="flex items-start gap-2">
        <span className="text-green-400">$</span>
        <motion.span
          className="text-white/70"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ▊
        </motion.span>
      </div>
    </div>
  </div>
);

const DesignVisual = () => (
  <div className="relative w-full h-full min-h-[180px] rounded-2xl overflow-hidden bg-[#0d0d14] border border-white/5 p-4">
    {/* Design tool mockup */}
    <div className="flex gap-2 mb-4">
      {["Layers", "Assets", "Design"].map((tab, i) => (
        <span
          key={tab}
          className={`text-[10px] px-3 py-1 rounded-md font-medium ${i === 2 ? "bg-white/10 text-white/80" : "text-white/30"}`}
        >
          {tab}
        </span>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[
        { color: "from-blue-500/30 to-blue-600/10", border: "border-blue-500/20" },
        { color: "from-purple-500/30 to-purple-600/10", border: "border-purple-500/20" },
        { color: "from-cyan-500/30 to-cyan-600/10", border: "border-cyan-500/20" },
        { color: "from-pink-500/30 to-pink-600/10", border: "border-pink-500/20" },
        { color: "from-amber-500/30 to-amber-600/10", border: "border-amber-500/20" },
        { color: "from-emerald-500/30 to-emerald-600/10", border: "border-emerald-500/20" },
      ].map((swatch, i) => (
        <motion.div
          key={i}
          className={`aspect-square rounded-xl bg-gradient-to-br ${swatch.color} border ${swatch.border}`}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
        />
      ))}
    </div>
    
  </div>
);

/* ─── Card data ──────────────────────────────────────────────────── */

const skills = [
  {
    name: "Languages",
    description: "TypeScript, JavaScript, C++, and SQL — the core foundations for building anything at scale.",
    items: ["TypeScript", "JavaScript", "C++", "SQL"],
    accent: "blue",
    visual: <CodeVisual />,
    span: "md:col-span-2 md:row-span-1", // wide
  },
  {
    name: "Frontend",
    description: "Crafting pixel-perfect, high-performance interfaces with modern React ecosystem.",
    items: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Shadcn UI"],
    accent: "purple",
    visual: <FrontendVisual />,
    span: "md:col-span-1 md:row-span-2", // tall
  },
  {
    name: "Backend",
    description: "Building robust APIs, databases, and server-side architecture for production-ready systems.",
    items: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Auth.js"],
    accent: "cyan",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "AI & Data",
    description: "Integrating cutting-edge AI models and intelligent data pipelines into real-world products.",
    items: ["Gemini API", "OpenAI", "Vector DBs", "REST APIs", "DBMS"],
    accent: "indigo",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "DevOps",
    description: "Shipping fast with CI/CD, containerized environments, and cloud-native deployments.",
    items: ["Docker", "Git", "Vercel", "GitHub", "Linux"],
    accent: "blue",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Design & Tools",
    description: "Bridging design and development with the right tools for seamless creative workflows.",
    items: ["Figma", "Postman", "Framer Motion", "Polar", "VS Code"],
    accent: "purple",
    visual: <DesignVisual />,
    span: "md:col-span-2 md:row-span-1", // wide
  },
];

const accentMap: Record<string, { glow: string; text: string; border: string; bg: string; dot: string }> = {
  blue: {
    glow: "shadow-[0_0_60px_-12px_rgba(59,130,246,0.3)]",
    text: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    dot: "bg-blue-500",
  },
  purple: {
    glow: "shadow-[0_0_60px_-12px_rgba(168,85,247,0.3)]",
    text: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/10",
    dot: "bg-purple-500",
  },
  cyan: {
    glow: "shadow-[0_0_60px_-12px_rgba(6,182,212,0.3)]",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/10",
    dot: "bg-cyan-500",
  },
  indigo: {
    glow: "shadow-[0_0_60px_-12px_rgba(99,102,241,0.3)]",
    text: "text-indigo-400",
    border: "border-indigo-500/20",
    bg: "bg-indigo-500/10",
    dot: "bg-indigo-500",
  },
};

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-24 bg-background relative "
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/[0.07] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.06] blur-[130px] rounded-full pointer-events-none" />

      <SectionHeader
        badge="The Arsenal"
        title="Tech Stack"
        description="Modern tools for modern problems. A curated selection of technologies I use to build high-performance applications."
      />

      <Wrapper>
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
          {skills.map((skill, index) => {
            const a = accentMap[skill.accent];
            const isWide = skill.span.includes("col-span-2");
            const isTall = skill.span.includes("row-span-2");

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`
                  ${skill.span}
                  group relative rounded-3xl overflow-hidden
                  bg-[#0f0f14] border border-white/[0.06]
                  hover:border-white/[0.12] transition-all duration-500
                  hover:${a.glow}
                `}
              >
                {/* Hover glow overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-${skill.accent}-500/[0.05] to-transparent pointer-events-none`} />

                <div className={`flex ${isWide ? "flex-row" : "flex-col"} ${isTall ? "flex-col" : ""} h-full`}>
                  {/* Text Content */}
                  <div className={`p-7 ${isWide && !isTall ? "flex-1" : ""} flex flex-col justify-between z-10`}>
                    <div>
                      {/* Accent dot + Category name */}
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className={`w-2 h-2 rounded-full ${a.dot}`}
                          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <h3 className={`text-2xl lg:text-3xl font-heading italic text-foreground tracking-tight`}>
                          {skill.name}
                        </h3>
                      </div>

                      <p className="text-sm text-foreground/50 font-body font-light leading-relaxed mb-5 max-w-md">
                        {skill.description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className={`
                              px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wider uppercase
                              bg-white/[0.04] border border-white/[0.06]
                              text-foreground/50 hover:text-foreground/80
                              hover:border-white/[0.12] hover:bg-white/[0.06]
                              transition-all duration-300 cursor-default
                            `}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* See More link */}
                    <div className={`flex items-center gap-2 ${a.text} text-sm font-semibold font-body group/link cursor-pointer`}>
                      <span className="group-hover/link:underline underline-offset-4">Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
{skill.visual ?
                  <div className={`
                    ${isWide && !isTall ? "w-[45%] flex-shrink-0" : "w-full"}
                    ${isTall ? "flex-1" : ""}
                    p-4 ${isWide && !isTall ? "pl-0" : "pt-0"}
                  `}>
                    {skill.visual}
                  </div> : null}
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
