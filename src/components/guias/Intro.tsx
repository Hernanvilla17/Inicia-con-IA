import { ReactNode } from "react";

interface IntroProps {
  children: ReactNode;
}

export function Intro({ children }: IntroProps) {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[800px]">
          <div className="guia-content prose prose-lg max-w-none text-center
            [&>p]:font-inter [&>p]:text-[20px] [&>p]:leading-[2] [&>p]:text-[#475569] [&>p]:mb-8
            [&>p:last-child]:mb-0
            [&_strong]:text-[#0F172A] [&_strong]:font-bold
          ">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
