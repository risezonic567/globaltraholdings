import React from "react";
import { motion } from "framer-motion";

const familyFeatures = [
  "Kids' play areas",
  "Activities for teenagers",
  "Swimming pools",
  "Family-friendly shows",
  "Family dining options",
  "Water parks",
  "Adventure activities",
  "Shore excursions",
];

export default function FamilyCruisePackages() {
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
            Family and All-Inclusive Cruise Packages
          </h2>

          <div className="space-y-5 text-gray-600 leading-8">
            <p>
              Cruises can be a convenient option for families because they
              provide activities and entertainment for travelers of different
              ages. Families can explore cruise packages designed around
              comfort, entertainment, dining, and destination experiences.
            </p>

            <p>Many family cruises may include:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {familyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
              >
                <p className="font-medium text-gray-800">{feature}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-8 mt-7 max-w-5xl">
            Travelers can also explore packages with multiple inclusions,
            depending on the cruise and booking conditions, making it easier
            to organize different parts of a family vacation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}