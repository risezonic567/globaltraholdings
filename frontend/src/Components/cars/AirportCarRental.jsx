import React from "react";
import { motion } from "framer-motion";

export default function AirportCarRental() {
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
            Cheap Airport Car Rental and Airport Rental Cars
          </h2>

          <p className="text-gray-600 leading-8 max-w-5xl">
            Airport car rentals can be a convenient option for travelers who
            want to continue their journey after arriving at their destination.
            Global Travel Holdings provides airport rental options where
            available, allowing travelers to explore vehicles and arrange
            rentals based on their travel plans.
          </p>
        </motion.div>
      </div>
    </section>
  );
}