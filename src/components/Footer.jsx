import React from 'react'
import Logo from '../assets/logo-yellow.png'
import { FaTwitter, FaDiscord } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-[#181818] py-6'>
      <div className='w-full max-w-[1100px] mx-auto flex flex-col lg:justify-between items-center space-y-4'>
        <article className="flex flex-col lg:flex-row space-x-8 space-y-4 items-center">
          <img className="w-36" src={Logo} alt="Logo" />
          <h3 className="font-bebas text-2xl text-gray-100 lg:pt-2">
            @COPYRIGHT 2022 NAFFLES ALL RIGHTS RESERVED.
          </h3>
        </article>
        <article className='flex space-x-10 text-white text-5xl'>
          <FaTwitter className='text-[#FBEB3B] cursor-pointer hover:text-[#8a8013] transition-colors ease-out duration-150' />
          <FaDiscord className='text-[#FBEB3B] cursor-pointer hover:text-[#8a8013] transition-colors ease-out duration-150' />
        </article>
      </div>
    </footer>
  )
}

export default Footer