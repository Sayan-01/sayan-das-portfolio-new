import Reveal from "./Reveal";
import Wrapper from "./Wrapper";

const TECH = ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Docker", "AWS", "Figma"];

export default function Hero() {
  const items = [...TECH, ...TECH];

  return (
    <section
      id="hero"
      className="md:pt-42 pt-24 pb-22.5 overflow-hidden relative min-h-dvh flex flex-col flex-1 justify-center align-center"
    >
      <div
        className="absolute -inset-x-[10%] -top-[10%] bottom-auto h-[900px] -z-10 pointer-events-none blur-[10px] animate-drift"
        style={{
          background:
            "radial-gradient(600px 460px at 18% 22%, rgba(255,122,61,.24), transparent 65%), radial-gradient(520px 420px at 82% 8%, rgba(255,61,31,.16), transparent 60%), radial-gradient(480px 380px at 60% 55%, rgba(255,178,56,.08), transparent 65%)",
        }}
        aria-hidden="true"
      ></div>
      <Wrapper className="grid grid-cols-[1.15fr_0.85fr] gap-14 items-center max-[960px]:grid-cols-1">
        <div className="max-md:min-h-[90%]">
          <div className="font-mono text-text-faint text-[15px] mb-1.5">Hey, I&apos;m</div>
          <h1 className="text-[clamp(48px,8vw,92px)] text-text font-bold tracking-[-0.02em] leading-[1.04] font-display">
            Sayan <span className="bg-[linear-gradient(100deg,var(--color-flame-1),var(--color-amber)_55%,var(--color-flame-2))] bg-clip-text text-transparent">Das</span>
          </h1>
          <p className="font-display font-medium text-[clamp(18px,2.4vw,26px)] text-text-dim mt-[18px] max-w-[640px]">
            A <b className="text-text font-semibold">Full-Stack Developer</b>, <b className="text-text font-semibold">Product Designer</b> &amp;{" "}
            <b className="text-text font-semibold">Startup Co-founder</b> — turning ambitious ideas into shipped software.
          </p>
          <p className="mt-[22px] text-text-dim text-[16px] max-w-[540px] leading-[1.7]">
            I&apos;m a 3rd-year CSE student who doesn&apos;t just code — I build ecosystems. From co-founding startups to shipping production-ready AI SaaS, I bridge the gap between complex
            engineering and human-centric design.
          </p>
          <div className="flex gap-3.5 mt-[34px] flex-wrap">
            <a
              href="https://drive.google.com/file/d/1bs5jp2I56KokRZ5Oitwo6c7thu37mvRi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-semibold text-[14.5px] py-[14px] px-[26px] rounded-full inline-flex items-center gap-[9px] border border-transparent cursor-pointer transition-all duration-250 ease-in-out whitespace-nowrap bg-gradient-to-br from-flame-1 to-flame-2 text-bg shadow-[0_8px_30px_-8px_rgba(255,90,31,0.32)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-8px_rgba(255,90,31,0.32)] focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
            >
              My resume →
            </a>
            <a
              href="#contact"
              className="font-body font-semibold text-[14.5px] py-[14px] px-[26px] rounded-full inline-flex items-center gap-[9px] border border-line bg-transparent cursor-pointer transition-all duration-250 ease-in-out whitespace-nowrap text-text hover:border-flame-1 hover:text-flame-1 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
            >
              Get in touch
            </a>
          </div>
        </div>

        <Reveal>
          <div className="bg-gradient-to-b from-bg-1 to-bg border border-line rounded-custom shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,122,61,0.05)] overflow-hidden">
            <div className="flex items-center gap-[7px] py-[13px] px-4 border-b border-line-soft bg-bg-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
              <em className="not-italic font-mono text-[12px] text-text-faint ml-2">sayan@dev — zsh</em>
            </div>
            <div className="pt-[22px] px-[22px] pb-[26px] font-mono text-[13.5px] text-text-dim min-h-[230px]">
              <div>
                <span className="text-flame-1">➜</span> whoami
              </div>
              <div className="text-text mt-[3px] mb-3 pl-4">
                Full-Stack Developer &amp; Product Designer
                <br />
                3rd-year CSE student · MERN + Next.js
              </div>
              <div>
                <span className="text-flame-1">➜</span> ls ./skills
              </div>
              <div className="text-text mt-[3px] mb-3 pl-4">
                frontend&nbsp;&nbsp;backend&nbsp;&nbsp;devops
                <br />
                design&nbsp;&nbsp;&nbsp;&nbsp;dsa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;systems
              </div>
              <div>
                <span className="text-flame-1">➜</span> cat status.txt
              </div>
              <div className="text-text mt-[3px] mb-3 pl-4">
                currently shipping an AI SaaS product
                <br />
                open to internships &amp; freelance work
                <span className="inline-block w-[7px] h-3.5 bg-flame-1 align-middle ml-0.5 animate-blink"></span>
              </div>
            </div>
          </div>
        </Reveal>
      </Wrapper>

      <div className="mt-20 border-t border-b border-line-soft py-5 overflow-hidden">
        <div
          className="max-w-maxw mx-auto px-5 sm:px-8"
          style={{ overflow: "hidden" }}
        >
          <div className="flex gap-10 whitespace-nowrap w-max animate-scroll">
            {items.map((t, i) => (
              <span
                key={i}
                className="font-mono text-[13px] tracking-[0.08em] text-text-faint uppercase"
              >
                {t}
                <span className="text-flame-1"> ✦ </span>
              </span>
            ))}
            {items.map((t, i) => (
              <span
                key={i}
                className="font-mono text-[13px] tracking-[0.08em] text-text-faint uppercase"
              >
                {t}
                <span className="text-flame-1"> ✦ </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
