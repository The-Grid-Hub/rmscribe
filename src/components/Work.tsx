"use client";

import { useState } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const galleryPhotos = [
  { src: "/images/eu-sdgn-group.jpg", alt: "EU-SDGN Programme Retreat" },
  { src: "/images/eu-sdgn-podium-1.jpg", alt: "EU-SDGN Programme Retreat" },
  { src: "/images/conference-notes.jpg", alt: "Live documentation at work" },
  { src: "/images/round-table.jpg", alt: "Facilitated roundtable session" },
  { src: "/images/eu-sdgn-room.jpg", alt: "Conference session coverage" },
  { src: "/images/eu-sdgn-podium-2.jpg", alt: "EU-SDGN II Programme Retreat" },
  { src: "/images/rosemary-nameplate.jpg", alt: "Rosemary Alor — Rapporteur" },
];

const works = [
  {
    id: 1,
    category: "Rapporteur Services",
    client: "EU-SDGN",
    title: "EU-SDGN 5-Day Retreat",
    year: "2025 & 2026",
    description:
      "We served as rapporteur service provider for the 5-day EU-SDGN retreat in Lagos — twice. Full coverage of the retreats' proceedings, documenting discussions, activities, and outcomes across all sessions.",
    details:
      "Documented plenary sessions, technical presentations, panel discussions, and breakout groups with neutral reporting. Produced a comprehensive final report capturing contributions from government representatives, CSOs, INGOs, gender groups, election stakeholders, and development partners.",
    highlight: "Highly commended by stakeholders. Report used for future reference and decision-making.",
    tag: "Government & Governance",
    color: "#C65D50",
  },
  {
    id: 2,
    category: "Report Writing",
    client: "Youth Link Forum",
    title: "Youth Link Forum Summit",
    year: "Recent",
    description:
      "Full rapporteur services during their 2-day Youth Link Forum Summit, ensuring every insight and recommendation was captured with precision and professionalism.",
    details:
      "Delivered daily session summaries for participants. Compiled a comprehensive final report documenting key proceedings, insights and recommendations in a clear, professional format.",
    highlight: "Created a lasting resource guiding future youth-focused initiatives.",
    tag: "Civil Society",
    color: "#1E3F63",
  },
  {
    id: 3,
    category: "Content Writing",
    client: "NDLink",
    title: "Niger Delta Conflict Reporting",
    year: "Recent",
    description:
      "Writing and reporting on interviews and seminars on Niger Delta development issues.",
    details:
      "Produced clear reports on conflict sensitivity, conflict actor dynamics, peace actor roles, and strategies for peaceful coexistence in restive areas.",
    highlight: "Contributed to knowledge documentation in one of Nigeria's most complex development contexts.",
    tag: "Development",
    color: "#C99A4D",
  },
  {
    id: 4,
    category: "Scriptwriting",
    client: "Teach the Child",
    title: "From Chalkboard to Creativity",
    year: "Recent",
    description:
      "Professional scriptwriting team for a radio playlet advocating Nigerian curriculum reform and skill acquisition integration.",
    details:
      "Coordinated 20 writers. Edited scripts for clarity and cohesion. Compiled the final production that aired on Nigeriainfo 95.1 FM.",
    highlight: "Highly commended by Teach the Child board. Aired on Nigeriainfo 95.1 FM to a wide national audience.",
    tag: "Education & Media",
    color: "#6B4E9E",
  },
  {
    id: 5,
    category: "Rapporteur Services",
    client: "PIND Foundation",
    title: "Programme Documentation Support",
    year: "Multi-year",
    description:
      "Rapporteur and documentation support for PIND covering programme meetings, community dialogues, and stakeholder sessions.",
    details:
      "Real-time note-taking, meeting summaries, and structured action-point reports. Worked with facilitators ensuring accuracy, clarity, and confidentiality.",
    highlight: "Reports supported decision-making, programme learning and donor communication.",
    tag: "Development & Governance",
    color: "#C65D50",
  },
];

