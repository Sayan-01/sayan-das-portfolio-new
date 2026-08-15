import Reveal from "./Reveal";
import Wrapper from "./Wrapper";

const CAPS = [
  {
    num: "01 · Frontend",
    title: "Interfaces",
    desc: "React & Next.js interfaces built for speed, accessibility and pixel-precision.",
  },
  {
    num: "02 · Backend",
    title: "Systems",
    desc: "APIs, databases and auth flows designed to hold up under real traffic.",
  },
  {
    num: "03 · DevOps",
    title: "Shipping",
    desc: "CI/CD, containers and cloud deploys that get code to production, reliably.",
  },
  {
    num: "04 · Design",
    title: "Judgment",
    desc: "Design and DSA-sharpened problem solving behind every product decision.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-[120px] bg-bg-1 border-t border-b border-line-soft"
    >
      <Wrapper className="">
        <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-flame-1 inline-flex items-center gap-[9px] mb-[18px] font-medium before:content-[''] before:w-[14px] before:h-[1px] before:bg-flame-1 before:inline-block">The Story</div>
        <div className="grid grid-cols-2 gap-[70px] items-start max-[900px]:grid-cols-1 max-[900px]:gap-11">
          <Reveal>
            <div>
              <p className="font-display text-[clamp(26px,3.4vw,38px)] leading-[1.18] font-semibold text-text">
                I don&apos;t just write code — <span className="text-flame-1">I build ecosystems</span> that connect engineering with people.
              </p>
              <p className="text-text-dim text-[16px] leading-[1.8] mt-[26px]">
                Somewhere between a terminal window and a Figma file, I found the thing I actually care about: building things end-to-end. I&apos;ve founded a web agency, shipped a drag-and-drop AI
                page builder, and I&apos;m currently deep in production-grade AI SaaS — always chasing the point where solid engineering and thoughtful design meet.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 gap-[1px] bg-line border border-line rounded-custom overflow-hidden">
              {CAPS.map((c) => (
                <div
                  className="bg-bg py-7 px-6"
                  key={c.num}
                >
                  <div className="font-mono text-flame-1 text-[12.5px] tracking-[0.1em]">{c.num}</div>
                  <h3 className="text-[18px] mt-3.5 mb-2 font-display font-semibold text-text">{c.title}</h3>
                  <p className="text-[13.5px] text-text-dim leading-[1.6]">{c.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Wrapper>
    </section>
  );
}
