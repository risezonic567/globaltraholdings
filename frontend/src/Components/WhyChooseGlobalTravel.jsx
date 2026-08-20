import React from "react";
import {
    Search,
    Route,
    DollarSign,
    Headphones,
} from "lucide-react";

export default function WhyChooseGlobalTravel() {
    const benefits = [
        {
            icon: Search,
            title: "Explore Flight Options",
            text: "Explore available flight options based on your destination and travel dates.",
        },
        {
            icon: Route,
            title: "Compare Routes",
            text: "Review routes, schedules, airlines, and available fare options.",
        },
        {
            icon: DollarSign,
            title: "Compare Airfare",
            text: "Compare available airfare options to find an itinerary that fits your budget.",
        },
        {
            icon: Headphones,
            title: "Travel Assistance",
            text: "Get assistance when reviewing flight options and understanding booking requirements.",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4">

                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-green-400 font-semibold">
                        Why Choose Us
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        Why Choose Global Travel Holdings for Flight Booking?
                    </h2>

                    <p className="text-gray-300 leading-7 mt-5">
                        Global Travel Holdings makes flight booking easier by
                        helping travelers explore available routes, review
                        airfare options, and choose flights that fit their
                        journey needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {benefits.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-white/10 border border-white/10"
                            >
                                <Icon
                                    size={30}
                                    className="text-green-400"
                                />

                                <h3 className="font-bold text-lg mt-5">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 text-sm leading-6 mt-3">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}