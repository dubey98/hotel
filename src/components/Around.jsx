import React from "react";
import images from "./../data/images.json";

function Around() {
  return (
    <section className="p-4 max-w-6xl mx-auto box-border">
      <div className="p-4 text-2xl font-semibold text-center">
        Around the Hotel
      </div>
      <div className="p-3 space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-3 md:grid-cols-4">
        <div className="w-full h-72 md:row-span-2 md:col-span-2 md:h-full">
          <div className="h-full w-full">
            <img
              className="object-cover h-full w-full"
              src={images["res-1"]}
              alt="restaurant"
            />
          </div>
        </div>
        <div className="w-full h-72 md:col-span-2">
          <div className="h-full w-full">
            <img
              className="object-cover h-full w-full"
              src={images["pool-1"]}
              alt="pool"
            />
          </div>
        </div>
        <div className="w-full h-72">
          <div className=" h-full w-full">
            <img
              className="object-cover h-full w-full"
              src={images["gym-1"]}
              alt="Gym"
            />
          </div>
        </div>
        <div className="w-full h-72">
          <div className="bg-blue-400 h-full w-full">
            <img
              className="object-cover h-full w-full"
              src={images["spa-1"]}
              alt="spa"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Around;
