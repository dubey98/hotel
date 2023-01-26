import React from "react";

function ContactForm() {
  return (
    <div className="p-2 space-y-2 max-w-2xl">
      <div className="">
        <input
          className="border-2 bg-gray-100 p-2 w-full outline-none"
          type="text"
          name="name"
          id="name"
          placeholder="your name"
        />
      </div>
      <div className="">
        <input
          className="border-2 bg-gray-100 p-2 w-full outline-none"
          type="text"
          name="subject"
          id="subject"
          placeholder="subject"
        />
      </div>
      <div>
        <textarea
          className="border-2 bg-gray-100 p-2 w-full outline-none"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="message"
        ></textarea>
      </div>
      <div className="text-center">
        <button className="p-2 bg-blue-600 text-white rounded-full w-1/2">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
