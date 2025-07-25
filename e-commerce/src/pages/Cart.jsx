import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';

function Cart() {
  const { products, currency, cartItem, updateQuantity, removeFromCart, navigate } = useContext(ShopContext)

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItem])

  const handleQuantityChange = (productId, size, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, size);
    } else {
      updateQuantity(productId, size, newQuantity);
    }
  };

  const getCartTotal = () => {
    return cartData.reduce((total, item) => {
      const product = products.find(p => p._id === item._id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  const handleCheckout = () => {
    if (cartData.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/place-order');
  };

  return (
    <div className='border-t pt-8 px-4 sm:px-6 lg:px-8'>
      <div className='text-2xl mb-6 text-center sm:text-left'>
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      
      <div className=''>
        {cartData.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg'>Your cart is empty</p>
          </div>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            
            if (!productData) {
              return null;
            }

            return (
              // ✅ FIXED: Mobile-first responsive layout
              <div className='py-4 border-b border-gray-200 last:border-b-0' key={index}>
                
                {/* Mobile Layout (default) */}
                <div className='block sm:hidden'>
                  <div className='flex gap-4 mb-3'>
                    <img 
                      className='w-20 h-20 object-cover rounded'
                      src={productData.image[0]} 
                      alt={productData.name}
                    />
                    <div className='flex-1'>
                      <p className='font-medium text-gray-800 text-sm mb-1'>
                        {productData.name}
                      </p>
                      <p className='text-sm text-gray-600 mb-1'>
                        Size: {item.size}
                      </p>
                      <p className='font-semibold text-gray-800'>
                        {currency}{productData.price}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id, item.size)}
                      className='self-start p-1 hover:bg-gray-100 rounded'
                      title="Remove from cart"
                    >
                      <img 
                        className='w-5 h-5 opacity-60 hover:opacity-100' 
                        src={assets.bin_icon} 
                        alt="Remove item" 
                      />
                    </button>
                  </div>
                  
                  {/* Mobile Quantity Controls */}
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <button 
                        onClick={() => handleQuantityChange(item._id, item.size, item.quantity - 1)}
                        className='w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors text-lg'
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className='px-4 py-1 bg-gray-50 border rounded min-w-[60px] text-center font-medium'>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => handleQuantityChange(item._id, item.size, item.quantity + 1)}
                        className='w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors text-lg'
                      >
                        +
                      </button>
                    </div>
                    <div className='text-right'>
                      <p className='font-semibold text-gray-800'>
                        {currency}{(productData.price * item.quantity).toFixed(2)}
                      </p>
                      <p className='text-xs text-gray-500'>Total</p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (sm and above) */}
                <div className='hidden sm:grid sm:grid-cols-[2fr_1fr_1fr_auto] sm:gap-4 sm:items-center'>
                  
                  {/* Product Info */}
                  <div className='flex items-start gap-4'>
                    <img 
                      className='w-16 sm:w-20 h-16 sm:h-20 object-cover rounded'
                      src={productData.image[0]} 
                      alt={productData.name}
                    />
                    <div>
                      <p className='font-medium text-gray-800 text-sm sm:text-base'>
                        {productData.name}
                      </p>
                      <div className='flex flex-wrap items-center gap-3 mt-2'>
                        <p className='font-semibold text-gray-800'>
                          {currency}{productData.price}
                        </p>
                        <span className='px-2 py-1 bg-gray-100 rounded text-xs text-gray-600'>
                          Size: {item.size}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className='flex items-center justify-center gap-2'>
                    <button 
                      onClick={() => handleQuantityChange(item._id, item.size, item.quantity - 1)}
                      className='w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors'
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className='px-3 py-1 border bg-gray-50 rounded min-w-[50px] text-center font-medium'>
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => handleQuantityChange(item._id, item.size, item.quantity + 1)}
                      className='w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors'
                    >
                      +
                    </button>
                  </div>

                  {/* Total Price */}
                  <div className='text-center'>
                    <p className='font-semibold text-gray-800'>
                      {currency}{(productData.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item._id, item.size)}
                    className='p-2 hover:bg-gray-100 rounded transition-colors'
                    title="Remove from cart"
                  >
                    <img 
                      className='w-5 h-5 opacity-60 hover:opacity-100' 
                      src={assets.bin_icon} 
                      alt="Remove item" 
                    />
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* ✅ FIXED: Mobile-responsive Cart Summary */}
      {cartData.length > 0 && (
        <div className='mt-8 sm:mt-12'>
          <div className='max-w-md ml-auto'>
            <div className='text-xl sm:text-2xl mb-4 text-center sm:text-left'>
              <Title text1={'CART'} text2={'TOTALS'} />
            </div>
            
            <div className='bg-gray-50 p-4 sm:p-6 rounded-lg'>
              <div className='flex flex-col gap-3 text-sm sm:text-base'>
                <div className='flex justify-between items-center'>
                  <p className='text-gray-600'>Subtotal</p>
                  <p className='font-medium'>{currency} {getCartTotal().toFixed(2)}</p>
                </div>
                <hr className='border-gray-200' />
                <div className='flex justify-between items-center'>
                  <p className='text-gray-600'>Shipping Fee</p>
                  <p className='font-medium'>{currency} 10.00</p>
                </div>
                <hr className='border-gray-200' />
                <div className='flex justify-between items-center text-lg font-bold'>
                  <p>Total</p>
                  <p>{currency} {(getCartTotal() + 10).toFixed(2)}</p>
                </div>
              </div>
              
              <div className='mt-6'>
                <button 
                  onClick={() => navigate('/place-order')}
                  className='w-full bg-black text-white text-sm sm:text-base py-3 px-6 hover:bg-gray-800 transition-colors duration-200 active:transform active:scale-95 rounded'
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart