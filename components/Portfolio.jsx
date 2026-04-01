"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaInstagram, FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function PortfolioSection() {
  const videos = [
    "https://www.youtube.com/embed/UYQGz5wQk0A?autoplay=1&mute=1&loop=1&playlist=UYQGz5wQk0A",
    "https://www.youtube.com/embed/ucY_7aSe4LA?autoplay=1&mute=1&loop=1&playlist=ucY_7aSe4LA",
    "https://www.youtube.com/embed/8APq_IfMYN4?autoplay=1&mute=1&loop=1&playlist=8APq_IfMYN4",
    "https://www.youtube.com/embed/Oez-wgM2GJY?autoplay=1&mute=1&loop=1&playlist=Oez-wgM2GJY",
    "https://www.youtube.com/embed/M8Fg6_QO96Y?autoplay=1&mute=1&loop=1&playlist=M8Fg6_QO96Y",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.35, // ⬅️ slower gap between items
        delayChildren: 0.2, // ⬅️ slight delay before starting
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 }, // ⬅️ more distance = more visible motion
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // ⬅️ slower (was 0.7)
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9, // ⬅️ slower (was 0.6)
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  const swiperRef = useRef(null);

  return (
    <section id="portfolio" className="py-16 px-6 relative">
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
      <motion.div
        initial={{ opacity: 0, y: 40 }} // 🔥 from bottom
        whileInView={{ opacity: 1, y: 0 }} // move up
        transition={{
          duration: 1,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        viewport={{ once: true }}
        className="text-center mb-10 relative z-10"
      >
        <h2 className="text-3xl text-gray-800">Our Portfolio</h2>

        <p className="text-gray-800 mt-2">Watch our latest installations</p>

        <div className="flex items-center justify-center gap-2 mt-3 text-[#0B7D69] text-sm">
          <FaInstagram />
          <span>
            <a
              href="https://instagram.com/swiftrooms.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @swiftrooms.ae
            </a>
          </span>
          <span className="text-[#026b58]">• Follow for more</span>
        </div>
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        {/* LEFT */}

        {/* LEFT COLUMN: VIDEOS */}
        <div className="flex flex-col items-center w-full">
          {/* Desktop View: Single Video Player + Buttons */}
          <div className="hidden md:flex flex-col items-center">
            <motion.div className="relative w-[300px] h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                key={currentVideo}
                src={videos[currentVideo]}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>

            {/* Desktop Only Buttons */}
            <div className="flex gap-3 mt-6 relative z-10">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentVideo(i)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all cursor-pointer 
                    ${currentVideo === i ? "border-2 border-[#0B7D69]" : "border border-gray-300"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${currentVideo === i ? "bg-[#0B7D69]" : "bg-gray-200"}`}
                  >
                    <FaPlay
                      className={`text-[10px] ${currentVideo === i ? "text-white" : "text-gray-400"}`}
                    />
                  </div>
                </button>
              ))}
            </div>
            {/* "Watch All Reels" Button as seen in your image */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-[#0B7D69] text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium shadow-md relative z-10">
                <FaInstagram />
                Watch All Reels
              </button>
            </a>
          </div>

          {/* Mobile View: Swiper + Dots */}
          <div className="md:hidden w-full flex flex-col items-center">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              onSlideChange={(swiper) => setCurrentVideo(swiper.activeIndex)}
              className="w-full max-w-sm pb-10 custom-swiper" // Added padding for dots
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <div className="w-[280px] h-[500px] rounded-3xl overflow-hidden shadow-lg">
                      <div className="absolute inset-0 z-10"></div>
                      <iframe
                        src={video}
                        className="w-full h-full pointer-events-none"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* "Watch All Reels" Button as seen in your image */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-[#0B7D69] text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium shadow-md">
                <FaInstagram />
                Watch All Reels
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col">
          <div className="max-w-md">
            <motion.div
              initial={{ opacity: 0, x: 80 }} // 🔥 from right
              whileInView={{ opacity: 1, x: 0 }} // move to position
              transition={{
                duration: 1,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              viewport={{ once: true }}
              className="relative z-10 "
            >
              <h3 className="text-2xl text-gray-800 mb-2">
                Real Projects, Real Results
              </h3>

              <p className="text-gray-800 mb-6 text-sm">
                Transforming homes across Dubai’s most prestigious communities.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="w-full overflow-hidden">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 w-full max-w-full"
              >
                {[
                  { title: "30K", sub: "Instagram Followers" },
                  { title: "500+", sub: "Projects Shared" },
                  { title: "98%", sub: "Customer Satisfaction" },
                  { title: "4.9★", sub: "Average Rating" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    className="bg-white rounded-xl p-4 sm:p-5 text-center shadow-sm relative z-10 w-full"
                  >
                    <h4 className="text-[#0B7D69] text-xl sm:text-2xl font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-gray-800 text-xs sm:text-sm">
                      {item.sub}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Communities */}
            <div>
              <motion.h4
                initial={{ opacity: 0, x: 40 }} // 🔥 from right
                whileInView={{ opacity: 1, x: 0 }} // move to position
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                viewport={{ once: true }}
                className="text-gray-800 text-xl mb-3 relative z-10"
              >
                Featured Communities
              </motion.h4>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-y-2 text-gray-600 text-sm relative z-10"
              >
                {[
                  "Arabian Ranches",
                  "Dubai Hills",
                  "Jumeirah Islands",
                  "Palm Jumeirah",
                  "Emirates Hills",
                  "Saadiyat Islands",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-center gap-2"
                  >
                    <span className="text-[#0B7D69]">✔</span>
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          background: #0b7d69 !important;
          width: 24px; /* Makes the active dot a pill shape like your image */
          border-radius: 10px;
          transition: width 0.3s ease;
        }
        .custom-swiper .swiper-pagination {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
}
