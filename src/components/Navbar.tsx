"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  let onPagesWithHero = false;
  const [active, setActive] = useState(false);
  const [solidNav, setSolidNav] = useState(!onPagesWithHero);
  const navbarBg = true ? "bg-[#2b1707]" : "bg-sky-900";

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
        <Link href="/">
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
          <Link href={"/"}>brandName</Link>
        </div>
        <Link href={"/"}>
          <div className="px-6">Home</div>
        </Link>
        <Link href="/rooms">
          <div className="px-6">Rooms</div>
        </Link>
        <Link href="/gallery">
          <div className="px-6">Gallery</div>
        </Link>
        <Link href="/restaurant">
          <div className="px-6">Restaurant</div>
        </Link>
        <Link href="/about-us">
          <div className="px-6">About Us</div>
        </Link>
        <Link href="contact-us">
          <div className="px-6">Contact Us</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
