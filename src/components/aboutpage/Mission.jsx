import Image from "next/image";
import React from "react";
import images from "./../../data/images.json";

const defaultProps = {
  title: "",
  description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
  nisi omnis impedit. Officiis accusantium consequatur magni rerum
  quaerat nostrum assumenda, aliquid iure amet quo dolore non expedita
  earum, qui quia.
  <br />
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga
  aspernatur aliquam est magni laborum vel blanditiis quod error,
  nostrum accusantium incidunt, sapiente non nisi quisquam beatae?
  Alias, accusantium ullam.`,
  image: images["about-4"],
};

function Mission({ title, description, image }) {
  return (
    <div className="max-w-6xl mx-auto sm:flex ">
      <div className="my-6 p-2 sm:w-1/2">
        <div className="text-2xl text-center">Our Mission</div>
        <div className="text-md font-light text-center sm:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          nisi omnis impedit. Officiis accusantium consequatur magni rerum
          quaerat nostrum assumenda, aliquid iure amet quo dolore non expedita
          earum, qui quia.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga
          aspernatur aliquam est magni laborum vel blanditiis quod error,
          nostrum accusantium incidunt, sapiente non nisi quisquam beatae?
          Alias, accusantium ullam.
        </div>
      </div>
      <div className="my-6 p-2 sm:w-1/2">
        <div className=" h-72 w-full relative">
          <Image
            className="h-full object-cover border rounded-lg"
            src={"https://i.ibb.co/0FZxyc2/about-4.jpg"}
            alt="mission"
            fill
          />
        </div>
      </div>
    </div>
  );
}

Mission.defaultProps = defaultProps;
export default Mission;
