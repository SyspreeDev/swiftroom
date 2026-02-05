"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-coverflow";

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
    <section className="bg-[#006D5B] w-full py-16 md:py-20 overflow-hidden min-h-[80vh] md:min-h-screen flex flex-col justify-center">

      {/* Heading */}
      <div className="text-center mb-8 md:mb-12 text-white px-4">

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium">
          Experience Our Work in Motion
        </h2>

        <p className="opacity-80 mt-3 md:mt-4 text-sm sm:text-base">
          Where design, detail, and motion come together
        </p>

      </div>

      {/* Carousel */}
      <div className="w-full px-2 sm:px-4 md:px-0">

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          speed={900}

          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}

          /* Mobile First */
          slidesPerView={1}
          spaceBetween={20}

          breakpoints={{
            480: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },

            640: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },

            768: {
              slidesPerView: 2.2,
              spaceBetween: 60,
            },

            1024: {
              slidesPerView: 3.2,
              spaceBetween: 80,
            },

            1280: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
          }}

          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}

          className="main-video-swiper"
        >

          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="main-slide-item flex justify-center"
            >

              <div className="video-container shadow-2xl">

                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <source src={slide.src} type="video/mp4" />
                </video>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10 md:mt-16">

        <Link href="/getaquote">

          <button className="bg-white hover:bg-gray-100 transition text-[#008873] px-8 py-3 rounded-full text-sm md:text-base font-medium shadow-lg">
            Get a Quote
          </button>

        </Link>

      </div>

    </section>
  );
};

export default VideoCarousel;
