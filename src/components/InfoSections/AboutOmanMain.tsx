import Image from "next/image";
import React from "react";
import jebelShams from "../../../public/img/temp/i-parallax-20.jpg";
import mainData from "../appData/mainData";

const AboutOmanMain: React.FC = () => {
  return (
    <div className="flex max-w-[1250px] px-4 mx-auto lg:gap-24 sm:gap-8 items-center lg:flex-row sm:flex-col w-full mt-24">
      <div className="flex-1 md:max-h-[350px] sm:max-h-[250px]  overflow-hidden lg:rounded-r-full sm:rounded-3xl relative flex items-center">
        <Image src={jebelShams} alt="About Company" objectFit="cover" />
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-xl font-hand mb-4 text-lightgreen">
          {mainData.content.aboutOman.subText}
        </h2>
        <h2 className="font-bold text-3xl text-section mb-4">
          {mainData.content.aboutOman.mainText}
        </h2>
        <p className="text-lg text-lightergray">
          {mainData.content.aboutOman.aboutText}
        </p>
      </div>
    </div>
  );
};

export default AboutOmanMain;
