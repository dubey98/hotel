import React, { Fragment } from "react";
import SearchForm from "../../components/SearchForm";
import RoomInformation from "../../components/rooms/RoomInformation";
import Reviews from "../../components/rooms/Reviews";
import importedImages from "../../data/images.json";

const images = [
  {
    src: importedImages["room-1"],
    alt: "bed and room image",
  },
  {
    src: importedImages["room-2"],
    alt: "bed and room image",
  },
  {
    src: importedImages["room-1"],
    alt: "bed and room image",
  },
  {
    src: importedImages["room-3"],
    alt: "bed and room image",
  },
];

function RoomDetails() {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-2">
      <RoomDetailImageGrid images={images} />
      <div className="sm:flex sm:space-x-2 space-y-2 sm:space-y-0">
        <RoomInformation />
        <div className="basis-[500px]">
          <SearchForm widget />
        </div>
      </div>
      <Reviews />
    </div>
  );
}

function RoomDetailImageGrid({ images }) {
  return (
    <div className="sm:grid sm:grid-cols-4 sm:grid-rows-2 sm:gap-3">
      <div
        className="h-48 sm:h-full rounded-lg bg-amber-400 sm:row-span-2 sm:col-span-2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images[0].src})` }}
      ></div>
      <div
        className="h-48 rounded-lg bg-amber-400 hidden sm:block sm:col-span-2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images[1].src})` }}
      ></div>
      <div
        className="h-48 rounded-lg bg-amber-400 hidden sm:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images[2].src})` }}
      ></div>
      <div
        className="h-48 rounded-lg bg-amber-400 hidden sm:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images[3].src})` }}
      ></div>
    </div>
  );
}

export default RoomDetails;
