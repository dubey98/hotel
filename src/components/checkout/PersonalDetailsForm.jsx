import React from "react";

function PersonalDetailsForm() {
  return (
    <div className="p-2">
      <div className="sm:flex">
        <div className="flex flex-col p-1 flex-grow">
          <label className="p-1">First Name*</label>
          <input
            type="text"
            className="p-2 border bg-gray-100 rounded-lg"
            placeholder="name"
          />
        </div>
        <div className="flex flex-col p-1 flex-grow">
          <label className="p-1">Last Name</label>
          <input
            type="text"
            className="p-2 border bg-gray-100 rounded-lg"
            placeholder="Last name"
          />
        </div>
      </div>
      <div className="sm:flex">
        <div className="flex flex-col p-1 flex-grow">
          <label className="p-1">Email</label>
          <input
            type="text"
            className="p-2 border bg-gray-100 rounded-lg"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col p-1 flex-grow">
          <label className="p-1">Phone*</label>
          <input
            type="text"
            className="p-2 border bg-gray-100 rounded-lg"
            placeholder="phone"
          />
        </div>
      </div>
      <div className="flex flex-col p-2">
        <label className="p-1">Address</label>
        <textarea
          name="address"
          id="address"
          cols="20"
          rows="3"
          className="p-2 bg-gray-100 border"
          placeholder="Address"
        ></textarea>
      </div>
    </div>
  );
}

export default PersonalDetailsForm;
