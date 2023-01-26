"use client";

import React from "react";
import Hero from "../components/Hero";
import RoomsWidget from "../components/RoomsWidget";
import Services from "../components/Services";
import Around from "../components/Around";
import Locations from "../components/Locations";
import Testimonials from "../components/Testimonials";
import AboutusHome from "../components/AboutusHome";

function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <AboutusHome />
      <Services />
      <RoomsWidget />
      <Around />
      <Locations />
      <Testimonials />
    </div>
  );
}

export default HomePage;
