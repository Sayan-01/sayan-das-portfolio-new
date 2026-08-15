import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Wrapper from "./Wrapper";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    index: "01",
    eyebrow: "AI SaaS",
    title: "Nexus AI",
    desc: "An AI-powered SaaS that turns messy meeting notes into structured, actionable plans — built solo from database schema to onboarding flow.",
    tags: ["Next.js", "PostgreSQL", "OpenAI API", "Stripe"],
    gradient: "bg-[#A987FE]",
    images: ["/projects/project_1/image.png", "/projects/project_1/image1.png", "/projects/project_1/image2.png", "/projects/project_1/image3.png"],
  },
  {
    index: "02",
    eyebrow: "Agency Build",
    title: "Buildr",
    desc: "A drag-and-drop site builder with AI-assisted page generation, architected during my time co-founding Azeorex — used to launch 5+ client applications.",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    gradient: "bg-gradient-to-br from-amber-500 via-orange-600 to-amber-900",
    images: ["/projects/project_2/image.png", "/projects/project_2/image1.png", "/projects/project_2/image2.png", "/projects/project_2/image3.png"],
  },
  {
    index: "03",
    eyebrow: "Client Work",
    title: "PixelForge Storefronts",
    desc: "Pixel-perfect marketing pages shipped from Figma to production, tuned for Core Web Vitals and organic search performance.",
    tags: ["Astro", "React", "Figma", "SEO"],
    gradient: "bg-[#A987FE]",
    images: ["/projects/project_3/image.png"],
  },
];

function ProjectCarousel({ images, title, gradient }: { images: string[]; title: string; gradient: string }) {
  const [current, setCurrent] = useState(0);
  const len = images.length;

  const next = () => setCurrent((c) => (c + 1) % len);
  const prev = () => setCurrent((c) => (c - 1 + len) % len);

  return (
    <div className="relative group/carousel w-full">
      {/* Browser mockup card */}
      <div className={`relative w-full aspect-[16/10] rounded-xl p-2 overflow-hidden ${gradient} flex flex-col group shadow-2xl`}>
        

        {/* Image container */}
        <div className="relative flex-1 w-full bg-stone-950 overflow-hidden rounded-xl">
          {/* Fallback gradient background */}
          <div className={`absolute inset-0 opacity-15 ${gradient}`} />

          {/* Screenshot images stack */}
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-500 ease-in-out p-5 ${i === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0 pointer-events-none"}`}
            >
              <Image
                src={img}
                alt={`${title} screenshot ${i + 1}`}
                fill
                className="object-cover object-top transition-transform duration-700 "
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Overlays (visible on hover) */}
        {len > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-stone-950/70 border border-stone-800 text-stone-300 hover:bg-stone-950 hover:text-orange-500 hover:border-orange-500 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-stone-950/70 border border-stone-800 text-stone-300 hover:bg-stone-950 hover:text-orange-500 hover:border-orange-500 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* Pagination indicators */}
      {len > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-5 bg-orange-500" : "w-1.5 bg-stone-700 hover:bg-stone-500"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="py-20 md:pb-30"
    >
      <Wrapper>
        <div className="flex justify-between items-end gap-10  flex-wrap">
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
        <div className="mt-8 ">
          {PROJECTS.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={p.title}
                className={`grid md:grid-cols-2 gap-14 md:gap-16 items-center py-10   "
                  }`}
              >
                <div className={reverse ? "md:order-2" : "md:order-1"}>
                  <ProjectCarousel
                    images={p.images}
                    title={p.title}
                    gradient={p.gradient}
                  />
                </div>

                <div className={`relative ${reverse ? "md:order-1" : "md:order-2"}`}>
                  <span className="font-display absolute -top-8 right-0 md:right-4 text-7xl md:text-8xl font-extrabold text-stone-500 opacity-20 select-none pointer-events-none">{p.index}</span>

                  <div className="relative z-10">
                    <div className="font-mono2 text-xs tracking-widest uppercase text-stone-500 mb-3">{p.eyebrow}</div>
                    <h3 className="font-display font-bold text-2xl sm:text-[32px] text-stone-100 mb-4">{p.title}</h3>
                    <p className="text-stone-400 text-[15.5px] leading-relaxed mb-6 max-w-md">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono2 text-xs px-3 py-1.5 rounded-full border border-stone-800 bg-stone-900 text-stone-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-100 hover:text-orange-500 hover:gap-2.5 transition-all"
                    >
                      View project <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
