import React from "react";
import footerData from "../appData/footerData";
import Link from "next/link";

const FooterLinks: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 ">
      {footerData.linkGroups.map((group, index) => {
        return (
          <div key={index} className="">
            <h2 className="cursor-default font-bold text-white text-lg">
              {group.linkGroupName}
            </h2>
            <div className="flex flex-col">
              {group.links.map((link, index) => {
                return (
                  <Link
                    href={link.link}
                    key={index}
                    className="cursor-pointer text-graybg hover:text-lightestgreen transition-all duration-500"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterLinks;
