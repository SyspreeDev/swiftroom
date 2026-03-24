import Header from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import PremiumProducts from "@/components/PremiumProducts";
import TransformSection from "@/components/TransformSection"
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
      <Header/>
      <Hero />
      <PremiumProducts />
      <TransformSection />
      <SolutionSection />
      <ProcessSection />
      <Brands />
      <Portfolio />
      <CTASection />
      <Slider />
      <TestimonialSection/>
      <FAQSection />
      <Footer />
    </>
  );
}
