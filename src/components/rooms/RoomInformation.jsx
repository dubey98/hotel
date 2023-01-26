import React from "react";
import RoomAvailability from "./RoomAvailability";

const defaultProps = {
  amenities: [
    "AC",
    "Mini-Fridge",
    "Balcony",
    "Sea Facing",
    "WideScreen TV",
    "Kettle",
    "Free Breakfast",
    "Bathtub",
    "Adjustable Beds",
  ],
};

function RoomInformation({ amenities }) {
  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <div className="font-semibold text-2xl">Deluxe Room</div>
        <div className="text-md leading-relaxed">
          <p className="py-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste
            corrupti dolorem, dolore reiciendis sunt maxime eveniet excepturi ad
            itaque libero molestiae ex illo eligendi tempore placeat! Natus,
            consectetur numquam.
          </p>
          <p className="py-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            iusto eum minima veritatis natus a praesentium. Recusandae
            similique, asperiores perspiciatis, tenetur sit, enim maxime aut
            eligendi accusantium ratione et eum.
          </p>
        </div>
      </div>
      <div>
        <div className="text-xl">Amenities</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-2">
          {amenities.map((amenity, index) => (
            <div
              className="flex p-2 space-x-2 hover:shadow-lg hover:p-1 rounded-lg transition-all ease-in-out border border-gray-300"
              key={index}
            >
              <div className="w-12 min-h-[3rem] bg-gray-200 min-w-[3rem]"></div>
              <div className=" flex items-center">{amenity}</div>
            </div>
          ))}
        </div>
      </div>
      <RoomAvailability />
    </div>
  );
}

RoomInformation.defaultProps = defaultProps;
export default RoomInformation;
