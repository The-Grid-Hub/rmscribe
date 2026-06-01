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
    <section
      style={{
        background: "var(--bg-warm)",
        padding: "64px 0",
        borderTop: "1px solid rgba(30,63,99,0.06)",
        borderBottom: "1px solid rgba(30,63,99,0.06)",
      }}
    >
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-12 section-reveal">
        <p
          className="font-ui font-semibold uppercase text-center mb-8"
          style={{ fontSize: 10.5, letterSpacing: "0.32em", color: "var(--wheat-dark)" }}
        >
          Organisations That Trust Us
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {brands.map((brand) => (
            <span
              key={brand.name}
              className="font-display font-bold text-[18px] cursor-default transition-all duration-300 whitespace-nowrap"
              style={{ color: "var(--ink)", opacity: 0.55 }}
              title={brand.full}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.color = "var(--terracotta)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.55";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
