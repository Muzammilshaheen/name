import React from 'react';
import { LuMail } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { AiOutlineSkype } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div 
      id="contact" 
      className='pt-32 container mb-10' 
      style={{
        backgroundImage: `url('/cc.jpeg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-center font-bold text-6xl text-indigo-500 mb-16">Contact</h1>

      <div className='grid md:grid-cols-2 gap-10'>
        
        <div className='space-y-2'>
          <h2 className='text-blue-300 text-5xl'>Get in touch</h2>
          <p className="text-gray-400 text-lg leading-relaxed mt-7">
            The application of scientific knowledge for practical purposes, especially in industry.
            Advances in computer technology have transformed the industry and continue to provide
            innovative solutions. Engineering and applied sciences drive progress across various
            domains.
          </p>
          
          <div className='flex gap-3 items-center hover:text-indigo-500'>
            <LuMail size={30} /> muzammilshaheem77@gmail.com
          </div>
          <div className='flex gap-3 items-center hover:text-indigo-500'>
            <FiPhone size={30} /> 92-303-310-5085
          </div>
          <div className='flex gap-3 items-center hover:text-indigo-500'>
            <IoLogoWhatsapp size={30} /> 92-303-310-5085
          </div>
          <div className='flex gap-3 items-center hover:text-indigo-500'>
            <FaFacebookMessenger size={30} /> muzammilshaheem77@gmail.com
          </div>
          <div className='flex gap-3 items-center hover:text-indigo-500'>
            <AiOutlineSkype size={30} /> muzammilshaheem77@gmail.com
          </div>
          <div className='flex gap-3 items-center hover:text-indigo-500'>
            <FaFacebook size={30} /> muzammilshaheem77@gmail.com
          </div>
        </div>
        
        <div className='space-y-4'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className='h-[40px] bg-transparent border border-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none' 
              id="name" 
            />
          </div>
          
          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className='h-[40px] bg-transparent border border-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none' 
              id="email" 
            />
          </div>
          
          <div className='flex flex-col gap-1'>
            <label htmlFor="msg">Message</label>
            <textarea
              className='bg-transparent border border-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none' 
              id="msg" 
              rows={8}>
              </textarea>
          </div>
          <button className='w-24 h-10 bg-slate-500 border border-white rounded-md hover:bg-indigo-500 hover:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none'>
            Send me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
