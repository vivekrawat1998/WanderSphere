import React from "react";
import Image, { StaticImageData } from "next/image";

type SingleImageProps = {
  image: StaticImageData;
  alt: string;
};

const SingleImage: React.FC<SingleImageProps> = ({ image, alt }) => {
  return (
    <div className="lg:h-[675px] lg:w-[350px] sm:w-full sm:h-[150px] md:w-full md:h-[250px] overflow-hidden bg-yellow relative lg:rounded-full sm:rounded-xl">
      <Image src={image} alt={alt} objectFit="cover" fill />
    </div>
  );
};

export default SingleImage;
