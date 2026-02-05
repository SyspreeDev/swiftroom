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
    { name: "About us", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
  ];

  return (
    <header className="w-full font-poppins relative z-50">

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#0B6F63] text-white text-[13px] hidden sm:block">

        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-2">

          {/* Left Info */}
          <div className="flex items-center gap-6">

            <a
              href="mailto:hello@swiftrooms.ae"
              className="flex items-center gap-2 transition"
            >
              <Mail size={14} />
              <span>hello@swiftrooms.ae</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Jebel Ali, Ind Area 1</span>
            </div>

          </div>

          <div className="italic font-medium text-right">
            Free Site Visit & 10-Year Warranty – Limited Slots This Month
          </div>

        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="bg-white border-b border-gray-200">

        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-4">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="SwiftRooms"
              width={150}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] text-gray-800 font-medium whitespace-nowrap">

            {links.map((item) => {

              const href = isHome
                ? `#${item.id}`
                : `/#${item.id}`;

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

                const href = isHome
                  ? `#${item.id}`
                  : `/#${item.id}`;

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
