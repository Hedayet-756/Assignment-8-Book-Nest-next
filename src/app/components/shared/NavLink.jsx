"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, className, children }) => {
  const pathname = usePathname();
  // console.log(pathname, "pathname");

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${isActive ? "border-b-2 border-purple-500 text-lg font-medium hover:text-purple-500 transition-colors" : ""} ${className}`}
    >
      {children}
    </Link >
  );
};

export default NavLink;
