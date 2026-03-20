"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] min-h-[320px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B7D69]/70" />

      {/* Content */}
      <div className="relative z-10 max-w-[1300px] mx-auto h-full flex flex-col md:flex-row items-center justify-between px-4 gap-6">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-white">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-snug sm:leading-tight uppercase tracking-tight">
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
          <button className="w-full md:w-[500px] bg-[#0B7D69] hover:bg-[#096a59] text-white px-8 py-5 rounded-[20px] text-lg sm:text-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-4">
            <span>Start Your Swiftrooms Journey</span>
            <span className="text-2xl">→</span>
          </button>

          {/* POINTS */}
          <div className="mt-5 flex flex-wrap md:flex-nowrap justify-center items-center gap-6 text-sm sm:text-base text-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>Free Consultation</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>24-Hour Response</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>No Obligation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
