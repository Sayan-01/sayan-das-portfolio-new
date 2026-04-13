import { motion } from "motion/react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ badge, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} mb-10 md:mb-18 sm:px-8 px-5`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="liquid-glass border-accent-blue/20 rounded-full px-4 py-1 text-xs font-semibold font-body text-accent-blue mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
      >
        {badge}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-heading italic text-foreground mb-3 tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:text-lg text-foreground/60 max-w-2xl font-body font-light leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
