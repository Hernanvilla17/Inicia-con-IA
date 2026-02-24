"use client";

import Link from "next/link";
import { guides } from "@/data/guides";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKOOL_URL } from "@/config/skool";

const categoryColors: Record<string, string> = {
  chatgpt: "text-blue-400",
  imagen: "text-purple-400",
  productividad: "text-blue-400",
  automatizacion: "text-orange-400",
};

export default function GuidesPreview() {
  const featuredGuides = guides.filter((guide) => guide.featured).slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-[#09090B] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Recursos"
          title="Guías Gratuitas"
          subtitle="Descarga recursos prácticos para dominar cada herramienta de IA"
          light
        />

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {featuredGuides.map((guide) => (
            <div key={guide.id}>
              <Link
                href={`/guias/${guide.id}`}
                className="group block h-full rounded-xl border border-[#27272A] bg-[#18181B]/50 overflow-hidden hover:border-[#3F3F46] transition-colors"
              >
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2 group-hover:text-[#60A5FA] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm mb-4 line-clamp-2">
                    {guide.description}
                  </p>
                  <span className="inline-flex items-center text-sm text-[#71717A] group-hover:text-[#A1A1AA] transition-colors">
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
                        strokeWidth={1.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/guias" variant="outline" size="lg">
            Ver todas las guías
          </Button>
          <Button href={SKOOL_URL} variant="cta" size="lg" target="_blank">
            Obtener Guías en Skool
          </Button>
        </div>
      </div>
    </section>
  );
}
