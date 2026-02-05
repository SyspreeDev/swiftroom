import Link from "next/link";
import Image from "next/image";


import {
  Award,
  Gem,
  UserCheck,
  Leaf,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-[1400px] mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl text-black md:text-4xl font-medium mb-8">
          Why Choose Us
        </h2>

        <p className="text-gray-500 text-sm md:text-base mb-16">
          Because your space deserves more than just installation it deserves expertise
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-18 text-black">

{/* Card 1 */}
<FeatureCard
  icon={
    <Image
      src="/images/icons/medal.png"
      alt="Experience"
      width={50}
      height={50}
    />
  }
  title="Experienced & Trusted Expertise"
  desc="With over 14+ years in business and 3,500+ completed projects in the UAE, we bring unmatched experience and reliability to every installation."
/>

{/* Card 2 */}
<FeatureCard
  icon={
    <Image
      src="/images/icons/diamond.png"
      alt="Premium Quality"
      width={50}
      height={50}
    />
  }
  title="Premium Quality Materials & Craftsmanship"
  desc="We use high-end aluminium, uPVC, and glazing systems designed to withstand the UAE climate while ensuring lasting durability and performance."
/>

{/* Card 3 */}
<FeatureCard
  icon={
    <Image
      src="/images/icons/customer.png"
      alt="Customer Focus"
      width={50}
      height={50}
    />
  }
  title="Customer-Centric Approach"
  desc="From consultation to installation and aftercare, our team of experts ensures a seamless, tailored experience that exceeds expectations."
/>

{/* Card 4 */}
<FeatureCard
  icon={
    <Image
      src="/images/icons/leaf.png"
      alt="Sustainable Solutions"
      width={50}
      height={50}
    />
  }
  title="Sustainable & Energy-Efficient Solutions"
  desc="Our products are engineered for thermal efficiency and reduced energy use, aligning with green building standards for comfort and lower running costs."
/>


        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* Primary */}
          <Link href="/bookshowroom">
          <button className="w-full sm:w-[210px] bg-[#0B6F63] hover:bg-[#095b52] transition text-white px-6 py-3 rounded-[10px] text-sm font-medium shadow-md hover:shadow-lg">
            Book Showroom Visit
          </button>
          </Link>

          {/* Secondary */}
          <Link href="/getaquote">
          <button className="w-full sm:w-[210px] bg-white border border-[#0B6F63] text-[#0B6F63] hover:bg-[#0B6F63] hover:text-white transition px-6 py-3 rounded-[10px] text-sm font-medium shadow-md hover:shadow-lg">
            Get a Quote
          </button>
          </Link>

        </div>

      </div>

    </section>
  );
}

/* Card Component */
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 text-left hover:shadow-md transition">

      <div className="text-[#0B6F63] mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-lg mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>

    </div>
  );
}
