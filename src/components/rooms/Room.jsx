import React from "react";
import IconList from "./IconList";
import Price from "./Price";
import CTAButtons from "./CTAButtons";
import TagList from "./TagList";
import images from "./../../data/images.json";
import Carousal, { CarousalItem } from "../utilities/Carousal";

function Room({ room, widget }) {
  function resolveImage(imageName) {
    return imageName === "room1" ? images["room-1"] : images["room-2"];
  }

  return (
    <div className="p-4">
      <div
        className={
          "p-2 max-w-3xl mx-auto shadow-lg border-2 rounded-lg bg-white " +
          (widget ? "" : " sm:flex")
        }
      >
        <div className=" sm:basis-1/3 min-h-[175px] sm:min-h-[250px]">
          <Carousal>
            <CarousalItem>
              <div
                className=" bg-blue-400 min-h-[250px] min-w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${resolveImage("room1")})`,
                }}
              ></div>
            </CarousalItem>
            <CarousalItem>
              <div
                className=" bg-blue-400 min-h-[250px] min-w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${resolveImage("room2")})`,
                }}
              ></div>
            </CarousalItem>
          </Carousal>
        </div>
        <div className="px-4 py-2 space-y-2 sm:basis-2/3 sm:h-full">
          {!widget && <TagList tags={room.tags} />}
          <TitleDescription
            title={room.title}
            description={room.description}
            widget={widget}
          />
          {!widget && <IconList icons={room.iconList} />}
          {!widget && <Price price={room.price} />}
          <div className={widget ? "flex justify-center" : ""}>
            <CTAButtons buttons={room.buttons} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleDescription({ title, description, widget }) {
  return (
    <div>
      <div className={"text-xl font-semibold " + (widget ? "text-center" : "")}>
        {title}
      </div>
      <div className={"text-sm font-light " + (widget ? "text-center" : "")}>
        {description}
      </div>
    </div>
  );
}

export default Room;
