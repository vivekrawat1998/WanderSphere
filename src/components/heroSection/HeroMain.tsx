"use client";
import React from "react";
import HeroText from "./HeroText";
import HeroImages from "./HeroImages";
import Image from "next/image";
import worldMap from "../../../public/img/world-map.png";
import HeroSearch from "../search/HeroSearch";

const HeroMain: React.FC = () => {
  return (
    <div className="bg-graybg px-4 relative">
      <Image
        src={worldMap}
        fill
        alt="world map"
        className="opacity-15"
        style={{ objectFit: "cover" }}
        quality={50}
        loading="lazy"
      />

      <div className="lg:max-w-[1250px] md:max-w-[1000px] mx-auto flex items-center h-[100vh] gap-12 relative lg:flex-row sm:flex-col">
        <div className="lg:mt-0 sm:mt-36 sm:text-center lg:text-left">
          <HeroText />
        </div>
        <div className=" lg:absolute sm:relative z-10 left-0 lg:bottom-32 sm:bottom-0 w-full">
          <HeroSearch />
        </div>
        <div className="w-full lg:mt-0 sm:mt-12">
          <HeroImages />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
