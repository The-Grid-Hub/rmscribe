"use client";

import { useEffect, useState } from "react";

export default function CTABanner() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 74, behavior: "smooth" });
  };

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-deep)" }}>
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/eu-sdgn-podium-2.jpg"
          alt=""
          aria-hidden="true"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, rgba(13,28,46,0.95) 0%, rgba(13,28,46,0.82) 55%, rgba(13,28,46,0.7) 100%)",
          }}
        />
      </div>

      <div
        className="wrap"
        style={{
          position: "relative",
          paddingTop: "clamp(60px,7vw,96px)",
          paddingBottom: "clamp(60px,7vw,96px)",
        }}
      >
        <div className="reveal" style={{ maxWidth: 640 }}>
          <span className="kicker on-dark">Ready to Work Together?</span>
          <h2
            className="h-sec on-dark"
            style={{ fontSize: "clamp(1.8rem, 2.4vw + 1rem, 3rem)" }}
          >
            Your next event deserves documentation that lasts.
          </h2>
          <p className="lede on-dark" style={{ marginTop: 18, maxWidth: 520 }}>
            Reach out to discuss your conference, retreat, or scriptwriting project. We respond within 24 hours.
          </p>
          <div style={{ marginTop: 30 }}>
            <button
              onClick={scrollToContact}
              className="btn btn-wheat"
              style={mobile ? { width: "100%", justifyContent: "center" } : undefined}
            >
              Start the Conversation <span className="ar">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
