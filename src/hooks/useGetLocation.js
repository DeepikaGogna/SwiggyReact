import { useDispatch, useSelector } from 'react-redux';
import { setLatLong, setLocationChange } from '../utils/dataSlice';
import { useEffect } from 'react';

const useCurrentLocation = () =>{
    const dispatch = useDispatch();
    const currentLocation = useSelector((state) => state.data.currentLocation)
    const fetchLocation = () =>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                dispatch(setLatLong({ latitude, longitude }))
               
              },
              (err) => {
              //  setError("You have blocked Swiggy from tracking your location. To use this, change your location settings in browser.");
              }
            );
          } else {
           // setError("You have blocked Swiggy from tracking your location. To use this, change your location settings in browser.");
          }    
    }
      useEffect(()=>{
        currentLocation && fetchLocation()
    },[currentLocation])

  }

  export default useCurrentLocation;