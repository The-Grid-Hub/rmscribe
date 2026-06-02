"use client";

import { useEffect, useState } from "react";

const COMMENDATIONS = [
  { quote: "Highly commended by stakeholders. The report is used for future reference and decision-making.", source: "EU-SDGN 5-Day Programme Retreat, Lagos" },
  { quote: "Highly commended by the board, and aired on Nigeriainfo 95.1 FM to a wide national audience.", source: "Teach the Child · Radio Production" },
  { quote: "Reports supported decision-making, programme learning, and donor communication.", source: "PIND Foundation · Programme Documentation" },
];

export default function Commendations() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{ background: "var(--navy-deep)" }}>
      <div className="wrap sec">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="kicker on-dark">Commendations</span>
          <h2
            className="h-sec on-dark"
            style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}
          >
            Trusted, and commended
          </h2>
        </div>

        <div
          style={{
            marginTop: mobile ? 32 : 52,
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
            gap: mobile ? 16 : 22,
          }}
        >
          {COMMENDATIONS.map((c, i) => (
            <div key={c.source} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <figure
                style={{
                  margin: 0, height: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 4,
                  padding: mobile ? "28px 24px" : "32px 28px",
                  display: "flex", flexDirection: "column",
                }}
              >
                <svg
                  width="34" height="34" viewBox="0 0 24 24"
                  fill="var(--wheat)"
                  style={{ opacity: 0.85, marginBottom: 16, flexShrink: 0 }}
                >
                  <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 0 1 7.17 9.5V6zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5a1.67 1.67 0 0 1 1.67-1.67V6z" />
                </svg>
                <blockquote
                  style={{
                    margin: 0, fontFamily: "var(--font-display)",
                    fontSize: "clamp(17px, 1.2vw + 0.6rem, 20px)",
                    fontStyle: "italic", fontWeight: 500, lineHeight: 1.5,
                    color: "var(--bg-warm)", flex: 1,
                  }}
                >
                  {c.quote}
                </blockquote>
                <figcaption
                  style={{
                    marginTop: 22, paddingTop: 18,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 600,
                    letterSpacing: "0.02em", color: "var(--wheat)",
                  }}
                >
                  {c.source}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
