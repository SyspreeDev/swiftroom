import Header from "@/components/header";
import Hero from "@/components/hero";
import Brands from "@/components/brands";
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
import Footer from "@/components/footer";









export default function Home() {
  return (
    <>
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="brands">
        <Brands />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Install />
        <WhyChoose />
      </section>

       <VideoCarousel />

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
      </section>

      <Footer />
    </>
  );
}

