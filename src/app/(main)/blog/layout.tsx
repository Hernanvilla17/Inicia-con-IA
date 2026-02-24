import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips diarios, tutoriales y novedades del mundo de la inteligencia artificial. Nuevo artículo cada día.",
  openGraph: {
    title: "Blog | Inicia con IA",
    description:
      "Tips diarios, tutoriales y novedades del mundo de la inteligencia artificial.",
    images: ["/og-blog.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
