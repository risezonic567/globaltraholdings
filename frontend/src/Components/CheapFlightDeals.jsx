import React from "react";
import { Plane, Search, CalendarDays, Tag } from "lucide-react";

export default function CheapFlightDeals() {
    const features = [
        {
            icon: Search,
            title: "Compare Flight Fares",
            description:
                "Compare available fares from multiple airlines to find flight options that match your travel plans and budget.",
        },
        {
            icon: CalendarDays,
            title: "Flexible Travel Dates",
            description:
                "Flexible journey dates can help you explore more flight options and potentially find better airfare.",
        },
        {
            icon: Plane,
            title: "Multiple Airlines",
            description:
                "Explore flight schedules and routes from different airlines in one place.",
        },
        {
            icon: Tag,
            title: "Flight Deals",
            description:
                "Discover available airfare deals and compare options before completing your booking.",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-green-500 font-semibold uppercase tracking-wide">
                        Flight Deals
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                        Cheap Flight Tickets and Flight Deals
                    </h2>

                    <p className="text-gray-600 mt-5 leading-7">

                        Finding affordable flight tickets becomes easier when you compare fares, airlines, journey  dates, and available routes in one place. .

                    </p>

                    <p className="text-gray-600 mt-3 leading-7">
                        Compare airfare from multiple airlines while reviewing departure times, baggage policies, fare conditions, and flight schedules to choose the itinerary that offers the best overall value. Flexible journey  dates may also help you access lower fares and seasonal flight deals.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-lg transition"
                            >
                                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                                    <Icon className="text-green-500" size={24} />
                                </div>

                                <h3 className="text-lg font-bold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-6 mt-3">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}