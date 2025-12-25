"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Pengalaman bersantap yang menakjubkan yang menangkap esensi warisan kuliner Indonesia sambil mendorong batasan dengan teknik modern.",
    author: "Michael Chen",
    title: "Food & Travel Magazine",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Chef Arya telah menciptakan sesuatu yang benar-benar istimewa. Setiap sajian menceritakan kisah, setiap suapan adalah wahyu. Ini adalah masakan Indonesia yang diangkat menjadi seni tinggi.",
    author: "Sarah Williams",
    title: "The Culinary Review",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Sejak Anda melangkah masuk, Anda tahu akan mengalami sesuatu yang luar biasa. Nusantara Haute adalah destinasi, bukan sekadar restoran.",
    author: "James Morrison",
    title: "Luxury Travel Guide",
    rating: 5,
  },
];

const accolades = [
  { name: "Michelin", stars: "One Star", year: "2023" },
  { name: "TripAdvisor", stars: "Travelers' Choice", year: "2024" },
  { name: "Forbes", stars: "Travel Guide", year: "2024" },
  { name: "Asia's 50 Best", stars: "#23", year: "2024" },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-charcoal overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 batik-pattern opacity-40" />

      {/* Decorative Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-20 right-20 hidden lg:block"
      >
        <Quote size={300} className="text-gold-accent" />
      </motion.div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line" />
            <span
              className="text-gold-accent text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Ulasan & Penghargaan
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="section-heading text-cream-white">
            Kata <span className="text-gold-accent italic">Mereka</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Quote Icon */}
              <Quote
                size={48}
                className="text-gold-accent mx-auto mb-8 opacity-60"
              />

              {/* Quote Text */}
              <blockquote
                className="text-cream-white text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="gold-line mb-6" />
                <p
                  className="text-gold-accent text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {testimonials[activeIndex].author}
                </p>
                <p
                  className="text-foreground-muted text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {testimonials[activeIndex].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-gold-accent w-8"
                    : "bg-gold-accent/30 hover:bg-gold-accent/50"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Accolades */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gold-accent/10 pt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {accolades.map((accolade, index) => (
              <motion.div
                key={accolade.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="relative h-16 mb-4 flex items-center justify-center">
                  {/* Placeholder for logo - in production, use actual brand logos */}
                  <div className="w-24 h-12 flex items-center justify-center border border-gold-accent/20 group-hover:border-gold-accent/40 transition-colors">
                    <span
                      className="text-gold-accent text-xs tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {accolade.name}
                    </span>
                  </div>
                </div>
                <p
                  className="text-cream-white text-sm mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {accolade.stars}
                </p>
                <p
                  className="text-foreground-muted text-xs tracking-wider"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {accolade.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
