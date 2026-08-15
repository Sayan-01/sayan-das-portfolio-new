import Reveal from "./Reveal";
import Wrapper from "./Wrapper";

const GROUPS = [
  { title: "Frontend", items: ["React", "Next.js", "Astro", "TypeScript", "Tailwind"] },
  {
    title: "Backend & Infra",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS"],
  },
  { title: "Languages & CS", items: ["JavaScript", "C++", "Python", "DSA", "System Design"] },
  { title: "Design", items: ["Figma", "Design Systems", "Prototyping", "SEO"] },
];

const ICONS = [
  { name: "React",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "MongoDB",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Figma",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Tailwind",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Astro",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg", white: true },
  { name: "Express",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", white:true },
  { name: "Git",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-20 md:py-30"
    >
      <Wrapper>
        <div className="flex justify-between items-end gap-10 mb-14 flex-wrap">
          <div>
            <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-flame-1 inline-flex items-center gap-[9px] mb-[18px] font-medium before:content-[''] before:w-[14px] before:h-[1px] before:bg-flame-1 before:inline-block">
              Tech Stack
            </div>
            <Reveal>
              <h2 className="text-[clamp(2.1rem,4.6vw,3.4rem)] max-w-[600px] font-bold font-display text-text">Tools I reach for, daily.</h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="text-text-dim max-w-[360px] text-[15px] pb-1">A MERN + Next.js core, extended with the design and infra tools that get a product from idea to production.</p>
          </Reveal>
        </div>
        <Reveal>
          <div className="grid grid-cols-4 gap-[18px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
            {GROUPS.map((g) => (
              <div
                className="bg-bg-1 border border-line rounded-custom py-[26px] px-[22px] transition-all duration-250 ease-in-out hover:border-[rgba(255,122,61,0.4)] hover:-translate-y-1"
                key={g.title}
              >
                <h3 className="text-[14px] font-mono text-flame-1 uppercase tracking-[0.08em] font-medium mb-4">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span
                      className="font-mono text-[12px] py-[6px] px-3 border border-line rounded-full text-text-dim bg-bg-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
                      key={i}
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Marquee strip */}
        <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]">
          <div className="flex w-max gap-10 animate-scroll border border-line py-6">
            {[...ICONS, ...ICONS].map((icon, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2.5 shrink-0 group"
              >
                <div className="w-10 h-10 flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={icon.src}
                    alt={icon.name}
                    width={36}
                    height={36}
                    className={icon.white ? "invert" : ""}
                  />
                </div>
                <span className="font-mono text-[10px] text-text-faint tracking-wide group-hover:text-text-dim transition-colors duration-300">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
