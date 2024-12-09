import React, { useEffect, useState } from 'react'
import { HOME_API } from '../utils/constant'
import WhatsOnMind from "./WhatsOnMind"
import TopResturant from './TopResturant'
import OnlineFood from './OnlineFood'
import BestPlace from './BestPlace'
import BestCuisines from './BestCuisines'
import ExploreResturant from './ExploreResturant'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import {addApiResponse} from "../utils/dataSlice"
const Body = () => {
    const [resturantData, setResturantData] = useState()
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchResturant()
    },[])
    const fetchResturant = async() =>{
       const data = await fetch(HOME_API);
       const json = await data.json();
       setResturantData(json?.data?.cards);
       let payload = {
        "nextOffset": json?.data?.pageOffset?.nextOffset,
        "_csrf": json?.csrfToken,
        "widgetOffset": json?.data?.pageOffset?.widgetOffset,
       }
       dispatch(addApiResponse(payload))

    }
  return (
    <main className='flex flex-col'>
     <div className="ml-40 mr-40">
       {resturantData && 
       <>
        <WhatsOnMind whatsOnMind={resturantData?.[0]?.card?.card}/>
        <TopResturant topResturant={resturantData?.[1]?.card?.card} />
        <OnlineFood onlineTitle={resturantData?.[2]?.card?.card?.title}  
        onlineResturant={resturantData?.[4]?.card?.card} 
        onlineFilter={resturantData?.[3]?.card?.card}
        />
        <BestPlace bestPlace={resturantData?.[6]?.card?.card} />
        <BestCuisines bestPlace={resturantData?.[7]?.card?.card} />
        <ExploreResturant bestPlace={resturantData?.[8]?.card?.card} />
       </>
       }
       </div>
       <footer>
      <Footer footerData={resturantData?.[10]?.card?.card}/>
    </footer>
    </main>
    
  )
}

export default Body