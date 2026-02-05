"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const gallery = [
  { img: "/images/gallery/spring.png", title: "THE SPRINGS" },
  { img: "/images/gallery/dubai.png", title: "DUBAI HILLS" },
  { img: "/images/gallery/palm.png", title: "PALM JUMEIRAH" },
  { img: "/images/gallery/damac1.png", title: "DAMAC HILLS" },

  { img: "/images/gallery/nest.png", title: "AL BARARI - THE NEST" },
  { img: "/images/gallery/jumeirah.png", title: "JUMEIRAH" },
  { img: "/images/gallery/damac2.png", title: "DAMAC HILLS" },
  { img: "/images/gallery/ranches.png", title: "ARABIAN RANCHES" },

  { img: "/images/gallery/golf.png", title: "JUMEIRAH GOLF ESTATES" },
  { img: "/images/gallery/meadows.png", title: "THE MEADOWS" },
  { img: "/images/gallery/foggs.png", title: "PHILLIAS FOGGS" },
  { img: "/images/gallery/villa.png", title: "THE VILLA" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  /* Close on ESC */
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-black text-3xl md:text-4xl font-medium mb-8">
            A Gallery of Timeless Craftsmanship
          </h2>

          <p className="text-gray-500 text-sm md:text-base">
            Where precision, detail, and design come together in perfect harmony
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {gallery.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="group relative overflow-hidden shadow-md cursor-pointer rounded-lg"
            >
              {/* Image */}
              <div className="relative w-full h-[230px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

              {/* Title */}
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-xl font-medium tracking-wide">
                  | {item.title}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center p-4 animate-fadeIn"
        >
          {/* Stop close when clicking image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-2xl pt-15 pb-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-50 text-black text-3xl hover:scale-110 transition pt-6 pr-6 "
            >
              ×
            </button>

            {/* Big Image */}
            <div className="relative w-full h-[80vh] ">
              <Image
                src={gallery[selected].img}
                alt={gallery[selected].title}
                fill
                className="object-contain"
              />
            </div>

            {/* Title */}
            <div className="text-center py-4 bg-white">
              <p className="text-black text-xl font-semibold tracking-wide pt-6">
                {gallery[selected].title}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
