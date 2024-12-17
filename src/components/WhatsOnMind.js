import React from 'react'
import { BASE_URL } from '../utils/constant'
import { Link } from 'react-router-dom'
const WhatsOnMind = ({whatsOnMind}) => {
  const title = whatsOnMind?.header?.title
  const BannerImgs = whatsOnMind.imageGridCards.info
 return (
    <div className='border-b pb-14 border-b-slate-300'>
     <div className='mt-8  font-bold text-2xl'>{title}</div>
     <div className="flex overflow-scroll gap-6">
     {
      BannerImgs.map((img,index) => {
        return (
          <>
           <Link key={index} to={img.action.link.replace('https://www.swiggy.com/','/')}>
          <img className="w-36 max-w-none" src={BASE_URL+img.imageId} alt={img.action.text} />
            </Link> 
          </>
      
      )
      })
     } 
     </div>
    </div>
   
  )
}

export default WhatsOnMind