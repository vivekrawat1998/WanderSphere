import React from "react";
import footerData from "../appData/footerData";
import Link from "next/link";

const FooterSocialMedia: React.FC = () => {
  return (
    <div className="flex md:flex-col sm:flex-row gap-4">
      {footerData.socialMedia.map((social, index) => {
        return (
          <Link href={social.link} key={index}>
            <social.icon className="text-3xl text-lightestgreen hover:text-white transition-all duration-500" />
          </Link>
        );
      })}
    </div>
  );
};

export default FooterSocialMedia;
