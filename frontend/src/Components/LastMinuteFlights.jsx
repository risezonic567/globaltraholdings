import React from "react";
import { Clock3, Plane } from "lucide-react";

export default function LastMinuteFlights() {
    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                <div className="bg-white rounded-3xl shadow-sm border p-8 md:p-12">

                    <div className="flex flex-col md:flex-row gap-8 items-center">

                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Clock3
                                size={32}
                                className="text-green-500"
                            />
                        </div>

                        <div>
                            <span className="text-green-500 font-semibold">
                                Need to Travel Soon?
                            </span>

                            <h2 className="text-3xl font-bold text-gray-900 mt-2">
                                Last-Minute Flights and Airline Tickets
                            </h2>

                            <p className="text-gray-600 leading-7 mt-4">
                                If you need to book a flight at the last minute,
                                you can still explore available flight options.
                                Airline fares may vary depending on seat
                                availability, travel demand, route, and departure
                                date.
                            </p>

                            <div className="flex items-center gap-2 mt-5 text-gray-700">
                                <Plane
                                    size={20}
                                    className="text-green-500"
                                />

                                <span>
                                    Compare available options before booking.
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}