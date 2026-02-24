"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKOOL_URL, SKOOL_CTA_TEXT } from "@/config/skool";

// Hook para animar números
function useCountUp(end: number, duration: number = 1.5, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
}

// Componente de estrellas animadas
function AnimatedStars({ shouldAnimate }: { shouldAnimate: boolean }) {
  const stars = [0, 1, 2, 3, 4];
  const totalDuration = 1.5; // misma duración que los contadores
  const staggerDelay = totalDuration / 5; // distribuir uniformemente

  return (
    <div className="flex gap-0.5 text-2xl md:text-3xl mb-1">
      {stars.map((index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0.2, scale: 0.5, color: "#52525B" }}
          animate={
            shouldAnimate
              ? { opacity: 1, scale: 1, color: "#FACC15" }
              : { opacity: 0.2, scale: 0.5, color: "#52525B" }
          }
          transition={{
            duration: 0.3,
            delay: shouldAnimate ? index * staggerDelay : 0,
            ease: "easeOut",
          }}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}

// Componente de contador animado
function AnimatedCounter({
  value,
  suffix = "",
  shouldStart,
}: {
  value: number;
  suffix?: string;
  shouldStart: boolean;
}) {
  const count = useCountUp(value, 1.5, shouldStart);

  return (
    <p className="text-2xl md:text-3xl font-bold text-[#FAFAFA]">
      {count}
      {suffix}
    </p>
  );
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-screen bg-[#09090B] overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Gradient glow from top */}
      <div className="absolute inset-0 gradient-radial" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="text-center">
          {/* Main headline with animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FAFAFA] tracking-tight mb-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Inicia con{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#3B82F6] inline-block"
            >
              Inteligencia Artificial
            </motion.span>
          </motion.h1>

          {/* Subtitle - white color */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Domina las herramientas de IA más poderosas del mercado. Incrementa tu productividad, automatiza tareas repetitivas y lleva tu trabajo al siguiente nivel sin necesidad de conocimientos técnicos.
          </motion.p>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            {/* CTA Button - full width like video */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-8"
            >
              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full py-4 md:py-5 text-center text-lg md:text-xl font-semibold text-white rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Animated gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] bg-[length:200%_100%] animate-gradient-x" />
                {/* Glow effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] blur-xl" />
                {/* Pulse ring animation */}
                <span className="absolute inset-0 rounded-xl animate-cta-pulse" />
                {/* Button content */}
                <span className="relative flex items-center justify-center gap-2">
                  {SKOOL_CTA_TEXT.primary}
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>
            </motion.div>

            {/* Video with entrance animation - synced with title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="relative aspect-video rounded-xl overflow-hidden border border-[#27272A] bg-[#18181B]"
            >
              {/* Video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FAFAFA] flex items-center justify-center group transition-transform"
                >
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-[#09090B] ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>

              {/* Gradient overlay for visual interest */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/50 to-transparent pointer-events-none" />
            </motion.div>

            {/* Stats below video - with scroll-triggered animations */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8 text-center"
            >
              {/* Star Rating */}
              <div className="flex flex-col items-center">
                <AnimatedStars shouldAnimate={isStatsInView} />
                <p className="text-sm text-[#71717A]">5.0 Rating</p>
              </div>
              <div className="w-px bg-[#27272A] hidden md:block" />

              {/* Lessons */}
              <div>
                <AnimatedCounter value={50} suffix="+" shouldStart={isStatsInView} />
                <p className="text-sm text-[#71717A]">Lecciones</p>
              </div>
              <div className="w-px bg-[#27272A] hidden md:block" />

              {/* Free */}
              <div>
                <AnimatedCounter value={100} suffix="%" shouldStart={isStatsInView} />
                <p className="text-sm text-[#71717A]">Gratis</p>
              </div>
              <div className="w-px bg-[#27272A] hidden md:block" />

              {/* Guides */}
              <div>
                <AnimatedCounter value={20} suffix="+" shouldStart={isStatsInView} />
                <p className="text-sm text-[#71717A]">Guías de aprendizaje</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-[#3F3F46] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-1.5 bg-[#71717A] rounded-full" />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090B] to-transparent pointer-events-none" />
    </section>
  );
}
