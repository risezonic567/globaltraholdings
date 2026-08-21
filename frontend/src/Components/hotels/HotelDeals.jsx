import React from "react";
import { motion } from "framer-motion";

const deals = [
  "Hotel discounts",
  "Weekend getaway deals",
  "Holiday promotions",
  "Early booking savings",
  "Long stay discounts",
  "Family travel deals",
  "Luxury hotel promotions",
  "Business travel rates",
];

export default function HotelDeals() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Hotel Booking Deals and Special Offers
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            Hotel deals, promotions, and special offers can vary by destination,
            property, and travel dates. Global Travel Holdings helps travelers
            explore available accommodation offers when planning their trips.
          </p>

          <p>Depending on where you're going and when you travel you can find:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">{deal}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 leading-8 mt-7">
          Comparing available hotel offers can help you choose accommodation
          that matches your preferred location, travel dates, and budget.
        </p>
      </motion.div>
    </section>
  );
}