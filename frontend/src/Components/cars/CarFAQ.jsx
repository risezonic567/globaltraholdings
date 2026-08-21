import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I find the best car rental deals?",
    answer:
      "To find the best car rental deals, it's recommended to book in advance, compare different vehicle categories, and remain flexible with your travel dates. At Global Travel Holdings, we help travelers explore competitive pricing, seasonal promotions, and affordable rental options to suit every budget.",
  },
  {
    question: "Can I book a car rental online?",
    answer:
      "Yes. You can book car rental online through Global Travel Holdings. Our team helps you compare available vehicles, rental terms, and pricing, making the booking process simple and convenient.",
  },
  {
    question: "What should I consider when choosing a rental car?",
    answer:
      "When selecting a rental vehicle, consider the number of passengers, luggage space, fuel efficiency, travel distance, and your budget. Whether you need an economy car rental for everyday travel or a luxury car rental for a premium experience, we'll help you choose the right vehicle for your trip.",
  },
  {
    question: "Can I rent a car at an airport?",
    answer:
      "Yes. We offer convenient airport car rental options at many destinations, allowing you to pick up your vehicle shortly after arrival. We also provide airport pickup and drop services where available for a seamless travel experience.",
  },
  {
    question: "Are cheap car rental options available?",
    answer:
      "Absolutely. We help travelers find cheap car rentals, cheap car hire, and other affordable rental options through trusted providers. Availability and pricing may vary depending on the destination, travel dates, and vehicle type.",
  },
  {
    question: "What is the difference between economy and luxury car rentals?",
    answer:
      "An economy car rental is designed for affordability and fuel efficiency, making it ideal for everyday travel and shorter trips. A luxury car rental offers premium comfort, advanced features, and enhanced performance, making it a great choice for business travel, special occasions, or travelers seeking a more refined driving experience.",
  },
  {
    question: "Can I book a rental car for a week?",
    answer:
      "Yes. We offer flexible weekly car rentals as well as extended rental options for vacations, business travel, and long-term stays. Our team can help you find a rental plan that fits your itinerary.",
  },
  {
    question: "Can I change or cancel my car rental reservation?",
    answer:
      "Many rental providers allow changes or cancellations, although policies vary depending on the rental company and booking terms. If you need to modify or cancel your reservation, our travel specialists will assist you and explain the options available based on your booking conditions.",
  },
  {
    question: "How can I compare hotel prices before booking?",
    answer:
      "Comparing hotel prices involves reviewing accommodation type, location, included amenities, cancellation policies, and overall value—not just the nightly rate. Our team helps you evaluate multiple options to ensure you choose the hotel that best fits your travel needs and budget.",
  },
  {
    question: "Can I change or cancel my hotel reservation?",
    answer:
      "Many hotels offer flexible modification and cancellation policies, although terms vary depending on the property and booking conditions. If you need to change or cancel your hotel reservation, our travel specialists will assist you and explain the options available based on your booking.",
  },
];

export default function CarFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-14 md:py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-600 mt-3">
          Find answers to common questions about online hotel booking.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-5 text-left px-5 md:px-7 py-5"
              >
                <span className="font-semibold text-gray-900 text-base md:text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-green-600" : "text-gray-500"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 md:px-7 pb-6">
                  <p className="text-gray-600 leading-7">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}