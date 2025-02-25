"use client";
import React from "react";
import FeatureCard from "./FeatureCard";
import mainData from "../appData/mainData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FeaturesMain: React.FC = () => {
  return (
    <div className="lg:mt-[150px] md:mt-[200px] sm:mt-[250px] max-w-[1250px] mx-auto flex flex-col gap-12 items-center px-4">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="font-bold text-xl font-hand mb-4 text-lightgreen">
          We are unique
        </h2>
        <h2 className="font-bold text-3xl text-center text-section">
          {mainData.content.featuresMainText}
        </h2>
      </div>
      <div className="sm:block lg:hidden">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {mainData.content.features.map((feature, index) => {
              return (
                <CarouselItem key={index}>
                  <FeatureCard
                    mainText={feature.mainText}
                    subText={feature.subText}
                    Icon={feature.icon}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
      <div className="flex gap-24 sm:hidden lg:flex">
        {mainData.content.features.map((feature, index) => {
          return (
            <FeatureCard
              key={index}
              mainText={feature.mainText}
              subText={feature.subText}
              Icon={feature.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesMain;
