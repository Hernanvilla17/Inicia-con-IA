"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "cta" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  children: React.ReactNode;
}

const variants = {
  primary:
    "bg-[#3B82F6] text-white border border-[#3B82F6] hover:bg-[#2563EB] hover:border-[#2563EB]",
  secondary:
    "bg-[#18181B] text-[#FAFAFA] border border-[#27272A] hover:border-[#3F3F46] hover:bg-[#27272A]",
  outline:
    "bg-transparent text-[#FAFAFA] border border-[#3F3F46] hover:border-[#52525B] hover:bg-[#27272A]/50",
  cta:
    "bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white border border-transparent hover:from-[#2563EB] hover:to-[#1D4ED8]",
  ghost:
    "bg-transparent text-[#A1A1AA] border border-transparent hover:text-[#FAFAFA]",
};

const glowColors: Record<string, string> = {
  primary: "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2)",
  secondary: "0 0 20px rgba(39, 39, 42, 0.5)",
  outline: "0 0 15px rgba(63, 63, 70, 0.4)",
  cta: "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2)",
  ghost: "none",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  },
};

const shineVariants = {
  initial: { x: "-100%", opacity: 0 },
  hover: {
    x: "100%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
};

function ButtonContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        variants={shineVariants}
        initial="initial"
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:ring-offset-2 focus:ring-offset-[#09090B] relative overflow-hidden";

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  const glow = glowColors[variant];

  if (href) {
    const isExternal = href.startsWith("http") || target === "_blank";

    if (isExternal) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={combinedStyles}
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          style={{ boxShadow: "none" }}
          onHoverStart={(e) => {
            (e.target as HTMLElement).style.boxShadow = glow;
          }}
          onHoverEnd={(e) => {
            (e.target as HTMLElement).style.boxShadow = "none";
          }}
        >
          <ButtonContent>{children}</ButtonContent>
        </motion.a>
      );
    }

    return (
      <Link href={href}>
        <motion.span
          className={combinedStyles}
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          style={{ boxShadow: "none" }}
          onHoverStart={(e) => {
            (e.target as HTMLElement).style.boxShadow = glow;
          }}
          onHoverEnd={(e) => {
            (e.target as HTMLElement).style.boxShadow = "none";
          }}
        >
          <ButtonContent>{children}</ButtonContent>
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      className={combinedStyles}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      style={{ boxShadow: "none" }}
      onHoverStart={(e) => {
        (e.target as HTMLElement).style.boxShadow = glow;
      }}
      onHoverEnd={(e) => {
        (e.target as HTMLElement).style.boxShadow = "none";
      }}
      {...props}
    >
      <ButtonContent>{children}</ButtonContent>
    </motion.button>
  );
}
