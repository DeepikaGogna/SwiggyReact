import React, { useEffect, useState } from 'react'
import WhatsOnMind from "./WhatsOnMind"
import TopResturant from './TopResturant'
import OnlineFood from './OnlineFood'
import BestPlace from './BestPlace'
import BestCuisines from './BestCuisines'
import ExploreResturant from './ExploreResturant'
import Footer from './Footer'
import Search from './Search'
import { useSelector } from 'react-redux'
import useGetResturant from '../hooks/useGetResturant'
const Body = () => {
    useGetResturant()
    const popFlag = useSelector((state) => state.data.popUp)
    const resturantData = useSelector((state)=> state.data.apiResponse)
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
    <div className=''>
    { popFlag && <Search /> }
    </div>
    </main>
    
    
  )
}

export default Body