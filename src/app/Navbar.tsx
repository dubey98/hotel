import React from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    displayText: "Rooms",
    href: "/rooms",
  },
  {
    displayText: "Dining",
    href: "/dining",
  },
  {
    displayText: "Gallery",
    href: "/gallery",
  },
  {
    displayText: "About Us",
    href: "/about-us",
  },
  {
    displayText: "Contact Us",
    href: "/contact",
  },
];

function Navbar() {
  return (
    <nav className="absolute w-full">
      <div className="container m-auto px-6 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0 relative">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="peer hidden"
          />
          <div className="w-full flex justify-between md:w-max md:px-0">
            <Link href="#" aria-label="logo">
              <Image
                src="/logo.svg"
                className="w-36 grayscale dark:contrast-50 contrast-200"
                alt="tailus logo"
                width="144"
                height="68"
              />
            </Link>

            <div className="flex items-center md:hidden max-h-10">
              <label
                role="button"
                htmlFor="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                className="relative z-40 px-2 py-3 sm:-mr-6"
              >
                <div
                  id="line"
                  className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                ></div>
                <div
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
          </div>

          <label
            role="button"
            htmlFor="toggle_nav"
            className="fixed w-full z-30 h-full top-0 left-0 bg-gray-700 bg-opacity-40 hidden peer-checked:block md:peer-checked:hidden"
          ></label>

          <div
            className="flex z-50 flex-col md:flex-row justify-between 
                    items-center gap-y-4 p-6 bg-white dark:bg-gray-800 md:w-8/12 
                    md:gap-y-4 md:p-0 
                    md:bg-transparent lg:w-7/12 fixed top-0 -left-full transition-all duration-500 peer-checked:left-0 max-w-sm h-full 
                    md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0"
          >
            <div className="flex md:hidden w-full pb-5">
              <Link href="#" aria-label="logo">
                <Image
                  src="/logo.svg"
                  className="w-36 grayscale contrast-200"
                  alt="tailus logo"
                  width="144"
                  height="68"
                />
              </Link>
            </div>
            <div className="block w-full h-full md:h-auto">
              <ul className="space-y-8 tracking-wide font-medium md:flex md:space-y-0">
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link href={link.href} className="block md:px-3 group">
                        <div
                          className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                        >
                          <span className="transition group-hover:text-yellow-700 dark:text-gray-300 dark:group-hover:text-yellow-300">
                            {link.displayText}
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row flex-col">
              {/* <button
                type="button"
                title="Login"
                className="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
              >
                <span className="block text-gray-700 dark:text-gray-300 font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                  Login
                </span>
              </button> */}
              <button
                type="button"
                title="Start booking"
                className="w-full py-3 px-6 text-center transition dark:bg-gray-700 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 md:w-max"
              >
                <span className="block text-white font-semibold">Book now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
