"use client";

import { ShieldCheck, Gem, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function TransformSection() {
  const data = [
    {
      icon: <ShieldCheck className="text-[#0B7D69]" size={24} />,
      title: "Performance windows & doors",
      desc: "Engineered to perform. Built to outlast.",
      bg: "bg-[#F5EDE3]",
      border: "border-[#E6CBA8]",
      iconBg: "bg-[#F3E2C7]",
    },
    {
      icon: <Gem className="text-[#0B7D69]" size={24} />,
      title: "Panoramic Slim Sliding Systems",
      desc: "Ultra-slim profiles. Seamless design. Maximum light.",
      bg: "bg-[#F3E7E7]",
      border: "border-[#E5BABA]",
      iconBg: "bg-[#F1D6D6]",
    },
    {
      icon: <Home className="text-[#0B7D69]" size={24} />,
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
      delayChildren: 0.3,   // slight delay before starting
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
    <section className="bg-white py-20 px-6 relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // 🔥 start from bottom
        whileInView={{ opacity: 1, y: 0 }} // move up
        transition={{
          duration: 1,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold mb-4">Transform Your Space</h2>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          From common problems to premium solutions – experience the SWIFTROOMS
          difference
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
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
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
