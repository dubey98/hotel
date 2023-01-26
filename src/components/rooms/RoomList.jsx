import React from "react";
import Room from "./Room";
import RoomFilters from "../RoomFilters";
import roomList from "./../../data/defaultProps/roomList.json";

const defaultProps = {
  roomList: roomList,
};

function RoomList({ roomList }) {
  return (
    <div className="md:flex">
      <div className="md:basis-1/4">
        <RoomFilters />
      </div>
      <div className="md:flex-grow">
        {roomList.map((room, index) => (
          <Room room={room} key={index} widget={false} />
        ))}
      </div>
    </div>
  );
}

RoomList.defaultProps = defaultProps;
export default RoomList;
