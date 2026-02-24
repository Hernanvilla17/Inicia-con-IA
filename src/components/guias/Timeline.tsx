interface TimelineItem {
  titulo: string;
  descripcion: string;
}

interface TimelineProps {
  titulo?: string;
  pasos: TimelineItem[];
}

export function Timeline({ titulo, pasos }: TimelineProps) {
  return (
    <section className="flex w-full flex-col items-center gap-8 bg-white px-6 py-12 md:px-20 lg:px-32 lg:py-16">
      {/* Título de la sección */}
      {titulo && (
        <h2 className="text-center text-[32px] font-bold text-[#0F172A]">
          {titulo}
        </h2>
      )}

      {/* Timeline */}
      <div className="flex w-full max-w-[800px] flex-col">
        {pasos.map((paso, index) => {
          const isLast = index === pasos.length - 1;

          return (
            <div key={index} className="flex w-full gap-6">
              {/* Columna izquierda: círculo + línea */}
              <div className="flex w-14 flex-shrink-0 flex-col items-center gap-2">
                {/* Círculo numerado */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3B82F6]">
                  <span className="text-[20px] font-bold text-white">
                    {index + 1}
                  </span>
                </div>

                {/* Línea conectora */}
                {!isLast && (
                  <div className="w-0.5 flex-1 bg-[#CBD5E1]" />
                )}
              </div>

              {/* Columna derecha: contenido */}
              <div className={`flex flex-1 flex-col gap-4 ${!isLast ? "pb-10" : ""}`}>
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  {paso.titulo}
                </h3>
                <p className="text-base leading-relaxed text-[#334155]">
                  {paso.descripcion}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
