// src/components/Timetable.jsx
import React from "react";

export default function Timetable() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-20">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold text-center text-indigo-600 mb-8">명상 시간표</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {[
          "09:30 ~ 11:30",
          "11:30 ~ 13:30",
          "13:30 ~ 15:30",
          "15:30 ~ 17:30",
          "17:30 ~ 19:30",
          "19:30 ~ 21:30",
          "21:30 ~ 23:30",
        ].map((time, i) => (
          <div
            key={i}
            className="p-5 sm:p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300 text-center text-base sm:text-lg font-medium"
          >
            {time}
          </div>
        ))}
      </div>
    </section>
  );
}
