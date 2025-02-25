import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

type AttractionType = {
  name: string;
  tours: number;
  image: StaticImageData;
};

const Attraction: React.FC<AttractionType> = ({ name, tours, image }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="h-[90px] w-[90px] overflow-hidden rounded-md relative">
        <Image src={image} alt="Attraction Name" fill objectFit="cover" />
      </div>
      <div>
        <Link href="/" className="font-bold text-green">
          {name}
        </Link>
        <p>{tours} Tours and Packages</p>
      </div>
    </div>
  );
};

export default Attraction;
