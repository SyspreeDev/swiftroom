"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const videos = [
  {
    video: "/videos/video1.mp4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    video: "/videos/video2.mp4",
    text: "",
  },
  {
    video: "/videos/video3.mp4",
    text: "",
  },
  {
    video: "/videos/video4.mp4",
    text: "",
  },
  {
    video: "/videos/video5.mp4",
    text: "",
  },
];

export default function VideoCarousel() {
  return (
    <section className="bg-gradient-to-b from-[#0B6F63] via-[#08796D] to-[#064F47] py-24">

      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Experience Our Work in Motion
        </h2>

        <p className="text-white/80 mb-14 text-sm">
          Where design, detail, and motion come together
        </p>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          centeredSlides
          slidesPerView={5}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 5 },
          }}
          className="pb-14"
        >
          {videos.map((item, i) => (
            <SwiperSlide key={i}>

              {({ isActive }) => (

                <div
                  className={`relative rounded-xl overflow-hidden transition-all duration-500 shadow-xl 
                  ${isActive ? "scale-110 z-10" : "scale-95 opacity-70"}`}
                >

                  {/* Video */}
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[340px] object-cover"
                  />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      ▶
                    </div>
                  </div>

                  {/* Text (only center) */}
                  {isActive && item.text && (
                    <div className="absolute bottom-3 left-3 right-3 bg-black/50 text-white text-xs rounded-lg p-3">
                      {item.text}
                    </div>
                  )}

                </div>
              )}

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <button className="bg-white text-[#0B6F63] px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition">
          Get a Quote
        </button>

      </div>
    </section>
  );
}
