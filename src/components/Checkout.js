import React from 'react'
import { useSelector } from 'react-redux';
import Account from './Account';
import Cart from './Cart';

const Checkout = () => {
    const cart = useSelector((state) => state?.cart?.cartInfo);

  return (
    <div className='bg-gray-100'>
    <div className='max-w-[1200px] min-w-[1200px] m-auto mt-5 flex'>
        <Account />
        <Cart />
    </div></div>
  )
}

export default Checkout