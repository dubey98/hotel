import React from "react";

const defaultProps = {
  filters: [
    {
      title: "Location",
      filter: ["Jungle Safari", "City Inn", "SeaEsta"],
    },
    {
      title: "Room Capacity",
      filter: ["2 Adults", "2 Adults, 2 Children", "4 Adults, 4 Children"],
    },
  ],
};

function RoomFilters({ filters }) {
  return (
    <div className="p-4">
      {filters.map((item, index) => {
        return (
          <div className="p-2" key={index + "filtergrp"}>
            <div className="px-4 text-xl font-semibold">Location</div>
            <div className="p-1 flex flex-wrap">
              {item.filter.map((filter, index) => {
                return (
                  <div
                    className="p-1 px-3 border-2 w-fit rounded-full m-1"
                    key={index + "filter"}
                  >
                    {filter}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

RoomFilters.defaultProps = defaultProps;
export default RoomFilters;
