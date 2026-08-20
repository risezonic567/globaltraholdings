import React from "react";
import { ArrowRight, Repeat2 } from "lucide-react";

export default function OneWayRoundTrip() {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-green-500 font-semibold">
                        Flexible Flight Options
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                        One-Way and Cheap Round-Trip Flights
                    </h2>

                    <p className="text-gray-600 leading-7 mt-5">
                        Some travelers prefer one-way flights while others choose
                        round trips. Compare available options and select the
                        itinerary that works best for your journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">

                    <div className="border rounded-2xl p-7 hover:shadow-lg transition">
                        <ArrowRight className="text-green-500" size={32} />

                        <h3 className="text-xl font-bold mt-5">
                            One-Way Flights
                        </h3>

                        <p className="text-gray-600 leading-6 mt-3">
                            One-way flights can be useful for flexible travel
                            plans, relocation, multi-city journeys, or trips
                            where the return date is not yet confirmed.
                        </p>
                    </div>

                    <div className="border rounded-2xl p-7 hover:shadow-lg transition">
                        <Repeat2 className="text-green-500" size={32} />

                        <h3 className="text-xl font-bold mt-5">
                            Round-Trip Flights
                        </h3>

                        <p className="text-gray-600 leading-6 mt-3">
                            Round-trip flights can be convenient when your
                            departure and return dates are already planned.
                            Compare both options before booking.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}