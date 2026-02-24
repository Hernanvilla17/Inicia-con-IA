"use client";

import { Copy, Check } from "lucide-react";
import { useState, useRef } from "react";

interface PromptProps {
  titulo: string;
  children: React.ReactNode;
}

export function Prompt({ titulo, children }: PromptProps) {
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    const text = contentRef.current?.innerText || "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-10 md:py-12 bg-white">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10">
        <div
          className="w-full rounded-xl bg-[#1E293B] p-6 md:p-8"
          style={{ borderLeft: "4px solid #3B82F6", borderRadius: "12px" }}
        >
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-poppins text-[20px] font-semibold text-white">{titulo}</h3>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-lg bg-[#334155] px-4 py-2.5 text-sm font-medium text-[#E2E8F0] transition-all hover:bg-[#475569] hover:scale-105"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#10B981]" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          {/* Contenido del prompt */}
          <div
            ref={contentRef}
            className="whitespace-pre-wrap font-mono text-[15px] leading-relaxed text-[#E2E8F0]"
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
