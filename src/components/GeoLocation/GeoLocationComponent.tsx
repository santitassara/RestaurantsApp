import React, { useEffect, useState } from "react";
import { useCustomSelector, useCustomDispatch } from "../../hooks/redux/useLocation"
import { setGeoLocation } from "../../redux/slices/locationSlice";
import {getUserLocation} from "../../api/locationApi"


const GeoLocationComponent = () => {

  const [coords, setCoords] = useState(Object)
  const { location } = useCustomSelector((state)=> state)
  const dispatch = useCustomDispatch();
  //console.log(location);
  useEffect(() => {
    
    getUserLocation().then((coords:any)=>{
      setCoords(coords)
    });
  }, [])
  
  
  
  //console.log(coords);
  //getCurrentCity()


  const handleOnClick = () => {
    dispatch(setGeoLocation({lat:coords.lat,lng:coords.lng}));
  }
  console.log(location);
  

  return(
    <div>
      <button onClick={handleOnClick}></button>
    </div>
  )
}
export default GeoLocationComponent