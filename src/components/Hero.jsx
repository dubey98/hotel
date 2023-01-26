import React, { useState } from "react";
import SearchForm from "./SearchForm";
import MobileBottomModal from "./utilities/MobileBottomModal";
import images from "./../data/images.json";

function Hero() {
  const [searchActive, setSearchActive] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);

  function toggleSearchActivation() {
    setSearchActive(!searchActive);
  }

  return (
    <header
      className="flex flex-col justify-center items-center h-screen w-full bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(${images["homepage-2"]})` }}
    >
      <div
        className={
          "text-center flex flex-col justify-center pt-8 text-white text-shadow " +
          (hideIntro ? " hidden" : "")
        }
      >
        <div className="text-6xl p-4 font-bold">Welcome to the Continental</div>
        <div className="p-2 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          repudiandae, molestias et debitis distinctio animi vero
        </div>
      </div>
      <div
        className={
          "hidden sm:block sm:basis-1/2 sm:p-4 transition-all ease-in-out absolute duration-200  " +
          (hideIntro ? " top-[10vh] " : " top-[75vh]")
        }
      >
        <SearchForm hideIntroOnHero={setHideIntro} />
      </div>
      <div className="basis-1/4 flex items-center sm:hidden">
        <button
          className="p-4 px-8 rounded-lg bg-white"
          onClick={() => toggleSearchActivation()}
        >
          Check Room Availability
        </button>
      </div>
      <MobileBottomModal
        active={searchActive}
        toggleActivation={toggleSearchActivation}
      >
        <SearchForm />
      </MobileBottomModal>
    </header>
  );
}

export default Hero;
