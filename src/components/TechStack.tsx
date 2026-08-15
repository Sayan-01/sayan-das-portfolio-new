import Reveal from "./Reveal";

const GROUPS = [
  { title: "Frontend", items: ["React", "Next.js", "Astro", "TypeScript", "Tailwind"] },
  {
    title: "Backend & Infra",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS"],
  },
  { title: "Languages & CS", items: ["JavaScript", "C++", "Python", "DSA", "System Design"] },
  { title: "Design", items: ["Figma", "Design Systems", "Prototyping", "SEO"] },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-[120px]"
    >
      <div className="max-w-maxw mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-end gap-10 mb-14 flex-wrap">
          <div>
            <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-flame-1 inline-flex items-center gap-[9px] mb-[18px] font-medium before:content-[''] before:w-[14px] before:h-[1px] before:bg-flame-1 before:inline-block">Tech Stack</div>
            <Reveal>
              <h2 className="text-[clamp(30px,4vw,44px)] max-w-[600px] font-bold font-display text-text">Tools I reach for, daily.</h2>
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
      </div>
    </section>
  );
}
