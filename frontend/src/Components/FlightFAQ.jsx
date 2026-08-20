import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How can I find cheap flights for my trip?",
        answer:
            "To find cheap flights, it's helpful to book early, keep your journey dates flexible, and compare available airline options. Global Travel Holdings helps travelers explore competitive fares and flight options that fit their budget and travel plans.",
    },
    {
        question: "What is the best way to book flights online?",
        answer:
            "The best way to book flights online is to compare available airlines, schedules, fares, and travel options before selecting your itinerary. Global Travel Holdings makes online flight booking easier by helping travelers review available options.",
    },
    {
        question: "How can I compare flight deals and airfare options?",
        answer:
            "When comparing flight deals, consider more than the ticket price. Review baggage policies, flight schedules, layovers, airline services, fare conditions, and the overall value of the itinerary.",
    },
    {
        question: "When is the best time to book a flight?",
        answer:
            "For many trips, booking several weeks or months before departure can provide more availability and flexibility. Pricing varies depending on the destination, season, airline, and travel demand.",
    },
    {
        question: "How far in advance should I book an international flight?",
        answer:
            "Planning international travel several months before departure can give you a wider selection of flights and travel dates. The ideal booking time varies by destination, airline, and season.",
    },
    {
        question: "Is it cheaper to book a one-way or round-trip flight?",
        answer:
            "It depends on the airline, destination, and travel dates. In some cases, round-trip flights may offer better overall value, while one-way flights can be more suitable for flexible or multi-city travel.",
    },
    {
        question: "How can I find affordable international airfare?",
        answer:
            "Booking early, comparing multiple airlines, and remaining flexible with your travel dates can help you explore affordable international airfare options.",
    },
    {
        question: "Can I book domestic and international flights online?",
        answer:
            "Yes. You can explore both domestic and international flight options online, compare available schedules and fares, and choose an itinerary based on your travel requirements.",
    },
    {
        question: "How can I find last-minute flight deals?",
        answer:
            "Last-minute flight availability and pricing can change frequently. If your travel plans are flexible, you may be able to find available fares based on airline inventory, route, and travel demand.",
    },
    {
        question: "Can I change or cancel my flight reservation?",
        answer:
            "Many airlines allow changes or cancellations, but policies vary depending on the airline and fare type. Always review the applicable fare conditions before booking. Our team can assist you in understanding your available options.",
    },
];

export default function FlightFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">

                <div className="text-center mb-12">
                    <span className="text-green-500 font-semibold">
                        FAQ
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(
                                            isOpen ? null : index
                                        )
                                    }
                                    className="w-full flex items-center justify-between gap-5 text-left p-5 md:p-6"
                                >
                                    <span className="font-semibold text-gray-900">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={20}
                                        className={`flex-shrink-0 transition-transform ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-5 md:px-6 pb-6">
                                        <p className="text-gray-600 leading-7">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}