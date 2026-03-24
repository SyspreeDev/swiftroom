// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// const videos = [
//   {
//     video: "/videos/video1.mp4",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     video: "/videos/video2.mp4",
//     text: "",
//   },
//   {
//     video: "/videos/video3.mp4",
//     text: "",
//   },
//   {
//     video: "/videos/video4.mp4",
//     text: "",
//   },
//   {
//     video: "/videos/video5.mp4",
//     text: "",
//   },
// ];

// export default function VideoCarousel() {
//   return (
//     <section className="bg-gradient-to-b from-[#0B6F63] via-[#08796D] to-[#064F47] py-24">

//       <div className="max-w-7xl mx-auto px-6 text-center text-white">

//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-2">
//           Experience Our Work in Motion
//         </h2>

//         <p className="text-white/80 mb-14 text-sm">
//           Where design, detail, and motion come together
//         </p>

//         {/* Carousel */}
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{
//             delay: 3500,
//             disableOnInteraction: false,
//           }}
//           loop
//           centeredSlides
//           slidesPerView={5}
//           spaceBetween={24}
//           breakpoints={{
//             0: { slidesPerView: 1.2 },
//             640: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 5 },
//           }}
//           className="pb-14"
//         >
//           {videos.map((item, i) => (
//             <SwiperSlide key={i}>

//               {({ isActive }) => (

//                 <div
//                   className={`relative rounded-xl overflow-hidden transition-all duration-500 shadow-xl
//                   ${isActive ? "scale-110 z-10" : "scale-95 opacity-70"}`}
//                 >

//                   {/* Video */}
//                   <video
//                     src={item.video}
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     className="w-full h-[340px] object-cover"
//                   />

//                   {/* Play Icon */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
//                       ▶
//                     </div>
//                   </div>

//                   {/* Text (only center) */}
//                   {isActive && item.text && (
//                     <div className="absolute bottom-3 left-3 right-3 bg-black/50 text-white text-xs rounded-lg p-3">
//                       {item.text}
//                     </div>
//                   )}

//                 </div>
//               )}

//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Button */}
//         <button className="bg-white text-[#0B6F63] px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition">
//           Get a Quote
//         </button>

//       </div>
//     </section>
//   );
// }
'use client';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaInstagram } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  {
    src: "/images/img1.jpg",
    title: "CONTEMPORARY VILLA",
    desc: "Premium aluminum windows and doors",
  },
  {
    src: "/images/img2.jpg",
    title: "SMART LIVING",
    desc: "Future-ready systems",
  },
  {
    src: "/images/img3.jpg",
    title: "MODERN HOME",
    desc: "Elegant glass solutions",
  },
  {
    src: "/images/img1.jpg",
    title: "CONTEMPORARY VILLA",
    desc: "Premium aluminum windows and doors",
  },
  {
    src: "/images/img2.jpg",
    title: "SMART LIVING",
    desc: "Future-ready systems",
  },
  {
    src: "/images/img3.jpg",
    title: "MODERN HOME",
    desc: "Elegant glass solutions",
  },
];

export default function Slider() {
  return (
    <section className="relative pt-10 pb-16 md:pt-20 md:pb-28 min-h-auto md:min-h-[720px] overflow-visible">
      {/* TITLE */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="text-center mb-12"
      >
        {/* TITLE */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-3xl md:text-4xl text-gray-800"
        >
          Our Gallery
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-gray-500 text-sm md:text-base mt-3"
        >
          Feel free to browse our work
        </motion.p>

        {/* INSTAGRAM LINE */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-3 flex items-center justify-center gap-2 text-sm md:text-base"
        >
          <span className="w-6 h-6 flex items-center justify-center">
            <FaInstagram className="text-[#0B7D69] text-2xl" />
          </span>

          <span className="text-[#0B7D69] font-medium">@swiftrooms</span>

          <span className="text-gray-400">•</span>

          <span className="text-[#0B7D69]">Follow us for more</span>
        </motion.div>
      </motion.div>

      {/* SLIDER */}
      <Swiper
        modules={[Navigation]}
        navigation
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={0} // 🔥 increased spacing
        loop={true}
        className="max-w-7xl mx-auto py-24 mt-6 overflow-visible"
      >
        {images.map((item, index) => (
          <SwiperSlide
            key={index}
            className="!w-[300px] md:!w-[340px] lg:!w-[700px] flex items-center justify-center overflow-visible"
          >
            {({ isActive }) => {
              const content = (
                <div
                  className={`
              relative rounded-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isActive
                  ? "z-30 scale-[1.1] group"
                  : "opacity-30 z-10 pointer-events-none scale-90"
              }
                `}
                >
                  {/* GRADIENT BORDER WRAPPER */}
                  <div className="p-[3px] rounded-xl transition-all duration-500 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#0B7D69]/40 group-hover:via-[#0B7D69] group-hover:to-[#0B7D69]/40 group-hover:shadow-[0_0_40px_rgba(11,125,105,0.5)]">
                    {/* INNER CONTENT */}
                    <div className="rounded-xl overflow-hidden bg-black/0">
                      <img
                        src={item.src}
                        className="w-full object-cover rounded-xl transition-all duration-700"
                      />

                      {/* TEXT */}
                      <div className="absolute bottom-4 left-4 text-white pointer-events-none">
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                        <p className="text-xs text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );

              return isActive ? (
                <Tilt
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  scale={1.05}
                  transitionSpeed={200}
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  perspective={1200}
                  className="transition-transform duration-200 hover:scale-[1.02]"
                >
                  {content}
                </Tilt>
              ) : (
                content
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
