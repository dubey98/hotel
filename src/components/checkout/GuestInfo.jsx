import React from "react";

function GuestInfo() {
  return (
    <div>
      <div className="text-2xl font-semibold">Guest Information</div>
      <div>
        <div className="text-xl">
          Shiv Dubey
          <span className="text-sm font-light pl-1">and 4 other guests</span>
        </div>
        <div className="text-sm font-light">2 Adults | 2 Children</div>
      </div>
    </div>
  );
}

export default GuestInfo;
