"use client";

import React, { useState } from "react";
import RestoHero from "../../components/restaurant/RestoHero";
import Menu from "../../components/restaurant/Menu";
import menus from "../../data/defaultProps/menus.json";

const defaultProps = {
  menus: menus,
};

function Restaurant({ menus }) {
  return (
    <div className="">
      <RestoHero />
      <Menu menus={menus} />
    </div>
  );
}

Restaurant.defaultProps = defaultProps;
export default Restaurant;
