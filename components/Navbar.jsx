"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar({ setStep }) {
  const links = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "Process", id: "process" },
    { name: "Brands", id: "brands" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Gallery", id: "gallery" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQs", id: "faqs" },
  ];

  const [active, setActive] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setActive(window.location.hash.replace("#", ""));
    };

    updateHash(); // on load
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const [open, setOpen] = useState(false);

  // 🔥 Navbar animation
  // Navbar animation
  const navVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1], // smoother cubic-bezier
        when: "beforeChildren",
        staggerChildren: 0.06, // slightly faster
      },
    },
  };

  // Menu items animation
  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  // CTA animation (FIXED)
  const ctaVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.8, 0.25, 1],
        delay: 0.8, // small delay (not too much)
      },
    },
  };

  const menuVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // controls one-by-one speed
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: "linear", // no lag, smooth
      },
    },
  };

  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleCTAClick = (e) => {
    // Prevent default Link behavior if you want custom logic
    setStep(2);

    // Smooth scroll to the section
    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="w-full font-poppins fixed top-0 left-0 z-50 bg-white"
    >
      {/* ================= MAIN NAV ================= */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-4 relative">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 absolute left-1/2 -translate-x-1/2  md:static md:translate-x-0">
            <Link href="/" className="flex items-center">
              {/* Desktop Logo */}
              <Image
                src="/images/logo.png"
                alt="SwiftRooms"
                width={180}
                height={50}
                className="object-contain hidden md:block"
              />

              {/* Mobile Logo */}
              <Image
                src="/images/circle.png"
                alt="SwiftRooms"
                width={48}
                height={40}
                className="object-contain block md:hidden"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <motion.nav className="hidden md:flex items-center gap-4 text-[14px] font-medium whitespace-nowrap">
            {links?.map((item) => {
              const href = isHome ? `#${item.id}` : `/#${item.id}`;

              return (
                <motion.a
                  key={item.name}
                  href={href}
                  variants={itemVariants}
                  className={`px-3 py-2 transition-all duration-300
            ${
              pathname === href
                ? "bg-[#E6F4F1] text-[#0B6F63]"
                : "text-gray-700 hover:bg-[#E6F4F1] hover:text-[#0B6F63]"
            }
          `}
                >
                  {item.name}
                </motion.a>
              );
            })}
          </motion.nav>

          {/* CTA */}
          <motion.div
            variants={ctaVariants}
            className="hidden md:flex flex-shrink-0"
          >
            {/* <Link href="/#cta">
              <button className="bg-[#0B7D69] text-white px-5 py-2.5 rounded-lg text-[13px] font-medium shadow-md hover:bg-[#09695a] transition duration-300">
                Get Quote | Visit Showroom
              </button>
            </Link> */}
            <button
              onClick={handleCTAClick}
              className="bg-[#0B7D69] text-white px-5 py-2.5 rounded-lg text-[13px] font-medium shadow-md hover:bg-[#09695a] transition duration-300 cursor-pointer"
            >
              Get Quote | Visit Showroom
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto text-[#09695a]"
          >
            {open ? <X size={26} /> : <Menu size={35} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 md:hidden flex flex-col justify-between"
          >
            {/* TOP */}
            <div className="relative flex items-center px-6 py-4">
              {/* CENTER LOGO */}
              {/* CENTER LOGO */}
              <motion.div
                initial={{ rotate: 0, opacity: 1 }}
                animate={
                  open
                    ? {
                        rotate: 12, // slight tilt right
                      }
                    : {
                        rotate: 0,
                        opacity: 1, // appear back
                      }
                }
                transition={{
                  duration: 0.25,
                  ease: "linear", // no weird slowdown
                }}
                className="absolute left-1/2 -translate-x-1/2"
              >
                <Image
                  src="/images/circle.png"
                  alt="logo"
                  width={50}
                  height={40}
                />
              </motion.div>
              {/* CLOSE BUTTON (RIGHT) */}
              <div className="ml-auto">
                <button onClick={() => setOpen(false)}>
                  <X size={40} className="text-[#0B7D69]" />
                </button>
              </div>
            </div>

            {/* MENU CENTER */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{
                duration: 0.28,
                ease: "linear", // constant smooth motion (no slowdown)
              }}
              className="flex flex-col items-center justify-center gap-4 text-xl font-medium text-gray-300"
            >
              {links.map((item) => {
                const href = isHome ? `#${item.id}` : `/#${item.id}`;

                return (
                  <a
                    key={item.name}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`pb-1 border-b transition
          ${
            active === item.id
              ? "text-[#0B7D69] border-[#0B7D69]"
              : "text-gray-800 border-gray-300 hover:text-[#0B7D69]"
          }
        `}
                  >
                    {item.name}
                  </a>
                );
              })}
            </motion.div>

            {/* BOTTOM */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="text-center text-xs text-gray-500 pb-6 px-6 space-y-2"
            >
              <motion.p variants={item}>
                Dubai’s trusted aluminium windows and doors specialist since
                2009
              </motion.p>

              <motion.p variants={item}>hello@swiftrooms.ae</motion.p>

              <motion.p variants={item}>050 526 9149</motion.p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
