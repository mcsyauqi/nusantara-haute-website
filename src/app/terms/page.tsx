"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function TermsPage() {
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
              Syarat & <span className="text-gold-accent italic">Ketentuan</span>
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
                className="space-y-12"
              >
                {/* Reservations */}
                <div>
                  <h2
                    className="text-gold-accent text-2xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Kebijakan Reservasi
                  </h2>
                  <div
                    className="text-foreground-muted space-y-4"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    <p className="leading-relaxed">
                      Reservasi sangat disarankan dan dapat dilakukan melalui website kami,
                      telepon, atau WhatsApp. Kami membutuhkan konfirmasi reservasi minimal
                      24 jam sebelum waktu kedatangan.
                    </p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Reservasi berlaku selama 15 menit dari waktu yang dijadwalkan</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Untuk grup lebih dari 6 orang, silakan hubungi tim kami</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Permintaan tempat duduk khusus akan diusahakan namun tidak dijamin</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Cancellation */}
                <div>
                  <h2
                    className="text-gold-accent text-2xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Kebijakan Pembatalan
                  </h2>
                  <div
                    className="text-foreground-muted space-y-4"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    <p className="leading-relaxed">
                      Kami memahami bahwa rencana dapat berubah. Untuk pembatalan atau
                      perubahan reservasi:
                    </p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Pembatalan gratis hingga 24 jam sebelum reservasi</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Pembatalan kurang dari 24 jam dapat dikenakan biaya IDR 500.000 per orang</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Ketidakhadiran tanpa pemberitahuan akan dikenakan biaya penuh</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Dress Code */}
                <div>
                  <h2
                    className="text-gold-accent text-2xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Kode Berpakaian
                  </h2>
                  <p
                    className="text-foreground-muted leading-relaxed"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Nusantara Haute menerapkan smart casual dress code. Kami menyarankan
                    pakaian yang elegan dan nyaman. Sandal, kaos tanpa lengan, dan pakaian
                    olahraga tidak diperkenankan. Batik dan pakaian tradisional Indonesia
                    sangat dihargai.
                  </p>
                </div>

                {/* Dietary Requirements */}
                <div>
                  <h2
                    className="text-gold-accent text-2xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Kebutuhan Diet & Alergi
                  </h2>
                  <p
                    className="text-foreground-muted leading-relaxed"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Kami berkomitmen untuk mengakomodasi berbagai kebutuhan diet dan alergi.
                    Harap informasikan tim kami tentang alergi atau pembatasan makanan saat
                    melakukan reservasi atau minimal 48 jam sebelum kunjungan untuk tasting
                    menu. Menu vegetarian dan vegan tersedia berdasarkan permintaan.
                  </p>
                </div>

                {/* Payment */}
                <div>
                  <h2
                    className="text-gold-accent text-2xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Pembayaran
                  </h2>
                  <div
                    className="text-foreground-muted space-y-4"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    <p className="leading-relaxed">
                      Kami menerima berbagai metode pembayaran untuk kenyamanan Anda:
                    </p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Kartu kredit/debit (Visa, Mastercard, AMEX, JCB)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Transfer bank</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>E-wallet (GoPay, OVO, DANA)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Tunai dalam Rupiah</span>
                      </li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      Semua harga sudah termasuk pajak dan biaya layanan 21%.
                    </p>
                  </div>
                </div>

                {/* Gift Cards */}
                <div>
                  <h2
                    className="text-gold-accent text-2xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Kartu Hadiah
                  </h2>
                  <div
                    className="text-foreground-muted space-y-4"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Kartu hadiah tidak memiliki tanggal kadaluarsa</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Kartu hadiah tidak dapat ditukar dengan uang tunai</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Sisa saldo dapat digunakan untuk kunjungan berikutnya</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gold-accent">•</span>
                        <span>Kartu hadiah yang hilang tidak dapat diganti</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Photography */}
                <div>
                  <h2
                    className="text-gold-accent text-2xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Fotografi
                  </h2>
                  <p
                    className="text-foreground-muted leading-relaxed"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Kami menyambut tamu untuk mengabadikan momen kuliner mereka. Namun,
                    kami memohon untuk tidak menggunakan flash photography dan menjaga
                    ketenangan pengalaman bersantap tamu lain. Untuk keperluan fotografi
                    profesional, harap koordinasikan dengan tim kami terlebih dahulu.
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <h2
                    className="text-gold-accent text-2xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Pertanyaan
                  </h2>
                  <p
                    className="text-foreground-muted leading-relaxed"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Untuk pertanyaan lebih lanjut tentang Syarat & Ketentuan ini, silakan
                    hubungi kami di{" "}
                    <a
                      href="mailto:info@nusantarahaute.com"
                      className="text-gold-accent hover:text-gold-light transition-colors"
                    >
                      info@nusantarahaute.com
                    </a>{" "}
                    atau telepon{" "}
                    <a
                      href="tel:+62215550123"
                      className="text-gold-accent hover:text-gold-light transition-colors"
                    >
                      +62 21 555 0123
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
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
