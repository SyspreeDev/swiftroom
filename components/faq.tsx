"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How can I get a quotation or more information?",
    answer:
      "You can submit an enquiry via email at hello@swiftrooms.ae or visit the Swiftrooms showroom in Jebel Ali Industrial Area 1, Dubai to discuss your project needs.",
  },
  {
    question: "Where is the showroom located and when is it open?",
    answer:
      "Our showroom is located in Jebel Ali Industrial Area 1, Dubai. Please contact us for current opening hours.",
  },
  {
    question: "Do you manufacture and install your products?",
    answer:
      "Yes, we provide complete in-house manufacturing and professional installation services.",
  },
  {
    question: "Are your products made to standard sizes?",
    answer:
      "No, all our products are custom-made to suit your project requirements.",
  },
  {
    question: "Do I need approvals for glass rooms or window replacements?",
    answer:
      "Some projects may require approvals depending on location and scope. Our team will assist you.",
  },
  {
    question: "What materials are used in your doors and windows?",
    answer:
      "We use premium aluminium, uPVC, tempered glass, and high-quality hardware systems.",
  },
  {
    question: "Do you offer guarantees on your installations?",
    answer:
      "Yes, we offer warranty on both products and installation workmanship.",
  },
  {
    question: "What colour and finish options are available?",
    answer:
      "We offer a wide range of colours, powder coatings, and custom finishes.",
  },
  {
    question: "Who can benefit from Swiftrooms’ services?",
    answer:
      "Homeowners, developers, architects, and commercial clients can benefit from our services.",
  },
  {
    question: "How long will it take for my order to arrive?",
    answer:
      "Delivery time depends on project scope, typically between 4–8 weeks.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl text-black md:text-4xl font-medium text-center mb-8">
          Frequently asked questions
        </h2>

        <p className="text-center text-gray-700 mb-12 text-sm">
          Can’t find the answer here? Check out our{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Help Center
          </span>
          .
        </p>

        {/* FAQ List */}
        <div className="divide-y border-t border-b">

          {faqs.map((item, index) => (
            <div key={index} className="py-5">

              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left font-medium text-gray-900"
              >
                <span>{item.question}</span>

                {/* Arrow */}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 mt-3"
                    : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
