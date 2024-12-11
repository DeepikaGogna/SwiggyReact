import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HOME_API } from '../utils/constant'
import {addApiResponse} from "../utils/dataSlice"

const useGetResturant  = () =>{
    const latlong = useSelector((state) => state.data.latLong)
   // const resturantData = useSelector((state)=> state.data.apiResponse)
    const locationChange = useSelector((state) => state.data.locationChange)
    const dispatch = useDispatch();
    const fetchResturant = async() =>{
        const data = await fetch(HOME_API.replace('latitude', latlong.latitude).replace('longitude', latlong.longitude));
        const json = await data.json();
        dispatch(addApiResponse(json?.data?.cards))
}
useEffect(()=>{
    console.log('popFlag', locationChange)
    locationChange && fetchResturant()
},[locationChange])
 }

 export default useGetResturant