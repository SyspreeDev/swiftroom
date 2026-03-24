"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaPlay } from "react-icons/fa";

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
      staggerChildren: 0.35,   // ⬅️ slower gap between items
      delayChildren: 0.2,      // ⬅️ slight delay before starting
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

  return (
    <section className="py-16 px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} // 🔥 from bottom
        whileInView={{ opacity: 1, y: 0 }} // move up
        transition={{
          duration: 1,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl text-gray-800">Our Portfolio</h2>

        <p className="text-gray-800 mt-2">Watch our latest installations</p>

        <div className="flex items-center justify-center gap-2 mt-3 text-[#0B7D69] text-sm">
          <FaInstagram />
          <span>@swiftrooms.ae</span>
          <span className="text-[#026b58]">• Follow for more</span>
        </div>
      </motion.div>
      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        {/* LEFT */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            {/* Video Card */}
            <motion.div
              initial={{ opacity: 0, x: -80 }} // 🔥 from left
              whileInView={{ opacity: 1, x: 0 }} // move to position
              transition={{
                duration: 1,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              viewport={{ once: true }}
              className="relative w-[300px] h-[520px] rounded-3xl overflow-hidden"
            >
              <iframe
                key={currentVideo}
                src={videos[currentVideo]}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black/30 text-white">
                {/* Top */}
                <div>
                  <div className="w-full h-[2px] bg-white/40 mb-3">
                    <div className="w-1/3 h-full bg-white"></div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0B7D69] font-bold">
                      S
                    </div>
                    <span className="text-sm font-medium">@swiftrooms</span>
                  </div>
                </div>

                {/* Bottom */}
                <div className="text-sm space-y-2">
                  <p>
                    Explore our full range of premium aluminium windows, sliding
                    doors, bifolds and luxury glass systems — all under one
                    roof. See the quality, feel the finishes, and get expert
                    advice tailored to your project. Call or WhatsApp Yaseen:
                    056 307 1536
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "#SWIFTROOMS",
                      "#DubaiShowroom",
                      "#DubaiHomes",
                      "#AluminiumWindows",
                      "#BifoldDoors",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="bg-white/20 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Controls */}
            <div className="flex gap-3 mt-6">
              {videos.map((_, i) => {
                const isActive = currentVideo === i;

                return (
                  <button
                    key={i}
                    onClick={() => setCurrentVideo(i)}
                    className={`w-13 h-13 rounded-xl flex items-center justify-center transition-all duration-200
        ${isActive ? "border-2 border-[#0B7D69]" : "border border-gray-300"}`}
                  >
                    {/* Inner Box */}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center
          ${isActive ? "bg-[#0B7D69]" : "bg-gray-200"}`}
                    >
                      <FaPlay
                        className={`text-sm ${
                          isActive ? "text-white" : "text-gray-400"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 40 }} // from bottom
              whileInView={{ opacity: 1, y: 0 }} // move up
              transition={{
                duration: 1.1, // 🔥 slower
                ease: [0.22, 1, 0.36, 1], // 🔥 premium smooth easing
              }}
              viewport={{ once: true }}
              className="mt-6 bg-[#0B7D69] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:bg-[#096b5a]"
            >
              <FaInstagram />
              Watch All Reels
            </motion.button>
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
            >
              <h3 className="text-2xl text-gray-800 mb-2">
                Real Projects, Real Results
              </h3>

              <p className="text-gray-800 mb-6 text-sm">
                Transforming homes across Dubai’s most prestigious communities.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 gap-4 mb-6"
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
                  className="bg-white rounded-xl p-5 text-center shadow-sm"
                >
                  <h4 className="text-[#0B7D69] text-2xl">{item.title}</h4>
                  <p className="text-gray-800 text-sm">{item.sub}</p>
                </motion.div>
              ))}
            </motion.div>

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
                className="text-gray-800 text-xl mb-3"
              >
                Featured Communities
              </motion.h4>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-y-2 text-gray-600 text-sm"
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
    </section>
  );
}
