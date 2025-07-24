import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
  const { products, currency, cartItem, delivery_fees } = useContext(ShopContext)

  // Get cart data
  const getCartData = () => {
    const tempData = []
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
    return tempData
  }

  // Calculate cart total
  const getCartTotal = () => {
    const cartData = getCartData()
    return cartData.reduce((total, item) => {
      const product = products.find(p => p._id === item._id)
      return total + (product ? product.price * item.quantity : 0)
    }, 0)
  }

  return (
    <>
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
          <p>{currency} {delivery_fees || 10}.00</p>
        </div>
        <hr />
        <div className='flex justify-between text-lg font-bold'>
          <b>Total</b>
          <b>{currency} {(getCartTotal() + (delivery_fees || 10)).toFixed(2)}</b>
        </div>
      </div>
      
      <div className='w-full text-end mt-8'>
        
      </div>
    </>
  )
}

export default CartTotal
