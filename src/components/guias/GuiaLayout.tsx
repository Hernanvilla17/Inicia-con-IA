import VideoSkool from "./VideoSkool";

interface GuiaLayoutProps {
  children: React.ReactNode;
  frontmatter: {
    titulo: string;
    descripcion: string;
    categoria: string;
    minutosLectura: number;
    autor: string;
    thumbnail?: string;
  };
}

const categoryColors: Record<string, string> = {
  ChatGPT: "bg-[#3B82F6]",
  Claude: "bg-[#8B5CF6]",
  Imagen: "bg-[#EC4899]",
  Productividad: "bg-[#10B981]",
  Automatizacion: "bg-[#F59E0B]",
};

export default function GuiaLayout({ children, frontmatter }: GuiaLayoutProps) {
  const categoryColor = categoryColors[frontmatter.categoria] || "bg-[#3B82F6]";

  return (
    <div className="min-h-screen bg-white">
      {/* Header de la guía - FULL WIDTH, CENTRADO */}
      <header className="w-full bg-[#0F172A]">
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center px-5 py-20 sm:px-8 md:py-24 lg:px-10">
          {/* Categoría - centrada */}
          <span className={`mb-6 inline-block rounded-full px-5 py-2 text-[13px] font-semibold tracking-wide text-white ${categoryColor}`}>
            {frontmatter.categoria}
          </span>

          {/* Título - Poppins Bold, centrado */}
          <h1 className="mb-6 text-center font-poppins text-[32px] font-bold leading-[1.2] tracking-tight text-white sm:text-[40px] md:text-[48px] lg:text-[56px]">
            {frontmatter.titulo}
          </h1>

          {/* Descripción - Inter, centrada */}
          <p className="mb-8 max-w-[650px] text-center font-inter text-lg leading-relaxed text-[#94A3B8] md:text-xl">
            {frontmatter.descripcion}
          </p>

          {/* Meta info - centrada */}
          <div className="flex items-center justify-center gap-6 text-[15px] text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{frontmatter.minutosLectura} min de lectura</span>
            </div>
            <span className="text-[#475569]">·</span>
            <div className="flex items-center gap-2">
              <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{frontmatter.autor}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido de la guía */}
      <main>
        {/* Video CTA a Skool - 60px de separación del header */}
        <div className="mx-auto w-full max-w-[900px] px-5 pt-[60px] sm:px-8 lg:px-10">
          <VideoSkool thumbnail={frontmatter.thumbnail} />
        </div>

        {/* Article content */}
        <article className="guia-content">
          {children}
        </article>
      </main>
    </div>
  );
}
