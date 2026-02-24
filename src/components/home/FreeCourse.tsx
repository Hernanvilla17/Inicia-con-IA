"use client";

import { motion } from "framer-motion";
import { lessons } from "@/data/lessons";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKOOL_URL } from "@/config/skool";

export default function FreeCourse() {
  return (
    <section id="curso-gratuito" className="py-24 md:py-32 bg-[#FAFAFA] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curso gratuito"
          title="Tus Primeros Pasos con IA"
          subtitle="6 lecciones prácticas para dominar las herramientas de IA más importantes"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, ease: "easeOut" }}
              className="group relative bg-white rounded-xl border border-[#E4E4E7] overflow-hidden hover:border-[#D4D4D8] transition-colors"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-[#18181B] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#FAFAFA]/10 flex items-center justify-center group-hover:bg-[#FAFAFA]/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-[#FAFAFA] ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Lesson number */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-[#FAFAFA] flex items-center justify-center text-[#18181B] text-sm font-bold">
                  {lesson.id}
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 text-xs text-[#A1A1AA] bg-[#09090B]/80 px-2 py-1 rounded">
                  {lesson.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-[#18181B] text-sm mb-1 group-hover:text-[#3B82F6] transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-xs text-[#52525B] line-clamp-2">
                  {lesson.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button href={SKOOL_URL} variant="cta" size="lg" target="_blank">
            Acceder al Curso en Skool
            <svg
              className="w-4 h-4 ml-2"
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
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
