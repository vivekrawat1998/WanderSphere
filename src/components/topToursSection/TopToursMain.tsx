import React from "react";
import TourCardLg from "./TourCardLg";
import toursData from "../appData/topTours";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const TopToursMain: React.FC = () => {
  return (
    <div className="max-w-[1300px] mx-auto  flex flex-col items-center py-24 ">
      <h2 className="font-bold text-xl font-hand mb-4 text-lightgreen">
        Most Popular
      </h2>
      <h2 className="text-section font-bold mb-8">Trending Tours</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-md lg:max-w-[1250px] mx-auto">
        <div className="flex w-max lg:space-x-0 lg:p-0 sm:space-x-4 sm:p-4 ">
          <div className="flex gap-8  mt-4 lg:px-4 sm:px-2 py-12">
            {toursData.map((tour, index) => {
              return <TourCardLg key={index} tour={tour} />;
            })}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default TopToursMain;
