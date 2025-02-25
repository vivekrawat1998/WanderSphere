"use client";
import React from "react";
import { MenuIcon } from "../../../../public/svgs/page";
import { useDispatch } from "react-redux";

import { toggleSideBar } from "@/state/sideBarSlice";

const MenuBtn = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <MenuIcon
        className="text-2xl font-bold cursor-pointer text-gray"
        onClick={() => {
          dispatch(toggleSideBar());
        }}
      />
    </div>
  );
};

export default MenuBtn;
