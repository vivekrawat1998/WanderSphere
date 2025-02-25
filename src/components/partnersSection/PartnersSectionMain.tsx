"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import partnersData from "../appData/partnersData";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Partner from "./Partner";

export default function PartnersSectionMain() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="max-w-[1250px] mx-auto mt-24">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-bold text-3xl text-section ">Our Partners</h2>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-5xl mx-auto" // Increased max-width to accommodate 3 items
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="">
          {partnersData.map((partner, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 lg:basis-1/4 md:basis-1/3 xmd:basis-1/2 sm:basis-1/1 justify-center"
            >
              <div className="p-1 flex justify-center">
                <Partner image={partner.image} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
