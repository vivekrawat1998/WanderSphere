import React from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavLogin from "./NavLogin";
import MenuBtn from "./MenuBtn";
// import SideBarBtn from "./SideBarBtn";

const NavMain: React.FC = () => {
  return (
    <div className="bg-graybg px-4 relative">
      <div className="lg:max-w-[1250px]  md:max-w-[1000px] mx-auto  pt-6  w-full">
        <nav className="flex justify-between  items-center lg:gap-24 sm:gap-0">
          <div>
            <NavLogo />
          </div>
          <div className="grow">
            <NavLinks />
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="sm:block lg:hidden">
              <MenuBtn />
            </div>
            {/* <div className="lg:block sm:hidden">
              <SideBarBtn />
            </div> */}
            <NavLogin />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavMain;
