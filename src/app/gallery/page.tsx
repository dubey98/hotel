"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

const imageUrl = "https://source.unsplash.com/random/301x301/";

function Gallery() {
  const [modalImg, setModalImg] = useState("#");
  const [modalAlt, setModalAlt] = useState("");
  const modal: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.id);
    if ((e.target as any).id) {
      modal?.current?.classList.add("hidden");
    }
  };

  const openModal = (src: string, alt: string, index: number) => {
    setModalImg(src + `?${index}`);
    setModalAlt(alt);
    modal?.current?.classList.remove("hidden");
  };

  return (
    <div className="bg-gray-100">
      <h1 className="p-12 pt-36 text-4xl uppercase text-center font-semibold">
        A Few Sneak Peeks
      </h1>
      <div className="py-6 text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            src="https://source.unsplash.com/random/301x301/"
            alt="random image"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
            width={301}
            height={301}
          />
          {[1, 1, 1, 1, 1, 1, 1, 1].map((value, index) => {
            return (
              <Image
                width={301}
                height={301}
                alt=""
                key={index}
                className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square scale-100 object-cover "
                src={`https://source.unsplash.com/random/200x200/?${index}`}
                onClick={() => openModal(imageUrl, "", index)}
              />
            );
          })}
          <Image
            width={301}
            height={301}
            src="https://source.unsplash.com/random/302x302/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </div>
      <div
        id="modal"
        ref={modal}
        className="hidden fixed top-0 left-0 z-40 w-screen h-screen bg-black/70 flex justify-center items-center"
        onClick={closeModal}
      >
        <Image
          id="modalImg"
          src={modalImg}
          alt={modalAlt}
          className="max-w-[800px] max-h-[600px] object-cover z-50"
          width={301}
          height={301}
          onClick={closeModal}
          unoptimized
        />
      </div>
    </div>
  );
}

export default Gallery;
