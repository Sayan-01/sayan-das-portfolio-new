import Reveal from "./Reveal";
import Wrapper from "./Wrapper";

const SERVICES = [
  {
    num: "01",
    title: "Full-Stack Development",
    desc: "End-to-end MERN + Next.js builds — from database schema to deployed frontend.",
  },
  {
    num: "02",
    title: "Product & UI Design",
    desc: "Interfaces designed in Figma and built to match, pixel for pixel.",
  },
  {
    num: "03",
    title: "AI / SaaS Architecture",
    desc: "Structuring AI-driven products for real usage — data, auth, billing and scale.",
  },
  {
    num: "04",
    title: "DevOps & Deployment",
    desc: "CI/CD pipelines, containers and cloud infra that keep shipping smooth.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-[120px]"
    >
      <Wrapper>
        <div className="flex justify-between items-end gap-10 mb-14 flex-wrap">
          <div>
            <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-flame-1 inline-flex items-center gap-[9px] mb-[18px] font-medium before:content-[''] before:w-[14px] before:h-[1px] before:bg-flame-1 before:inline-block">
              Services
            </div>
            <Reveal>
              <h2 className="text-[clamp(2.1rem,4.6vw,3.4rem)] max-w-[600px] font-bold font-display text-text">What I can help you with.</h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="text-text-dim max-w-[360px] text-[15px] pb-1">From strategy to shipped product — tailored support that grows with what you&apos;re building.</p>
          </Reveal>
        </div>
        <Reveal>
          <div className="grid grid-cols-4 gap-[1px] bg-line border border-line rounded-custom overflow-hidden max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
            {SERVICES.map((s) => (
              <div
                className="bg-bg py-[34px] px-[26px] transition-colors duration-250 ease-in-out hover:bg-bg-1"
                key={s.num}
              >
                <div className="font-mono text-[12px] text-text-faint">{s.num}</div>
                <h3 className="text-[18px] mt-[18px] mb-2.5 font-display font-semibold text-text">{s.title}</h3>
                <p className="text-[13.5px] text-text-dim leading-[1.65]">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Wrapper>
    </section>
  );
}
