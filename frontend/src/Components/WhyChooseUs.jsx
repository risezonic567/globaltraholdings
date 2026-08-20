import React from "react";

export default function WhyChooseGlobalTravel() {
  const benefits = [
    "Flight, hotel, cruise, car rental and vacation package options in one place",
    "Domestic and international travel solutions",
    "Competitive travel deals throughout the year",
    "Flexible booking options",
    "Travel choices for business and leisure travelers",
    "User-friendly booking experience",
    "Access to popular travel destinations worldwide",
    "Secure and convenient travel planning",
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-12">

          <span className="text-green-600 font-semibold tracking-[0.2em] uppercase text-sm">
            Why Travel With Us
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Why Choose{" "}
            <span className="text-green-600">
              Global Travel Holdings?
            </span>
          </h2>

          <p className="text-gray-600 mt-5 leading-7">
            Travel planning should be simple, reliable and convenient.
            Global Travel Holdings brings together travel services so you
            can explore your options from one trusted platform.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold mb-4">
                {index + 1}
              </div>

              <p className="text-gray-700 leading-6">
                {benefit}
              </p>
            </div>
          ))}

        </div>

        <div className="max-w-4xl mx-auto text-center mt-12">
          <p className="text-gray-600 leading-7">
            Whether you are planning months in advance or searching for
            last-minute travel opportunities, we are here to help you
            explore your travel choices with confidence. Our platform
            provides complete booking solutions for flights, hotels,
            rentals, cruises, and vacation packages.
          </p>
        </div>

      </div>
    </section>
  );
}