"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "Process", id: "process" },
    { name: "Brands", id: "brands" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Get a Quote", id: "get-a-quote" },
    { name: "Gallery", id: "gallery" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQs", id: "faqs" },
  ];

  return (
    <header className="w-full font-poppins relative z-50">
      {/* ================= MAIN NAV ================= */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/swiftroom-logo.jpg"
              alt="SwiftRooms"
              width={200}
              height={60}
              className="object-contain"
            />
          </Link>
        </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center items-center gap-6 text-[14px] text-gray-800 font-medium whitespace-nowrap">
            {links.map((item) => {
              const href = isHome ? `#${item.id}` : `/#${item.id}`;

              return (
                <a
                  key={item.name}
                  href={href}
                  className="hover:text-[#0B6F63] transition"
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* RIGHT - CTA */}
          <div className="hidden md:flex justify-end">
            <Link href="/contact">
              <button className="bg-[#0B7D69] text-white px-6 py-3 rounded-xl text-[14px] font-medium shadow-md hover:bg-[#09695a] transition duration-300">
                Get a Quote | Visit Showroom
              </button>
            </Link>
          </div>

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
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="flex flex-col px-6 py-4 space-y-4 text-gray-800 font-medium">
              {links.map((item) => {
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
          </div>
        )}
      </div>
    </header>
  );
}
