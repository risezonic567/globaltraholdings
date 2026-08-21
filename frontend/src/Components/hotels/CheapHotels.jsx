import React from "react";
import { motion } from "framer-motion";

export default function CheapHotels() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Cheap Hotels and Affordable Hotel Rooms
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            Travelers looking for affordable accommodation can explore cheap
            hotels and budget-friendly hotel rooms for different types of
            trips. Global Travel Holdings provides hotel options in
            destinations around the world, allowing travelers to compare room
            types, locations, amenities, availability, and rates.
          </p>

          <p>
            Whether you are planning a city trip, business trip, weekend
            getaway, or longer vacation, you can choose a hotel based on your
            travel needs, preferred location, and budget.
          </p>

          <p>
            Options can include hotels near airports, city-center properties,
            and other convenient locations for travelers seeking practical
            amenities and good value.
          </p>

          <p>
            Whether you are traveling alone, with friends, with family, or with
            a partner, you can choose accommodation based on your preferred
            location and travel dates.
          </p>
        </div>
      </motion.div>
    </section>
  );
}