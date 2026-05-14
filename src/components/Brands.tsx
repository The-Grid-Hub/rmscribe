"use client";

import { useReveal } from "@/hooks/useReveal";

const brands = [
  { name: "EU-SDGN", full: "EU Support to Democratic Governance in Nigeria" },
  { name: "PIND Foundation", full: "Foundation for Partnership Initiatives in the Niger Delta" },
  { name: "Teach the Child", full: "Teach the Child NGO" },
  { name: "NDLink", full: "NDLink Organisation" },
  { name: "Youth Link Forum", full: "Youth Link Forum Summit" },
];

export default function Brands() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-parchment py-16 border-y border-gold/10 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="font-mono text-[10px] tracking-[0.3em] text-gold-muted uppercase text-center mb-10">
          Organisations That Trust Us
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-all duration-300"
              title={brand.full}
            >
              <span className="font-display text-base font-bold text-ink group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
                {brand.name}
              </span>
              <span
                className="w-0 group-hover:w-full h-px bg-gold transition-all duration-500"
                style={{ transitionDelay: "0ms" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
