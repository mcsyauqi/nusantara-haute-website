"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const menuCategories = [
  { id: "tasting", label: "Tasting Menu" },
  { id: "alacarte", label: "À La Carte" },
  { id: "wines", label: "Wine List" },
  { id: "spirits", label: "Spirits & Cocktails" },
];

const tastingMenu = {
  title: "Nusantara Journey",
  subtitle: "12 Courses · 3 Hours",
  price: "IDR 3,500,000",
  winePariring: "IDR 2,800,000",
  description:
    "A culinary expedition through the archipelago, featuring seasonal ingredients and ancestral techniques reimagined for the modern palate.",
  courses: [
    {
      number: "01",
      name: "Amuse-Bouche",
      dish: "Sea Urchin & Coconut",
      description: "Raja Ampat uni, coconut foam, kaffir lime oil",
    },
    {
      number: "02",
      name: "Pembuka",
      dish: "Gado-Gado Deconstructed",
      description:
        "Heritage vegetables, peanut three ways, crispy tempeh, soft-boiled quail egg",
    },
    {
      number: "03",
      name: "Dari Laut",
      dish: "Ceviche Nusantara",
      description:
        "Day-boat catch, torch ginger, green mango, sambal matah essence",
    },
    {
      number: "04",
      name: "Sup",
      dish: "Soto Betawi Consommé",
      description: "Crystal-clear beef broth, ox cheek, herbs, emping cracker",
    },
    {
      number: "05",
      name: "Pasta",
      dish: "Mie Goreng Reimagined",
      description: "House-made noodles, XO sauce, picked vegetables, aged egg yolk",
    },
    {
      number: "06",
      name: "Seafood",
      dish: "Ikan Bakar",
      description:
        "Whole grilled John Dory, dabu-dabu, grilled corn, tamarind glaze",
    },
    {
      number: "07",
      name: "Intermezzo",
      dish: "Es Cendol",
      description: "Pandan granita, coconut sorbet, palm sugar",
    },
    {
      number: "08",
      name: "Unggas",
      dish: "Ayam Betutu",
      description:
        "Free-range chicken, betutu spices, cassava leaf, base genep",
    },
    {
      number: "09",
      name: "Daging",
      dish: "Rendang Wagyu",
      description:
        "Australian Wagyu MB7, coconut reduction, 48-hour rendang spices",
    },
    {
      number: "10",
      name: "Pre-Dessert",
      dish: "Pisang Goreng",
      description: "Caramelized banana, vanilla bean ice cream, peanut praline",
    },
    {
      number: "11",
      name: "Dessert",
      dish: "Klepon Evolution",
      description:
        "Pandan mousse, palm sugar center, coconut snow, pandan oil",
    },
    {
      number: "12",
      name: "Petit Fours",
      dish: "Indonesian Chocolates",
      description: "Single-origin chocolate, traditional flavors",
    },
  ],
};

const alaCarteMenu = [
  {
    category: "Starters",
    items: [
      {
        name: "Satay Trio",
        description: "Lamb, chicken, beef with three signature sauces",
        price: "295,000",
        dietary: ["GF"],
      },
      {
        name: "Tuna Tartare",
        description: "Yellowfin tuna, avocado, sambal hijau, rice crackers",
        price: "345,000",
        dietary: ["GF"],
      },
      {
        name: "Soft Shell Crab",
        description: "Crispy crab, green papaya, tamarind dressing",
        price: "385,000",
        dietary: [],
      },
      {
        name: "Oxtail Soup",
        description: "Traditional sop buntut, aromatic herbs, emping",
        price: "275,000",
        dietary: ["GF"],
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Rendang Wagyu",
        description: "Australian Wagyu MB7, coconut, aromatic spices",
        price: "895,000",
        dietary: ["GF"],
      },
      {
        name: "Bebek Betutu",
        description: "Heritage duck, betutu spices, lawar, sambal",
        price: "695,000",
        dietary: ["GF"],
      },
      {
        name: "Lobster Nasi Goreng",
        description: "Half Maine lobster, wok-fried rice, sambal bajak",
        price: "945,000",
        dietary: [],
      },
      {
        name: "Lamb Rack Tongseng",
        description: "Australian lamb, sweet soy, vegetables",
        price: "785,000",
        dietary: ["GF"],
      },
      {
        name: "Barramundi Pepes",
        description: "Steamed in banana leaf, turmeric, torch ginger",
        price: "545,000",
        dietary: ["GF"],
      },
    ],
  },
  {
    category: "Sides",
    items: [
      {
        name: "Truffle Nasi Goreng",
        description: "Jasmine rice, black truffle, aged kecap manis",
        price: "195,000",
        dietary: ["V"],
      },
      {
        name: "Gado-Gado",
        description: "Seasonal vegetables, peanut sauce, tempeh",
        price: "145,000",
        dietary: ["V", "GF"],
      },
      {
        name: "Sayur Lodeh",
        description: "Vegetables in coconut milk, lemongrass",
        price: "125,000",
        dietary: ["V", "GF"],
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Klepon Chocolate",
        description: "Pandan mousse, Valrhona center, coconut snow",
        price: "175,000",
        dietary: ["V"],
      },
      {
        name: "Es Teler Parfait",
        description: "Tropical fruits, coconut ice cream, condensed milk",
        price: "155,000",
        dietary: ["V", "GF"],
      },
      {
        name: "Cheese Selection",
        description: "Artisanal cheeses, condiments, crackers",
        price: "295,000",
        dietary: ["V"],
      },
    ],
  },
];

