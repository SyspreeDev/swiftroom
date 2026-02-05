"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {

  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="bg-black text-gray-400 pt-16 pb-6">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo + About */}
          <div>

            <div className="mb-4">
              <Image
                src="/images/logo-footer.png"
                alt="Swiftrooms Logo"
                width={160}
                height={50}
                className="object-contain"
                priority
              />
            </div>

            <p className="text-sm leading-relaxed mb-4">
              Swift Rooms <br />
              UAE’s premier provider of garden rooms, aluminium
              windows and doors.
            </p>

            <p className="text-xs">
              © 2026 All Rights Reserved
            </p>

          </div>

          {/* Follow Us */}
          <div>

            <h4 className="text-white font-medium mb-4">
              Follow us
            </h4>

            <div className="flex gap-3 mb-4">

              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 hover:bg-[#008970] hover:border-[#008970] text-white transition cursor-pointer"
                  >
                    <Icon size={14} />
                  </div>
                )
              )}

            </div>

            <p className="text-sm mb-1">Call us</p>

            <a
              href="tel:+97143474240"
              className="text-white text-sm font-medium hover:text-[#006D5B] transition"
            >
              04 347 4240
            </a>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-white font-medium mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">

              {[
                { name: "Home", id: "home" },
                { name: "About Us", id: "about" },
                { name: "Projects", id: "projects" },
                { name: "Services", id: "services" },
                { name: "Contact Us", id: "contact" },
              ].map((item) => {

                const href = isHome
                  ? `#${item.id}`
                  : `/#${item.id}`;

                return (
                  <li key={item.name}>
                    <a
                      href={href}
                      className="hover:text-white transition"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}

            </ul>

          </div>

          {/* Company Links */}
          <div>

            <h4 className="text-white font-medium mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-sm">

              {[
                { name: "Book Showroom Visit", href: "/bookshowroom" },
                { name: "Get a Quote", href: "/getaquote" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Showroom CTA */}
          <div className="bg-gradient-to-br from-[#0B6F63] to-[#009B85] rounded-xl p-6 text-white flex flex-col justify-between">

            <div>

              <h4 className="text-xl font-semibold mb-3">
                Visit Showroom Today
              </h4>

              <p className="text-sm opacity-90 leading-relaxed mb-6">
                Crafted with care, meant to be experienced.
                Visit our showroom and feel the authenticity.
              </p>

            </div>

            <a href={isHome ? "#contact" : "/#contact"}
              className="inline-flex items-center gap-2 bg-white text-[#0B6F63] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition w-fit" >
               Contact Us →
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-4">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">

          <div className="flex gap-4">

            {["Privacy Policy", "Terms of Use", "Legal", "Contact"].map(
              (item) => (
                <span
                  key={item}
                  className="hover:text-white cursor-pointer"
                >
                  {item}
                </span>
              )
            )}

          </div>

        </div>

      </div>

    </footer>
  );
}
