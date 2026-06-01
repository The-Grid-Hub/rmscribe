"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import {
  FiFileText,
  FiMic,
  FiEdit3,
  FiList,
  FiCheckCircle,
} from "react-icons/fi";

const services = [
  {
    icon: <FiFileText size={22} />,
    number: "01",
    title: "Rapporteurship & Documentation",
    tagline: "Precision in Every Word",
    items: [
      "Real-time session documentation",
      "Plenary, panel, and breakout coverage",
      "Structured session summaries and final reports",
      "Donor-ready report writing and formatting",
    ],
    accent: "#C65D50",
  },
  {
    icon: <FiMic size={22} />,
    number: "02",
    title: "Facilitation & Moderation",
    tagline: "Guiding Meaningful Dialogue",
    items: [
      "Conference and workshop facilitation",
      "Panel moderation and audience engagement",
      "Agenda structuring and session management",
      "Synthesis and recommendations capture",
    ],
    accent: "#1E3F63",
  },
  {
    icon: <FiEdit3 size={22} />,
    number: "03",
    title: "Scriptwriting & Content",
    tagline: "Stories That Resonate",
    items: [
      "Scriptwriting for radio, film, and digital media",
      "Ghostwriting and narrative development",
      "Content editing, proofreading, and formatting",
      "Communication strategy support",
    ],
    accent: "#C99A4D",
  },
  {
    icon: <FiList size={22} />,
    number: "04",
    title: "Additional Support Services",
    tagline: "End-to-End Knowledge Management",
    items: [
      "Audio/video transcription",
      "Post-event knowledge management",
      "Stakeholder report packaging",
      "Programme learning documentation",
    ],
    accent: "#5A4A7A",
  },
];

export default function Services() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative overflow-hidden" style={{ background: "var(--bg-warm)", padding: "112px 0" }}>
      <div className="gradient-hairline" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12" style={{ paddingTop: 64 }}>
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 section-reveal">
          <div>
            <div className="eyebrow">
              <span className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase" style={{ color: "var(--ink-4)" }}>
                What We Do
              </span>
            </div>
            <h2
              className="font-display font-semibold leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 2vw + 1rem, 3rem)", color: "var(--ink)" }}
            >
              Services We <em className="italic" style={{ color: "var(--terracotta)" }}>Offer</em>
            </h2>
          </div>
          <p className="font-body text-[15px] leading-relaxed max-w-[340px]" style={{ color: "var(--ink-3)" }}>
            Comprehensive documentation and conference support tailored to your organisation&apos;s needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-[18px]">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>

        <WhyChooseUs />
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      className="relative rounded-[4px] overflow-hidden section-reveal"
      style={{
        background: "var(--bg)",
        border: "1px solid rgba(30,63,99,0.08)",
        padding: "32px 32px 28px",
        transitionDelay: `${index * 80}ms`,
        transform: hov ? "translateY(-4px)" : undefined,
        boxShadow: hov
          ? "0 20px 60px rgba(23,23,23,0.08)"
          : "0 1px 2px rgba(23,23,23,0.04), 0 8px 24px rgba(23,23,23,0.06)",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Accent radial */}
      <div
        className="absolute top-0 right-0 w-[120px] h-[120px] pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at top right, ${service.accent}, transparent 70%)`,
          opacity: hov ? 0.18 : 0.10,
        }}
      />

      <div className="flex items-start justify-between mb-6">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-[4px] transition-transform duration-300"
          style={{
            background: `${service.accent}20`,
            color: service.accent,
            transform: hov ? "scale(1.08)" : "scale(1)",
          }}
        >
          {service.icon}
        </div>
        <span className="font-mono text-[12px] font-bold" style={{ color: "var(--ink-5)" }}>{service.number}</span>
      </div>

      <p className="font-ui text-[10px] tracking-[0.22em] uppercase font-semibold mb-1.5" style={{ color: "var(--wheat-dark)" }}>
        {service.tagline}
      </p>
      <h3 className="font-display text-[22px] font-semibold leading-[1.2] mb-[18px]" style={{ color: "var(--ink)" }}>
        {service.title}
      </h3>

      <ul className="space-y-[9px]">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <FiCheckCircle size={14} className="mt-[4px] shrink-0" style={{ color: service.accent }} />
            <span className="font-body text-[14px] leading-[1.55]" style={{ color: "var(--ink-3)" }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhyChooseUs() {
  const ref = useReveal<HTMLDivElement>();

  const reasons = [
    "Proven experience with EU-SDGN (Feb 2025; Jan 2026)",
    "Trained rapporteurs for multi-stakeholder, multi-day events",
    "Strong command of Nigerian & international protocols",
    "C2-level English across all team members",
    "Handle 200+ attendee events with structured coverage",
    "Strict confidentiality and time-sensitive delivery",
    "In-house coordination between rapporteurs and facilitators",
  ];

  return (
    <div
      ref={ref}
      className="mt-16 rounded-[4px] relative overflow-hidden section-reveal"
      style={{ background: "var(--navy-deep)", padding: "40px 44px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.5,
          background: "radial-gradient(ellipse at 15% 50%, rgba(233,189,114,0.15), transparent 60%)",
        }}
      />
      <div className="relative">
        <div className="flex items-center gap-3.5 mb-7">
          <span className="inline-block w-10 h-px" style={{ background: "var(--wheat)" }} />
          <span className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase" style={{ color: "var(--wheat)" }}>
            Why Choose RMScribe
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span
                className="shrink-0 rounded-full mt-2"
                style={{ width: 6, height: 6, background: "var(--wheat)", flex: "0 0 6px" }}
              />
              <span className="font-body text-[13.5px] leading-[1.55]" style={{ color: "rgba(247,246,242,0.65)" }}>
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
