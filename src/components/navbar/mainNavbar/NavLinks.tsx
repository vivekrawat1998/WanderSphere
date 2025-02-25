"use client";
import React from "react";
import navLinksData from "@/components/appData/navLinksData";
import NavLink from "./NavLink";
import { useSelector } from "react-redux";
import type { RootState } from "@/state/store";

const NavLinks: React.FC = () => {
  const menuOpen = useSelector((state: RootState) => state.menu.open);
  return (
    <ul
      className={`lg:flex justify-evenly  items-center lg:flex-row sm:flex-col sm:absolute lg:relative sm:w-full sm:left-0 lg:w-auto sm:bg-gray lg:bg-graybg sm:top-[140%] lg:max-h-[1000px] sm:overflow-hidden lg:overflow-visible transition-all duration-500 ${
        menuOpen ? "sm:max-h-[1000px]" : "sm:max-h-0"
      }`}
    >
      {navLinksData.map((link, index) => {
        return <NavLink key={index} linkData={link} />;
      })}
    </ul>
  );
};

export default NavLinks;
