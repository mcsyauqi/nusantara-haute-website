"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const experiences = [
  {
    title: "Main Dining Room",
    capacity: "40 Guests",
    description:
      "Our elegant main dining space features floor-to-ceiling windows overlooking the city skyline, intimate lighting, and bespoke furnishings that create the perfect backdrop for an unforgettable evening.",
    features: [
      "Panoramic city views",
      "Climate-controlled wine display",
      "Live kitchen view",
      "Acoustic design for conversation",
    ],
    image: "/images/main-dining.jpg",
  },
  {
    title: "Chef's Table",
    capacity: "6 Guests Maximum",
    description:
      "An exclusive counter experience placing you at the heart of the action. Watch Chef Arya and his brigade craft each course while enjoying personalized commentary and interaction.",
    features: [
      "Direct chef interaction",
      "Extended tasting menu",
      "Behind-the-scenes experience",
      "Priority reservations",
    ],
    image: "/images/chefs-table-detail.jpg",
  },
  {
    title: "The Spice Room",
    capacity: "8-12 Guests",
    description:
      "Our private dining enclave wrapped in rich textiles and Indonesian artifacts. Perfect for intimate celebrations and business gatherings requiring discretion.",
    features: [
      "Complete privacy",
      "Customized menu options",
      "Dedicated service team",
      "Audio-visual capabilities",
    ],
    image: "/images/spice-room.jpg",
  },
  {
    title: "The Garden Terrace",
    capacity: "16-20 Guests",
    description:
      "An outdoor sanctuary with lush tropical landscaping, perfect for sunset cocktails and al fresco dining under the stars.",
    features: [
      "Open-air dining",
      "Tropical garden setting",
      "Weather protection",
      "Flexible layout",
    ],
    image: "/images/garden-terrace.jpg",
  },
];

const timeline = [
  { time: "6:00 PM", event: "Arrival & Welcome Cocktail", description: "Begin your evening in our lounge with a signature cocktail" },
  { time: "6:30 PM", event: "Seated & Amuse-Bouche", description: "Journey begins with our chef's greeting from the kitchen" },
  { time: "7:00 PM", event: "Tasting Menu Commences", description: "12 courses showcasing the archipelago's finest ingredients" },
  { time: "9:30 PM", event: "Dessert & Petit Fours", description: "Sweet conclusion with Indonesian chocolates and digestifs" },
  { time: "10:00 PM", event: "Farewell", description: "Depart with memories and a gift from our kitchen" },
];

export default function ExperiencePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden"
        >
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <Image
              src="/images/experience-hero.jpg"
              alt="Nusantara Haute dining experience"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 gradient-overlay" />

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
                An Evening Awaits
              </span>
              <div className="gold-line" />
            </div>
            <h1 className="display-heading text-cream-white">
              The <span className="text-gold-accent italic">Experience</span>
            </h1>
            <p
              className="mt-6 text-cream-white/80 text-xl max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              More than a meal, an immersive journey through Indonesian culinary heritage
            </p>
          </motion.div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-charcoal">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="gold-line" />
                <span
                  className="text-gold-accent text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Your Evening
                </span>
                <div className="gold-line" />
              </div>
              <h2 className="section-heading text-cream-white">
                A Night at <span className="text-gold-accent italic">Nusantara Haute</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-8 mb-12 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <span
                      className="text-gold-accent text-lg whitespace-nowrap"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.time}
                    </span>
                    <div className="w-[1px] h-full bg-gold-accent/30 mt-4" />
                  </div>
                  <div className="flex-1 pb-8 border-b border-gold-accent/10">
                    <h3
                      className="text-cream-white text-xl mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.event}
                    </h3>
                    <p
                      className="text-foreground-muted"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dining Spaces */}
        <section className="py-24 bg-background-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="gold-line" />
                <span
                  className="text-gold-accent text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Our Spaces
                </span>
                <div className="gold-line" />
              </div>
              <h2 className="section-heading text-cream-white">
                Dining <span className="text-gold-accent italic">Environments</span>
              </h2>
            </motion.div>

            <div className="space-y-32">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-4 border border-gold-accent/30 pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span
                      className="text-gold-accent text-xs tracking-[0.3em] uppercase mb-4 block"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {experience.capacity}
                    </span>
                    <h3
                      className="text-cream-white text-3xl md:text-4xl mb-6"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {experience.title}
                    </h3>
                    <p
                      className="text-foreground-muted text-lg mb-8 leading-relaxed"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {experience.description}
                    </p>
                    <ul className="space-y-3">
                      {experience.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-cream-white/80"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          <span className="w-1.5 h-1.5 bg-gold-accent rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-deep-burgundy relative overflow-hidden">
          <div className="absolute inset-0 batik-pattern opacity-20" />
          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-cream-white text-4xl md:text-5xl mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Reserve Your <span className="text-gold-accent italic">Experience</span>
              </h2>
              <p
                className="text-cream-white/80 text-xl max-w-2xl mx-auto mb-10"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Begin your culinary journey through Indonesia
              </p>
              <Link href="/reservations" className="btn-primary">
                Make a Reservation
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
