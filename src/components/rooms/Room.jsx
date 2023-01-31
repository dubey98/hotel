import React from "react";
import Link from "next/link";
import Image from "next/image";
import images from "./../../data/images.json";
import room2Img from "../../../public/room-2.jpg";

function Room() {
  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl shadow-md bg-gray-50 text-gray-800 md:flex md:flex-row">
        <div className="space-y-2 md:w-2/5">
          <Image
            src={room2Img}
            alt=""
            className="block object-cover object-center w-full rounded-md h-full bg-gray-500"
          />
        </div>
        <div className="space-y-2 p-4 text-center md:w-3/5 flex flex-col justify-center">
          <Link rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold text-pink-600 uppercase py-2">
              One Bedroom Lake View Suite
            </h3>
          </Link>
          <p className="leading-snug text-gray-600 py-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
            excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellat, excepturi.
          </p>
          <div className="">

          </div>
          <div>
            <button
              title="Learn More"
              type="button"
              className="px-4 py-2 m-2 text-lg font-semibold rounded border border-gray-700 bg-gray-100 text-gray-700"
            >
              Learn More
            </button>
            <button
              title="Reserve"
              type="button"
              className="uppercase px-4 py-2 m-2 text-lg font-semibold rounded text-gray-100 bg-gray-700"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
