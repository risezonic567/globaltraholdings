import React from "react";
import { motion } from "framer-motion";

const rentalUses = [
  "Vacations",
  "Business travel",
  "Family road trips",
  "Temporary transportation needs",
  "Relocation travel",
  "Long-distance journeys",
];

export default function WeeklyCarRentals() {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Weekly Car Rentals for Longer Trips
          </h2>

          <div className="space-y-5 text-gray-600 leading-8">
            <p>
              Global Travel Holdings also offers weekly car rentals for people
              who need a car for a longer period of time. This is an option for
              people who are going on an extended vacation or who need a car
              for work.
            </p>

            <p>Weekly rentals are ideal for:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
            {rentalUses.map((use, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
              >
                <p className="font-medium text-gray-800">{use}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}