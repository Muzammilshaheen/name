import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div 
      id='Hero'
      className='min-h-screen bg-no-repeat bg-[url(/mr.png)] bg-cover'
      style={{ backgroundSize: "25%", backgroundPosition:"left 200px top 200px" }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 mt-40">
        <div className="hidden lg:block"></div>
        <div className="text-[10px] sm:text-[60px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p className='text-red-500 italic'>I&apos;m</p>
            <p className='text-purple-900 italic'>Muzammil</p>
            <p>Shaheen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
