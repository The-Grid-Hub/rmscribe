"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 39px,
            rgba(201,149,42,0.8) 39px,
            rgba(201,149,42,0.8) 40px
          )`,
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(ellipse, #C9952A 0%, transparent 70%)",
        }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-8 w-24 h-24 border-t border-l border-gold/20" />
      <div className="absolute bottom-24 right-8 w-24 h-24 border-b border-r border-gold/20" />

      {/* Large decorative R */}
      <div className="absolute right-[-2rem] top-1/2 -translate-y-1/2 font-display text-[30vw] font-black text-white/[0.025] leading-none pointer-events-none select-none">
        R
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 flex flex-col justify-center">
        {/* Tag line */}
        <div className="flex items-center gap-4 mb-10 opacity-0 animate-[fadeIn_0.6s_ease_0.4s_forwards]">
          <span className="inline-block w-10 h-px bg-gold" />
          <span className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
            RMScribe Consulting Ltd
          </span>
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-cream leading-[1.05] max-w-5xl"
        >
          We Help You{" "}
          <span className="italic text-gradient">Capture</span>
          <br />
          the Heart of Your
          <br />
          <span className="relative inline-block">
            Meetings &amp; Events
            <span
              className="absolute -bottom-2 left-0 right-0 h-px opacity-40"
              style={{
                background: "linear-gradient(90deg, transparent, #C9952A, transparent)",
              }}
            />
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="mt-8 font-body text-cream/60 text-lg md:text-xl max-w-2xl leading-relaxed opacity-0 animate-[fadeUp_0.8s_ease_0.9s_forwards]"
        >
          A Nigerian documentation &amp; conference services firm specialising in rapporteurship,
          facilitation, and knowledge management for international organisations and civil society.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap gap-4 opacity-0 animate-[fadeUp_0.8s_ease_1.1s_forwards]">
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-ink font-sans font-semibold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 group rounded-sm"
          >
            Our Services
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-3 px-8 py-4 border border-cream/20 text-cream font-sans font-medium text-sm tracking-wide hover:border-gold hover:text-gold transition-all duration-300 rounded-sm"
          >
            View Our Work
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-3 gap-8 max-w-xl opacity-0 animate-[fadeIn_0.8s_ease_1.4s_forwards]">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "200+", label: "Attendee Events" },
            { number: "3+", label: "Major Programmes" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-3xl font-bold text-gold">{stat.number}</span>
              <span className="font-sans text-xs text-cream/40 mt-1 tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeIn_0.8s_ease_1.8s_forwards]">
        <span className="font-mono text-[10px] tracking-[0.2em] text-cream/30 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-[float_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
