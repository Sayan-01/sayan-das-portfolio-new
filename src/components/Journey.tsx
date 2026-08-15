import Reveal from "./Reveal";

const ITEMS = [
  {
    active: false,
    date: "2023 — Ongoing",
    title: "B.Tech, Computer Science & Engineering",
    org: "Now in 3rd year",
    desc: "Built a foundation in data structures, algorithms and systems thinking — while shipping real products on the side.",
  },
  {
    active: true,
    date: "Mar 2024 — Mar 2025",
    title: "Co-Founder & Full-Stack Engineer",
    org: "Azeorex Agency",
    desc: "Founded and led a web agency specializing in full-stack SaaS. Built 5+ client applications and architected a custom drag-and-drop editor with AI-assisted page generation.",
  },
  {
    active: true,
    date: "Jan 2026 — Feb 2026",
    title: "Frontend Engineer Intern",
    org: "Hooman Digital",
    desc: "Developed pixel-perfect, production-ready pages from Figma designs using React.js and Astro, focusing on performance optimization and advanced SEO techniques.",
  },
  {
    active: false,
    date: "Now",
    title: "Building AI SaaS Products",
    org: "Independent",
    desc: "Designing and shipping production-ready AI SaaS end-to-end — from architecture to interface — while staying open to new teams and problems.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-[120px] bg-bg-1 border-t border-b border-line-soft">
      <div className="max-w-maxw mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-end gap-10 mb-14 flex-wrap">
          <div>
            <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-flame-1 inline-flex items-center gap-[9px] mb-[18px] font-medium before:content-[''] before:w-[14px] before:h-[1px] before:bg-flame-1 before:inline-block">Journey</div>
            <Reveal>
              <h2 className="text-[clamp(30px,4vw,44px)] max-w-[600px] font-bold font-display text-text">Experience &amp; milestones.</h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="text-text-dim max-w-[360px] text-[15px] pb-1">From a first line of code to a company co-founded, in order.</p>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative max-w-[840px] mt-2.5 before:content-[''] before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-[1px] before:bg-line">
            {ITEMS.map((it) => (
              <div className="relative pb-12 pl-10 last:pb-0" key={it.title}>
                <div className={`absolute left-0 top-1 w-[19px] h-[19px] rounded-full bg-bg-1 border flex items-center justify-center after:content-[''] after:w-[7px] after:h-[7px] after:rounded-full ${it.active ? "border-flame-1 after:bg-flame-1 after:shadow-[0_0_12px_rgba(255,90,31,0.32)]" : "border-line after:bg-text-faint"}`}></div>
                <span className="font-mono text-[12.5px] text-flame-1 tracking-[0.06em] mb-2 block">{it.date}</span>
                <h3 className="text-[19px] mb-1.25 font-display font-semibold text-text">{it.title}</h3>
                <div className="text-[13.5px] text-text-dim mb-2.5 font-mono">{it.org}</div>
                <p className="text-text-dim text-[14.5px] leading-[1.7] max-w-[560px]">{it.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
