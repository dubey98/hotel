"use client"

import React, { useEffect } from "react";
import RoomList from "../../components/rooms/RoomList";
import SearchForm from "../../components/SearchForm";
// import { useLocation } from "react-router-dom";

function Rooms() {
  const location ={}// useLocation();
  const params = new URLSearchParams(location.search);

  return (
    <div>
      <div className=" max-w-6xl mx-auto p-2">
        <SearchForm
          propCheckIn={params.get("checkin")}
          propCheckOut={params.get("checkout")}
          propAdults={params.get("adults")}
          propChildren={params.get("children")}
        />
      </div>
      <RoomsHero />
      <div className="max-w-6xl mx-auto">
        <RoomList />
      </div>
    </div>
  );
}

function RoomsHero() {
  return (
    <div className="bg-sky-100">
      <div className="max-w-6xl text-xl mx-auto"></div>
    </div>
  );
}

export default Rooms;
