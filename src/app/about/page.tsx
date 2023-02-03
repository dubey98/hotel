"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import TeamCards from "../../components/aboutpage/TeamCards";
import SidePictureQuote from "../../components/aboutpage/SidePictureQuote";
import Mission from "../../components/aboutpage/Mission";
import ManagementIntro from "../../components/aboutpage/ManagementIntro";
import Locations from "../../components/Locations";
import images from "../../data/images.json";
import heroImg from "../../../public/about-hero.jpg";

function AboutUs() {
  useEffect(() => {
    document?.querySelector("body")?.classList.toggle("dark");
    return () => {
      document?.querySelector("body")?.classList.toggle("dark");
    };
  }, []);

  return (
    <div className="">
      <div className="h-96 relative z-0">
        <Image
          src={heroImg.src}
          fill
          alt="hero image"
          className="object-cover z-0"
        />
      </div>
      <div className="pb-12 -mt-16 z-20">
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
