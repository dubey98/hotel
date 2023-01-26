import React from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import Room from "./../rooms/Room";
import SideSummaryPanel from "./SideSummaryPanel";

function CreateBooking({ room }) {
  return (
    <div>
      <div className="px-2 p-4 text-xl font-semibold">
        Confirm Booking Details
      </div>
      <div className="md:grid md:grid-cols-4 md:grid-rows-2">
        <div className="py-2 md:col-span-3">
          <div className="p-2 font-semibold">Selected Room</div>
          <Room room={room} />
        </div>
        <div className="md:row-span-2">
          <SideSummaryPanel />
        </div>
        <div className="py-2 md:col-span-3">
          <div className="p-2 font-semibold">Please provide some details :</div>
          <PersonalDetailsForm />
        </div>
      </div>
    </div>
  );
}

export default CreateBooking;
