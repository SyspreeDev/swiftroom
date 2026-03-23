"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-[#f3f5f4] py-20 px-6 relative overflow-hidden">
      {/* Background Pattern (optional light shapes) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* You can replace with SVG/image if needed */}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.25 }}
        >
          {/* Heading */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 }, // 🔥 from bottom
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4"
          >
            Ready to Transform Your Space?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 }, // slightly less movement
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-gray-600 text-lg md:text-xl mb-10"
          >
            Get a free consultation and quote from our expert team
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, x: 40 }} // 🔥 from left
          whileInView={{ opacity: 1, x: 0 }} // move to position
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1], // smooth premium easing
          }}
          viewport={{ once: true }}
          className="bg-[#0B7D69] hover:bg-[#096b5a] text-white text-lg md:text-xl font-medium px-10 py-5 rounded-2xl flex items-center gap-4 mx-auto shadow-lg transition-all duration-300 hover:scale-105"
        >
          Start Your Swiftrooms Journey
          <FaArrowRight className="text-xl" />
        </motion.button>
      </div>
    </section>
  );
}
