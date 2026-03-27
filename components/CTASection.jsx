"use client";

import { FaArrowRight, FaHardHat } from "react-icons/fa";
import { motion } from "framer-motion";
import { DoorOpen, DoorClosed, LayoutGrid } from "lucide-react";
import { IoGlassesOutline } from "react-icons/io5";
import { useState } from "react";
import {
  HiOutlineChatBubbleLeft,
  HiOutlineWrenchScrewdriver,
  HiCheck,
  HiArrowRight,
  HiOutlineBuildingOffice2, // Apartment
  HiOutlineHome, // Villa
  HiOutlineBuildingStorefront, // Commercial
  HiOutlineWindow, // UPVC windows
  HiOutlineSun, // Skylights
} from "react-icons/hi2";

export default function CTASection() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(null); // just for UI
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [fullName, setFullName] = useState("");
  const products = [
    "Aluminum Sliding Doors",
    "Bi-Fold Doors",
    "Aluminum Windows",
    "UPVC Windows and Doors",
    "Skylights and Garden Rooms",
  ];
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("+971 - UAE");
  const [openDropdown, setOpenDropdown] = useState(false);

  const countries = [
    "+971 - UAE",
    "+966 - Saudi Arabia",
    "+974 - Qatar",
    "+965 - Kuwait",
    "+973 - Bahrain",
    "+968 - Oman",
    "+91 - India",
    "+92 - Pakistan",
    "+20 - Egypt",
    "+44 - UK",
    "+1 - USA/Canada",
  ];
  const toggleProduct = (item) => {
    if (selectedProducts.includes(item)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== item));
    } else {
      setSelectedProducts([...selectedProducts, item]);
    }
  };
  const [email, setEmail] = useState("");

  return (
    <section id="cta" className="py-20 px-6 relative overflow-hidden">
      {/* Background Pattern (optional light shapes) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* You can replace with SVG/image if needed */}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.25 }}
        >
          {/* Heading */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 }, // 🔥 from bottom
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Ready to Transform Your Space?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 }, // slightly less movement
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-gray-600 text-lg md:text-xl mb-10"
          >
            Get a free consultation and quote from our expert team
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        {step === 1 && (
          <motion.button
            onClick={() => setStep(2)}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-[#0B7D69] text-white px-10 py-5 rounded-2xl"
          >
            Start Your Swiftrooms Journey
          </motion.button>
        )}
        {step === 2 && (
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-2xl mx-auto">
            {/* Visit Showroom */}
            <div
              onClick={() => setStep(3)}
              className="flex items-center justify-between bg-[#0B7D69] text-white px-6 py-5 rounded-2xl cursor-pointer shadow-md hover:bg-[#096b5a] transition"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <IoGlassesOutline className="text-4xl text-white" />

                <div>
                  <p className="font-semibold text-lg">Visit Our Showroom</p>
                  <p className="text-sm text-green-100">
                    Experience products firsthand
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <span className="text-xl">→</span>
            </div>

            {/* OR Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-sm font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Get Quote */}
            <div
              onClick={() => setStep(3)}
              className="flex items-center justify-between px-6 py-5 rounded-2xl border border-[#0B7D69] cursor-pointer shadow-sm hover:shadow-md transition"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <HiOutlineChatBubbleLeft className="text-3xl text-[#0B7D69]" />

                <div>
                  <p className="font-semibold text-lg text-[#0B7D69]">
                    Get a Free Quote
                  </p>
                  <p className="text-sm text-gray-500">
                    Receive quote in minutes
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <span className="text-xl text-[#0B7D69]">→</span>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-2xl mx-auto">
            {/* Top */}
            <div className="flex justify-between text-sm text-gray-500">
              <span>Question 1 of 6</span>
              <span className="text-[#0B7D69] font-medium">17%</span>
            </div>

            {/* Progress */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2 mb-8">
              <div className="bg-[#0B7D69] h-2 w-[17%] rounded-full"></div>
            </div>

            {/* Title */}
            <h2 className="text-[28px] font-semibold text-gray-800 mb-2">
              Tell us about your project
            </h2>
            <p className="text-gray-500 mb-8">
              What type of project are you working on?
            </p>

            {/* Options */}
            <div className="grid grid-cols-2 gap-4">
              {/* New Build */}
              <div
                onClick={() => {
                  setSelected("new");
                  setStep(4);
                }}
                className={`h-[100px] flex flex-col items-center justify-center rounded-xl border cursor-pointer transition-all duration-200
        ${
          selected === "new"
            ? "border-[#0B7D69] bg-[#eef6f4]"
            : "border-gray-200 bg-gray-50 hover:border-[#0B7D69]"
        }`}
              >
                <div className="text-[#0B7D69] text-4xl mb-1">
                  <FaHardHat />
                </div>
                <p className="font-medium text-sm text-gray-800">New Build</p>
              </div>

              {/* Renovation */}
              <div
                onClick={() => {
                  setSelected("reno");
                  setStep(4);
                }}
                className={`h-[100px] flex flex-col items-center justify-center rounded-xl border cursor-pointer transition-all duration-200
        ${
          selected === "reno"
            ? "border-[#0B7D69] bg-[#eef6f4]"
            : "border-gray-200 bg-gray-50 hover:border-[#0B7D69]"
        }`}
              >
                <div className="text-[#0B7D69] text-4xl mb-1">
                  <HiOutlineWrenchScrewdriver />
                </div>
                <p className="font-medium text-sm text-gray-800">
                  Renovation Project
                </p>
              </div>
            </div>

            {/* Back */}
            <button
              onClick={() => setStep(2)}
              className="mt-10 text-gray-500 hover:text-gray-700 transition"
            >
              ← Back
            </button>
          </div>
        )}
        {step === 4 && (
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-2xl mx-auto">
            {/* Top */}
            <div className="flex justify-between text-sm text-gray-500">
              <span>Question 2 of 6</span>
              <span className="text-[#0B7D69] font-medium">33%</span>
            </div>

            {/* Progress */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2 mb-8">
              <div className="bg-[#0B7D69] h-2 w-[33%] rounded-full"></div>
            </div>

            {/* Title */}
            <h2 className="text-[30px] font-semibold text-gray-800 mb-2">
              What type of property?
            </h2>
            <p className="text-gray-500 mb-10">
              Select the property type you need services for
            </p>

            {/* Options */}
            <div className="grid grid-cols-2 gap-4">
              {/* Apartment */}
              <div
                onClick={() => {
                  setSelectedProperty("apartment");
                  setStep(5);
                }}
                className={`h-[100px] flex flex-col items-center justify-center rounded-xl border cursor-pointer transition-all
        ${
          selectedProperty === "apartment"
            ? "border-[#0B7D69] bg-[#eef6f4]"
            : "border-gray-200 bg-gray-50 hover:border-[#0B7D69]"
        }`}
              >
                {/* Apartment */}
                <div className="text-[#0B7D69] text-2xl mb-1">
                  <HiOutlineBuildingOffice2 />
                </div>
                <p className="text-sm font-medium text-gray-800">Apartment</p>
              </div>

              {/* Villa */}
              <div
                onClick={() => {
                  setSelectedProperty("villa");
                  setStep(5);
                }}
                className={`h-[100px] flex flex-col items-center justify-center rounded-xl border cursor-pointer transition-all
        ${
          selectedProperty === "villa"
            ? "border-[#0B7D69] bg-[#eef6f4]"
            : "border-gray-200 bg-gray-50 hover:border-[#0B7D69]"
        }`}
              >
                {/* Villa or Townhouse */}
                <div className="text-[#0B7D69] text-2xl mb-1">
                  <HiOutlineHome />
                </div>
                <p className="text-sm font-medium text-gray-800">
                  Villa or Townhouse
                </p>
              </div>

              {/* Commercial */}
              <div
                onClick={() => {
                  setSelectedProperty("commercial");
                  setStep(5);
                }}
                className={`h-[100px] flex flex-col items-center justify-center rounded-xl border cursor-pointer transition-all
        ${
          selectedProperty === "commercial"
            ? "border-[#0B7D69] bg-[#eef6f4]"
            : "border-gray-200 bg-gray-50 hover:border-[#0B7D69]"
        }`}
              >
                <div className="text-[#0B7D69] text-2xl mb-1">
                  <HiOutlineBuildingStorefront />
                </div>
                <p className="text-sm font-medium text-gray-800">
                  Commercial Property
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-10">
              {/* Back */}
              <button
                onClick={() => setStep(3)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                ← Back
              </button>

              {/* Next */}
              <button
                disabled={!selectedProperty}
                className={`px-6 py-3 rounded-xl flex items-center gap-2 transition
    ${
      selectedProperty
        ? "bg-[#0B7D69] text-white hover:bg-[#096b5a]"
        : "bg-gray-200 text-gray-400 cursor-not-allowed"
    }`}
              >
                Next →
              </button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-2xl mx-auto">
            {/* Top */}
            <div className="flex justify-between text-sm text-gray-500">
              <span>Question 3 of 6</span>
              <span className="text-[#0B7D69] font-medium">50%</span>
            </div>

            {/* Progress */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2 mb-8">
              <div className="bg-[#0B7D69] h-2 w-[50%] rounded-full"></div>
            </div>

            {/* Title */}
            <h2 className="text-[30px] font-semibold text-gray-800 mb-2">
              Which products do you need?
            </h2>
            <p className="text-gray-500 mb-6">
              Select all products you're interested in
            </p>

            {/* Selected Count */}
            {selectedProducts.length > 0 && (
              <div className="inline-flex items-center gap-2 bg-[#e6f4f1] text-[#0B7D69] px-4 py-2 rounded-lg mb-6 text-sm font-medium">
                ✓ {selectedProducts.length} products selected
              </div>
            )}

            {/* Options */}
            <div className="grid grid-cols-2 gap-4">
              {products.map((item, index) => {
                const isSelected = selectedProducts.includes(item);

                return (
                  <div
                    key={index}
                    onClick={() => toggleProduct(item)}
                    className={`relative h-[100px] flex flex-col items-center justify-center rounded-xl border cursor-pointer transition-all
              ${
                isSelected
                  ? "border-[#0B7D69] bg-[#eef6f4]"
                  : "border-gray-200 bg-gray-50 hover:border-[#0B7D69]"
              }
            `}
                  >
                    {/* Tick */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 bg-[#0B7D69] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        ✓
                      </div>
                    )}

                    {/* Icon (emoji for now) */}
                    <div className="text-[#0B7D69] text-2xl mb-1">
                      {index === 0 && <DoorOpen />}
                      {index === 1 && <DoorClosed />}
                      {index === 2 && <LayoutGrid />}
                      {index === 3 && <HiOutlineWindow />}
                      {index === 4 && <HiOutlineSun />}
                    </div>

                    {/* Label */}
                    <p className="text-sm font-medium text-gray-800 text-center px-2">
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-between items-center mt-10">
              {/* Back */}
              <button
                onClick={() => setStep(4)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                ← Back
              </button>

              <button
                onClick={() => setStep(6)}
                disabled={selectedProducts.length === 0}
                className={`px-6 py-3 rounded-xl flex items-center gap-2 transition
    ${
      selectedProducts.length > 0
        ? "bg-[#0B7D69] text-white hover:bg-[#096b5a] cursor-pointer"
        : "bg-gray-200 text-gray-400 cursor-not-allowed"
    }`}
              >
                Next →
              </button>
            </div>
          </div>
        )}
        {step === 6 && (
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-2xl mx-auto">
            {/* Top */}
            <div className="flex justify-between text-sm text-gray-500">
              <span>Question 4 of 6</span>
              <span className="text-[#0B7D69] font-medium">67%</span>
            </div>

            {/* Progress */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2 mb-8">
              <div className="bg-[#0B7D69] h-2 w-[67%] rounded-full"></div>
            </div>

            {/* Title */}
            <h2 className="text-[30px] font-semibold text-gray-800 mb-2">
              Please enter your full name
            </h2>
            <p className="text-gray-500 mb-10">
              Let's start with your full name
            </p>

            {/* Input */}
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-[#0B7D69] text-gray-800 placeholder-gray-400"
            />

            {/* Bottom Buttons */}
            <div className="flex justify-between items-center mt-12">
              {/* Back */}
              <button
                onClick={() => setStep(5)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
              >
                ← Back
              </button>

              {/* Next */}
              <button
                onClick={() => setStep(7)}
                disabled={fullName.trim() === ""}
                className={`px-6 py-3 rounded-xl flex items-center gap-2 transition
          ${
            fullName.trim()
              ? "bg-[#0B7D69] text-white hover:bg-[#096b5a]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
              >
                Next →
              </button>
            </div>
          </div>
        )}
        {step === 7 && (
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-2xl mx-auto">
            {/* Top */}
            <div className="flex justify-between text-sm text-gray-500">
              <span>Question 5 of 6</span>
              <span className="text-[#0B7D69] font-medium">83%</span>
            </div>

            {/* Progress */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2 mb-8">
              <div className="bg-[#0B7D69] h-2 w-[83%] rounded-full"></div>
            </div>

            {/* Title */}
            <h2 className="text-[30px] font-semibold text-gray-800 mb-2">
              What's your phone number?
            </h2>
            <p className="text-gray-500 mb-8">
              We'll use this to send you your quote
            </p>

            {/* Inputs */}
            <div className="flex gap-4 relative">
              {/* Country Dropdown */}
              <div className="relative w-[220px]">
                <div
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 flex justify-between items-center cursor-pointer"
                >
                  <span className="text-sm text-gray-700">AE {country}</span>
                  <span>⌄</span>
                </div>

                {/* Dropdown List */}
                {openDropdown && (
                  <div className="absolute top-full mt-2 w-full bg-white border rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                    {countries.map((c, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setCountry(c);
                          setOpenDropdown(false);
                        }}
                        className="px-4 py-3 text-sm hover:bg-[#0B7D69] hover:text-white cursor-pointer"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone Input */}
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="flex-1 px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-[#0B7D69]"
              />
            </div>

            {/* Helper Text */}
            <p className="text-xs text-gray-400 mt-2">
              Enter 9 digits without country code
            </p>

            {/* Bottom Buttons */}
            <div className="flex justify-between items-center mt-12">
              {/* Back */}
              <button
                onClick={() => setStep(6)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                ← Back
              </button>

              {/* Next */}
              <button
                onClick={() => setStep(8)}
                disabled={phone.length < 9}
                className={`px-6 py-3 rounded-xl flex items-center gap-2 transition
          ${
            phone.length >= 9
              ? "bg-[#0B7D69] text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
              >
                Next →
              </button>
            </div>
          </div>
        )}
        {step === 8 && (
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-2xl mx-auto">
            {/* Top */}
            <div className="flex justify-between text-sm text-gray-500">
              <span>Question 6 of 6</span>
              <span className="text-[#0B7D69] font-medium">100%</span>
            </div>

            {/* Progress */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2 mb-8">
              <div className="bg-[#0B7D69] h-2 w-full rounded-full"></div>
            </div>

            {/* Title */}
            <h2 className="text-[30px] font-semibold text-gray-800 mb-2">
              What's your email?
            </h2>
            <p className="text-gray-500 mb-10">
              Optional - for sending you detailed quotes
            </p>

            {/* Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-[#0B7D69] text-gray-800 placeholder-gray-400"
            />

            {/* Bottom Buttons */}
            <div className="flex justify-between items-center mt-12">
              {/* Back */}
              <button
                onClick={() => setStep(7)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
              >
                ← Back
              </button>

              {/* Submit */}
              <button
                onClick={() => setStep(9)}
                className="px-6 py-3 rounded-xl bg-[#0B7D69] text-white flex items-center gap-2 hover:bg-[#096b5a] transition"
              >
                Submit →
              </button>
            </div>
          </div>
        )}
        {step === 9 && (
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-xl mx-auto">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-[#0B7D69] rounded-full flex items-center justify-center mx-auto mb-6">
              <HiCheck className="text-white text-5xl" />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Thank You, {fullName || "User"}!
            </h2>

            {/* Description */}
            <p className="text-gray-500 mb-2">
              We truly appreciate you taking the time to reach out to us.
            </p>
            <p className="text-gray-500 mb-8">
              Your quote request has been received and our team will contact you
              shortly.
            </p>

            {/* Info Box */}
            <div className="border border-[#b7e0d8] bg-[#eef6f4] text-[#0B7D69] px-6 py-4 rounded-xl flex items-center justify-center gap-2 mb-8">
              ✓ We respond within 12 hours
            </div>

            {/* CTA Card */}
            <div className="border border-[#a7e3c2] rounded-2xl p-6 shadow-sm mb-8">
              {/* Icon */}
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💬</span>
              </div>

              {/* Text */}
              <h3 className="font-semibold text-gray-800 mb-2">
                Send Swiftrooms details & location to my phone
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Save our details for your visit.
              </p>

              {/* Button */}
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 mx-auto transition">
                Send to My Phone <HiArrowRight className="text-xl" />
              </button>
            </div>

            {/* Bottom Link */}
            <button
              onClick={() => setStep(2)}
              className="text-[#0B7D69] font-medium hover:underline"
            >
              Submit another request
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
