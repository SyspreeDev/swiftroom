import Image from "next/image";
import Link from "next/link";


export default function About() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative">

          {/* Main Image */}
          <div className="relative rounded-xl overflow-hidden">

            <Image
              src="/images/about.png" // 👈 change if name is different
              alt="SwiftRooms Project"
              width={700}
              height={550}
              className="w-full h-auto object-cover"
              priority
            />

          </div>

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>

          {/* About Label */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#0B6F63] font-semibold tracking-widest text-xl">
              ABOUT US
            </span>
            <span className="w-16 h-[2px] bg-[#0B6F63]" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Introducing Swiftrooms
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mb-6">
            Your Vision. Our Systems. One Exceptional Space.
          </p>

          {/* Text */}
          <div className="space-y-5 text-gray-700 leading-relaxed text-sm md:text-base">

            <p>
              Swift Rooms LLC, based in Dubai, specializes in providing high-quality outdoor glass rooms, garden rooms, premium windows, and door systems for the replacement and new build market. Established in 2011, we have completed nearly 3,500 projects, positioning ourselves as the market leader in the UAE for premium UPVC and aluminum products.
            </p>

            <p>
              <strong>Our Offerings</strong><br />
              We offer a comprehensive range of services and products, with a specialization in the in-house manufacturing of Cortizo aluminum systems. Our portfolio also includes renowned brands such as Vetromax, Deceuninck, Reynaers, Schüco, and Gulf Extrusions.
            </p>

            <p>
              <strong>Commitment to Sustainability</strong><br />
              Swift Rooms is committed to sustainability and energy efficiency, aligning our products with the Green Building codes of the UAE. Our offerings are designed to enhance comfort and security while reducing power consumption and minimizing the carbon footprint of buildings.
            </p>

          </div>

          {/* Button */}
          <Link href="/getaquote">
          <button className="bg-[#0B6F63] hover:bg-[#095b52] transition text-white px-6 py-3 rounded-md text-sm font-medium mt-8">
    Submit Enquiry
  </button>
  </Link>

        </div>

      </div>

    </section>
  );
}
