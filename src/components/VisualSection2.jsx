// src/components/VisualSection2.jsx
import React from "react";

export default function VisualSection2() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/lake.mp4"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <h2 className="text-white text-3xl sm:text-5xl font-bold text-center drop-shadow-2xl">
          바람과 물소리 속에서<br />
          참된 나와 마주합니다.
        </h2>
      </div>
    </section>
  );
}
