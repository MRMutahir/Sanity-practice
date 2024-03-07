import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";



const Navbar = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between  items-center w-full">
          <Link href={"/"}>
            MR <span className="text-blue-500">BLOG</span>
          </Link>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
