import Image from "next/image";
import Reveal from "./Reveal";
import Wrapper from "./Wrapper";

const PROJECTS = [
  {
    i: 0,
    cover: "radial-gradient(120% 120% at 15% 15%, #ff8a4d, #ff3d1f 45%, #4a1207 100%)",
    idx: "01 / Product",
    img: "/projects/project_1/image.png",
    eyebrow: "AI SaaS",
    title: "Nexus AI",
    desc: "An AI-powered SaaS that turns messy meeting notes into structured, actionable plans — built solo from database schema to onboarding flow.",
    tags: ["Next.js", "PostgreSQL", "OpenAI API", "Stripe"],
  },
  {
    i: 1,
    cover: "radial-gradient(120% 120% at 85% 20%, #ffcf6b, #ff5a1f 50%, #240c02 100%)",
    idx: "02 / Platform",
    img: "/projects/project_2/image.png",
    eyebrow: "Agency Build",
    title: "Buildr",
    desc: "A drag-and-drop site builder with AI-assisted page generation, architected during my time co-founding Azeorex — used to launch 5+ client applications.",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    i: 2,
    cover: "radial-gradient(120% 120% at 30% 85%, #ff5a1f, #7a1c07 55%, #0a0908 100%)",
    idx: "03 / Web",
    img: "/projects/project_3/image.png",
    eyebrow: "Client Work",
    title: "PixelForge Storefronts",
    desc: "Pixel-perfect marketing pages shipped from Figma to production, tuned for Core Web Vitals and organic search performance.",
    tags: ["Astro", "React", "Figma", "SEO"],
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="py-20 md:pb-30"
    >
      <Wrapper>
        <div className="flex justify-between items-end gap-10 mb-14 flex-wrap">
          <div>
            <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-flame-1 inline-flex items-center gap-[9px] mb-[18px] font-medium before:content-[''] before:w-[14px] before:h-[1px] before:bg-flame-1 before:inline-block">
              Selected Work
            </div>
            <Reveal>
              <h2 className="text-[clamp(2.1rem,4.6vw,3.4rem)] max-w-[600px] font-bold font-display text-text">Featured projects.</h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="text-text-dim max-w-[360px] text-[15px] pb-1">A few products I&apos;ve architected, designed and shipped end-to-end.</p>
          </Reveal>
        </div>

        {PROJECTS.map((p) => (
          <Reveal key={p.title}>
            <div className="grid grid-cols-[0.9fr_1.1fr] gap-0 border border-line rounded-custom overflow-hidden mb-[26px] last:mb-0 bg-bg-1 max-[820px]:grid-cols-1 ">
              {p.i !== 9 ? (
                <div
                  className="min-h-[280px] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:from-[40%] after:to-black/35"
                  style={{ background: p.cover }}
                >
                  <span className="absolute top-5 left-[22px] font-mono text-[13px] text-white/75 tracking-[0.08em]">{p.idx}</span>
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={1000}
                    height={1000}
                    className="absolute w-max h-full "
                  />
                </div>
              ) : (
                <></>
              )}
              <div className="md:py-[38px] md:px-10 px-5 py-5 flex flex-col justify-center">
                <div className="font-mono text-[12px] text-text-faint tracking-[0.1em] uppercase mb-2.5">{p.eyebrow}</div>
                <h3 className="text-[26px] mb-3 font-bold font-display text-text">{p.title}</h3>
                <p className="text-text-dim text-[15px] leading-[1.7] mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-[22px]">
                  {p.tags.map((t) => (
                    <span
                      className="font-mono text-[12px] py-[6px] px-3 border border-line rounded-full text-text-dim bg-bg-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
                      key={t}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-text transition-all duration-200 ease-in-out hover:gap-3 hover:text-flame-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
                >
                  View project &rarr;
                </a>
              </div>
              {/* {p.i % 2 !== 0 ? (
                <div
                  className="min-h-[280px] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:from-[40%] after:to-black/35"
                  style={{ background: p.cover }}
                >
                  <span className="absolute top-5 left-[22px] font-mono text-[13px] text-white/75 tracking-[0.08em]">{p.idx}</span>
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ) : (
                <></>
              )} */}
            </div>
          </Reveal>
        ))}
      </Wrapper>
    </section>
  );
}
