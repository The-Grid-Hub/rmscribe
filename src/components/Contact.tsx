"use client";

import { useState, useEffect } from "react";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const _ci = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const MailIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" {..._ci}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const PhoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" {..._ci}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const PinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" {..._ci}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const SendIcon = ({ big }: { big?: boolean }) => <svg width={big ? 26 : 16} height={big ? 26 : 16} viewBox="0 0 24 24" {..._ci}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>;

const contactItems = [
  { Icon: MailIcon, label: "Email", value: "consultingrmscribe@gmail.com", href: "mailto:consultingrmscribe@gmail.com" },
  { Icon: PhoneIcon, label: "Phone", value: "+234 806 222 1464", href: "tel:+2348062221464" },
  { Icon: PinIcon, label: "Office", value: "20 Rabiatu Aghedo Street, Ago Palace Way, Okota, Lagos", href: undefined },
];

const socials = [
  { icon: <FaLinkedinIn size={16} />, label: "LinkedIn", href: "https://www.linkedin.com/in/rmscribe-consulting-13031a381" },
  { icon: <FaFacebookF size={16} />, label: "Facebook", href: "https://www.facebook.com/rosepirationwrites" },
  { icon: <FaWhatsapp size={18} />, label: "WhatsApp", href: "https://wa.me/2348062221464" },
];

const fieldStyle = (foc: boolean): React.CSSProperties => ({
  fontFamily: "var(--font-body)", fontSize: 15, padding: "12px 14px", borderRadius: 3,
  width: "100%", background: "#fff",
  border: "1px solid " + (foc ? "var(--terracotta)" : "var(--hairline)"),
  color: "var(--ink)", outline: "none", resize: "vertical", transition: "border-color .2s",
});

function LField({ label, rows, type = "text", value, onChange }: {
  label: string; rows?: number; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  const [foc, setFoc] = useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-4)" }}>{label}</span>
      {rows ? (
        <textarea
          rows={rows}
          value={value}
          onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
          onFocus={() => setFoc(true)}
          onBlur={() => setFoc(false)}
          style={fieldStyle(foc)}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
          onFocus={() => setFoc(true)}
          onBlur={() => setFoc(false)}
          style={fieldStyle(foc)}
        />
      )}
    </label>
  );
}

function LSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: string[] }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-4)" }}>{label}</span>
      <select
        value={value}
        onChange={onChange}
        style={{ fontFamily: "var(--font-body)", fontSize: 15, padding: "12px 14px", borderRadius: 3, width: "100%", background: "#fff", border: "1px solid var(--hairline)", color: "var(--ink)", outline: "none" }}
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

export default function Contact() {
  const [narrow, setNarrow] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", service: "Rapporteurship & Documentation", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const check = () => { setNarrow(window.innerWidth < 1024); setMobile(window.innerWidth < 700); };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const on = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name} - ${form.service}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nOrganisation: ${form.org}\nService: ${form.service}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:consultingrmscribe@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="sec" style={{ background: "#fff" }}>
      <div className="wrap">
        <div className="reveal">
          <span className="kicker">Get in Touch</span>
          <h2 className="h-sec" style={{ marginBottom: 18 }}>Let&apos;s build something remarkable</h2>
          <p className="lede" style={{ maxWidth: 620 }}>
            Tell us about an upcoming conference, a documentation project, or simply introduce your organisation. We typically respond within 24 hours.
          </p>
        </div>

        <div
          style={{
            marginTop: narrow ? 36 : 56,
            display: "grid",
            gridTemplateColumns: narrow ? "1fr" : "0.85fr 1.15fr",
            gap: narrow ? 36 : "clamp(40px,5vw,72px)",
            alignItems: "start",
          }}
        >
          {/* Info */}
          <div className="reveal">
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {contactItems.map(({ Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span style={{ width: 44, height: 44, flex: "0 0 44px", borderRadius: 4, border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--terracotta)" }}>
                      <Icon />
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <span style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-4)" }}>{label}</span>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--ink-2)" }}>{value}</span>
                    </span>
                  </>
                );
                return href ? (
                  <a key={label} href={href} style={{ display: "flex", gap: 14, alignItems: "center", textDecoration: "none", borderBottom: 0, padding: "14px 0" }}>{inner}</a>
                ) : (
                  <div key={label} style={{ display: "flex", gap: 14, alignItems: "center", padding: "14px 0" }}>{inner}</div>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 40, height: 40,
                    borderRadius: 4, border: "1px solid var(--hairline)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none", color: "var(--ink-2)", transition: "all .2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--terracotta)"; e.currentTarget.style.color = "var(--terracotta)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--hairline)"; e.currentTarget.style.color = "var(--ink-2)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal" style={{ transitionDelay: "90ms" }}>
            <div style={{ background: "var(--bg-warm)", border: "1px solid var(--hairline)", borderRadius: 4, padding: mobile ? 22 : 36 }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "36px 16px" }}>
                  <div style={{ width: 60, height: 60, margin: "0 auto 18px", borderRadius: "50%", background: "var(--terracotta-soft)", color: "var(--terracotta)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <SendIcon big />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700, color: "var(--ink)", margin: "0 0 8px" }}>Message sent</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--ink-3)", margin: "0 0 16px" }}>Thank you. We&apos;ll be in touch shortly.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", org: "", service: "Rapporteurship & Documentation", message: "" }); }}
                    style={{ background: "none", border: 0, fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--terracotta)", cursor: "pointer", textDecoration: "underline" }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <LField label="Name" value={form.name} onChange={on("name")} />
                    <LField label="Email" type="email" value={form.email} onChange={on("email")} />
                  </div>
                  <div style={{ marginBottom: 16 }}><LField label="Organisation" value={form.org} onChange={on("org")} /></div>
                  <div style={{ marginBottom: 16 }}>
                    <LSelect
                      label="Service of interest"
                      value={form.service}
                      onChange={on("service") as (e: React.ChangeEvent<HTMLSelectElement>) => void}
                      options={["Rapporteurship & Documentation", "Facilitation & Moderation", "Scriptwriting & Content", "Knowledge Management & Support", "General Inquiry"]}
                    />
                  </div>
                  <div style={{ marginBottom: 22 }}>
                    <LField label="Message" rows={5} value={form.message} onChange={on("message")} />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Send Message <SendIcon />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
