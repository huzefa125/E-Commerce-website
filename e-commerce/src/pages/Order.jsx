import React, { useContext } from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext'; // ✅ FIX: Corrected typo

const Order = () => {
  const { products, currency } = useContext(ShopContext); // ✅ FIX: Corrected context name

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      
      <div className=''>
        {products.slice(1, 4).map((item, index) => {
          return ( // ✅ FIX: Added missing return statement
            <div 
              key={item._id || index} // ✅ FIX: Added key prop
              className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
            >
              <div className='flex items-start gap-6 text-sm'>
                <img 
                  src={item.image[0]} 
                  className='w-16 sm:w-20' 
                  alt={item.name} // ✅ FIX: Better alt text
                />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p>Date: <span className='text-gray-400'>25, Jul, 2025</span></p>
                </div>
              </div>
              
              {/* ✅ NEW: Order Status and Actions */}
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-50 transition-colors'>
                  Track Order
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Order
