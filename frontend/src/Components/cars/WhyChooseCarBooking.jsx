import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "Car rental options for different budgets",
  "Convenient online car rental booking",
  "Airport rental options where available",
  "Economy, standard, premium, and luxury vehicle choices",
  "Short-term and weekly rental options",
  "Car rental deals and seasonal offers",
  "Vehicle options for business and leisure travel",
  "Rental options for families, groups, and road trips",
  "Vehicle choices based on destination and availability",
];

export default function WhyChooseCarBooking() {
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
           Why Choose Global Travel Holdings for Car Rentals
          </h2>

          <div className="space-y-5 text-gray-600 leading-8">
            <p>
             Global Travel Holdings provides car rental options for different travel needs, budgets, and rental periods. Travelers can explore available vehicles and choose an option based on their destination, travel dates, vehicle preferences, and transportation requirements. They have car rentals, easy online booking and airport pickup and drop convenience. They also have economy and luxury vehicle choices, affordable car rental deals and weekly car rentals for trips.

            </p>

            <p>Some of the reasons to choose Global Travel Holdings include:</p>
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
             Whether you are planning a business trip, family vacation, road trip, or extended stay, you can explore car rental options that fit your destination, travel dates, vehicle preferences, and budget. 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}