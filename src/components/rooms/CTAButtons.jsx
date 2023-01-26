import React from "react";

const defaultProps = {
  buttons: [],
};

function CTAButtons({ buttons }) {
  let navigate ={}// useNavigate();
  return (
    <div className="flex space-x-2">
      {buttons.map((button, index) => (
        <button
          className="border-2 rounded-full px-3 py-1 hover:bg-sky-600 hover:text-white"
          key={index}
          onClick={() => {
            navigate(button.navigateTo);
          }}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
}

CTAButtons.defaultProps = defaultProps;
export default CTAButtons;
