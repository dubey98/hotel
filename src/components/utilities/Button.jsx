import React from "react";

function Button({ btnCls, cb, btnText }) {
  const handleClick = (e) => {
    cb(e);
  };

  return (
    <button className={"p-2 rounded-lg " + btnCls} onClick={handleClick}>
      {btnText}
    </button>
  );
}

export default Button;
