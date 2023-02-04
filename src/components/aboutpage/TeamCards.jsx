import React from "react";
import images from "./../../data/images.json";
import Image from "next/image";

const defaultProps = {
  title: "The Team",
  itemList: [
    {
      title: "John Doe",
      subtitle: "Head Chef",
      image: images["about-8"],
      description:
        "John has been working with us for 5 years. he is am amazing chef",
    },
    {
      title: "John Doe",
      subtitle: "Head Chef",
      image: images["about-9"],
      description:
        "John has been working with us for 5 years. he is am amazing chef",
    },
    {
      title: "John Doe",
      subtitle: "Head Chef",
      image: images["about-10"],
      description:
        "John has been working with us for 5 years. he is am amazing chef",
    },
    {
      title: "John Doe",
      subtitle: "Head Chef",
      image: images["about-11"],
      description:
        "John has been working with us for 5 years. he is am amazing chef",
    },
  ],
};

function TeamCards({ title, itemList }) {
  return (
    <div className="container mx-auto">
      <div className="p-4 text-3xl text-center">{title}</div>
      <div className="my-8 p-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {itemList.map((item, index) => (
          <TeamCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

function TeamCard({ item }) {
  return (
    <div className="w-full">
      <div className="w-full p-2 space-y-2 border-2 rounded-lg">
        <div className="h-72 relative">
          <Image
            className="h-full w-full object-cover"
            src={item.image}
            alt=""
            fill
          />
        </div>
        <div>
          <div className="text-xl">{item.title}</div>
          <div className="italic font-light">{item.subtitle}</div>
          <div className="text-sm">{item.description}</div>
        </div>
      </div>
    </div>
  );
}

TeamCards.defaultProps = defaultProps;
export default TeamCards;
