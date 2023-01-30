"use client";

import React from "react";
import TeamCards from "../../components/aboutpage/TeamCards";
import AboutHero from "../../components/aboutpage/AboutHero";
import SidePictureQuote from "../../components/aboutpage/SidePictureQuote";
import Mission from "../../components/aboutpage/Mission";
import ManagementIntro from "../../components/aboutpage/ManagementIntro";
import Locations from "../../components/Locations";

function AboutUs() {
  return (
    <div className="">
      <AboutHero />
      <div className="pb-12 -mt-16">
        <SidePictureQuote />
      </div>
      <Mission />
      <ManagementIntro />
      <TeamCards />
      <Locations />
    </div>
  );
}

export default AboutUs;
