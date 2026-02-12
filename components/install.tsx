import Image from "next/image";
import Link from "next/link";


const services = [
  {
    title: "ALUMINIUM SLIDING DOOR",
    image: "/images/install/aluminium-sliding-door.png",
  },
  {
    title: "ALUMINIUM BI-FOLDING DOORS",
    image: "/images/install/aluminium-bi-folding-doors.png",
  },
  {
    title: "ALUMINIUM WINDOWS",
    image: "/images/install/aluminium-windows.png",
  },
  {
    title: "PVCU WINDOWS & DOOR",
    image: "/images/install/pvcu.png",
  },
];

export default function Install() {
  return (
    <section className="bg-white py-10">

      <div className="max-w-[1300px] mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            What We Install
          </h2>

          <p className="text-gray-500 text-sm md:text-base">
            Where quality craftsmanship meets flawless installation
          </p>

        </div>

        {/* ================= CARDS ================= */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

  {services.map((item, index) => (
    <div
      key={index}
      className="group relative h-[320px] rounded-xl overflow-hidden cursor-pointer"
    >

      {/* Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover"
      />

      {/* Growing Overlay */}
      <div
        className="
          absolute bottom-0 left-0 right-0 h-[70px]
          bg-black/60
          transition-all duration-500 ease-in-out
          group-hover:h-full
        "
      />

      {/* Bottom Text (Default) */}
      <div
        className="
          absolute bottom-0 left-0 right-0 p-5
          text-white
          transition-all duration-500
          group-hover:opacity-0
        "
      >
        <h3 className="text-lg md:text-base font-semibold">
          {item.title}
        </h3>
      </div>

      {/* Center Text (Hover) */}
      <div
        className="
          absolute inset-0 flex flex-col items-center justify-center
          text-white
          opacity-0
          transition-all duration-500
          group-hover:opacity-100
        "
      >

        <h3 className="text-xl md:text-lg font-semibold mb-3 text-center px-4">
          {item.title}
        </h3>

        <span className="w-14 h-[2px] bg-white" />

      </div>

    </div>
  ))}

</div>



        {/* ================= BUTTONS ================= */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* Primary */}
          <Link href="/bookshowroom">
          <button className="w-full sm:w-[210px] bg-[#0B6F63] hover:bg-[#095b52] transition text-white px-6 py-3 rounded-[10px] text-sm font-medium shadow-md hover:shadow-lg">
            Book Showroom Visit
          </button>
          </Link>

          {/* Secondary */}
          <Link href="/getaquote">
          <button className="w-full sm:w-[210px] bg-white border border-[#0B6F63] text-[#0B6F63] hover:bg-[#0B6F63] hover:text-white transition px-6 py-3 rounded-[10px] text-sm font-medium shadow-md hover:shadow-lg">
            Submit Enquiry
          </button>
          </Link>

        </div>

      </div>

    </section>
  );
}
