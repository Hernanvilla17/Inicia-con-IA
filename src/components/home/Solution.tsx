"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { SKOOL_URL } from "@/config/skool";

const benefits = [
  {
    number: "01",
    title: "Aprende las herramientas correctas",
    description:
      "Te guiamos por las mejores herramientas de IA del mercado, explicándote cuándo y cómo usar cada una.",
  },
  {
    number: "02",
    title: "Resultados desde el primer día",
    description:
      "Nada de teoría aburrida. Cada lección tiene ejercicios prácticos que puedes aplicar inmediatamente.",
  },
  {
    number: "03",
    title: "Contenido actualizado constantemente",
    description:
      "La IA evoluciona rápido. Nuestro blog diario y guías te mantienen al día con las últimas novedades.",
  },
];

export default function Solution() {
  return (
    <section className="py-24 md:py-32 bg-[#09090B] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Gradient glow */}
      <div className="absolute inset-0 gradient-radial-center" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium tracking-wider uppercase mb-4 text-[#60A5FA]">
            La solución
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAFA] tracking-tight mb-4">
            Inicia con IA es tu atajo
          </h2>
          <p className="text-base md:text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            No necesitas ser técnico para aprovechar la IA. Te enseñamos todo
            paso a paso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="p-6 rounded-xl border border-[#27272A] bg-[#18181B]/50 hover:border-[#3F3F46] transition-colors h-full">
                <span className="text-4xl font-bold text-[#27272A] group-hover:text-[#3F3F46] transition-colors">
                  {benefit.number}
                </span>
                <h3 className="text-lg font-semibold text-[#FAFAFA] mt-4 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#A1A1AA] text-sm mb-4">
            Todo esto lo aprendes gratis en nuestra comunidad
          </p>
          <Button href={SKOOL_URL} variant="cta" target="_blank">
            Unirme a la Comunidad
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
