"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

const works = [
  {
    id: 1,
    category: "Rapporteur Services",
    client: "EU-SDGN",
    title: "EU-SDGN 5-Day Retreat",
    year: "2025 & 2026",
    description:
      "We served as the rapporteur service provider for the 5-day EU Support to Democratic Governance in Nigeria (EU-SDGN) retreat in Lagos — twice. Our team provided full coverage of the retreats proceedings, documenting discussions, activities, and outcomes across all sessions.",
    details:
      "Documented plenary sessions, technical presentations, panel discussions, and breakout groups with accurate, neutral reporting. Produced a clear, comprehensive final report capturing contributions from government representatives, CSOs, INGOs, gender groups, election stakeholders, and development partners. The report now informs programme follow-up actions and strategic planning.",
    highlight: "Highly commended by stakeholders. Report used for future reference and decision-making.",
    tag: "Government & Governance",
    color: "#C9952A",
  },
  {
    id: 2,
    category: "Report Writing",
    client: "Youth Link Forum",
    title: "Youth Link Forum Summit",
    year: "Recent",
    description:
      "We provided full rapporteur services during their 2-day Youth Link Forum Summit, ensuring every insight and recommendation was captured with precision and professionalism.",
    details:
      "Delivered daily summaries of each day's sessions, ensuring participants received timely updates on discussions and outcomes. Compiled a comprehensive final report documenting the summit's key proceedings, insights, and recommendations in a clear, professional format.",
    highlight: "Helped the client preserve summit knowledge and created a resource guiding future youth-focused initiatives.",
    tag: "Civil Society",
    color: "#4A5E52",
  },
  {
    id: 3,
    category: "Content Writing",
    client: "NDLink",
    title: "Niger Delta Conflict Reporting",
    year: "Recent",
    description:
      "As a Content Writer for NDLink, our work involved writing and reporting on conducted interviews, as well as documenting key seminars and discussions on Niger Delta development issues.",
    details:
      "Produced clear and insightful reports capturing complex issues including conflict sensitivity, the dynamics of conflict actors, the role of peace actors, and strategies for promoting peaceful coexistence in restive areas.",
    highlight: "Contributed to knowledge documentation in one of Nigeria's most complex development contexts.",
    tag: "Development",
    color: "#A0522D",
  },
  {
    id: 4,
    category: "Scriptwriting",
    client: "Teach the Child",
    title: "From Chalkboard to Creativity",
    year: "Recent",
    description:
      "We served as the professional scriptwriting team for a radio playlet advocating for the evaluation of Nigeria's educational curriculum and the integration of skill acquisition into school learning environments.",
    details:
      "Coordinated and supervised a team of 20 writers. Edited and refined scripts to ensure clarity, creativity, and cohesion. Compiled the final professional script into a compelling production that aired on Nigeriainfo 95.1 FM.",
    highlight: "Highly commended by Teach the Child Project board. Successfully aired on Nigeriainfo 95.1 FM reaching a wide national audience.",
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
      "Provided rapporteur and documentation support for the Foundation for Partnership Initiatives in the Niger Delta (PIND), capturing key discussions from programme meetings, community dialogues, and development-focused stakeholder sessions.",
    details:
      "Real-time note-taking, synthesizing discussions into clear meeting summaries, and producing structured action-point reports for programme teams. Worked closely with facilitators and project leads to ensure accuracy, clarity, and confidentiality while documenting sensitive development issues.",
    highlight: "Reports supported decision-making, programme learning, and donor communication.",
    tag: "Development & Governance",
    color: "#C9952A",
  },
];

export default function Work() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="relative bg-cream py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-gold" />
            <span className="font-mono text-xs tracking-[0.25em] text-gold-muted uppercase">
              Our Portfolio
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight">
              Some of Our <span className="italic text-gradient">Best Work</span>
            </h2>
            <p className="font-body text-ink/60 text-sm max-w-xs leading-relaxed">
              A selection of projects across documentation, facilitation, and creative writing.
            </p>
          </div>
        </div>

        {/* Work list */}
        <div className="space-y-4">
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

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`group rounded-sm border transition-all duration-500 overflow-hidden ${
        isExpanded
          ? "border-gold/30 bg-parchment"
          : "border-gold/10 bg-parchment hover:border-gold/20"
      }`}
    >
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 md:gap-8 p-6 text-left"
      >
        <span
          className="font-mono text-xs font-bold shrink-0 w-6 text-right"
          style={{ color: work.color }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <div className="flex-1">
            <p className="font-mono text-[10px] tracking-widest text-ink/40 uppercase mb-0.5">
              {work.category}
            </p>
            <h3 className="font-display text-lg md:text-xl font-semibold text-ink group-hover:text-gold transition-colors duration-300 leading-tight">
              {work.title}
            </h3>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span
              className="hidden md:inline-block px-3 py-1 rounded-sm text-[10px] font-mono tracking-wide"
              style={{ background: `${work.color}15`, color: work.color }}
            >
              {work.tag}
            </span>
            <span className="font-sans text-xs text-ink/40">{work.year}</span>
          </div>
        </div>

        <FiArrowRight
          size={18}
          className={`shrink-0 text-ink/30 transition-all duration-300 ${
            isExpanded ? "rotate-90 text-gold" : "group-hover:text-gold group-hover:translate-x-1"
          }`}
        />
      </button>

      {/* Expanded content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 md:pl-20 grid md:grid-cols-[1fr,auto] gap-8">
          <div>
            <p className="font-body text-ink/70 text-sm leading-relaxed mb-4">
              {work.description}
            </p>
            <p className="font-body text-ink/60 text-sm leading-relaxed mb-5">
              {work.details}
            </p>
            <div
              className="p-4 rounded-sm border-l-2 text-sm font-sans"
              style={{
                borderColor: work.color,
                background: `${work.color}08`,
                color: work.color,
              }}
            >
              <span className="font-semibold">Outcome: </span>
              <span className="font-normal opacity-80">{work.highlight}</span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div
              className="text-sm font-mono px-3 py-1 rounded-sm"
              style={{ background: `${work.color}15`, color: work.color }}
            >
              {work.client}
            </div>
            <span className="font-sans text-xs text-ink/40 tracking-wide">{work.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
