"use client";

import { ShieldCheck, Gem, Home } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function TransformSection() {
  const data = [
    {
      icon: "/images/sheild.svg",
      title: "Performance windows & doors",
      desc: "Engineered to perform. Built to outlast.",
      bg: "bg-[#F5EDE3]",
      border: "border-[#E6CBA8]",
      iconBg: "bg-[#F3E2C7]",
    },
    {
      icon: "/images/gem.svg",
      title: "Panoramic Slim Sliding Systems",
      desc: "Ultra-slim profiles. Seamless design.",
      bg: "bg-[#F3E7E7]",
      border: "border-[#E5BABA]",
      iconBg: "bg-[#F1D6D6]",
    },
    {
      icon: "/images/home.svg",
      title: "Garden rooms & extensions",
      desc: "Transform unused space into living space.",
      bg: "bg-[#E7EEF6]",
      border: "border-[#B8CDE6]",
      iconBg: "bg-[#D6E3F3]",
    },
  ];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // 🔥 slower gap between cards
        delayChildren: 0.3, // slight delay before starting
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2, // 🔥 slower fade
        ease: [0.22, 1, 0.36, 1], // 🔥 premium smooth easing
      },
    },
  };

  return (
    <section id="transform" className="py-20 px-6 relative">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>
      {/* Heading */}
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-8 sm:mb-10 md:mb-12 px-2 relative z-10"
      >
        {/* Title */}
        <h2
          className="
    text-xl md:text-3xl md:text-4xl
    font-bold
    text-gray-900
    leading-snug
  "
        >
          Transform Your space
        </h2>

        {/* Subtitle */}
        <p
          className="
    text-gray-600
    text-xs sm:text-base md:text-lg
    mt-2 sm:mt-3
    max-w-xl mx-auto
  "
        >
          From common problems to premium solutions - experience the SWIFTROOMS
          difference
        </p>
      </motion.div>
      {/* Cards */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div class="lg:hidden text-center mb-3">
          <p class="font-['Barlow',sans-serif] text-xs text-gray-400 flex items-center justify-center gap-1.5 animate-pulse">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 8L22 12L18 16M6 8L2 12L6 16"></path>
            </svg>
            Swipe to explore
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 8L22 12L18 16M6 8L2 12L6 16"></path>
            </svg>
          </p>
        </div>
        {/* Mobile Slider */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]} // 👈 required
            spaceBetween={16}
            slidesPerView={1.2}
            pagination={{ clickable: true }} // 👈 enable dots
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`${item.bg} ${item.border} border rounded-2xl p-6 text-center`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl shadow-sm ${item.iconBg}`}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-m font-semibold mb-2">{item.title}</h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid md:grid-cols-3 gap-8"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`${item.bg} ${item.border} border rounded-2xl p-8 text-center transition duration-300 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl shadow-sm ${item.iconBg}`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-7 h-7 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
