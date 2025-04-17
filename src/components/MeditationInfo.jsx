// src/components/MeditationInfo.jsx
import React from "react";

export default function MeditationInfo() {
  return (
    <section className="py-24 px-6 md:px-24 bg-gradient-to-b from-white via-sky-50 to-white text-center">
      <h2 className="text-3xl sm:text-5xl font-extrabold text-teal-600 mb-8">
        마음수련 빼기명상
      </h2>
      <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto text-gray-700">
        마음수련은 단순한 휴식이 아닙니다. <br className="hidden sm:block" />
        마음속에 쌓인 기억과 감정을 하나씩 비워내며,<br />
        진정한 나를 만나는 여정입니다.
      </p>
    </section>
  );
}