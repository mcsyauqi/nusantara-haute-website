"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function PrivacyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-charcoal"
        >
          <div className="absolute inset-0 batik-pattern opacity-30" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 text-center px-6"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-line" />
              <span
                className="text-gold-accent text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Informasi Legal
              </span>
              <div className="gold-line" />
            </div>
            <h1 className="display-heading text-cream-white">
              Kebijakan <span className="text-gold-accent italic">Privasi</span>
            </h1>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-charcoal">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg prose-invert"
              >
                <div className="space-y-12">
                  {/* Introduction */}
                  <div>
                    <h2
                      className="text-gold-accent text-2xl mb-4"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Pendahuluan
                    </h2>
                    <p
                      className="text-foreground-muted leading-relaxed"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      Nusantara Haute berkomitmen untuk melindungi privasi Anda. Kebijakan
                      Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
                      melindungi informasi pribadi Anda ketika Anda menggunakan layanan kami.
                    </p>
                  </div>

                  {/* Data Collection */}
                  <div>
                    <h2
                      className="text-gold-accent text-2xl mb-4"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Informasi yang Kami Kumpulkan
                    </h2>
                    <p
                      className="text-foreground-muted leading-relaxed mb-4"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      Kami mengumpulkan informasi berikut untuk memberikan layanan terbaik:
                    </p>
                    <ul
                      className="text-foreground-muted space-y-3"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Nama lengkap dan informasi kontak (email, nomor telepon)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Informasi reservasi dan preferensi bersantap</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Riwayat kunjungan dan preferensi menu</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Informasi pembayaran untuk transaksi</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Informasi alergi dan kebutuhan diet khusus</span>
                      </li>
                    </ul>
                  </div>

                  {/* Data Usage */}
                  <div>
                    <h2
                      className="text-gold-accent text-2xl mb-4"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Penggunaan Informasi
                    </h2>
                    <p
                      className="text-foreground-muted leading-relaxed mb-4"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      Informasi yang kami kumpulkan digunakan untuk:
                    </p>
                    <ul
                      className="text-foreground-muted space-y-3"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Memproses dan mengelola reservasi Anda</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Mempersonalisasi pengalaman bersantap Anda</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Mengirimkan konfirmasi dan pengingat reservasi</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Menginformasikan tentang penawaran khusus dan acara</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Meningkatkan layanan dan menu kami</span>
                      </li>
                    </ul>
                  </div>

                  {/* Data Protection */}
                  <div>
                    <h2
                      className="text-gold-accent text-2xl mb-4"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Perlindungan Data
                    </h2>
                    <p
                      className="text-foreground-muted leading-relaxed"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      Kami menerapkan langkah-langkah keamanan yang ketat untuk melindungi
                      informasi pribadi Anda dari akses tidak sah, pengubahan, pengungkapan,
                      atau penghancuran. Data Anda disimpan dengan enkripsi dan hanya dapat
                      diakses oleh staf yang berwenang.
                    </p>
                  </div>

                  {/* Third Party */}
                  <div>
                    <h2
                      className="text-gold-accent text-2xl mb-4"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Berbagi dengan Pihak Ketiga
                    </h2>
                    <p
                      className="text-foreground-muted leading-relaxed"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak
                      ketiga. Kami hanya berbagi informasi dengan penyedia layanan tepercaya
                      yang membantu kami menjalankan operasi restoran, dan mereka terikat oleh
                      perjanjian kerahasiaan yang ketat.
                    </p>
                  </div>

                  {/* Contact */}
                  <div>
                    <h2
                      className="text-gold-accent text-2xl mb-4"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Hubungi Kami
                    </h2>
                    <p
                      className="text-foreground-muted leading-relaxed"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin
                      mengakses, memperbarui, atau menghapus informasi pribadi Anda, silakan
                      hubungi kami di{" "}
                      <a
                        href="mailto:privacy@nusantarahaute.com"
                        className="text-gold-accent hover:text-gold-light transition-colors"
                      >
                        privacy@nusantarahaute.com
                      </a>
                    </p>
                  </div>

                  {/* Last Updated */}
                  <div className="pt-8 border-t border-gold-accent/20">
                    <p
                      className="text-foreground-muted text-sm"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      Terakhir diperbarui: Desember 2024
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
