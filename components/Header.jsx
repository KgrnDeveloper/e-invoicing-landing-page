import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="text-white bg-black font-inter">
      <div className="w-full flex items-center justify-between lg:px-18 px-4 py-8">
        <div className="">
          <Image src={"/logo-kgrn.png"} width={120} height={120} alt="Logo" />
        </div>
        <div className="">
          <Link className="bg-[#f25d23] py-3 px-6 rounded-sm font-semibold lg:text-lg hover:bg-white hover:text-[#f25d23] transition-all duration-300" href={"/"}>Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
