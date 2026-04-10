import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
}

export default function BlurText({ text, className = "", delay = 100, animateBy = "words", direction = "bottom" }: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const yOffset = direction === "bottom" ? 50 : -50;

  return (
    <div
      ref={ref}
      className={`flex flex-wrap ${className}`}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={{ filter: "blur(10px)", opacity: 0, y: yOffset }}
          animate={
            isInView
              ? {
                  filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                  opacity: [0, 0.5, 1],
                  y: [yOffset, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 0.35,
            delay: delay / 1000 + index * 0.1,
            ease: "easeOut",
          }}
          className="inline-block mr-[0.2em]"
        >
          {element === " " ? "\u00A0" : element}
        </motion.span>
      ))}
    </div>
  );
}
