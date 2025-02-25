import React from "react";
import ShortCutCard from "./ShortCutCard";
import Image from "next/image";
import worldMap from "../../../public/img/world-map.png";
import shortCutsData from "../appData/shortCutsData";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ShortCutsMain: React.FC = () => {
  return (
    <div className=" flex flex-col items-center mt-24 bg-graybg px-4 py-24 relative overflow-hidden ">
      <Image
        src={worldMap}
        alt="world map"
        objectFit="cover"
        fill
        className="absolute left-0 top-0 opacity-15"
      />

      <h2 className="font-bold text-xl font-hand mb-4 text-lightgreen">
        You are few clicks away
      </h2>
      <h2 className="font-bold text-3xl text-section ">Destinations</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-md lg:max-w-[1250px] mx-auto">
        <div className="flex w-max lg:space-x-0 lg:p-0 sm:space-x-4 sm:p-2">
          <div className="flex gap-12  mt-4 ">
            {shortCutsData.topDestinations.map((shortcut, index) => {
              return (
                <ShortCutCard
                  key={index}
                  name={shortcut.name}
                  image={shortcut.image}
                  link={shortcut.link}
                />
              );
            })}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <h2 className="font-bold text-3xl mt-12 text-section">Durations</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-md lg:max-w-[1250px] mx-auto">
        <div className="flex w-max lg:space-x-0 lg:p-0 sm:space-x-4 sm:p-2">
          <div className="flex gap-12  mt-4 ">
            {shortCutsData.durations.map((shortcut, index) => {
              return (
                <ShortCutCard
                  key={index}
                  name={shortcut.name}
                  image={shortcut.image}
                  link={shortcut.link}
                />
              );
            })}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h2 className="font-bold text-3xl mt-12 text-section">Top Categories</h2>

      <ScrollArea className="w-full whitespace-nowrap rounded-md lg:max-w-[1250px] mx-auto">
        <div className="flex w-max lg:space-x-0 lg:p-0 sm:space-x-4 sm:p-2">
          <div className="flex gap-4  mt-4 ">
            {shortCutsData.categories.map((shortcut, index) => {
              return (
                <ShortCutCard
                  key={index}
                  name={shortcut.name}
                  image={shortcut.image}
                  link={shortcut.link}
                />
              );
            })}
          </div>
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ShortCutsMain;
