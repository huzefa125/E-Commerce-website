import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';

function Cart() {
  const { products, currency, cartItem, updateQuantity, removeFromCart ,navigate} = useContext(ShopContext)

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
    
  };

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      
      <div className=''>
        {cartData.length === 0 ? (
          <div className='text-center py-8'>
            <p className='text-gray-500 text-lg'>Your cart is empty</p>
          </div>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            
            if (!productData) {
              return null;
            }

            return (
              <div className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4' key={index}>
                
                <div className='flex items-start gap-6'>
                  <img 
                    className='w-16 sm:w-20'
                    src={productData.image[0]} 
                    alt={productData.name}
                  />
                  <div>
                    <p className='text-xs font-medium sm:text-lg'>
                      {productData.name}
                    </p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p className='text-lg font-medium'>
                        {currency}{productData.price}
                      </p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>
                        Size: {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-center gap-2'>
                  <button 
                    onClick={() => handleQuantityChange(item._id, item.size, item.quantity - 1)}
                    className='border border-gray-300 px-2 py-1 hover:bg-gray-100 transition-colors'
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className='px-3 py-1 border bg-gray-50 min-w-[50px] text-center font-medium'>
                    {item.quantity}
                  </span>
                  <button 
                    onClick={() => handleQuantityChange(item._id, item.size, item.quantity + 1)}
                    className='border border-gray-300 px-2 py-1 hover:bg-gray-100 transition-colors'
                  >
                    +
                  </button>
                </div>

                <div className='text-right flex justify-end items-center gap-4'>
                  <p className='text-lg font-medium'>
                    {currency}{(productData.price * item.quantity).toFixed(2)}
                  </p>
                  <img 
                    onClick={() => removeFromCart(item._id, item.size)}
                    className='w-4 sm:w-5 cursor-pointer hover:scale-110 transition-transform hover:opacity-70' 
                    src={assets.bin_icon} 
                    alt="Remove item" 
                    title="Remove from cart"
                  />
                </div>
              </div>
            )
          })
        )}
      </div>

      {cartData.length > 0 && (
        <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <div className='text-2xl'>
              <Title text1={'CART'} text2={'TOTALS'} />
            </div>
            <div className='flex flex-col gap-2 mt-2 text-sm'>
              <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {getCartTotal().toFixed(2)}</p>
              </div>
              <hr />
              <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} 10.00</p>
              </div>
              <hr />
              <div className='flex justify-between text-lg font-bold'>
                <b>Total</b>
                <b>{currency} {(getCartTotal() + 10).toFixed(2)}</b>
              </div>
            </div>
            
            <div className='w-full text-end mt-8'>
              <button 
                onClick={() => navigate('/place-order')}
                className='bg-black text-white text-sm px-8 py-3 hover:bg-gray-800 transition-colors duration-200 active:transform active:scale-95'
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
