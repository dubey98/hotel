import React from "react";
import Room from "./rooms/Room";
import roomList from "../data/defaultProps/roomList.json";

const defaultProps = {
  title: "Our Rooms",
  roomList: roomList,
};

function RoomsWidget({ title: string, roomList }) {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="text-2xl font-semibold text-center uppercase p-4">
        {title}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {roomList.map((room, index) => (
          <Room room={room} widget={true} key={index} />
        ))}
      </div>
    </div>
  );
}

RoomsWidget.defaultProps = defaultProps;
export default RoomsWidget;
