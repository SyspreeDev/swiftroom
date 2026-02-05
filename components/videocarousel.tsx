"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import Link from "next/link";


import 'swiper/css';
import 'swiper/css/effect-coverflow';

const VideoCarousel = () => {
  const slides = [
    { id: 1, src: "/videos/hero.mp4" },
    { id: 2, src: "/videos/hero.mp4" },
    { id: 3, src: "/videos/hero.mp4" },
    { id: 4, src: "/videos/hero.mp4" },
    { id: 5, src: "/videos/hero.mp4" },
    { id: 6, src: "/videos/hero.mp4" },
  ];

  return (
    <section className="bg-[#006D5B] w-full py-20 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="text-center mb-12 text-white">
        <h2 className="text-3xl md:text-5xl font-medium">Experience Our Work in Motion</h2>
        <p className="opacity-80 mt-4">Where design, detail, and motion come together</p>
      </div>

      <div className="w-full">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          // "One-by-one" settings:
          speed={1000} // Transition duration
          autoplay={{
            delay: 3000, // Time it stays on one slide
            disableOnInteraction: false,
          }}
          slidesPerView={1.3}
          spaceBetween={50} // Adjust this for the gap between slides
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 80 },
            1024: { slidesPerView: 4, spaceBetween: 100 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          className="main-video-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="main-slide-item">
              <div className="video-container shadow-2xl">
                <video className="w-full h-full object-cover" muted loop playsInline autoPlay>
                  <source src={slide.src} type="video/mp4" />
                </video>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-16">
        <Link href="/getaquote">
          <button className="bg-[#fff] hover:bg-[#fff] transition text-[#008873] px-8 py-3 rounded-full text-sm font-medium">
            Get a Quote
          </button>
          </Link>
        
      </div>
    </section>
  );
};

export default VideoCarousel;