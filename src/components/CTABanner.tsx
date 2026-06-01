"use client";

import { useReveal } from "@/hooks/useReveal";

export default function CTABanner() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section style={{ background: "var(--bg-warm)", padding: "80px 0" }}>
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-12 section-reveal">
        <div
          className="relative rounded-[4px] overflow-hidden text-center"
          style={{ background: "var(--navy)", padding: "56px 64px" }}
        >
          {/* Diagonal hatch */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.07,
              backgroundImage: "repeating-linear-gradient(-45deg, transparent 20px, #E9BD72 20px, #E9BD72 21px)",
            }}
          />
          {/* Corner brackets */}
          <div className="absolute top-3.5 left-3.5 w-6 h-6 border-t border-l" style={{ borderColor: "rgba(233,189,114,0.4)" }} />
          <div className="absolute bottom-3.5 right-3.5 w-6 h-6 border-b border-r" style={{ borderColor: "rgba(233,189,114,0.4)" }} />

          <div className="relative">
            <p className="font-ui text-[11px] font-semibold tracking-[0.32em] uppercase mb-[18px]" style={{ color: "var(--wheat)" }}>
              Ready to Work Together?
            </p>
            <h2
              className="font-display font-semibold leading-[1.15] mb-4"
              style={{ fontSize: "clamp(1.75rem, 2vw + 1rem, 2.5rem)", color: "var(--bg-warm)" }}
            >
              Your next event deserves{" "}
              <em className="italic" style={{ color: "var(--wheat)" }}>documentation that lasts.</em>
            </h2>
            <p
              className="font-body text-base max-w-[540px] mx-auto mb-8 leading-relaxed"
              style={{ color: "rgba(247,246,242,0.6)" }}
            >
              Reach out to discuss your conference, retreat, or scriptwriting project.
              We respond within 24 hours.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5 font-ui font-semibold text-[13px] tracking-[0.04em] rounded-[4px] transition-all duration-250 group"
              style={{ background: "var(--wheat)", color: "var(--navy-deep)", padding: "13px 22px" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--wheat-dark)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--wheat)")}
            >
              Start the Conversation
              <span className="group-hover:translate-x-[3px] transition-transform duration-250">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
