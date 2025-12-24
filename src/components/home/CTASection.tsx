"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-deep-burgundy overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 batik-pattern opacity-20" />

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-1/2 h-full"
        style={{
          background:
            "radial-gradient(ellipse at left, rgba(212, 175, 55, 0.2) 0%, transparent 70%)",
        }}
      />

      <motion.div style={{ scale, opacity }} className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center gap-8 mb-12"
          >
            <div className="gold-line" />
            <div className="w-2 h-2 bg-gold-accent rotate-45" />
            <div className="gold-line" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-cream-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Begin Your
            <br />
            <span className="text-gold-accent italic">Culinary Journey</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-cream-white/80 text-xl md:text-2xl max-w-2xl mx-auto mb-12"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Reserve your table and experience Indonesian cuisine reimagined for
            the modern palate
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/reservations"
              className="btn-primary bg-gold-accent text-charcoal border-gold-accent hover:bg-transparent hover:text-gold-accent"
            >
              Reserve Your Table
            </Link>
            <Link
              href="/gift-cards"
              className="btn-primary border-cream-white/50 text-cream-white hover:border-gold-accent hover:text-gold-accent"
            >
              Gift an Experience
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 pt-12 border-t border-gold-accent/20"
          >
            <p
              className="text-cream-white/60 text-sm tracking-wider"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              For reservations and inquiries
            </p>
            <a
              href="tel:+62215550123"
              className="text-gold-accent text-2xl hover:text-gold-light transition-colors mt-2 inline-block"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              +62 21 555 0123
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
