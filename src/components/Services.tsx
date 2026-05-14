"use client";

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
    icon: <FiFileText size={28} />,
    number: "01",
    title: "Rapporteurship & Documentation",
    tagline: "Precision in Every Word",
    items: [
      "Real-time session documentation and note-taking",
      "Plenary, panel, and breakout group coverage",
      "Structured session summaries and final conference reports",
      "Donor-ready report writing and formatting",
    ],
    accent: "#C9952A",
  },
  {
    icon: <FiMic size={28} />,
    number: "02",
    title: "Facilitation & Moderation",
    tagline: "Guiding Meaningful Dialogue",
    items: [
      "Conference and workshop facilitation",
      "Panel moderation and audience engagement",
      "Agenda structuring and session management",
      "Synthesis and recommendations capture",
    ],
    accent: "#4A5E52",
  },
  {
    icon: <FiEdit3 size={28} />,
    number: "03",
    title: "Scriptwriting & Content",
    tagline: "Stories That Resonate",
    items: [
      "Scriptwriting for radio, film, and digital media",
      "Ghostwriting and narrative development",
      "Content editing, proofreading, and formatting",
      "Communication strategy support",
    ],
    accent: "#A0522D",
  },
  {
    icon: <FiList size={28} />,
    number: "04",
    title: "Additional Support Services",
    tagline: "End-to-End Knowledge Management",
    items: [
      "Audio/video transcription",
      "Post-event knowledge management and report dissemination",
      "Stakeholder report packaging",
      "Programme learning documentation",
    ],
    accent: "#5A4A7A",
  },
];

export default function Services() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative bg-parchment py-28 overflow-hidden">
      {/* Top border decoration */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-gold" />
              <span className="font-mono text-xs tracking-[0.25em] text-gold-muted uppercase">
                What We Do
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight">
              Services We <span className="italic text-gradient">Offer</span>
            </h2>
          </div>
          <p className="font-body text-ink/60 text-base max-w-sm leading-relaxed">
            Comprehensive documentation and conference support tailored to your organisation&apos;s needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>

        {/* Why choose us strip */}
        <WhyChooseUs />
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="card-hover group relative bg-cream rounded-sm p-8 border border-gold/10 overflow-hidden"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Accent corner */}
      <div
        className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at top right, ${service.accent}, transparent 70%)` }}
      />

      {/* Number */}
      <div className="flex items-start justify-between mb-6">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-300 group-hover:scale-110"
          style={{ background: `${service.accent}15`, color: service.accent }}
        >
          {service.icon}
        </div>
        <span className="font-mono text-xs text-ink/20 font-bold">{service.number}</span>
      </div>

      <p className="font-mono text-[10px] tracking-[0.2em] text-gold-muted uppercase mb-1">
        {service.tagline}
      </p>
      <h3 className="font-display text-xl font-semibold text-ink mb-5 leading-tight">
        {service.title}
      </h3>

      <ul className="space-y-3">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <FiCheckCircle
              size={14}
              className="mt-0.5 shrink-0 transition-colors duration-300"
              style={{ color: service.accent }}
            />
            <span className="font-body text-sm text-ink/65 leading-relaxed">{item}</span>
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
    "Strong command of Nigerian & international conference protocols",
    "C2-level English across all team members",
    "Handle 200+ attendee events with structured coverage",
    "Strict confidentiality and time-sensitive delivery",
    "In-house coordination between rapporteurs, facilitators, and moderators",
  ];

  return (
    <div ref={ref} className="mt-16 bg-ink rounded-sm p-10 overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{ background: "radial-gradient(ellipse at 20% 50%, #C9952A, transparent 60%)" }}
      />
      <div className="relative">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-10 h-px bg-gold" />
          <span className="font-mono text-xs tracking-[0.25em] text-gold uppercase">
            Why Choose RMScribe
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="flex items-start gap-3 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
              <span className="font-body text-sm text-cream/60 leading-relaxed group-hover:text-cream/90 transition-colors duration-300">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
