"use client";

import { useReveal } from "@/hooks/useReveal";
import { FiAward, FiUsers, FiGlobe, FiShield } from "react-icons/fi";

const pillars = [
  {
    icon: <FiAward size={20} />,
    title: "Proven Excellence",
    desc: "Commended by EU-SDGN, PIND Foundation, and multiple civil society partners.",
  },
  {
    icon: <FiUsers size={20} />,
    title: "Multi-Stakeholder Experience",
    desc: "Handling 200+ attendee events with structured, comprehensive session coverage.",
  },
  {
    icon: <FiGlobe size={20} />,
    title: "International Standards",
    desc: "C2-level English proficiency and command of international conference protocols.",
  },
  {
    icon: <FiShield size={20} />,
    title: "Strict Confidentiality",
    desc: "Time-sensitive delivery with absolute confidentiality as core operating principles.",
  },
];

export default function About() {
  const sectionRef = useReveal<HTMLElement>();
  const cardsRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-cream py-28 overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #C9952A 0, #C9952A 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-gold" />
              <span className="font-mono text-xs tracking-[0.25em] text-gold-muted uppercase">Who We Are</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight">
              Documentation That
              <br />
              <span className="italic text-gradient">Tells the Story</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="font-body text-ink/70 text-base leading-relaxed mb-6">
              RMScribe Consulting Limited is a Nigerian documentation and conference services firm
              specialising in rapporteurship, facilitation, and knowledge management for international
              organisations, donor-funded programmes, and civil society initiatives.
            </p>
            <p className="font-body text-ink/70 text-base leading-relaxed">
              With a combined team experience of over a decade, we deliver accurate, structured, and
              donor-ready documentation for high-level conferences, policy dialogues, retreats, and
              workshops across Nigeria and beyond.
            </p>
          </div>
        </div>

        {/* Lead consultant callout */}
        <div className="mt-16 relative bg-ink rounded-sm p-8 md:p-10 overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ background: "radial-gradient(circle at 80% 50%, #C9952A, transparent 60%)" }}
          />
          <div className="quote-mark absolute -top-4 left-6">&ldquo;</div>
          <div className="relative grid md:grid-cols-[1fr,auto] gap-6 items-center">
            <div>
              <p className="font-body italic text-cream/80 text-lg leading-relaxed mb-4">
                Storytelling is my passion — it&apos;s why I bring the same care to documenting your events
                that I bring to crafting a compelling narrative. Every meeting has a story worth
                capturing precisely.
              </p>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                <span className="font-sans text-sm text-gold font-medium">Rosemary Alor</span>
                <span className="font-sans text-xs text-cream/30">· Lead Consultant &amp; Founder</span>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end gap-1">
              <span className="font-display text-5xl font-black text-gold leading-none">10+</span>
              <span className="font-mono text-xs tracking-widest text-cream/40 uppercase">Years</span>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div ref={cardsRef} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="card-hover p-6 bg-parchment border border-gold/10 rounded-sm group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gold/10 text-gold rounded-sm mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                {p.icon}
              </div>
              <h3 className="font-sans text-sm font-semibold text-ink mb-2">{p.title}</h3>
              <p className="font-body text-xs text-ink/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
