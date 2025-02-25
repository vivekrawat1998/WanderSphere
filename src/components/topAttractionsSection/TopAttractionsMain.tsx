import React from "react";
import Attraction from "./Attraction";
import topAttractions from "../appData/topAttractions";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import worldMap from "../../../public/img/world-map.png";

const TopAttractionsMain: React.FC = () => {
  return (
    <div className="relative bg-graybg">
      <Image
        src={worldMap}
        alt="world map"
        objectFit="cover"
        fill
        className="absolute left-0 top-0 opacity-15"
      />
      <div className="max-w-[1250px] mx-auto px-4 mt-24 py-12 ">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-bold text-3xl text-section ">Top Attractions</h2>
        </div>

        <ScrollArea className="w-full whitespace-nowrap rounded-md lg:max-w-[1250px] mx-auto">
          <div className="flex w-max lg:space-x-0 lg:p-0 sm:space-x-4 sm:p-4">
            <div className="grid grid-cols-4 gap-8">
              {topAttractions.map((attraction, index) => {
                return (
                  <Attraction
                    key={index}
                    name={attraction.name}
                    tours={attraction.tours}
                    image={attraction.image}
                  />
                );
              })}
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default TopAttractionsMain;