const wineList = [
  {
    region: "Champagne & Sparkling",
    wines: [
      { name: "Dom Pérignon 2012", price: "5,500,000" },
      { name: "Krug Grande Cuvée", price: "6,800,000" },
      { name: "Ruinart Blanc de Blancs", price: "2,400,000" },
    ],
  },
  {
    region: "White Wines",
    wines: [
      { name: "Chablis Grand Cru, Raveneau 2019", price: "3,200,000" },
      { name: "Puligny-Montrachet, Leflaive 2020", price: "2,800,000" },
      { name: "Cloudy Bay Sauvignon Blanc 2022", price: "950,000" },
    ],
  },
  {
    region: "Red Wines",
    wines: [
      { name: "Château Margaux 2015", price: "12,500,000" },
      { name: "Opus One 2019", price: "8,500,000" },
      { name: "Penfolds Grange 2017", price: "6,200,000" },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("tasting");
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
          className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=1080&fit=crop"
            alt="Elegant table setting"
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
                Culinary Artistry
              </span>
              <div className="gold-line" />
            </div>
            <h1 className="display-heading text-cream-white">
              Our <span className="text-gold-accent italic">Menu</span>
            </h1>
          </motion.div>
        </section>

        {/* Menu Navigation */}
        <section className="sticky top-0 z-30 bg-charcoal/95 backdrop-blur-md border-b border-gold-accent/10">
          <div className="container-custom">
            <nav className="flex overflow-x-auto py-6 gap-8 scrollbar-hide">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap text-sm tracking-[0.2em] uppercase transition-colors duration-300 pb-2 border-b-2 ${
                    activeCategory === category.id
                      ? "text-gold-accent border-gold-accent"
                      : "text-cream-white/60 border-transparent hover:text-cream-white"
                  }`}
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {category.label}
                </button>
              ))}
            </nav>
          </div>
        </section>

        {/* Tasting Menu */}
        {activeCategory === "tasting" && (
          <section className="py-24 bg-charcoal">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-20"
                >
                  <h2
                    className="text-gold-accent text-4xl md:text-5xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {tastingMenu.title}
                  </h2>
                  <p
                    className="text-foreground-muted text-lg mb-8"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {tastingMenu.subtitle}
                  </p>
                  <p
                    className="text-cream-white/80 text-lg max-w-2xl mx-auto mb-8"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {tastingMenu.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <div className="text-center">
                      <p
                        className="text-gold-accent text-2xl"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {tastingMenu.price}
                      </p>
                      <p
                        className="text-foreground-muted text-sm"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        per person
                      </p>
                    </div>
                    <div className="hidden sm:block w-[1px] h-12 bg-gold-accent/30" />
                    <div className="text-center">
                      <p
                        className="text-gold-accent text-2xl"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {tastingMenu.winePariring}
                      </p>
                      <p
                        className="text-foreground-muted text-sm"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        wine pairing
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Courses */}
                <div className="space-y-12">
                  {tastingMenu.courses.map((course, index) => (
                    <motion.div
                      key={course.number}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="grid grid-cols-12 gap-6 items-start py-8 border-b border-gold-accent/10"
                    >
                      <div className="col-span-2">
                        <span
                          className="text-gold-accent/40 text-4xl"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {course.number}
                        </span>
                      </div>
                      <div className="col-span-10">
                        <p
                          className="text-gold-accent text-xs tracking-[0.3em] uppercase mb-2"
                          style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                          {course.name}
                        </p>
                        <h3
                          className="text-cream-white text-2xl mb-3"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {course.dish}
                        </h3>
                        <p
                          className="text-foreground-muted text-lg"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {course.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-center mt-16"
                >
                  <Link href="/reservations" className="btn-primary">
                    Reserve Your Experience
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* À La Carte Menu */}
        {activeCategory === "alacarte" && (
          <section className="py-24 bg-charcoal">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                {alaCarteMenu.map((section, sectionIndex) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    className="mb-16"
                  >
                    <h2
                      className="text-gold-accent text-2xl mb-8 pb-4 border-b border-gold-accent/20"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {section.category}
                    </h2>
                    <div className="space-y-8">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: sectionIndex * 0.1 + itemIndex * 0.05,
                          }}
                          className="flex justify-between items-start gap-8"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3
                                className="text-cream-white text-xl"
                                style={{ fontFamily: "var(--font-playfair)" }}
                              >
                                {item.name}
                              </h3>
                              {item.dietary.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-gold-accent text-xs border border-gold-accent/30 px-2 py-0.5 rounded"
                                  style={{ fontFamily: "var(--font-cinzel)" }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <p
                              className="text-foreground-muted text-base"
                              style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                              {item.description}
                            </p>
                          </div>
                          <span
                            className="text-gold-accent text-lg whitespace-nowrap"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {item.price}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <div className="text-center mt-12 pt-8 border-t border-gold-accent/10">
                  <p
                    className="text-foreground-muted text-sm mb-2"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    V = Vegetarian · GF = Gluten Free
                  </p>
                  <p
                    className="text-foreground-muted text-sm"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    All prices in Indonesian Rupiah · 21% tax & service included
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Wine List */}
        {activeCategory === "wines" && (
          <section className="py-24 bg-charcoal">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <p
                    className="text-foreground-muted text-lg max-w-2xl mx-auto"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Our sommelier has curated an exceptional collection to
                    complement your dining experience
                  </p>
                </motion.div>

                {wineList.map((section, sectionIndex) => (
                  <motion.div
                    key={section.region}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    className="mb-12"
                  >
                    <h2
                      className="text-gold-accent text-xl mb-6 pb-3 border-b border-gold-accent/20"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {section.region}
                    </h2>
                    <div className="space-y-4">
                      {section.wines.map((wine) => (
                        <div
                          key={wine.name}
                          className="flex justify-between items-center"
                        >
                          <span
                            className="text-cream-white text-lg"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                          >
                            {wine.name}
                          </span>
                          <span
                            className="text-gold-accent"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {wine.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <p
                  className="text-foreground-muted text-sm text-center mt-12"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Full wine list available upon request · By-the-glass options
                  available
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Spirits & Cocktails */}
        {activeCategory === "spirits" && (
          <section className="py-24 bg-charcoal">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2
                    className="text-gold-accent text-3xl mb-6"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Signature Cocktails
                  </h2>
                  <p
                    className="text-foreground-muted text-lg max-w-2xl mx-auto mb-12"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Our bar program celebrates Indonesian ingredients through
                    innovative cocktails crafted by our mixology team
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {[
                      {
                        name: "Spice Route",
                        description:
                          "Aged rum, coconut, galangal, pandan, lime",
                        price: "185,000",
                      },
                      {
                        name: "Jakarta Sunset",
                        description:
                          "Vodka, passionfruit, torch ginger, champagne",
                        price: "195,000",
                      },
                      {
                        name: "Rendang Old Fashioned",
                        description:
                          "Bourbon infused with rendang spices, palm sugar",
                        price: "225,000",
                      },
                      {
                        name: "Pandan Martini",
                        description:
                          "Gin, pandan, coconut, kaffir lime",
                        price: "195,000",
                      },
                    ].map((cocktail) => (
                      <motion.div
                        key={cocktail.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 border border-gold-accent/20 hover:border-gold-accent/40 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3
                            className="text-cream-white text-xl"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {cocktail.name}
                          </h3>
                          <span
                            className="text-gold-accent"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {cocktail.price}
                          </span>
                        </div>
                        <p
                          className="text-foreground-muted"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {cocktail.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
