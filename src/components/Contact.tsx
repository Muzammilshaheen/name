import React from 'react'
import { LuMail } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";


const Contact = () => {
  return (
    <div id="contact" className='pt-32 container'>
     <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-2'>
           <h2 className='text-blue-300 text-5xl'>Get in text</h2>
           <p className="text-gray-400 text-lg leading-relaxed mt-7">
            The application of scientific knowledge for practical purposes, especially in industry.
            Advances in computer technology have transformed the industry and continue to provide
            innovative solutions. Engineering and applied sciences drive progress across various
            domains.
          </p>
          <div className='flex gap-3 items-center'>
            <LuMail size={30} /> muzammilshaheem77@gmail.com
          </div>
          <div className='flex gap-3 items-center'>
            <FiPhone size={30} /> 92-303-310-5085
          </div>
           </div>
           
           <div className='space-y-4 m'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name">Name</label>
              <input type="text"
              className='h-[40px] bg-transparent border border-accent' id="name" />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email</label>
              <input type="text"
              className='h-[40px] bg-transparent border border-accent' id="email" />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="msg">Massage</label>
              <textarea
              className='bg-transparent border border-accent' id="msg" rows={8}>
              </textarea>
            </div>

           </div>


     </div>
    </div>
  )
}

export default Contact