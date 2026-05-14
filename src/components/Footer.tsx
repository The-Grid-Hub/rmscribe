import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display text-lg font-bold text-cream">
            RM<span className="text-gradient">Scribe</span>
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] text-gold-muted uppercase mt-0.5">
            Consulting Ltd
          </span>
        </div>

        {/* Tagline */}
        <p className="font-body italic text-cream/30 text-sm text-center">
          We help you capture the heart of your meetings and events.
        </p>

        {/* Socials + copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/rmscribe-consulting-13031a381"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center text-cream/40 hover:text-white hover:border-gold hover:text-gold transition-all duration-300"
            >
              <FaLinkedinIn size={13} />
            </a>
            <a
              href="https://www.facebook.com/rosepirationwrites"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold transition-all duration-300"
            >
              <FaFacebookF size={13} />
            </a>
            <a
              href="https://wa.me/2348062221464"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold transition-all duration-300"
            >
              <FaWhatsapp size={13} />
            </a>
            <a
              href="mailto:consultingrmscribe@gmail.com"
              aria-label="Email"
              className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold transition-all duration-300"
            >
              <FiMail size={13} />
            </a>
          </div>
          <p className="font-mono text-[10px] text-cream/20 tracking-wider">
            © {year} RMScribe Consulting Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
