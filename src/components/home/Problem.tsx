"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SKOOL_URL } from "@/config/skool";

const problems = [
  {
    title: "Pierdes horas en tareas repetitivas",
    description:
      "Copiar, pegar, formatear... mientras otros automatizan todo con IA.",
  },
  {
    title: "No sabes por dónde empezar",
    description:
      "ChatGPT, Claude, Gemini... hay tantas opciones que te paralizas.",
  },
  {
    title: "Tus prompts no dan buenos resultados",
    description:
      "Escribes lo que necesitas pero la IA no entiende lo que quieres.",
  },
  {
    title: "Sientes que te estás quedando atrás",
    description:
      "Todos hablan de IA pero tú sigues haciendo las cosas como siempre.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="El problema"
          title="¿Te suena familiar?"
        />

        <div className="grid md:grid-cols-2 gap-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, ease: "easeOut" }}
              className="group p-6 rounded-xl border border-[#E4E4E7] bg-white hover:border-[#D4D4D8] transition-colors"
            >
              <h3 className="text-lg font-semibold text-[#18181B] mb-2">
                {problem.title}
              </h3>
              <p className="text-[#52525B] text-sm leading-relaxed">
                {problem.description}
              </p>
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
          <p className="text-[#52525B] text-sm mb-4">
            ¿La solución? Aprende con nuestra comunidad gratuita
          </p>
          <Button href={SKOOL_URL} variant="cta" target="_blank">
            Unirme Gratis
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
