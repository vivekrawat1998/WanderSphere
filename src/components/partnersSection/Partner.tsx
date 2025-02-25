import Image, { StaticImageData } from "next/image";
import React from "react";

type PartnerType = {
  image: StaticImageData;
};

const Partner: React.FC<PartnerType> = ({ image }) => {
  return (
    <div className="relative w-[200px] h-[100px]">
      <Image src={image} alt="partnerImage" fill objectFit="contain" />
    </div>
  );
};

export default Partner;
