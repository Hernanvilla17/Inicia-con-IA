"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowOnHover?: boolean;
  variant?: "default" | "dark" | "glass";
}

const cardVariants = {
  default: "bg-white border border-[#E4E4E7]",
  dark: "bg-[#18181B] border border-[#27272A]",
  glass: "bg-white/5 backdrop-blur-lg border border-[#27272A]/50",
};

const hoverAnimations = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Card({
  children,
  className = "",
  hover = true,
  glowOnHover = false,
  variant = "default",
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={hover ? hoverAnimations.hover : undefined}
      className={`
        rounded-xl overflow-hidden transition-all duration-300 relative
        ${cardVariants[variant]}
        ${hover ? "cursor-pointer" : ""}
        ${glowOnHover ? "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]" : "hover:shadow-xl"}
        ${hover ? "hover:border-[#3B82F6]/30" : ""}
        ${className}
      `}
    >
      {hover && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {children}
    </motion.div>
  );
}
