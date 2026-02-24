import { ReactNode } from "react";

interface SeccionProps {
  numero: number;
  titulo: string;
  children: ReactNode;
  variante?: "blanco" | "gris";
}

export function Seccion({
  numero,
  titulo,
  children,
  variante,
}: SeccionProps) {
  // Alternar fondos basándose en el número si no se especifica variante
  const isGray = variante === "gris" || (!variante && numero % 2 === 0);
  const bgColor = isGray ? "bg-[#F8FAFC]" : "bg-white";

  return (
    <section className={`w-full py-16 md:py-20 ${bgColor}`}>
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10">
        {/* Header de sección con número */}
        <div className="mb-8 flex items-center gap-5 md:gap-6">
          {/* Círculo numerado - más prominente */}
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#3B82F6] shadow-lg shadow-blue-500/20 md:h-16 md:w-16">
            <span className="font-poppins text-2xl font-bold text-white md:text-3xl">{numero}</span>
          </div>

          {/* Título - Poppins Bold, 28px */}
          <h2 className="font-poppins text-[24px] font-bold leading-tight text-[#0F172A] md:text-[28px]">
            {titulo}
          </h2>
        </div>

        {/* Contenido - Inter Regular, 18px con estilos mejorados */}
        <div className="guia-content prose prose-slate max-w-none
          [&>p]:font-inter [&>p]:text-[18px] [&>p]:leading-[1.8] [&>p]:text-[#475569] [&>p]:mb-6
          [&>p:last-child]:mb-0

          [&_strong]:text-[#0F172A] [&_strong]:font-bold

          [&_ul]:font-inter [&_ul]:text-[18px] [&_ul]:leading-[1.8] [&_ul]:text-[#475569] [&_ul]:mb-6 [&_ul]:pl-0 [&_ul]:ml-0 [&_ul]:list-none
          [&_ul>li]:relative [&_ul>li]:pl-6 [&_ul>li]:mb-3
          [&_ul>li]:before:content-[''] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[11px] [&_ul>li]:before:w-2 [&_ul>li]:before:h-2 [&_ul>li]:before:bg-[#3B82F6] [&_ul>li]:before:rounded-full

          [&_ol]:font-inter [&_ol]:text-[18px] [&_ol]:leading-[1.8] [&_ol]:text-[#475569] [&_ol]:mb-6 [&_ol]:pl-8 [&_ol]:ml-0
          [&_ol>li]:mb-3 [&_ol>li]:pl-2
          [&_ol>li::marker]:text-[#3B82F6] [&_ol>li::marker]:font-semibold

          [&_blockquote]:bg-[#F8FAFC] [&_blockquote]:border-l-4 [&_blockquote]:border-[#3B82F6] [&_blockquote]:pl-6 [&_blockquote]:pr-6 [&_blockquote]:py-4 [&_blockquote]:my-6 [&_blockquote]:rounded-r-lg [&_blockquote]:not-italic
          [&_blockquote>p]:text-[#475569] [&_blockquote>p]:italic [&_blockquote>p]:mb-0

          [&_code]:bg-[#F1F5F9] [&_code]:text-[#0F172A] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[15px] [&_code]:font-mono [&_code]:before:content-none [&_code]:after:content-none

          [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-lg [&_table]:border [&_table]:border-[#E2E8F0]
          [&_thead]:bg-[#F8FAFC]
          [&_th]:text-[#0F172A] [&_th]:font-semibold [&_th]:text-left [&_th]:px-4 [&_th]:py-3 [&_th]:text-[15px]
          [&_td]:px-4 [&_td]:py-3 [&_td]:border-t [&_td]:border-[#E2E8F0] [&_td]:text-[#475569] [&_td]:text-[15px]
        ">
          {children}
        </div>
      </div>
    </section>
  );
}
