import React, { useState } from 'react'

function Login() {
  const [currencyState,setCurrencyState] = useState('Log in');
    return (
    <div>
      <form action="" className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
          <div className='inline-flex items-center gap-2 mb-2 mt-10'>
            <p className='prata-regular text-3xl'>{currencyState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
          </div>
          {currencyState === 'Login' ? '' :  <input type="text" className='w-full px-3 border border-gray-800' placeholder='Name' name="" id="" required/>}
         
          <input type="email" className='w-full px-3 border border-gray-800' placeholder='Email' name="" id="" required/>
          <input type="password" className='w-full px-3 border border-gray-800' placeholder='Password' name="" id="" required/>
      </form>
    </div>
  )
}

export default Login
