"use client";

import { Check } from "lucide-react";
import Link from "next/link";

interface CTAFinalProps {
  titulo?: string;
  comunidadUrl?: string;
  badges?: string[];
}

export function CTAFinal({
  titulo = "Domina la IA con nuestra comunidad",
  comunidadUrl = "#",
  badges = ["100% Gratuito", "Comunidad activa"],
}: CTAFinalProps) {
  return (
    <section className="w-full bg-[#0F172A] py-12 md:py-16">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10 flex flex-col items-center text-center">
        {/* Título - Poppins Bold */}
        <h2 className="font-poppins text-[28px] font-bold leading-tight text-white mb-6 md:text-[36px] lg:text-[40px]">
          {titulo}
        </h2>

        {/* Botón CTA */}
        <a
          href={comunidadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl bg-[#3B82F6] px-8 py-4 font-poppins text-[18px] font-semibold !text-white no-underline transition-all hover:bg-[#2563EB] hover:scale-105 hover:no-underline"
          style={{
            boxShadow: "0 10px 40px rgba(59, 130, 246, 0.35)",
          }}
        >
          Únete Gratis a la Comunidad →
        </a>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-[14px] text-[#94A3B8]"
              >
                <Check className="h-4 w-4 text-[#10B981]" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        )}

        {/* Link a Inicia con IA - DENTRO del bloque oscuro */}
        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-2 text-[14px] text-[#64748B] transition-colors hover:text-[#94A3B8]"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Visitar Inicia con IA
        </Link>
      </div>
    </section>
  );
}
