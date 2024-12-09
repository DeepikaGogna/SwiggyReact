import React, { useEffect } from 'react'
import { BASE_URL, UPDATE } from '../utils/constant'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const OnlineFood = ({onlineTitle, onlineResturant, onlineFilter}) => {
    const restaurants = onlineResturant?.gridElements?.infoWithStyle?.restaurants
    const apiData = useSelector((state) => state.data.apiResponse)
    useEffect(() => {
       // fetchUpdate()
    },[])

    const fetchUpdate = async() =>{
        let payload = {
            "lat": 30.6539141,
            "lng": 76.8807437,
            "nextOffset": apiData.nextOffset,
            "widgetOffset": apiData.widgetOffset,
            "filters": {
                "isFiltered": false,
                "facets": {}
            },
            "seoParams": {
                "seoUrl": "https://www.swiggy.com/restaurants",
                "pageType": "FOOD_HOMEPAGE",
                "apiName": "FoodHomePage"
            },
            "page_type": "DESKTOP_WEB_LISTING",
            "_csrf": apiData._csrf
        }
        const myHeaders = new Headers();
        myHeaders.append("cookie", "__SW=VNQ9S8IajXUjvfy5gxZdz8hT6zEl0G-R; _device_id=2d8f5a2b-8852-f0eb-70c0-071132799c99; fontsLoaded=1; _gcl_au=1.1.1487258228.1732510497; userLocation={%22lat%22:30.6539141%2C%22lng%22:76.8807437%2C%22address%22:%22Sector-27%2C%20Panchkula%20Extension%2C%20Panchkula%2C%20Haryana%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; _ot=REGULAR; _gid=GA1.2.491867412.1733288152; _guest_tid=a46ac027-5da1-44b4-a9bf-1f9a322b3a7f; _sid=hm908e99-fe33-441f-a33a-160d47f04515; _gat_0=1; _ga_34JYJ0BCRN=GS1.1.1733379015.28.1.1733379017.0.0.0; _ga=GA1.1.4088499.1732510499");
        myHeaders.append("Content-Type", "application/json");
        let data = await fetch(UPDATE, {
            method: "POST",
            body: JSON.stringify(payload),
            headers:myHeaders
          })
        let json = await data.json();

    }


  return (
    <div className='border-b pb-14 border-b-slate-300'>
     <div className='font-bold text-2xl mt-4 mb-4 pb-4'>{onlineTitle}</div>
     <div className='grid grid-cols-4 gap-6'>
        {
            restaurants.map((restaurant,index) => {
                const {cloudinaryImageId, avgRating, cuisines, name, areaName, sla, id} = restaurant.info
                return(
                    <Link  key={index} to={'rest/'+ id}><div className='cursor-pointer w-52 h-auto'>
                    <div className='h-32'>
                    <img className="max-w-none rounded-lg w-full h-full object-cover transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-100" src={BASE_URL + cloudinaryImageId} alt="" />
                        </div>
                     <div>
                        <div className='text-lg font-bold'>{name}</div>
                        <div className='text-base font-bold flex'>
                        <svg className="mt-1 mr-1" width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
                        {avgRating} . {sla.slaString}</div>
                        <div className='text-base line-clamp-1'>{cuisines.join(", ")}</div>
                        <div className='text-base'>{areaName}</div>
                        </div>
                    </div></Link>
                ) 
            })
        }
     </div>
    </div>
   
  )
}

export default OnlineFood