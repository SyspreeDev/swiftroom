import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaBullseye } from "react-icons/fa";

const TOTAL_LOGOS = 6;

const logos = Array.from({ length: TOTAL_LOGOS }, (_, i) => {
  return `/images/brands/logo${i + 1}.jpg`;
});

export default function Brands() {
  return (
    <section className="bg-[#0B7D69] py-20 overflow-hidden">
      
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl text-white mb-16">
        BRANDS WE WORK WITH
      </h2>

      {/* Only logos (no fixed container height) */}
      <Marquee
        speed={50}
        pauseOnHover={false}
        gradient={false}
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="mx-10 flex items-center"
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
      </Marquee>

    </section>
  );
}