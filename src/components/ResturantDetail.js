import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RESTURANT_DETAIL } from '../utils/constant'
import ResturantInfo from './ResturantInfo'
import ResturantDeals from './ResturantDeals'
import ResturantMenu from './ResturantMenu'
import { useSelector } from 'react-redux'
import CustomiseMenu from './CustomiseMenu'

const ResturantDetail = () => {
    const param = useParams()
    const [restData, setRestData] = useState();
    const popFlag = useSelector((state) => state.cart.popUp)
    const latlong = useSelector((state) => state.data.latLong)

    const getResturantDetail = async()=>{
       const data =  await fetch(RESTURANT_DETAIL.replace('latitude', latlong.latitude).replace('longitude', latlong.longitude).replace('REST_ID', param.id));
        const json = await data.json();
        setRestData(json.data.cards)
    }
    useEffect(()=>{
        getResturantDetail();
    },[])
  return (
    <>
    <div className='min-w-[800px] max-w-[800px] m-auto'>{
        restData &&  
        <>
        <ResturantInfo resturantInfo={restData?.[2]?.card?.card}/>
        <ResturantDeals dealsInfo={restData?.[3]?.card?.card}/>
        <ResturantMenu menuInfo={restData?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards} />
       
        </>
        }
    </div>
    <div className=''>
    { popFlag && <CustomiseMenu /> }
    </div>
    </>
  )
}

export default ResturantDetail