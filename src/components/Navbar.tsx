import React, { useState } from "react";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div data-aos="zoom-in-down" className="text-xl font-medium">
          <Image
            src="/ms.png"
            alt="Logo"
            width={112}
            height={80}
            className="inline rounded-full"
            priority
          />
          <div data-aos="zoom-in" className="text-red-900 text-sm">Muzammil Shaheen</div>
        </div>

        {/* Desktop menu (hidden on mobile) */}
        <ul className="gap-10 lg:gap-16 md:flex text-2xl inline-block mr-10 hidden md:block">
          <li className="menuLink"> <a href="#hero">Home</a> </li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skill">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile menu toggle icon (visible only on mobile) */}
        <LuMenu className="md:hidden cursor-pointer" size={30} onClick={toggleMenu} />

        {/* Mobile menu (shows when isMobileMenuOpen is true) */}
        <ul
          className={`mobile-menu ${isMobileMenuOpen ? "block" : "hidden"} md:hidden absolute top-0 right-0 bg-black text-white p-4 rounded-lg shadow-lg`}
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
