import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I find the best cruise deals?",
    answer:
      "To find the best cruise deals, it's a good idea to book early, stay flexible with your travel dates, and compare different cruise itineraries. At Global Travel Holdings, we help travelers explore competitive cruise package deals, seasonal promotions, and exclusive cruise offers to maximize value.",
  },
  {
    question: "Can I book a cruise online?",
    answer:
      "Yes. You can book cruise online with Global Travel Holdings. Our travel specialists make the booking process simple by helping you compare cruise lines, itineraries, accommodations, and available packages based on your travel preferences.",
  },
  {
    question: "What types of cruise packages are available?",
    answer:
      "We offer a variety of cruise options, including family cruise packages, all inclusive cruise packages, luxury cruises, romantic getaways, and international cruise vacations. Whether you're looking for a short escape or an extended voyage, we can help you find the right cruise package.",
  },
  {
    question: "Are last-minute cruise deals available?",
    answer:
      "Yes. Depending on availability, travelers may find last minute cruise deals and last minute cruise cancellation deals on select sailings. Our team can help you explore the best available options for your preferred travel dates.",
  },
  {
    question: "What are all-inclusive cruise packages?",
    answer:
      "All inclusive cruise packages typically combine accommodations, onboard dining, entertainment, and a variety of amenities into one convenient vacation package. The exact inclusions vary by cruise line and itinerary, and our travel experts can help you compare available options.",
  },
  {
    question: "Are family cruise packages available?",
    answer:
      "Absolutely. We offer family cruise packages designed for travelers of all ages. Many cruises feature family-friendly accommodations, onboard entertainment, children's activities, and exciting destinations that make vacations enjoyable for everyone.",
  },
  {
    question: "How do I choose the right cruise for my trip?",
    answer:
      "The right cruise depends on your destination, travel budget, trip duration, preferred cruise line, and the type of experience you're looking for. Whether you're interested in a luxury voyage, a tropical island getaway, or a family vacation, our travel specialists can recommend cruise options that match your travel goals.",
  },
  {
    question: "What should I consider before booking a cruise?",
    answer:
      "Before booking a cruise, consider factors such as your destination, travel dates, cabin type, onboard amenities, itinerary, visa requirements (if applicable), and cancellation policies. Our team is here to guide you through every step, ensuring you choose the cruise that best suits your needs and budget.",
  },
 
];

export default function CruiseFAQ() {
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