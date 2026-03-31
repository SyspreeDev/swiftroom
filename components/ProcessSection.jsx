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

  const cardHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.08,
      transition: { type: "spring", stiffness: 160, damping: 12 },
    },
  };

  const circleVariants = {
    rest: {
      scale: 1,
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    },
    hover: {
      scale: 1.15,
      boxShadow: "0px 12px 30px rgba(11,125,105,0.35)", // green glow
      transition: { duration: 0.4 },
    },
  };

  const diamondVariants = {
    rest: {
      rotate: 45,
      scale: 1,
      borderWidth: "1px",
    },
    hover: {
      rotate: 405,
      scale: 1.4,
      borderWidth: "2px",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  return (
    <>
      <section
        id="process"
        className="py-20 px-6 hidden sm:block overflow-hidden relative"
      >
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
          initial={{ opacity: 0, y: 40 }} // 🔥 start from bottom
          whileInView={{ opacity: 1, y: 0 }} // move up
          transition={{
            duration: 1,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
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
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="flex flex-col items-center relative cursor-pointer"
              >
                {/* Circle */}
                <motion.div
                  variants={circleVariants}
                  className="w-20 h-20 rounded-full bg-[#0B7D69] text-white flex items-center justify-center text-2xl font-medium z-10"
                >
                  {step.id}
                </motion.div>

                {/* Diamond (styled like image) */}
                <motion.div
                  variants={diamondVariants}
                  className="w-7 h-7 mt-6 mb-4 border border-[#0B7D69] relative flex items-center justify-center"
                >
                  {/* inner diamond border */}
                  <div className="absolute inset-1 border border-[#0B7D69]"></div>

                  {/* 🔥 Ball circles */}
                  <div className="absolute w-[4px] h-[4px] rounded-full bg-[#0B7D69] shadow-[0_1px_2px_rgba(0,0,0,0.2)] top-1 left-1"></div>
                  <div className="absolute w-[4px] h-[4px] rounded-full bg-[#0B7D69] shadow-[0_1px_2px_rgba(0,0,0,0.2)] top-1 right-1"></div>
                  <div className="absolute w-[4px] h-[4px] rounded-full bg-[#0B7D69] shadow-[0_1px_2px_rgba(0,0,0,0.2)] bottom-1 left-1"></div>
                  <div className="absolute w-[4px] h-[4px] rounded-full bg-[#0B7D69] shadow-[0_1px_2px_rgba(0,0,0,0.2)] bottom-1 right-1"></div>

                  {/* center ball */}
                  <div className="absolute w-[5px] h-[5px] rounded-full bg-[#0B7D69] shadow-[0_1px_3px_rgba(0,0,0,0.25)]"></div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm max-w-[300px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="process" className="py-20 px-6 block md:hidden">
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

        <motion.div
          className="md:hidden grid grid-cols-2 gap-y-12 gap-x-6 mt-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`flex flex-col items-center ${
                index === steps.length - 1 ? "col-span-2" : ""
              }`}
            >
              {/* Circle */}
              <div className="w-16 h-16 rounded-full bg-[#0B7D69] text-white flex items-center justify-center text-lg font-medium">
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-base font-medium text-gray-800 mt-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs max-w-[140px] mt-2">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
