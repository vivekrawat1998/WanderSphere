import React, { useEffect, useState } from "react";
import { CalendarIcon, SearchIcon } from "../../../public/svgs/page";
import { DatePicker } from "./DatePicker";

const HeroSearch: React.FC = () => {
  const [offsetY, setOffsetY] = useState<number>(0);
  const handleScroll = () => {
    if (window.innerWidth > 1150) {
      setOffsetY(window.scrollY < 630 ? window.scrollY : 630);
    } else {
      setOffsetY(0);
    }
  };
  const handleResize = () => {
    if (window.innerWidth > 1150) {
      setOffsetY(0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <div
      className="lg:h-[85px] lg:w-[1000px] sm:w-full bg-white shadow-xl rounded-xl flex lg:items-center sm:items-stretch justify-between lg:px-4 sm:px-8 lg:pl-16  lg:flex-row sm:flex-col sm:gap-8 lg:gap-0 lg:py-0 sm:py-8 sm:scale-100"
      style={{ transform: `scale(${offsetY * 0.0003 + 1})` }}
    >
      <div className="flex items-center lg:gap-2  h-full sm:gap-4 ">
        <SearchIcon className="text-4xl text-lightgreen" />
        <div className="flex flex-col ">
          <p className="font-bold">Search</p>
          <input
            type="text"
            name="search"
            placeholder="Tour, Place, City or Category"
            className="border-b-1 focus:outline-none w-[300px] text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-1 h-full sm:gap-4 ">
        <CalendarIcon className="text-4xl text-lightgreen" />
        <div className="flex flex-col">
          <p className="font-bold ">Your Dates</p>
          <div>
            <DatePicker />
          </div>
        </div>
      </div>
      <button className="px-8 py-4 font-bold rounded-md bg-lightgreen text-white hover:bg-lightestgreen transition-all duration-500 ">
        Search
      </button>
    </div>
  );
};

export default HeroSearch;
