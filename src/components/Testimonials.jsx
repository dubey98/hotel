import React from "react";
import Carousal, { CarousalItem } from "../components/utilities/Carousal";

const defaultProps = {
  testimonies: [
    {
      comment:
        "had a lot of fun staying at this hotel, would recomment 10/10, why are u reading this? its clearly a placeholder just to fill space",
      author: "John Doe",
      imageAlt: "John Does image",
      date: new Date(),
    },
    {
      comment:
        "had a lot of fun staying at this hotel, would recomment 10/10, why are u reading this? its clearly a placeholder just to fill space",
      author: "John Doe",
      imageAlt: "John Does image",
      date: new Date(),
    },
    {
      comment:
        "had a lot of fun staying at this hotel, would recomment 10/10, why are u reading this? its clearly a placeholder just to fill space",
      author: "John Doe",
      imageAlt: "John Does image",
      date: new Date(),
    },
  ],
};

function Testimonials({ testimonies }) {
  return (
    <section className="p-4">
      <div className="p-4 text-2xl font-semibold text-center uppercase">
        What our guests Say
      </div>
      <div className="max-w-2xl mx-auto p-2">
        <Carousal sideButtons>
          {testimonies.map((testimony, index) => (
            <CarousalItem key={index}>
              <TestiMony testimony={testimony} />
            </CarousalItem>
          ))}
        </Carousal>
      </div>
    </section>
  );
}

function TestiMony({ testimony }) {
  return (
    <div className="p-2 pt-12 whitespace-normal">
      <div className="w-full rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 max-w-md">
        <div className="w-full pt-1 pb-5">
          <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <img
              src="https://randomuser.me/api/portraits/men/15.jpg"
              alt={testimony.imageAlt}
            />
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 text-center px-5">
            {testimony.comment}
          </p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="text-md text-indigo-500 font-bold text-center">
            {testimony.author}
          </p>
          <p className="text-xs text-gray-500 text-center">
            {testimony.date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

Testimonials.defaultProps = defaultProps;
export default Testimonials;
