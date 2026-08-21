import React from "react";
import { motion } from "framer-motion";

const destinations = [
  "Hawaii",
  "The Caribbean",
  "Alaska",
  "The Mediterranean",
  "Europe",
  "Mexico",
  "The Bahamas",
  "Bermuda",
  "The South Pacific",
  "Northern Europe",
  "Asia",
  "Australia and New Zealand",
];

export default function CruiseDestinations() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          Cruise to Hawaii and Other Popular Destinations
        </h2>

        <p className="text-gray-600 leading-8 max-w-5xl mb-7">
          Explore cruise journeys to popular destinations around the world.
          Travelers can combine multiple destinations in one trip while
          enjoying time onboard the ship, scenic ocean views, and different
          shore experiences.
        </p>

        <p className="text-gray-600 leading-8 mb-7">
          Popular cruise destinations include:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <p className="font-semibold text-gray-800">{destination}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}