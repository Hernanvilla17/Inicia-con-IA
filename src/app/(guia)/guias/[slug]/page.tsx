import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllGuiaSlugs, getGuiaBySlug } from "@/lib/guias";
import { GuiaLayout } from "@/components/guias";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import {
  Video,
  Seccion,
  Prompt,
  Imagen,
  ImagenGrid,
  Alerta,
  CTA,
  Conclusion,
  CTAFinal,
  HeaderGuia,
  Intro,
  Timeline,
  Audio,
  YouTube,
} from "@/components/guias";

const components = {
  Video,
  Seccion,
  Prompt,
  Imagen,
  ImagenGrid,
  Alerta,
  CTA,
  Conclusion,
  CTAFinal,
  HeaderGuia,
  Intro,
  Timeline,
  Audio,
  YouTube,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllGuiaSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guia = getGuiaBySlug(slug);

  if (!guia) {
    return {
      title: "Guía no encontrada",
    };
  }

  return {
    title: guia.frontmatter.titulo,
    description: guia.frontmatter.descripcion,
    openGraph: {
      title: `${guia.frontmatter.titulo} | Inicia con IA`,
      description: guia.frontmatter.descripcion,
      type: "article",
    },
  };
}

export default async function GuiaPage({ params }: PageProps) {
  const { slug } = await params;
  const guia = getGuiaBySlug(slug);

  if (!guia) {
    notFound();
  }

  return (
    <GuiaLayout frontmatter={guia.frontmatter}>
      <MDXRemote
        source={guia.content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, rehypeHighlight],
          },
        }}
      />
    </GuiaLayout>
  );
}
