import React from "react";
import { motion } from "framer-motion";

const deals = [
  "Early booking promotions",
  "Weekend rental discounts",
  "Seasonal offers",
  "Holiday specials",
  "Long-term rental savings",
  "Business travel discounts",
  "Family travel promotions",
  "Car rental discounts for seniors",
];

export default function AffordableCarDeals() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Affordable Car Rental Deals and Specials
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            Global Travel Holdings has all kinds of deals and specials on car
            rentals. They have early booking promotions, weekend discounts and
            seasonal offers. They also have holiday specials, long-term rental
            savings and business travel discounts.
          </p>

          <p>Some of the deals they have include:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">{deal}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}