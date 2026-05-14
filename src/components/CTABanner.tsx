"use client";

import { useReveal } from "@/hooks/useReveal";

export default function CTABanner() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-parchment py-20 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative bg-sage rounded-sm p-10 md:p-14 overflow-hidden text-center">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 20px,
                rgba(201,149,42,0.5) 20px,
                rgba(201,149,42,0.5) 21px
              )`,
            }}
          />
          <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold/30" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold/30" />

          <div className="relative">
            <p className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase mb-4">
              Ready to Work Together?
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream leading-tight mb-4">
              Your next event deserves
              <br />
              <span className="italic text-gold-light">documentation that lasts.</span>
            </h2>
            <p className="font-body text-cream/60 text-base max-w-xl mx-auto mb-8">
              From a single workshop to a multi-day international retreat — we bring precision,
              neutrality, and professionalism to every session.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-ink font-sans font-semibold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 group rounded-sm"
            >
              Start the Conversation
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
