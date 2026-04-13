import React from "react";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-background relative overflow-hidden transition-colors duration-500 border-t border-foreground/5">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 relative z-10">
          {/* Logo & Copyright */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="h-10 w-10 bg-foreground text-background rounded-xl flex items-center justify-center font-bold text-xl transition-transform group-hover:rotate-12">SD</div>
              <span className="text-2xl font-heading italic text-foreground tracking-tight">Sayan Das</span>
            </div>
            <p className="text-sm text-foreground/40 font-body max-w-xs leading-relaxed">
              © copyright Sayan Das 2026. All rights reserved. <br />
              Built with precision, passion, and AI.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h4 className="text-[12px] font-black text-foreground/30 uppercase tracking-[0.2em]">Pages</h4>
              <ul className="space-y-3">
                {["Home", "About", "Stack", "Projects"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors font-body"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[12px] font-black text-foreground/30 uppercase tracking-[0.2em]">Socials</h4>
              <ul className="space-y-3">
                {["Twitter", "LinkedIn", "GitHub", "LeetCode"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors font-body"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[12px] font-black text-foreground/30 uppercase tracking-[0.2em]">Legal</h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors font-body"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[12px] font-black text-foreground/30 uppercase tracking-[0.2em]">Contact</h4>
              <ul className="space-y-3">
                {["Email Me", "Discord", "Collaboration"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors font-body"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </Wrapper>
        {/* Big Background Text */}
        <div className="relative mt-8 select-none overflow-hidden w-full h-auto">
          <h2 className="text-[clamp(4rem,14.5vw,40rem)] w-full font-sans font-black leading-none text-center tracking-tighter bg-gradient-to-b from-gray-500/20 to-transparent bg-clip-text text-transparent whitespace-nowrap">
            SAYAN DAS
          </h2>
        </div>
    </footer>
  );
};

export default Footer;
