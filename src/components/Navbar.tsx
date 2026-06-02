"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logoImg from "@/app/assets/rmscribe-logo-exact-transparent.png";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Our Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const ids = ["home", "about", "services", "gallery", "projects", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActiveId(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  useEffect(() => {
    if (!narrow) setOpen(false);
  }, [narrow]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 74, behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 100, background: "#fff",
        borderBottom: "1px solid " + (scrolled ? "var(--hairline)" : "rgba(0,0,0,0)"),
        boxShadow: scrolled ? "0 1px 12px rgba(20,48,77,0.06)" : "none",
        transition: "border-color .3s, box-shadow .3s",
      }}
    >
      <div className="wrap" style={{ height: 74, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo + wordmark */}
        <button
          onClick={() => go("home")}
          style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: 0, cursor: "pointer", padding: 0 }}
        >
          <Image src={logoImg} alt="RMScribe Consulting" style={{ height: 46, width: "auto" }} />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1, textAlign: "left" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 21, fontWeight: 700, color: "var(--ink)" }}>RMScribe</span>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 9, fontWeight: 600, letterSpacing: "0.24em", color: "var(--ink-4)", textTransform: "uppercase", marginTop: 4 }}>
              Consulting Limited
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        {!narrow && (
          <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
            <ul style={{ display: "flex", gap: 30, listStyle: "none", margin: 0, padding: 0 }}>
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    style={{
                      fontFamily: "var(--font-ui)", fontSize: 14.5, fontWeight: 500,
                      background: "none", border: 0, cursor: "pointer",
                      color: activeId === l.id ? "var(--terracotta)" : "var(--ink-2)",
                      padding: "8px 0",
                      borderBottom: "2px solid " + (activeId === l.id ? "var(--terracotta)" : "transparent"),
                      transition: "color .2s",
                    }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={() => go("contact")} className="btn btn-navy" style={{ padding: "11px 20px", fontSize: 13.5 }}>
              Get in Touch <span className="ar">→</span>
            </button>
          </nav>
        )}

        {/* Hamburger */}
        {narrow && (
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            style={{ background: "none", border: 0, cursor: "pointer", padding: 8, marginRight: -8, color: "var(--ink)", display: "flex" }}
          >
            {open ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {narrow && (
        <div
          style={{
            position: "fixed", inset: 0, top: 74, zIndex: 99,
            background: "var(--navy-deep)",
            transform: open ? "translateY(0)" : "translateY(-10px)",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            transition: "opacity .3s var(--ease-out), transform .3s var(--ease-out)",
            display: "flex", flexDirection: "column",
            padding: "20px clamp(20px,5vw,56px) 40px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {[{ id: "home", label: "Home" }, ...links].map((l) => (
              <li key={l.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  onClick={() => go(l.id)}
                  style={{
                    width: "100%", textAlign: "left", background: "none", border: 0, cursor: "pointer",
                    fontFamily: "var(--font-display)", fontSize: 25, fontWeight: 600,
                    color: activeId === l.id ? "var(--wheat)" : "var(--bg-warm)",
                    padding: "18px 0",
                  }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 28 }}>
            <button onClick={() => go("contact")} className="btn btn-wheat" style={{ width: "100%", justifyContent: "center" }}>
              Get in Touch <span className="ar">→</span>
            </button>
          </div>
          <div style={{ marginTop: 26, fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(247,246,242,0.55)", lineHeight: 1.8 }}>
            consultingrmscribe@gmail.com<br />+234 806 222 1464
          </div>
        </div>
      )}
    </header>
  );
}
