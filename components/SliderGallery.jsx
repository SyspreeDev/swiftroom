// // "use client";

// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper/modules";

// // import "swiper/css";

// // const videos = [
// //   {
// //     video: "/videos/video1.mp4",
// //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //   },
// //   {
// //     video: "/videos/video2.mp4",
// //     text: "",
// //   },
// //   {
// //     video: "/videos/video3.mp4",
// //     text: "",
// //   },
// //   {
// //     video: "/videos/video4.mp4",
// //     text: "",
// //   },
// //   {
// //     video: "/videos/video5.mp4",
// //     text: "",
// //   },
// // ];

// // export default function VideoCarousel() {
// //   return (
// //     <section className="bg-gradient-to-b from-[#0B6F63] via-[#08796D] to-[#064F47] py-24">

// //       <div className="max-w-7xl mx-auto px-6 text-center text-white">

// //         {/* Heading */}
// //         <h2 className="text-3xl md:text-4xl font-bold mb-2">
// //           Experience Our Work in Motion
// //         </h2>

// //         <p className="text-white/80 mb-14 text-sm">
// //           Where design, detail, and motion come together
// //         </p>

// //         {/* Carousel */}
// //         <Swiper
// //           modules={[Autoplay]}
// //           autoplay={{
// //             delay: 3500,
// //             disableOnInteraction: false,
// //           }}
// //           loop
// //           centeredSlides
// //           slidesPerView={5}
// //           spaceBetween={24}
// //           breakpoints={{
// //             0: { slidesPerView: 1.2 },
// //             640: { slidesPerView: 2.5 },
// //             1024: { slidesPerView: 5 },
// //           }}
// //           className="pb-14"
// //         >
// //           {videos.map((item, i) => (
// //             <SwiperSlide key={i}>

// //               {({ isActive }) => (

// //                 <div
// //                   className={`relative rounded-xl overflow-hidden transition-all duration-500 shadow-xl
// //                   ${isActive ? "scale-110 z-10" : "scale-95 opacity-70"}`}
// //                 >

// //                   {/* Video */}
// //                   <video
// //                     src={item.video}
// //                     autoPlay
// //                     muted
// //                     loop
// //                     playsInline
// //                     className="w-full h-[340px] object-cover"
// //                   />

// //                   {/* Play Icon */}
// //                   <div className="absolute inset-0 flex items-center justify-center">
// //                     <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
// //                       ▶
// //                     </div>
// //                   </div>

// //                   {/* Text (only center) */}
// //                   {isActive && item.text && (
// //                     <div className="absolute bottom-3 left-3 right-3 bg-black/50 text-white text-xs rounded-lg p-3">
// //                       {item.text}
// //                     </div>
// //                   )}

// //                 </div>
// //               )}

// //             </SwiperSlide>
// //           ))}
// //         </Swiper>

// //         {/* Button */}
// //         <button className="bg-white text-[#0B6F63] px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition">
// //           Get a Quote
// //         </button>

// //       </div>
// //     </section>
// //   );
// // }
// 'use client';
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { FaInstagram } from "react-icons/fa";
// import Tilt from "react-parallax-tilt";

// import "swiper/css";
// import "swiper/css/navigation";

// const images = [
//   {
//     src: "/images/img1.jpg",
//     title: "CONTEMPORARY VILLA",
//     desc: "Premium aluminum windows and doors",
//   },
//   {
//     src: "/images/img2.jpg",
//     title: "SMART LIVING",
//     desc: "Future-ready systems",
//   },
//   {
//     src: "/images/img3.jpg",
//     title: "MODERN HOME",
//     desc: "Elegant glass solutions",
//   },
//   {
//     src: "/images/img1.jpg",
//     title: "CONTEMPORARY VILLA",
//     desc: "Premium aluminum windows and doors",
//   },
//   {
//     src: "/images/img2.jpg",
//     title: "SMART LIVING",
//     desc: "Future-ready systems",
//   },
//   {
//     src: "/images/img3.jpg",
//     title: "MODERN HOME",
//     desc: "Elegant glass solutions",
//   },
// ];

// export default function Slider() {
//   return (
//     <section id="gallery" className="relative pt-10 pb-16 md:pt-20 md:pb-28 min-h-auto md:min-h-[720px] overflow-visible">
//       {/* TITLE */}

//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ staggerChildren: 0.2 }}
//         className="text-center mb-12"
//       >
//         {/* TITLE */}
//         <motion.h2
//           variants={{
//             hidden: { opacity: 0, y: 40 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="text-3xl md:text-4xl text-gray-800"
//         >
//           Our Gallery
//         </motion.h2>

//         {/* SUBTEXT */}
//         <motion.p
//           variants={{
//             hidden: { opacity: 0, y: 30 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="text-gray-500 text-sm md:text-base mt-3"
//         >
//           Feel free to browse our work
//         </motion.p>

