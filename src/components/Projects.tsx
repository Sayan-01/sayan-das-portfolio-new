import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Wrapper from "./Wrapper";
import Reveal from "./Reveal";
import Link from "next/link";

const PROJECTS = [
  {
    index: "01",
    eyebrow: "Agency SaaS",
    title: "Mile Stack",
    desc: "A multi-tenant client management SaaS for web agencies with passwordless magic-link auth, subdomain-driven workspaces, RBAC, and milestone tracking — centralizing client communication and project collaboration.",
    tags: ["Next.js 14", "PostgreSQL", "TypeScript", "Polar"],
    gradient: "bg-[linear-gradient(0deg,#3048a8_0%,#673d91_50%,#ff5a2f_100%)]",
    images: ["/projects/project_3/image.png", "/projects/project_3/image1.png"],
    link: "https://sdx26.vercel.app/",
  },
  {
    index: "02",
    eyebrow: "AI SaaS",
    title: "Persona-AI",
    desc: "An AI-powered platform for content ideation, enhancement, and performance analytics — with an AI-focused onboarding flow for personalized generation and dedicated modules for content generation and YouTube optimization powered by the Gemini API.",
    tags: ["Next.js 14", "PostgreSQL", "Gemini API", "TypeScript"],
    gradient: "bg-[linear-gradient(135deg,#ff6a2a_0%,#b45cff_45%,#7667ff_100%)]",
    images: ["/projects/project_2/image.png", "/projects/project_2/image2.png", "/projects/project_2/image3.png"],
    link: "https://personaai-01.vercel.app/",
  },

  {
    index: "03",
    eyebrow: "AI Website Builder",
    title: "Azeorex",
    desc: "An AI-powered SaaS to create, edit, and publish websites via a custom drag-and-drop engine — with a JSON node-tree architecture hitting sub-100ms edit latency and an integrated marketplace for buying/selling templates.",
    tags: ["Next.js", "Multi-Model AI", "Figma", "Node.js", "Polar"],
    gradient: "bg-[linear-gradient(135deg,#3048a8_0%,#673d91_50%,#ff5a2f_100%)]",
    images: ["/projects/project_1/image.png", "/projects/project_1/image2.png", "/projects/project_1/image3.png"],
    link: "https://azeorex.vercel.app/",
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
      <div className={`relative w-full group aspect-[16/10]  p-2  ${gradient} flex flex-col rounded-2xl`}>
        {/* Image container */}
        <div className="relative flex-1 w-full bg-stone-950 overflow-hidden rounded-xl">
          {/* Fallback gradient background */}
          <div className={`absolute inset-0 opacity-15 ${gradient} rounded-xl`} />

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
        {len > 0 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute md:left-6 left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center md:w-10 md:h-10 w-8 h-8 rounded-full bg-stone-950/50 border border-stone-800 text-stone-300 backdrop-blur-xl group-hover/carousel:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute md:right-6 right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center md:w-10 md:h-10 w-8 h-8 rounded-full bg-stone-950/50 border border-stone-800 text-stone-300 backdrop-blur-xl group-hover/carousel:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* Pagination indicators */}
      {len > 0 && (
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
      className="pb-20 md:pb-30"
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
              className="grid md:grid-cols-2 gap-14 md:gap-16 items-center py-10 max-sm:border-b border-line last:border-b-0"
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
                    <Link
                      target="_blank"
                      href={`${p.link}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-100 hover:text-orange-500 hover:gap-2.5 transition-all"
                    >
                      View project <ArrowUpRight size={16} />
                    </Link>
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
