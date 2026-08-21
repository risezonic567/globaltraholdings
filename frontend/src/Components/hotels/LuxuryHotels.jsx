import React from "react";
import { motion } from "framer-motion";

const hotelOptions = [
  "Boutique hotels",
  "Luxury hotels and resorts",
  "Beach resorts",
  "City-center hotels",
  "Business and executive hotels",
  "Airport hotels",
];

export default function LuxuryHotels() {
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
            Luxury Hotels and Resorts Worldwide
          </h2>

          <div className="space-y-5 text-gray-600 leading-8">
            <p>
              For travelers looking for a more premium stay, luxury hotels and
              resorts offer enhanced comfort, convenient services, and a range
              of premium amenities. Global Travel Holdings helps travelers
              explore luxury accommodation in popular destinations around the
              world.
            </p>

            <p>
              Luxury hotels may offer spacious rooms and suites, on-site
              dining, spa facilities, premium services, and other amenities
              designed for a comfortable stay. Available features vary by
              property, so travelers can review individual hotel details
              before choosing accommodation.
            </p>

            <p>Hotel options may include:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {hotelOptions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">{item}</h3>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-8 mt-6">
            Travelers can choose accommodation based on their destination,
            travel plans, preferred amenities, and budget.
          </p>
        </motion.div>
      </div>
    </section>
  );
}