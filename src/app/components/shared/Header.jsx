import React from "react";
import logo from "@/assets/banner.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-[#112240]">
      <Image
        src={logo}
        alt="Logo"
        className="mx-auto rounded-lg max-w-8xl opacity-60"
      />
      <Link href={"/all-books"}>
        <button className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   hover:scale-105 border-4 border-purple-500 hover:bg-gradient-to-r from-purple-700 hover:to-pink-600 hover:text-white px-4 mt-12 md:mt-20 py-2 md:px-10 md:py-4 rounded-full font-extrabold text-xs md:text-lg text-purple-700 flex items-center gap-2 shadow-xl shadow-purple-500/30 transition-all active:scale-95 cursor-pointer">
          BROWSE ALL BOOKS
          <FaArrowRightLong className="text-lg md:text-2xl" />
        </button>
      </Link>
    </div>

  );
};

export default Header;
