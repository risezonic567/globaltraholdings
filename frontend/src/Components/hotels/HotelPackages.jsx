import React from "react";
import { motion } from "framer-motion";

const packages = [
  "Family vacations",
  "Romantic getaways",
  "Honeymoons",
  "Business trips",
  "Weekend breaks",
  "Beach holidays",
  "International vacations",
];

export default function HotelPackages() {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Hotel Packages and Vacation Deals
          </h2>

          <div className="space-y-5 text-gray-600 leading-8">
            <p>
              Global Travel Holdings offers hotel and vacation package options
              that may include accommodation combined with flights, car
              rentals, airport transfers, cruises, or sightseeing services,
              depending on the destination and available options.
            </p>

            <p>Whether you are planning:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
            {packages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
              >
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-8 mt-7">
            Hotel packages can make it more convenient to organize multiple
            parts of your trip in one place.
          </p>
        </motion.div>
      </div>
    </section>
  );
}