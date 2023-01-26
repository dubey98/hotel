import React from "react";

function Stayinfo() {
  return (
    <div>
      <div className="text-2xl font-semibold">Stay information</div>
      <div className="">
        <div className="text-sm font-light">Location</div>
        <div className="text-xl">Hotel Jungle Safari</div>
      </div>
      <div className="flex">
        <div className="mr-4">
          <div className="text-sm font-light">check in</div>
          <div className="text-lg">12/12/2022</div>
        </div>
        <div>
          <div className="text-sm font-light">Check Out</div>
          <div className="text-lg">12/12/2022</div>
        </div>
      </div>

      <div>
        <div className="font-light text-sm">Rooms</div>
        <div className="text-lg">
          1x Deluxe Rooms
          <span className="text-sm font-light pl-1">(View Details)</span>
        </div>
        <div className="text-lg">
          1x Suite
          <span className="text-sm font-light pl-1">(View Details)</span>
        </div>
      </div>
    </div>
  );
}

export default Stayinfo;
