import React from 'react'
import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className="w-full max-w-[1920px] mx-auto bg-white">
      <div className="flex flex-col sm:flex-row border border-gray-400">
        {/* Hero Left Side - Text Content */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24'>
          <div className='text-[#414414]'>
            <div className='flex items-center gap-2'>
              <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
            </div>
            <h1  className='.prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
              <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
          </div>
        </div>
        
        {/* Hero Right Side - Image */}
        <div className='w-full sm:w-1/2'>
          <img src={assets.hero_img} className='w-full h-full object-cover' alt="Hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero
