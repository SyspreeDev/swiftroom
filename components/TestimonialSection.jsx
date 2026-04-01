"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaGoogle,
} from "react-icons/fa";

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    loop: true,
  });

  const testimonials = [
    {
      name: "Miguel Duarte",
      time: "Recently",
      text: `The team was great during the whole process! Yaseen was very helpful in making sure I was choosing the right product and Jibran was very helpful in making sure the installation ran smoothly. The team was quick, effective and clean during the installation. Overall great service.`,
    },
    {
      name: "Shalini Wijeratna",
      time: "Recently",
      text: `We had a fantastic experience working with this company for the installation of our bi-folding doors. From start to finish, the service was professional, efficient, and genuinely customer-focused. A special thank you to Sayeed, who coordinated everything seamlessly. William handled our initial consultation and took the time to explain all the options clearly. The final result is exactly what we hoped for – high-quality doors that have transformed our space.`,
    },
    {
      name: "Emma Sangster",
      time: "Recently",
      text: `Swift Rooms installed 2 sets of bifold doors for me. I was extremely happy with the whole process, from start to finish. The doors are of great quality and the price was extremely competitive compared to other well known companies. The real test was when we experienced the terrible storms last year..... I can safely say that the windows were perfect, and withheld the wind and rain!! Highly recommended!!!!`,
    },
    {
      name: "Brett McGeehan",
      time: "Recently",
      text: `Jibran and his team removed old and fitted a number of new windows. The service from the planning to fitting was excellent. Regular updates and efficient fitting with minimal disruptions to my family. Quality is great. Definitely use again`,
    },
    {
      name: "Alina Vlad",
      time: "Recently",
      text: `Swift rooms was recommended to us by a friend and their response was incredibly prompt and professional. Yaseen, the Sales Director was exceptionally helpful, took time to explain in detail the options for different frames and the installation process and sent photos and videos of previous installations the company has done. Overall very pleased with their service.`,
    },
    {
      name: "Lucy Horsham",
      time: "Recently",
      text: `Shout out to Imran Mani and his team who came to sort the snagging we had following installation of our bifold doors. Imran was professional and efficient and worked through all of the things I asked for step by step. I was really impressed with his work and knowledge. Thank you!`,
    },
    {
      name: "Ayla Nayal",
      time: "Recently",
      text: `A wonderful team with great expertise and professional skills. Murad has been my main point of contact, always available to answer my endless queries, and giving me the best solutions to fit my concerns. The project manager and senior project manager, Jibran and Gerald, were also super responsive and made sure that all my requests were met to the highest standards. Many thanks to the entire team at Swift Rooms.`,
    },
    {
      name: "Stacy Stewart",
      time: "Recently",
      text: `No words, simply amazing service. The Swiftrooms team called me out of the blue to provide a service call free of charge. They took the time to inspect all the doors and windows to ensure that all the seals, brushes, and door alignment were perfect. This is such important work during these Dubai summer months. Imran and the maintenance team were simply amazing. I would highly recommend this company.`,
    },
    {
      name: "Masroor Batin",
      time: "Recently",
      text: `Had a good experience dealing with Swiftrooms replacing our sliding / bifold doors for the villa. Found the process transparent, engaging and the end result to our satisfaction. It's been a fantastic change from the quality of the doors from the previous vendor. Recommend them for anyone looking to replace door / windows in their villa`,
    },
    {
      name: "Tim Draper",
      time: "Recently",
      text: `Swiftrooms did an amazing job fitting new windows to our place, they fabricated a complex shaped window in PVC which fitted perfectly. The work on the windows they fitted was done with care. The team were thorough, friendly and very well organised. I was impressed with the job they did and would definitely recommend using Swiftrooms to anyone. First class job, well done.`,
    },
    {
      name: "Sonali Ahluwalia",
      time: "Recently",
      text: `We have had a great experience from start to finish with Swiftrooms. Great job by Murad and Jibran with his team. There was excellent communication throughout and we appreciate that.`,
    },
    {
      name: "Immy X",
      time: "Recently",
      text: `These guys are good. I recently got bifolding doors, some windows and the ever necessary fly screens from Swift Rooms. Great service from the start, installation team that actually were experts in what they were doing, spot on. Credit to Yaseen, Imran Mani, Kumar and Prabath. Ultimately great product at right price and the wife is happy, which in itself is an achievement, believe me.`,
    },
    {
      name: "Christine Travis",
      time: "Recently",
      text: `We have been using these bifold for over a year now, quality is outstanding. Brilliant service from start to finish, everything came out perfectly. It was so easy to deal with Yasmeen and his team members. We are absolutely satisfied with the doors and would highly recommend this company to anyone.`,
    },
    {
      name: "Yaqoob Albelooshi",
      time: "Recently",
      text: `Recently purchased a product from Swift Room, and I must say that their after-sale services were truly outstanding. The level of support and assistance I received post-purchase exceeded my expectations. It's clear that they value their customers and are committed to providing top-notch service. I would like to mention Gerald and his technical teams Issac and the programme manager Amir Saif for their exceptional cooperations and response.`,
    },
    {
      name: "Dominique Dondelinger",
      time: "Recently",
      text: `We had bifold doors fitted by swift rooms and would strongly recomend them. Yaseen (sales/owner) was very knowledgeable and William (measurements and on site visits) was very professionale. Even the fitter, Mazkhan was respectfull and did a quality job. The quality, colour match with developer and glass are spot on. Honestly for the money paid i wouldnt waste time going anywhere else.`,
    },
    {
      name: "Sultan Al-Sulaiman",
      time: "Recently",
      text: `I must say that Swift Rooms experience that I had was amazing. From design, selecting, to all the way to delivery everything went flawlessly. The work etiquette and professionalism was great. I would highly recommend them especially the person I dealt with was Mr Yaseen who made this all happen smoothly.`,
    },
    {
      name: "Nicholas Jones",
      time: "Recently",
      text: `Can't recommend enough. Team were polite, tidy and always going the extra mile. They gave great advice and tried to upsell. Will be using for the rest of ours upgrades`,
    },
    {
      name: "Paul Herinx",
      time: "Recently",
      text: `I was in contact with Yaseen from Swift Rooms and the experience was excellent. Highest quality of systems is being used and Yaseen was able to give me excellent detailed service throughout the whole proces, from initial quotation to installation and aftercare. Highly recommended!`,
    },
    {
      name: "Tariq Alyasi",
      time: "Recently",
      text: `Had a very good experience and excellent support during the recent heavy rain leak i had with my skylights. Special thanks goes to Ms Richa, Maaz team and Kumar team for their support, work and follow up.`,
    },
    {
      name: "Reefaya Noortaj",
      time: "Recently",
      text: "Where do I begin with SwiftRooms amazing durable work. 12 years on and still going strong with our glass roof installation at our Al Badia Residence apartment. I highly recommend SwiftRooms for glass roof installation. You will be guaranteed with great products and services!",
    },
  ];

  return (
    <section id="testimonials" className="bg-white/40 py-20 px-6 relative">
      {/* Heading */}

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="text-center mb-12 relative z-10"
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
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          What Our Clients Say
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
          className="text-gray-500 text-lg mt-3"
        >
          Don&apos;t just take our word for it—hear from our satisfied customers
          across the UAE
        </motion.p>

        {/* RATING */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-center gap-2 mt-4 text-xl"
        >
          <div className="flex text-[#f59e0b]">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <span className="font-bold text-gray-800 text-xl">5.0</span>

          <span className="text-gray-500 text-sm">
            Based on 49+ Google reviews
          </span>
        </motion.div>
      </motion.div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 🔹 Left Button */}
        <button
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          className="absolute left-0 sm:left-2 md:left-10 lg:left-30 top-1/2  w-9 h-9 sm:w-10 sm:h-10 bg-white  rounded-full shadow-md flex items-center justify-center z-10"
        >
          <FaChevronLeft className="text-[#0B7D69] text-xs sm:text-sm" />
        </button>

        {/* 🔹 Right Button */}
        <button
          onClick={() => emblaApi && emblaApi.scrollNext()}
          className="absolute right-0 sm:right-2 md:right-10 lg:right-30 top-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10"
        >
          <FaChevronRight className="text-[#0B7D69] text-xs sm:text-sm" />
        </button>

        {/* 🔹 Embla Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex"
          >
            {testimonials.map((item, index) => (
              <div key={index} className="min-w-full flex justify-center">
                {/* 🔹 Card */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8  shadow-md sm:shadow-lg md:shadow-[0_20px_60px_rgba(0,0,0,0.08)] w-full max-w-md sm:max-w-xl md:max-w-3xl">
                  {/* ⭐ Stars */}
                  <div className="flex text-[#f59e0b] mb-3 text-base sm:text-lg">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* 📝 Text */}
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-5">
                    "{item.text}"
                  </p>

                  {/* 🔻 Bottom */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-gray-200 pt-4">
                    {/* Name */}
                    <div>
                      <h4 className="font-semibold text-gray-800 text-base sm:text-lg">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.time}</p>
                    </div>

                    {/* Google Badge */}
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs sm:text-sm w-fit">
                      <img
                        src="/images/google.png"
                        alt="Google"
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                      />
                      <span className="text-[#0B7D69] font-medium">Google</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
