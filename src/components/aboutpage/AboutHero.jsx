import React from "react";
import images from "./../../data/images.json";

function AboutHero() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${images["about-1"]})` }}
    >
      <div className="max-w-5xl mx-auto py-16 text-sky-100 text-shadow-lg font-semibold">
        <div className="px-12 py-4 text-3xl italic text-center ">
          Providing you a home away from home
        </div>
        <div className="p-4 text-center max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          voluptate error dignissimos tempore maxime? Voluptas optio possimus,
          voluptatum voluptates expedita mollitia ipsam quas eveniet aut,
          nesciunt quos porro similique quisquam!
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
