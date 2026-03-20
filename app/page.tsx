import Header from "@/components/navbar";
import Hero from "@/components/hero";
import PremiumProducts from "@/components/PremiumProducts";
import TransformSection from "@/components/TransformSection";
import Brands from "@/components/brands";
import Portfolio from "@/components/Portfolio";
import PortfolioSection from "@/components/Portfolio";
import About from "@/components/about";
import Install from "@/components/install";
import WhyChoose from "@/components/whychoose";
import VideoCarousel from "@/components/videocarousel";
import Gallery from "@/components/gallery";
import WhyChooseUs from "@/components/whychooseus";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import Stats from "@/components/stats";
import ContactSection from "@/components/contactsection";
import Slider from "@/components/SliderGallery";
import Footer from "@/components/footer";
import SolutionSection from "@/components/solutions";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Header />

      <section id="home">
        <Hero />
      </section>

      <PremiumProducts />
      <TransformSection />
      <SolutionSection />
      <ProcessSection />

      <section id="brands">
        <Brands />
      </section>

      <Portfolio />
      <CTASection />
      <Slider />
      {/* <TestimonialSection/> */}

      {/* <section id="about">
        <About />
      </section>

      <section id="services">
        <Install />
        <WhyChoose />
      </section>


      <section id="projects">
        <Gallery />
      </section>

      <section id="whyus">
        <WhyChooseUs />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="contact">
        <ContactSection />
      </section> */}

      <Footer />
    </>
  );
}
