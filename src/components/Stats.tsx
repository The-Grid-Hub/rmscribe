"use client";

import { useState, useEffect } from "react";
import { useCountUp } from "@/hooks/useReveal";

const STATS = [
  { value: 10, suffix: "+", label: "Years of combined experience" },
  { value: 200, suffix: "+", label: "Attendees per event documented" },
  { value: 5, suffix: "+", label: "Flagship programmes covered" },
  { value: 20, suffix: "+", label: "Writers coordinated on one production" },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [ref, n] = useCountUp(value);
  return (
    <div ref={ref as unknown as React.RefObject<HTMLDivElement>} style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(2.4rem, 3.4vw, 3.4rem)", color: "var(--wheat)", lineHeight: 1,
        }}
      >
        {n}{suffix}
      </div>
      <div
        style={{
          fontFamily: "var(--font-ui)", fontSize: 12.5, fontWeight: 500, letterSpacing: "0.04em",
          color: "rgba(247,246,242,0.6)", marginTop: 12, lineHeight: 1.5,
          maxWidth: 200, marginLeft: "auto", marginRight: "auto",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const [cols, setCols] = useState(2);

  useEffect(() => {
    const check = () => setCols(window.innerWidth >= 700 ? 4 : 2);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{ background: "var(--navy-deep)" }}>
      <div className="wrap" style={{ padding: "clamp(48px,6vw,72px) clamp(20px,5vw,56px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: cols === 2 ? "40px 16px" : 28,
          }}
        >
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
