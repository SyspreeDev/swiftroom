"use client";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState("frustrations");

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
      {/* ================= HEADING ================= */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <h2 className="text-2xl sm:text-3xl font-bold">
          The SWIFTROOMS Solution
        </h2>
      </motion.div>

      {/* ================= WRAPPER ================= */}
      <div className="max-w-6xl mx-auto">
        {/* ================= MOBILE TABS ================= */}
        <div className="md:hidden">
          {/* Tabs */}
          <div className="bg-gray-200 rounded-full p-1 flex mb-6">
            <button
              onClick={() => setActiveTab("frustrations")}
              className={`flex-1 py-2 text-sm font-medium rounded-full transition
            ${
              activeTab === "frustrations"
                ? "bg-white shadow text-red-500"
                : "text-gray-500"
            }`}
            >
              Problems
            </button>

            <button
              onClick={() => setActiveTab("advantages")}
              className={`flex-1 py-2 text-sm font-medium rounded-full transition
            ${
              activeTab === "advantages"
                ? "bg-[#0B7D69] shadow text-white"
                : "text-gray-500"
            }`}
            >
              Solutions
            </button>
          </div>

          {/* CONTENT */}
          {activeTab === "frustrations" && (
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100">
                  <X className="text-red-500" size={14} />
                </span>
                <h3 className="font-semibold text-lg">Common Frustrations</h3>
              </div>

              <div className="space-y-4">
                {frustrations.map((item, index) => (
                  <div key={index} className="flex gap-3 text-sm text-gray-600">
                    <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-red-100">
                      <X className="text-red-500" size={12} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "advantages" && (
            <div className="bg-[#0B7D69] rounded-2xl shadow p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0f9e84]">
                  <Check className="text-white" size={16} />
                </span>
                <h3 className="font-semibold text-lg text-white">
                  SWIFTROOMS Solutions
                </h3>
              </div>

              <p className="text-xs text-white mb-4">
                Engineered specifically for UAE climate conditions, our premium
                aluminum systems transform your living experience.
              </p>

              <div className="space-y-4">
                {advantages.map((item, index) => (
                  <div key={index} className="flex gap-3 text-sm text-white">
                    <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-green-600">
                      <Check className="text-white" size={20} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <Link href="#products">
                <button className="mt-5 w-full bg-[#0B7D69] text-white py-3 rounded-lg text-sm flex items-center justify-center gap-2">
                  Explore Our Products
                  <FiArrowRight />
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100">
                <X className="text-red-500" size={14} />
              </span>
              <h3 className="font-semibold text-2xl">Common Frustrations</h3>
            </div>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 "
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
                  className="flex items-start gap-3 text-sm p-2 rounded-lg transition duration-200 hover:bg-white/20 cursor-pointer"
                >
                  <span className="mt-1 flex items-center justify-center rounded-full bg-green-600">
                    <Check className="text-white" size={18} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <Link href="#products">
              <button className="mt-5 w-full bg-[#0B7D69] text-white py-3 rounded-lg text-sm flex items-center justify-center gap-2">
                Explore Our Products
                <FiArrowRight />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
