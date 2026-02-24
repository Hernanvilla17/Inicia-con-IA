import { ReactNode } from "react";

interface ImagenGridProps {
  /** Número de columnas: 2, 3 o 4 */
  columnas?: 2 | 3 | 4;
  children: ReactNode;
  /** Si es true, no agrega el contenedor de sección con padding */
  inline?: boolean;
}

export function ImagenGrid({ columnas = 2, children, inline = false }: ImagenGridProps) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4",
  };

  const content = (
    <div className={`my-8 grid gap-6 ${gridCols[columnas]} [&>figure]:my-0`}>
      {children}
    </div>
  );

  // Si es inline, solo retorna el contenido sin wrapper
  if (inline) {
    return content;
  }

  // Por defecto, envuelve en contenedor
  return (
    <div className="w-full py-4">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10">
        {content}
      </div>
    </div>
  );
}
