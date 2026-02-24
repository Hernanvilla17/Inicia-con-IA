"use client";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span
          className={`inline-block text-xs font-medium tracking-wider uppercase mb-4 ${
            light ? "text-[#60A5FA]" : "text-[#3B82F6]"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          light ? "text-[#FAFAFA]" : "text-[#18181B]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-[#A1A1AA]" : "text-[#52525B]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
