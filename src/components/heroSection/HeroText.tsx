import React from "react";
import mainData from "../appData/mainData";

const HeroText: React.FC = () => {
  return (
    <div>
      <p className="uppercase text-lightergray mb-4">
        {mainData.content.heroSubText}
      </p>
      <h1 className="md:text-7xl sm:text-5xl font-bold">
        {mainData.content.heroMainText}
      </h1>
    </div>
  );
};

export default HeroText;
