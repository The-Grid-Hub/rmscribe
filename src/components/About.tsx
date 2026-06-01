"use client";

import { useState } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { FiAward, FiUsers, FiGlobe, FiShield } from "react-icons/fi";

const pillars = [
  {
    icon: <FiAward size={20} />,
    title: "Proven Excellence",
    desc: "Commended by EU-SDGN, PIND Foundation, and multiple civil society partners.",
  },
  {
    icon: <FiUsers size={20} />,
    title: "Multi-Stakeholder Experience",
    desc: "Handling 200+ attendee events with structured, comprehensive session coverage.",
  },
  {
    icon: <FiGlobe size={20} />,
    title: "International Standards",
    desc: "C2-level English proficiency and command of international conference protocols.",
  },
  {
    icon: <FiShield size={20} />,
    title: "Strict Confidentiality",
    desc: "Time-sensitive delivery with absolute confidentiality as core operating principle.",
  },
];

function PillarCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="rounded-[4px] p-6 section-reveal"
      style={{
        background: "var(--bg-warm)",
        border: "1px solid rgba(30,63,99,0.06)",
        transitionDelay: `${delay}ms`,
        transform: hov ? "translateY(-4px)" : undefined,
        boxShadow: hov ? "0 20px 60px rgba(23,23,23,0.08)" : undefined,
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        className="w-10 h-10 flex items-center justify-center rounded-[4px] mb-4 transition-all duration-300"
        style={{
          background: hov ? "var(--terracotta)" : "rgba(198,93,80,0.12)",
          color: hov ? "#fff" : "var(--terracotta)",
        }}
      >
        {icon}
      </div>
      <h3 className="font-ui text-[13.5px] font-semibold mb-2" style={{ color: "var(--ink)" }}>{title}</h3>
      <p className="font-body text-[13px] leading-relaxed" style={{ color: "var(--ink-3)" }}>{desc}</p>
    </div>
  );
}

export default function About() {
  const sectionRef = useReveal<HTMLDivElement>();
  const cardsRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: "var(--bg)", padding: "112px 0" }}>
      {/* Diagonal hatch texture */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(45deg, #C65D50 0, #C65D50 1px, transparent 0, transparent 18px)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-start section-reveal">
          <div>
            <div className="eyebrow">
              <span className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase" style={{ color: "var(--ink-4)" }}>
                Who We Are
              </span>
            </div>
            <h2
              className="font-display font-semibold leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 2vw + 1rem, 3rem)", color: "var(--ink)" }}
            >
              Documentation That
              <br />
              <em className="italic" style={{ color: "var(--terracotta)" }}>Tells the Story</em>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="font-body text-base leading-relaxed mb-5" style={{ color: "var(--ink-3)" }}>
              RMScribe Consulting Limited is a Nigerian documentation and conference services firm
              specialising in rapporteurship, facilitation, and knowledge management for international
              organisations, donor-funded programmes, and civil society initiatives.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: "var(--ink-3)" }}>
              With a combined team experience of over a decade, we deliver accurate, structured, and
              donor-ready documentation for high-level conferences, policy dialogues, retreats, and
              workshops across Nigeria and beyond.
            </p>
          </div>
        </div>

        {/* Lead consultant callout */}
        <div
          className="mt-16 relative rounded-[4px] overflow-hidden"
          style={{ background: "var(--navy-deep)", padding: "40px 48px" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.5,
              background: "radial-gradient(circle at 85% 50%, rgba(233,189,114,0.12), transparent 60%)",
            }}
          />
          <span
            className="absolute pointer-events-none select-none font-display italic"
            style={{ top: 50, left: 28, fontSize: 130, lineHeight: 0, color: "rgba(255,255,255,.08)" }}
          >
            &ldquo;
          </span>
          <div className="relative grid md:grid-cols-[1fr,auto] gap-8 items-center">
            <div>
              <p
                className="font-display italic font-normal leading-[1.45] mb-5"
                style={{ fontSize: 24, color: "rgba(247,246,242,.92)" }}
              >
                Storytelling is my passion — it&apos;s why I bring the same care to documenting your events
                that I bring to crafting a compelling narrative. Every meeting has a story worth
                capturing precisely.
              </p>
              <div className="flex items-center gap-3">
                <span className="inline-block w-7 h-px" style={{ background: "var(--wheat)" }} />
                <span className="font-ui text-[13px] font-semibold" style={{ color: "var(--wheat)" }}>Rosemary Alor</span>
                <span className="font-body text-[13px]" style={{ color: "rgba(255,255,255,.4)" }}>· Lead Consultant &amp; Founder</span>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end gap-4">
              <div className="relative w-28 h-28 rounded-[4px] overflow-hidden">
                <Image
                  src="/images/rosemary-portrait.jpg"
                  alt="Rosemary Alor, Lead Consultant"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="font-display font-extrabold leading-none" style={{ fontSize: 64, color: "var(--wheat)" }}>10+</span>
                <span className="font-ui text-[10px] tracking-[0.32em] uppercase" style={{ color: "rgba(255,255,255,.45)" }}>Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div ref={cardsRef} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {pillars.map((p, i) => (
            <PillarCard key={p.title} icon={p.icon} title={p.title} desc={p.desc} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
