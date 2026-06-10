"use client";

import { useEffect, useState } from "react";

const creds = [
  "Commended by EU-SDGN, PIND & civil-society partners",
  "200+ attendee events with structured session coverage",
  "C2-level English and international conference protocols",
  "Strict confidentiality and time-sensitive delivery",
];

export default function About() {
  const [narrow, setNarrow] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setNarrow(window.innerWidth < 1024);
      setMobile(window.innerWidth < 700);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="about" className="sec" style={{ background: "#fff" }}>
      <div className="wrap">
        {/* Intro row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: narrow ? "1fr" : "0.9fr 1.1fr",
            gap: narrow ? 32 : "clamp(40px,5vw,72px)",
            alignItems: "center",
          }}
        >
          {/* Photo */}
          <div className="reveal" style={{ order: narrow ? 1 : 0 }}>
            <div
              style={{
                borderRadius: 4, overflow: "hidden",
                aspectRatio: narrow ? "16 / 11" : "4 / 4.4",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/round-table.jpg"
                alt="RMScribe documenting a breakout session"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="reveal" style={{ order: narrow ? 0 : 1, transitionDelay: "80ms" }}>
            <span className="kicker">Who We Are</span>
            <h2 className="h-sec" style={{ marginBottom: 20 }}>
              Documentation that tells the full story
            </h2>
            <p className="lede" style={{ marginBottom: 14 }}>
              RMScribe Consulting Limited is a Nigerian documentation and conference services firm specialising
              in rapporteurship, facilitation, and knowledge management for international organisations,
              donor-funded programmes, and civil-society initiatives.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--ink-3)", marginTop: 14 }}>
              With combined team experience of over a decade, we deliver accurate, structured, and donor-ready
              documentation for high-level conferences, policy dialogues, retreats, and workshops across Nigeria
              and beyond.
            </p>
            <ul
              style={{
                listStyle: "none", margin: "26px 0 0", padding: 0,
                display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: "12px 24px",
              }}
            >
              {creds.map((c) => (
                <li key={c} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 18px", marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.5 }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Founder quote */}
        <div className="reveal">
          <figure
            style={{
              margin: 0, marginTop: narrow ? 44 : 72,
              background: "var(--bg-warm)", border: "1px solid var(--hairline)", borderRadius: 4,
              display: "grid", gridTemplateColumns: narrow ? "1fr" : "300px 1fr", overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", minHeight: narrow ? 280 : "auto" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/rosemary-portrait.jpg"
                alt="Rosemary Alor, Founder & Lead Consultant"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 22%" }}
              />
            </div>
            <div
              style={{
                padding: mobile ? "30px 26px" : "clamp(36px,4vw,52px)",
                display: "flex", flexDirection: "column", justifyContent: "center",
              }}
            >
              <span style={{ width: 40, height: 3, background: "var(--terracotta)", display: "block", marginBottom: 22 }} />
              <blockquote
                style={{
                  margin: 0, fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 500,
                  fontSize: "clamp(19px, 1.6vw + 0.6rem, 26px)", lineHeight: 1.5, color: "var(--ink)",
                }}
              >
                Storytelling is my passion. Every meeting has a story worth capturing precisely, and I bring the
                same care to documenting your event that I bring to crafting a compelling narrative.
              </blockquote>
              <figcaption style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 700, color: "var(--navy)" }}>Rosemary Alor</span>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--ink-4)" }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-3)" }}>Founder &amp; Lead Consultant</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
