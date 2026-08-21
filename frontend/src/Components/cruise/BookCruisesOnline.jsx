import React from "react";
import { motion } from "framer-motion";

export default function BookCruisesOnline() {
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
            Book Cruises Online and Find Cruise Specials
          </h2>

          <div className="space-y-5 text-gray-600 leading-8 max-w-5xl">
            <p>
              It is easy to plan your cruise and book online with Global Travel
              Holdings. You can explore available cruises, compare options,
              and choose a cruise that fits your travel plans.
            </p>

            <p>
              Booking ahead of time can help you plan your trip around your
              preferred schedule and budget. You can also plan a quick getaway
              or a longer cruise from the convenience of home.
            </p>

            <p>
              Whether you are looking for a short weekend cruise or a longer
              ocean journey, online cruise booking makes it easier to explore
              available options.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}