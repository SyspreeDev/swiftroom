"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // ⬅️ slower stagger (increase if needed)
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }, // ⬅️ slower animation
  },
};

const faqs = [
  {
    question: "How much do windows and doors cost in Dubai?",
    answer:
      "The cost varies depending on size, specifications, and customization. We offer competitive pricing starting from AED 750 per square meter for standard aluminium windows. For an accurate quote tailored to your specific needs, we recommend scheduling a free consultation where our experts will assess your requirements and provide a detailed estimate.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation timelines depend on the scope of the project. A standard residential installation typically takes 1–3 days, while larger commercial projects may take longer. Our team will provide a clear timeline during your consultation.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes, all our products come with a manufacturer's warranty, and we provide a workmanship warranty on all installations. Warranty duration varies by product — please ask our team for specific details.",
  },
  {
    question: "Are your products suitable for Dubai's climate?",
    answer:
      "Absolutely. Our aluminium windows and doors are specifically engineered to withstand Dubai's extreme heat, humidity, and sandstorms. They feature thermal breaks and UV-resistant coatings to ensure longevity and energy efficiency.",
  },
  {
    question: "Do you provide free measurements and quotes?",
    answer:
      "Yes, we offer complimentary on-site measurements and detailed quotations. Our team will visit your property at a time that suits you and provide a transparent, itemized quote with no hidden charges.",
  },
  {
    question: "Which areas do you serve in UAE?",
    answer:
      "We serve all major areas across the UAE including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, and Fujairah. Contact us to confirm availability in your specific location.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faqs" className="bg-white min-h-screen py-20 px-5 relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl text-[#0f2d27] mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 text-base">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                onClick={() => toggle(i)}
                initial={{ opacity: 0, y: 30 }} // ⬅️ reduced distance
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8, // ⬅️ slower
                  delay: i * 0.12, // ⬅️ softer stagger
                  ease: [0.22, 1, 0.36, 1], // ⬅️ smooth cubic-bezier (very important)
                }}
                className={`bg-white rounded-xl border cursor-pointer transition-all duration-300
    ${
      isOpen
        ? "border-[#0B7D69] shadow-[0_4px_20px_rgba(11,125,105,0.12)]"
        : "border-[#e0eae7] shadow-sm hover:border-[#0B7D69]/40"
    }`}
              >
                {/* Question Row */}
                <div className="flex items-center justify-between px-6 py-5">
                  <span className="font-medium text-lg text-[#0f2d27] pr-4">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center
                ${isOpen ? "bg-[#0B7D69]" : "bg-[#e8f0ee]"}`}
                  >
                    <FiPlus
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-white" : "text-[#0B7D69]"
                      }`}
                    />
                  </span>
                </div>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-[#4a6b63] text-sm">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.3, // ⬅️ whole block comes slightly late
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mt-14"
        >
          <p className="text-gray-600 text-lg mb-4">Still have questions?</p>

          <a
            href="#cta"
            className="bg-[#0B7D69] hover:bg-[#095f50] text-white px-8 py-3.5 rounded-lg text-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 inline-block"
          >
            Get Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
