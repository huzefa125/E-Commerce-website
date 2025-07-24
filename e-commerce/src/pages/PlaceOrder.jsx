import React, { useState,useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  // ✅ ADD: State for payment selection (optional for better UX)
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      {/* Delivery Information Section */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        
        {/* Name fields */}
        <div className='flex gap-3'>
          <input
            type="text" 
            placeholder='First name' 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-none focus:border-black transition-colors'
          />
          <input 
            type="text" 
            placeholder='Last name' 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-none focus:border-black transition-colors'
          />
        </div>
        
        {/* Email */}
        <input 
          type="email" 
          placeholder='Email Address' 
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-none focus:border-black transition-colors'
        />
        
        {/* Street */}
        <input 
          type="text" 
          placeholder='Street' 
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-none focus:border-black transition-colors'
        />
        
        {/* City and State */}
        <div className='flex gap-3'>
          <input 
            type="text" 
            placeholder='City' 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-none focus:border-black transition-colors'
          />
          <input 
            type="text" 
            placeholder='State' 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-none focus:border-black transition-colors'
          />
        </div>
        
        {/* Zipcode and Country */}
        <div className='flex gap-3'>
          <input 
            type="text" 
            placeholder='Zipcode' 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-none focus:border-black transition-colors'
          />
          <input 
            type="text" 
            placeholder='Country'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-none focus:border-black transition-colors'
          />
        </div>
        
        {/* Phone */}
        <input 
          type="tel" 
          placeholder='Phone' 
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-none focus:border-black transition-colors'
        />
      </div>

    
      <div className='mt-8 sm:mt-0'>
        {/* Cart Total Section */}
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        
        {/* Payment Method Section */}
        <div className='mt-12'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
          </div>
          
    
          <div className='flex gap-3 flex-col lg:flex-row'>
            {/* Stripe */}
            <div 
              onClick={() => setPaymentMethod('stripe')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer hover:border-green-400 transition-colors min-h-[50px]'
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'stripe' ? 'bg-green-400' : ''} transition-colors`}></p>
              <img 
                src={assets.stripe_logo} 
                className='h-6 w-auto max-w-[80px] object-contain mx-2' 
                alt="Stripe" 
              />
            </div>
            
            {/* Razorpay */}
            <div 
              onClick={() => setPaymentMethod('razorpay')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer hover:border-green-400 transition-colors min-h-[50px]'
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'razorpay' ? 'bg-green-400' : ''} transition-colors`}></p>
              <img 
                src={assets.razorpay_logo} 
                className='h-6 w-auto max-w-[80px] object-contain mx-2' 
                alt="Razorpay" 
              />
            </div>
            
            {/* Cash on Delivery */}
            <div 
              onClick={() => setPaymentMethod('cod')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer hover:border-green-400 transition-colors min-h-[50px]'
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cod' ? 'bg-green-400' : ''} transition-colors`}></p>
              <p className='text-gray-500 text-sm font-medium mx-2'>CASH ON DELIVERY</p>
            </div>
          </div>
          

          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/order')}  className='bg-black text-white px-16 py-3 text-sm hover:bg-gray-800 transition-colors duration-200 active:transform active:scale-95'>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
