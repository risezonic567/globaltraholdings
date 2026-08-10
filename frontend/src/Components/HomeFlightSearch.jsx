import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


import {
  ChevronDown,
  PlaneTakeoff,
  PlaneLanding,
  Calendar as CalendarIcon,
  Search,
  ArrowLeftRight,
  Users,
} from "lucide-react";

export default function FlightSearchBox() {
  const [tripType, setTripType] = useState("oneway");
  const [departure, setDeparture] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);

  const [showDepCal, setShowDepCal] = useState(false);
  const [showRetCal, setShowRetCal] = useState(false);
  const [showTravellers, setShowTravellers] = useState(false);

  const depRef = useRef(null);
  const retRef = useRef(null);
  const travRef = useRef(null);

  const navigate = useNavigate();

  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");

  const [fromAirports, setFromAirports] = useState([]);
  const [toAirports, setToAirports] = useState([]);

  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadingFrom, setLoadingFrom] = useState(false);
  const [loadingTo, setLoadingTo] = useState(false);


  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    cabin: "Economy",
  });

  const priceData = {
    "2026-04-24": 8706,
    "2026-04-25": 8738,
    "2026-04-26": 9108,
    "2026-04-27": 8145,
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().split("T")[0];
  };

  const originRef = useRef(null)
  const destinationRef = useRef(null)



  const handleSwap = () => {
    const tempQuery = fromQuery;
    setFromQuery(toQuery);
    setToQuery(tempQuery);

  }

  const handleSearch = (e) => {
    e.preventDefault();

    if (
      travellers.adults === 0 &&
      (travellers.children > 0 || travellers.infants > 0)
    ) {
      alert("At least 1 adult is required");
      return;
    }

    const payload = {
      from: fromQuery,
      to: toQuery,
      tripType: tripType === "round" ? "roundtrip" : "oneway",
      departDate: formatDate(departure),
      returnDate:
        tripType === "round" && returnDate
          ? formatDate(returnDate)
          : null,
      adult: travellers.adults,
      children: travellers.children,
      infant: travellers.infants,
      classe: travellers.cabin.toUpperCase(),
    };

    localStorage.setItem("payload", JSON.stringify(payload));

    navigate("/flight-results", {
      state: payload,
    });
  };

  const handleTravellerChange = (type, operation) => {
    setTravellers((prev) => {
      let value = prev[type];
      if (operation === "inc") value++;
      if (operation === "dec") value--;
      if (type === "adults" && value < 1) return prev;
      if (type !== "adults" && value < 0) return prev;
      return { ...prev, [type]: value };
    });
  };

  const searchAirports = async (value, type) => {

    if (type === "from") {
      setFromQuery(value);
    } else {
      setToQuery(value);
    }

    if (type === "from") {
      setLoadingFrom(true);
    } else {
      setLoadingTo(true);
    }

    if (value.length < 2) {
      if (type === "from") {
        setFromAirports([]);
        setShowFrom(false);
      } else {
        setToAirports([]);
        setShowTo(false);
      }
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://www.globaltravel-holdings.com/api/flight/location?query=${value}`
      );

      const result = await response.json();
      const airportList = result?.data?.data || [];

      if (type === "from") {
        setFromAirports(airportList);
        setShowFrom(true);
      } else {
        setToAirports(airportList);
        setShowTo(true);
      }

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    function handleClickOutSide(event) {

      if (originRef.current && !originRef.current.contains(event.target)) {
        setShowFrom(false)
      }

      if (destinationRef.current && !destinationRef.current.contains(event.target)) {
        setShowTo(false)
      }

    }
    document.addEventListener("mousedown", handleClickOutSide)

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide)
    }

  }, [])

  return (
    <div className="max-w-7xl mx-auto sm:mb-14 md:mt-20 p-6 md:pb-20  rounded-3xl shadow-2xl border border-none relative z-[999]">

      <div className="flex bg-gray-100 p-1 rounded-xl w-fit mb-6">
        {["oneway", "round"].map((type) => (
          <button
            type="button"
            key={type}
            onClick={() => {
              setTripType(type)
              if (type === "round" && !returnDate) setReturnDate(new Date())
            }}
            className={`px-8 py-2 rounded-lg text-sm font-bold transition-all ${tripType === type ? "bg-white text-green-600 shadow-md" : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {type === "oneway" ? "One Way" : "Round Trip"}
          </button>
        ))}
      </div>

      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1  lg:grid-cols-12 border-2 border-gray-100 rounded-3xl shadow-sm relative overflow-visible bg-white">

          <div className="lg:col-span-3 p-5 border-b lg:border-b-0 lg:border-r relative hover:bg-blue-50 transition-colors rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none" ref={originRef}>
            <label className="flex items-center gap-2  text-gray-400 text-xs font-bold uppercase mb-1">
              <PlaneTakeoff size={16} className="text-green-600 " /> From
            </label>
            <input
              type="text"
              placeholder="Delhi"
              className="w-full text-xl font-black focus:outline-none bg-transparent"
              value={fromQuery}
              onChange={(e) => searchAirports(e.target.value, "from")}
            />

            {showFrom && (
              <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-xl max-h-72 overflow-y-auto z-50">

                {loading ? (
                  <div className="p-4 text-center">
                    Searching...
                  </div>
                ) : fromAirports.length > 0 ? (

                  fromAirports.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 border-b cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setFromQuery(item.iata_code);
                        setShowFrom(false);
                      }}
                    >
                      <div className="flex gap-3">

                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          {item.iata_code}
                        </div>

                        <div>
                          <p className="font-semibold">
                            {item.city_name}
                          </p>

                          <p className="text-xs text-gray-500">
                            {item.name}
                          </p>
                        </div>

                      </div>
                    </div>
                  ))

                ) : (

                  <div className="p-4 text-center">
                    No Airport Found
                  </div>

                )}

              </div>
            )}

            <button
              type="button"
              onClick={handleSwap}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 bg-white p-2.5 rounded-full shadow-lg border border-gray-100 text-green-600 hover:bg-green-600 hover:text-white transition-all transform hover:scale-110 hidden lg:flex"
            >
              <ArrowLeftRight size={18} />
            </button>
          </div>


          <div className="lg:col-span-3 p-5  relative border-b lg:border-b-0 lg:border-r hover:bg-blue-50 transition-colors" ref={destinationRef}>
            <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
              <PlaneLanding size={16} className="text-green-600" /> To
            </label>
            <input
              type="text"
              placeholder="Dubai"
              className="w-full text-xl font-black focus:outline-none bg-transparent"
              value={toQuery}
              onChange={(e) => searchAirports(e.target.value, "to")}
            />

            {showTo && (
              <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-xl max-h-72 overflow-y-auto z-50">

                {loading ? (
                  <div className="p-4 text-center">
                    Searching...
                  </div>
                ) : toAirports.length > 0 ? (

                  toAirports.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 border-b cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setToQuery(item.iata_code);
                        setShowTo(false);
                      }}
                    >
                      <div className="flex gap-3">

                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          {item.iata_code}
                        </div>

                        <div>
                          <p className="font-semibold">
                            {item.city_name}
                          </p>

                          <p className="text-xs text-gray-500">
                            {item.name}
                          </p>
                        </div>

                      </div>
                    </div>
                  ))

                ) : (

                  <div className="p-4 text-center">
                    No Airport Found
                  </div>

                )}

              </div>
            )}

          </div>

          <div
            ref={depRef}
            onClick={() => setShowDepCal(!showDepCal)}
            className="lg:col-span-2 p-5 border-b lg:border-b-0 lg:border-r cursor-pointer relative hover:bg-blue-50 transition-colors"
          >
            <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
              <CalendarIcon size={16} className="text-green-600" /> Departure
            </label>
            <div className="flex items-center justify-between gap-2 text-base sm:text-xl font-black">
              {departure.toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}
              <ChevronDown size={18} className={`text-gray-300 transition-transform ${showDepCal ? "rotate-180" : ""}`} />
            </div>
            <p className="text-xs text-gray-400">{departure.toLocaleDateString("en-GB", { weekday: "long" })}</p>

            <AnimatePresence>
              {showDepCal && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 z-[100] mt-2 bg-white shadow-2xl rounded-2xl border p-2 w-[min(92vw,350px)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Calendar
                    minDate={new Date()}
                    value={departure}
                    onChange={(val) => { setDeparture(val); setShowDepCal(false); }}
                    tileContent={({ date, view }) => {
                      const price = priceData[formatDate(date)]
                      return view === "month" && price ? <p className="text-[10px] text-green-600 font-bold">₹{price}</p> : null;
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            ref={retRef}
            onClick={() => tripType === "round" && setShowRetCal(!showRetCal)}
            className={`lg:col-span-2 p-5 border-b lg:border-b-0 lg:border-r relative transition-all ${tripType === "oneway" ? "bg-gray-50 opacity-60 cursor-not-allowed" : "hover:bg-blue-50 cursor-pointer"
              }`}
          >
            <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
              <CalendarIcon size={16} className={tripType === "round" ? "text-green-600" : "text-gray-300"} /> Return
            </label>
            <div className="flex items-center justify-between gap-2 text-base sm:text-xl font-black">
              {tripType === "round" && returnDate ? returnDate.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }) : "— —"}
              {tripType === "round" && <ChevronDown size={18} className={`text-gray-300 transition-transform ${showRetCal ? "rotate-180" : ""}`} />}
            </div>
            <p className="text-xs text-gray-400">{tripType === "round" && returnDate ? returnDate.toLocaleDateString("en-GB", { weekday: "long" }) : "Add return"}</p>

            <AnimatePresence>
              {showRetCal && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 z-[100] mt-2 bg-white shadow-2xl rounded-2xl border p-2 w-[min(92vw,350px)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Calendar minDate={departure} value={returnDate} onChange={(val) => { setReturnDate(val); setShowRetCal(false); }} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            ref={travRef}
            onClick={() => setShowTravellers(!showTravellers)}
            className="lg:col-span-2 p-5 cursor-pointer relative overflow-visible hover:bg-blue-50 transition-colors lg:rounded-r-3xl"
          >
            <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-1">
              <Users size={16} className="text-green-600" /> Travellers
            </label>
            <div className="text-xl font-black truncate">
              {travellers.adults + travellers.children} Pax
            </div>
            <p className="text-sm text-gray-400 truncate">{travellers.cabin}</p>

            <AnimatePresence>
              {showTravellers && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full z-[999] right-0 lg:left-1/2 lg:-translate-x-1/2 mb-2 bg-white shadow-2xl rounded-2xl border p-5 w-72"
                  onClick={(e) => e.stopPropagation()}
                >
                  {["adults", "children", "infants"].map((type) => (
                    <div key={type} className="flex justify-between items-center mb-4 last:mb-0">
                      <div>
                        <p className="font-bold capitalize text-gray-800">{type}</p>
                        <p className="text-[10px] text-gray-400 font-medium">
                          {type === "adults" ? "12+ yrs" : type === "children" ? "2-12 yrs" : "0-2 yrs"}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button onClick={() => handleTravellerChange(type, "dec")} type="button" className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100 font-bold">-</button>
                        <span className="w-4 text-center font-bold">{travellers[type]}</span>
                        <button onClick={() => handleTravellerChange(type, "inc")} type="button" className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100 font-bold">+</button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t z-[999]">
                    <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Cabin Class</p>
                    <div className="grid grid-cols-2 gap-2">
                      {["Economy", "Business", "First"].map((c) => (
                        <button key={c} onClick={() => setTravellers(p => ({ ...p, cabin: c }))} type="button"
                          className={`text-[10px] p-2  border rounded-lg font-bold transition-all ${travellers.cabin === c ? "bg-green-600 text-white border-green-600" : "text-gray-600 hover:border-green-600"}`}>
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2  translate-y-1/2 ">
          <button className="bg-green-600 hover:bg-green-600 text-white font-black px-16 py-5 rounded-full shadow-2xl shadow-green-400 transition-all transform active:scale-95 flex items-center gap-3 group border-4 border-white">
            <Search size={26} className="group-hover:rotate-12 transition-transform" />
            SEARCH FLIGHTS
          </button>
        </div>
      </form>

    </div>
  );
}

{/* <style>{`
  .react-calendar {
    width: 100% !important;
    max-width: 100% !important;
    border: none !important;
    font-family: inherit;
  }

  .react-calendar__tile {
    padding: 10px 5px !important;
  }

  @media (max-width: 640px) {
    .react-calendar__tile {
      padding: 8px 3px !important;
      font-size: 13px;
    }

    .react-calendar__navigation button {
      min-width: 40px;
    }
  }
`}</style> */}