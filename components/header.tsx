"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="w-full font-poppins">

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#0B6F63] text-white text-[13px]">

        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-2">

          {/* Left Info */}
          <div className="flex items-center gap-6">

            {/* Email */}
            <a
              href="mailto:hello@swiftrooms.ae"
              className="flex items-center gap-2 transition"
            >
              <Mail size={14} />
              <span>hello@swiftrooms.ae</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Jebel Ali, Ind Area 1</span>
            </div>

          </div>

          {/* Right Offer */}
          <div className="italic font-medium text-right">
            Free Site Visit & 10-Year Warranty – Limited Slots This Month
          </div>

        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="bg-white border-b border-gray-200">

        <div className="max-w-[1300px] mx-auto grid grid-cols-3 items-center px-4 py-4">

          {/* Logo (Left) */}
          <div className="flex items-center">

            <Link href="/">

              <Image
                src="/images/logo.png"
                alt="SwiftRooms"
                width={150}
                height={40}
                className="object-contain"
              />

            </Link>

          </div>

          {/* Menu (Center) */}
          <nav className="hidden md:flex justify-center items-center gap-8 text-[14px] text-gray-800 font-medium whitespace-nowrap">

            {[
              { name: "Home", id: "home" },
              { name: "About us", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "Services", id: "services" },
              { name: "Testimonials", id: "testimonials" },
            ].map((item) => {

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

          {/* Mobile Menu Button */}
          <div className="flex justify-end md:hidden">
            <button className="text-2xl text-gray-800">
              ☰
            </button>
          </div>

        </div>

      </div>

    </header>
  );
}
