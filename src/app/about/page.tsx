"use client";

import React, { useEffect } from "react";
import TeamCards from "../../components/aboutpage/TeamCards";
import SidePictureQuote from "../../components/aboutpage/SidePictureQuote";
import Mission from "../../components/aboutpage/Mission";
import ManagementIntro from "../../components/aboutpage/ManagementIntro";

function AboutUs() {
  useEffect(() => {
    document?.querySelector("body")?.classList.toggle("dark");
    return () => {
      document?.querySelector("body")?.classList.toggle("dark");
    };
  }, []);

  return (
    <div className="">
      <div className="h-96 relative z-0 flex items-center justify-center bg-gradient-to-b from-gray-200 to-gray-50">
        <h1 className="text-4xl font-semibold uppercase text-center">
          About your hosts
        </h1>
      </div>
      <div className="pb-12 -mt-16 z-20">
        <SidePictureQuote />
      </div>
      <Mission />
      <ManagementIntro />
      <TeamCards />
    </div>
  );
}

export default AboutUs;