export default function Work() {
  const [expanded, setExpanded] = useState<number | null>(1);
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="relative overflow-hidden" style={{ background: "var(--bg)", padding: "112px 0" }}>
      <div className="gradient-hairline" style={{ opacity: 0.3 }} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12" style={{ paddingTop: 64 }}>
        {/* Header */}
        <div ref={headerRef} className="mb-14 section-reveal">
          <div className="eyebrow">
            <span className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase" style={{ color: "var(--ink-4)" }}>
              Our Portfolio
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="font-display font-semibold leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 2vw + 1rem, 3rem)", color: "var(--ink)" }}
            >
              Some of Our <em className="italic" style={{ color: "var(--terracotta)" }}>Best Work</em>
            </h2>
            <p className="font-body text-[14px] leading-relaxed max-w-[280px]" style={{ color: "var(--ink-3)" }}>
              A selection of projects across documentation, facilitation, and creative writing.
            </p>
          </div>
        </div>

        {/* Work list */}
        <div className="flex flex-col gap-3">
          {works.map((work, i) => (
            <WorkItem
              key={work.id}
              work={work}
              index={i}
              isExpanded={expanded === work.id}
              onToggle={() => setExpanded(expanded === work.id ? null : work.id)}
            />
          ))}
        </div>

        {/* Photo gallery */}
        <div className="mt-20">
          <div className="eyebrow mb-6">
            <span className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase" style={{ color: "var(--ink-4)" }}>
              From the Field
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryPhotos.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] rounded-[4px] overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                  style={{ background: "linear-gradient(to top, rgba(13,13,13,0.7), transparent)" }}
                >
                  <span className="font-ui text-[11px] text-white/80 tracking-[0.08em]">{photo.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkItem({
  work,
  index,
  isExpanded,
  onToggle,
}: {
  work: typeof works[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useReveal<HTMLDivElement>();
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      className="rounded-[4px] overflow-hidden section-reveal"
      style={{
        background: "var(--bg-warm)",
        border: `1px solid ${isExpanded ? "rgba(198,93,80,0.35)" : hov ? "rgba(198,93,80,0.15)" : "rgba(30,63,99,0.08)"}`,
        transitionDelay: `${index * 60}ms`,
        transition: "border 0.35s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-7 text-left"
        style={{ padding: "22px 26px" }}
      >
        <span className="font-mono text-[13px] font-bold shrink-0 w-7 text-right" style={{ color: work.color }}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <div className="flex-1">
            <p className="font-ui text-[10px] tracking-[0.22em] uppercase font-medium mb-1" style={{ color: "var(--ink-4)" }}>
              {work.category}
            </p>
            <h3
              className="font-display text-[20px] font-semibold leading-[1.25] transition-colors duration-250"
              style={{ color: isExpanded || hov ? "var(--terracotta)" : "var(--ink)" }}
            >
              {work.title}
            </h3>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span
              className="hidden md:inline-block px-2.5 py-[5px] rounded-[3px] font-ui text-[10px] font-semibold tracking-[0.04em]"
              style={{ background: `${work.color}22`, color: work.color }}
            >
              {work.tag}
            </span>
            <span className="font-mono text-[12px] min-w-[90px] text-right" style={{ color: "var(--ink-4)" }}>{work.year}</span>
          </div>
        </div>

        <span
          className="shrink-0 text-[18px] transition-all duration-300"
          style={{
            color: isExpanded ? "var(--terracotta)" : "var(--ink-4)",
            display: "inline-block",
            transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          →
        </span>
      </button>

      {/* Expanded content */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: isExpanded ? 600 : 0, opacity: isExpanded ? 1 : 0 }}
      >
        <div
          className="grid md:grid-cols-[1fr,auto] gap-9 items-start"
          style={{ padding: "0 26px 32px 82px" }}
        >
          <div>
            <p className="font-body text-[14.5px] leading-[1.65] mb-3.5" style={{ color: "var(--ink-3)" }}>
              {work.description}
            </p>
            <p className="font-body text-[14px] leading-[1.65] mb-4" style={{ color: "var(--ink-4)" }}>
              {work.details}
            </p>
            <div
              className="rounded-[4px] font-ui text-[13.5px]"
              style={{
                padding: "14px 18px",
                borderLeft: `2px solid ${work.color}`,
                background: `${work.color}10`,
                color: work.color,
              }}
            >
              <span className="font-bold">Outcome: </span>
              <span className="font-medium" style={{ opacity: 0.85 }}>{work.highlight}</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span
              className="font-mono text-[13px] font-semibold px-3 py-[5px] rounded-[3px]"
              style={{ background: `${work.color}22`, color: work.color }}
            >
              {work.client}
            </span>
            <span className="font-ui text-[11px] tracking-[0.04em]" style={{ color: "var(--ink-4)" }}>{work.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
