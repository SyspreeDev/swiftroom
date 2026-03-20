"use client";

import { useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      name: "Frank Johnstone",
      time: "Recently",
      text: `Decided to replace patio doors that allowed water to ingress during the rains, with a fixed window pane that would seal the lounge area off from outside. Very happy with the product and installation process, clean and tidy crew.`,
    },
    {
      name: "John Smith",
      time: "2 weeks ago",
      text: `Excellent service and high-quality installation. Highly recommend Swift Rooms!`,
    },
  ];

  return (
    <section className="bg-[#f3f5f4] py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 mt-3">
          Don't just take our word for it—hear from our satisfied customers
          across the UAE
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex text-[#f59e0b]">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="font-semibold text-gray-800">5.0</span>
          <span className="text-gray-400 text-sm">
            Based on 49+ Google reviews
          </span>
        </div>
      </div>

      {/* Slider Container */}
      <div className="max-w-4xl mx-auto relative">
        {/* LEFT BUTTON */}
        <button
          ref={prevRef}
          className="absolute left-[-25px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:scale-105 transition"
        >
          <FaChevronLeft className="text-gray-500" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          ref={nextRef}
          className="absolute right-[-25px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:scale-105 transition"
        >
          <FaChevronRight className="text-gray-500" />
        </button>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation]}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          onBeforeInit={(swiper) => {
            swiper.params.navigation = {
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            };
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl shadow-sm p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-gray-200 text-6xl">
                  “”
                </div>

                {/* Stars */}
                <div className="flex text-[#f59e0b] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  "{item.text}"
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-gray-400 text-sm">{item.time}</p>
                  </div>

                  {/* Google Badge */}
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
                    <span className="text-[#4285F4] font-bold">G</span>
                    <span className="text-gray-600">Google</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
