"use client";

import { useState } from "react";
import Wrapper from "./Wrapper";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[500] bg-bg/72 backdrop-blur-[14px] border-b border-line-soft">
      <Wrapper className="py-[18px] flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono font-medium text-[17px] tracking-[0.02em] focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
        >
          SAYAN<span className="text-flame-1">.</span>DAS
        </a>
        <ul className={`flex gap-[34px] list-none max-[860px]:fixed max-[860px]:top-[64px] max-[860px]:left-0 max-[860px]:right-0 max-[860px]:bg-bg-1 max-[860px]:flex-col max-[860px]:py-6 max-[860px]:px-8 max-[860px]:gap-5 max-[860px]:border-b max-[860px]:border-line max-[860px]:z-[400] transition-transform duration-350 ease-in-out ${open ? "max-[860px]:translate-y-0" : "max-[860px]:-translate-y-[130%]"}`}>
          <li>
            <a
              href="#about"
              className="text-[14px] text-text-dim transition-colors duration-200 ease-in-out relative hover:text-text focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
              onClick={() => setOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#stack"
              className="text-[14px] text-text-dim transition-colors duration-200 ease-in-out relative hover:text-text focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
              onClick={() => setOpen(false)}
            >
              Stack
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="text-[14px] text-text-dim transition-colors duration-200 ease-in-out relative hover:text-text focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
              onClick={() => setOpen(false)}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#journey"
              className="text-[14px] text-text-dim transition-colors duration-200 ease-in-out relative hover:text-text focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
              onClick={() => setOpen(false)}
            >
              Journey
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-[14px] text-text-dim transition-colors duration-200 ease-in-out relative hover:text-text focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
              onClick={() => setOpen(false)}
            >
              Services
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-[18px]">
          <a
            href="#contact"
            className="font-body font-semibold text-[14.5px] py-[14px] px-[26px] rounded-full inline-flex items-center gap-[9px] border border-line bg-transparent cursor-pointer transition-all duration-250 ease-in-out whitespace-nowrap text-text hover:border-flame-1 hover:text-flame-1 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3 max-[860px]:hidden"
          >
            Get in touch
          </a>
          <button
            className="hidden max-[860px]:flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1.5 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="w-[22px] h-[2px] bg-text block"></span>
            <span className="w-[22px] h-[2px] bg-text block"></span>
            <span className="w-[22px] h-[2px] bg-text block"></span>
          </button>
        </div>
      </Wrapper>
    </header>
  );
}
