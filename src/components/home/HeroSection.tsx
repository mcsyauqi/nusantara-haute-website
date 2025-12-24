"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

function GoldParticles() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "gold-particle";

      const size = Math.random() * 4 + 2;
      const startX = Math.random() * 100;
      const duration = Math.random() * 8 + 6;
      const delay = Math.random() * 5;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.8) 0%, rgba(212, 175, 55, 0) 70%);
        border-radius: 50%;
        left: ${startX}%;
        bottom: -10px;
        opacity: 0;
        pointer-events: none;
        animation: floatUp ${duration}s ease-out ${delay}s infinite;
      `;

      container.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, (duration + delay) * 1000);
    };

    const style = document.createElement("style");
    style.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 0;
        }
        10% {
          opacity: 0.8;
        }
        90% {
          opacity: 0.3;
        }
        100% {
          transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    const interval = setInterval(createParticle, 300);

    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 200);
    }

    return () => {
      clearInterval(interval);
      style.remove();
    };
  }, []);

  return (
    <div
      ref={particlesRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
    />
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video/Image Background */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop"
          alt="Elegant fine dining experience"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal/50" />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay z-[1]" />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(28, 28, 28, 0.4) 100%)",
        }}
      />

      {/* Gold Particles */}
      <GoldParticles />

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="w-16 h-[1px] bg-gold-accent mb-8"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-gold-accent text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          Fine Dining Experience
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="display-heading text-cream-white max-w-4xl"
        >
          Where Tradition
          <br />
          <span className="text-gold-accent italic">Meets Artistry</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 text-cream-white/80 text-lg md:text-xl max-w-2xl body-large"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          A culinary journey through the soul of Indonesia
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12"
        >
          <Link href="/reservations" className="btn-primary">
            Reserve Your Table
          </Link>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="w-16 h-[1px] bg-gold-accent mt-12"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span
          className="text-cream-white/60 text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold-accent to-transparent"
        />
      </motion.div>

      {/* Side Decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gold-accent/30" />
        <span
          className="text-gold-accent/60 text-xs tracking-[0.2em] rotate-90 whitespace-nowrap origin-center"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          EST. 2020
        </span>
        <div className="w-[1px] h-20 bg-gold-accent/30" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gold-accent/30" />
        <span
          className="text-gold-accent/60 text-xs tracking-[0.2em] -rotate-90 whitespace-nowrap origin-center"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          JAKARTA
        </span>
        <div className="w-[1px] h-20 bg-gold-accent/30" />
      </motion.div>
    </section>
  );
}
