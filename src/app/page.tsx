"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import RoomsWidget from "../components/RoomsWidget";
import Services from "../components/Services";
import Around from "../components/Around";
import Locations from "../components/Locations";
import Testimonials from "../components/Testimonials";
import AboutusHome from "../components/AboutusHome";
import shoeImg from "./../../public/shoes.png";

function HomePage() {
  return (
    <div className="w-full">
      {/* <Hero />
      <AboutusHome />
      <Services />
      <RoomsWidget />
      <Around />
      <Locations />
      <Testimonials /> */}

      <div className="min-h-screen flex">
        <div className="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
          <div className="flex items-center flex-wrap gap-12 lg:gap-0">
            <div className="lg:w-5/12 space-y-8">
              <span className="flex space-x-2">
                <span className="block w-14 mb-2 border-b-2 border-gray-600"></span>
                <span className="font-medium text-gray-600 dark:text-gray-400">
                  New this summer
                </span>
              </span>
              <h1 className="text-4xl font-bold md:text-6xl dark:text-white">
                The New <br /> Way To Discover
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Booking Company-Wide Savings, Invoicing and reporting docs.
              </p>

              <div className="flex space-x-4">
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center transition bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max"
                >
                  <span className="block text-white font-semibold">
                    Shop now
                  </span>
                </button>
                <button
                  type="button"
                  title="Start buying"
                  className="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                >
                  <span className="block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                    Our showreel
                  </span>
                </button>
              </div>
            </div>

            <div className="hidden relative md:block lg:w-7/12">
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto w-[30rem] h-[30rem] rounded-full bg-yellow-200"
              ></div>
              <Image src={shoeImg} className="relative ml-auto" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 w-full">
          <div className="container m-auto px-6 flex items-end justify-between md:px-12 lg:px-7">
            <Link href="" className="hidden space-x-4 md:flex md:items-center">
              <Image
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover"
                src="/user.png"
                alt=""
              />
              <div className="text-gray-600 dark:text-gray-400">
                <span className="text-sm">Question ?</span>
                <p className="font-semibold text-gray-700 dark:text-gray-300">
                  Talk to our assistant
                </p>
              </div>
            </Link>
            <div>
              <a
                href="#"
                className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400"
              >
                Facebook /
              </a>
              <a
                href="#"
                className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400"
              >
                YouTube /
              </a>
              <a
                href="#"
                className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
