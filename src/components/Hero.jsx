import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center text-white px-6 relative">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center animate-fadeInSlow">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-snug tracking-tight drop-shadow-2xl">
          가짜 마음 버리고<br />진짜 행복한 세상 가서 살자
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-white/80 font-light">
          마음이 열리는 그 순간, 새로운 세상이 펼쳐집니다.
        </p>
      </div>
    </section>
  );
}
