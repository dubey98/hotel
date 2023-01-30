import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  let footerBg =
    useLocation().pathname === "/restaurant" ? "bg-[#2b1707]" : "bg-sky-900";

  return (
    <div className={"w-full text-white " + footerBg}>
      <div className="max-w-6xl w-full p-12 flex flex-wrap mx-auto">
        <div className="p-4 w-full sm:w-1/2 md:w-1/4">
          <HotelName />
        </div>
        <div className="p-4 w-full sm:w-1/2 md:w-1/4">
          <QuickLinks />
        </div>
        <div className="p-4 w-full sm:w-1/2 md:w-1/4">
          <OtherLocations />
        </div>
        <div className="p-4 w-full sm:w-1/2 md:w-1/4">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

function HotelName() {
  return (
    <Fragment>
      <FooterSectionTitle title={"The Continental"} />
      <div className=" p-2 font-light space-y-2">
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          voluptatibus
        </div>
        <div className="space-x-4">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </Fragment>
  );
}

function QuickLinks() {
  return (
    <Fragment>
      <FooterSectionTitle title={"Quick links"} />
      <div className="p-2 font-light">
        <ul className="space-y-2">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/rooms"}>Rooms</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact</Link>
          </li>
          <li>
            <Link to={"book"}>Book</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

function OtherLocations() {
  return (
    <Fragment>
      <FooterSectionTitle title={"Other Locations"} />
      <div className="p-2 font-light space-y-2">
        <div>Location 1 </div>
        <div>Location 2 </div>
        <div>Location 3 </div>
      </div>
    </Fragment>
  );
}

function ContactUs() {
  return (
    <Fragment>
      <FooterSectionTitle title="Contact Us" />
      <div className="p-2 font-light space-y-2">
        <div>
          <i className="fas fa-map-marker-alt px-2"></i>252, 26th Street
        </div>
        <div>
          <i className="fas fa-phone-alt px-2"></i>
          Phone: 123-12345678
        </div>
        <div className="whitespace-nowrap overflow-hidden">
          <i className="fas fa-envelope px-2"></i>
          Email: yourhotel@example.com
        </div>
      </div>
    </Fragment>
  );
}

function FooterSectionTitle({ title }) {
  return <div className="text-2xl font-semibold px-2">{title}</div>;
}

export default Footer;
