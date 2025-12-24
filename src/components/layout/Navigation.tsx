"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/experience", label: "Experience" },
  { href: "/chef", label: "The Chef" },
  { href: "/reservations", label: "Reservations" },
  { href: "/private-events", label: "Private Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/gift-cards", label: "Gift Cards" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass py-4" : "py-6"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center"
            >
              <span
                className="text-gold-accent text-2xl tracking-[0.3em]"
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
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream-white hover:text-gold-accent transition-colors duration-300 text-sm tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Reserve Button (Desktop) */}
          <Link
            href="/reservations"
            className="hidden lg:block btn-primary text-xs"
          >
            Reserve
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 w-10 h-10 flex items-center justify-center lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-4">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="absolute top-0 left-0 w-full h-[1px] bg-gold-accent origin-center"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute top-1/2 left-0 w-full h-[1px] bg-gold-accent -translate-y-1/2"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-accent origin-center"
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-charcoal"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute inset-0 batik-pattern"
            />

            <div className="relative h-full flex flex-col items-center justify-center">
              <nav className="flex flex-col items-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-cream-white hover:text-gold-accent transition-colors duration-300 text-2xl md:text-3xl tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Decorative Element */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-20 w-16 h-[1px] bg-gold-accent"
              />

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-8 text-center"
              >
                <p
                  className="text-foreground-muted text-sm tracking-widest"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  +62 21 555 0123
                </p>
                <p
                  className="text-foreground-muted text-sm tracking-widest mt-1"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  reservations@nusantarahaute.com
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
