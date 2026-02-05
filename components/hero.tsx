import Link from "next/link";


export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">

      {/* ===== Background Video ===== */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
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

        <div className="max-w-xl text-white">

          {/* Title */}
          <h1 className="text-xl md:text-xl lg:text-4xl font-bold leading-tight">
            Swiftrooms <br />
            UAE’s premier provider of <br />
            garden rooms, aluminum <br />
            windows and doors
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm md:text-base text-gray-200 leading-relaxed">
            Designing immersive environments that leave a lasting impression
            of excellence.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* Primary */}
<Link href="/bookshowroom">
  <button className="bg-[#0B6F63] hover:bg-[#095b52] transition text-white px-6 py-3 rounded-md text-sm font-medium">
    Book Showroom Visit
  </button>
</Link>

{/* Secondary */}
<Link href="/getaquote">
  <button className="bg-white hover:bg-gray-100 transition text-gray-900 px-6 py-3 rounded-md text-sm font-medium">
    Get a Quote
  </button>
</Link>

          </div>

        </div>

      </div>

    </section>
  );
}
