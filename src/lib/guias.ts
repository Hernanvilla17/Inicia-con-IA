import fs from "fs";
import path from "path";
import matter from "gray-matter";

const guiasDirectory = path.join(process.cwd(), "content/guias");

export interface GuiaFrontmatter {
  titulo: string;
  descripcion: string;
  categoria: string;
  minutosLectura: number;
  autor: string;
  thumbnail?: string;
}

export interface GuiaData {
  slug: string;
  frontmatter: GuiaFrontmatter;
  content: string;
}

export function getAllGuiaSlugs(): string[] {
  try {
    const files = fs.readdirSync(guiasDirectory);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export function getGuiaBySlug(slug: string): GuiaData | null {
  try {
    const fullPath = path.join(guiasDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as GuiaFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllGuias(): GuiaData[] {
  const slugs = getAllGuiaSlugs();
  return slugs
    .map((slug) => getGuiaBySlug(slug))
    .filter((guia): guia is GuiaData => guia !== null);
}
