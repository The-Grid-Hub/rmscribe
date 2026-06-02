"use client";

const brands = ["EU-SDGN", "PIND Foundation", "Teach the Child", "NDLink", "Youth Link Forum"];

export default function Brands() {
  return (
    <section style={{ background: "var(--bg-warm)", borderBottom: "1px solid var(--hairline)" }}>
      <div
        className="wrap"
        style={{ padding: "40px clamp(20px,5vw,56px)", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}
      >
        <span
          style={{
            fontFamily: "var(--font-ui)", fontSize: 11.5, fontWeight: 600,
            letterSpacing: "0.24em", color: "var(--ink-4)", textTransform: "uppercase", textAlign: "center",
          }}
        >
          Trusted by organisations across government, development &amp; civil society
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "18px 44px" }}>
          {brands.map((b) => (
            <span
              key={b}
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(15px, 1.4vw, 19px)", fontWeight: 700, color: "var(--navy)", opacity: 0.7 }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
