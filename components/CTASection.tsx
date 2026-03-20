import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="bg-[#f3f5f4] py-20 px-6 relative overflow-hidden">
      
      {/* Background Pattern (optional light shapes) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* You can replace with SVG/image if needed */}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
          Ready to Transform Your Space?
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg md:text-xl mb-10">
          Get a free consultation and quote from our expert team
        </p>

        {/* CTA Button */}
        <button className="bg-[#0B7D69] hover:bg-[#096b5a] text-white text-lg md:text-xl font-medium px-10 py-5 rounded-2xl flex items-center gap-4 mx-auto shadow-lg transition-all duration-300 hover:scale-105">
          
          Start Your Swiftrooms Journey
          
          <FaArrowRight className="text-xl" />
        </button>

      </div>
    </section>
  );
}