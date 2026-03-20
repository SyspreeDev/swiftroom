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

  return (
    <section className="bg-[#f3f5f4] py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide">
          SIMPLE 5-STEP PROCESS
        </h2>
        <p className="text-gray-500 mt-3">
          From quote to installation, we make it easy
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Line */}
        <div className="hidden md:block absolute top-8 left-20 right-20 h-[2px] bg-[#0B7D69]" />

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {/* Circle */}
              <div className="w-20 h-20 rounded-full bg-[#0B7D69] text-white flex items-center justify-center text-lg font-semibold shadow-md z-10">
                {step.id}
              </div>

              {/* Diamond */}
              <div className="w-4 h-4 rotate-45 border border-[#0B7D69] mt-6 mb-4"></div>

              {/* Title */}
              <h3 className="text-xl font-medium text-gray-800 mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
