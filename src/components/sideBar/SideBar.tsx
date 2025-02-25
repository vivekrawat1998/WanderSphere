"use client";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/state/store";

const SideBar: React.FC = () => {
  const sideBarOpen = useSelector((state: RootState) => state.sideBar.open);
  return (
    <div
      className={`bg-yellow absolute w-[30%] h-[100vh] top-0 transition-all duration-500 min-w-[378px] z-20 ${
        sideBarOpen ? "left-0" : "translate-x-[-100%]"
      }`}
    >
      sideBar
    </div>
  );
};

export default SideBar;
