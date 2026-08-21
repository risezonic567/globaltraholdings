import React from "react";
import { motion } from "framer-motion";

export default function LastMinuteHotels() {
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
            Last-Minute Hotel Deals and Discounts
          </h2>

          <div className="space-y-5 text-gray-600 leading-8">
            <p>
              If you need accommodation on short notice, last-minute hotel
              booking can help you explore available properties for upcoming
              stays. Global Travel Holdings provides hotel options for
              spontaneous trips, weekend getaways, business travel, and other
              short-notice stays.
            </p>

            <p>
              Whether you are booking tonight, the weekend, or an upcoming
              business trip, comparing available hotels can help you choose
              accommodation that fits your travel needs and budget.
            </p>

            <p>
              If you are flexible with your travel plans, you can save a lot of
              money on hotels around the world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}