"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { Gift, Heart, Star } from "lucide-react";

const giftCardOptions = [
  {
    id: "tasting-one",
    name: "Tasting Menu for One",
    price: "3,500,000",
    description: "12-course tasting menu experience for one guest",
    popular: false,
  },
  {
    id: "tasting-two",
    name: "Tasting Menu for Two",
    price: "7,000,000",
    description: "12-course tasting menu experience for two guests",
    popular: true,
  },
  {
    id: "chefs-table-two",
    name: "Chef's Table for Two",
    price: "10,000,000",
    description: "Intimate counter experience with Chef Arya for two",
    popular: false,
  },
  {
    id: "custom",
    name: "Custom Amount",
    price: "custom",
    description: "Choose your own amount from IDR 500,000",
    popular: false,
  },
];

export default function GiftCardsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    recipientName: "",
    recipientEmail: "",
    senderName: "",
    senderEmail: "",
    message: "",
    deliveryDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your purchase! A confirmation email will be sent shortly.");
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
            src="/images/gift-hero.jpg"
            alt="Gift cards"
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
                The Perfect Gift
              </span>
              <div className="gold-line" />
            </div>
            <h1 className="display-heading text-cream-white">
              Gift <span className="text-gold-accent italic">Cards</span>
            </h1>
            <p
              className="mt-6 text-cream-white/80 text-xl max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Give the gift of an unforgettable culinary journey
            </p>
          </motion.div>
        </section>

        {/* Features */}
        <section className="py-16 bg-charcoal border-b border-gold-accent/10">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Gift className="w-10 h-10 text-gold-accent mx-auto mb-4" />
                <h3
                  className="text-cream-white text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Instant Delivery
                </h3>
                <p
                  className="text-foreground-muted"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Delivered instantly or schedule for a special date
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Heart className="w-10 h-10 text-gold-accent mx-auto mb-4" />
                <h3
                  className="text-cream-white text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Personalized Message
                </h3>
                <p
                  className="text-foreground-muted"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Add your personal touch with a custom message
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Star className="w-10 h-10 text-gold-accent mx-auto mb-4" />
                <h3
                  className="text-cream-white text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Never Expires
                </h3>
                <p
                  className="text-foreground-muted"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Our gift cards have no expiration date
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gift Card Selection */}
        <section className="py-24 bg-charcoal">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="section-heading text-cream-white">
                  Choose Your <span className="text-gold-accent italic">Gift</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {giftCardOptions.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedCard(option.id)}
                    className={`relative p-8 text-left transition-all border ${
                      selectedCard === option.id
                        ? "bg-gold-accent/10 border-gold-accent"
                        : "bg-background-secondary border-gold-accent/20 hover:border-gold-accent/50"
                    }`}
                  >
                    {option.popular && (
                      <span
                        className="absolute top-4 right-4 text-gold-accent text-xs tracking-wider"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        MOST POPULAR
                      </span>
                    )}
                    <h3
                      className="text-cream-white text-xl mb-3"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {option.name}
                    </h3>
                    <p
                      className="text-foreground-muted mb-4"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {option.description}
                    </p>
                    {option.price !== "custom" ? (
                      <p
                        className="text-gold-accent text-2xl"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        IDR {option.price}
                      </p>
                    ) : (
                      <p
                        className="text-gold-accent text-lg"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Enter amount below
                      </p>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount */}
              {selectedCard === "custom" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mb-16"
                >
                  <label
                    className="block text-gold-accent text-xs tracking-wider mb-2"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Enter Amount (IDR)
                  </label>
                  <input
                    type="number"
                    min="500000"
                    step="100000"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Minimum 500,000"
                    className="w-full max-w-md bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  />
                </motion.div>
              )}

              {/* Gift Card Form */}
              {selectedCard && (
                <motion.form
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-background-secondary border border-gold-accent/20 p-8 md:p-12"
                >
                  <h3
                    className="text-cream-white text-2xl mb-8 text-center"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Personalize Your Gift
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Recipient Details */}
                    <div className="space-y-6">
                      <h4
                        className="text-gold-accent text-sm tracking-wider"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        Recipient Details
                      </h4>
                      <div>
                        <label
                          className="block text-foreground-muted text-sm mb-2"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          Recipient Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.recipientName}
                          onChange={(e) =>
                            setFormData({ ...formData, recipientName: e.target.value })
                          }
                          className="w-full bg-charcoal border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-foreground-muted text-sm mb-2"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          Recipient Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.recipientEmail}
                          onChange={(e) =>
                            setFormData({ ...formData, recipientEmail: e.target.value })
                          }
                          className="w-full bg-charcoal border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-foreground-muted text-sm mb-2"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          Delivery Date (optional)
                        </label>
                        <input
                          type="date"
                          value={formData.deliveryDate}
                          onChange={(e) =>
                            setFormData({ ...formData, deliveryDate: e.target.value })
                          }
                          className="w-full bg-charcoal border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        />
                      </div>
                    </div>

                    {/* Sender Details */}
                    <div className="space-y-6">
                      <h4
                        className="text-gold-accent text-sm tracking-wider"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        Your Details
                      </h4>
                      <div>
                        <label
                          className="block text-foreground-muted text-sm mb-2"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.senderName}
                          onChange={(e) =>
                            setFormData({ ...formData, senderName: e.target.value })
                          }
                          className="w-full bg-charcoal border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-foreground-muted text-sm mb-2"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.senderEmail}
                          onChange={(e) =>
                            setFormData({ ...formData, senderEmail: e.target.value })
                          }
                          className="w-full bg-charcoal border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Personal Message */}
                  <div className="mt-8">
                    <label
                      className="block text-foreground-muted text-sm mb-2"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      Personal Message (optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      placeholder="Add a personal message for the recipient..."
                      className="w-full bg-charcoal border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors resize-none"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    />
                  </div>

                  <div className="text-center mt-10">
                    <button type="submit" className="btn-primary">
                      Purchase Gift Card
                    </button>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
