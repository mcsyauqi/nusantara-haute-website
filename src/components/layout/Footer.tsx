"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  dining: [
    { href: "/menu", label: "Menu" },
    { href: "/experience", label: "Pengalaman Bersantap" },
    { href: "/chef", label: "Chef Kami" },
    { href: "/private-events", label: "Acara Privat" },
  ],
  visit: [
    { href: "/reservations", label: "Reservasi" },
    { href: "/contact", label: "Kontak" },
    { href: "/gallery", label: "Galeri" },
    { href: "/gift-cards", label: "Kartu Hadiah" },
  ],
  connect: [
    { href: "https://instagram.com", label: "Instagram", external: true },
    { href: "https://facebook.com", label: "Facebook", external: true },
    { href: "https://tripadvisor.com", label: "TripAdvisor", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold-accent/10 relative overflow-hidden">
      {/* Batik Pattern Overlay */}
      <div className="absolute inset-0 batik-pattern opacity-50" />

      <div className="container-custom relative z-10">
        {/* Main Footer */}
        <div className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <div className="flex flex-col items-start">
                <span
                  className="text-gold-accent text-xl tracking-[0.3em]"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  NUSANTARA
                </span>
                <span
                  className="text-cream-white text-xs tracking-[0.5em] -mt-1"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  HAUTE
                </span>
              </div>
            </Link>
            <p
              className="mt-6 text-foreground-muted text-base leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Di mana tradisi bertemu seni kuliner. Perjalanan gastronomi
              melalui jiwa Indonesia.
            </p>
            <div className="mt-6 gold-line" />
          </div>

          {/* Dining Links */}
          <div>
            <h4
              className="text-gold-accent text-xs tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Bersantap
            </h4>
            <ul className="space-y-4">
              {footerLinks.dining.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-white hover:text-gold-accent transition-colors duration-300 text-base"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Links */}
          <div>
            <h4
              className="text-gold-accent text-xs tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Kunjungi
            </h4>
            <ul className="space-y-4">
              {footerLinks.visit.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-white hover:text-gold-accent transition-colors duration-300 text-base"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4
              className="text-gold-accent text-xs tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Hubungi
            </h4>
            <address
              className="not-italic space-y-4 text-cream-white text-base"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              <p>
                Jl. Sudirman No. 123
                <br />
                SCBD, Jakarta Selatan
                <br />
                Indonesia 12190
              </p>
              <p>
                <a
                  href="tel:+62215550123"
                  className="hover:text-gold-accent transition-colors"
                >
                  +62 21 555 0123
                </a>
              </p>
              <p>
                <a
                  href="mailto:reservations@nusantarahaute.com"
                  className="hover:text-gold-accent transition-colors"
                >
                  reservations@nusantarahaute.com
                </a>
              </p>
            </address>

            {/* Social Links */}
            <div className="mt-6 flex gap-6">
              {footerLinks.connect.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-white hover:text-gold-accent transition-colors duration-300 text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="py-8 border-t border-gold-accent/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div
              className="text-foreground-muted text-sm text-center md:text-left"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              <span className="text-gold-accent mr-4">Jam Buka</span>
              Makan Malam: Selasa – Minggu, 18:00 – 23:00 | Makan Siang: Jumat –
              Minggu, 12:00 – 15:00
            </div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link href="/reservations" className="btn-primary text-xs">
                Reservasi Sekarang
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gold-accent/10 flex flex-col md:flex-row justify-between items-center gap-4 text-foreground-muted text-sm">
          <p style={{ fontFamily: "var(--font-cormorant)" }}>
            © {new Date().getFullYear()} Nusantara Haute. Hak cipta dilindungi.
          </p>
          <div
            className="flex gap-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <Link
              href="/privacy"
              className="hover:text-gold-accent transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/terms"
              className="hover:text-gold-accent transition-colors"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>

        {/* Credit */}
        <div className="py-4 border-t border-gold-accent/10 text-center">
          <p
            className="text-foreground-muted text-sm"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Created by{" "}
            <a
              href="https://creativism.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-accent hover:text-gold-light transition-colors"
            >
              Creativism Digital Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
