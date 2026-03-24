"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
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
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="w-full font-poppins relative z-50"
    >
      {/* ================= MAIN NAV ================= */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/swiftroom-logo.jpg"
                alt="SwiftRooms"
                width={180}
                height={50}
                className="object-contain"
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
            <Link href="/contact">
              <button className="bg-[#0B7D69] text-white px-5 py-2.5 rounded-lg text-[13px] font-medium shadow-md hover:bg-[#09695a] transition duration-300">
                Get Quote | Visit Showroom
              </button>
            </Link>
          </motion.div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-800"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4 text-gray-800 font-medium">
              {links?.map((item) => {
                const href = isHome ? `#${item.id}` : `/#${item.id}`;

                return (
                  <a
                    key={item.name}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="hover:text-[#0B6F63] transition"
                  >
                    {item.name}
                  </a>
                );
              })}

              {/* Mobile Contact */}
              <div className="pt-4 border-t text-sm text-gray-600 space-y-2">
                <a
                  href="mailto:hello@swiftrooms.ae"
                  className="flex items-center gap-2"
                >
                  <Mail size={14} />
                  hello@swiftrooms.ae
                </a>

                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  Jebel Ali, Ind Area 1
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
