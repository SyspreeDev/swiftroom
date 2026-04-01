'use client';

import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[400px] md:w-[450px] bg-white shadow-xl rounded-2xl p-5 z-50 border">
      
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="bg-[#0B7D69] text-white p-2 rounded-lg">
          🍪
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
            Cookie & Privacy Notice
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and deliver personalized content. By clicking “Accept All”, you consent to our use of cookies. You can manage your preferences or learn more in our{" "}
            <span className="text-[#0B7D69] underline cursor-pointer">
              Privacy Policy
            </span>.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 space-y-2">
        
        {/* Settings */}
        <button className="w-full border border-gray-300 text-gray-700 py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition">
          ⚙️ Settings
        </button>

        {/* Necessary Only */}
        <button
          onClick={() => setVisible(false)}
          className="w-full border border-[#0B7D69] text-[#0B7D69] py-2.5 rounded-lg text-sm hover:bg-[#E6F4F1] transition"
        >
          Necessary Only
        </button>

        {/* Accept All */}
        <button
          onClick={() => setVisible(false)}
          className="w-full bg-[#0B7D69] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#09695a] transition"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}