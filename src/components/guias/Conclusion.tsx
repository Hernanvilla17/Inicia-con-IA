import { ReactNode } from "react";
import { Quote } from "lucide-react";

interface ConclusionProps {
  titulo?: string;
  children: ReactNode;
}

export function Conclusion({ titulo = "Conclusión", children }: ConclusionProps) {
  return (
    <section className="w-full py-16 md:py-20 bg-[#F8FAFC]">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10">
        <div
          className="flex w-full flex-col gap-6 bg-[#0F172A] p-8 md:p-12"
          style={{ borderLeft: "5px solid #3B82F6", borderRadius: "16px" }}
        >
          {/* Icono de quote */}
          <Quote className="h-10 w-10 text-[#3B82F6] md:h-12 md:w-12" />

          {/* Título - Poppins Bold, 28px */}
          <h2 className="font-poppins text-[24px] font-bold text-white md:text-[28px]">{titulo}</h2>

          {/* Contenido - Inter, 18px - Estilos para fondo oscuro */}
          <div className="conclusion-content flex flex-col gap-4 font-inter text-[18px] leading-[1.8] text-[#CBD5E1]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
