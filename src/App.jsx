import React from "react";
import Hero from "./components/Hero";
import VisualSection1 from "./components/VisualSection1";
import MeditationInfo from "./components/MeditationInfo";
import VisualSection2 from "./components/VisualSection2";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-serif text-gray-900 bg-white overflow-x-hidden">
      <Hero />
      <VisualSection1 />
      <MeditationInfo />
      <VisualSection2 />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
