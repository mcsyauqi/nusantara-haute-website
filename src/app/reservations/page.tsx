"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { ChevronLeft, ChevronRight, Calendar, Clock, Users, Check } from "lucide-react";

const diningOptions = [
  {
    id: "tasting",
    name: "Tasting Menu",
    description: "12-course journey through Indonesia",
    price: "IDR 3,500,000 per person",
    duration: "3 hours",
  },
  {
    id: "chefstable",
    name: "Chef's Table",
    description: "Intimate counter experience with Chef Arya",
    price: "IDR 5,000,000 per person",
    duration: "3.5 hours",
  },
  {
    id: "alacarte",
    name: "À La Carte",
    description: "Select from our seasonal menu",
    price: "Varies",
    duration: "2-2.5 hours",
  },
];

const timeSlots = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];

export default function ReservationsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState(2);
  const [selectedDining, setSelectedDining] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
    occasion: "",
  });

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Empty cells for days before the first of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }

    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isPast = date < today;
      const isClosed = date.getDay() === 1; // Closed on Mondays
      days.push({ date, isPast, isClosed });
    }

    return days;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setStep(4);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

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
            src="/images/reservations-hero.jpg"
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
                Begin Your Journey
              </span>
              <div className="gold-line" />
            </div>
            <h1 className="display-heading text-cream-white">
              <span className="text-gold-accent italic">Reservations</span>
            </h1>
          </motion.div>
        </section>

        {/* Booking Section */}
        <section className="py-16 md:py-24 bg-charcoal">
          <div className="container-custom">
            {/* Progress Steps */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-between">
                {["Date & Time", "Dining Experience", "Your Details", "Confirmation"].map((label, index) => (
                  <div key={label} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                          step > index + 1
                            ? "bg-gold-accent border-gold-accent text-charcoal"
                            : step === index + 1
                            ? "border-gold-accent text-gold-accent"
                            : "border-gold-accent/30 text-gold-accent/30"
                        }`}
                      >
                        {step > index + 1 ? <Check size={18} /> : index + 1}
                      </div>
                      <span
                        className={`text-xs mt-2 hidden md:block ${
                          step >= index + 1 ? "text-gold-accent" : "text-gold-accent/30"
                        }`}
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {label}
                      </span>
                    </div>
                    {index < 3 && (
                      <div
                        className={`w-16 md:w-24 h-[1px] mx-2 ${
                          step > index + 1 ? "bg-gold-accent" : "bg-gold-accent/30"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Date & Time */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Calendar */}
                    <div className="bg-background-secondary p-6 md:p-8 border border-gold-accent/20">
                      <div className="flex items-center justify-between mb-6">
                        <button
                          onClick={() =>
                            setCurrentMonth(
                              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
                            )
                          }
                          className="text-gold-accent hover:text-gold-light transition-colors p-2"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <h3
                          className="text-cream-white text-xl"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </h3>
                        <button
                          onClick={() =>
                            setCurrentMonth(
                              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
                            )
                          }
                          className="text-gold-accent hover:text-gold-light transition-colors p-2"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>

                      <div className="grid grid-cols-7 gap-2 mb-4">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                          <div
                            key={day}
                            className="text-center text-foreground-muted text-xs py-2"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                          >
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-2">
                        {generateCalendarDays().map((day, index) => (
                          <div key={index}>
                            {day ? (
                              <button
                                onClick={() => !day.isPast && !day.isClosed && setSelectedDate(day.date)}
                                disabled={day.isPast || day.isClosed}
                                className={`w-full aspect-square flex items-center justify-center text-sm transition-all ${
                                  selectedDate?.toDateString() === day.date.toDateString()
                                    ? "bg-gold-accent text-charcoal"
                                    : day.isPast || day.isClosed
                                    ? "text-foreground-muted/30 cursor-not-allowed"
                                    : "text-cream-white hover:bg-gold-accent/20"
                                }`}
                                style={{ fontFamily: "var(--font-cormorant)" }}
                              >
                                {day.date.getDate()}
                              </button>
                            ) : (
                              <div className="w-full aspect-square" />
                            )}
                          </div>
                        ))}
                      </div>

                      <p
                        className="text-foreground-muted text-sm mt-4 text-center"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        Closed on Mondays
                      </p>
                    </div>

                    {/* Time & Guests */}
                    <div className="space-y-8">
                      {/* Time Selection */}
                      <div className="bg-background-secondary p-6 md:p-8 border border-gold-accent/20">
                        <div className="flex items-center gap-3 mb-6">
                          <Clock size={20} className="text-gold-accent" />
                          <h3
                            className="text-cream-white text-lg"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            Select Time
                          </h3>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`py-3 text-sm transition-all border ${
                                selectedTime === time
                                  ? "bg-gold-accent text-charcoal border-gold-accent"
                                  : "text-cream-white border-gold-accent/30 hover:border-gold-accent"
                              }`}
                              style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Guest Count */}
                      <div className="bg-background-secondary p-6 md:p-8 border border-gold-accent/20">
                        <div className="flex items-center gap-3 mb-6">
                          <Users size={20} className="text-gold-accent" />
                          <h3
                            className="text-cream-white text-lg"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            Number of Guests
                          </h3>
                        </div>
                        <div className="flex items-center justify-center gap-6">
                          <button
                            onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                            className="w-12 h-12 border border-gold-accent/30 text-gold-accent hover:bg-gold-accent hover:text-charcoal transition-colors"
                          >
                            -
                          </button>
                          <span
                            className="text-cream-white text-3xl w-12 text-center"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {guestCount}
                          </span>
                          <button
                            onClick={() => setGuestCount(Math.min(12, guestCount + 1))}
                            className="w-12 h-12 border border-gold-accent/30 text-gold-accent hover:bg-gold-accent hover:text-charcoal transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <p
                          className="text-foreground-muted text-sm mt-4 text-center"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          For parties larger than 12, please contact us directly
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <div className="text-center mt-12">
                    <button
                      onClick={() => setStep(2)}
                      disabled={!selectedDate || !selectedTime}
                      className={`btn-primary ${
                        !selectedDate || !selectedTime ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Dining Experience */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="text-center mb-12">
                    <h2
                      className="text-cream-white text-2xl mb-4"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Select Your Experience
                    </h2>
                    <p
                      className="text-foreground-muted"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {selectedDate && formatDate(selectedDate)} at {selectedTime} for {guestCount} guests
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {diningOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedDining(option.id)}
                        className={`p-8 text-left transition-all border ${
                          selectedDining === option.id
                            ? "bg-gold-accent/10 border-gold-accent"
                            : "bg-background-secondary border-gold-accent/20 hover:border-gold-accent/50"
                        }`}
                      >
                        <h3
                          className="text-cream-white text-xl mb-3"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {option.name}
                        </h3>
                        <p
                          className="text-foreground-muted text-sm mb-4"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {option.description}
                        </p>
                        <p
                          className="text-gold-accent text-lg mb-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {option.price}
                        </p>
                        <p
                          className="text-foreground-muted text-xs"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          Duration: {option.duration}
                        </p>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between mt-12">
                    <button
                      onClick={() => setStep(1)}
                      className="btn-secondary"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!selectedDining}
                      className={`btn-primary ${!selectedDining ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Your Details */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-2xl mx-auto"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-gold-accent text-xs tracking-wider mb-2"
                          style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-gold-accent text-xs tracking-wider mb-2"
                          style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        />
                      </div>
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
                        Special Occasion
                      </label>
                      <select
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        <option value="">Select an occasion (optional)</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="business">Business Dinner</option>
                        <option value="celebration">Celebration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-gold-accent text-xs tracking-wider mb-2"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        Special Requests or Dietary Requirements
                      </label>
                      <textarea
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        rows={4}
                        className="w-full bg-background-secondary border border-gold-accent/30 text-cream-white px-4 py-3 focus:border-gold-accent outline-none transition-colors resize-none"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                        placeholder="Allergies, dietary restrictions, seating preferences..."
                      />
                    </div>

                    <div className="flex justify-between pt-6">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-secondary"
                      >
                        Back
                      </button>
                      <button type="submit" className="btn-primary">
                        Complete Reservation
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl mx-auto text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gold-accent/10 border border-gold-accent flex items-center justify-center mx-auto mb-8">
                    <Check size={40} className="text-gold-accent" />
                  </div>

                  <h2
                    className="text-cream-white text-3xl mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Reservation Confirmed
                  </h2>

                  <p
                    className="text-foreground-muted text-lg mb-8"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Thank you, {formData.firstName}. We look forward to welcoming you.
                  </p>

                  <div className="bg-background-secondary border border-gold-accent/20 p-8 mb-8">
                    <div className="grid grid-cols-2 gap-6 text-left">
                      <div>
                        <p
                          className="text-gold-accent text-xs tracking-wider mb-1"
                          style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                          Date
                        </p>
                        <p
                          className="text-cream-white"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {selectedDate && formatDate(selectedDate)}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-gold-accent text-xs tracking-wider mb-1"
                          style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                          Time
                        </p>
                        <p
                          className="text-cream-white"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {selectedTime}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-gold-accent text-xs tracking-wider mb-1"
                          style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                          Guests
                        </p>
                        <p
                          className="text-cream-white"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {guestCount} {guestCount === 1 ? "guest" : "guests"}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-gold-accent text-xs tracking-wider mb-1"
                          style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                          Experience
                        </p>
                        <p
                          className="text-cream-white"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {diningOptions.find((o) => o.id === selectedDining)?.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p
                    className="text-foreground-muted text-sm mb-8"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    A confirmation email has been sent to {formData.email}
                  </p>

                  <button
                    onClick={() => {
                      setStep(1);
                      setSelectedDate(null);
                      setSelectedTime(null);
                      setSelectedDining(null);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        specialRequests: "",
                        occasion: "",
                      });
                    }}
                    className="btn-secondary"
                  >
                    Make Another Reservation
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-background-secondary">
          <div className="container-custom text-center">
            <p
              className="text-foreground-muted mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              For large parties or special requests, please contact us directly
            </p>
            <a
              href="tel:+62215550123"
              className="text-gold-accent text-2xl hover:text-gold-light transition-colors"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              +62 21 555 0123
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
