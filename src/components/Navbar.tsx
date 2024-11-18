import React from "react";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">
          <Image
            src="/ms.png"
            alt="Logo"
            width={112} 
            height={80} 
            className="inline rounded-full"
            priority 
          />
          <div className="text-red-900 text-sm">Muzammil Shaheen</div>
        </div>

        <ul className="gap-10 lg:gap-16 md:flex text-2xl inline-block mr-10">
          <li className="menuLink"> <a href="#hero">Home</a> </li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skill">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>

        <LuMenu className="md:hidden" size={30} />
      </div>
    </div>
  );
};

export default Navbar;