//         {/* INSTAGRAM LINE */}
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mt-3 flex items-center justify-center gap-2 text-sm md:text-base"
//         >
//           <span className="w-6 h-6 flex items-center justify-center">
//             <FaInstagram className="text-[#0B7D69] text-2xl" />
//           </span>

//           <span className="text-[#0B7D69] font-medium">@swiftrooms</span>

//           <span className="text-gray-400">•</span>

//           <span className="text-[#0B7D69]">Follow us for more</span>
//         </motion.div>
//       </motion.div>

//       {/* SLIDER */}
//       <Swiper
//         modules={[Navigation]}
//         navigation
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         spaceBetween={0} // 🔥 increased spacing
//         loop={true}
//         className="max-w-7xl mx-auto py-24 mt-6 overflow-visible"
//       >
//         {images.map((item, index) => (
//           <SwiperSlide
//             key={index}
//             className="!w-[300px] md:!w-[340px] lg:!w-[700px] flex items-center justify-center overflow-visible"
//           >
//             {({ isActive }) => {
//               const content = (
//                 <div
//                   className={`
//               relative rounded-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
//               ${
//                 isActive
//                   ? "z-30 scale-[1.1] group"
//                   : "opacity-30 z-10 pointer-events-none scale-90"
//               }
//                 `}
//                 >
//                   {/* GRADIENT BORDER WRAPPER */}
//                   <div className="p-[3px] rounded-xl transition-all duration-500 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#0B7D69]/40 group-hover:via-[#0B7D69] group-hover:to-[#0B7D69]/40 group-hover:shadow-[0_0_40px_rgba(11,125,105,0.5)]">
//                     {/* INNER CONTENT */}
//                     <div className="rounded-xl overflow-hidden bg-black/0">
//                       <img
//                         src={item.src}
//                         className="w-full object-cover rounded-xl transition-all duration-700"
//                       />

//                       {/* TEXT */}
//                       <div className="absolute bottom-4 left-4 text-white pointer-events-none">
//                         <h3 className="text-sm font-semibold">{item.title}</h3>
//                         <p className="text-xs text-gray-300">{item.desc}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );

//               return isActive ? (
//                 <Tilt
//                   tiltMaxAngleX={20}
//                   tiltMaxAngleY={20}
//                   scale={1.05}
//                   transitionSpeed={200}
//                   glareEnable={true}
//                   glareMaxOpacity={0.25}
//                   perspective={1200}
//                   className="transition-transform duration-200 hover:scale-[1.02]"
//                 >
//                   {content}
//                 </Tilt>
//               ) : (
//                 content
//               );
//             }}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { FaInstagram, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Tilt from "react-parallax-tilt";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const images = [
  {
    src: "/gallery/springs.png",
    title: "THE SPRINGS",
    desc: "Modern Exterior With Aluminium Installations",
  },
  {
    src: "/gallery/swiftrooms.png",
    title: "SWIFTROOMS",
    desc: "Premium Aluminium Structure Project",
  },
  {
    src: "/gallery/contempory-villa.png",
    title: "CONTEMPORY VILLA",
    desc: "Premium Aluminium Windows And Doors",
  },
  {
    src: "/gallery/jumeirah-golf.png",
    title: "JUMEIRAH GOLF ESTATES",
    desc: "Luxury Aluminium Structure Project",
  },
  {
    src: "/gallery/palm-jumeriah.png",
    title: "PALM JUMEIRAH",
    desc: "Luxury Aluminium Doors And Windows ",
  },
  {
    src: "/gallery/meadows.png",
    title: "THE MEADOWS",
    desc: "High End Aluminium Structure Solutions",
  },
  {
    src: "/gallery/dubai-hills.png",
    title: "DUBAI HILLS",
    desc: "Premium Residential Aluminium Installation",
  },
  {
    src: "/gallery/phillias-foggs.png",
    title: "PHILLIAS FOGGS",
    desc: "Custom Aluminium Installations",
  },
  {
    src: "/gallery/al-barari.png",
    title: "Al BARARI - THE NEST",
    desc: "Premium Aluminium Structures",
  },
  {
    src: "/gallery/damac-hills.png",
    title: "DAMAC HILLS",
    desc: "Luxury Aluminium Doors And Windows",
  },
  {
    src: "/gallery/arabian-ranches.png",
    title: "ARABIAN RANCHES",
    desc: "Premium Aluminium Architectural Solutions",
  },
  {
    src: "/gallery/damac-hills2.png",
    title: "DAMAC HILLS",
    desc: "Modern Aluminium Structure Project",
  },
  {
    src: "/gallery/umm-sequim.png",
    title: "UMM SEQUIMM",
    desc: "Contemporary Aluminium Installations",
  },
];

