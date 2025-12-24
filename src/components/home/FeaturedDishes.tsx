"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const featuredDishes = [
  {
    id: 1,
    name: "Rendang Wagyu",
    description:
      "Slow-cooked Australian Wagyu in a symphony of coconut and aromatic spices, finished with crispy shallots and herb oil",
    origin: "West Sumatra",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=1000&fit=crop",
  },
  {
    id: 2,
    name: "Sate Lilit Bali",
    description:
      "Hand-minced sustainably-caught fish wrapped around lemongrass, grilled over coconut husk with sambal matah",
    origin: "Bali",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=1000&fit=crop",
  },
  {
    id: 3,
    name: "Bebek Betutu",
    description:
      "Heritage duck slow-cooked for 12 hours in banana leaf with betutu spices, served with lawar and sambal",
    origin: "Bali",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&h=1000&fit=crop",
  },
  {
    id: 4,
    name: "Oxtail Sop Buntut",
    description:
      "Crystal-clear oxtail consommé with fork-tender meat, aromatic herbs, and housemade sambal",
    origin: "Jakarta",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=1000&fit=crop",
  },
  {
    id: 5,
    name: "Nasi Goreng Truffle",
    description:
      "Wok-fried jasmine rice with black truffle, free-range egg, and aged kecap manis",
    origin: "Modern Indonesian",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=1000&fit=crop",
  },
  {
    id: 6,
    name: "Klepon Chocolate",
    description:
      "Deconstructed pandan rice cake with Valrhona chocolate center, palm sugar caramel, and coconut snow",
    origin: "Java",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=1000&fit=crop",
  },
];

export default function FeaturedDishes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgX = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 400;
    const scrollAmount = direction === "left" ? -cardWidth - 32 : cardWidth + 32;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    const newIndex = direction === "left"
      ? Math.max(0, activeIndex - 1)
      : Math.min(featuredDishes.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-background-secondary overflow-hidden"
    >
      {/* Background Pattern */}
      <motion.div
        style={{ x: bgX }}
        className="absolute inset-0 batik-pattern opacity-20"
      />

      {/* Header */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-line" />
              <span
                className="text-gold-accent text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Signature Creations
              </span>
            </div>
            <h2 className="section-heading text-cream-white">
              Featured <span className="text-gold-accent italic">Dishes</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-gold-accent/30 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-charcoal transition-all duration-300"
              aria-label="Previous dish"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-gold-accent/30 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-charcoal transition-all duration-300"
              aria-label="Next dish"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto pb-8 px-[max(1.5rem,calc((100vw-1440px)/2+1.5rem))] snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {featuredDishes.map((dish, index) => (
          <motion.article
            key={dish.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[400px] snap-start group"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden mb-6">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 400px"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Origin Label */}
              <div className="absolute top-6 left-6">
                <span
                  className="text-cream-white bg-charcoal/80 px-3 py-1 text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {dish.origin}
                </span>
              </div>

              {/* Full Description on Hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <p
                  className="text-cream-white text-center text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {dish.description}
                </p>
              </motion.div>

              {/* Gold Frame on Hover */}
              <div className="absolute inset-4 border border-gold-accent/0 group-hover:border-gold-accent/50 transition-all duration-500" />
            </div>

            {/* Text Content */}
            <div>
              <h3
                className="text-cream-white text-2xl mb-3 group-hover:text-gold-accent transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {dish.name}
              </h3>
              <p
                className="text-foreground-muted text-base line-clamp-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {dish.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Progress Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="container-custom mt-12"
      >
        <div className="flex items-center gap-4">
          <span
            className="text-gold-accent text-sm"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 h-[1px] bg-gold-accent/20 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gold-accent"
              style={{
                width: `${((activeIndex + 1) / featuredDishes.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span
            className="text-foreground-muted text-sm"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            {String(featuredDishes.length).padStart(2, "0")}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
