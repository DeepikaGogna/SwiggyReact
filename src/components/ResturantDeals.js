import React from 'react'
import { BASE_URL } from '../utils/constant'

const ResturantDeals = ({dealsInfo}) => {
    const offers = dealsInfo?.gridElements?.infoWithStyle?.offers
  return (
    <div>
     <div className='mt-8 font-extrabold text-xl'>Deals for you</div>
    <div className='flex overflow-auto mb-4'>
        {
            offers.map((offer, index)=>{
                {
                 return(
                 <div key={index} className='rounded-2xl p-3 border m-2 flex gap-3 min-w-80 mt-5'>
                      <div className="w-11 h-11"><img className='object-cover' src={BASE_URL + offer.info.offerLogo} alt="" /></div>
                        <div className='flex flex-col text-base'>  
                           <div className='font-bold'> {offer.info.header} </div>
                           <div className='font-bold text-gray-500'>  {'Ends in' + offer.info.expiryTime}</div>
                            </div>
                       </div>
                     
                 )  
                }
            })
        }
    </div>
    <div className="m-8 text-center">
      <div>MENU</div>
        </div>
    </div>
  )
}

export default ResturantDeals