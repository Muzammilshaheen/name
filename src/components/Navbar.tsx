import React, { useState } from "react";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="container pt-8 px-4">
      
      <div className="flex justify-between items-center p-4 rounded-lg shadow-lg text-white">
        
        <div className="text-xl font-medium flex items-center">
          <Image
            src="/pi.jpg"
            alt="Logo"
            width={22}
            height={40}
            className="inline rounded-full"
            priority
          />
          <div className="text-white text-sm ml-2">Muzammil Shaheen</div>
        </div>

        
        <ul className="hidden md:flex gap-8 lg:gap-12 text-lg text-white">
          <li className="hover:text-red-500"><a href="#hero">Home</a></li>
          <li className="hover:text-red-500"><a href="#about">About</a></li>
          <li className="hover:text-red-500"><a href="#projects">Projects</a></li>
          <li className="hover:text-red-500"><a href="#skill">Skills</a></li>
          <li className="hover:text-red-500"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <LuMenu
          className="md:hidden cursor-pointer text-white hover:text-red-500"
          size={30}
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-center bg-slate-400 text-white p-4 rounded-lg shadow-lg absolute top-20 left-0 w-full">
          <li className="py-2 hover:text-red-500"><a href="#hero" onClick={closeMenu}>Home</a></li>
          <li className="py-2 hover:text-red-500"><a href="#about" onClick={closeMenu}>About</a></li>
          <li className="py-2 hover:text-red-500"><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li className="py-2 hover:text-red-500"><a href="#skill" onClick={closeMenu}>Skills</a></li>
          <li className="py-2 hover:text-red-500"><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
