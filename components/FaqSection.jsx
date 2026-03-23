'use client'

import { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white min-h-screen py-20 px-5">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl text-[#0f2d27] mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5a7a72] text-base">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                className={`bg-white rounded-xl border cursor-pointer transition-all duration-200
                  ${
                    isOpen
                      ? "border-[#0B7D69] shadow-[0_4px_20px_rgba(11,125,105,0.12)]"
                      : "border-[#e0eae7] shadow-sm hover:border-[#0B7D69]/40"
                  }`}
              >
                {/* Question Row */}
                <div className="flex items-center justify-between px-6 py-5">
                  <span className="font-semibold text-[0.95rem] text-[#0f2d27] leading-snug pr-4">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200
                      ${isOpen ? "bg-[#0B7D69]" : "bg-[#e8f0ee]"}`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                    >
                      <line
                        x1="6"
                        y1="0"
                        x2="6"
                        y2="12"
                        stroke={isOpen ? "#fff" : "#0B7D69"}
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="0"
                        y1="6"
                        x2="12"
                        y2="6"
                        stroke={isOpen ? "#fff" : "#0B7D69"}
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-350 ease-in-out
                    ${isOpen ? "max-h-96" : "max-h-0"}`}
                >
                  <p className="px-6 pb-5 text-[#4a6b63] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-600 text-lg mb-4">Still have questions?</p>
          <button className="bg-[#0B7D69] hover:bg-[#095f50] text-white px-8 py-3.5 rounded-lg text-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
