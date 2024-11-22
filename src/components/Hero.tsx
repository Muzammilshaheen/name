import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div 
      id="Hero"
      className="min-h-screen bg-no-repeat bg-[url(/t.avif)] bg-cover bg-center"
      style={{ backgroundSize: "cover" }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 mt-40 px-4 sm:px-8">
        
        <div className="hidden lg:block"></div>

        
        <div className="flex flex-col justify-center items-center text-center lg:text-left space-y-6 mt-10">
          
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
          

          
          <ul className="list-disc text-lg text-gray-700 pl-6 space-y-2">
            <li data-aos="fade-up">Creative Web Developer</li>
            <li data-aos="fade-up" data-aos-delay="100">UI/UX Enthusiast</li>
            <li data-aos="fade-up" data-aos-delay="200">Passionate Learner</li>
          </ul>
          <button
  data-aos="zoom-in"
  className="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 shadow-lg transition-all mb-20 ml-5"
>
  Learn More
</button>


          
         
</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