export default function SliderGallery() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <section
        id="gallery"
        className="relative pt-10 pb-16 md:pt-20 md:pb-28 bg-white overflow-hidden hidden md:block"
      >
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-2">
            Our Gallery
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 mb-2">
            Feel free to browse our work
          </p>

          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <FaInstagram className="text-[#0B7D69] text-xl" />
            <span className="text-[#0B7D69] font-medium">
              {" "}
              <a
                href="https://instagram.com/swiftrooms.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @swiftrooms.ae
              </a>
            </span>
            <span className="text-gray-400 mx-1">•</span>
            <span className="text-[#0B7D69]">Follow us for more</span>
          </div>
        </motion.div>

        {/* SLIDER CONTAINER */}
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          {/* LEFT NAVIGATION BUTTON */}
          <div className="prev-btn absolute left-4 md:left-24 top-1/2 -translate-y-1/2 z-50 w-[64px] h-[64px] flex items-center justify-center cursor-pointer group">
            {/* Circular Button Body */}
            <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center relative shadow-sm">
              {/* Inner Ring: Light by default, Solid/Thick on hover */}
              <div className="absolute inset-[4px] rounded-full border-[1.5px] border-[#0B7D69]/30 group-hover:border-[#0B7D69] group-hover:border-[2px] transition-all duration-300" />

              {/* Chevron Double Slider Animation */}
              <div className="relative flex items-center justify-center text-[#0B7D69]">
                {/* Ghost chevron that slides in from behind */}
                <FaChevronLeft
                  size={20}
                  className="absolute opacity-0 translate-x-2 group-hover:translate-x-[6px] group-hover:opacity-60 transition-all duration-300"
                />
                {/* Main chevron that pushes forward */}
                <FaChevronLeft
                  size={20}
                  className="relative group-hover:-translate-x-[4px] transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* RIGHT NAVIGATION BUTTON */}
          <div className="next-btn absolute right-4 md:right-24 top-1/2 -translate-y-1/2 z-50 w-[64px] h-[64px] flex items-center justify-center cursor-pointer group">
            {/* Circular Button Body */}
            <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center relative shadow-sm">
              {/* Inner Ring: Light by default, Solid/Thick on hover */}
              <div className="absolute inset-[4px] rounded-full border-[1.5px] border-[#0B7D69]/30 group-hover:border-[#0B7D69] group-hover:border-[2px] transition-all duration-300" />

              {/* Chevron Double Slider Animation */}
              <div className="relative flex items-center justify-center text-[#0B7D69]">
                {/* Ghost chevron that slides in from behind */}
                <FaChevronRight
                  size={20}
                  className="absolute opacity-0 -translate-x-2 group-hover:-translate-x-[6px] group-hover:opacity-60 transition-all duration-300"
                />
                {/* Main chevron that pushes forward */}
                <FaChevronRight
                  size={20}
                  className="relative group-hover:translate-x-[4px] transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <Swiper
            key={images.length}
            modules={[Navigation, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            // FIX ADDED: Forces Swiper to render enough clones to keep the loop populated
            // loopAdditionalSlides={5}
            slideToClickedSlide={true}
            observer={true}
            observeParents={true}
            speed={800}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              depth: 250,
              modifier: 1.2,
              slideShadows: false,
              scale: 0.85,
            }}
            className="!py-10"
            style={{ perspective: "1200px" }}
          >
            {images.map((item, index) => (
              <SwiperSlide
                key={index}
                className="!w-[280px] md:!w-[500px] !h-[350px] md:!h-[650px] flex items-center justify-center"
              >
                {({ isActive }) => (
                  <Tilt
                    tiltEnable={isActive}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    scale={isActive ? 1.02 : 1}
                    transitionSpeed={300}
                    className={`relative w-full h-full transition-opacity duration-300 ease-in-out bg-white shadow-xl overflow-hidden ${
                      isActive ? "opacity-100" : "opacity-60 cursor-pointer"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* BOTTOM LOGO WATERMARK */}
                    {isActive && (
                      <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                        <div className="text-left text-white">
                          {/* TITLE */}
                          <h3 className="font-semibold text-lg tracking-wide">
                            {item.title}
                          </h3>

                          {/* DESCRIPTION */}
                          <p className="text-sm text-white/80 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </Tilt>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="md:hidden mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-2">
            Our Gallery
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 mb-2">
            Feel free to browse our work
          </p>

          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <FaInstagram className="text-[#0B7D69] text-xl" />
            <span className="text-[#0B7D69] font-medium">
              {" "}
              <a
                href="https://instagram.com/swiftrooms.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @swiftrooms.ae
              </a>
            </span>
            <span className="text-gray-400 mx-1">•</span>
            <span className="text-[#0B7D69]">Follow us for more</span>
          </div>
        </motion.div>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={12}
          slidesPerView={1.1}
          loop={true}
          centeredSlides={true}
          className="px-4"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
