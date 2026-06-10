"use client";

import { useEffect, useState } from "react";

export default function Hero() {
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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 74, behavior: "smooth" });
  };

  return (
    <section id="home" style={{ position: "relative", background: "var(--navy-deep)", overflow: "hidden" }}>
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/eu-sdgn-group.jpg"
          alt="RMScribe team documenting the EU-SDGN programme retreat in Lagos"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 28%" }}
        />
        <div
          style={{
            position: "absolute", inset: 0,
            background: narrow
              ? "linear-gradient(180deg, rgba(13,28,46,0.62) 0%, rgba(13,28,46,0.80) 60%, rgba(13,28,46,0.93) 100%)"
              : "linear-gradient(90deg, rgba(13,28,46,0.94) 0%, rgba(13,28,46,0.78) 42%, rgba(13,28,46,0.45) 100%)",
          }}
        />
      </div>

      <div
        className="wrap"
        style={{
          position: "relative",
          minHeight: mobile ? "84vh" : "min(88vh, 760px)",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          paddingTop: 90, paddingBottom: narrow ? 56 : 76,
        }}
      >
        <div className="reveal" style={{ maxWidth: 760 }}>
          <span className="kicker on-dark">Documentation &amp; Conference Services · Nigeria</span>
          <h1
            style={{
              fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--bg-warm)",
              fontSize: "clamp(2.4rem, 4.4vw + 0.6rem, 4.4rem)",
              lineHeight: 1.07, letterSpacing: "-0.015em", margin: 0,
            }}
          >
            We capture the heart of your meetings and events.
          </h1>
          <p
            style={{
              marginTop: 22, fontFamily: "var(--font-body)",
              fontSize: "clamp(16px, 1vw + 0.6rem, 19px)", lineHeight: 1.65,
              color: "rgba(247,246,242,0.82)", maxWidth: 600,
            }}
          >
            RMScribe Consulting is a Nigerian rapporteurship, facilitation, and knowledge-management firm,
            trusted by international organisations and civil society to turn complex conferences into precise,
            donor-ready records.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("services")}
              className="btn btn-wheat"
              style={mobile ? { width: "100%", justifyContent: "center" } : undefined}
            >
              Explore Our Services <span className="ar">→</span>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn btn-ghost-light"
              style={mobile ? { width: "100%", justifyContent: "center" } : undefined}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
