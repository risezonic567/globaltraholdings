import React from "react";
import { motion } from "framer-motion";

export default function OnlineHotelBooking() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Online Hotel Booking and Hotel Reservations
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            Booking a hotel should be fast, secure and easy. Our website allows
            you to search hotels, compare amenities, and book accommodations in
            destinations worldwide.
          </p>

          <p>
            Whether you book ahead or at the last minute, online booking makes
            planning your trip easier.
          </p>

          <p>
            You can choose from thousands of hotels in cities, vacation spots,
            airports, business areas and popular attractions. Pick a hotel that
            fits your schedule and travel style.
          </p>

          <p>
            With all kinds of hotels available, planning your next trip is easy
            from start to finish.
          </p>
        </div>
      </motion.div>
    </section>
  );
}