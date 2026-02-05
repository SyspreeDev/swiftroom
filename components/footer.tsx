"use client";

import Image from "next/image";


import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-6">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo + About */}
          <div>

            <div className="mb-4">

  <Image
    src="/images/logo-footer.png"     // change if your file name is different
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

            <p className="text-white text-sm font-medium">
              04 347 4240
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-white font-medium mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">

              {["Home", "About Us", "Projects", "Services", "Contact Us"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}

            </ul>

          </div>

          {/* Support */}
          <div>

            <h4 className="text-white font-medium mb-4">
              Support
            </h4>

            <ul className="space-y-2 text-sm">

              {["Privacy Policy", "Help Center", "Terms & Conditions"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}

            </ul>

          </div>

          {/* Company */}
          <div>

            <h4 className="text-white font-medium mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-sm">

              {["Book Showroom Visit", "Get a Quote"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>

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
