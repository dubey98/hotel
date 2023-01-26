import React, { useState } from "react";

const defaultProps = {
  amenities: [
    {
      shortName: "AC",
      longName: "Air Conditioner",
      description: "Air Conditioned Rooms",
      icon: "<i class='fas fa-fan'></i>",
    },
    {
      shortName: "Coffee",
      longName: "Coffee Kettle",
      description: "24x7 Cafes and Kettle Provided",
      icon: '<i class="fas fa-coffee"></i>',
    },
    {
      shortName: "TV",
      longName: "Television",
      description: "Wide Screen TV",
      icon: '<i class="fas fa-tv"></i>',
    },
    {
      shortName: "Bar",
      longName: "Mini Bar",
      description: "Mini Bar Provided",
      icon: '<i class="fas fa-glass-cheers"></i>',
    },
    {
      shortName: "Bed",
      longName: "Queen Size Bed",
      description: "1 Queen Size Bed",
      icon: '<i class="fas fa-bed"></i>',
    },
    {
      shortName: "WiFi",
      longName: "WiFi Coverage",
      description: "WiFi Coverage on the whole property",
      icon: '<i class="fas fa-wifi"></i>',
    },
    {
      shortName: "WiFi",
      longName: "WiFi Coverage",
      description: "WiFi Coverage on the whole property",
      icon: '<i class="fas fa-shower"></i>',
    },
    {
      shortName: "WiFi",
      longName: "WiFi Coverage",
      description: "WiFi Coverage on the whole property",
      icon: '<i class="fas fa-couch"></i>',
    },
  ],
};

function IconList({ amenities }) {
  return (
    <div className="flex py-2 flex-wrap">
      {amenities.map((amenity, index) => {
        return <Amenity amenity={amenity} key={index} />;
      })}
    </div>
  );
}

function Amenity({ amenity }) {
  const [desc, setDesc] = useState(false);

  const handleMouseEnter = () => {
    setDesc(true);
  };

  const handleMouseLeave = () => {
    setDesc(false);
  };

  return (
    <div
      className="border px-2 rounded-xl mx-2 my-1"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <span dangerouslySetInnerHTML={{ __html: amenity.icon }}></span>
      <div
        className={
          "inline-block transition-all ease-in-out " +
          (desc ? " pl-2 visible w-14 opacity-100" : " invisible w-0 opacity-0")
        }
      >
        {amenity.shortName}
      </div>
    </div>
  );
}

IconList.defaultProps = defaultProps;
export default IconList;
