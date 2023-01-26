import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import locations from "./../data/defaultProps/locations.json";
import images from "./../data/images.json";
import Opacity from "./utilities/Opacity";

const defaultProps = {
  title: "Our Locations",
  locations: locations,
};

function Locations({ title, locations }) {
  return (
    <section className="max-w-5xl mx-auto p-4">
      <div className="w-full ">
        <div className="text-2xl font-semibold text-center p-4 uppercase">
          {title}
        </div>
        <div className="p-2 flex flex-wrap">
          {locations.map((location, index) => (
            <Location location={location} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Location({ location }) {
  const [active, setActive] = useState(false);
  // const navigation = useNavigate();

  function resolveImage(name) {
    return name === "location1"
      ? images["location-1"]
      : name === "location2"
      ? images["location-2"]
      : images["location-3"];
  }

  const handleBookingClick = (slug) => {
    navigation("/rooms?location=" + slug);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3">
      <div
        className="h-96 flex flex-col justify-end m-2 bg-cover bg-no-repeat bg-center relative "
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        style={{ backgroundImage: `url(${resolveImage(location.image)})` }}
      >
        <Opacity controller={active} />
        <div className="text-center p-4 m-2 rounded-lg bg-white w-3/4 mx-auto z-20">
          <div className="font-semibold text-lg uppercase">
            {location.title}
          </div>
          <div
            className={
              " transition-opacity ease-in-out duration-1000 " +
              (active
                ? "  visible h-auto opacity-100"
                : " invisible h-0 opacity-0")
            }
          >
            <div className="font-light mb-2">{location.description}</div>
            <button
              className="border-2 p-2 w-3/4 mx-auto rounded-lg bg-sky-600 text-white font-semibold cursor-pointer"
              onClick={() => handleBookingClick(location.slug)}
            >
              {location.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Locations.defaultProps = defaultProps;
export default Locations;
