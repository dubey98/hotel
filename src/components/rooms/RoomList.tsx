import React from "react";
import Room from "./Room";
import roomList from "../../data/defaultProps/roomList.json";
import { room } from "@/interfaces";

function RoomList() {
  return (
    <div className="md:flex">
      <div className="md:flex-grow">
        {roomList.map((room: room, index: number) => (
          <Room key={index} />
        ))}
      </div>
    </div>
  );
}

export default RoomList;
