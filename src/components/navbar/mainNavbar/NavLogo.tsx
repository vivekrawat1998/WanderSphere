import React from "react";
import Image from "next/image";
import Link from "next/link";
import mainData from "@/components/appData/mainData";
import logo from "/public/img/wander logo.webp";

const NavLogo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src={logo}
          alt={mainData.imgAlt.mainLogo}
          width="401"
          className="h-[7vh] min-w-[79px] w-auto"
        />
      </Link>
    </div>
  );
};

export default NavLogo;
