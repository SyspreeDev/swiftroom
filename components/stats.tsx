"use client";

import { useEffect, useState } from "react";

const stats = [
  {
    value: 14,
    suffix: "+",
    label: "Years In Business",
  },
  {
    value: 3400,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    value: 3.5,
    suffix: "K+",
    label: "Projects Completed",
  },
  {
    value: 70,
    suffix: "+",
    label: "Trained Staff",
  },
];

export default function Stats() {
  const [counts, setCounts] = useState<number[]>(
    stats.map(() => 0)
  );

  useEffect(() => {
    const timers = stats.map((stat, i) => {
      let start = 0;
      const end = stat.value;

      const step = end / 40;

      return setInterval(() => {
        start += step;

        if (start >= end) {
          start = end;
          clearInterval(timers[i]);
        }

        setCounts((prev) => {
          const copy = [...prev];
          copy[i] = Number(start.toFixed(1));
          return copy;
        });
      }, 30);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="py-16 bg-[#fff]">

      <div className="max-w-6xl mx-auto px-6">

        {/* Green Card */}
        <div className="bg-[#008970] rounded-xl shadow-lg py-10 px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">

            {stats.map((stat, i) => (
              <div key={i}>

                {/* Number */}
                <h3 className="text-3xl md:text-4xl font-semibold mb-2">
                  {counts[i]}
                  {stat.suffix}
                </h3>

                {/* Label */}
                <p className="text-sm opacity-90">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
