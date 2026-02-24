"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SKOOL_URL, SKOOL_CTA_TEXT } from "@/config/skool";

interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  thumbnail?: string;
  isMdx: boolean;
  content?: {
    sections: { title: string; content: string }[];
  };
}


export default function GuiasClient({ guides }: { guides: Guide[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-50px" });

  const filteredGuides = guides.filter((guide) => {
    return (
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-[#09090B] pt-32 pb-8 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        {/* Floating orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-1/4 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#60A5FA]/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-[#27272A] bg-[#18181B]/50 text-[#A1A1AA] px-4 py-2 rounded-full text-xs font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
              {guides.length} Guías Disponibles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="text-[#FAFAFA]">Guías </span>
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
                Gratuitas
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#A1A1AA] mb-10"
            >
              Recursos prácticos paso a paso para dominar cada herramienta de IA
            </motion.p>

            {/* Search bar with glow effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-md mx-auto"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-xl opacity-0 group-focus-within:opacity-50 blur transition-opacity duration-300" />
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar guías..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-5 py-4 pl-12 bg-[#18181B] border border-[#27272A] rounded-xl text-[#FAFAFA] text-sm placeholder-[#71717A] focus:outline-none focus:border-[#3B82F6] transition-all duration-300"
                  />
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#71717A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Guides Grid - Dark theme */}
      <section className="py-16 bg-[#09090B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredGuides.length > 0 ? (
            <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/guias/${guide.id}`}
                    className="group block h-full rounded-xl border border-[#27272A] bg-[#18181B] overflow-hidden transition-all duration-300 hover:border-[#3B82F6]/50 hover:shadow-xl hover:shadow-[#3B82F6]/10 hover:-translate-y-1"
                  >
                    {/* Card Header - Thumbnail */}
                    <div className="aspect-video bg-[#0F172A] relative overflow-hidden">
                      {guide.thumbnail ? (
                        <>
                          <img
                            src={`${guide.thumbnail}?v=${Date.now()}`}
                            alt={guide.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            suppressHydrationWarning
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent" />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 grid-pattern opacity-30" />
                          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-[#60A5FA]/5" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-2xl bg-[#27272A] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#3B82F6]/20 transition-all duration-300">
                              <svg
                                className="w-8 h-8 text-[#52525B] group-hover:text-[#3B82F6] transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                              </svg>
                            </div>
                          </div>
                        </>
                      )}
                      {/* Reading time badge */}
                      <div className="absolute bottom-3 right-3 bg-[#09090B]/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-[#27272A]">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {guide.readingTime}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="font-semibold text-[#FAFAFA] group-hover:text-[#60A5FA] transition-colors line-clamp-2">
                        {guide.title}
                      </h3>

                      <p className="mt-2 text-[#71717A] text-sm line-clamp-2">
                        {guide.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-[#52525B]">
                          {guide.isMdx ? "Guía visual" : `${guide.content?.sections?.length || 0} secciones`}
                        </span>
                        <span className="inline-flex items-center text-sm text-[#3B82F6] font-medium group-hover:text-[#60A5FA] transition-colors">
                          Leer guía
                          <svg
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#18181B] border border-[#27272A] flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#52525B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#FAFAFA] mb-2">
                No se encontraron guías
              </h3>
              <p className="text-[#71717A] text-sm mb-6">
                Intenta con otra búsqueda
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#3B82F6] text-sm font-medium hover:text-[#60A5FA] transition-colors"
              >
                Ver todas las guías
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section - Premium style */}
      <section className="py-24 bg-[#09090B] relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#60A5FA]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent">
                Accede a todo el contenido
              </span>
            </h2>

            <p className="text-lg text-white mb-10 max-w-xl mx-auto">
              Únete gratis a nuestra comunidad y obtén acceso exclusivo a guías,
              cursos y soporte directo
            </p>

            <motion.a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] bg-[length:200%_100%] animate-gradient-x" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] blur-xl" />
              <span className="absolute inset-0 rounded-xl animate-cta-pulse" />
              <span className="relative flex items-center gap-3">
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
            </motion.a>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-[#A1A1AA]"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                100% Gratuito
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Comunidad activa
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Soporte de expertos
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
