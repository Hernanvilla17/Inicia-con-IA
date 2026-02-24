"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { useState } from "react";

const categoryColors: Record<string, string> = {
  tutoriales: "text-[#60A5FA]",
  noticias: "text-[#F87171]",
  tips: "text-[#34D399]",
  herramientas: "text-[#A78BFA]",
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [copied, setCopied] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#18181B] mb-4">
            Artículo no encontrado
          </h1>
          <p className="text-[#52525B] mb-8">
            El artículo que buscas no existe o fue movido.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center text-[#3B82F6] font-medium hover:text-[#2563EB] transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#09090B] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-[#71717A] hover:text-[#A1A1AA] mb-8 transition-colors text-sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Volver al blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-medium uppercase tracking-wider ${categoryColors[post.category]}`}
              >
                {post.category}
              </span>
              <span className="text-xs text-[#71717A]">
                {new Date(post.date).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              {post.readingTime && (
                <>
                  <span className="text-[#52525B]">·</span>
                  <span className="text-xs text-[#71717A]">
                    {post.readingTime}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm text-[#FAFAFA] font-medium">{post.author.name}</p>
                <p className="text-xs text-[#71717A]">Autor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="aspect-video bg-[#18181B] rounded-xl overflow-hidden border border-[#27272A]"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-[#27272A] flex items-center justify-center">
              <svg
                className="w-8 h-8 text-[#52525B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <article className="py-12 bg-[#FAFAFA]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none
              prose-headings:font-semibold prose-headings:text-[#18181B] prose-headings:tracking-tight
              prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
              prose-p:text-[#52525B] prose-p:leading-relaxed
              prose-a:text-[#3B82F6] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#18181B]
              prose-ul:text-[#52525B] prose-ol:text-[#52525B]
              prose-li:marker:text-[#3B82F6]
              prose-blockquote:border-l-[#3B82F6] prose-blockquote:bg-white prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:border-l-2
              prose-code:text-[#3B82F6] prose-code:bg-white prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-[#18181B] prose-pre:text-[#FAFAFA] prose-pre:rounded-xl"
          >
            {/* Render content as HTML (in production, use MDX or a markdown parser) */}
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("# "))
                      return `<h1>${line.slice(2)}</h1>`;
                    if (line.startsWith("## "))
                      return `<h2>${line.slice(3)}</h2>`;
                    if (line.startsWith("### "))
                      return `<h3>${line.slice(4)}</h3>`;
                    if (line.startsWith("- "))
                      return `<li>${line.slice(2)}</li>`;
                    if (line.startsWith("---")) return "<hr />";
                    if (line.trim() === "") return "";
                    return `<p>${line}</p>`;
                  })
                  .join("\n"),
              }}
            />
          </motion.div>

          {/* Share buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-[#E4E4E7]"
          >
            <p className="text-sm text-[#52525B] font-medium mb-4">
              Compartir artículo
            </p>
            <div className="flex gap-2">
              <button
                onClick={shareOnTwitter}
                className="flex items-center gap-2 px-4 py-2 bg-[#18181B] text-[#FAFAFA] text-sm rounded-lg hover:bg-[#27272A] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </button>
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center gap-2 px-4 py-2 bg-[#18181B] text-[#FAFAFA] text-sm rounded-lg hover:bg-[#27272A] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </button>
              <button
                onClick={copyLink}
                className="flex items-center gap-2 px-4 py-2 border border-[#E4E4E7] text-[#52525B] text-sm rounded-lg hover:bg-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                {copied ? "¡Copiado!" : "Copiar"}
              </button>
            </div>
          </motion.div>

          {/* Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 rounded-xl border border-[#E4E4E7] bg-white"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-xs text-[#3B82F6] font-medium mb-1">
                  Escrito por
                </p>
                <h3 className="text-lg font-semibold text-[#18181B] mb-1">
                  {post.author.name}
                </h3>
                <p className="text-sm text-[#52525B]">{post.author.bio}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-[#E4E4E7]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-[#18181B] mb-8 text-center">
              También te puede interesar
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="block rounded-xl border border-[#E4E4E7] overflow-hidden hover:border-[#D4D4D8] transition-colors"
                  >
                    <div className="aspect-video bg-[#18181B] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-lg bg-[#27272A] flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-[#52525B]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <span
                        className={`text-xs font-medium uppercase tracking-wider ${categoryColors[relatedPost.category]}`}
                      >
                        {relatedPost.category}
                      </span>
                      <h3 className="mt-2 font-medium text-[#18181B] group-hover:text-[#3B82F6] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#09090B] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#FAFAFA] tracking-tight mb-3">
              ¿Te gustó este artículo?
            </h2>
            <p className="text-sm text-[#A1A1AA] mb-8">
              Recibe artículos como este directamente en tu correo
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                required
                className="flex-1 px-4 py-3 bg-[#18181B] border border-[#27272A] rounded-lg text-[#FAFAFA] text-sm placeholder-[#71717A] focus:outline-none focus:border-[#3B82F6] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#3B82F6] text-white text-sm font-medium rounded-lg hover:bg-[#2563EB] transition-colors"
              >
                Suscribirme
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
