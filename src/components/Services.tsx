"use client";

import { useState } from "react";

const _s = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const FileTextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" {..._s}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="14" y2="17" />
  </svg>
);
const MicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" {..._s}>
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" />
  </svg>
);
const EditIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" {..._s}>
    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
  </svg>
);
const ListIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" {..._s}>
    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
    <circle cx="4" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="4" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="4" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const SERVICES = [
  {
    title: "Rapporteurship & Documentation", tagline: "Precision in every word", Icon: FileTextIcon,
    items: ["Real-time session documentation", "Plenary, panel & breakout coverage", "Structured summaries & final reports", "Donor-ready report writing & formatting"],
  },
  {
    title: "Facilitation & Moderation", tagline: "Guiding meaningful dialogue", Icon: MicIcon,
    items: ["Conference & workshop facilitation", "Panel moderation & audience engagement", "Agenda structuring & session management", "Synthesis & recommendations capture"],
  },
  {
    title: "Scriptwriting & Content", tagline: "Stories that resonate", Icon: EditIcon,
    items: ["Scriptwriting for radio, film & digital", "Ghostwriting & narrative development", "Editing, proofreading & formatting", "Communication strategy support"],
  },
  {
    title: "Knowledge Management & Support", tagline: "End-to-end documentation", Icon: ListIcon,
    items: ["Audio / video transcription", "Post-event knowledge management", "Stakeholder report packaging", "Programme learning documentation"],
  },
];

function ServiceCard({ Icon, title, tagline, items }: typeof SERVICES[0]) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff", borderRadius: 4, padding: "clamp(26px,3vw,36px)", height: "100%",
        border: "1px solid " + (hov ? "rgba(198,93,80,0.4)" : "var(--hairline)"),
        boxShadow: hov ? "var(--shadow-card)" : "none",
        transform: hov ? "translateY(-3px)" : "none",
        transition: "transform .3s var(--ease-out), box-shadow .3s, border-color .3s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
        <span
          style={{
            width: 52, height: 52, flex: "0 0 52px", borderRadius: 4,
            background: "var(--terracotta-soft)", color: "var(--terracotta)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <Icon />
        </span>
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1vw + 0.8rem, 1.5rem)",
              fontWeight: 700, color: "var(--ink)", margin: 0, lineHeight: 1.2,
            }}
          >
            {title}
          </h3>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, fontWeight: 500, color: "var(--ink-4)", marginTop: 4 }}>{tagline}</div>
        </div>
      </div>
      <div style={{ height: 1, background: "var(--hairline)", margin: "0 0 18px" }} />
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((it) => (
          <li key={it} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 16px", marginTop: 3 }}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "var(--ink-3)", lineHeight: 1.55 }}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="sec" style={{ background: "var(--bg-warm)" }}>
      <div className="wrap">
        <div className="reveal">
          <span className="kicker">What We Do</span>
          <h2 className="h-sec" style={{ marginBottom: 18 }}>Services we offer</h2>
          <p className="lede" style={{ maxWidth: 620 }}>
            Comprehensive documentation and conference support, tailored to the standards international organisations and donors expect.
          </p>
        </div>
        <div
          style={{
            marginTop: 56, display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 440px), 1fr))",
            gap: 20,
          }}
        >
          {SERVICES.map((s, i) => (
            <div key={s.title} className="reveal" style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
