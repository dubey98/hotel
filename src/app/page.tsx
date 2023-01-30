"use client";

import React from "react";
import HeroImg from "../../public/hero-2.jpg";

function HomePage() {
  return (
    <div>
      <section
        className="w-full bg-cover"
        style={{
          backgroundImage: `url('${HeroImg.src}')`,
          height: "100%",
          width: "100%",
        }}
      >
        <div className="min-h-screen flex items-center">
          <div className="container flex flex-col items-center px-4 py-16 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
              The New <br /> Way to Vacation
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
              Discover the inner you
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900"
              >
                Book Now
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50"
              >
                Explore Gallery
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-pink-200"></section>
    </div>
  );
}

export default HomePage;
