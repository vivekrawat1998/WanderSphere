import React from "react";
import tourImage from "../../../public/img/temp/tourImage.jpeg";
import Image, { StaticImageData } from "next/image";
import {
  DurationIcon,
  LocationIcon,
  RouteIcon,
} from "../../../public/svgs/page";
import Link from "next/link";

interface TourCardLgProps {
  tour: {
    name: string;
    city: string;
    image: StaticImageData;
    duration: number;
    durationUnit: string;
    price: number;
    describtion: string;
  };
}

const TourCardLg: React.FC<TourCardLgProps> = ({ tour }) => {
  const shortDescription = tour.describtion
    .split(" ")
    .filter((_, index) => index < 20)
    .join(" ");
  return (
    <div className="flex flex-col max-w-[385px] rounded-xl overflow-hidden shadow-xl">
      <div className="h-[250px] relative">
        <Image src={tour.image} objectFit="cover" fill alt="Tour Image" />
      </div>
      <div className="relative px-6">
        <div className="  translate-y-[-50%] bg-white shadow-lg py-3 px-4  mx-auto flex items-center rounded-sm justify-between">
          <div className="flex gap-4">
            <DurationIcon className="text-lightgreen text-2xl" />
            <p className="text-gray">
              {tour.duration} {tour.durationUnit}
            </p>
          </div>
          <Link href="/">
            <RouteIcon className="text-lightgreen text-2xl" />
          </Link>
        </div>
        <div className="flex flex-col px-4 py-4 gap-4">
          <div>
            <h2 className="font-bold text-lg">{tour.name}</h2>
            <div className="flex gap-1 items-start h-auto">
              <LocationIcon className="text-lightgreen text-xl" />
              <span className="">{tour.city}</span>
            </div>
          </div>
          <div className="border-b border-t py-4">
            <p className="text-lightergray whitespace-normal text-lg">
              {shortDescription}...
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="bg-lightgreen text-white hover:bg-lightestgreen transition-all duration-500 font-bold py-2 px-8 rounded-md"
            >
              Details
            </Link>
            <div className="flex flex-col">
              <p className="">From</p>
              <p className="font-bold text-lg">${tour.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCardLg;
