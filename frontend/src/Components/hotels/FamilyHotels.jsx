import React from "react";
import { motion } from "framer-motion";

export default function FamilyHotels() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-18">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Family Hotels for Every Traveler
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            When traveling with family, choosing comfortable and convenient
            accommodation can make the trip easier. Global Travel Holdings
            offers family-friendly hotel options that may include larger
            rooms, family suites, connecting rooms, and other amenities
            depending on the property.
          </p>

          <p>
            Whether you are planning a family vacation to the beach, a theme
            park trip or a sightseeing adventure, family hotels make it easier
            to travel with kids.
          </p>

          <p>
            Families can review individual property details to find
            accommodation that suits their travel dates, group size, and
            preferences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}