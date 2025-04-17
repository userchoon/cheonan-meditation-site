import React from "react";

export default function VisualSection1() {
  return (
    <section className="h-screen bg-[url('/forest.jpg')] bg-fixed bg-cover bg-center flex items-center justify-center">
      <div className="bg-white/70 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl max-w-2xl text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-emerald-700 leading-relaxed">
          자연 속에 마음을 맡기고,<br />
          나를 비우는 여정을 시작하세요.
        </h2>
      </div>
    </section>
  );
}
