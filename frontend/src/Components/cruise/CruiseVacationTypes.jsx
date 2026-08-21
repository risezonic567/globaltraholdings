import React from "react";
import { motion } from "framer-motion";

const vacationTypes = [
  "Romantic cruises",
  "Family vacations",
  "Luxury cruises",
  "Adventure cruises",
  "Wellness trips",
  "Group cruises",
  "Honeymoons",
  "Holiday cruises",
  "Celebration cruises",
  "Multi-country trips",
];

export default function CruiseVacationTypes() {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Cruise Trip Packages for Every Type of Vacation
          </h2>

          <div className="space-y-5 text-gray-600 leading-8">
            <p>
              Travelers can find cruise packages for different vacation
              styles, from romantic getaways and family vacations to luxury
              holidays, adventure trips, and group travel.
            </p>

            <p>You can choose from:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {vacationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition"
              >
                <p className="font-medium text-gray-800">{type}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-8 mt-8 max-w-5xl">
            Depending on the cruise and booking, packages may combine
            transportation, accommodation, entertainment, dining, and
            destination experiences in one vacation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}