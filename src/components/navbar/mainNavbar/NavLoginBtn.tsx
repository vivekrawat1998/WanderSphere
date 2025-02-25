import Link from "next/link";
import React from "react";
import { UserIcon } from "../../../../public/svgs/page";

const NavLoginBtn: React.FC = () => {
  return (
    <Link
      className="flex items-end text-white text-sm font-bold  bg-lightgreen hover:bg-lightestgreen transition-all duration-500 rounded-md py-[.4rem] px-[.65rem]"
      href="/"
    >
      <UserIcon className="text-3xl font-bold cursor-pointer text-white rounded-sm" />
      LOGIN
    </Link>
  );
};

export default NavLoginBtn;
