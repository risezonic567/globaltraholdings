import React from "react";
import { motion } from "framer-motion";

const deals = [
  "Early booking deals",
  "Seasonal cruise prices",
  "Family cruise deals",
  "Cheap weekend cruises",
  "Holiday cruise deals",
  "Limited-time cruise offers",
];

export default function CheapCruiseDeals() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          Cheap Cruise Deals and Cruise Specials
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            You do not always have to spend a large amount to enjoy a cruise
            vacation. Cruise prices and available offers can vary depending on
            the destination, cruise line, travel dates, and availability.
          </p>

          <p>
            Travelers can compare available cruise options and look for offers
            that fit their travel plans and budget.
          </p>

          <p>Available offers may include:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <p className="font-semibold text-gray-800">{deal}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}