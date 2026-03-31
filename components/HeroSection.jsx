"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaHardHat, FaCheck } from "react-icons/fa";
import { CheckCircle, DoorOpen, DoorClosed, LayoutGrid } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import { IoGlassesOutline } from "react-icons/io5";
import {
  HiOutlineChatBubbleLeft,
  HiOutlineWrenchScrewdriver,
  HiCheck,
  HiOutlineArrowRight,
  HiOutlineBuildingOffice2, // Apartment
  HiOutlineHome, // Villa
  HiOutlineBuildingStorefront, // Commercial
  HiOutlineWindow, // UPVC windows
  HiOutlineSun, // Skylights
} from "react-icons/hi2";
import { useState } from "react";

export default function Hero() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(null); // just for UI
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
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
    <section
      id="home"
      className="relative w-full 
             min-h-[70vh] sm:min-h-[80vh] lg:min-h-[110vh] 
             pt-24 sm:pt-28 lg:pt-40
             overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B7D69]/70" />

      {/* Content */}
      <div className="relative z-10  w-full max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto h-full  flex flex-col md:flex-row  items-center justify-between  px-4 sm:px-6 lg:px-10 xl:px-10 2xl:px-30 2xl:py-30 gap-6 lg:gap-10">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-white">
          <h1 className="text-2xl sm:text-3xl lg:text-3xl font-semibold leading-snug sm:leading-tight uppercase tracking-wider">
            Performance Windows Doors Engineered for Excellence Designed for the
            UAE Climate
          </h1>

          <div className="mt-4 sm:mt-5 max-w-lg space-y-3">
            {[
              "Free quote & site visit within 24 hours",
              "Custom-manufactured for perfect fit",
              "Heat & dust insulation for UAE climate",
              "Professional installation with 10-year warranty",
              "European quality systems from AED 800/sqm",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="text-white mt-1" size={18} />
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-white text-lg tracking-widest leading-snug">
              GLASS & ALUMINIUM SYSTEMS BUILT FOR EXTREME GULF CONDITIONS
            </h2>
          </div>
        </div>

        {/* RIGHT SIDE CTA */}
        <div className="flex flex-col items-center w-full md:w-auto mt-8 md:mt-0">
          {/* CTA BUTTON */}
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
              className="bg-[#0B7D69] text-white font-medium md:text-xl 
             px-10 py-5 rounded-2xl 
             flex items-center gap-3"
            >
              Start Your Swiftrooms Journey
              <FiArrowRight className="text-2xl" />
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
                  <HiOutlineChatBubbleLeft className="text-2xl text-[#0B7D69]" />

                  <div>
                    <p className="font-semibold text-lg text-[#0B7D69]">
                      Get a Free Quote
                    </p>
                    <p className="text-sm text-gray-500">
                      Receive quote in minutes
                    </p>
                  </div>
                </div>
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
            <div className="bg-white px-6 py-2 rounded-2xl shadow-lg max-w-2xl mx-auto">
              {/* Top */}
              <div className="flex justify-between text-sm text-gray-500 mt-5">
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
            <div className="bg-white px-8 py-6 rounded-2xl shadow-lg max-w-xl mx-auto">
              {/* Top */}
              <div className="flex justify-between text-xs text-gray-500 mt-3">
                <span>Question 3 of 6</span>
                <span className="text-[#0B7D69] font-medium">50%</span>
              </div>

              {/* Progress */}
              <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 mb-6">
                <div className="bg-[#0B7D69] h-1.5 w-[50%] rounded-full"></div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                Which products do you need?
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Select all products you're interested in
              </p>

              {/* Selected Count */}
              {selectedProducts.length > 0 && (
                <div className="inline-flex items-center gap-2 bg-[#e6f4f1] text-[#0B7D69] px-3 py-1.5 rounded-md mb-4 text-xs font-medium">
                  ✓ {selectedProducts.length} selected
                </div>
              )}

              {/* Options */}
              <div className="grid grid-cols-2 gap-3">
                {products.map((item, index) => {
                  const isSelected = selectedProducts.includes(item);

                  return (
                    <div
                      key={index}
                      onClick={() => toggleProduct(item)}
                      className={`relative h-[80px] flex flex-col items-center justify-center rounded-lg border cursor-pointer transition-all
              ${
                isSelected
                  ? "border-[#0B7D69] bg-[#eef6f4]"
                  : "border-gray-200 bg-gray-50 hover:border-[#0B7D69]"
              }
            `}
                    >
                      {/* Tick */}
                      {isSelected && (
                        <div className="absolute top-1 right-1 bg-[#0B7D69] text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                          ✓
                        </div>
                      )}

                      {/* Icon */}
                      <div className="text-[#0B7D69] text-xl mb-0.5">
                        {index === 0 && <DoorOpen />}
                        {index === 1 && <DoorClosed />}
                        {index === 2 && <LayoutGrid />}
                        {index === 3 && <HiOutlineWindow />}
                        {index === 4 && <HiOutlineSun />}
                      </div>

                      {/* Label */}
                      <p className="text-xs font-medium text-gray-800 text-center px-1">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Buttons */}
              <div className="flex justify-between items-center mt-6">
                {/* Back */}
                <button
                  onClick={() => setStep(4)}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  ← Back
                </button>

                {/* Next */}
                <button
                  onClick={() => setStep(6)}
                  disabled={selectedProducts.length === 0}
                  className={`px-4 py-2 rounded-lg text-sm flex items-center gap-1 transition
          ${
            selectedProducts.length > 0
              ? "bg-[#0B7D69] text-white hover:bg-[#096b5a]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
                >
                  Next →
                </button>
              </div>
            </div>
          )}
          {step === 6 && (
            <div className="bg-white px-6 py-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
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
            <div
              className="bg-white 
                px-4 py-6 sm:px-6 sm:py-8 
                rounded-2xl shadow-lg 
                max-w-xs sm:max-w-md md:max-w-3xl 
                mx-auto"
            >
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
            <div className="bg-white p-12 rounded-2xl shadow-lg max-w-2xl mx-auto">
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

                <button
                  disabled={loading}
                  onClick={async () => {
                    setLoading(true);

                    const formData = {
                      fullName,
                      phone,
                      email,
                      selectedProperty,
                      selectedProducts,
                      projectType: selected,
                      country,
                    };

                    try {
                      const res = await fetch("/api/send-email", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                      });

                      const data = await res.json();

                      if (data.success) {
                        setStep(9);
                      } else {
                        alert("Failed to send email");
                      }
                    } catch (err) {
                      console.error(err);
                      alert("Error occurred");
                    }

                    setLoading(false);
                  }}
                  className="px-6 py-3 rounded-xl bg-[#0B7D69] text-white flex items-center gap-2"
                >
                  {loading ? "Sending..." : "Submit →"}
                </button>
              </div>
            </div>
          )}
          {step === 9 && (
            <div className="bg-white px-10 py-2 rounded-2xl shadow-lg text-center max-w-lg mx-auto">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-[#0B7D69] rounded-full flex items-center justify-center mx-auto mb-4">
                <HiCheck className="text-white text-3xl" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Thank You, {fullName || "User"}!
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-1">
                We truly appreciate you reaching out.
              </p>
              <p className="text-sm text-gray-500 mb-5">
                Our team will contact you shortly.
              </p>

              {/* Info Box */}
              <div className="border border-[#b7e0d8] bg-[#eef6f4] text-[#0B7D69] px-4 py-2 rounded-lg flex items-center justify-center gap-2 mb-5 text-sm">
                <HiCheck className="text-sm" />
                We respond within 12 hours
              </div>

              {/* CTA Card */}
              <div className="border border-[#a7e3c2] rounded-xl p-4 shadow-sm mb-5">
                {/* Icon */}
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HiOutlineChatBubbleLeft className="text-white text-lg" />
                </div>

                {/* Text */}
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  Send details & location to your phone
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  Save for your visit
                </p>

                {/* Button */}
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-1 mx-auto text-sm transition">
                  Send <HiOutlineArrowRight className="text-sm" />
                </button>
              </div>

              {/* Bottom Link */}
              <button
                onClick={() => setStep(2)}
                className="text-sm text-[#0B7D69] font-medium hover:underline"
              >
                Submit another request
              </button>
            </div>
          )}

          {/* POINTS */}
          <div className="mt-5 mb-6 flex flex-wrap md:flex-nowrap justify-center items-center gap-6 text-sm sm:text-base text-gray-200">
            <div className="flex items-center gap-2">
              <FaCheck className="text-white text-sm" />
              <span>Free Consultation</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCheck className="text-white text-sm" />
              <span>24-Hour Response</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCheck className="text-white text-sm" />
              <span>No Obligation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
