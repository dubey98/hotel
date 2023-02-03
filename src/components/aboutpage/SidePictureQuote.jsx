import React from "react";
import images from "./../../data/images.json";

const defaultProps = {
  quote:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio provident nihil officiis ",
  author: "John Doe, Manager",
};

function SidePictureQuote({ quote, author }) {
  return (
    <div className="max-w-xl mx-auto relative">
      <div className="p-2 m-2 border-2 flex shadow-lg rounded-xl bg-white">
        <div className="w-28 flex-shrink-0 min-h-[100px]">
          <img
            className="object-cover h-full rounded-lg"
            src={images["about-2"]}
            alt="managers"
          />
        </div>
        <div className="ml-2">
          <div className="font-light">{quote}</div>
          <div className="text-sm italic py-2">- {author}</div>
        </div>
      </div>
    </div>
  );
}

SidePictureQuote.defaultProps = defaultProps;
export default SidePictureQuote;
