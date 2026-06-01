"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center overflow-hidden"
      style={{
        minHeight: "min(820px, 95vh)",
        background: "var(--navy-deep)",
        padding: "120px 0 80px",
      }}
    >
      {/* Horizontal rule texture — 1px wheat lines every 40px at 5% opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.05,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(233,189,114,0.8) 39px, rgba(233,189,114,0.8) 40px)",
        }}
      />

      {/* Radial glow — wheat */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%", left: "50%",
          width: 900, height: 600,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse, rgba(233,189,114,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-[110px] left-9 w-20 h-20 border-t border-l" style={{ borderColor: "rgba(233,189,114,0.25)" }} />
      <div className="absolute bottom-[50px] right-9 w-20 h-20 border-b border-r" style={{ borderColor: "rgba(233,189,114,0.25)" }} />

      {/* Large decorative R */}
      <div
        className="absolute right-[-3rem] top-1/2 -translate-y-1/2 font-display font-black leading-none pointer-events-none select-none"
        style={{ fontSize: "30vw", color: "rgba(255,255,255,0.025)" }}
      >
        R
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-9 opacity-0 animate-[fadeIn_0.6s_ease_0.4s_forwards]">
          <span className="inline-block w-10 h-px" style={{ background: "var(--wheat)" }} />
          <span className="font-ui text-[11px] tracking-[0.32em] uppercase" style={{ color: "var(--wheat)" }}>
            RMScribe Consulting Ltd
          </span>
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="font-display font-semibold leading-[1.04] max-w-[1100px]"
          style={{
            fontSize: "clamp(2.75rem, 5.5vw + 1rem, 6.5rem)",
            letterSpacing: "-0.01em",
            color: "var(--bg-warm)",
          }}
        >
          We Help You{" "}
          <em className="italic" style={{ color: "var(--terracotta)" }}>Capture</em>
          <br />
          the Heart of Your
          <br />
          Meetings &amp; Events
        </h1>

        {/* Subtext */}
        <p
          className="mt-8 font-body text-lg leading-relaxed max-w-[620px] opacity-0 animate-[fadeUp_0.9s_ease_0.9s_forwards]"
          style={{ color: "rgba(247,246,242,0.6)" }}
        >
          A Nigerian documentation and conference services firm specialising in rapporteurship,
          facilitation, and knowledge management for international organisations and civil society.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap gap-3.5 opacity-0 animate-[fadeUp_0.9s_ease_1.1s_forwards]">
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2.5 px-[22px] py-[13px] font-ui font-semibold text-[13px] tracking-[0.04em] rounded-[4px] transition-all duration-250 group"
            style={{ background: "var(--wheat)", color: "var(--navy-deep)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--wheat-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--wheat)")}
          >
            Our Services
            <span className="group-hover:translate-x-[3px] transition-transform duration-250">→</span>
          </a>
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2.5 px-[22px] py-[13px] font-ui font-semibold text-[13px] tracking-[0.04em] rounded-[4px] transition-all duration-250"
            style={{ color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.25)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--wheat)";
              e.currentTarget.style.color = "var(--navy-deep)";
              e.currentTarget.style.borderColor = "var(--wheat)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "rgba(255,255,255,0.85)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
            }}
          >
            View Our Work
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 pt-10 grid grid-cols-3 gap-8 max-w-[640px] opacity-0 animate-[fadeIn_0.8s_ease_1.4s_forwards]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            { number: "10+", label: "Years Experience" },
            { number: "200+", label: "Attendee Events" },
            { number: "3+", label: "Major Programmes" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <span className="font-display text-[36px] font-bold leading-none" style={{ color: "var(--wheat)" }}>
                {stat.number}
              </span>
              <span className="font-ui text-[11px] tracking-[0.14em] uppercase" style={{ color: "rgba(247,246,242,0.45)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeIn_0.8s_ease_1.8s_forwards]">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(247,246,242,0.3)" }}>
          Scroll
        </span>
        <div
          className="w-px h-12 animate-[float_2s_ease-in-out_infinite]"
          style={{ background: "linear-gradient(to bottom, rgba(233,189,114,0.6), transparent)" }}
        />
      </div>
    </section>
  );
}
