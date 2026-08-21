import React from "react";
import { motion } from "framer-motion";

const services = [
  "Business travelers",
  "Family vacations",
  "International visitors",
  "Road trips",
  "Weekend getaways",
  "Group travel",
];

export default function AirportPickupDrop() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Airport Pickup and Drop Services
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            Global Travel Holdings also offers airport pickup and drop services.
            This means you can pick up your car at the airport and then drop it
            off when you leave. This is convenient for people who are traveling
            for work or on vacation.
          </p>

          <p>These services are especially helpful for:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <p className="font-medium text-gray-800">{service}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}