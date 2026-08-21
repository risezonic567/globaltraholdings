import React from "react";
import { motion } from "framer-motion";

const deals = [
  "Car rentals",
  "Discount car rental offers",
  "Car rental specials",
  "Economy vehicle promotions",
  "Long-term rental discounts",
  "Holiday travel offers",
  "Weekend rental savings",
];

export default function BestCarRentalDeals() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Best Car Rental Deals and Discounts
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            Global Travel Holdings has all kinds of deals and discounts on car
            rentals. You can find car rentals, discount car rental offers and
            even special deals for certain times of the year.
          </p>

          <p>
            They have promotions for people who book their cars early and
            discounts for people who rent cars for longer periods of time.
          </p>

          <p>Some of the deals they have include:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">{deal}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}