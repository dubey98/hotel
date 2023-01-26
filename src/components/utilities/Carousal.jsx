import React, { useState, useEffect } from "react";

export function CarousalItem({ children, width }) {
  return (
    <div className="inline-block text-center" style={{ width: width }}>
      <div className="flex justify-center items-center">{children}</div>
    </div>
  );
}

function Carousal({ children, sideButtons, bottomButtons }) {
  const [index, setIndex] = useState(0);
  const numberOfChildren = React.Children.toArray(children).length;

  useEffect(() => {
    if (!sideButtons && !bottomButtons) {
      sideButtons = true;
    }
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((index + 1) % numberOfChildren);
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [numberOfChildren, index]);

  const updateIndex = (newIndex) => {
    if (newIndex >= 0 && newIndex < numberOfChildren) {
      setIndex(newIndex);
    }
  };

  return (
    <div className="overflow-hidden relative box-border">
      {sideButtons && (
        <button
          className="absolute opacity-50 z-50 top-1/2 left-0 -mt-5 p-2 text-2xl border-2 border-black shadow-lg h-12 w-12 flex justify-center items-center rounded-full mx-2"
          onClick={() => updateIndex(index - 1)}
        >
          <i className="fas fa-angle-left"></i>
        </button>
      )}
      {sideButtons && (
        <button
          className="absolute opacity-50 z-50 top-1/2 right-0 -mt-5 p-2 text-2xl border-2 border-black shadow-lg h-12 w-12 flex justify-center items-center rounded-full mx-2"
          onClick={() => updateIndex(index + 1)}
        >
          <i className="fas fa-angle-right"></i>
        </button>
      )}
      <div
        className={
          `z-10 whitespace-nowrap transition-all ease-in-out duration-300 ` +
          getTranslateClass(index)
        }
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { width: "100%" })
        )}
      </div>
      {bottomButtons && (
        <BottomButton
          currentIndex={index}
          updateIndex={updateIndex}
          maxIndex={numberOfChildren}
        />
      )}
    </div>
  );
}

function BottomButton({ currentIndex, updateIndex, maxIndex }) {
  const [buttonArray, setButtonArray] = useState([]);

  useEffect(() => {
    const array = [];
    for (let i = 0; i < maxIndex; i++) {
      array.push(i + 1);
    }
    setButtonArray(array);
  }, [maxIndex]);

  return (
    <div className="flex justify-center space-x-2 p-2">
      {buttonArray.map((item, index) => (
        <div
          onClick={() => updateIndex(item - 1)}
          className={
            "h-8 w-8 flex justify-center items-center leading-10 rounded-full border-2 " +
            (item - 1 === currentIndex ? " bg-blue-300 text-white" : "")
          }
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

// string concatenation cannot be used with tailwind as tailwind purges classes not in use
// need to define this classes for it to include them
function getTranslateClass(index) {
  let cls = "";
  switch (index) {
    case 0:
      cls = "translate-x-0";
      break;
    case 1:
      cls = "translate-x-[-100%]";
      break;
    case 2:
      cls = "translate-x-[-200%]";
      break;
    default:
      cls = `translate-x-[-${index * 100}%]`;
      break;
  }
  return cls;
}

export default Carousal;
