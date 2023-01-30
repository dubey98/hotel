"use client";

import React from "react";
import Image from "next/image";
import HeroImg from "../../public/hero-2.jpg";
import LobbyImg from "../../public/lobby.jpg";
import RoomsWidget from "../components/RoomsWidget";
import TestiMonials from "../components/Testimonials";

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
      <section className="min-h-screen container mx-auto flex flex-row">
        <div className="hidden lg:flex w-1/2 items-center justify-center">
          <div className="w-5/6 h-3/4 relative">
            <Image src={LobbyImg} alt="about hotel continantal" fill />
          </div>
        </div>
        <div className="text-center flex flex-col items-center justify-center px-4 lg:w-1/2">
          <h2 className="text-3xl">About Hotel Continental</h2>
          <p className="text-md">live the best experience</p>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum
            minima, quibusdam harum eaque ipsam possimus facilis doloribus
            laudantium natus incidunt veniam necessitatibus aperiam voluptatibus
            illo expedita praesentium numquam perspiciatis.
          </p>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad enim
            veritatis molestias inventore maiores fugiat dolor rerum harum?
            Omnis rerum officiis iste non. Vero, odit fuga quas possimus dolorum
            deleniti?u
          </p>
        </div>
      </section>
      <section className="min-h-screen container">
        <RoomsWidget />
      </section>
      <section className="min-h-screen container flex items-center justify-center">
        <TestiMonials />
      </section>
    </div>
  );
}

export default HomePage;
