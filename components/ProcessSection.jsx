"use client";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Request Quote",
      desc: "Complete our quick form or call to get started.",
    },
    {
      id: "02",
      title: "Consultation Visit",
      desc: "Discuss your needs with our expert team & receive an accurate quote",
    },
    {
      id: "03",
      title: "Contract & Project Measurement",
      desc: "We confirm site measurements and issue your project contract.",
    },
    {
      id: "04",
      title: "Installation",
      desc: "Professional installation completed efficiently with minimal disruption.",
    },
    {
      id: "05",
      title: "Quality Assurance",
      desc: "Final inspection and warranty activation to ensure your complete satisfaction.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, // one by one
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  // Line animation
  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 2, // 🔥 after steps complete (adjust if needed)
      },
    },
  };

  return (
    <section className=" py-20 px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} // 🔥 start from bottom
        whileInView={{ opacity: 1, y: 0 }} // move up
        transition={{
          duration: 1,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide">
          SIMPLE 5-STEP PROCESS
        </h2>

        <p className="text-gray-800 text-xl mt-3">
          From quote to installation, we make it easy
        </p>
      </motion.div>
      {/* Timeline */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Line */}
        <motion.div
          variants={lineVariants}
          style={{ originX: 0 }} // 🔥 grow from left
          className="hidden md:block absolute top-8 left-20 right-20 h-[2px] bg-[#0B7D69]"
        />

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 text-center"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="flex flex-col items-center relative"
            >
              {/* Circle */}
              <div className="w-20 h-20 rounded-full bg-[#0B7D69] text-white flex items-center justify-center text-2xl font-medium shadow-md z-10">
                {step.id}
              </div>

              {/* Diamond */}
              <div className="w-4 h-4 rotate-45 border border-[#0B7D69] mt-6 mb-4"></div>

              {/* Title */}
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm max-w-[300px]">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
