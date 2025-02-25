"use client";
import React from "react";
import { MenuIcon } from "../../../../public/svgs/page";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/state/menuSlice";

const MenuBtn = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <MenuIcon
        className="text-4xl font-bold cursor-pointer bg-lightgreen text-white border-4 border-lightgreen rounded-sm"
        onClick={() => {
          dispatch(toggleMenu());
        }}
      />
    </div>
  );
};

export default MenuBtn;
