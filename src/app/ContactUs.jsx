import React from "react";
import ContactForm from "../components/ContactForm";

function ContactUs() {
  return (
    <section className="">
      <div className="p-12 text-4xl font-semibold text-center">Contact Us</div>
      <div className="max-w-6xl mx-auto">
        <ContactMeans />
        <div className="p-4 flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">
            <ContactForm />
          </div>
          <div className="bg-green-300 w-full sm:w-1/2 flex items-center justify-center">
            Google Maps will be inserted here
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactMeans() {
  return (
    <div className="p-2 space-y-2 sm:flex sm:space-y-0 sm:space-x-2 md:max-w-4xl md:mx-auto">
      <div className="w-full p-2 hover:shadow-md flex min-h-[85px] border rounded-lg">
        <div className="text-xl flex items-center px-4">
          <i className="fas fa-phone-alt"></i>
        </div>
        <div className="font-light p-2 flex flex-col justify-center">
          <div>
            <a href="tel:+911234123412">+91-1234123412</a>
          </div>
          <div>
            <a href="tel:+911234123412">+91-1234123412</a>
          </div>
        </div>
      </div>
      <div className="w-full p-2 hover:shadow-md flex min-h-[85px] border rounded-lg">
        <div className="text-xl flex items-center px-4">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="font-light p-2 flex items-center">
          25th, 3rd Street, Cannaught place, New Delhi
        </div>
      </div>
      <div className="w-full p-2 hover:shadow-md cursor-pointer flex min-h-[85px] border rounded-lg">
        <div className="text-xl flex items-center px-4">
          <i className="fas fa-envelope"></i>
        </div>
        <div className="font-light p-2 text-center flex items-center">
          <a href="mailto:web@example.com">web@example.com</a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
