"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKOOL_URL } from "@/config/skool";

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Blog"
          title="Últimos Artículos"
          subtitle="Tips, tutoriales y novedades — nuevo artículo cada tercer día"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, ease: "easeOut" }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full"
              >
                {/* Date */}
                <p className="text-xs text-[#71717A] mb-3">
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#18181B] mb-2 group-hover:text-[#3B82F6] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#52525B] text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center text-sm text-[#3B82F6] font-medium group-hover:text-[#2563EB] transition-colors">
                  Leer artículo
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button href="/blog" variant="secondary" size="lg">
            Ver todos los artículos
          </Button>
          <p className="text-[#52525B] text-sm mt-6 mb-3">
            O únete para contenido exclusivo
          </p>
          <Button href={SKOOL_URL} variant="cta" target="_blank">
            Unirme a Skool
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
