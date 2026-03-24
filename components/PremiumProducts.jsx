"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductSlider() {
  const products = [
    {
      title: "Skylights and Garden Rooms",
      desc: "Premium roof windows and skylights that flood interiors with natural light.",
      tag: "Outdoor Spaces",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Aluminum Sliding Doors",
      desc: "Sleek sliding doors with smooth operation, perfect for balconies and terraces.",
      tag: "Doors",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
    {
      title: "Bi-Fold Doors",
      desc: "Premium folding doors that seamlessly connect indoor and outdoor spaces.",
      tag: "Doors",
      img: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
    },
    {
      title: "UPVC Windows",
      desc: "Energy efficient windows designed for durability and insulation.",
      tag: "Windows",
      img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    },
    {
      title: "Casement Windows",
      desc: "Stylish casement windows designed for maximum ventilation and energy efficiency.",
      tag: "Windows",
      img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
    },
    {
      title: "Glass Curtain Walls",
      desc: "Modern curtain wall systems that enhance building aesthetics and natural lighting.",
      tag: "Facade",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    },
    {
      title: "Pergola Systems",
      desc: "Elegant pergola solutions for outdoor living spaces with durability and style.",
      tag: "Outdoor Spaces",
      img: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
  ];

  return (
    <section id="products" className="bg-gray-100 py-16 px-6">
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8, // ✅ sweet spot
          ease: [0.22, 1, 0.36, 1], // ✅ smoother easing
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-medium">Our Premium Products</h2>

        <p className="text-gray-700 text-xl mt-2">
          High-quality aluminum and UPVC solutions for UAE's climate
        </p>
      </motion.div>

      {/* Slider Wrapper (IMPORTANT: relative) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-7xl mx-auto"
      >
        {/* Left Arrow */}
        <button className="custom-prev cursor-pointer absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
          <FaChevronLeft className="text-[#0B7D69] text-sm" />
        </button>

        {/* Right Arrow */}
        <button className="custom-next cursor-pointer absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
          <FaChevronRight className="text-[#0B7D69] text-sm" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden relative shadow group transition duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="absolute font-semibold top-4 right-4 bg-[#0B7D69] text-xs px-3 py-1 rounded-full">
                    {item.tag}
                  </span>

                  <h3 className="text-2xl font-medium mb-2">{item.title}</h3>

                  <p className="text-sm mb-4">{item.desc}</p>

                  <button className="bg-white text-[#0B7D69] px-4 py-2 rounded-md text-sm w-fit transition duration-300 hover:bg-[#0B7D69] hover:text-white">
                    Get A Quote
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
