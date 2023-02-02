import React from "react";
import Link from "next/link";
import Image from "next/image";
import room2Img from "../../../public/room-2.jpg";
import { BiBed, BiArea, BiGroup } from "react-icons/bi";

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
          <div className="flex flex-row w-full justify-center py-2 space-x-2">
            <div className="flex flex-col p-2 h-16 w-28 bg-gray-100">
              <div className="flex items-center justify-center h-8">
                <BiBed />
              </div>
              <div>Queen Bed</div>
            </div>
            <div className="flex flex-col p-2 h-16 w-28 bg-gray-100">
              <div className="flex items-center justify-center h-8">
                <BiGroup />
              </div>
              <div>Four Guests</div>
            </div>
            <div className="flex flex-col p-2 h-16 w-28 bg-gray-100">
              <div className="flex items-center justify-center h-8">
                <BiArea />
              </div>
              <div>10 m2</div>
            </div>
          </div>
          <div>
            <Link href="/rooms/one-bedroom-suite">
              <button
                title="Learn More"
                type="button"
                className="px-4 py-2 m-2 text-lg font-semibold rounded border border-gray-700 bg-gray-100 text-gray-700"
              >
                Learn More
              </button>
            </Link>
            <Link href={"/book"}>
              <button
                title="Reserve"
                type="button"
                className="uppercase px-4 py-2 m-2 text-lg font-semibold rounded text-gray-100 bg-gray-700"
              >
                Reserve
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
