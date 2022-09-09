import React from 'react'
import Logo from '../assets/logo.png'
import { FaGgCircle, FaTwitter, FaWallet } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="bg-[#FBEB3B] text-black rounded-xl p-2 lg:p-4">
      <article className="flex flex-row items-center py-2 px-4 justify-between">
        <div className="flex flex-col lg:flex-row lg:space-x-8 items-center space-y-4 lg:space-y-0">
          <img className="w-16" src={Logo} alt="Naffles" />
          <div className="hidden lg:flex space-x-10 px-8 text-2xl">
            <FaTwitter className="hover:text-[#8a8013] transition-colors ease-out duration-150 cursor-pointer" />
            <FaGgCircle className='cursor-pointer' />
          </div>
        </div>
        <div className="flex items-center space-x-4 transition-colors ease-out duration-150 hover:text-[#8a8013] cursor-pointer">
          <FaWallet className="text-2xl" />
          <h2 className="font-bebas text-xl">Connect</h2>
        </div>
      </article>
    </nav>
  )
}

export default Navbar