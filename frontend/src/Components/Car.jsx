import { motion } from 'framer-motion'
import { CalendarDays, MapPin } from 'lucide-react'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'
import BestCarRentalDeals from "./cars/BestCarRentalDeals";
import AirportCarRental from "./cars/AirportCarRental";
import AirportPickupDrop from "./cars/AirportPickupDrop";
import EconomyLuxuryCars from "./cars/EconomyLuxuryCars";
import AffordableCarDeals from "./cars/AffordableCarDeals";
import WeeklyCarRentals from "./cars/WeeklyCarRentals";
import FlexibleCarRental from "./cars/FlexibleCarRental";
import CarFAQ from './cars/CarFAQ'
import WhyChooseCarBooking from './cars/WhyChooseCarBooking'


export default function Car() {

  const [pickupDate, setpickupDate] = useState(new Date())
  const [dropDate, setdropDate] = useState(new Date())
  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};


  return (
    <>
       <Helmet>
        <title>Cheap Car Rentals & Car Hire Deals | Global Travel Holdings </title>
        <meta name="description" content="Book cheap car Rentals and car hire with Global Travel Holdings. Explore rental deals, airport car rentals, economy and luxury vehicles, and flexible  options." />
                
                <link rel="canonical" href="https://www.globaltravel-holdings.com/cars" />
            </Helmet>

     <section className='relative w-full h-[650px] overflow-hidden'>

  <motion.img
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2 }}
    src="/images/banner/Car Rental Banner.jpg.jpeg"
    className='h-full w-full object-cover brightness-75'
    alt=""
  />

  <div className='absolute inset-0 bg-black/30'></div>

  <div className='absolute top-24 left-1/2 -translate-x-1/2 text-center px-4 z-10'>

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='text-white text-3xl md:text-6xl font-bold leading-tight'
    >
      Cheap Car Rentals and Car Hire
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className='text-gray-200 mt-4 text-sm md:text-lg max-w-2xl mx-auto'
    >
      Global Travel Holdings helps travelers explore car rental options for business trips, family vacations, road trips, weekend getaways, and other types of travel. Travelers can compare available vehicles based on vehicle type, rental needs, location, and travel plans.
    </motion.p>

  </div>

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className='absolute bottom-28 w-full px-4 flex justify-center z-10'
  >

    <div className='max-w-7xl w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-6'>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 items-center'>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className='flex items-center gap-2 border rounded-lg px-3 py-3'
        >
          <MapPin size={18} className='text-gray-700' />
          <input
            type="text"
            placeholder='Pick-up location'
            className='w-full outline-none text-sm'
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className='flex items-center gap-2 border rounded-lg px-3 py-3'
        >
          <MapPin size={18} className='text-gray-700' />
          <input
            type="text"
            placeholder='Drop-off location'
            className='w-full outline-none text-sm'
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className='flex items-center gap-2 border rounded-lg px-3 py-3'
        >
          <CalendarDays size={18} className='text-gray-700' />

          <DatePicker
            selected={pickupDate}
            onChange={(date) => setpickupDate(date)}
            className='w-full outline-none text-sm'
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className='border rounded-lg px-3 py-3'
        >
          <input
            type="time"
            className='w-full outline-none text-sm'
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className='flex items-center gap-2 border rounded-lg px-3 py-3'
        >
          <CalendarDays size={18} className='text-gray-700' />

          <DatePicker
            selected={dropDate}
            minDate={pickupDate}
            onChange={(date) => setdropDate(date)}
            className='w-full outline-none text-sm'
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className='border rounded-lg px-3 py-3'
        >
          <input
            type="time"
            className='w-full outline-none text-sm'
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className='border rounded-lg px-3 py-3'
        >
          <input
            type="number"
            className='w-full outline-none text-sm'
            placeholder='Driver age'
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className='w-full bg-green-700 text-white hover:bg-green-800 transition rounded-lg py-3 font-semibold text-sm shadow-lg'>
            Search
          </button>
        </motion.div>

      </div>

    </div>

  </motion.div>

</section>


<div className='max-w-6xl mx-auto px-3 py-10'>

  <motion.h1
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className='text-xl sm:text-2xl md:text-3xl pt-5 py-4 font-semibold leading-3 text-green-600 text-center'
  >
    Book Cheap Car Rentals Online
  </motion.h1>

  <motion.p
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className='p-2 sm:p-3 md:p-4 max-w-5xl text-base text-gray-600 mx-auto text-center'
  >
   Booking a car rental online allows travelers to explore available vehicles and choose an option based on their destination, travel dates, vehicle type, and rental requirements. Global Travel Holdings provides car rental options that may include cars, SUVs, and larger vehicles for families or groups, depending on availability. 
  </motion.p>

</div>

<section className='grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-10 max-w-7xl mx-auto px-3 py-10'>

  {[
    {
      title: "Rent a Car Online with Ease",
      desc: "Quickly rent a car online by choosing from a wide range of vehicles, including economy, SUV, and luxury options. Our platform allows you to compare availability, pricing, and features to make the right choice"
    },
    {
      title: "Affordable & Cheap Car Rental Deals",
      desc: "Find cheap car rental deals without compromising on quality or reliability. We help you access competitive pricing and seasonal offers, making travel more budget-friendly."
    },
    {
      title: "Airport & Local Car Rental Services",
      desc: "Book an airport car rental service for smooth pickups and drop-offs. Whether you need transportation from the airport or within the city, our services ensure convenience at every step."
    },
    {
      title: "Car Hire Worldwide for Every Journey",
      desc: "With our car hire worldwide network, you can book vehicles across multiple destinations. From short city trips to long-distance travel, we provide options suitable for every plan."
    },
    {
      title: "Secure & Hassle-Free Booking Experience",
      desc: "Enjoy a simple and secure booking process with instant confirmations. Our platform ensures transparency, safety, and reliability for every reservation."
    },
    {
      title: "Start Your Journey with the Right Ride",
      desc: "Book your car rental with Global Travel Holdings LLC and enjoy a smooth and flexible travel experience. Whether for business or leisure, we make every journey comfortable and convenient."
    }
  ].map((item, index) => (
    <motion.div
      key={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className='group bg-white hover:text-green-600  rounded-3xl border border-gray-100 p-7 shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
    >
      <h2 className='text-xl sm:text-2xl md:text-2xl'>
        {item.title}
      </h2>

      <p className='py-3 text-base pl-3 text-gray-700 leading-relaxed'>
        {item.desc}
      </p>
    </motion.div>
  ))}

</section>

<BestCarRentalDeals />

<AirportCarRental />

<AirportPickupDrop />

<EconomyLuxuryCars />

<AffordableCarDeals />

<WeeklyCarRentals />

<FlexibleCarRental />

<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className='py-10 mx-auto px-3 text-center'
>
  <NavLink
    to="tel:+91 8588809690"
    className="px-8 py-3  text-center text-white rounded-full font-semibold bg-gradient-to-r from-green-700 to-gray-400 transition-colors shadow-lg "
  >
    Book your car
  </NavLink>
</motion.div>

<WhyChooseCarBooking/>
  <CarFAQ/>
    </>
  )
}