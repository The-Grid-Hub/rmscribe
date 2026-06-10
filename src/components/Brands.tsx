"use client";

import Image from "next/image";

const brands = [
  { name: "EU-SDGN", src: "/logos/download.png", width: 251, height: 201, displayWidth: 88 },
  { name: "PIND Foundation", src: "/logos/PINDFoundation-Logo-Horizontal-Color-1-rlafgs3vbtwa1bgki0svvk1lq13m2a8pu92em4gfk0.png", width: 134, height: 32, displayWidth: 142 },
  { name: "Teach the Child", src: "/logos/TtC-Logo.webp", width: 766, height: 158, displayWidth: 174 },
  { name: "NDLink", src: "/logos/newlogo2-1.png", width: 1600, height: 297, displayWidth: 190 },
  { name: "Youth Link Forum", src: "/logos/Capture.png", width: 588, height: 529, displayWidth: 82 },
  { name: "The Kukah Centre", src: "/logos/tkc-logo-1.png", width: 245, height: 153, displayWidth: 118 },
  { name: "NDI", src: "/logos/ndi-logo.jpeg", width: 384, height: 256, displayWidth: 180 },
];

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
          {brands.map((brand) => (
            <span
              key={brand.name}
              style={{ height: 58, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                style={{ width: brand.displayWidth, height: "auto", maxHeight: 58, objectFit: "contain" }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
