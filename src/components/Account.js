import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../utils/constant'

const Account = () => {
  return (
    <div className='flex-1 mx-8 bg-white p-8 relative'>
        <div className='font-bold'>Account</div>
        <p className='text-gray-500 text-base'>To place your order now, log in to your existing account or sign up.</p>
        <img className="absolute w-36 h-36 right-10" src={BASE_URL + 'Image-login_btpq7r'} alt=""/>
        <p className='text-gray-500 text-sm my-4'>Enter login details or create an account</p>
        <div className='border w-96'>
          <div className='p-5 border-b-[1px]'><input type="text" placeholder='Phone Number' /> </div>  
          <div className='p-5 border-b-[1px]'><input type="text" placeholder='Name'/></div>  
          <div className='p-5 border-b-[1px]'><input type="text" placeholder='Email'/></div>  
        </div>
        <div className='my-3 text-sky-500'><Link>Have a referral code?</Link></div>
        <button className='bg-green-600 p-3 text-white w-96 my-3'>Continue</button>
        <p className='text-xs'>By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
        <p className='text-xs'>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
    </div>
  )
}

export default Account