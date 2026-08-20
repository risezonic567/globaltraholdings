import React from "react";
import { Globe2, MapPin, CalendarDays, Search } from "lucide-react";

export default function InternationalFlightBooking() {
    const steps = [
        {
            icon: MapPin,
            title: "Choose Your Cities",
            text: "Select your departure and arrival cities.",
        },
        {
            icon: CalendarDays,
            title: "Select Travel Dates",
            text: "Choose the dates for your international journey.",
        },
        {
            icon: Search,
            title: "Compare Flights",
            text: "Review available fares, airlines, routes, and schedules.",
        },
        {
            icon: Globe2,
            title: "Book Your Flight",
            text: "Select the flight that fits your travel requirements.",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-green-500 font-semibold">
                        International Travel
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        Book International Flights Online
                    </h2>

                    <p className="text-gray-600 leading-7 mt-5">
                        Booking international flights is easier when you can
                        review available flight options, schedules, airlines,
                        and fares before booking your trip.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                className="text-center p-6 rounded-2xl bg-gray-50"
                            >
                                <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                                    <Icon className="text-green-500" />
                                </div>

                                <h3 className="font-bold text-lg mt-5">
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