import React from "react";
import { blogPosts } from "../../../data/blog";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Eye,
  Heart,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function BookingBlogList() {
 
  const blogdata = blogPosts.filter(
    (item) => item.category?.toLowerCase() === "booking"
  );

  return (
    <>
      <Helmet>
        <title>Booking Blogs</title>
        <link
          rel="canonical"
          href="https://www.globaltravel-holdings.com/agency-support/booking-blog"
        />
      </Helmet>

      {/* Header */}
      <section className="w-full bg-gradient-to-r from-green-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-center text-3xl font-bold">
            Booking Blogs
          </h2>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogdata.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.metatitle}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-green-500 font-semibold">
                  {item.category}
                </span>

                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <CalendarDays size={14} />
                  {item.date}
                </p>

                <h2 className="text-lg font-semibold mt-2 line-clamp-2">
                  {item.metatitle}
                </h2>

                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {item.metadescription}
                </p>

                {/* Stats */}
                <div className="flex justify-between text-xs text-gray-500 mt-3">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {item.readingTime}
                  </span>

                  <span className="flex items-center gap-1">
                    <Eye size={14} />
                    {item.views}
                  </span>

                  <span className="flex items-center gap-1">
                    <Heart size={14} />
                    {item.likes}
                  </span>
                </div>

                {/* Read More */}
                <NavLink
                  to={`/agency-support/booking-blog/${item.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-green-600 font-medium hover:gap-2 transition"
                >
                  Read More
                  <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* No Blogs */}
        {blogdata.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No Booking blogs found.
          </div>
        )}
      </section>
    </>
  );
}