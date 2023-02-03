import React from "react";

function ContactForm() {
  return (
    <div className="p-2 space-y-2 max-w-2xl">
      <form action="" className="mt-10 space-y-8 dark:text-white">
        <div>
          <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
            <input
              id=""
              type="email"
              placeholder="Your Name"
              className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
            />
          </div>
        </div>

        <div className="">
          <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
            <input
              id=""
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
            />
          </div>
        </div>
        <div className="">
          <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
            <textarea
              id=""
              placeholder="Your Message"
              rows={5}
              className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
            />
          </div>
        </div>

        <div>
          <button className="w-full rounded-full bg-[#AEAEAE] dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-[#AEAEAE] focus:bg-gray-500 active:bg-sky-800">
            <span className="text-base font-semibold text-white dark:text-gray-900">
              Send Message
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
