import React, { useEffect } from "react";

function MobileBottomModal({ children, active, toggleActivation }) {
  const handleClose = () => {
    toggleActivation();
  };

  useEffect(() => {
    // TODO: BUG: after page refresh this event fires the first time checkin is clicked
    // function handleWindowClick(e) {
    //   if (active && e.target.id === "mobileModal") {
    //     handleClose();
    //   }
    // }
    // window.addEventListener("click", handleWindowClick);
    // return () => {
    //   window.removeEventListener("click", handleWindowClick);
    // };
  }, [active]);

  return (
    <div
      className={"fixed h-screen w-full z-0 " + (active ? "" : "hidden")}
      id="mobileModal"
    >
      <div
        className={"fixed bottom-0 left-0 w-full bg-white rounded-t-2xl z-10 "}
        id="mobileModal"
      >
        {children}
        <div className="flex justify-center text-xl py-2">
          <div
            onClick={handleClose}
            className="hover:bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center"
          >
            &times;
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileBottomModal;
