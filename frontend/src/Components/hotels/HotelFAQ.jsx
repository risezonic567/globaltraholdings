import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I find the best hotel deals?",
    answer:
      "To find the best hotel deals, book your stay in advance whenever possible, compare different accommodation options, and stay flexible with your travel dates. At Global Travel Holdings, we help travelers explore competitive rates, seasonal promotions, and exclusive hotel offers to maximize value.",
  },
  {
    question: "What is the best way to book hotels online?",
    answer:
      "The best way to book hotels online is through a trusted travel agency that offers a wide range of accommodation options, transparent pricing, and personalized assistance. Global Travel Holdings makes online hotel booking simple by helping you compare hotels that fit your destination, budget, and travel preferences.",
  },
  {
    question: "How can I find cheap hotels worldwide?",
    answer:
      "Finding cheap hotels worldwide is easier when you book early, travel during off-peak seasons, and compare different accommodation options. We help travelers discover affordable hotels and budget-friendly stays across popular destinations around the world.",
  },
  {
    question: "When is the best time to book a hotel?",
    answer:
      "For the best availability and pricing, it's generally recommended to book your hotel several weeks or months before your trip. However, travelers with flexible schedules may also find excellent last minute hotel deals depending on availability.",
  },
  {
    question: "Can I find last-minute hotel deals online?",
    answer:
      "Yes. We help travelers explore last minute hotel deals for many destinations worldwide. While availability varies by location and travel dates, our travel specialists work to find the best available options for your stay.",
  },
  {
    question: "How can I find hotel discounts and special offers?",
    answer:
      "Many hotels offer seasonal promotions, package savings, and exclusive discounts throughout the year. At Global Travel Holdings, we help travelers explore hotel discounts, hotel offers, and special promotions to secure better value on their accommodations.",
  },
  {
    question: "How can I find family-friendly hotels?",
    answer:
      "When traveling with family, consider hotels that offer spacious rooms, convenient locations, family-oriented amenities, and easy access to local attractions. We help you compare family hotels that provide comfortable accommodations for travelers of all ages.",
  },
  {
    question: "What should I look for when booking a luxury hotel?",
    answer:
      "When choosing a luxury hotel, consider factors such as location, room quality, guest reviews, premium amenities, dining options, wellness facilities, and personalized services. Our travel experts can recommend luxury accommodations that match your travel style and expectations.",
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

export default function HotelFAQ() {
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