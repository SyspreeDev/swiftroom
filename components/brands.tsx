import Image from "next/image";

const TOTAL_LOGOS = 6; // 👈 Change this to how many logos you have

const logos = Array.from({ length: TOTAL_LOGOS }, (_, i) => {
  return `/images/brands/logo${i + 1}.jpg`;
});

export default function Brands() {
  return (
    <section className="bg-white py-14 overflow-hidden">

      {/* Title */}
      <h2 className="text-center text-xl tracking-widest text-gray-500 font-medium mb-14">
        BRANDS THAT TRUST US
      </h2>

      {/* Slider */}
      <div className="relative w-full">

        <div className="flex w-max animate-scroll gap-16">

          {/* First set */}
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px]"
            >
              <Image
                src={logo}
                alt={`Brand ${i + 1}`}
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
          ))}

          {/* Duplicate set (for infinite loop) */}
          {logos.map((logo, i) => (
            <div
              key={`dup-${i}`}
              className="flex items-center justify-center min-w-[160px]"
            >
              <Image
                src={logo}
                alt={`Brand ${i + 1}`}
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
