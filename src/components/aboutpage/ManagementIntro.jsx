import Image from "next/image";
import React from "react";
import images from "./../../data/images.json";

const defaultProps = {
  title: "Management",
  intros: [
    {
      imageAlt: "Managing DIrectors Image",
      name: "John Doe",
      designation: "Managing Director",
      image: images["about-6"],
      intro1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero dolorum quos dolores eos modi, quaerat autem voluptate corporis laboreut. Molestias explicabo harum veritatis qui mollitia, doloremque in ut quam.",
      intro2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odiosaepe voluptatum iusto nostrum suscipit at quasi perferendis consequatur officia dolores voluptates expedita maiores ea ipsam necessitatibus quo, voluptas sint.",
    },
    {
      imageAlt: "Managing DIrectors Image",
      name: "John Doe",
      designation: "Managing Director",
      image: images["about-7"],
      intro1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero dolorum quos dolores eos modi, quaerat autem voluptate corporis laboreut. Molestias explicabo harum veritatis qui mollitia, doloremque in ut quam.",
      intro2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odiosaepe voluptatum iusto nostrum suscipit at quasi perferendis consequatur officia dolores voluptates expedita maiores ea ipsam necessitatibus quo, voluptas sint.",
    },
    {
      imageAlt: "Managing DIrectors Image",
      name: "John Doe",
      designation: "Managing Director",
      image: images["about-5"],
      intro1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero dolorum quos dolores eos modi, quaerat autem voluptate corporis laboreut. Molestias explicabo harum veritatis qui mollitia, doloremque in ut quam.",
      intro2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odiosaepe voluptatum iusto nostrum suscipit at quasi perferendis consequatur officia dolores voluptates expedita maiores ea ipsam necessitatibus quo, voluptas sint.",
    },
  ],
};

function ManagementIntro({ title, intros }) {
  return (
    <div className="my-6 p-2">
      <div className="p-4 text-3xl text-center">{title}</div>
      {intros.map((intro, index) => (
        <IntroCard card={intro} key={index} />
      ))}
    </div>
  );
}

function IntroCard({ card }) {
  return (
    <div className="my-4 md:flex max-w-4xl mx-auto p-4 border-2 rounded-xl">
      <div className="h-72 w-full flex justify-center items-center relative">
        <Image
          className="object-cover w-full h-full rounded-lg border"
          src={card.image}
          alt=""
          fill
        />
      </div>
      <div className="p-4 space-y-2">
        <div>
          <span className="text-2xl">{card.name}</span> <br />
          <span className="italic text-sm">- {card.designation}</span>
        </div>
        <div>{card.intro1}</div>
        <div>{card.intro2}</div>
      </div>
    </div>
  );
}

ManagementIntro.defaultProps = defaultProps;
export default ManagementIntro;
