import React from "react";
import { motion } from "framer-motion";

const vehicles = [
  "Economy cars",
  "Compact vehicles",
  "Sedans",
  "SUVs",
  "Minivans",
  "Premium vehicles",
  "Luxury cars",
  "Convertible rentals",
];

export default function EconomyLuxuryCars() {
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
            Economy and Luxury Car Rental Options
          </h2>

          <div className="space-y-5 text-gray-600 leading-8">
            <p>
              Global Travel Holdings has all kinds of cars to choose from,
              including economy and luxury options. They have fuel-efficient
              cars for people who want to save money and luxury cars for people
              who want to travel in style.
            </p>

            <p>Some of the cars they have include:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-7">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-800">{vehicle}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}