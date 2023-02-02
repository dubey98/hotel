"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "../../components/restaurant/Menu";
import menus from "../../data/defaultProps/menus.json";
import Link from "next/link";
import heroImg from "../../../public/dine-3.jpg";
import bfImg from "../../../public/dine-1.jpg";
import lunchImg from "../../../public/dine-2.jpg";

const defaultProps = {
  menus: menus,
};

function Restaurant({ menus }) {
  useEffect(() => {
    document?.querySelector("body")?.classList.toggle("dark");

    return () => {
      document?.querySelector("body")?.classList.toggle("dark");
    };
  }, []);

  return (
    <div className="">
      <section
        className="min-h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-end"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        <div className="container mx-auto">
          <div className="p-10 mb-24 text-white lg:mb-56">
            <h1 className="text-5xl font-bold">
              Enjoy the best Indian Cuisines
            </h1>
            <p className="font-semibold lg:py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              ratione, quos distinctio
            </p>
            <Link href={"/dining#menu"}>
              <button className="px-4 py-2 border-2 border-white my-4 hover:bg-white hover:text-black">
                Explore Menu
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section id="menu" className="container mx-auto">
        <div className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1">
            <div className="py-4 max-w-sm">
              <h2 className="text-2xl">Break Fast</h2>

              {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
                return (
                  <div key={index} className="py-1">
                    <h3 className="text-xl">Break fast item {index}</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="h-full hidden md:block relative">
              <Image
                src={bfImg.src}
                className="object-cover"
                alt="brtek fast image"
                fill
              />
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
            <div className="h-full hidden md:block relative">
              <Image
                src={lunchImg.src}
                className="object-cover"
                alt="brtek fast image"
                fill
              />
            </div>
            <div className="py-4 max-w-sm">
              <h2 className="text-2xl">Lunch Menu</h2>

              {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
                return (
                  <div key={index} className="py-1">
                    <h3 className="text-xl">Break fast item {index}</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Menu menus={menus} />
    </div>
  );
}

Restaurant.defaultProps = defaultProps;
export default Restaurant;
