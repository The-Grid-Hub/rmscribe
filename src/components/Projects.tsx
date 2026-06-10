"use client";

import { useState, useEffect } from "react";

const PROJECTS = [
  {
    category: "Rapporteur Services", client: "EU-SDGN", title: "EU-SDGN 5-Day Programme Retreat", year: "2025 & 2026",
    description: "We served as rapporteur service provider for the 5-day EU-SDGN retreat in Lagos, twice, documenting plenary sessions, technical presentations, panel discussions, and breakout groups with neutral, structured reporting.",
    outcome: "Highly commended by stakeholders. Report used for future reference and decision-making.",
  },
  {
    category: "Report Writing", client: "Youth Link Forum", title: "Youth Link Forum Summit", year: "Recent",
    description: "Full rapporteur services during a 2-day summit, delivering daily session summaries and a comprehensive final report of proceedings, insights, and recommendations.",
    outcome: "Created a lasting resource guiding future youth-focused initiatives.",
  },
  {
    category: "Content Writing", client: "NDLink", title: "Niger Delta Conflict Reporting", year: "Recent",
    description: "Writing and reporting on interviews and seminars covering conflict sensitivity, actor dynamics, peace-actor roles, and strategies for peaceful coexistence in restive areas.",
    outcome: "Contributed to knowledge documentation in one of Nigeria's most complex development contexts.",
  },
  {
    category: "Scriptwriting", client: "Teach the Child", title: "From Chalkboard to Creativity", year: "Recent",
    description: "Scriptwriting team for a radio playlet advocating curriculum reform. Coordinated 20 writers, edited for clarity and cohesion, and compiled the final production.",
    outcome: "Highly commended by the board. Aired on Nigeriainfo 95.1 FM to a wide national audience.",
  },
  {
    category: "Rapporteur Services", client: "PIND Foundation", title: "Programme Documentation Support", year: "Multi-year",
    description: "Rapporteur and documentation support across programme meetings, community dialogues, and stakeholder sessions: real-time notes, summaries, and structured action-point reports.",
    outcome: "Reports supported decision-making, programme learning, and donor communication.",
  },
];

export default function Projects() {
  const [open, setOpen] = useState<number | null>(0);
  const [narrow, setNarrow] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => { setNarrow(window.innerWidth < 1024); setMobile(window.innerWidth < 700); };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="projects" className="sec" style={{ background: "var(--bg-warm)" }}>
      <div className="wrap">
        <div className="reveal">
          <span className="kicker">Selected Projects</span>
          <h2 className="h-sec" style={{ marginBottom: 18 }}>A record of trusted work</h2>
          <p className="lede" style={{ maxWidth: 620 }}>
            Engagements across documentation, facilitation, and creative writing, for government programmes, donors, and civil-society partners.
          </p>
        </div>

        <div style={{ marginTop: narrow ? 30 : 48, borderTop: "1px solid var(--hairline)" }}>
          {PROJECTS.map((p, i) => {
            const isOpen = open === i;
            return (
              <div key={p.title} className="reveal" style={{ borderBottom: "1px solid var(--hairline)" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%", background: "none", border: 0, cursor: "pointer", textAlign: "left",
                    padding: mobile ? "22px 0" : "26px 4px",
                    display: "flex", alignItems: "center", gap: mobile ? 14 : 28,
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--terracotta)", marginBottom: 7 }}>
                      {p.category}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)", fontSize: mobile ? 19 : 23, fontWeight: 600,
                        color: isOpen ? "var(--navy)" : "var(--ink)", margin: 0, lineHeight: 1.25, transition: "color .2s",
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  {!narrow && (
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-4)", flex: "0 0 auto", minWidth: 110, textAlign: "right" }}>
                      {p.client} · {p.year}
                    </span>
                  )}
                  <span
                    style={{
                      flex: "0 0 auto", width: 30, height: 30, borderRadius: "50%",
                      border: "1px solid var(--hairline)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: isOpen ? "var(--terracotta)" : "var(--ink-3)",
                      transition: "transform .3s, color .2s",
                      transform: isOpen ? "rotate(45deg)" : "none",
                      fontSize: 18, lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? 420 : 0, opacity: isOpen ? 1 : 0,
                    transition: "max-height .45s var(--ease-out), opacity .3s",
                  }}
                >
                  <div style={{ padding: mobile ? "0 0 24px" : "0 4px 30px", maxWidth: 760 }}>
                    {narrow && (
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--ink-4)", marginBottom: 10 }}>
                        {p.client} · {p.year}
                      </div>
                    )}
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "var(--ink-3)", lineHeight: 1.7, margin: "0 0 16px" }}>
                      {p.description}
                    </p>
                    <div
                      style={{
                        display: "flex", gap: 12, alignItems: "flex-start",
                        padding: "14px 18px", background: "#fff",
                        borderLeft: "3px solid var(--terracotta)", borderRadius: "0 4px 4px 0",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--terracotta)", flex: "0 0 auto", marginTop: 2 }}>
                        Outcome
                      </span>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6 }}>{p.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
