import React from "react";
import { motion } from "framer-motion";

const cruiseTypes = [
  "Romantic cruises",
  "Family vacations",
  "Luxury cruises",
  "Adventure cruises",
  "Group travel",
  "Solo vacations",
  "Weekend cruises",
  "Long ocean trips",
];

export default function CruisePackageDeals() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          Cruise Package Deals for Every Traveler
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            Global Travel Holdings offers cruise vacation packages for
            different travel preferences, budgets, and trip types. Travelers
            can explore cruise options for romantic getaways, family
            vacations, luxury holidays, group travel, solo trips, weekend
            cruises, and longer ocean journeys.
          </p>

          <p>
            Many cruises include accommodation, entertainment, food, and visits
            to different destinations, making cruises a convenient way to
            travel and experience multiple places on one trip.
          </p>

          <p>You can choose from:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {cruiseTypes.map((type, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <p className="font-semibold text-gray-800">{type}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}