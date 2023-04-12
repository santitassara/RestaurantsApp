import React from "react";
import Autocomplete from "../components/PlacesAutocompleteComponent/placesAutocomplete";
import Restaurants from "../components/RestaurantsComponent/Restaurants";


const Home: React.FC = () => {
  return(
    <div>
      <Autocomplete/>
      <Restaurants/>
    </div>
  )
}
export default Home