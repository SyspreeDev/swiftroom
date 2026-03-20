import { X, Check } from "lucide-react";

export default function SolutionSection() {
  const frustrations = [
    "Excessive heat penetration",
    "Sound resistance for improved acoustic performance",
    "Better air tightness",
    "Skyrocketing AC bills",
    "Making use of unused space",
  ];

  const advantages = [
    "Advanced solar-control glazing reduces excessive heat penetration.",
    "High-performance double and triple glazing improves acoustic insulation.",
    "Multi-point locking and triple gasket systems enhance air tightness and sealing.",
    "Thermally broken aluminium profiles minimise heat transfers",
    "Acoustic laminated glass significantly reduces outside noise.",
    "Garden rooms and extensions transform unused space into valuable living areas.",
  ];

  return (
    <div className="bg-gray-100 py-20 px-6">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-semibold">
          The SWIFTROOMS Solution
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Left Card */}
        <div className="bg-white rounded-2xl shadow p-8">
          
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100">
              <X className="text-red-500" size={14} />
            </span>
            <h3 className="font-semibold text-2xl">
              Common Frustrations
            </h3>
          </div>

          <ul className="space-y-5">
            {frustrations.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                
                <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-red-100">
                  <X className="text-red-500" size={12} />
                </span>

                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-gradient-to-br from-[#0B7D69] to-[#065F52] text-white rounded-2xl shadow p-8">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0f9e84]">
              <Check className="text-white" size={18} />
            </span>
            <h3 className="font-semibold text-2xl">
              SWIFTROOMS Advantage
            </h3>
          </div>

          <p className="text-sm text-white/80 mb-6">
            Engineered specifically for UAE climate conditions, our premium
            aluminum systems transform your living experience.
          </p>

          <ul className="space-y-4 mb-6">
            {advantages.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                
                <span className="mt-1 flex items-center justify-center rounded-full bg-green-600">
                  <Check className="text-white" size={18} />
                </span>

                {item}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="w-full bg-white text-[#0B7D69] font-semibold py-3 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            Explore Our Products →
          </button>
        </div>
      </div>
    </div>
  );
}