import Image from "next/image";

export default function WhyChoose() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">

      {/* Left Pattern */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <Image
          src="/images/fill.png" // 👈 change if name is different
          alt="Decoration"
          width={180}
          height={180}
          className="opacity-70"
        />
      </div>

      {/* Right Pattern */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <Image
          src="/images/fill.png" // 👈 change if name is different
          alt="Decoration"
          width={180}
          height={180}
          className="opacity-70"
        />
      </div>

      {/* Content */}
      <div className="max-w-[1000px] mx-auto px-4 text-center relative z-10">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-10">
          Why choose a company like Swiftrooms as your glazing contractor?
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">

          Swift Rooms LLC, based in Dubai, is a premier provider of high-quality aluminum and glazing solutions, specializing in the design, manufacture, and installation of bespoke windows, doors, and architectural systems. With a commitment to excellence over the last 13 years, Swift Rooms combines innovative European designs with meticulous local craftsmanship, ensuring each product meets the highest standards of durability, aesthetics, and performance. Our dedicated team of experts offers personalized service, from initial consultation through to final installation, making sure that every project is tailored to the unique needs of our clients. Serving the UAE market with integrity and expertise, Swift Rooms LLC is a trusted name for those seeking superior solutions in the residential and commercial sectors.

        </p>

      </div>

    </section>
  );
}
