"use client";

import Image from "next/image";
import logoImg from "@/app/assets/rmscribe-logo-exact-transparent.png";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "var(--navy-deep)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 0" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logoImg}
            alt="RMScribe Consulting Ltd"
            height={40}
            style={{ width: "auto", filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Tagline */}
        <p className="font-display italic text-[14px] text-center" style={{ color: "rgba(247,246,242,0.4)" }}>
          We help you capture the heart of your meetings and events.
        </p>

        {/* Socials + copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-2.5">
            {[
              { href: "https://www.linkedin.com/in/rmscribe-consulting-13031a381", label: "LinkedIn", icon: <FaLinkedinIn size={13} /> },
              { href: "https://www.facebook.com/rosepirationwrites", label: "Facebook", icon: <FaFacebookF size={13} /> },
              { href: "https://wa.me/2348062221464", label: "WhatsApp", icon: <FaWhatsapp size={13} /> },
              { href: "mailto:consultingrmscribe@gmail.com", label: "Email", icon: <FiMail size={13} /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="w-8 h-8 rounded-[4px] flex items-center justify-center transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--wheat)"; e.currentTarget.style.color = "var(--wheat)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="font-mono text-[10.5px] tracking-[0.06em]" style={{ color: "rgba(247,246,242,0.3)" }}>
            © {year} RMScribe Consulting Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
