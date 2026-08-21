import React from "react";
import { motion } from "framer-motion";

const luxuryFeatures = [
  "Spacious rooms and suites",
  "Onboard dining",
  "Spa facilities",
  "Special entertainment",
  "Shore excursions",
  "Cruise planning assistance",
  "Premium lounges",
  "Ocean-view rooms",
];

export default function LuxuryCruisePackages() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          Best Luxury Cruise Packages and Vacation Deals
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            If you are looking for a premium vacation experience, luxury
            cruises offer comfortable accommodations, dining, personalized
            services, entertainment, and a variety of onboard activities.
          </p>

          <p>
            Luxury cruise packages can provide a relaxing way to explore
            destinations while enjoying premium amenities during your journey.
          </p>

          <p>Luxury cruises may offer:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {luxuryFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <p className="font-medium text-gray-800">{feature}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}