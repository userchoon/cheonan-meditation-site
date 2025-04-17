import React from "react";

export default function Testimonial() {
  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-indigo-700 mb-12">
        수련 후기
      </h2>
      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
        <div className="bg-white p-6 rounded-2xl shadow-md text-center text-gray-700">
          “처음엔 낯설었지만, 점점 마음이 가벼워졌어요. <br />
          지금은 하루하루가 정말 행복해요.”
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center text-gray-700">
          “명상으로 내 안의 불안을 내려놓고 <br />
          진짜 평화를 찾게 됐어요.”
        </div>
      </div>
    </section>
  );
}