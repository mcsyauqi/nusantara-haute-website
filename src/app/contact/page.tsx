"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will respond within 24 hours.");
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
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=1080&fit=crop"
            alt="Restaurant entrance"
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
                Get In Touch
              </span>
              <div className="gold-line" />
            </div>
            <h1 className="display-heading text-cream-white">
              <span className="text-gold-accent italic">Contact</span>
            </h1>
          </motion.div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-24 bg-charcoal">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="text-cream-white text-3xl mb-8"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Visit <span className="text-gold-accent italic">Us</span>
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold-accent" />
                    </div>
                    <div>
                      <h3
                        className="text-cream-white text-lg mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Address
                      </h3>
                      <address
                        className="not-italic text-foreground-muted leading-relaxed"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        Jl. Jend. Sudirman No. 123
                        <br />
                        SCBD, Senayan
                        <br />
                        Jakarta Selatan 12190
                        <br />
                        Indonesia
                      </address>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6 text-gold-accent" />
                    </div>
                    <div>
                      <h3
                        className="text-cream-white text-lg mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Reservations
                      </h3>
                      <a
                        href="tel:+62215550123"
                        className="text-foreground-muted hover:text-gold-accent transition-colors block"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        +62 21 555 0123
                      </a>
                      <a
                        href="https://wa.me/62215550123"
                        className="text-foreground-muted hover:text-gold-accent transition-colors block mt-1"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        WhatsApp Available
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-gold-accent" />
                    </div>
                    <div>
                      <h3
                        className="text-cream-white text-lg mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Email
                      </h3>
                      <a
                        href="mailto:reservations@nusantarahaute.com"
                        className="text-foreground-muted hover:text-gold-accent transition-colors block"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        reservations@nusantarahaute.com
                      </a>
                      <a
                        href="mailto:events@nusantarahaute.com"
                        className="text-foreground-muted hover:text-gold-accent transition-colors block mt-1"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        events@nusantarahaute.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <Clock className="w-6 h-6 text-gold-accent" />
                    </div>
                    <div>
                      <h3
                        className="text-cream-white text-lg mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Hours
                      </h3>
                      <div
                        className="text-foreground-muted space-y-1"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        <p>
                          <span className="text-cream-white">Dinner:</span> Tuesday –
                          Sunday, 6:00 PM – 11:00 PM
                        </p>
                        <p>
                          <span className="text-cream-white">Lunch:</span> Friday –
                          Sunday, 12:00 PM – 3:00 PM
                        </p>
                        <p className="text-gold-accent mt-2">Closed Mondays</p>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="pt-8 border-t border-gold-accent/10">
                    <h3
                      className="text-cream-white text-lg mb-4"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Follow Us
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border border-gold-accent/30 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-charcoal transition-all duration-300"
                      >
                        <Instagram size={20} />
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border border-gold-accent/30 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-charcoal transition-all duration-300"
                      >
                        <Facebook size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Reservation CTA */}
                <div className="mt-12 p-8 bg-deep-burgundy/30 border border-gold-accent/20">
                  <h3
                    className="text-cream-white text-xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Ready to Dine?
                  </h3>
                  <p
                    className="text-foreground-muted mb-6"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Book your table online for the fastest confirmation
                  </p>
                  <Link href="/reservations" className="btn-primary">
                    Make a Reservation
                  </Link>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="text-cream-white text-3xl mb-8"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Send a <span className="text-gold-accent italic">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        Phone Number
                      </label>
                      <input
                        type="tel"
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
                        Subject *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Reservation Inquiry</option>
                        <option value="event">Private Event</option>
                        <option value="press">Press & Media</option>
                        <option value="career">Career Opportunities</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-gold-accent text-xs tracking-wider mb-2"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      Your Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors resize-none"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    />
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="btn-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] md:h-[500px] relative">
          <div className="absolute inset-0 bg-charcoal flex items-center justify-center">
            {/* Placeholder for map - in production, integrate with Google Maps or Mapbox */}
            <div className="text-center">
              <p
                className="text-foreground-muted mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Interactive map would be integrated here
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
