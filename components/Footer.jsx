import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Process", href: "/process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQs", href: "/faqs" },
  { label: "Get Quote", href: "/get-quote" },
];

export default function Footer() {
  return (
    <footer className="bg-[#141c1b] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left — Brand & Contact */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div>
            <Image
              src="/images/logo-circle.png"
              alt="Swiftrooms Logo"
              width={50}
              height={0}
              className="object-contain"
            />
          </div>

          {/* Tagline */}
          <p className="text-white text-sm leading-relaxed max-w-s">
            Premium aluminum solutions for UAE homes and businesses
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 mt-2">
            {/* Phone */}
            <a
              href="tel:0434774240"
              className="flex items-center gap-3 group w-fit"
            >
              <span className="w-9 h-9 rounded-lg bg-[#0B7D69]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B7D69] transition-colors duration-200">
                <FiPhone className="text-[#0B7D69] group-hover:text-white text-sm transition-colors duration-200" />
              </span>
              <span className="text-gray-300 text-sm font-medium">
                04 347 4240
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:sales@swiftrooms.ae"
              className="flex items-center gap-3 group w-fit"
            >
              <span className="w-9 h-9 rounded-lg bg-[#0B7D69]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B7D69] transition-colors duration-200">
                <FiMail className="text-[#0B7D69] group-hover:text-white text-sm transition-colors duration-200" />
              </span>
              <span className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                sales@swiftrooms.ae
              </span>
            </a>

            {/* Address */}
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-lg bg-[#0B7D69]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <FiMapPin className="text-[#0B7D69] text-sm" />
              </span>
              <div className="text-gray-300 text-sm leading-relaxed">
                <p>ETJAR – J1 Complex</p>
                <p>Block A, Warehouse 11-12</p>
                <p>Jebel Ali, Ind Area 1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Quick Links & Instagram */}
        <div className="flex flex-col gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Quick Links</h3>
            <div className="grid grid-cols-3 gap-x-6 gap-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 text-sm hover:text-[#0B7D69] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Instagram */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">
              Follow Us on Instagram
            </h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-[#0B7D69] flex items-center justify-center hover:bg-[#095f50] hover:-translate-y-0.5 transition-all duration-200"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © 2026 SWIFTROOMS. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
