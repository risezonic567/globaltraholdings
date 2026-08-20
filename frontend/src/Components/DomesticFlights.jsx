import React from "react";

export default function DomesticInternationalTravel() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-green-600 font-semibold tracking-[0.2em] uppercase text-sm">
            Travel Across The World
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Domestic and{" "}
            <span className="text-green-600">
              International Travel Options
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/images/New Folder/Domestic and International Travel Options.jpg.jpeg"
              alt="Domestic and International Travel"
              className="w-full h-[400px]  object-cover"
            />
          </div>

          <div className="space-y-6 text-gray-600 leading-7">

            <p>
             Travel opportunities extend across cities, countries and continents. Whether you are planning a getaway or an international vacation Global Travel Holdings helps you explore destinations that match your interests and travel style.
            </p>

            <p>
              Choose from city breaks, tropical beach vacations, mountain retreats, cultural tours and business travel destinations across North America, Europe, Asia, Australia, the Caribbean, and beyond.
            </p>

            <p>
             With flexible travel choices available throughout the year, planning your next trip becomes easier than ever. Our platform helps you discover the right destination for your next vacation. Browse popular locations and plan your journey with ease. 
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}