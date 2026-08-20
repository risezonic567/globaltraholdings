import React from "react";
import { Globe, PlaneTakeoff, BriefcaseBusiness, Users } from "lucide-react";

export default function DomesticInternationalFlights() {
    const options = [
        {
            icon: PlaneTakeoff,
            title: "Flights Within the United States",
            text: "Explore flight options between popular cities and destinations across the United States.",
        },
        {
            icon: Globe,
            title: "International Flights",
            text: "Find flight options to international destinations and compare available airlines, routes, and schedules.",
        },
        {
            icon: BriefcaseBusiness,
            title: "Business Trips",
            text: "Plan business travel with flight options that fit your preferred schedule and travel requirements.",
        },
        {
            icon: Users,
            title: "Family Vacations",
            text: "Explore flight options for family vacations, holidays, and leisure trips.",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">

                <div className="max-w-3xl mb-12">
                    <span className="text-green-500 font-semibold">
                        Domestic & International
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                        Book Domestic and International Flights
                    </h2>

                    <p className="text-gray-600 leading-7 mt-5">
                        Whether you're traveling within the United States or
                        planning an international journey, Global Travel Holdings
                        offers flight booking options for popular destinations
                        around the world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {options.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
                            >
                                <Icon
                                    size={30}
                                    className="text-green-500 mb-5"
                                />

                                <h3 className="font-bold text-lg text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-6 mt-3">
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