import { Image as ImageIcon } from "lucide-react";

interface ImagenProps {
  src?: string;
  alt: string;
  caption?: string;
  /** Si es true, no agrega el contenedor de sección con padding */
  inline?: boolean;
}

export function Imagen({ src, alt, caption, inline = false }: ImagenProps) {
  const content = (
    <figure className="my-8 flex w-full flex-col items-center gap-4">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full max-w-full rounded-xl object-cover"
          style={{
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
            border: "1px solid #E2E8F0",
            borderRadius: "12px",
          }}
        />
      ) : (
        /* Placeholder cuando no hay imagen */
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC]">
          <ImageIcon className="h-12 w-12 text-[#94A3B8]" />
          <p className="text-center font-inter text-sm text-[#64748B]">{alt}</p>
        </div>
      )}

      {/* Caption - centrado, gris */}
      {caption && (
        <figcaption className="text-center font-inter text-[14px] text-[#64748B]">
          {caption}
        </figcaption>
      )}
    </figure>
  );

  // Si es inline, solo retorna el contenido sin wrapper de sección
  if (inline) {
    return content;
  }

  // Por defecto, envuelve en sección con contenedor
  return (
    <div className="w-full py-4">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10">
        {content}
      </div>
    </div>
  );
}
