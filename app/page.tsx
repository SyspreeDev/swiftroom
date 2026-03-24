import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import PremiumProducts from "@/components/PremiumProducts";
import TransformSection from "@/components/TransformSection";
import Brands from "@/components/Logos";
import Portfolio from "@/components/Portfolio";
import Slider from "@/components/SliderGallery";
import Footer from "@/components/Footer";
import SolutionSection from "@/components/SolutionsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FaqSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="products">
        <PremiumProducts />
      </section>

      <section id="transform">
        <TransformSection />
      </section>

      <section id="solutions">
        <SolutionSection />
      </section>

      <section id="process">
        <ProcessSection />
      </section>

      <section id="brands">
        <Brands />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="cta">
        <CTASection />
      </section>

      <section id="gallery">
        <Slider />
      </section>

      <section id="testimonials">
        <TestimonialSection />
      </section>

      <section id="faqs">
        <FAQSection />
      </section>

      <Footer />
    </>
  );
}
