"use client";

import { useState, useEffect } from "react";

type GalleryItem = {
  src: string;
  kicker: string;
  title: string;
  caption: string;
};

const GALLERY: GalleryItem[] = [
  { src: "/images/prof-jega.png", kicker: "Rapporteurship", title: "Real-time documentation", caption: "Our rapporteurs capture discussions as they happen: accurate, structured notes that become the official record." },
  { src: "/images/eu-sdgn-podium-1.jpg", kicker: "Facilitation", title: "Facilitation & moderation", caption: "We structure agendas, steer panels, and draw out the recommendations that matter most." },
  { src: "/images/rmscribe-pics.jpeg", kicker: "Breakout coverage", title: "Small-group sessions", caption: "Breakouts are where decisions take shape. We sit in, capture the dialogue, and synthesise clear action points." },
  { src: "/images/eu-sdgn-room.jpg", kicker: "Plenary sessions", title: "Full session coverage", caption: "From keynote to technical session, we follow the agenda end to end so nothing of substance is lost." },
  { src: "/images/eu-sdgn-group.jpg", kicker: "Multi-stakeholder", title: "High-level programmes", caption: "Trusted on flagship engagements bringing together government, CSOs, and development partners." },
  { src: "/images/meeting-table.jpg", kicker: "Knowledge management", title: "Donor-ready reports", caption: "We package proceedings into comprehensive reports used for reference, learning, and decision-making." },
];

function LbBtn({ onClick, dir }: { onClick: () => void; dir: "prev" | "next" }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={dir}
      style={{
        width: 48, height: 48, borderRadius: "50%", cursor: "pointer",
        background: hov ? "var(--wheat)" : "rgba(247,246,242,0.08)",
        border: "1px solid rgba(247,246,242,0.2)",
        color: hov ? "var(--navy-deep)" : "var(--bg-warm)",
        fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all .25s",
      }}
    >
      {dir === "prev" ? "←" : "→"}
    </button>
  );
}

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [cols, setCols] = useState(3);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setCols(w < 700 ? 1 : w < 1024 ? 2 : 3);
      setMobile(w < 700);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const close = () => setActive(null);
  const step = (d: number) => setActive((i) => (i == null ? null : (i + d + GALLERY.length) % GALLERY.length));

  useEffect(() => {
    if (active == null) return;
    document.body.classList.add("no-scroll");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.classList.remove("no-scroll"); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section id="gallery" className="sec" style={{ background: "#fff" }}>
      <div className="wrap">
        <div className="reveal">
          <span className="kicker">In the Field</span>
          <h2 className="h-sec" style={{ marginBottom: 18 }}>Our work, in pictures</h2>
          <p className="lede" style={{ maxWidth: 620 }}>
            A look inside the conferences, retreats, and dialogues we document, and the craft that turns a room full of voices into a precise, lasting record.
          </p>
        </div>

        <div
          style={{
            marginTop: cols === 1 ? 32 : 52,
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: mobile ? 14 : 18,
          }}
        >
          {GALLERY.map((g, i) => (
            <div key={g.src} className="reveal" style={{ transitionDelay: `${(i % cols) * 70}ms` }}>
              <button
                className="tile"
                onClick={() => setActive(i)}
                style={{ borderRadius: 4, aspectRatio: "4 / 3.2" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="tile-img" src={g.src} alt={g.title} />
                <span className="tile-cap">
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--wheat)", marginBottom: 7, display: "block" }}>{g.kicker}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600, color: "var(--bg-warm)", lineHeight: 1.25 }}>{g.title}</span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active != null && (
        <div
          onClick={close}
          style={{
            position: "fixed", inset: 0, zIndex: 1100,
            background: "rgba(13,28,46,0.93)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: mobile ? 16 : 40,
            animation: "lb-fade .25s var(--ease-out)",
          }}
        >
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: "absolute", top: 18, right: 18, width: 46, height: 46, borderRadius: "50%",
              background: "rgba(247,246,242,0.1)", border: "1px solid rgba(247,246,242,0.2)",
              color: "var(--bg-warm)", cursor: "pointer", fontSize: 22,
              display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2,
            }}
          >
            ×
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", maxWidth: 980, animation: "lb-pop .3s var(--ease-out)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={GALLERY[active].src}
              alt={GALLERY[active].title}
              style={{
                width: "100%",
                maxHeight: mobile ? "58vh" : "72vh",
                objectFit: "contain",
                borderRadius: 4,
                margin: "0 auto",
              }}
            />
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, marginTop: 20, flexWrap: "wrap" }}>
              <div style={{ maxWidth: 640 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 9 }}>
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--wheat)" }}>{GALLERY[active].kicker}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(247,246,242,0.4)" }}>
                    {String(active + 1).padStart(2, "0")} / {String(GALLERY.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: mobile ? 21 : 25, fontWeight: 600, color: "var(--bg-warm)", margin: "0 0 8px", lineHeight: 1.2 }}>{GALLERY[active].title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(247,246,242,0.72)", lineHeight: 1.6, margin: 0 }}>{GALLERY[active].caption}</p>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <LbBtn onClick={() => step(-1)} dir="prev" />
                <LbBtn onClick={() => step(1)} dir="next" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
