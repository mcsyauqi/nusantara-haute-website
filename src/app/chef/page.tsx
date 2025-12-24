"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const awards = [
  { year: "2024", award: "Asia's 50 Best Restaurants - #23" },
  { year: "2023", award: "Michelin Guide - One Star" },
  { year: "2023", award: "Chef of the Year - Indonesia Tatler" },
  { year: "2022", award: "Rising Star Chef - Asia's Best Female Chef" },
  { year: "2021", award: "Best New Restaurant - Jakarta Dining Awards" },
];

const philosophy = [
  {
    title: "Honoring Tradition",
    description:
      "Every recipe begins with respect for the generations who came before. We study ancient techniques, visit traditional markets, and learn from home cooks across the archipelago.",
  },
  {
    title: "Modern Expression",
    description:
      "While we honor tradition, we're not bound by it. Modern techniques allow us to express familiar flavors in unexpected ways, creating new experiences while preserving essence.",
  },
  {
    title: "Sustainable Sourcing",
    description:
      "We work directly with farmers, fishermen, and foragers across Indonesia. Our ingredients travel from soil to plate with minimal footprint and maximum impact.",
  },
  {
    title: "Artisanal Craft",
    description:
      "From hand-ground spices to house-fermented condiments, everything is made with intention. We believe the details matter, and every element deserves attention.",
  },
];

const team = [
  {
    name: "Dewi Santoso",
    role: "Sous Chef",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=400&fit=crop",
    bio: "Dewi brings 8 years of experience from top kitchens in Singapore and Bangkok.",
  },
  {
    name: "Marcus Chen",
    role: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1583394293214-28eed4a90117?w=400&h=400&fit=crop",
    bio: "Trained in Paris, Marcus creates desserts that honor Indonesian traditions.",
  },
  {
    name: "Rani Wijaya",
    role: "Head Sommelier",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    bio: "Indonesia's first Advanced Sommelier, specializing in wine and spice pairings.",
  },
];

export default function ChefPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          <motion.div style={{ scale: heroScale }} className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&h=1080&fit=crop"
              alt="Chef Arya Wijaya"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />

          <div className="container-custom relative z-10 py-32">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="gold-line" />
                  <span
                    className="text-gold-accent text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Executive Chef & Founder
                  </span>
                </div>
                <h1 className="display-heading text-cream-white mb-8">
                  Chef Arya
                  <br />
                  <span className="text-gold-accent italic">Wijaya</span>
                </h1>
                <p
                  className="text-cream-white/80 text-xl leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  A visionary chef redefining Indonesian cuisine for the modern
                  world, honoring ancestral techniques while pushing the
                  boundaries of gastronomy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-24 bg-charcoal">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=1000&fit=crop"
                  alt="Chef Arya in the kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-4 border border-gold-accent/30 pointer-events-none" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="text-gold-accent text-3xl mb-8"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  The Journey
                </h2>
                <div
                  className="space-y-6 text-foreground-muted text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  <p>
                    Born in Solo, Central Java, Chef Arya grew up surrounded by
                    the rich aromas of her grandmother's kitchen. Those early
                    memories of hand-ground spices and slow-cooked curries would
                    become the foundation of her culinary philosophy.
                  </p>
                  <p>
                    After training at Le Cordon Bleu Paris and stages at
                    Noma Copenhagen, The French Laundry, and Gaggan Bangkok,
                    Arya returned to Indonesia with a mission: to elevate
                    Indonesian cuisine to the world stage without losing its
                    soul.
                  </p>
                  <p>
                    In 2020, she opened Nusantara Haute, a restaurant that
                    celebrates the diversity of Indonesian cuisine through the
                    lens of modern gastronomy. Each dish tells a story of the
                    archipelago's 17,000 islands, reimagined for contemporary
                    palates.
                  </p>
                  <p>
                    Today, Chef Arya continues to push boundaries, mentoring the
                    next generation of Indonesian chefs and championing
                    sustainable sourcing practices that benefit local
                    communities.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-background-secondary">
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
                  Guiding Principles
                </span>
                <div className="gold-line" />
              </div>
              <h2 className="section-heading text-cream-white">
                Culinary <span className="text-gold-accent italic">Philosophy</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {philosophy.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-gold-accent/20 hover:border-gold-accent/40 transition-colors"
                >
                  <h3
                    className="text-gold-accent text-xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-foreground-muted leading-relaxed"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
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
                  Recognition
                </span>
                <div className="gold-line" />
              </div>
              <h2 className="section-heading text-cream-white">
                Awards & <span className="text-gold-accent italic">Accolades</span>
              </h2>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              {awards.map((item, index) => (
                <motion.div
                  key={item.award}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-8 py-6 border-b border-gold-accent/10"
                >
                  <span
                    className="text-gold-accent text-2xl min-w-[80px]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.year}
                  </span>
                  <p
                    className="text-cream-white text-lg"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.award}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background-secondary">
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
                  The Brigade
                </span>
                <div className="gold-line" />
              </div>
              <h2 className="section-heading text-cream-white">
                Our <span className="text-gold-accent italic">Team</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative aspect-square overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-4 border border-gold-accent/20 pointer-events-none" />
                  </div>
                  <h3
                    className="text-cream-white text-xl mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-gold-accent text-sm tracking-wider mb-4"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-foreground-muted"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 bg-deep-burgundy relative overflow-hidden">
          <div className="absolute inset-0 batik-pattern opacity-20" />
          <div className="container-custom relative z-10">
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p
                className="text-cream-white text-3xl md:text-4xl lg:text-5xl leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;Food is memory. When I cook, I'm not just creating a dish—I'm
                preserving a culture, telling a story, and inviting you to
                become part of our heritage.&rdquo;
              </p>
              <footer>
                <div className="gold-line mx-auto mb-4" />
                <p
                  className="text-gold-accent text-lg"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Chef Arya Wijaya
                </p>
              </footer>
            </motion.blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
