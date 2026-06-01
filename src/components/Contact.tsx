"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FiMail size={18} />,
    label: "Email",
    value: "consultingrmscribe@gmail.com",
    href: "mailto:consultingrmscribe@gmail.com",
  },
  {
    icon: <FiPhone size={18} />,
    label: "Phone / WhatsApp",
    value: "+234 806 222 1464",
    href: "tel:+2348062221464",
  },
  {
    icon: <FiMapPin size={18} />,
    label: "Office",
    value: "20 Rabiatu Aghedo Street, Ago Palace Way, Okota, Lagos",
    href: undefined,
  },
];

const socials = [
  { icon: <FaLinkedinIn size={16} />, label: "LinkedIn", href: "https://www.linkedin.com/in/rmscribe-consulting-13031a381", color: "#0A66C2" },
  { icon: <FaFacebookF size={16} />, label: "Facebook", href: "https://www.facebook.com/rosepirationwrites", color: "#1877F2" },
  { icon: <FaWhatsapp size={16} />, label: "WhatsApp", href: "https://wa.me/2348062221464", color: "#25D366" },
];

export default function Contact() {
  const headerRef = useReveal<HTMLDivElement>();
  const [formState, setFormState] = useState({ name: "", email: "", organisation: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${formState.name} - ${formState.service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nOrganisation: ${formState.organisation}\nService: ${formState.service}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:consultingrmscribe@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: "var(--navy-deep)", padding: "112px 0" }}>
      {/* Radial glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(233,189,114,0.10), transparent 60%)" }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-14 section-reveal">
          <div className="flex items-center gap-3.5 mb-[18px]">
            <span className="inline-block w-10 h-px" style={{ background: "var(--wheat)" }} />
            <span className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase" style={{ color: "var(--wheat)" }}>
              Get in Touch
            </span>
          </div>
          <h2
            className="font-display font-semibold leading-[1.1] max-w-[800px]"
            style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3.5rem)", color: "var(--bg-warm)" }}
          >
            Let&apos;s Build Something{" "}
            <em className="italic" style={{ color: "var(--terracotta)" }}>Remarkable</em> Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-16 items-start">
          {/* Contact info */}
          <div>
            <p className="font-body text-base leading-[1.7] mb-8" style={{ color: "rgba(247,246,242,0.6)" }}>
              Reach out about an upcoming conference, a documentation project, or just to introduce your
              organisation. We typically respond within 24 hours.
            </p>

            <div className="flex flex-col gap-[18px] mb-8">
              {contactInfo.map((item) => {
                const inner = (
                  <>
                    <span
                      className="w-10 h-10 flex items-center justify-center rounded-[4px] shrink-0"
                      style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--wheat)" }}
                    >
                      {item.icon}
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="font-ui text-[10px] font-semibold tracking-[0.22em] uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {item.label}
                      </span>
                      <span className="font-body text-[14.5px]" style={{ color: "rgba(247,246,242,0.85)" }}>
                        {item.value}
                      </span>
                    </span>
                  </>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="flex items-center gap-3.5 no-underline">
                    {inner}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-3.5">
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Socials */}
            <div className="mb-8">
              <p className="font-ui text-[10px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                Connect With Us
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-[4px] flex items-center justify-center transition-all duration-300"
                    style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = s.color;
                      e.currentTarget.style.borderColor = s.color;
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Founder card */}
            <div
              className="rounded-[4px] p-5"
              style={{ border: "1px solid rgba(233,189,114,0.18)", background: "rgba(255,255,255,0.03)" }}
            >
              <p className="font-ui text-[10px] font-semibold tracking-[0.22em] uppercase mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                Lead Consultant
              </p>
              <p className="font-display text-[22px] font-semibold" style={{ color: "var(--bg-warm)" }}>Rosemary Alor</p>
              <p className="font-ui text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Founder · Lead Rapporteur</p>
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-[4px]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: 36 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-5 text-center py-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(233,189,114,0.18)", color: "var(--wheat)" }}
                >
                  <FiSend size={24} />
                </div>
                <h3 className="font-display text-2xl font-semibold" style={{ color: "var(--bg-warm)" }}>Message Sent</h3>
                <p className="font-body text-sm max-w-xs" style={{ color: "rgba(247,246,242,0.55)" }}>
                  Thank you — we&apos;ll be in touch shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", organisation: "", service: "", message: "" }); }}
                  className="font-ui text-[12px] underline"
                  style={{ color: "var(--wheat)", background: "none", border: 0, cursor: "pointer" }}
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <FormField label="Name" name="name" type="text" value={formState.name} onChange={handleChange} required />
                  <FormField label="Email" name="email" type="email" value={formState.email} onChange={handleChange} required />
                </div>
                <FormField label="Organisation" name="organisation" type="text" value={formState.organisation} onChange={handleChange} />
                <div>
                  <label className="flex flex-col gap-1.5">
                    <span className="font-ui text-[10px] font-semibold tracking-[0.22em] uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Service
                    </span>
                    <select
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="font-body text-[14px] rounded-[4px] appearance-none outline-none transition-all duration-200"
                      style={{ padding: "12px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(247,246,242,0.85)" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "var(--wheat)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
                    >
                      <option value="" style={{ color: "#171717", background: "#fff" }}>Select a service…</option>
                      <option value="Rapporteurship & Documentation" style={{ color: "#171717", background: "#fff" }}>Rapporteurship &amp; Documentation</option>
                      <option value="Facilitation & Moderation" style={{ color: "#171717", background: "#fff" }}>Facilitation &amp; Moderation</option>
                      <option value="Scriptwriting & Content" style={{ color: "#171717", background: "#fff" }}>Scriptwriting &amp; Content</option>
                      <option value="Additional Support" style={{ color: "#171717", background: "#fff" }}>Additional Support Services</option>
                      <option value="General Inquiry" style={{ color: "#171717", background: "#fff" }}>General Inquiry</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className="flex flex-col gap-1.5">
                    <span className="font-ui text-[10px] font-semibold tracking-[0.22em] uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Message
                    </span>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your event or project…"
                      className="font-body text-[14px] rounded-[4px] outline-none resize-vertical transition-all duration-200"
                      style={{ padding: "12px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(247,246,242,0.85)" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "var(--wheat)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 font-ui font-semibold text-[13.5px] tracking-[0.04em] rounded-[4px] transition-all duration-250"
                  style={{ padding: "14px 22px", background: "var(--wheat)", color: "var(--navy-deep)", border: 0, cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#F2CE93")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--wheat)")}
                >
                  Send Message <FiSend size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label, name, type, value, onChange, required,
}: {
  label: string; name: string; type: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-ui text-[10px] font-semibold tracking-[0.22em] uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="font-body text-[14px] rounded-[4px] outline-none transition-all duration-200"
        style={{ padding: "12px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(247,246,242,0.85)" }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--wheat)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
      />
    </label>
  );
}
