"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logoImg from "@/app/assets/rmscribe-logo-exact-transparent.png";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-navy/[0.08]"
            : "bg-transparent"
        }`}
        style={scrolled ? { background: "rgba(247,246,242,0.95)", backdropFilter: "blur(12px)" } : undefined}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[84px]">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center"
          >
            <Image
              src={logoImg}
              alt="RMScribe Consulting Ltd"
              height={44}
              style={{
                width: "auto",
                filter: scrolled ? "none" : "brightness(0) invert(1)",
                transition: "filter 0.5s ease",
              }}
              priority
            />
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = activeSection === link.href.replace("#", "");
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-ui text-sm font-medium transition-colors duration-250 relative"
                    style={{
                      color: active ? "var(--terracotta)" : "var(--ink-3)",
                      borderBottom: active ? "1px solid var(--terracotta)" : "1px solid transparent",
                      paddingBottom: "6px",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="hidden md:inline-flex items-center gap-2.5 px-[22px] py-[13px] font-ui text-[13px] font-semibold tracking-[0.04em] rounded-[4px] text-white transition-all duration-250 group"
            style={{ background: "var(--navy)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--terracotta)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--navy)")}
          >
            Get in Touch
            <span className="group-hover:translate-x-[3px] transition-transform duration-250">→</span>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-ink p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(247,246,242,0.98)", backdropFilter: "blur(16px)" }}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.label}
            onClick={() => handleNav(link.href)}
            className="font-display text-3xl font-semibold text-ink hover:text-terracotta transition-colors duration-300"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {link.label}
          </button>
        ))}
        <div className="gradient-hairline w-24 mt-4" />
        <div className="flex flex-col items-center gap-1 mt-2">
          <span className="font-ui text-xs text-ink-4 tracking-[0.28em] uppercase">Contact</span>
          <a href="mailto:consultingrmscribe@gmail.com" className="font-body text-sm text-terracotta hover:underline">
            consultingrmscribe@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
