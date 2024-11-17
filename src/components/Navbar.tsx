import React from 'react'
import { LuMenu } from "react-icons/lu";


const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>

      <div className='text-xl font-medium'>
          <img src='/ms.png' alt='Logo' className='inline w-28 h-20 mr-2 rounded-full' />
          <div className='text-red-900 text-sm'>Muzammil Shaheen</div>
        </div>

         <ul className='gap-10 lg:gap-16 md:flex'>
          <li className='menuLink'><a href="#hero">Home</a></li>
          <li className='menuLink'><a href="#about">About</a></li>
          <li className='menuLink'><a href="#projects">Projects</a></li>
          <li className='menuLink'><a href="#skill">Skills</a></li>
          <li className='menuLink'><a href="#content"></a>Content</li>
         </ul>

         <LuMenu className='md:hidden' size={30} />


      </div>
    </div>
  )
}

export default Navbar