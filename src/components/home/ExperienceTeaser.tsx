"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Menu Degustasi",
    subtitle: "12 Sajian",
    description:
      "Perjalanan melalui lanskap kuliner Indonesia yang beragam, menampilkan bahan musiman dan teknik leluhur",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=800&fit=crop",
    href: "/menu",
    cta: "Lihat Menu",
  },
  {
    title: "Chef's Table",
    subtitle: "Maksimal 6 Tamu",
    description:
      "Pengalaman intim di counter dengan interaksi langsung bersama Chef Arya dan tim dapurnya",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&h=800&fit=crop",
    href: "/experience",
    cta: "Pelajari Lebih",
  },
  {
    title: "Ruang Privat",
    subtitle: "8-16 Tamu",
    description:
      "Ruangan eksklusif untuk perayaan dan pertemuan korporat dengan menu yang disesuaikan",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=800&fit=crop",
    href: "/private-events",
    cta: "Selengkapnya",
  },
];

export default function ExperienceTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-charcoal overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop"
          alt="Restaurant interior"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal z-[1]" />

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
              Pengalaman Bersantap
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="section-heading text-cream-white max-w-3xl mx-auto">
            Setiap Kunjungan, Sebuah{" "}
            <span className="text-gold-accent italic">Perjalanan</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <Link href={experience.href} className="block">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden mb-8">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />

                  {/* Gold Frame on Hover */}
                  <div className="absolute inset-4 border border-gold-accent/0 group-hover:border-gold-accent/50 transition-all duration-500" />

                  {/* Subtitle Badge */}
                  <div className="absolute top-6 left-6">
                    <span
                      className="text-gold-accent text-xs tracking-[0.2em] uppercase bg-charcoal/80 px-3 py-2"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {experience.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-cream-white text-2xl mb-4 group-hover:text-gold-accent transition-colors duration-300"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {experience.title}
                  </h3>
                  <p
                    className="text-foreground-muted text-base leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {experience.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold-accent text-sm tracking-[0.2em] uppercase group-hover:gap-4 transition-all duration-300">
                    <span style={{ fontFamily: "var(--font-cinzel)" }}>
                      {experience.cta}
                    </span>
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
