import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border  border-gray-400'>
        <div className='w-full sm:w-1/2 flex items-center py-25 sm:py-0'>
            <div className='text-[#414414]'>
                <div className='flex items-center  gap-2 ml-25'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Hero