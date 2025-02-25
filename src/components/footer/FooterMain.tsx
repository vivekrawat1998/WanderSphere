import React from "react";
import FooterLinks from "./FooterLinks";
import Image from "next/image";
import footerImage from "../../../public/img/footer-image.jpg";
import FooterSocialMedia from "./FooterSocialMedia";
import footerData from "../appData/footerData";
import { PhoneIcon } from "../../../public/svgs/page";
import { EmailIcon } from "../../../public/svgs/page";
import Link from "next/link";
const FooterMain: React.FC = () => {
  return (
    <div className="relative mt-12">
      <div className="bg-gray">
        <div className="flex  max-w-[1250px] mx-auto md:px-4 sm:px-4 justify-center">
          <div className="flex gap-4 px-4 items-center py-2 w-full justify-center">
            <PhoneIcon className="text-5xl text-lightestgreen " />
            <Link
              href={footerData.directContact.phone.link}
              className="text-white text-2xl hover:text-lightestgreen transition-all duration-500 md:block sm:hidden"
            >
              {footerData.directContact.phone.text}
            </Link>
          </div>
          <div className="flex gap-4 px-4 border-l-2 border-lightergray items-center w-full justify-center">
            <EmailIcon className="text-5xl text-lightestgreen" />
            <Link
              href={footerData.directContact.email.link}
              className="text-white text-2xl hover:text-lightestgreen transition-all duration-500 md:block sm:hidden"
            >
              Send Email
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1250px] md:px-4 sm:gap-8 mx-auto flex justify-between py-8 md:flex-row sm:flex-col">
        <div className="flex-grow md:px-0 sm:px-4">
          <FooterLinks />
        </div>
        <div className="md:px-0 sm:px-4">
          <FooterSocialMedia />
        </div>
      </div>
      <div className="bg-darkgray opacity-85 absolute w-full h-full top-0 left-0 -z-[9]"></div>
      <Image
        src={footerImage}
        alt="Footer Image"
        objectFit="cover"
        fill
        className="absolute top-0 left-0 -z-10"
      />
      <div className="flex justify-center pb-4">
        <p className="text-graybg opacity-50">{footerData.copyrights}</p>
      </div>
    </div>
  );
};

export default FooterMain;
