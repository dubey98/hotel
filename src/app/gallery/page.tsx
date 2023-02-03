"use client";

import React, { useState, useEffect } from "react";
import images from "../../data/images.json";

const defaultProps = {
  title: "A Few Sneak Peeks",
  images: [
    {
      src: images["room-1"],
      alt: "rooms",
      description: "Image description ",
    },

    {
      src: images["homepage-1"],
      alt: "rooms",
      description: "Image description ",
    },

    {
      src: images["location-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["location-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["location-3"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["gym-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["homepage-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["res-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["res-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["room-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["room-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["spa-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["pool-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["about-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["about-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["about-3"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["res-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["room-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["room-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["spa-1"],
      alt: "rooms",
      description: "Image description ",
    },
  ],
};

function Gallery({ images, title }) {
  return (
    <div className="bg-gray-100">
      <h1 className="p-12 pt-36 text-4xl uppercase text-center font-semibold">
        {title}
      </h1>
      <section className="py-6 text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://source.unsplash.com/random/301x301/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square h-full w-full scale-100 object-cover transition duration-300 hover:scale-[1.4]"
            src="https://source.unsplash.com/random/200x200/?0"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?1"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?2"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?3"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?4"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?5"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?6"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?7"
          />
          <img
            src="https://source.unsplash.com/random/302x302/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>

      </section>
    </div>
  );
}

Gallery.defaultProps = defaultProps;
export default Gallery;
