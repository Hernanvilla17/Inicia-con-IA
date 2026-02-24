import Link from "next/link";
import { SKOOL_URL } from "@/config/skool";

interface VideoSkoolProps {
  titulo?: string;
  thumbnail?: string;
}

export default function VideoSkool({ titulo, thumbnail }: VideoSkoolProps) {
  return (
    <div className="mb-[60px] w-full">
      <Link
        href={SKOOL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="aspect-video bg-[#0F172A] rounded-xl relative overflow-hidden border border-[#1E293B] hover:border-[#3B82F6]/50 transition-all">
          {/* Thumbnail o patrón de fondo */}
          {thumbnail ? (
            <img
              src={`${thumbnail}?v=${Date.now()}`}
              alt="Miniatura del video"
              className="absolute inset-0 w-full h-full object-cover"
              suppressHydrationWarning
            />
          ) : (
            <div className="absolute inset-0 grid-pattern opacity-30" />
          )}

          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-[#0F172A]/30" />

          {/* Botón de play centrado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Texto inferior */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-center">
            <p className="text-white font-semibold text-base md:text-lg mb-1 drop-shadow-lg">
              {titulo || "Ver el video de esta guía"}
            </p>
            <p className="text-white/80 text-xs md:text-sm flex items-center justify-center gap-2 drop-shadow">
              <span>Accede gratis en la comunidad</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </p>
          </div>

          {/* Badge Skool */}
          <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">
            Skool
          </div>
        </div>
      </Link>
    </div>
  );
}
