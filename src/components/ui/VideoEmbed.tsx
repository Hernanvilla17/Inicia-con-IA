"use client";

import { motion } from "framer-motion";
import Button from "./Button";

interface VideoEmbedProps {
  videoUrl?: string;
  title: string;
}

export default function VideoEmbed({ videoUrl, title }: VideoEmbedProps) {
  if (!videoUrl) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="video-container relative rounded-xl overflow-hidden border border-[#27272A] bg-[#18181B]">
        <div className="aspect-video relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#09090B]/30 via-[#09090B]/50 to-[#09090B]/80">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-center p-6"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(videoUrl, "_blank")}
                className="video-play-button w-20 h-20 rounded-full bg-[#FAFAFA] flex items-center justify-center mb-6 mx-auto shadow-2xl"
              >
                <svg
                  className="w-8 h-8 text-[#09090B] ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>

              <h3 className="text-xl font-semibold text-[#FAFAFA] mb-2">
                Ver video de la guia
              </h3>
              <p className="text-sm text-[#A1A1AA] mb-6 max-w-md">
                Mira el video completo de &quot;{title}&quot; en nuestra comunidad de Skool
              </p>

              <Button
                href={videoUrl}
                variant="cta"
                size="lg"
                target="_blank"
              >
                Ver en Skool
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Button>
            </motion.div>
          </div>

          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
