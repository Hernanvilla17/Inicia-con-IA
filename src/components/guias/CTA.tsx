import Link from "next/link";

interface CTAProps {
  texto: string;
  subtexto?: string;
  link: string;
}

export default function CTA({ texto, subtexto, link }: CTAProps) {
  return (
    <div className="my-10 p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center">
      {subtexto && (
        <p className="text-sm text-[#64748B] mb-3">{subtexto}</p>
      )}
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-colors"
      >
        {texto}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  );
}
