import React from "react";
import images from "./../../data/images.json";
import Image from "next/image";

function SidePictureQuote() {
  return (
    <div className="max-w-xl mx-auto relative">
      <div className="p-2 m-2 border-2 flex shadow-lg rounded-xl bg-white">
        <div className="w-28 flex-shrink-0 min-h-[100px]">
          <Image
            className="object-cover h-full rounded-lg"
            src={"https://i.ibb.co/HKG2D6S/about-2.jpg"}
            alt="managers"
            width={112}
            height={112}
          />
        </div>
        <div className="ml-2">
          <div className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            provident nihil officiis
          </div>
          <div className="text-sm italic py-2">-John Doe, Manager</div>
        </div>
      </div>
    </div>
  );
}

export default SidePictureQuote;
