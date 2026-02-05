"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] min-h-[320px] overflow-hidden">

      {/* ===== Background Video ===== */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ===== Dark Overlay ===== */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-[1300px] mx-auto h-full flex items-center px-4">

        <div className="max-w-xl text-white text-center sm:text-left">

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug sm:leading-tight">
            Swiftrooms <br />
            UAE’s premier provider of <br />
            garden rooms, aluminum <br />
            windows and doors
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-200 leading-relaxed">
            Designing immersive environments that leave a lasting impression
            of excellence.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">

            {/* Primary */}
            <Link href="/bookshowroom">
              <button className="w-full sm:w-auto bg-[#0B6F63] hover:bg-[#095b52] transition text-white px-6 py-3 rounded-md text-sm font-medium">
                Book Showroom Visit
              </button>
            </Link>

            {/* Secondary */}
            <Link href="/getaquote">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-100 transition text-gray-900 px-6 py-3 rounded-md text-sm font-medium">
                Get a Quote
              </button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
