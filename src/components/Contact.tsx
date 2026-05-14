"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

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
    label: "Address",
    value: "20 Rabiatu Aghedo Street, Ago Palace Way, Okota, Lagos",
    href: "#",
  },
];

const socials = [
  {
    icon: <FaLinkedinIn size={16} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rmscribe-consulting-13031a381",
    color: "#0A66C2",
  },
  {
    icon: <FaFacebookF size={16} />,
    label: "Facebook",
    href: "https://www.facebook.com/rosepirationwrites",
    color: "#1877F2",
  },
  {
    icon: <FaWhatsapp size={16} />,
    label: "WhatsApp",
    href: "https://wa.me/2348062221464",
    color: "#25D366",
  },
];

export default function Contact() {
  const headerRef = useReveal<HTMLDivElement>();
  const [formState, setFormState] = useState({
    name: "", email: "", organisation: "", service: "", message: "",
  });
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
    <section id="contact" className="relative bg-ink py-28 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #C9952A, transparent 70%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px opacity-30" style={{ background: "linear-gradient(90deg, transparent, #C9952A, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-gold" />
            <span className="font-mono text-xs tracking-[0.25em] text-gold uppercase">Get in Touch</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
            Let&apos;s Build Something
            <br />
            <span className="italic text-gradient">Remarkable Together</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-8">
            <p className="font-body text-cream/60 text-base leading-relaxed">
              Whether you need comprehensive conference documentation, expert facilitation, or
              compelling scriptwriting — we&apos;re ready to help you capture what matters most.
            </p>

            {/* Contact items */}
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-sm border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:border-gold transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-cream/30 uppercase mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-sans text-sm text-cream/70 group-hover:text-cream transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-gold/60 uppercase mb-4">
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
                    className="w-10 h-10 rounded-sm border border-cream/10 flex items-center justify-center text-cream/50 hover:text-white hover:border-transparent transition-all duration-300"
                    style={{ ["--hover-bg" as string]: s.color }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = s.color;
                      (e.currentTarget as HTMLElement).style.borderColor = s.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Consultant card */}
            <div className="border border-gold/20 rounded-sm p-5 bg-white/[0.03]">
              <p className="font-mono text-[10px] tracking-widest text-gold/60 uppercase mb-3">Lead Consultant</p>
              <p className="font-display text-lg font-semibold text-cream mb-1">Rosemary Alor</p>
              <p className="font-sans text-xs text-cream/40">Rapporteur · Writer · Documentation Expert</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-cream/[0.04] border border-white/[0.08] rounded-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-5 text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                  <FiSend size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl text-cream">Message Sent!</h3>
                <p className="font-body text-cream/60 text-sm max-w-xs">
                  Thank you for reaching out. Rosemary and the team will be in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-sans text-xs text-gold hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Your Name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <FormField
                  label="Organisation"
                  name="organisation"
                  type="text"
                  placeholder="Your organisation or company"
                  value={formState.organisation}
                  onChange={handleChange}
                />
                <div>
                  <label className="block font-mono text-[10px] tracking-widest text-cream/40 uppercase mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-sm px-4 py-3 font-sans text-sm text-cream/70 focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all duration-300 appearance-none"
                  >
                    <option value="" className="text-ink">Select a service...</option>
                    <option value="Rapporteurship & Documentation" className="text-ink">Rapporteurship &amp; Documentation</option>
                    <option value="Facilitation & Moderation" className="text-ink">Facilitation &amp; Moderation</option>
                    <option value="Scriptwriting" className="text-ink">Scriptwriting &amp; Content</option>
                    <option value="Additional Support" className="text-ink">Additional Support Services</option>
                    <option value="General Inquiry" className="text-ink">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-widest text-cream/40 uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your event, project, or documentation needs..."
                    className="w-full bg-white/[0.05] border border-white/10 rounded-sm px-4 py-3 font-body text-sm text-cream/70 placeholder-cream/20 focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-gold text-ink font-sans font-semibold text-sm tracking-wide rounded-sm hover:bg-gold-light transition-all duration-300 group"
                >
                  Send Message
                  <FiSend
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
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
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] tracking-widest text-cream/40 uppercase mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white/[0.05] border border-white/10 rounded-sm px-4 py-3 font-sans text-sm text-cream/70 placeholder-cream/20 focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all duration-300"
      />
    </div>
  );
}
