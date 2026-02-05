"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Mark Benson",
    initial: "M",
    color: "bg-green-500",
    text: "Very professional team. Installation was smooth and clean. Highly recommended.",
  },
  {
    name: "Frank Johnstone",
    initial: "F",
    color: "bg-purple-500",
    text: "Decided to replace patio doors that allowed water to ingress during heavy rains. Fantastic service and tidy work.",
  },
  {
    name: "Willem Moelker",
    initial: "W",
    color: "bg-yellow-400",
    text: "We have been a Swiftroum customer since 2024. Very happy with the prompt service and quality work.",
  },
  {
    name: "Annie Khoury",
    initial: "A",
    color: "bg-pink-500",
    text: "Excellent products and fantastic team. Highly recommend Swiftrooms for quality and service.",
  },
  {
    name: "James Miller",
    initial: "J",
    color: "bg-blue-500",
    text: "Great experience from start to finish. Very professional and helpful team.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-[#0B6F63] via-[#08796D] to-[#064F47] py-24">

      <div className="max-w-[1500px] mx-auto px-6 text-center text-white">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Testimonials & Reviews
        </h2>

        <p className="text-white/80 text-sm md:text-base mb-16">
          Feedback that reflects our commitment to quality and customer satisfaction.
        </p>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>

              <div className="bg-white text-gray-800 p-6 shadow-md h-[230px] flex flex-col justify-between">

                {/* Stars */}
                <div className="flex items-center mb-3">

                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}

                  <span className="ml-auto text-xs text-blue-500 font-medium">
                    Testimonial
                  </span>

                </div>

                {/* Text */}
                <p className="text-sm leading-relaxed line-clamp-4">
                  {item.text}
                </p>

                {/* User */}
                <div className="flex items-center gap-3 pt-4">

                  <div
                    className={`w-9 h-9 rounded-full text-white flex items-center justify-center text-sm font-medium ${item.color}`}
                  >
                    {item.initial}
                  </div>

                  <span className="text-sm font-medium">
                    {item.name}
                  </span>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}
