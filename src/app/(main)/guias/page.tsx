import { getAllGuias } from "@/lib/guias";
import { guides as legacyGuides } from "@/data/guides";
import GuiasClient from "./GuiasClient";

// Combine MDX guides with legacy guides
function getCombinedGuides() {
  const mdxGuias = getAllGuias();

  // Convert MDX guides to the same format as legacy guides
  const mdxGuidesFormatted = mdxGuias.map((guia) => ({
    id: guia.slug,
    title: guia.frontmatter.titulo,
    description: guia.frontmatter.descripcion,
    category: guia.frontmatter.categoria.toLowerCase(),
    readingTime: `${guia.frontmatter.minutosLectura} min`,
    thumbnail: guia.frontmatter.thumbnail,
    isMdx: true,
  }));

  // Legacy guides with flag
  const legacyGuidesFormatted = legacyGuides.map((guide) => ({
    ...guide,
    isMdx: false,
  }));

  // Combine both, MDX guides first
  return [...mdxGuidesFormatted, ...legacyGuidesFormatted];
}

export default function GuidesPage() {
  const allGuides = getCombinedGuides();

  return <GuiasClient guides={allGuides} />;
}
