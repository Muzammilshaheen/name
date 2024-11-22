import React, { useState } from "react";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="container pt-8 px-4">
      <div className="flex justify-between items-center p-4 rounded-lg shadow-lg">
        <div data-aos="zoom-in-down" className="text-xl font-medium flex items-center">
          <Image
            src="/ms.png"
            alt="Logo"
            width={112}
            height={80}
            className="inline rounded-full"
            priority
          />
          <div data-aos="zoom-in" className="text-white text-sm ml-2 -scroll">Muzammil Shaheen</div>
        </div>

      
        <ul className="gap-10 lg:gap-16 md:flex text-2xl mr-10 hidden">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skill">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>

      
        <LuMenu
          className="md:hidden cursor-pointer text-white hover:text-[#ed5454]"
          size={30}
          onClick={toggleMenu}
        />

      
        <ul
  className={`mobile-menu ${isMobileMenuOpen ? "block" : "hidden"} md:hidden flex-col items-right bg-black bg-opacity-90 text-white p-4 shadow-lg absolute top-10 left-96 w-full transition-all ease-in-out duration-300 gap-5 px-4 m-4`}

        >
          <li className="menuLink"><a href="#hero" onClick={closeMenu}>Home</a></li>
          <li className="menuLink"><a href="#about" onClick={closeMenu}>About</a></li>
          <li className="menuLink"><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li className="menuLink"><a href="#skill" onClick={closeMenu}>Skills</a></li>
          <li className="menuLink"><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
