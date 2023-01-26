import React, { useState } from "react";
import ProgressSteps from "../../components/utilities/ProgressSteps";
import CreateBooking from "../../components/checkout/CreateBooking";
import ReviewBooking from "../../components/checkout/ReviewBooking";
import { useNavigate } from "react-router-dom";

const defaultProps = {
  room: {
    title: "Deluxe",
    description:
      "Experience the new luxury with our deluxe rooms. perfect stays for your perfect vacation",
    buttonText: "View Details",
    imageSrc: "room1",
    imageAlt: "room deluxe",
    price: {
      actualPrice: 2199,
      discountedPrice: 1299,
    },
    buttons: [
      { text: "View Details", navigateTo: "/room-details" },
      { text: "Book Now", navigateTo: "/book" },
    ],
    tags: ["Capacity: 2 Adults, 2 Children", "Area: 15.75 sq.ft."],
  },
};

function Booking({ room }) {
  const [reviewPage, setReviewPage] = useState(false);
  const navigate = useNavigate();

  function handleNextBtnClick() {
    setReviewPage(true);
  }

  function handleBackBtnClick() {
    reviewPage ? setReviewPage(false) : navigate("/rooms");
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <ProgressSteps />
      <div>
        {reviewPage ? <ReviewBooking /> : <CreateBooking room={room} />}
      </div>
      <div className="w-full py-2 md:w-full flex justify-center">
        <button
          className="p-2 d text-center sm:w-1/4 w-1/2 mx-2"
          onClick={handleBackBtnClick}
        >
          {reviewPage ? "Modify Booking" : "Explore More Rooms"}
        </button>
        <button
          className="p-2 d text-center sm:w-1/4 w-1/2 mx-2"
          onClick={handleNextBtnClick}
        >
          {reviewPage ? "Book Now" : "View Booking Summary"}
        </button>
      </div>
    </div>
  );
}

Booking.defaultProps = defaultProps;
export default Booking;
