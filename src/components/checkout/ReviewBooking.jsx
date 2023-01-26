import React from "react";
import GuestInfo from "./GuestInfo";
import PriceDetails from "./PriceDetails";
import Stayinfo from "./Stayinfo";

function ReviewBooking() {
  return (
    <div className="p-4 space-y-4">
      <div className="text-3xl font-semibold">Review Booking</div>

      <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
        <div className="sm:basis-2/3 sm:space-y-4">
          <div className="border rounded-lg space-y-2 p-4 shadow-md">
            <GuestInfo />
          </div>

          <div className="p-4 space-y-2 border rounded-lg shadow-md">
            <Stayinfo />
          </div>
        </div>
        <div className="p-4 space-y-2 border rounded-lg shadow-md sm:basis-1/3">
          <PriceDetails />
        </div>
      </div>
    </div>
  );
}

export default ReviewBooking;
