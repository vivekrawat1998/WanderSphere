"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

type linkProps = {
  linkData: {
    linkName: string;
    linkHref?: string;
    subLinks?: { subLinkName: string; subLinkHref: string }[];
  };
};

const NavLink: React.FC<linkProps> = ({ linkData }) => {
  const [viewOn, setViewOn] = useState<boolean>(false);
  const toggleView = () => {
    setViewOn(!viewOn);
  };
  return (
    <li className="relative group lg:w-auto sm:w-full lg:block sm:flex sm:flex-col z-[19]">
      {linkData.linkHref ? (
        <Link
          className="lg:text-gray sm:text-white sm:hover:text-white lg:hover:text-green transition-all duration-500 text-lg font-semibold w-full sm:bg-gray lg:bg-graybg lg:hover:bg-graybg sm:hover:bg-lightgreen sm:text-center lg:py-8 sm:py-4"
          href={linkData.linkHref}
        >
          {linkData.linkName}
        </Link>
      ) : (
        <a
          className="lg:text-gray sm:text-white sm:hover:text-white lg:hover:text-green transition-all duration-500 text-lg font-semibold w-full sm:bg-gray lg:bg-graybg lg:hover:bg-graybg sm:hover:bg-lightgreen sm:text-center lg:py-8 sm:py-4 cursor-pointer "
          onClick={toggleView}
        >
          {linkData.linkName}
        </a>
      )}
      {linkData.subLinks && (
        <ul
          className={`lg:absolute sm:relative group-hover:flex lg:bg-gray sm:bg-lightergray text-white flex-col sm:left-0 sm:translate-x-0 lg:left-[50%] lg:translate-x-[-50%] transition-all duration-500 lg:max-h-0 lg:group-hover:max-h-[300px] z-10   ${
            viewOn ? "sm:max-h-[300px]" : "sm:max-h-0"
          } lg:h-auto overflow-hidden`}
        >
          {linkData.subLinks.map((sublink, index) => {
            return (
              <li className="flex items-center" key={index}>
                <Link
                  className=" whitespace-nowrap hover:bg-lightgreen px-4 py-[.75rem] w-full text-center transition-all duration-500"
                  href={sublink.subLinkHref}
                >
                  {sublink.subLinkName}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default NavLink;
