import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="max-w-6xl mx-auto p-4 flex justify-center items-center h-screen">
      <div className="space-y-5">
        <div className="text-6xl">OOPS...</div>
        <div>
          We can't find anything by that address, but, you may find it from the
          homepage
        </div>
        <div className="text-center">
          <Link to="/">
            <button className="border py-2 px-3 rounded-lg shadow-md">
              Go To HomePage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
