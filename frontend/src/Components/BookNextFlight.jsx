import React from "react";
import { useNavigate } from "react-router-dom";
import { Plane } from "lucide-react";

export default function BookNextFlight() {
    const navigate = useNavigate();

    return (
        <section className="py-16 md:py-20 bg-green-500">
            <div className="max-w-5xl mx-auto px-4 text-center text-white">

                <div className="mx-auto w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Plane size={32} />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mt-6">
                    Book Your Next Flight with Global Travel Holdings
                </h2>

                <p className="max-w-3xl mx-auto mt-5 text-green-50 leading-7">
                    When you're ready to book your next flight, compare prices,
                    review schedules, explore available routes, and choose the
                    flight option that works best for your journey.
                </p>

                <button
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                    className="mt-8 bg-white text-green-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition shadow-lg"
                >
                    Search Flights
                </button>

            </div>
        </section>
    );
}