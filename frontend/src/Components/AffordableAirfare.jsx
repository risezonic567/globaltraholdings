import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function AffordableAirfare() {
    const points = [
        "Low prices",
        "Discounted tickets",
        "Good deals on international flights",
        "Cheap flights to other countries",
        "Affordable flights",
        "Low cost flight options",
    ];

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <span className="text-green-500 font-semibold">
                            Affordable Airfare
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                            Cheap Airline Tickets and Affordable Airfare Deals
                        </h2>

                        <p className="text-gray-600 leading-7 mt-5">
                            Booking early, choosing flexible journey dates, and
                            exploring multiple airline options can help travelers
                            find affordable airfare throughout the year.
                        </p>

                        <p className="text-gray-600 leading-7 mt-4">
                            Compare available options and choose a flight that
                            works with your destination, schedule, and budget.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {points.map((point, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border"
                            >
                                <CheckCircle2
                                    className="text-green-500 flex-shrink-0"
                                    size={21}
                                />

                                <span className="text-gray-700 font-medium">
                                    {point}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}