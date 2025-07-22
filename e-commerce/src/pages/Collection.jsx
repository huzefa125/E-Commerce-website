import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

function Collection() {
  const  {products} = useContext(ShopContext)
  const [showfilter,setshowfilter] = useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* filter Otions */}
        <div className='min-w-60'>
          <p className='my-2 text-xl flex items-center cursor-pointer ga-2'>FILTERS</p>
          {/* Categories Filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
              <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input type="checkbox" className='w-3' value={'MEN'}/>MEN
                </p>
                <p className='flex gap-2'>
                  <input type="checkbox" className='w-3' value={'WOMEN'}/>WOMEN
                </p>
                <p className='flex gap-2'>
                  <input type="checkbox" className='w-3' value={'KIDS'}/>KIDS
                </p>
              </div>
          </div>
          {/* Sub Categories */}
             <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '' : 'hidden'} sm:block`}>
              <p className='mb-3 text-sm font-medium'>SUB-CATEGORIES</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input type="checkbox" className='w-3' value={'TopWear'}/>Topwear
                </p>
                <p className='flex gap-2'>
                  <input type="checkbox" className='w-3' value={'Bottomwear'}/>Bottomwear
                </p>
                <p className='flex gap-2'>
                  <input type="checkbox" className='w-3' value={'Winterwear'}/>Winterwear
                </p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Collection
