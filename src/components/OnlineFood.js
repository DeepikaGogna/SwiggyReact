import React, { useEffect } from 'react'
import {  UPDATE } from '../utils/constant'
import { useSelector } from 'react-redux'
import CommonCard from './CommonCard'
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
      return(
        <>
          {<CommonCard key={index} restaurant={restaurant} />} 
        </>
      )  
        

        })
    }
 </div>
     
   
    </div>
   
  )
}

export default OnlineFood