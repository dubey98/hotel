"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import images from "../../data/images.json";

function Gallery() {
  return (
    <div className="bg-gray-100">
      <h1 className="p-12 pt-36 text-4xl uppercase text-center font-semibold">
        A Few Sneak Peeks
      </h1>
      <section className="py-6 text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            src="https://source.unsplash.com/random/301x301/"
            alt="random image"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
            width={301}
            height={301}
          />
          <Image
            width={301}
            height={301}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square scale-100 object-cover "
            src="https://source.unsplash.com/random/200x200/?0"
          />
          <Image
            width={301}
            height={301}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?1"
          />
          <Image
            width={301}
            height={301}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?2"
          />
          <Image
            width={301}
            height={301}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?3"
          />
          <Image
            width={301}
            height={301}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?4"
          />
          <Image
            width={301}
            height={301}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?5"
          />
          <Image
            width={301}
            height={301}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?6"
          />
          <Image
            width={301}
            height={301}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?7"
          />
          <Image
            width={301}
            height={301}
            src="https://source.unsplash.com/random/302x302/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
}

export default Gallery;
