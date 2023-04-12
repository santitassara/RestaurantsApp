import React, { useEffect, useState } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux/useLocation";
import { RestaurantsInterface, Business } from "../interfaces/restaurantsInterface";
import RestaurantCards from "./RestaurantCards/RestaurantCards";
import classes from "./Restaurants.module.scss"
import Spinner from 'react-bootstrap/Spinner';

export default function Restaurants () {
  const { data,loading,inSuccess,error } = useCustomSelector((state)=> state.restaurants)
  const dispatch = useCustomDispatch();
  const [restaurants, setRestaurants] = useState<Array< Business >>([])
  
  
  useEffect(() => {
    setRestaurants(data)
  
  }, [data])
  
  const RestCopy = restaurants && [...restaurants]
  const slicedRestaurants = RestCopy && RestCopy.slice(0,10)

  let sortedByRankingRestaurants:Array<Business> = slicedRestaurants && [...slicedRestaurants].sort( ( a , b)=>{
    if(a.rating < b.rating) return 1;
    if(a.rating > b.rating)return -1;
    return 0;
});

  return (
    <div className={loading ? classes["spinner"] : classes["restaurantCardsContainer"]}  >
      {restaurants?.length ?
      <div>
        <h1 style={{ textAlign: "center", textDecoration:"underline", fontSize:"3em" }}>
           {!loading && "Restaurants from : " + restaurants?.[0]?.location?.city}
        </h1>
      {!loading ?
          <div className={classes["restaurantCardsContainer"]}>
            <div className={classes["restaurantCardsContainer-cards"]}>
              {sortedByRankingRestaurants.map((rest: Business) => <RestaurantCards key={rest.id} restaurantsProps={rest} />)}
            </div>
          </div> : <Spinner animation="grow" variant="primary" />}
      </div>: !inSuccess ? <div className={classes["spinner"]} > Please Allow your location</div>: <h1 className={classes["spinner"]} >No results for that query   :(   try another please</h1>}
    </div>
  )

};




