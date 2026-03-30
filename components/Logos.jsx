"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const TOTAL_LOGOS = 5;

const logos = Array.from({ length: TOTAL_LOGOS }, (_, i) => {
  return `/images/brands/logo${i + 1}.png`;
});

export default function Brands() {
  return (
    <section id="brands" className="bg-[#0B7D69] py-40 overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        viewport={{ once: true }}
        className="text-center text-2xl sm:text-3xl md:text-4xl text-white mb-12"
      >
        BRANDS WE WORK WITH
      </motion.h2>

      {/* ✅ Mobile Slider */}
      <div className="block sm:hidden px-4 brands-swiper">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          loop={true}
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Brand ${i + 1}`}
                  width={250}
                  height={50}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Grid (Tablet & Desktop) */}
      <div
        className="hidden sm:grid max-w-7xl mx-auto px-6 
               grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
               gap-10 items-center justify-items-center"
      >
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center justify-center">
            <Image
              src={logo}
              alt={`Brand ${i + 1}`}
              width={200}
              height={80}
              className="object-contain transition duration-300 hover:scale-120"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
