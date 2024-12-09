import React from 'react'
import { useDispatch } from 'react-redux';
import { addResturantDetail } from '../utils/cartSlice';

const ResturantInfo = ({resturantInfo}) => {
  const dispatch = useDispatch();
    const {avgRating, costForTwoMessage, totalRatingsString, cuisines, areaName, sla, name,availability, cloudinaryImageId, city, id, latLong, slugString,labels} = resturantInfo.info;
      const lat = latLong?.split(',')
      let restaurant_details = {
        "id": id,
        "lat": lat[0],
        "lng": lat[1],
        "phone_no": "1762523746",
        "address": labels?.[1]?.message,
         "name": name,
        "third_party_vendor_type": null,
        "cloudinary_image_id": cloudinaryImageId,
        "slug": slugString,
        "city": city,
        "area_name": areaName,
        "sla": {
          "slaString": sla.slaString
        },
        "closing_in_ms": 0,
        "availability": null,
        "special_instructions_opted": true,
        "restaurant_special_instruction": ""
      }
      dispatch(addResturantDetail(restaurant_details))
  return (
    <>
    <div className='font-bold text-2xl mb-3 p-3'>{name}</div>
    <div className="relative">
    <div
    className="absolute -inset-3 rounded-2xl bg-gradient-to-b top-1 from-slate-100 to-gray-300 opacity-75"
  ></div>
    <div className='border rounded-xl p-5 m-2 relative bg-white' >
     <div className='flex gap-2 items-center font-bold'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
      {avgRating} ({totalRatingsString}) . {costForTwoMessage}</div>
     <div className='text-orange-600 font-bold underline text-sm m-1'>{cuisines.join(", ")}</div>
     <div className='text-sm m-1'><span className='font-bold'>Outlet </span>{areaName}</div>
     <div className='text-sm font-bold'>{sla.slaString}</div>
    </div>
    </div>
    </>
  )
}

export default ResturantInfo