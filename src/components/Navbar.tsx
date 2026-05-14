"use client";

import { useState, useEffect } from "react";
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
            ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex flex-col leading-none group"
          >
            <span className="font-display text-xl font-bold tracking-tight text-ink group-hover:text-gold transition-colors duration-300">
              RM<span className="text-gradient">Scribe</span>
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-gold-muted uppercase mt-0.5">
              Consulting Ltd
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`font-sans text-sm tracking-wide transition-all duration-300 relative group ${
                    activeSection === link.href.replace("#", "")
                      ? "text-gold"
                      : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-cream font-sans text-sm font-medium rounded-sm hover:bg-gold hover:text-white transition-all duration-300 group"
          >
            Get in Touch
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
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
        className={`fixed inset-0 z-40 bg-cream/98 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.label}
            onClick={() => handleNav(link.href)}
            className="font-display text-3xl font-semibold text-ink hover:text-gold transition-colors duration-300"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {link.label}
          </button>
        ))}
        <div className="gold-line w-24 mt-4" />
        <div className="flex flex-col items-center gap-1 mt-2">
          <span className="font-sans text-xs text-ink/40 tracking-widest uppercase">Contact</span>
          <a href="mailto:consultingrmscribe@gmail.com" className="font-sans text-sm text-gold hover:underline">
            consultingrmscribe@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
