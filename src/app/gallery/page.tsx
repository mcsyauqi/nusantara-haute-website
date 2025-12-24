"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Dishes", "Interior", "Chef", "Events"];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=600&fit=crop", category: "Dishes", alt: "Rendang Wagyu presentation" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=600&fit=crop", category: "Interior", alt: "Main dining room" },
  { src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=600&fit=crop", category: "Chef", alt: "Chef Arya plating" },
  { src: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=600&h=600&fit=crop", category: "Dishes", alt: "Sate Lilit Bali" },
  { src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=600&fit=crop", category: "Events", alt: "Private dinner setup" },
  { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=600&fit=crop", category: "Interior", alt: "Bar area" },
  { src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=600&fit=crop", category: "Dishes", alt: "Dessert plating" },
  { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=600&fit=crop", category: "Chef", alt: "Kitchen team at work" },
  { src: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=600&fit=crop", category: "Dishes", alt: "Seafood course" },
  { src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&h=600&fit=crop", category: "Interior", alt: "Chef's table" },
  { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=600&fit=crop", category: "Events", alt: "Garden terrace event" },
  { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=600&fit=crop", category: "Dishes", alt: "Amuse-bouche selection" },
  { src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&h=600&fit=crop", category: "Chef", alt: "Ingredient preparation" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop", category: "Dishes", alt: "Signature appetizer" },
  { src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=600&fit=crop", category: "Interior", alt: "Wine cellar" },
  { src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=600&fit=crop", category: "Dishes", alt: "Klepon dessert" },
];

export default function GalleryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentImageIndex((prev) =>
        prev === 0 ? filteredImages.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) =>
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop"
            alt="Gallery"
            fill
            className="object-cover"
            priority
          />
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
                Visual Stories
              </span>
              <div className="gold-line" />
            </div>
            <h1 className="display-heading text-cream-white">
              <span className="text-gold-accent italic">Gallery</span>
            </h1>
          </motion.div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-charcoal border-b border-gold-accent/10">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-sm tracking-[0.2em] uppercase pb-2 border-b-2 transition-colors ${
                    activeCategory === category
                      ? "text-gold-accent border-gold-accent"
                      : "text-cream-white/60 border-transparent hover:text-cream-white"
                  }`}
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-charcoal">
          <div className="container-custom">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-square overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 border border-gold-accent rounded-full flex items-center justify-center">
                        <span className="text-gold-accent text-2xl">+</span>
                      </div>
                    </div>
                    <div className="absolute inset-4 border border-gold-accent/0 group-hover:border-gold-accent/50 transition-all duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-gold-accent hover:text-gold-light transition-colors z-10"
              >
                <X size={32} />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("prev");
                }}
                className="absolute left-6 text-gold-accent hover:text-gold-light transition-colors z-10"
              >
                <ChevronLeft size={48} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("next");
                }}
                className="absolute right-6 text-gold-accent hover:text-gold-light transition-colors z-10"
              >
                <ChevronRight size={48} />
              </button>

              {/* Image */}
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-[90vw] h-[80vh] max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredImages[currentImageIndex].src}
                  alt={filteredImages[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </motion.div>

              {/* Caption */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                <p
                  className="text-cream-white text-lg"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {filteredImages[currentImageIndex].alt}
                </p>
                <p
                  className="text-gold-accent text-sm mt-2"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {currentImageIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
