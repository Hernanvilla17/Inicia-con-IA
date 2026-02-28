"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { SKOOL_URL } from "@/config/skool";

const navLinks = [
  { href: "/guias", label: "Guías" },
  { href: "/metodologia", label: "Metodología Inicia" },
  // { href: "/blog", label: "Blog" },        // temporarily hidden
  // { href: "/nosotros", label: "Nosotros" }, // temporarily hidden
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#09090B]/80 backdrop-blur-xl border-b border-[#27272A]/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-[#FAFAFA]">Inic</span>
              <span className="text-[#3B82F6] group-hover:text-[#60A5FA] transition-colors">IA</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  isActiveLink(link.href)
                    ? "text-[#FAFAFA] bg-[#3B82F6]/15 border border-[#3B82F6]/30"
                    : "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button href={SKOOL_URL} variant="cta" size="sm" target="_blank">
              Únete Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#FAFAFA] p-2 hover:bg-[#27272A]/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-[#27272A]/50">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 font-medium rounded-lg transition-colors duration-200 ${
                      isActiveLink(link.href)
                        ? "text-[#FAFAFA] bg-[#3B82F6]/15 border border-[#3B82F6]/30"
                        : "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Button href={SKOOL_URL} variant="cta" size="md" target="_blank" className="w-full justify-center">
                    Únete Gratis
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
