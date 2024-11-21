import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div 
      id="Hero"
      className="min-h-screen bg-no-repeat bg-[url(/t.avif)] bg-cover bg-center" // Ensuring the background is centered
      style={{ backgroundSize: "cover" }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 mt-40 px-4 sm:px-8">
        {/* Left empty column for larger screens */}
        <div className="hidden lg:block"></div>

        {/* Right side with text */}
        <div className="flex justify-center items-center text-center lg:text-left">
          <div className="text-[40px] sm:text-[60px] md:text-[80px] font-bold leading-tight">
            <p data-aos="zoom-in-down" className="text-red-500 italic text-[20px] sm:text-[30px] md:text-[40px]">
              I&apos;m
            </p>
            <p data-aos="zoom-in-down" className="text-purple-900 italic text-[20px] sm:text-[30px] md:text-[40px]">
              Muzammil
            </p>
            <p data-aos="zoom-in-down" className="text-[30px] sm:text-[50px] md:text-[70px] lg:text-[90px]">
              Shaheen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
