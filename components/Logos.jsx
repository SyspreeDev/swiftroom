'use client'

import Image from "next/image";
import Marquee from "react-fast-marquee";
import {motion} from "framer-motion"

const TOTAL_LOGOS = 6;

const logos = Array.from({ length: TOTAL_LOGOS }, (_, i) => {
  return `/images/brands/logo${i + 1}.jpg`;
});

// Duplicate to ensure content always exceeds desktop viewport width
const duplicatedLogos = [...logos, ...logos, ...logos];

export default function Brands() {
  return (
    <section className="bg-[#0B7D69] py-40 overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }} // 🔥 start from bottom
        whileInView={{ opacity: 1, y: 0 }} // move up
        transition={{
          duration: 1,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl text-white mb-16"
      >
        BRANDS WE WORK WITH
      </motion.h2>

      <Marquee speed={50} pauseOnHover={false} gradient={false}>
        {duplicatedLogos.map((logo, i) => (
          <div key={i} className="mx-10 flex items-center">
            <Image
              src={logo}
              alt={`Brand ${(i % TOTAL_LOGOS) + 1}`}
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
