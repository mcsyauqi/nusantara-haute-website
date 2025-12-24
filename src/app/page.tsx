import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import ExperienceTeaser from "@/components/home/ExperienceTeaser";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <PhilosophySection />
        <FeaturedDishes />
        <ExperienceTeaser />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
