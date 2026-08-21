import React from "react";
import { motion } from "framer-motion";

export default function HotelIntro() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Book Hotels Online for Every Type of Trip
        </h2>

        <p className="text-gray-600 leading-8 text-base md:text-lg mb-5">
          Booking a hotel online makes it easier to find accommodation for
          different types of trips, from business travel and family vacations
          to weekend getaways and international holidays.
        </p>

        <p className="text-gray-600 leading-8 text-base md:text-lg mb-5">
          Explore different hotel options, from city-center stays and airport
          hotels to beach resorts, boutique properties, and family-friendly
          accommodation.
        </p>

        <p className="text-gray-600 leading-8 text-base md:text-lg">
          Review hotel locations, amenities, room types, and rates to find a
          property that suits your trip.
        </p>
      </motion.div>
    </section>
  );
}