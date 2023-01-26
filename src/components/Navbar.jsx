import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  let onPagesWithHero = ["/", "/restaurant"].includes(useLocation().pathname);
  const [active, setActive] = useState(false);
  const [solidNav, setSolidNav] = useState(!onPagesWithHero);
  const navbarBg =
    useLocation().pathname === "/restaurant" ? "bg-[#2b1707]" : "bg-sky-900";

  useEffect(() => {
    setSolidNav(() => !onPagesWithHero);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [onPagesWithHero]);

  const scrollHandler = () => {
    const bodyPos = document.body.getBoundingClientRect();
    if (bodyPos.top < -20 || !onPagesWithHero) {
      setSolidNav(true);
    } else {
      setSolidNav(false);
    }
  };

  return (
    <nav
      className={
        (onPagesWithHero ? "fixed " : "block ") +
        " w-full top-0 z-50 text-white box-border overflow-hidden " +
        (solidNav ? navbarBg : " bg-transparent") +
        (active ? " " + navbarBg : "")
      }
    >
      <div className="max-w-6xl w-full flex flex-row justify-between p-4 md:hidden">
        <Link to={"/"}>
          <div className="uppercase">brandName</div>
        </Link>
        <div
          className="space-y-2 md:hidden cursor-pointer"
          onClick={() => setActive((active) => !active)}
        >
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </div>
      </div>
      <div
        className={
          "max-w-6xl w-full mx-auto md:flex p-4 md:bg-transparent " +
          navbarBg +
          (active ? " h-screen flex flex-col space-y-6 " : " hidden")
        }
        onClick={() => setActive(false)}
      >
        <div className="uppercase hidden md:block md:flex-grow">
          <Link to="/">brandName</Link>
        </div>
        <Link to="/">
          <div className="px-6">Home</div>
        </Link>
        <Link to={"/rooms"}>
          <div className="px-6">Rooms</div>
        </Link>
        <Link to={"gallery"}>
          <div className="px-6">Gallery</div>
        </Link>
        <Link to={"restaurant"}>
          <div className="px-6">Restaurant</div>
        </Link>
        <Link to="/about-us">
          <div className="px-6">About Us</div>
        </Link>
        <Link to={"contact-us"}>
          <div className="px-6">Contact Us</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
