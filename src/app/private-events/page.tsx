"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { Users, Wine, Utensils, Music } from "lucide-react";

const venues = [
  {
    name: "The Spice Room",
    capacity: "8-12 Guests",
    description:
      "An intimate private dining room wrapped in rich Indonesian textiles and curated artifacts. Perfect for executive dinners and milestone celebrations.",
    features: ["Full privacy", "Custom menus", "Dedicated butler", "A/V capabilities"],
    minSpend: "IDR 25,000,000",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
  },
  {
    name: "The Garden Terrace",
    capacity: "16-30 Guests",
    description:
      "Our outdoor sanctuary with tropical landscaping and retractable roof. Ideal for cocktail receptions and al fresco celebrations.",
    features: ["Open-air dining", "Flexible layout", "Live entertainment", "Custom lighting"],
    minSpend: "IDR 50,000,000",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
  },
  {
    name: "Full Restaurant Buyout",
    capacity: "Up to 60 Guests",
    description:
      "Exclusive access to the entire Nusantara Haute experience. Transform our space for your most prestigious occasions.",
    features: ["Complete exclusivity", "Bespoke experience", "All spaces included", "Full team dedicated"],
    minSpend: "IDR 150,000,000",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  },
];

const eventTypes = [
  {
    icon: <Wine size={32} />,
    title: "Corporate Entertaining",
    description: "Impress clients and celebrate achievements in an unforgettable setting",
  },
  {
    icon: <Utensils size={32} />,
    title: "Private Celebrations",
    description: "Birthdays, anniversaries, and intimate gatherings with bespoke menus",
  },
  {
    icon: <Users size={32} />,
    title: "Social Events",
    description: "Engagement parties, reunions, and exclusive dinner parties",
  },
  {
    icon: <Music size={32} />,
    title: "Launch Events",
    description: "Product launches, press dinners, and brand experiences",
  },
];

export default function PrivateEventsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guestCount: "",
    preferredDate: "",
    venue: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our events team will contact you within 24 hours.");
  };

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
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&h=1080&fit=crop"
            alt="Private dining event"
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
                Exclusive Experiences
              </span>
              <div className="gold-line" />
            </div>
            <h1 className="display-heading text-cream-white">
              Private <span className="text-gold-accent italic">Events</span>
            </h1>
            <p
              className="mt-6 text-cream-white/80 text-xl max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Create unforgettable moments in our exclusive spaces
            </p>
          </motion.div>
        </section>

        {/* Event Types */}
        <section className="py-24 bg-charcoal">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 border border-gold-accent/20 hover:border-gold-accent/40 transition-colors"
                >
                  <div className="text-gold-accent mb-6 flex justify-center">{type.icon}</div>
                  <h3
                    className="text-cream-white text-xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {type.title}
                  </h3>
                  <p
                    className="text-foreground-muted"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Venues */}
        <section className="py-24 bg-background-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
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
                Private <span className="text-gold-accent italic">Venues</span>
              </h2>
            </motion.div>

            <div className="space-y-24">
              {venues.map((venue, index) => (
                <motion.div
                  key={venue.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-4 border border-gold-accent/30 pointer-events-none" />
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span
                      className="text-gold-accent text-xs tracking-[0.3em] uppercase mb-4 block"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {venue.capacity}
                    </span>
                    <h3
                      className="text-cream-white text-3xl mb-6"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {venue.name}
                    </h3>
                    <p
                      className="text-foreground-muted text-lg mb-8 leading-relaxed"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {venue.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {venue.features.map((feature) => (
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
                    <p
                      className="text-gold-accent text-lg"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Minimum spend: {venue.minSpend}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="py-24 bg-charcoal">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="gold-line" />
                  <span
                    className="text-gold-accent text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Get Started
                  </span>
                  <div className="gold-line" />
                </div>
                <h2 className="section-heading text-cream-white">
                  Plan Your <span className="text-gold-accent italic">Event</span>
                </h2>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-gold-accent text-xs tracking-wider mb-2"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gold-accent text-xs tracking-wider mb-2"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-gold-accent text-xs tracking-wider mb-2"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gold-accent text-xs tracking-wider mb-2"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      <option value="">Select type</option>
                      <option value="corporate">Corporate Entertaining</option>
                      <option value="celebration">Private Celebration</option>
                      <option value="social">Social Event</option>
                      <option value="launch">Launch Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label
                      className="block text-gold-accent text-xs tracking-wider mb-2"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gold-accent text-xs tracking-wider mb-2"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gold-accent text-xs tracking-wider mb-2"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      Preferred Venue
                    </label>
                    <select
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      <option value="">Select venue</option>
                      <option value="spice">The Spice Room</option>
                      <option value="garden">Garden Terrace</option>
                      <option value="buyout">Full Buyout</option>
                      <option value="undecided">Undecided</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-gold-accent text-xs tracking-wider mb-2"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Tell Us About Your Event
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors resize-none"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                    placeholder="Share any specific requirements, themes, or questions..."
                  />
                </div>

                <div className="text-center pt-4">
                  <button type="submit" className="btn-primary">
                    Submit Inquiry
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
