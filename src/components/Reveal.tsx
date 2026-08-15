"use client";

import { cloneElement, useEffect, useRef, useState, type ReactElement } from "react";

export default function Reveal({
  children,
  className = "",
}: {
  children: ReactElement<{ className?: string; ref?: React.Ref<HTMLElement> }>;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const existing = children.props.className || "";
  const merged = `${existing} transition-all duration-[800ms] ease-out ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[26px]"
  } ${className}`.trim();

  return cloneElement(children, { ref, className: merged });
}
