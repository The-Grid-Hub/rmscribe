"use client";

import Image from "next/image";
import logoImg from "@/app/assets/rmscribe-logo-exact-transparent.png";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const explore: [string, string][] = [["About", "about"], ["Services", "services"], ["Our Work", "gallery"], ["Projects", "projects"], ["Contact", "contact"]];

const footerSocials = [
  { icon: <FaLinkedinIn size={13} />, label: "LinkedIn", href: "https://www.linkedin.com/in/rmscribe-consulting-13031a381" },
  { icon: <FaFacebookF size={13} />, label: "Facebook", href: "https://www.facebook.com/rosepirationwrites" },
  { icon: <FaWhatsapp size={13} />, label: "WhatsApp", href: "https://wa.me/2348062221464" },
  { icon: <FiMail size={13} />, label: "Email", href: "mailto:consultingrmscribe@gmail.com" },
];
const services = ["Rapporteurship & Documentation", "Facilitation & Moderation", "Scriptwriting & Content", "Knowledge Management"];

const footLink: React.CSSProperties = {
  fontFamily: "var(--font-body)", fontSize: 14.5, color: "rgba(247,246,242,0.6)",
  textDecoration: "none", background: "none", border: 0, cursor: "pointer",
  padding: "6px 0", textAlign: "left", display: "block", transition: "color .2s",
};

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--wheat)", margin: "0 0 14px" }}>{title}</h4>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>{children}</ul>
    </div>
  );
}

export default function Footer() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 74, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--navy-deep)", color: "rgba(247,246,242,0.7)" }}>
      <div className="wrap" style={{ paddingTop: "clamp(48px,6vw,72px)", paddingBottom: 40 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))",
            gap: 40,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <Image src={logoImg} alt="RMScribe" style={{ height: 44, width: "auto", filter: "brightness(0) invert(1)" }} />
              <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, color: "var(--bg-warm)" }}>RMScribe</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 8.5, fontWeight: 600, letterSpacing: "0.24em", color: "var(--wheat)", textTransform: "uppercase", marginTop: 4 }}>Consulting Limited</span>
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.65, color: "rgba(247,246,242,0.55)", maxWidth: 300, margin: 0 }}>
              We help you capture the heart of your meetings and events — precise, donor-ready documentation for conferences across Nigeria and beyond.
            </p>
          </div>

          {/* Explore */}
          <FooterCol title="Explore">
            {explore.map(([label, id]) => (
              <li key={id}>
                <button onClick={() => go(id)} style={footLink}>{label}</button>
              </li>
            ))}
          </FooterCol>

          {/* Services */}
          <FooterCol title="Services">
            {services.map((s) => (
              <li key={s} style={{ ...footLink, cursor: "default", padding: "6px 0" }}>{s}</li>
            ))}
          </FooterCol>

          {/* Contact */}
          <FooterCol title="Contact">
            <li><a href="mailto:consultingrmscribe@gmail.com" style={footLink}>consultingrmscribe@gmail.com</a></li>
            <li><a href="tel:+2348062221464" style={footLink}>+234 806 222 1464</a></li>
            <li style={{ ...footLink, cursor: "default", padding: "6px 0", lineHeight: 1.5 }}>20 Rabiatu Aghedo Street,<br />Ago Palace Way, Okota, Lagos</li>
          </FooterCol>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(247,246,242,0.35)" }}>
            © {new Date().getFullYear()} RMScribe Consulting Ltd. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            {footerSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                style={{
                  width: 32, height: 32, borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.10)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none", color: "rgba(255,255,255,0.4)", transition: "all .2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--wheat)"; e.currentTarget.style.color = "var(--wheat)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 13.5, color: "rgba(247,246,242,0.4)" }}>
            Every meeting has a story worth capturing.
          </span>
        </div>
      </div>
    </footer>
  );
}
