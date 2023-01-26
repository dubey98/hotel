import React from "react";
import { Link } from "react-router-dom";
import images from "./../../data/images.json";

function RestoHero() {
  return (
    <div
      className="h-screen w-full bg-center bg-cover bg-no-repeat text-shadow-lg"
      style={{ backgroundImage: `url(${images["res-2"]})` }}
    >
      <div className="flex flex-col h-full justify-center align-center pt-10">
        <div className="p-4 text-[#e6dac6] max-w-6xl mx-auto">
          <div className="text-4xl text-center">Welcome to Our restaurant</div>
          <div className="p-2 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            temporibus ipsam exercitationem. Repudiandae harum, consequuntur
            natus laborum non dignissimos iusto voluptatem, cumque error nisi,
            rerum accusantium perferendis est quam repellendus.
          </div>
          <div className="flex justify-center space-x-6 p-4">
            <button className="p-2 px-4 hover:bg-[#2b1707] border-2 border-[#110702] rounded-full">
              <Link to="#menu">
                <div>Explore Menu</div>
              </Link>
            </button>
            <button className="p-2 px-4 hover:bg-[#2b1707] border-2 border-[#110702] rounded-full">
              See Images
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestoHero;
