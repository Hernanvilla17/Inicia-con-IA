"use client";

// Placeholder logos - reemplazar con los logos reales después
const tools = [
  { name: "ChatGPT", logo: null },
  { name: "Claude", logo: null },
  { name: "Gemini", logo: null },
  { name: "Perplexity", logo: null },
  { name: "Gamma", logo: null },
  { name: "Midjourney", logo: null },
  { name: "Notion AI", logo: null },
  { name: "Canva AI", logo: null },
];

export default function ToolsLogos() {
  // Duplicate tools for seamless infinite scroll
  const allTools = [...tools, ...tools];

  return (
    <section className="py-12 bg-[#09090B] border-y border-[#27272A]" style={{ display: "none" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[#71717A] text-sm mb-8">
          Aprende a usar estas y muchas más herramientas
        </p>

        {/* Carousel container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#09090B] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#09090B] to-transparent z-10" />

          {/* Scrolling content - moves to the right */}
          <div className="flex gap-12 animate-scroll-right">
            {allTools.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex items-center gap-3 shrink-0"
              >
                {/* Logo placeholder - 40x40px circle */}
                <div className="w-10 h-10 rounded-full bg-[#27272A] border border-[#3F3F46] flex items-center justify-center overflow-hidden">
                  {tool.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <span className="text-[#52525B] text-xs font-medium">
                      {tool.name.charAt(0)}
                    </span>
                  )}
                </div>
                <span className="text-[#A1A1AA] text-base font-medium whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
