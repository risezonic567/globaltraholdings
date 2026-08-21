import React from "react";
import { motion } from "framer-motion";

export default function LastMinuteCruiseDeals() {
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
            Last-Minute Cruise Deals and Packages
          </h2>

          <div className="space-y-5 text-gray-600 leading-8 max-w-5xl">
            <p>
              Travelers with flexible plans may be able to find last-minute
              cruise options for upcoming departures. Cruise availability and
              pricing can change depending on the sailing date and remaining
              capacity.
            </p>

            <p>
              Last-minute cruise deals may sometimes be available when cruise
              lines have remaining cabins close to departure.
            </p>

            <p>
              Whether you are planning a short getaway or a longer vacation,
              comparing available last-minute cruise packages can help you
              find an option that fits your schedule and budget.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}