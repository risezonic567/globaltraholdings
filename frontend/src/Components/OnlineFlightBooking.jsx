import React from "react";
import { Search, Calendar, Clock, CreditCard } from "lucide-react";

export default function OnlineFlightBooking() {
    const steps = [
        {
            icon: Search,
            title: "Search Flights",
            text: "Enter your departure city, destination, and travel dates.",
        },
        {
            icon: Calendar,
            title: "Choose Your Dates",
            text: "Select the journey dates that work best for your trip.",
        },
        {
            icon: Clock,
            title: "Compare Schedules",
            text: "Review available flight times, airlines, routes, and fares.",
        },
        {
            icon: CreditCard,
            title: "Book Your Flight",
            text: "Choose your preferred flight and complete your booking online.",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-green-500 font-semibold">
                        Easy Online Booking
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        Online Flight Booking and Flight Reservations
                    </h2>

                    <p className="text-gray-600 leading-7 mt-5">
                        Booking flights online is easy. Search flights, compare
                        available fares, review schedules, and complete your
                        booking online.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-sm"
                            >
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-5">
                                    <Icon className="text-green-500" />
                                </div>

                                <div className="text-sm text-green-500 font-bold">
                                    0{index + 1}
                                </div>

                                <h3 className="font-bold text-lg mt-2">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-6 mt-3">
                                    {step.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}