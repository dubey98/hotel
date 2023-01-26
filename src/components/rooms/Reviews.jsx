import React from "react";

function Reviews() {
  return (
    <div className="">
      <div className="text-xl py-2">What our guests say..</div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
}

function Review() {
  return (
    <div className=" bg-white border-2 border-gray-300 p-4 rounded-md tracking-wide shadow-lg">
      <div className="flex items-center mb-2">
        <img
          alt="avatar"
          className="w-14 rounded-full border-2 border-gray-300"
          src="https://picsum.photos/seed/picsum/200"
        />
        <div className="leading-5 ml-6">
          <h4 className="text-lg font-semibold">John Doe</h4>
          <h5 className="font-semibold text-blue-600">Designer</h5>
        </div>
      </div>
      <div className="">
        <q className="italic text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </q>
      </div>
    </div>
  );
}

export default Reviews;
