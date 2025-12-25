"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-background-secondary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 batik-pattern opacity-20" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
                alt="Interior restoran Nusantara Haute"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gold Frame */}
              <div className="absolute inset-4 border border-gold-accent/30 pointer-events-none" />
            </div>

            {/* Floating Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 hidden lg:block"
            >
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop"
                  alt="Detail interior"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <div className="absolute inset-0 border border-gold-accent/30" />
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="gold-line" />
              <span
                className="text-gold-accent text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Lokasi Kami
              </span>
            </div>

            <h2
              className="text-cream-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Temukan <span className="text-gold-accent italic">Kami</span>
            </h2>

            <p
              className="text-foreground-muted text-lg leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Terletak di jantung SCBD Jakarta, Nusantara Haute menawarkan
              suasana mewah dan intim yang sempurna untuk setiap kesempatan
              spesial.
            </p>

            {/* Info Cards */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold-accent/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-accent" />
                </div>
                <div>
                  <h4
                    className="text-cream-white text-lg mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Alamat
                  </h4>
                  <p
                    className="text-foreground-muted"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Jl. Jend. Sudirman No. 123<br />
                    SCBD, Senayan<br />
                    Jakarta Selatan 12190
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold-accent/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold-accent" />
                </div>
                <div>
                  <h4
                    className="text-cream-white text-lg mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Jam Operasional
                  </h4>
                  <p
                    className="text-foreground-muted"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Makan Malam: Selasa – Minggu, 18:00 – 23:00<br />
                    Makan Siang: Jumat – Minggu, 12:00 – 15:00<br />
                    <span className="text-gold-accent">Tutup setiap Senin</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold-accent/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold-accent" />
                </div>
                <div>
                  <h4
                    className="text-cream-white text-lg mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Reservasi
                  </h4>
                  <p
                    className="text-foreground-muted"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    <a href="tel:+62215550123" className="hover:text-gold-accent transition-colors">
                      +62 21 555 0123
                    </a><br />
                    <a href="mailto:reservations@nusantarahaute.com" className="hover:text-gold-accent transition-colors">
                      reservations@nusantarahaute.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Lihat Peta
              </Link>
              <Link href="/reservations" className="btn-secondary">
                Reservasi
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
