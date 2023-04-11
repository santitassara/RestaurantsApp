import React, { useEffect, useState } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux/useLocation";
import { RestaurantsInterface } from "../interfaces/restaurantsInterface";
import RestaurantCards from "./RestaurantCards/RestaurantCards";
import classes from "./Restaurants.module.scss"

export default function Restaurants () {

  const { data,loading,inSuccess,error } = useCustomSelector((state)=> state.restaurants)
  const dispatch = useCustomDispatch();

  const [restaurants, setRestaurants] = useState<Array<RestaurantsInterface>>([])
  
  useEffect(() => {
    setRestaurants(data)
  
  }, [data])
  
  // console.log(restaurants);
  // const restaurantsNames = restaurants?.map((rest)=>rest.name)
  // const restaurantsDistance = restaurants?.map((rest)=>rest.distance)
  // console.log(restaurantsDistance);
  
  // const restaurantsDistanceSort = restaurantsDistance?.sort((function(a, b){return parseFloat(a)-parseFloat(b)}))
  // console.log(restaurantsDistanceSort);
  // const restaurantsDistanceSortedNames = restaurantsDistance?.sort((function(a, b){return parseFloat(a)-parseFloat(b)}))

  const RestCopy = [...restaurants]
  const deleteUndefined = RestCopy?.splice(4, 1);
  console.log(RestCopy);
  
  const slicedRestaurants = RestCopy.slice(0,10)

  let sortedByRankingRestaurants = [...slicedRestaurants].sort( ( a , b)=>{
    if(a.rating < b.rating) return 1;
    if(a.rating > b.rating)return -1;
    return 0;
});

  console.log(sortedByRankingRestaurants);
  console.log(sortedByRankingRestaurants.map((el:any)=>parseFloat(el.rating)));
  
  // const [lat_lng, setLat_lng] = useState({})

  // dispatch(getRestaurants(lat_lng));

 

  return (
    <div >
      {!loading ?
        <div  className={classes["restaurantCardsContainer"]}>
          <div className={classes["restaurantCardsContainer-cards"]}>
            {sortedByRankingRestaurants.map((rest: any) => <RestaurantCards restaurantsProps={rest} />)}
          </div>
        </div> : <div>NOT LOADED</div>}
    </div>
  )

};




