import axios from "axios";


import { RestaurantsInterface } from "../components/interfaces/restaurantsInterface";



export const getRestaurants = async (city:string)=>{
let restaurants :Array<RestaurantsInterface> = []
const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
  params: {
    latitude: '-34.64403826288768',
    longitude: '-58.56595262354054',
  },
  headers: {
    'X-RapidAPI-Key': '907180f5dfmshc1893f4b46e66bbp17a16djsnadf45dbe86f9',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  restaurants = response.data
}).catch(function (error) {
	console.error(error);
});
return restaurants;
}


