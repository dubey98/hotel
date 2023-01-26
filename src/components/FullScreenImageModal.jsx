import React, { useState, useEffect } from "react";

function FullScreenImageModal({ closeModal, images, selectedImage }) {
  const [index, setIndex] = useState(0);
  const [visibleImage, setVisibleImage] = useState(selectedImage);

  useEffect(() => {
    images && setVisibleImage(images[index]);
  }, [index]);

  useEffect(() => {
    const i = images && images.indexOf(selectedImage);
    setIndex(i);
  }, []);

  const handleModalBgClick = (e) => {
    if (e.target.id === "fs-modal-bg" && typeof closeModal === "function") {
      closeModal();
      e.stopPropagation();
    }
  };

  const handleSwipeClick = (advance) => {
    // console.log(images.length);
    if (
      images &&
      index + advance >= 0 &&
      index + advance <= images.length - 2
    ) {
      setIndex(index + advance);
    }
  };

  return (
    <div
      className="fixed h-[100vh] w-[100vw] z-40 top-0 left-0 bg-black-rgba-90 sm:p-12"
      id="fs-modal-bg"
      onClick={handleModalBgClick}
    >
      <div
        className="flex flex-col justify-center items-center h-full w-full max-w-6xl mx-auto"
        id="fs-modal-bg"
      >
        <img
          className="z-50 object-scale-down object-center max-h-[90vh] max-w-[90vw] mx-auto"
          src={visibleImage && visibleImage.src}
          alt={visibleImage && visibleImage.alt}
        />
        <div className="w-full h-16 p-2 flex justify-center relative">
          {index > 0 && (
            <button
              className={
                "sm:absolute z-50 p-2 border-2 h-12 w-12 flex justify-center items-center rounded-full mx-2 " +
                " border-white text-white shadow-lg text-2xl " +
                " sm:translate-y-[-46vh] sm:left-0 sm:-mt-5 " +
                "hover:bg-gray-400"
              }
              onClick={() => handleSwipeClick(-1)}
            >
              <i className="fas fa-angle-left"></i>
            </button>
          )}
          {images && (
            <div className="text-white">
              {index + 1}/{images.length}
            </div>
          )}
          {images && index < images.length - 2 && (
            <button
              className={
                "sm:absolute z-50 p-2 border-2 h-12 w-12 flex justify-center items-center rounded-full mx-2 " +
                " border-white text-white shadow-lg text-2xl " +
                " sm:translate-y-[-46vh] sm:right-0 sm:-mt-5 " +
                "hover:bg-gray-400"
              }
              onClick={() => handleSwipeClick(1)}
            >
              <i className="fas fa-angle-right"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FullScreenImageModal;
