import React from "react";
import ContactForm from "../../components/ContactForm";
import { BiPhoneCall, BiMap, BiEnvelope } from "react-icons/bi";

function ContactUs() {
  return (
    <section className="bg-gray-100">
      <div className="p-12 pt-36 text-4xl font-semibold text-center">
        Contact Us
      </div>
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
      <div className="w-full p-2 hover:shadow-md flex min-h-[85px] border rounded-lg bg-white">
        <div className="text-xl flex items-center px-4">
          <BiPhoneCall />
        </div>
        <div className="font-light p-2 flex flex-col justify-center">
          <div>
            <a href="tel:+919999999999">+91-99998 98989</a>
          </div>
          <div>
            <a href="tel:+919999999999">+91-99999 99999</a>
          </div>
        </div>
      </div>
      <div className="w-full p-2 hover:shadow-md flex min-h-[85px] border rounded-lg bg-white">
        <div className="text-xl flex items-center px-4">
          <BiMap />
        </div>
        <div className="font-light p-2 flex flex-col">
          25th, 3rd Street, Cannaught place, New Delhi
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            See On Map
          </a>
        </div>
      </div>
      <div className="w-full p-2 hover:shadow-md cursor-pointer flex min-h-[85px] border rounded-lg bg-white">
        <div className="text-xl flex items-center px-4">
          <BiEnvelope />
        </div>
        <div className="font-light p-2 text-center flex items-center">
          <a href="mailto:web@example.com">web@example.com</a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
