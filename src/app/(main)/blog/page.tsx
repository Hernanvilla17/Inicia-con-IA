"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { blogPosts, blogCategories } from "@/data/blog";

const categoryColors: Record<string, string> = {
  tutoriales: "text-[#60A5FA]",
  noticias: "text-[#F87171]",
  tips: "text-[#34D399]",
  herramientas: "text-[#A78BFA]",
};

const categoryBgColors: Record<string, string> = {
  tutoriales: "bg-[#3B82F6]/20",
  noticias: "bg-[#EF4444]/20",
  tips: "bg-[#10B981]/20",
  herramientas: "bg-[#8B5CF6]/20",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-50px" });

  const filteredPosts = blogPosts.filter(
    (post) => activeCategory === "todos" || post.category === activeCategory
  );

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      {/* Header */}
      <section className="bg-[#09090B] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        {/* Floating orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/4 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/4 w-48 h-48 bg-[#60A5FA]/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-[#27272A] bg-[#18181B]/50 text-[#A1A1AA] px-4 py-2 rounded-full text-xs font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            {blogPosts.length} Artículos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-[#FAFAFA] via-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent">
              Blog
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#A1A1AA] max-w-lg mx-auto"
          >
            Tips, tutoriales y novedades del mundo de la inteligencia artificial
          </motion.p>
        </div>
      </section>

      {/* Categories - Dark theme */}
      <section className="bg-[#09090B] py-6 border-b border-[#27272A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {blogCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-lg shadow-[#3B82F6]/25"
                    : "bg-[#18181B] text-[#A1A1AA] border border-[#27272A] hover:border-[#3B82F6]/50 hover:text-white"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-[#09090B]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="block rounded-2xl border border-[#27272A] bg-[#18181B] overflow-hidden transition-all duration-300 hover:border-[#3B82F6]/50 hover:shadow-2xl hover:shadow-[#3B82F6]/10"
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="aspect-video md:aspect-auto md:h-full bg-[#0F172A] relative overflow-hidden">
                    <div className="absolute inset-0 grid-pattern opacity-30" />
                    <div className={`absolute inset-0 ${categoryBgColors[featuredPost.category]} opacity-50`} />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-24 h-24 rounded-3xl bg-[#27272A]/80 backdrop-blur-sm flex items-center justify-center border border-[#3F3F46]"
                      >
                        <span className="text-5xl">
                          {featuredPost.category === "tutoriales" && "📚"}
                          {featuredPost.category === "noticias" && "📰"}
                          {featuredPost.category === "tips" && "💡"}
                          {featuredPost.category === "herramientas" && "🛠️"}
                        </span>
                      </motion.div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${categoryBgColors[featuredPost.category]} ${categoryColors[featuredPost.category]} backdrop-blur-sm`}>
                        {featuredPost.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/60 to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${categoryColors[featuredPost.category]}`}>
                        Destacado
                      </span>
                      <span className="text-xs text-[#52525B]">•</span>
                      <span className="text-xs text-[#71717A]">
                        {new Date(featuredPost.date).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-[#FAFAFA] mb-4 group-hover:text-[#60A5FA] transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-[#A1A1AA] mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <span className="inline-flex items-center text-sm text-[#3B82F6] font-semibold group-hover:text-[#60A5FA] transition-colors">
                      Leer artículo
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          </div>
        </section>
      )}

      {/* Posts Grid - Dark theme */}
      <section className="py-12 bg-[#09090B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {otherPosts.length > 0 ? (
            <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block h-full rounded-xl border border-[#27272A] bg-[#18181B] overflow-hidden transition-all duration-300 hover:border-[#3B82F6]/50 hover:shadow-xl hover:shadow-[#3B82F6]/10 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="aspect-video bg-[#0F172A] relative overflow-hidden">
                      <div className="absolute inset-0 grid-pattern opacity-20" />
                      <div className={`absolute inset-0 ${categoryBgColors[post.category]} opacity-30 group-hover:opacity-50 transition-opacity`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-2xl bg-[#27272A]/80 backdrop-blur-sm flex items-center justify-center border border-[#3F3F46] group-hover:border-[#3B82F6]/50 transition-colors"
                        >
                          <span className="text-3xl">
                            {post.category === "tutoriales" && "📚"}
                            {post.category === "noticias" && "📰"}
                            {post.category === "tips" && "💡"}
                            {post.category === "herramientas" && "🛠️"}
                          </span>
                        </motion.div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryBgColors[post.category]} ${categoryColors[post.category]}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3 text-xs text-[#71717A]">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(post.date).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                        {post.readingTime && (
                          <>
                            <span className="text-[#3F3F46]">•</span>
                            <span>{post.readingTime}</span>
                          </>
                        )}
                      </div>

                      <h3 className="font-semibold text-[#FAFAFA] mb-2 group-hover:text-[#60A5FA] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-[#71717A] text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>

                      <span className="inline-flex items-center text-sm text-[#3B82F6] font-medium group-hover:text-[#60A5FA] transition-colors">
                        Leer más
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#18181B] border border-[#27272A] flex items-center justify-center mx-auto mb-4">
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
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#FAFAFA] mb-2">
                No hay artículos en esta categoría
              </h3>
              <p className="text-[#71717A] text-sm">
                Prueba seleccionando otra categoría
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA - Premium style */}
      <section className="py-24 bg-[#09090B] relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#60A5FA]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-white via-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent">
                No te pierdas ningún artículo
              </span>
            </h2>

            <p className="text-[#A1A1AA] mb-10">
              Suscríbete y recibe cada nuevo artículo directamente en tu correo
            </p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-1 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-xl opacity-0 group-focus-within:opacity-50 blur transition-opacity duration-300" />
                <input
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="relative w-full px-5 py-4 bg-[#18181B] border border-[#27272A] rounded-xl text-[#FAFAFA] text-sm placeholder-[#71717A] focus:outline-none focus:border-[#3B82F6] transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="group relative px-8 py-4 text-white text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] blur-lg" />
                <span className="relative">Suscribirme</span>
              </button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-xs text-[#52525B]"
            >
              Sin spam. Cancela cuando quieras.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
