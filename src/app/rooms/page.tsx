"use client";

import React from "react";
import RoomList from "../../components/rooms/RoomList";

function Rooms() {
  return (
    <div>
      <div className="flex flex-col pt-28 pb-8 items-center justify-center">
        <p className="text-xl font-semiboldl italic">Accomodations</p>
        <p className="text-center max-w-4xl p-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          explicabo exercitationem neque! Veniam eveniet laborum labore
          perferendis ducimus ea itaque nemo illum soluta placeat. Molestiae
          facere tempora at possimus? Rerum!
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <RoomList />
      </div>
    </div>
  );
}

export default Rooms;
