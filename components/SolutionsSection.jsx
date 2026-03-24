"use client";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
export default function SolutionSection() {
  const frustrations = [
    "Excessive heat penetration",
    "Sound resistance for improved acoustic performance",
    "Better air tightness",
    "Skyrocketing AC bills",
    "Making use of unused space",
  ];

  const advantages = [
    "Advanced solar-control glazing reduces excessive heat penetration.",
    "High-performance double and triple glazing improves acoustic insulation.",
    "Multi-point locking and triple gasket systems enhance air tightness and sealing.",
    "Thermally broken aluminium profiles minimise heat transfers",
    "Acoustic laminated glass significantly reduces outside noise.",
    "Garden rooms and extensions transform unused space into valuable living areas.",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4, // 🔥 wait after card
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -60 }, // 🔥 from left
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 }, // 🔥 from left
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const rightCardVariants = {
    hidden: { opacity: 0, x: 60 }, // 👉 from right
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  const rightContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4, // wait after card
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 40 }, // 👉 from right
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="solutions" className="py-20 px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // 🔥 start from bottom
        whileInView={{ opacity: 1, y: 0 }} // move up
        transition={{
          duration: 0.9,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl font-bold">The SWIFTROOMS Solution</h2>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow p-8"
        >
          {/* Heading */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100">
              <X className="text-red-500" size={14} />
            </span>
            <h3 className="font-semibold text-2xl">Common Frustrations</h3>
          </div>

          {/* List */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {frustrations.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 text-gray-600 text-sm"
              >
                <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-red-100">
                  <X className="text-red-500" size={12} />
                </span>

                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Card */}
        <motion.div
          variants={rightCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0B7D69] to-[#065F52] text-white rounded-2xl shadow p-8"
        >
          {/* Heading */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0f9e84]">
              <Check className="text-white" size={18} />
            </span>
            <h3 className="font-semibold text-2xl">SWIFTROOMS Advantage</h3>
          </div>

          <p className="text-sm text-white/80 mb-6">
            Engineered specifically for UAE climate conditions, our premium
            aluminum systems transform your living experience.
          </p>

          {/* List */}
          <motion.ul
            variants={rightContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 mb-6"
          >
            {advantages.map((item, index) => (
              <motion.li
                key={index}
                variants={rightItemVariants}
                className="flex items-start gap-3 text-sm"
              >
                <span className="mt-1 flex items-center justify-center rounded-full bg-green-600">
                  <Check className="text-white" size={18} />
                </span>

                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* Button */}
          <button className="w-full bg-white text-[#0B7D69] font-extrabold py-3 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            Explore Our Products
            <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
