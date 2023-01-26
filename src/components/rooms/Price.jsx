import React from "react";

function Price({ price }) {
  return (
    <div className="">
      <span className="text-2xl text-green-700">
        {price && price.discountedPrice} <span className="text-sm">per night</span>
      </span>
      <span className="text-lg line-through italic text-red-700 px-2">
        Rs. {price && price.actualPrice}
      </span>
    </div>
  );
}

export default Price;
