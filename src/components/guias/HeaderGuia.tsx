"use client";

import { Clock, User } from "lucide-react";

interface HeaderGuiaProps {
  categoria: string;
  titulo: string;
  subtitulo?: string;
  minutos: number;
  autor?: string;
}

export function HeaderGuia({
  categoria,
  titulo,
  subtitulo,
  minutos,
  autor = "Inicia con IA",
}: HeaderGuiaProps) {
  return (
    <section className="w-full bg-[#0F172A]">
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center px-5 py-20 sm:px-8 md:py-24 lg:px-10">
        {/* Pill de categoría */}
        <span className="mb-6 rounded-full bg-[#3B82F6] px-5 py-2 text-[13px] font-semibold tracking-wide text-white">
          {categoria}
        </span>

        {/* Título principal - Poppins Bold, centrado */}
        <h1 className="mb-6 text-center font-poppins text-[32px] font-bold leading-[1.2] tracking-tight text-white sm:text-[40px] md:text-[48px] lg:text-[56px]">
          {titulo}
        </h1>

        {/* Subtítulo - Inter, centrado */}
        {subtitulo && (
          <p className="mb-8 max-w-[650px] text-center font-inter text-lg leading-relaxed text-[#94A3B8] md:text-xl">
            {subtitulo}
          </p>
        )}

        {/* Meta: tiempo y autor - centrado */}
        <div className="flex items-center justify-center gap-6 text-[15px] text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <Clock className="h-[18px] w-[18px]" />
            <span>{minutos} min de lectura</span>
          </div>
          <span className="text-[#475569]">•</span>
          <div className="flex items-center gap-2">
            <User className="h-[18px] w-[18px]" />
            <span>{autor}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
