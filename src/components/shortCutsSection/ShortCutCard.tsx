import Image, { StaticImageData } from "next/image";
import React from "react";
import muscat from "../../../public/img/shortcuts/muscat-shortcut.jpg";
import Link from "next/link";

type ShortCutCardProps = {
  name: string;
  image: StaticImageData;
  link: string;
};
const ShortCutCard: React.FC<ShortCutCardProps> = ({ name, image, link }) => {
  return (
    <Link href={link} className="group">
      <div className="relative h-[125px] w-full max-w-[385px] overflow-hidden rounded-xl">
        <h3 className="group absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white font-bold text-2xl drop-shadow-lg whitespace-nowrap">
          {name}
        </h3>
        <div className="w-full h-full bg-[#000] absolute z-[9] opacity-30  group-hover:opacity-10 transition-all duration-500"></div>
        <Image src={image} alt="name" objectFit="cover" />
      </div>
    </Link>
  );
};

export default ShortCutCard;
