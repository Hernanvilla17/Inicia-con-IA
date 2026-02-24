import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iniciaconia.com"),
  title: {
    default: "Inicia con IA - Aprende Inteligencia Artificial desde Cero",
    template: "%s | Inicia con IA",
  },
  description:
    "Aprende a usar ChatGPT, Claude, Gemini y más herramientas de IA para multiplicar tu productividad — sin necesidad de conocimientos técnicos.",
  keywords: [
    "inteligencia artificial",
    "IA",
    "ChatGPT",
    "Claude",
    "Gemini",
    "Midjourney",
    "curso IA",
    "aprender IA",
    "productividad",
    "automatización",
  ],
  authors: [{ name: "Inicia con IA" }],
  creator: "Inicia con IA",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://iniciaconia.com",
    siteName: "Inicia con IA",
    title: "Inicia con IA - Aprende Inteligencia Artificial desde Cero",
    description:
      "Aprende a usar ChatGPT, Claude, Gemini y más herramientas de IA para multiplicar tu productividad.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Inicia con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inicia con IA - Aprende Inteligencia Artificial desde Cero",
    description:
      "Aprende a usar ChatGPT, Claude, Gemini y más herramientas de IA para multiplicar tu productividad.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
