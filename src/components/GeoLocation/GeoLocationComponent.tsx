import React, { useEffect, useState } from "react";
import { useCustomSelector, useCustomDispatch } from "../../hooks/redux/useLocation"
import { setGeoLocation } from "../../redux/slices/locationSlice";
import {getUserLocation} from "../../api/locationApi"
import Button from 'react-bootstrap/Button';
import { getRestaurants } from "../../redux/slices/restaurantsSlice";

const GeoLocationComponent = () => {

  const [coords, setCoords] = useState(Object)
  const { location } = useCustomSelector((state)=> state)
  const dispatch = useCustomDispatch();
  console.log(location);
  useEffect(() => {
    
    getUserLocation().then((coords:any)=>{
      setCoords(coords)
  dispatch(setGeoLocation({lat:coords.lat,lon:coords.lng}));

    });
  }, [])
  
  
  
  //console.log(coords);
  //getCurrentCity()


  const handleOnClick = () => {
   
    console.log(location);
    dispatch(getRestaurants(location))
    
  }
  //console.log(location);
  // useEffect(() => {
    
  // }, [handleOnClick])
  

  return(
    <div>
       <Button variant="outline-primary" onClick={handleOnClick}>Use My actual Location</Button>{' '}
    </div>
  )
}
export default GeoLocationComponent