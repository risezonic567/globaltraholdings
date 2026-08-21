import React from "react";
import { motion } from "framer-motion";

const rentalOptions = [
  "Airport car rentals",
  "City center pickup locations",
  "Economy rentals",
  "Luxury vehicles",
  "Family-friendly SUVs",
];

export default function FlexibleCarRental() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Flexible Car Rental Services Worldwide
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            Global Travel Holdings provides car rental options in destinations
            worldwide, with vehicle choices and pickup locations varying by
            destination.
          </p>

          <p>
            Travelers can explore rental options for airport arrivals, city
            travel, business trips, family vacations, and road trips.
          </p>

          <p>Available options may include:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
          {rentalOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">{option}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}