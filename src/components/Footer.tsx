import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft py-11">
      <Wrapper className="flex justify-between items-center flex-wrap gap-4">
        <a
          href="#hero"
          className="font-mono font-medium text-[15px] tracking-[0.02em] focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
        >
          SAYAN<span className="text-flame-1">.</span>DAS
        </a>
        <div className="flex gap-5.5">
          <a
            href="#about"
            className="text-[13px] text-text-dim hover:text-flame-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
          >
            About
          </a>
          <a
            href="#work"
            className="text-[13px] text-text-dim hover:text-flame-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-[13px] text-text-dim hover:text-flame-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
          >
            Contact
          </a>
        </div>
        <p className="text-text-faint text-[13px] font-mono">© 2026 Sayan Das. Built with intent.</p>
      </Wrapper>
    </footer>
  );
}
