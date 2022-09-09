import React from 'react'
import CardImg from '../assets/card-img.png'

const Card = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto lg:h-[600px] bg-[#0000006c] rounded-[50px] py-10 px-4 space-y-4 lg:space-y-12">
      <article className="font-bebas text-white text-center">
        <h1 className="text-6xl lg:text-[80px] tracking-wide uppercase font-semibold">
          OMNIPOTENT KEY MINT
        </h1>
        <h3 className="text-3xl lg:text-4xl">(by invite only)</h3>
      </article>
      <article className="flex flex-col items-center lg:flex-row lg:px-12 lg:space-x-48 space-y-8 lg:space-y-0">
        <img className="w-full max-w-[500px]" src={CardImg} alt="NFTs" />
        <button className="bg-yellow-300 hover:text-yellow-500 hover:scale-95 transition-all ease-in-out duration-500 uppercase font-bebas rounded py-3 px-4 lg:h-12 w-72 lg:w-40 hover:bg-[#292929]">
          Connect Wallet
        </button>
      </article>
    </div>
  )
}

export default Card