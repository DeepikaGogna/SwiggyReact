import React from 'react'
import { useSelector } from 'react-redux';
import Account from './Account';
import Cart from './Cart';
import Address from './Address';
import Payment from './Payment';

const Checkout = () => {
    const cart = useSelector((state) => state?.cart?.cartInfo);

  return (
    <div className='bg-gray-100'>
    <div className='max-w-[1200px] min-w-[1200px] m-auto mt-5 flex'>
       <div className='flex-1 mx-8 bg-white p-8 relative'>
       <Account />
        <Address />
        <Payment />
       </div>
        <Cart />
    </div></div>
  )
}

export default Checkout