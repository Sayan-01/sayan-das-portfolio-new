import { motion } from "motion/react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ badge, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} mb-16`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="liquid-glass rounded-full px-4 py-1 text-xs font-semibold font-body text-foreground mb-4"
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
          className="text-lg text-foreground/60 max-w-2xl font-body font-light leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
