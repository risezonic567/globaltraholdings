import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "A wide selection of hotels worldwide",
  "Accommodation for different budgets",
  "Luxury hotels and resorts",
  "Family-friendly hotel options",
  "Budget-friendly hotels",
  "Business and leisure accommodation",
  "Convenient online hotel booking",
  "Hotel deals and seasonal offers",
  "Last-minute accommodation options",
  "Hotel and vacation packages",
];

export default function WhyChooseHotelBooking() {
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
            Why Choose Global Travel Holdings for Hotel Booking?
          </h2>

          <div className="space-y-5 text-gray-600 leading-8">
            <p>
              Finding the right hotel starts with choosing accommodation that
              matches your destination, budget, travel dates, and preferences.
              Global Travel Holdings provides hotel options for travelers
              planning domestic and international trips.
            </p>

            <p>Travelers choose us because we have:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
              >
                <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-green-600" />

                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5 text-gray-600 leading-8 mt-8">
            <p>
              Whether you are planning a business trip, family vacation,
              romantic getaway, or international adventure, Global Travel
              Holdings provides hotel options to help you plan your stay around
              your destination, travel dates, budget, and accommodation
              preferences.
            </p>

            <p>
              Our goal is to make hotel booking more convenient by bringing
              together accommodation options for different destinations, travel
              needs, and budgets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}