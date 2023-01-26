import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import FullScreenImageModal from "../components/FullScreenImageModal";
import images from "./../data/images.json";

const defaultProps = {
  title: "A Few Sneak Peeks",
  images: [
    {
      src: images["room-1"],
      alt: "rooms",
      description: "Image description ",
    },

    {
      src: images["homepage-1"],
      alt: "rooms",
      description: "Image description ",
    },

    {
      src: images["location-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["location-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["location-3"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["gym-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["homepage-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["res-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["res-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["room-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["room-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["spa-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["pool-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["about-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["about-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["about-3"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["res-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["room-2"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["room-1"],
      alt: "rooms",
      description: "Image description ",
    },
    {
      src: images["spa-1"],
      alt: "rooms",
      description: "Image description ",
    },
  ],
};

function Gallery({ images, title }) {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isDesktop = useMediaQuery({ query: "(max-width: 1280px)" });

  const [imageArray, setImageArray] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    let cols = isMobile ? 1 : isTablet ? 2 : isDesktop ? 3 : 4;
    setImageArray(mapImages(images, cols, activateModal));
  }, [images, isMobile]);

  const activateModal = (image) => {
    console.log("activate modal called");
    setModalActive(true);
    setSelectedImage(image);
  };

  const handleModalClose = (e) => {
    setModalActive(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="p-12 text-4xl uppercase text-center font-semibold">
        {title}
      </div>
      <div className="max-w-6xl mx-auto gap-2 p-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imageArray}
      </div>
      {modalActive && (
        <FullScreenImageModal
          closeModal={handleModalClose}
          images={images}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
}

function mapImages(images, cols, activateModal) {
  const imageArray = [];
  for (let i = 0; i < cols; i++) {
    imageArray.push([]);
  }
  let col = 0;
  for (let i = 0; i < images.length; i++) {
    imageArray[col % cols].push(
      <Image image={images[i]} key={i} activateModal={activateModal} />
    );
    col++;
  }
  return imageArray.map((singleCol, index) => {
    return (
      <div className="space-y-2" key={index}>
        {singleCol}
      </div>
    );
  });
}

function Image({ image, activateModal }) {
  const [overlayActive, setOverlayActive] = useState(false);

  return (
    <div
      className="w-full relative"
      onMouseEnter={() => setOverlayActive(true)}
      onMouseLeave={() => setOverlayActive(false)}
      onClick={() => activateModal(image)}
    >
      <img
        className={"rounded-lg z-0"}
        src={image.src}
        alt={image.alt}
        loading={"lazy"}
      ></img>
      <div
        className={
          "absolute bg-black w-full z-10 top-0 rounded-lg duration-300 transition-all ease-in-out h-full " +
          (overlayActive ? "visible opacity-50" : "opacity-0 invisible")
        }
      ></div>
      {overlayActive && (
        <div className="h-full w-full absolute top-0 flex flex-col z-10">
          <div className="flex-grow flex items-end">
            <div className="text-xl text-white text-shadow flex-grow p-2">
              {image.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Gallery.defaultProps = defaultProps;
export default Gallery;
