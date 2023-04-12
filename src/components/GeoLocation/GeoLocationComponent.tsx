import React, { useEffect, useState } from "react";
import { useCustomSelector, useCustomDispatch } from "../../hooks/redux/useLocation"
import { setGeoLocation } from "../../redux/slices/locationSlice";
import {getUserLocation} from "../../api/locationApi"
import Button from 'react-bootstrap/Button';
import { getRestaurants } from "../../redux/slices/restaurantsSlice";
import classes from "../PlacesAutocompleteComponent/PlacesAutocomplete.module.scss" // styling on this file in order not to create useless file for just a style


const GeoLocationComponent = () => {

  const [coords, setCoords] = useState(Object)
  const { location } = useCustomSelector((state)=> state)
  const dispatch = useCustomDispatch();
  
  useEffect(() => {
    
    getUserLocation().then((coords)=>{
     // setCoords(coords)
  dispatch(setGeoLocation({lat:coords.lat,lon:coords.lng}));

    });
  }, [])
  
  
  
  //console.log(coords);
  //getCurrentCity()

  const {lat, lon} = location 

  const lat_lon = 
  {
    lat:lat?.toString(),
    lon:lon?.toString(),
  }

  
  const handleOnClick = () => {
   
   
    dispatch(getRestaurants(lat_lon))
    
  }
  //console.log(location);
  // useEffect(() => {
    
  // }, [handleOnClick])
  

  return(
    <div>
       <Button className={classes["geoButton"]} variant="outline-primary" onClick={handleOnClick}>Use My actual Location</Button>{' '}
    </div>
  )
}
export default GeoLocationComponent