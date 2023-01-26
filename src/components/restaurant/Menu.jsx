import React, { useState } from "react";

function Menu({ menus }) {
  const [activeMenu, setActiveMenu] = useState(Object.keys(menus)[0]);

  const handleMenuChange = (e) => {
    setActiveMenu(e.target.innerText);
  };

  return (
    <div className=" min-h-screen flex flex-col" id="menu">
      <div className="flex flex-col p-6 flex-grow">
        <div className="flex justify-center p-4">
          <div className="flex rounded-lg">
            {Object.keys(menus).map((menuTitle, index) => (
              <div
                className={
                  (activeMenu === menuTitle
                    ? "bg-[#2b1707] text-[#daa754]"
                    : "") + " p-2 px-3 cursor-pointer"
                }
                key={index}
                onClick={(e) => handleMenuChange(e)}
              >
                {menuTitle}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#110702] text-[#daa754] p-4 flex-grow">
          <div className="mx-auto max-w-6xl">
            {menus[activeMenu].map((menu, index) => (
              <SubMenu title={menu.title} items={menu.items} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SubMenu({ title, items }) {
  return (
    <div>
      <div className="text-xl p-2">{title}</div>
      <div className="grid grid-cols-2 gap-4 p-2 font-light sm:grid-cols-3 md:grid-cols-4">
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
