import axios from "axios";
import { CitiesInterface } from "../components/interfaces/citiesInterface";


export const getCurrentCity = async (city:string)=>{
 
  let cities :Array<CitiesInterface> = []
  await axios.get(`https://us1.locationiq.com/v1/search?key=pk.d5406247b75b537f5c0666be1f679ce6&q=${city}&format=json`)
  .then(
    (response:any) => {
      cities = response
      return(response)
    }).catch(
    (error) => {
      return error;
    })
   return cities;
}