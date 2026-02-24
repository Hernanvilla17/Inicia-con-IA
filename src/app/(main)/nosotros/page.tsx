"use client";

import { motion } from "framer-motion";
import { team } from "@/data/team";
import Button from "@/components/ui/Button";
import { SKOOL_URL } from "@/config/skool";

export default function NosotrosPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-[#09090B] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-[#27272A] bg-[#18181B]/50 text-[#A1A1AA] px-3 py-1.5 rounded-full text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            Equipo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#FAFAFA] tracking-tight mb-4"
          >
            Quiénes Somos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#A1A1AA] max-w-lg mx-auto"
          >
            Conoce al equipo detrás de Inicia con IA
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, ease: "easeOut" }}
                className="group p-8 rounded-xl border border-[#E4E4E7] bg-white hover:border-[#D4D4D8] transition-colors"
              >
                <div className="flex items-start gap-5">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-[#18181B]">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#3B82F6] mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-[#52525B] leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Social links */}
                    <div className="flex gap-2 mt-5">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg border border-[#E4E4E7] flex items-center justify-center text-[#71717A] hover:border-[#D4D4D8] hover:text-[#18181B] transition-colors"
                          aria-label={`LinkedIn de ${member.name}`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg border border-[#E4E4E7] flex items-center justify-center text-[#71717A] hover:border-[#D4D4D8] hover:text-[#18181B] transition-colors"
                          aria-label={`Twitter de ${member.name}`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      )}
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg border border-[#E4E4E7] flex items-center justify-center text-[#71717A] hover:border-[#D4D4D8] hover:text-[#18181B] transition-colors"
                          aria-label={`Instagram de ${member.name}`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-[#52525B] text-sm mb-4">Conócenos mejor en nuestra comunidad</p>
            <Button href={SKOOL_URL} variant="cta" target="_blank">
              Unirme a la Comunidad
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-[#09090B] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-6">
              Nuestra Misión
            </h2>
            <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed mb-8">
              Creemos que la inteligencia artificial no debería ser exclusiva de expertos técnicos.
              Nuestra misión es democratizar el acceso a estas herramientas, enseñando a personas
              de cualquier background a aprovechar el poder de la IA para ser más productivas,
              creativas y eficientes en su trabajo diario.
            </p>
            <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed">
              A través de contenido gratuito, guías prácticas y una comunidad activa,
              ayudamos a miles de personas a dar sus primeros pasos con IA y transformar
              la manera en que trabajan.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
