"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const images = {
  main: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=1000&fit=crop",
  spices: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
  chefSmall: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=128&h=128&fit=crop",
};

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const decorY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-charcoal overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 batik-pattern opacity-30" />

      {/* Decorative Corner Elements */}
      <motion.div
        style={{ y: decorY }}
        className="absolute top-20 left-10 w-32 h-32 border border-gold-accent/10 hidden lg:block"
      />
      <motion.div
        style={{ y: decorY }}
        className="absolute bottom-20 right-10 w-32 h-32 border border-gold-accent/10 hidden lg:block"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="gold-line" />
              <span
                className="text-gold-accent text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Our Philosophy
              </span>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p
                className="text-cream-white text-3xl md:text-4xl lg:text-5xl leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;We honor the{" "}
                <span className="text-gold-accent italic">17,000 islands</span>{" "}
                of Indonesia through every dish&rdquo;
              </p>
            </motion.blockquote>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 text-foreground-muted text-lg leading-relaxed max-w-lg"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Each dish tells a story of generations, reimagined for the modern
              palate. From the volcanic soils of Java to the pristine waters of
              Raja Ampat, we source the finest ingredients to create an
              unforgettable culinary journey.
            </motion.p>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border border-gold-accent/30">
                <Image
                  src={images.chefSmall}
                  alt="Chef Arya Wijaya"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p
                  className="text-cream-white text-lg"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Chef Arya Wijaya
                </p>
                <p
                  className="text-foreground-muted text-sm mt-1"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Executive Chef & Founder
                </p>
              </div>
            </motion.div>

            {/* Decorative handwritten accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="absolute -bottom-10 -left-10 text-gold-accent text-[120px] pointer-events-none hidden lg:block"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              N
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <div ref={imageRef} className="order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              style={{ y: imageY }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              {/* Main Image */}
              <Image
                src={images.main}
                alt="Artfully plated Indonesian dish"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gold Frame */}
              <div className="absolute inset-4 border border-gold-accent/30 pointer-events-none" />

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-accent" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-accent" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold-accent" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-accent" />
            </motion.div>

            {/* Floating Accent Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
              className="absolute -bottom-12 -left-12 w-48 h-48 hidden lg:block"
            >
              <div className="relative w-full h-full">
                <Image
                  src={images.spices}
                  alt="Indonesian spices"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <div className="absolute inset-0 border border-gold-accent/30" />
              </div>
            </motion.div>

            {/* Gold accent rectangle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -top-6 -right-6 w-full h-full border border-gold-accent/20 -z-10 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
