import React from "react";

function Opacity({ controller, opacity }) {
  function getOpacity() {
    let ret = "opacity-50";
    switch (opacity) {
      case 25:
        ret = "opacity-25";
        break;
      default:
        break;
    }
    return ret;
  }

  return (
    <div
      className={
        "w-full h-full absolute top-0 bg-black transition-all ease-in-out z-0 " +
        (controller ? getOpacity() : "opacity-0")
      }
    ></div>
  );
}

export default Opacity;
